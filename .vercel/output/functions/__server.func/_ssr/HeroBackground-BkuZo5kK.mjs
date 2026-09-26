import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { T as CodeXml, a as Terminal, c as Sparkles, t as Zap, u as Shield, w as Cpu } from "../_libs/lucide-react.mjs";
import { t as Logo } from "./router-sTbCbLXT.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/HeroBackground-BkuZo5kK.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/**
* HeroBackground uses direct DOM manipulation (refs + rAF) instead of useState
* to avoid React re-renders on every mouse move / scroll frame.
* Mouse-tracking spotlight is disabled on touch devices for performance.
*/
function HeroBackground() {
	const spotlightRef = (0, import_react.useRef)(null);
	const orbARef = (0, import_react.useRef)(null);
	const orbBRef = (0, import_react.useRef)(null);
	const badgesLeftRef = (0, import_react.useRef)([]);
	const badgesRightRef = (0, import_react.useRef)([]);
	const codeLayerRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const isTouch = typeof window !== "undefined" && !window.matchMedia("(hover: hover) and (pointer: fine)").matches;
		let rafMouse = 0;
		let rafScroll = 0;
		let mouseX = 50;
		let mouseY = 30;
		let scrollY = 0;
		let ticking = false;
		const onMouseMove = (e) => {
			mouseX = e.clientX / window.innerWidth * 100;
			mouseY = e.clientY / window.innerHeight * 100;
			if (!ticking) {
				rafMouse = requestAnimationFrame(() => {
					const el = spotlightRef.current;
					if (el) {
						el.style.left = `${mouseX}%`;
						el.style.top = `${mouseY}%`;
					}
					ticking = false;
				});
				ticking = true;
			}
		};
		const leftFactors = [
			-.45,
			-.25,
			-.35
		];
		const rightFactors = [
			.35,
			.5,
			.22
		];
		const applyScroll = () => {
			scrollY = window.scrollY;
			if (orbARef.current) orbARef.current.style.transform = `translateY(${scrollY * .25}px)`;
			if (orbBRef.current) orbBRef.current.style.transform = `translateY(${scrollY * .18}px)`;
			badgesLeftRef.current.forEach((el, i) => {
				if (el) el.style.transform = `translateY(${scrollY * (leftFactors[i] ?? 0)}px)`;
			});
			badgesRightRef.current.forEach((el, i) => {
				if (el) el.style.transform = `translateY(${scrollY * (rightFactors[i] ?? 0)}px)`;
			});
			if (codeLayerRef.current) codeLayerRef.current.style.transform = `translateY(${scrollY * -.15}px)`;
		};
		const onScroll = () => {
			cancelAnimationFrame(rafScroll);
			rafScroll = requestAnimationFrame(applyScroll);
		};
		if (!isTouch) window.addEventListener("mousemove", onMouseMove, { passive: true });
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => {
			if (!isTouch) window.removeEventListener("mousemove", onMouseMove);
			window.removeEventListener("scroll", onScroll);
			cancelAnimationFrame(rafMouse);
			cancelAnimationFrame(rafScroll);
		};
	}, []);
	const setLeftBadge = (i) => (el) => {
		badgesLeftRef.current[i] = el;
	};
	const setRightBadge = (i) => (el) => {
		badgesRightRef.current[i] = el;
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "pointer-events-none absolute inset-0 overflow-hidden select-none",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				ref: spotlightRef,
				className: "absolute size-[32rem] sm:size-[45rem] rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/30 via-accent/20 to-transparent blur-3xl opacity-60 will-change-transform",
				style: {
					left: "50%",
					top: "30%",
					transform: "translate(-50%, -50%)"
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-80 animate-[spin_120s_linear_infinite] pointer-events-none mix-blend-overlay",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { className: "w-[40rem] h-[40rem] sm:w-[60rem] sm:h-[60rem] object-contain" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				ref: orbARef,
				className: "absolute -top-24 -left-24 size-[28rem] rounded-full bg-gradient-to-br from-primary/35 via-orange-600/15 to-transparent blur-3xl opacity-75 animate-pulse will-change-transform"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				ref: orbBRef,
				className: "absolute -top-32 -right-32 size-[32rem] rounded-full bg-gradient-to-bl from-accent/25 via-amber-500/15 to-transparent blur-3xl opacity-70 animate-pulse will-change-transform"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				ref: setLeftBadge(0),
				className: "hidden lg:block absolute left-8 top-20 glass-strong p-3.5 rounded-2xl border border-primary/40 shadow-2xl backdrop-blur-xl animate-float opacity-90 will-change-transform",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2.5 font-mono text-xs text-primary-glow font-bold",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeXml, { className: "size-4 text-primary-glow animate-pulse" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "<FusionEngine />" })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				ref: setLeftBadge(1),
				className: "hidden lg:block absolute left-14 top-80 glass p-3 rounded-2xl border border-accent/40 shadow-xl backdrop-blur-lg animate-[float_7s_ease-in-out_infinite_reverse] opacity-80 will-change-transform",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 font-mono text-xs text-accent font-semibold",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cpu, { className: "size-4 text-accent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Neural Model v6.0" })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				ref: setLeftBadge(2),
				className: "hidden lg:block absolute left-10 top-[28rem] glass p-3.5 rounded-2xl border border-emerald-500/40 shadow-xl backdrop-blur-lg animate-float opacity-85 will-change-transform",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2.5 font-mono text-xs text-emerald-400 font-bold",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, { className: "size-4 text-emerald-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "CTF Shield Active" })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				ref: setRightBadge(0),
				className: "hidden lg:block absolute right-12 top-24 glass p-3.5 rounded-2xl border border-amber-500/40 shadow-xl backdrop-blur-lg animate-[float_6s_ease-in-out_infinite_reverse] opacity-90 will-change-transform",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2.5 font-mono text-xs text-amber-400 font-bold",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Terminal, { className: "size-4 text-amber-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "npm run build:live" })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				ref: setRightBadge(1),
				className: "hidden lg:block absolute right-8 top-72 glass-strong p-3 rounded-2xl border border-cyan-400/40 shadow-2xl backdrop-blur-xl animate-float opacity-85 will-change-transform",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 font-mono text-xs text-cyan-400 font-bold",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-4 text-cyan-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Viveka 6.0 Matrix" })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				ref: setRightBadge(2),
				className: "hidden lg:block absolute right-14 top-[26rem] glass p-3.5 rounded-2xl border border-purple-500/40 shadow-xl backdrop-blur-lg animate-[float_8s_ease-in-out_infinite] opacity-80 will-change-transform",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2.5 font-mono text-xs text-purple-400 font-bold",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "size-4 text-purple-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "100% Student-Led" })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				ref: codeLayerRef,
				className: "absolute inset-0 opacity-30 will-change-transform",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "absolute top-16 left-1/4 font-mono text-xs text-primary-glow font-bold animate-[ping_4s_infinite]",
						children: "01010011"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "absolute top-1/3 right-1/4 font-mono text-xs text-accent font-bold animate-[bounce_5s_infinite]",
						children: "// VIVEKA_6.0"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "absolute top-[60%] left-1/3 font-mono text-xs text-emerald-400 font-bold animate-[pulse_3s_infinite]",
						children: "export const club = \"TechFusion\";"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "absolute top-[80%] right-1/3 font-mono text-xs text-amber-300 font-bold animate-[ping_6s_infinite]",
						children: "fn build_future()"
					})
				]
			})
		]
	});
}
//#endregion
export { HeroBackground as t };
