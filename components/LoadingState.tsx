export default function LoadingState() {
  return (
    <section
      className="grid min-h-dvh w-full place-items-center bg-black px-4 text-center text-white"
      role="status"
      aria-live="polite"
      aria-busy="true"
      aria-label="Loading"
    >
      <p>loding screen...</p>
    </section>
  );
}
