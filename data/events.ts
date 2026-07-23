import "server-only";

export type GuildEvent = {
  id: string;
  title: string;
  location: string;
  startDate: string;
  endDate: string;
  href?: string;
};

type StrapiEventFields = {
  event_id?: string;
  event_title?: string;
  event_location?: string;
  event_date_start?: string;
  event_date_end?: string;
  href?: string;
};

type StrapiEvent = StrapiEventFields & {
  id?: number;
  documentId?: string;
  attributes?: StrapiEventFields;
};

type StrapiEventsResponse = {
  data?: StrapiEvent[];
};

const normalizeHref = (href?: string) => {
  const value = href?.trim();
  if (!value) return undefined;

  try {
    const url = new URL(value, "https://www.uoagdg.com");
    return url.protocol === "http:" || url.protocol === "https:"
      ? value
      : undefined;
  } catch {
    return undefined;
  }
};

const normalizeEvent = (entry: StrapiEvent): GuildEvent | null => {
  const fields = entry.attributes ?? entry;

  if (
    !fields.event_title ||
    !fields.event_location ||
    !fields.event_date_start ||
    !fields.event_date_end
  ) {
    return null;
  }

  return {
    id:
      fields.event_id ??
      entry.documentId ??
      String(entry.id ?? fields.event_date_start),
    title: fields.event_title,
    location: fields.event_location,
    startDate: fields.event_date_start,
    endDate: fields.event_date_end,
    href: normalizeHref(fields.href),
  };
};

export async function getEvents(): Promise<GuildEvent[]> {
  const token = process.env.STRAPI_API_TOKEN;
  const apiUrl = process.env.STRAPI_API_URL ?? "https://cms.uoagdg.com";

  if (!token) return [];

  try {
    const url = new URL("/api/events", apiUrl);
    url.searchParams.set("sort", "event_date_start:asc");
    url.searchParams.set("pagination[pageSize]", "100");

    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      next: { revalidate: 300 },
    });

    if (!response.ok) return [];

    const payload = (await response.json()) as StrapiEventsResponse;

    return (payload.data ?? [])
      .map(normalizeEvent)
      .filter((event): event is GuildEvent => event !== null);
  } catch {
    return [];
  }
}

export async function getUpcomingEvents(): Promise<GuildEvent[]> {
  const events = await getEvents();
  const currentTimestamp = Date.now();

  return events
    .filter((event) => new Date(event.endDate).getTime() >= currentTimestamp)
    .sort(
      (first, second) =>
        new Date(first.startDate).getTime() -
        new Date(second.startDate).getTime(),
    );
}
