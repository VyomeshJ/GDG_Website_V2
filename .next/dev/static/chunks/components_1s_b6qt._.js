(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/JoinOverlay.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>JoinOverlay
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const membershipCards = [
    {
        title: "New members",
        href: "https://docs.google.com/forms/d/e/1FAIpQLSdPH6E81By17CAnS-qLgGFvA3zdNR7k9PieZzknwqFOjG6CZQ/viewform",
        image: "/assets/g_dude.png",
        width: 393,
        height: 393,
        background: "bg-[#526646]",
        titlePosition: "top-7 right-5 text-right max-[700px]:top-3 max-[700px]:right-4 max-[700px]:left-4 max-[700px]:max-w-none max-[700px]:text-center",
        selectionPosition: "inset-x-0 bottom-0 h-[68%] rounded-[16px]"
    },
    {
        title: "Returning members",
        href: "https://docs.google.com/forms/d/e/1FAIpQLSe45-GrFQn55PWSOduzYrMiJ3_vpm_sHCfFuNLeVSm6ueNNEA/viewform",
        image: "/assets/r_dude.png",
        width: 361,
        height: 361,
        background: "bg-[#874657]",
        titlePosition: "right-4 bottom-5 left-4 text-center max-[700px]:right-4 max-[700px]:bottom-3 max-[700px]:left-4 max-[700px]:max-w-none",
        selectionPosition: "inset-x-0 top-0 h-[68%] rounded-[16px]"
    },
    {
        title: "Executive members",
        href: "https://docs.google.com/forms/d/e/1FAIpQLSdGx8fPm7C6vBPbaHIpBz2xIGJnc9PzTFp8lfXRu5CWEx4PxA/viewform",
        image: "/assets/b_dude.png",
        width: 393,
        height: 393,
        background: "bg-[#46527c]",
        titlePosition: "top-7 right-4 left-4 text-center max-[700px]:top-3 max-[700px]:right-4 max-[700px]:left-4 max-[700px]:max-w-none",
        selectionPosition: "inset-x-0 bottom-0 h-[68%] rounded-[16px]"
    }
];
function JoinOverlay({ open, onClose }) {
    _s();
    membershipCards.forEach((card)=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["preload"])(card.image, {
            as: "image",
            fetchPriority: "high"
        });
    });
    const overlayRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const closeButtonRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "JoinOverlay.useEffect": ()=>{
            if (!open) return;
            const previouslyFocused = document.activeElement;
            const previousOverflow = document.body.style.overflow;
            document.body.style.overflow = "hidden";
            closeButtonRef.current?.focus();
            const handleKeyDown = {
                "JoinOverlay.useEffect.handleKeyDown": (event)=>{
                    if (event.key === "Escape") {
                        event.preventDefault();
                        onClose();
                    }
                    if (event.key === "Tab") {
                        const focusableElements = Array.from(overlayRef.current?.querySelectorAll('button:not([disabled]), a[href]') ?? []);
                        const firstElement = focusableElements[0];
                        const lastElement = focusableElements.at(-1);
                        if (event.shiftKey && document.activeElement === firstElement) {
                            event.preventDefault();
                            lastElement?.focus();
                        } else if (!event.shiftKey && document.activeElement === lastElement) {
                            event.preventDefault();
                            firstElement?.focus();
                        }
                    }
                }
            }["JoinOverlay.useEffect.handleKeyDown"];
            window.addEventListener("keydown", handleKeyDown);
            return ({
                "JoinOverlay.useEffect": ()=>{
                    document.body.style.overflow = previousOverflow;
                    window.removeEventListener("keydown", handleKeyDown);
                    previouslyFocused?.focus();
                }
            })["JoinOverlay.useEffect"];
        }
    }["JoinOverlay.useEffect"], [
        onClose,
        open
    ]);
    if (!open || typeof document === "undefined") return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPortal"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: overlayRef,
        className: "fixed inset-0 z-200 overflow-y-auto bg-black/80 px-5 py-10 backdrop-blur-[2px] max-[700px]:px-3 max-[700px]:py-16",
        onClick: (event)=>{
            if (event.currentTarget === event.target) onClose();
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                ref: closeButtonRef,
                className: "fixed top-4 right-5 z-10 grid size-16 cursor-pointer place-items-center text-7xl leading-none font-black text-white outline-none transition-colors duration-150 hover:text-[#12caca] focus-visible:text-[#12caca] max-[700px]:top-2 max-[700px]:right-2 max-[700px]:size-13 max-[700px]:text-6xl",
                type: "button",
                "aria-label": "Close join information",
                onClick: onClose,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    "aria-hidden": "true",
                    children: "×"
                }, void 0, false, {
                    fileName: "[project]/components/JoinOverlay.tsx",
                    lineNumber: 116,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/JoinOverlay.tsx",
                lineNumber: 109,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex min-h-full items-center justify-center max-[700px]:items-start",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative w-full max-w-[920px] rounded-[18px] border border-white/10 bg-[#292929] p-[clamp(18px,3vw,34px)] text-white shadow-[0_24px_80px_rgba(0,0,0,.7)]",
                    role: "dialog",
                    "aria-modal": "true",
                    "aria-label": "Join the Game Developers Guild",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "sr-only",
                            children: "Join the Game Developers Guild"
                        }, void 0, false, {
                            fileName: "[project]/components/JoinOverlay.tsx",
                            lineNumber: 126,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-3 gap-[clamp(12px,2.5vw,28px)] max-[700px]:grid-cols-1",
                            children: membershipCards.map((card)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    className: `group relative min-h-[310px] cursor-pointer overflow-hidden rounded-[16px] outline-none transition-transform duration-100 hover:-translate-y-1 focus-visible:-translate-y-1 focus-visible:ring-3 focus-visible:ring-white ${card.background} max-[700px]:min-h-[190px]`,
                                    href: card.href,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    "aria-label": `${card.title} application form (opens in a new tab)`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `pointer-events-none absolute z-10 overflow-hidden bg-transparent transition-colors duration-100 [transition-timing-function:steps(2)] group-hover:bg-white/12 group-focus-visible:bg-white/12 ${card.selectionPosition}`,
                                            "aria-hidden": "true",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                className: "absolute top-1/2 left-1/2 z-10 h-[82%] w-[82%] -translate-x-1/2 -translate-y-1/2 object-contain [image-rendering:pixelated]",
                                                src: card.image,
                                                alt: "",
                                                width: card.width,
                                                height: card.height,
                                                unoptimized: true,
                                                "aria-hidden": "true"
                                            }, void 0, false, {
                                                fileName: "[project]/components/JoinOverlay.tsx",
                                                lineNumber: 142,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/JoinOverlay.tsx",
                                            lineNumber: 138,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: `pointer-events-none absolute z-20 max-w-[70%] font-boxel text-[clamp(16px,2vw,25px)] leading-[1.05] font-black ${card.titlePosition} max-[700px]:text-xl`,
                                            children: card.title
                                        }, void 0, false, {
                                            fileName: "[project]/components/JoinOverlay.tsx",
                                            lineNumber: 152,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, card.title, true, {
                                    fileName: "[project]/components/JoinOverlay.tsx",
                                    lineNumber: 130,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/JoinOverlay.tsx",
                            lineNumber: 128,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-[clamp(22px,3vw,34px)] text-center text-[clamp(17px,2.2vw,27px)] leading-[1.35] font-black uppercase",
                            children: [
                                "Anyone can join, even if you're a grad or non-UoA!",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/components/JoinOverlay.tsx",
                                    lineNumber: 163,
                                    columnNumber: 13
                                }, this),
                                "Membership is just $5 per sem~"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/JoinOverlay.tsx",
                            lineNumber: 161,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute top-full left-1/2 -translate-x-1/2 border-x-[18px] border-t-[24px] border-x-transparent border-t-[#292929]",
                            "aria-hidden": "true"
                        }, void 0, false, {
                            fileName: "[project]/components/JoinOverlay.tsx",
                            lineNumber: 167,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/JoinOverlay.tsx",
                    lineNumber: 120,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/JoinOverlay.tsx",
                lineNumber: 119,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/JoinOverlay.tsx",
        lineNumber: 102,
        columnNumber: 5
    }, this), document.body);
}
_s(JoinOverlay, "5KqUb+G0mcs0Vj/+nD2G6gfckpg=");
_c = JoinOverlay;
var _c;
__turbopack_context__.k.register(_c, "JoinOverlay");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Hero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$JoinOverlay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/JoinOverlay.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function Hero() {
    _s();
    const [joinOpen, setJoinOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                "data-section": "home",
                className: "relative isolate min-h-[110svh] scroll-mt-24 overflow-hidden bg-black text-white max-[760px]:scroll-mt-22",
                "aria-label": "Game Developer Guild",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 -z-2 overflow-hidden bg-[#030506]",
                        "aria-hidden": "true",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                className: "absolute inset-0 z-0 h-full w-full scale-[1.08] object-cover object-center [image-rendering:pixelated]",
                                src: "/assets/hero-bg.png",
                                alt: "",
                                width: 769,
                                height: 439,
                                priority: true,
                                unoptimized: true
                            }, void 0, false, {
                                fileName: "[project]/components/Hero.tsx",
                                lineNumber: 19,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pointer-events-none absolute inset-0 z-1 scale-x-[1.35] bg-[radial-gradient(circle_at_50%_42%,transparent_0%,transparent_28%,rgba(0,0,0,1)_50%,#000_92%)] max-[760px]:bg-[radial-gradient(circle_at_50%_32%,transparent_0%,transparent_28%,rgba(0,0,0,1)_40%,#000_92%)]",
                                "aria-hidden": "true"
                            }, void 0, false, {
                                fileName: "[project]/components/Hero.tsx",
                                lineNumber: 28,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Hero.tsx",
                        lineNumber: 18,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-[51%] left-[clamp(24px,9vw,140px)] z-2 max-w-[640px] -translate-y-[35%] max-[760px]:top-[64%] max-[760px]:right-6 max-[760px]:translate-y-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mb-[13px] text-[clamp(11px,1.25vw,16px)] font-black tracking-[.08em] text-[#10b8b5] uppercase",
                                children: "Auckland Uni's Game Dev Club"
                            }, void 0, false, {
                                fileName: "[project]/components/Hero.tsx",
                                lineNumber: 38,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "m-0 font-boxel text-[clamp(33.6px,5.6vw,80px)] leading-[.9] font-black tracking-[-.065em]",
                                children: "Game Developer Guild!"
                            }, void 0, false, {
                                fileName: "[project]/components/Hero.tsx",
                                lineNumber: 39,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-6 flex gap-3 max-[360px]:flex-col",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "group grid h-19 w-43 cursor-pointer max-[760px]:h-16 max-[760px]:w-[145px]",
                                        type: "button",
                                        "aria-label": "Join the Game Developers Guild",
                                        "aria-haspopup": "dialog",
                                        "aria-expanded": joinOpen,
                                        onClick: ()=>setJoinOpen(true),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                className: "col-start-1 row-start-1 block h-19 w-43 opacity-100 transition-opacity duration-75 [image-rendering:pixelated] [transition-timing-function:steps(1)] group-hover:opacity-0 group-focus-visible:opacity-0 max-[760px]:h-16 max-[760px]:w-[145px]",
                                                src: "/assets/join-button.gif",
                                                alt: "Join us",
                                                width: 43,
                                                height: 19,
                                                unoptimized: true
                                            }, void 0, false, {
                                                fileName: "[project]/components/Hero.tsx",
                                                lineNumber: 49,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                className: "col-start-1 row-start-1 block h-19 w-43 opacity-0 transition-opacity duration-75 [image-rendering:pixelated] [transition-timing-function:steps(1)] group-hover:opacity-100 group-focus-visible:opacity-100 max-[760px]:h-16 max-[760px]:w-[145px]",
                                                src: "/assets/join-button-hover.png",
                                                alt: "",
                                                width: 43,
                                                height: 19,
                                                unoptimized: true,
                                                "aria-hidden": "true"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Hero.tsx",
                                                lineNumber: 50,
                                                columnNumber: 13
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Hero.tsx",
                                        lineNumber: 41,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        className: "group grid h-19 w-43 max-[760px]:h-16 max-[760px]:w-[145px]",
                                        href: "https://discord.com/invite/cnmjh8NQDT",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        "aria-label": "Join the Game Developers Guild on Discord",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                className: "col-start-1 row-start-1 block h-19 w-43 opacity-100 transition-opacity duration-75 [image-rendering:pixelated] [transition-timing-function:steps(1)] group-hover:opacity-0 group-focus-visible:opacity-0 max-[760px]:h-16 max-[760px]:w-[145px]",
                                                src: "/assets/discord-button.gif",
                                                alt: "Join us on Discord",
                                                width: 43,
                                                height: 19,
                                                unoptimized: true
                                            }, void 0, false, {
                                                fileName: "[project]/components/Hero.tsx",
                                                lineNumber: 60,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                className: "col-start-1 row-start-1 block h-19 w-43 opacity-0 transition-opacity duration-75 [image-rendering:pixelated] [transition-timing-function:steps(1)] group-hover:opacity-100 group-focus-visible:opacity-100 max-[760px]:h-16 max-[760px]:w-[145px]",
                                                src: "/assets/discord-button-hover.png",
                                                alt: "",
                                                width: 43,
                                                height: 19,
                                                unoptimized: true,
                                                "aria-hidden": "true"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Hero.tsx",
                                                lineNumber: 61,
                                                columnNumber: 13
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Hero.tsx",
                                        lineNumber: 53,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Hero.tsx",
                                lineNumber: 40,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Hero.tsx",
                        lineNumber: 37,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pointer-events-none absolute inset-x-0 bottom-0 z-1 h-[clamp(140px,16vw,220px)] bg-[linear-gradient(to_bottom,transparent_0%,rgba(0,0,0,.35)_42%,#000_100%)]",
                        "aria-hidden": "true"
                    }, void 0, false, {
                        fileName: "[project]/components/Hero.tsx",
                        lineNumber: 65,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Hero.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$JoinOverlay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                open: joinOpen,
                onClose: ()=>setJoinOpen(false)
            }, void 0, false, {
                fileName: "[project]/components/Hero.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(Hero, "dDNqw1nU9ECvVjmvmd5VGXWcT20=");
_c = Hero;
var _c;
__turbopack_context__.k.register(_c, "Hero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Navbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const navigation = [
    "Our story",
    "Games",
    "Events",
    "Tutorials"
];
const sectionFor = (item)=>item === "Our story" ? "who-we-are" : item.toLowerCase();
function NavLogo({ mobile = false, onNavigate }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: `group relative grid cursor-pointer place-items-center ${mobile ? "h-16 w-20" : "h-18 w-28"}`,
        type: "button",
        "aria-label": "Game Developers Guild — home",
        onClick: onNavigate,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                className: `${mobile ? "h-14 w-20" : "h-[67px] w-28"} col-start-1 row-start-1 object-contain opacity-100 drop-shadow-[0_8px_12px_rgba(0,0,0,.75)] transition-opacity duration-100 [transition-timing-function:steps(2)] group-hover:opacity-0 group-focus-visible:opacity-0`,
                src: "/assets/laser-logo.svg",
                alt: "",
                width: 112,
                height: 67,
                priority: true
            }, void 0, false, {
                fileName: "[project]/components/Navbar.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                className: `${mobile ? "h-[65px] w-[94px]" : "h-[85.8px] w-[124.8px]"} col-start-1 row-start-1 translate-z-0 object-contain opacity-0 transition-opacity duration-100 [image-rendering:pixelated] [transition-timing-function:steps(2)] group-hover:opacity-100 group-focus-visible:opacity-100`,
                src: "/assets/pixelated-gdg-logo.png",
                alt: "",
                width: 48,
                height: 33,
                priority: true,
                unoptimized: true
            }, void 0, false, {
                fileName: "[project]/components/Navbar.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Navbar.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
_c = NavLogo;
function Navbar() {
    _s();
    const [menuOpen, setMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const navigateTo = (section)=>{
        setMenuOpen(false);
        document.querySelector(`[data-section="${section}"]`)?.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            const desktopQuery = window.matchMedia("(min-width: 761px)");
            const closeOnDesktop = {
                "Navbar.useEffect.closeOnDesktop": (event)=>{
                    if (event.matches) setMenuOpen(false);
                }
            }["Navbar.useEffect.closeOnDesktop"];
            const closeOnEscape = {
                "Navbar.useEffect.closeOnEscape": (event)=>{
                    if (event.key === "Escape") setMenuOpen(false);
                }
            }["Navbar.useEffect.closeOnEscape"];
            desktopQuery.addEventListener("change", closeOnDesktop);
            window.addEventListener("keydown", closeOnEscape);
            return ({
                "Navbar.useEffect": ()=>{
                    desktopQuery.removeEventListener("change", closeOnDesktop);
                    window.removeEventListener("keydown", closeOnEscape);
                }
            })["Navbar.useEffect"];
        }
    }["Navbar.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: `fixed inset-x-0 top-0 isolate z-100 px-[clamp(20px,7vw,96px)] py-3 font-boxel text-white transition-colors duration-200 ${menuOpen ? "bg-[#030506]" : "bg-transparent"}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `pointer-events-none absolute inset-x-0 top-0 -z-10 h-[280px] bg-[linear-gradient(to_bottom,rgba(3,5,6,.97)_0%,rgba(3,5,6,.84)_22%,rgba(3,5,6,.62)_42%,rgba(3,5,6,.38)_62%,rgba(3,5,6,.16)_80%,transparent_100%)] transition-opacity duration-300 max-[760px]:h-[220px] ${menuOpen ? "opacity-0" : "opacity-100"}`,
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/components/Navbar.tsx",
                lineNumber: 86,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                "aria-label": "Main navigation",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mx-auto hidden w-full max-w-[920px] grid-cols-[1fr_auto_1fr] items-center gap-7 min-[761px]:grid",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-end gap-[clamp(18px,3vw,42px)]",
                                children: navigation.slice(0, 2).map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "cursor-pointer text-[13px] font-extrabold tracking-[.08em] uppercase transition-[color,transform] duration-200 hover:-translate-y-0.5 hover:text-[#12caca] focus-visible:text-[#12caca] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#12caca]",
                                        type: "button",
                                        onClick: ()=>navigateTo(sectionFor(item)),
                                        children: item
                                    }, item, false, {
                                        fileName: "[project]/components/Navbar.tsx",
                                        lineNumber: 96,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/Navbar.tsx",
                                lineNumber: 94,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavLogo, {
                                onNavigate: ()=>navigateTo("home")
                            }, void 0, false, {
                                fileName: "[project]/components/Navbar.tsx",
                                lineNumber: 107,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-start gap-[clamp(18px,3vw,42px)]",
                                children: navigation.slice(2).map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "cursor-pointer text-[13px] font-extrabold tracking-[.08em] uppercase transition-[color,transform] duration-200 hover:-translate-y-0.5 hover:text-[#12caca] focus-visible:text-[#12caca] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#12caca]",
                                        type: "button",
                                        onClick: ()=>navigateTo(sectionFor(item)),
                                        children: item
                                    }, item, false, {
                                        fileName: "[project]/components/Navbar.tsx",
                                        lineNumber: 111,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/Navbar.tsx",
                                lineNumber: 109,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Navbar.tsx",
                        lineNumber: 93,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mx-auto flex h-16 w-full items-center justify-between min-[761px]:hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavLogo, {
                                mobile: true,
                                onNavigate: ()=>navigateTo("home")
                            }, void 0, false, {
                                fileName: "[project]/components/Navbar.tsx",
                                lineNumber: 124,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "group grid size-12 place-items-center text-white outline-none",
                                type: "button",
                                "aria-expanded": menuOpen,
                                "aria-label": menuOpen ? "Close navigation menu" : "Open navigation menu",
                                onClick: ()=>setMenuOpen((open)=>!open),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "relative block h-5 w-6",
                                    "aria-hidden": "true",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `absolute top-0 left-0 h-0.5 w-6 bg-current transition-transform duration-200 ${menuOpen ? "translate-y-[9px] rotate-45" : ""}`
                                        }, void 0, false, {
                                            fileName: "[project]/components/Navbar.tsx",
                                            lineNumber: 134,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `absolute top-[9px] left-0 h-0.5 w-6 bg-current transition-opacity duration-200 ${menuOpen ? "opacity-0" : "opacity-100"}`
                                        }, void 0, false, {
                                            fileName: "[project]/components/Navbar.tsx",
                                            lineNumber: 139,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `absolute bottom-0 left-0 h-0.5 w-6 bg-current transition-transform duration-200 ${menuOpen ? "-translate-y-[9px] -rotate-45" : ""}`
                                        }, void 0, false, {
                                            fileName: "[project]/components/Navbar.tsx",
                                            lineNumber: 144,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Navbar.tsx",
                                    lineNumber: 133,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/Navbar.tsx",
                                lineNumber: 126,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Navbar.tsx",
                        lineNumber: 123,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `absolute inset-x-0 top-full grid overflow-hidden bg-[#030506] transition-[grid-template-rows,opacity] duration-300 min-[761px]:hidden ${menuOpen ? "grid-rows-[1fr] border-t border-white/15 opacity-100" : "pointer-events-none grid-rows-[0fr] opacity-0"}`,
                        "aria-hidden": !menuOpen,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "min-h-0 overflow-hidden",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-5 py-3",
                                children: navigation.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "flex w-full cursor-pointer items-center border-b border-white/15 px-2 py-4 text-sm font-extrabold tracking-[.1em] uppercase transition-colors last:border-b-0 hover:text-[#12caca] focus-visible:text-[#12caca] focus-visible:outline-2 focus-visible:outline-[#12caca]",
                                        type: "button",
                                        tabIndex: menuOpen ? 0 : -1,
                                        onClick: ()=>navigateTo(sectionFor(item)),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: item
                                        }, void 0, false, {
                                            fileName: "[project]/components/Navbar.tsx",
                                            lineNumber: 171,
                                            columnNumber: 19
                                        }, this)
                                    }, item, false, {
                                        fileName: "[project]/components/Navbar.tsx",
                                        lineNumber: 164,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/Navbar.tsx",
                                lineNumber: 162,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/Navbar.tsx",
                            lineNumber: 161,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Navbar.tsx",
                        lineNumber: 153,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Navbar.tsx",
                lineNumber: 92,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Navbar.tsx",
        lineNumber: 81,
        columnNumber: 5
    }, this);
}
_s(Navbar, "YpXa3kgiBOFhFYWp8S78i7Nbdv8=");
_c1 = Navbar;
var _c, _c1;
__turbopack_context__.k.register(_c, "NavLogo");
__turbopack_context__.k.register(_c1, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ScrollArcadeController.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ScrollArcadeController
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/motion/dist/es/react.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-scroll.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-spring.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function ScrollArcadeController() {
    _s();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { scrollYProgress } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"])({
        target: containerRef,
        offset: [
            "center 92%",
            "center 55%"
        ]
    });
    const assemblyProgress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"])(scrollYProgress, {
        stiffness: 220,
        damping: 28,
        mass: 0.45
    });
    const joystickY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(assemblyProgress, [
        0,
        1
    ], [
        -38,
        0
    ]);
    const baseY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(assemblyProgress, [
        0,
        1
    ], [
        30,
        0
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: "relative aspect-[197/240] w-full max-w-[320px] max-[760px]:w-[min(62vw,240px)]",
        role: "img",
        "aria-label": "Arcade joystick connecting to its base",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                className: "absolute top-[2.6%] left-[29%] z-30 w-[42.13%] will-change-transform",
                style: {
                    y: joystickY
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    className: "block h-auto w-full",
                    src: "/assets/arcade-joystick.svg",
                    alt: "",
                    width: 83,
                    height: 126,
                    unoptimized: true,
                    "aria-hidden": "true"
                }, void 0, false, {
                    fileName: "[project]/components/ScrollArcadeController.tsx",
                    lineNumber: 40,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ScrollArcadeController.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                className: "absolute top-[38%] left-0 z-20 w-full will-change-transform",
                style: {
                    y: baseY
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    className: "block h-auto w-full",
                    src: "/assets/arcade-base.svg",
                    alt: "",
                    width: 197,
                    height: 149,
                    unoptimized: true,
                    "aria-hidden": "true"
                }, void 0, false, {
                    fileName: "[project]/components/ScrollArcadeController.tsx",
                    lineNumber: 55,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ScrollArcadeController.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ScrollArcadeController.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
_s(ScrollArcadeController, "Rbrsy9Gl2+hj3mXKII7Dj+r1Q9s=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"]
    ];
});
_c = ScrollArcadeController;
var _c;
__turbopack_context__.k.register(_c, "ScrollArcadeController");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=components_1s_b6qt._.js.map