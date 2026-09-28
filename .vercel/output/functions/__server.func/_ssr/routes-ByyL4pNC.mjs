import { r as __toESM } from "../_runtime.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { _ as Link, v as require_react_dom } from "../_libs/@tanstack/react-router+[...].mjs";
import { D as Cloud, E as CodeXml, F as ArrowUpRight, I as ArrowRight, N as BookOpen, O as CircleCheck, P as Award, S as Github, T as Cpu, a as Terminal, c as Sparkles, d as ShieldCheck, g as MapPin, i as UserPlus, j as CalendarDays, l as Smartphone, p as Rocket, r as Users, s as Star, t as Zap, u as Shield, w as ExternalLink } from "../_libs/lucide-react.mjs";
import { a as stats, c as Logo, n as club, r as domains } from "./router-D3nFJ7No.mjs";
import { i as useCountUp, n as Section, r as SectionHeading, t as Reveal } from "./Section-DVbDmvsO.mjs";
import { t as CTABanner } from "./CTABanner-ByIzD7-T.mjs";
import { t as GlowCard } from "./GlowCard-BSqra6Jb.mjs";
import { a as formatEventDate, i as featuredEvent } from "./events-DwZD37OF.mjs";
import { t as galleryPhotos } from "./gallery-DXVzHa-j.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-ByyL4pNC.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var import_react_dom = require_react_dom();
function StatCounter({ value, prefix = "", suffix = "", label, className }) {
	const { ref, value: current, settled } = useCountUp(value);
	const formattedVal = prefix && current < 10 ? `${prefix}${current}` : current;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("text-center sm:text-left", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: cn("font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl", settled && "animate-flicker"),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				ref,
				children: formattedVal
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-primary-glow",
				children: suffix
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-2 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground",
			children: label
		})]
	});
}
var projects = [
	{
		id: "neuro-fusion",
		title: "NeuroFusion AI Assistant",
		domain: "AI / ML Domain",
		description: "A privacy-focused local RAG assistant trained on university lecture slides and exam papers to help students revise.",
		tags: [
			"PyTorch",
			"LangChain",
			"FastAPI",
			"VectorDB"
		],
		stars: 142,
		githubUrl: "https://github.com",
		demoUrl: "https://example.com",
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cpu, { className: "size-5 text-primary-glow" })
	},
	{
		id: "cybershield-cli",
		title: "CyberShield CLI Guard",
		domain: "Cybersecurity Domain",
		description: "Automated vulnerability scanner and git secret detector built specifically for student development pipelines.",
		tags: [
			"Rust",
			"Security",
			"CLI",
			"Docker"
		],
		stars: 98,
		githubUrl: "https://github.com",
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "size-5 text-accent" })
	},
	{
		id: "unicampus-mobile",
		title: "UniCampus Mobile Ecosystem",
		domain: "Mobile Domain",
		description: "All-in-one Flutter campus app with real-time class schedule tracking, club events feed, and peer notes sharing.",
		tags: [
			"Flutter",
			"Firebase",
			"Dart",
			"Tailwind"
		],
		stars: 215,
		githubUrl: "https://github.com",
		demoUrl: "https://example.com",
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Smartphone, { className: "size-5 text-emerald-400" })
	},
	{
		id: "cloudpulse-infra",
		title: "CloudPulse Infrastructure Matrix",
		domain: "Cloud & DevOps",
		description: "Self-hosted Kubernetes deployment matrix used by Tech Fusion Club to host 20+ student apps effortlessly.",
		tags: [
			"Kubernetes",
			"Docker",
			"Terraform",
			"Go"
		],
		stars: 84,
		githubUrl: "https://github.com",
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cloud, { className: "size-5 text-cyan-400" })
	}
];
function ProjectsShowcase() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid gap-6 sm:grid-cols-2",
		children: projects.map((project) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlowCard, {
			className: "glass lift group flex flex-col justify-between rounded-2xl p-6 transition-all duration-300 hover:border-primary-glow/50",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "rounded-xl border border-border bg-surface-strong p-2.5",
						children: project.icon
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-lg font-bold text-foreground transition-colors group-hover:text-primary-glow",
						children: project.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-mono text-[11px] text-muted-foreground",
						children: project.domain
					})] })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-1 rounded-full border border-border/60 bg-surface px-2.5 py-1 font-mono text-[11px] text-amber-400",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "size-3 fill-amber-400 text-amber-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: project.stars })]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-sm leading-relaxed text-muted-foreground",
				children: project.description
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 pt-4 border-t border-border/50 flex items-center justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-1.5",
					children: project.tags.map((tag) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "rounded-full border border-border bg-surface px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground",
						children: tag
					}, tag))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: project.githubUrl,
						target: "_blank",
						rel: "noreferrer",
						className: "rounded-lg p-2 text-muted-foreground hover:bg-surface-strong hover:text-foreground transition-colors",
						title: "View Code on GitHub",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, { className: "size-4" })
					}), project.demoUrl && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: project.demoUrl,
						target: "_blank",
						rel: "noreferrer",
						className: "rounded-lg p-2 text-muted-foreground hover:bg-surface-strong hover:text-primary-glow transition-colors",
						title: "Live Preview",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "size-4" })
					})]
				})]
			})]
		}, project.id))
	});
}
var milestones = [
	{
		step: "PHASE 01",
		title: "Onboarding & Domain Selection",
		quarter: "AUG - SEP",
		description: "Orientation week, domain diagnostic test, and 1-on-1 mentor assignment.",
		highlights: [
			"Orientation Keynote",
			"Domain Diagnostic",
			"1-on-1 Mentor Allocation"
		],
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserPlus, { className: "size-5 text-primary-glow" })
	},
	{
		step: "PHASE 02",
		title: "Deep-Dive Bootcamps & Build Nights",
		quarter: "OCT - DEC",
		description: "Hands-on domain workshops, weekly build nights, and mini-project submissions.",
		highlights: [
			"8 Domain Bootcamps",
			"Weekly Build Nights",
			"Git & CI/CD Certification"
		],
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, { className: "size-5 text-accent" })
	},
	{
		step: "PHASE 03",
		title: "SIH Hackathon & Project Incubation",
		quarter: "JAN - MAR",
		description: "Participate in Smart India Hackathon campus rounds and build production-ready projects in teams.",
		highlights: [
			"SIH Internal Hackathon",
			"Live Project Demos",
			"National Level Pitching"
		],
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Rocket, { className: "size-5 text-emerald-400" })
	},
	{
		step: "PHASE 04",
		title: "Viveka 6.0 Annual Fest & Leadership",
		quarter: "APR - MAY",
		description: "Organize the university's flagship technical festival and step into core leadership roles.",
		highlights: [
			"Viveka 6.0 Flagship Fest",
			"Harmony Tech-Culture Expo",
			"Alumni Placement Network"
		],
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, { className: "size-5 text-cyan-400" })
	}
];
function ClubRoadmap() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative mx-auto max-w-5xl",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hidden lg:block absolute left-1/2 top-4 bottom-4 w-0.5 -translate-x-1/2 bg-gradient-to-b from-primary-glow via-accent to-primary/20 opacity-40" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "space-y-8 lg:space-y-12",
			children: milestones.map((m, idx) => {
				const isEven = idx % 2 === 0;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: `relative flex flex-col lg:flex-row items-center gap-8 ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "hidden lg:flex absolute left-1/2 -translate-x-1/2 z-10 size-10 rounded-full border-2 border-primary-glow bg-card items-center justify-center shadow-[0_0_15px_rgba(217,72,15,0.5)]",
						children: m.icon
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "w-full lg:w-[calc(50%-2.5rem)]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlowCard, {
							className: "glass lift rounded-2xl p-6 sm:p-7 border border-border hover:border-primary-glow/60 transition-all",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between gap-4 mb-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-mono text-xs uppercase tracking-widest text-primary-glow font-bold",
										children: m.step
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-mono text-[11px] px-2.5 py-0.5 rounded-full border border-border bg-surface text-muted-foreground",
										children: m.quarter
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-xl font-bold text-foreground",
									children: m.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2.5 text-sm text-muted-foreground leading-relaxed",
									children: m.description
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-4 pt-3 border-t border-border/40 flex flex-wrap gap-2",
									children: m.highlights.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "inline-flex items-center gap-1 font-mono text-[10px] text-foreground/80 bg-surface-strong px-2.5 py-1 rounded-md",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-3 text-emerald-400" }), h]
									}, h))
								})
							]
						})
					})]
				}, m.step);
			})
		})]
	});
}
var pillars = [
	{
		number: "01",
		title: "Weekly Hands-on Build Nights",
		subtitle: "Shipping Code Over Slideware",
		description: "Every Thursday evening, members gather in the computer labs to write code, debug real-world applications, and collaborate on cross-domain projects.",
		tags: [
			"Build Nights",
			"Peer Coding",
			"Live Demos"
		],
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeXml, { className: "size-6 text-primary-glow" })
	},
	{
		number: "02",
		title: "1-on-1 Senior Mentorship Ladder",
		subtitle: "From Beginner to Domain Lead",
		description: "Every junior is matched with a senior mentor inside their domain for code reviews, project guidance, and technical career advice.",
		tags: [
			"Code Review",
			"Career Prep",
			"1-on-1 Help"
		],
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "size-6 text-accent" })
	},
	{
		number: "03",
		title: "Production Shipping & Open Source",
		subtitle: "Real Repositories, Real Users",
		description: "Members leave university with deployed web apps, open-source pull requests, and production code that interviewers actually ask about.",
		tags: [
			"GitHub Repos",
			"Open Source",
			"Public Deploy"
		],
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Terminal, { className: "size-6 text-emerald-400" })
	},
	{
		number: "04",
		title: "Flagship Hackathons & Competitions",
		subtitle: "Organize & Compete at Scale",
		description: "Lead and participate in Viveka 6.0, Smart India Hackathon campus prep, CTFs, and intra-college tech-culture expos.",
		tags: [
			"Viveka 6.0",
			"SIH Prep",
			"CTF Gauntlets"
		],
		icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, { className: "size-6 text-cyan-400" })
	}
];
var clamp = (value, min = 0, max = 1) => Math.min(max, Math.max(min, value));
var smoothStep = (value) => {
	const t = clamp(value);
	return t * t * (3 - 2 * t);
};
function PillarsSection() {
	const sectionRef = (0, import_react.useRef)(null);
	const cardsRef = (0, import_react.useRef)([]);
	const progressRef = (0, import_react.useRef)(null);
	const counterRef = (0, import_react.useRef)(null);
	const rafRef = (0, import_react.useRef)(null);
	const settleTimerRef = (0, import_react.useRef)(null);
	const snappingRef = (0, import_react.useRef)(false);
	(0, import_react.useEffect)(() => {
		const section = sectionRef.current;
		if (!section) return;
		const cards = cardsRef.current.filter(Boolean);
		if (cards.length !== pillars.length) return;
		const COMMIT_POINT = .5;
		const CHAPTERS = pillars.length;
		const getMetrics = () => {
			const rect = section.getBoundingClientRect();
			const distance = Math.max(1, section.offsetHeight - window.innerHeight);
			const overallProgress = clamp(-rect.top / distance);
			const scaled = overallProgress * CHAPTERS;
			const chapter = Math.min(CHAPTERS - 1, Math.floor(Math.min(scaled, CHAPTERS - 1e-6)));
			return {
				overallProgress,
				distance,
				chapter,
				localProgress: clamp(scaled - chapter)
			};
		};
		const render = () => {
			const { overallProgress, chapter, localProgress } = getMetrics();
			cards.forEach((card, index) => {
				let x = 0;
				let y = 0;
				let scale = 1;
				let opacity = 0;
				let zIndex = 10 + index;
				if (index < chapter) {
					opacity = 1;
					scale = 1;
					x = 0;
					y = 0;
					zIndex = 30 + index;
				} else if (index === chapter) {
					const entrance = smoothStep(localProgress);
					if (index === 0) {
						x = -110 + 110 * entrance;
						y = 0;
						scale = .74 + .26 * entrance;
					} else {
						x = 0;
						y = 112 - 112 * entrance;
						scale = .72 + .28 * entrance;
					}
					opacity = clamp(entrance / .12);
					zIndex = 60;
				} else {
					opacity = 0;
					scale = index === 0 ? .74 : .72;
					x = index === 0 ? -110 : 0;
					y = index === 0 ? 0 : 112;
					zIndex = 10 + index;
				}
				if (index === chapter - 1 && localProgress > .88) {
					const cover = smoothStep((localProgress - .88) / .12);
					opacity = 1 - cover;
					scale = 1 - cover * .025;
				}
				card.style.transform = `translate3d(${x}%, ${y}%, 0) scale(${scale})`;
				card.style.opacity = String(opacity);
				card.style.zIndex = String(zIndex);
			});
			if (progressRef.current) progressRef.current.style.width = `${overallProgress * 100}%`;
			if (counterRef.current) counterRef.current.textContent = `${String(chapter + 1).padStart(2, "0")} / ${String(CHAPTERS).padStart(2, "0")}`;
		};
		const requestRender = () => {
			if (rafRef.current !== null) return;
			rafRef.current = window.requestAnimationFrame(() => {
				rafRef.current = null;
				render();
			});
		};
		const settleScroll = () => {
			const { overallProgress, distance } = getMetrics();
			const scaled = overallProgress * CHAPTERS;
			const chapter = Math.min(CHAPTERS - 1, Math.floor(Math.min(scaled, CHAPTERS - 1e-6)));
			const localProgress = clamp(scaled - chapter);
			if (localProgress < .01 || localProgress > .99) return;
			const targetProgress = (localProgress >= COMMIT_POINT ? chapter + 1 : chapter) / CHAPTERS;
			const sectionTop = window.scrollY + section.getBoundingClientRect().top;
			snappingRef.current = true;
			window.scrollTo({
				top: sectionTop + targetProgress * distance,
				behavior: "smooth"
			});
			window.setTimeout(() => {
				snappingRef.current = false;
				requestRender();
			}, 700);
		};
		const onScroll = () => {
			requestRender();
			if (snappingRef.current) return;
			const { localProgress } = getMetrics();
			if (localProgress >= COMMIT_POINT && localProgress < .99) {
				if (settleTimerRef.current !== null) {
					window.clearTimeout(settleTimerRef.current);
					settleTimerRef.current = null;
				}
				settleScroll();
				return;
			}
			if (settleTimerRef.current !== null) window.clearTimeout(settleTimerRef.current);
			settleTimerRef.current = window.setTimeout(settleScroll, 120);
		};
		const onResize = () => {
			requestRender();
		};
		render();
		window.addEventListener("scroll", onScroll, { passive: true });
		window.addEventListener("resize", onResize);
		return () => {
			window.removeEventListener("scroll", onScroll);
			window.removeEventListener("resize", onResize);
			if (settleTimerRef.current !== null) window.clearTimeout(settleTimerRef.current);
			if (rafRef.current !== null) window.cancelAnimationFrame(rafRef.current);
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		ref: sectionRef,
		className: "relative h-[800vh] bg-background",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "pointer-events-none absolute inset-0 overflow-hidden",
			"aria-hidden": "true",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-[68%] top-[50%] h-[60vw] w-[60vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.07] blur-[150px]" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-[40%] top-[35%] h-[28rem] w-[28rem] rounded-full bg-orange-500/[0.035] blur-[120px]" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 opacity-[0.09] [background-image:linear-gradient(to_right,hsl(var(--border)/0.5)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.5)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_75%)]" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-[75%] top-[48%] size-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/[0.055]" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-[75%] top-[48%] size-[48rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/[0.03]" })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "sticky top-0 flex h-screen items-center overflow-hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex h-full w-full max-w-[1500px] flex-col justify-center gap-5 px-4 py-5 sm:gap-7 sm:px-6 sm:py-8 md:flex-row md:items-center md:gap-6 md:px-8 lg:gap-10 lg:px-12 xl:px-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative z-10 w-full shrink-0 md:w-[38%] lg:w-[34%]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-3 flex items-center gap-3 sm:mb-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-8 bg-primary sm:w-12" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-[8px] uppercase tracking-[0.3em] text-primary sm:text-[9px]",
								children: "The Framework"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "font-display text-[2rem] font-black leading-[0.93] tracking-[-0.055em] text-foreground sm:text-[2.7rem] md:text-[3rem] lg:text-[4.1rem]",
							children: [
								"Four Pillars of",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-gradient",
									children: "Tech Fusion Club"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-[490px] text-xs leading-5 text-muted-foreground sm:mt-6 sm:text-sm sm:leading-6 md:text-base md:leading-7 lg:mt-7 lg:text-lg lg:leading-8",
							children: "How our technical collective operates week after week to produce industry-ready student engineers."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-5 flex items-center gap-3 sm:mt-8 md:mt-10 lg:mt-12",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-7 bg-primary sm:w-9" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono text-[7px] uppercase tracking-[0.3em] text-muted-foreground sm:text-[8px] md:text-[9px]",
									children: "Scroll to explore"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "flex h-7 w-5 items-start justify-center rounded-full border border-border/70 p-1 sm:h-8",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1 rounded-full bg-primary" })
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 hidden max-w-[205px] sm:block md:mt-10 lg:mt-20",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mb-3 flex items-center justify-between font-mono text-[8px] uppercase tracking-[0.25em] text-muted-foreground sm:text-[9px]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Scroll" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									ref: counterRef,
									children: "01 / 04"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-px w-full bg-border/70",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									ref: progressRef,
									className: "h-full origin-left bg-primary",
									style: { width: "0%" }
								})
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative min-h-0 w-full flex-1 md:h-[480px] md:flex-none md:w-[62%] lg:h-[570px] lg:w-[53%]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 rounded-[1.25rem] border border-primary/[0.13] sm:rounded-[1.75rem] lg:rounded-[2.2rem]" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-2 rounded-[1.1rem] border border-primary/[0.07] sm:inset-3 sm:rounded-[1.5rem] lg:rounded-[2rem]" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-4 rounded-[1.25rem] bg-primary/[0.025] blur-2xl sm:inset-6 sm:rounded-[1.75rem] lg:inset-8 lg:rounded-[2rem]" }),
						pillars.map((pillar, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							ref: (element) => {
								if (element) cardsRef.current[index] = element;
							},
							className: "absolute inset-2 overflow-hidden rounded-[1.1rem] border border-primary/[0.16] bg-card/[0.94] shadow-[0_25px_80px_hsl(var(--primary)/0.08)] backdrop-blur-xl will-change-transform sm:inset-3 sm:rounded-[1.5rem] sm:shadow-[0_35px_100px_hsl(var(--primary)/0.09)] lg:inset-5 lg:rounded-[2rem]",
							style: {
								opacity: 0,
								transform: index === 0 ? "translate3d(-110%, 0, 0) scale(0.74)" : "translate3d(0, 112%, 0) scale(0.72)"
							},
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PillarCard, { pillar })
						}, pillar.number))
					]
				})]
			})
		})]
	});
}
function PillarCard({ pillar }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative flex h-full flex-col justify-between overflow-hidden p-3.5 sm:p-6 md:p-7 lg:p-10 xl:p-14",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute -right-28 -top-28 h-56 w-56 rounded-full bg-primary/[0.06] blur-[80px] sm:h-72 sm:w-72 sm:blur-[100px] lg:h-80 lg:w-80",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute right-2 top-1 select-none font-display text-[4.5rem] font-black leading-none tracking-[-0.1em] text-primary/[0.035] sm:right-5 sm:text-[7rem] md:text-[9rem] lg:right-8 lg:text-[13rem] xl:text-[15rem]",
				"aria-hidden": "true",
				children: pillar.number
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-3 flex items-center gap-2 sm:mb-5 sm:gap-3 md:mb-6 lg:mb-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex size-8 shrink-0 items-center justify-center rounded-lg border border-primary/20 bg-primary/[0.05] sm:size-11 sm:rounded-xl md:size-12 lg:size-14 lg:rounded-2xl",
							children: pillar.icon
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-mono text-[8px] font-bold uppercase tracking-[0.16em] text-primary-glow sm:text-[10px] md:text-xs md:tracking-[0.2em]",
							children: ["Pillar ", pillar.number]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "max-w-3xl font-display text-[1.3rem] font-black leading-[0.98] tracking-[-0.045em] text-foreground sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl",
						children: pillar.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 font-mono text-[8px] font-bold uppercase tracking-[0.12em] text-primary-glow sm:mt-4 sm:text-[10px] md:text-xs md:tracking-[0.18em] lg:mt-5 lg:text-sm",
						children: pillar.subtitle
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-2xl text-[10px] leading-4 text-muted-foreground sm:mt-5 sm:text-xs sm:leading-6 md:text-sm md:leading-7 lg:mt-6 lg:text-base lg:leading-8",
						children: pillar.description
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 mt-3 sm:mt-6 md:mt-7 lg:mt-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mb-3 h-px w-full bg-gradient-to-r from-border via-primary/30 to-transparent sm:mb-4 md:mb-5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-1.5 sm:gap-2",
					children: pillar.tags.map((tag) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "rounded-full border border-border/70 bg-surface/80 px-2 py-1 font-mono text-[7px] uppercase tracking-[0.07em] text-muted-foreground sm:px-3 sm:py-1.5 sm:text-[9px] md:text-[10px] md:tracking-[0.12em]",
						children: tag
					}, tag))
				})]
			})
		]
	});
}
var partners = [
	{
		name: "GitHub Education",
		category: "Open Source Partner",
		badge: "Global Partner"
	},
	{
		name: "AWS Community",
		category: "Cloud & Credits",
		badge: "Infrastructure"
	},
	{
		name: "Postman API Network",
		category: "API Workspace",
		badge: "Dev Partner"
	},
	{
		name: "Vercel",
		category: "Frontend & Hosting",
		badge: "Deployment"
	},
	{
		name: "JetBrains",
		category: "Developer Tools",
		badge: "IDE Sponsor"
	},
	{
		name: "MongoDB Campus",
		category: "Database Ecosystem",
		badge: "Data Partner"
	}
];
function PartnersSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6",
		children: partners.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlowCard, {
			className: "glass lift flex flex-col items-center justify-center rounded-2xl p-5 text-center border border-border hover:border-primary-glow/60 transition-all",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-display text-sm font-bold text-foreground",
					children: p.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "mt-1 font-mono text-[9px] uppercase tracking-wider text-primary-glow font-semibold",
					children: p.category
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "mt-2 rounded-full border border-border/80 bg-surface px-2 py-0.5 font-mono text-[8px] uppercase tracking-widest text-muted-foreground",
					children: p.badge
				})
			]
		}, p.name))
	});
}
function HeroBackground() {
	const spotlightRef = (0, import_react.useRef)(null);
	const logoRef = (0, import_react.useRef)(null);
	const orbARef = (0, import_react.useRef)(null);
	const orbBRef = (0, import_react.useRef)(null);
	const codeLayerRef = (0, import_react.useRef)(null);
	const leftBadgesRef = (0, import_react.useRef)([]);
	const rightBadgesRef = (0, import_react.useRef)([]);
	(0, import_react.useEffect)(() => {
		const isTouch = !window.matchMedia("(hover: hover) and (pointer: fine)").matches;
		let raf = 0;
		let mouseX = 0;
		let mouseY = 0;
		let targetMouseX = 0;
		let targetMouseY = 0;
		let scroll = 0;
		let targetScroll = 0;
		const onMouseMove = (event) => {
			if (isTouch) return;
			targetMouseX = (event.clientX / window.innerWidth - .5) * 2;
			targetMouseY = (event.clientY / window.innerHeight - .5) * 2;
		};
		const onScroll = () => {
			targetScroll = window.scrollY;
		};
		const animate = () => {
			mouseX += (targetMouseX - mouseX) * .08;
			mouseY += (targetMouseY - mouseY) * .08;
			scroll += (targetScroll - scroll) * .08;
			if (spotlightRef.current && !isTouch) {
				const x = (mouseX + 1) / 2 * 100;
				const y = (mouseY + 1) / 2 * 100;
				spotlightRef.current.style.left = `${x}%`;
				spotlightRef.current.style.top = `${y}%`;
			}
			if (logoRef.current) {
				const progress = Math.min(scroll / 950, 1);
				const eased = progress * progress * (3 - 2 * progress);
				const logoX = eased * 47;
				const logoY = eased * 5;
				const scale = 1 - eased * .52;
				const rotation = scroll * .055 + performance.now() * .018;
				logoRef.current.style.transform = `translate3d(calc(-50% + ${logoX}vw), calc(-50% + ${logoY}vh), 0) scale(${scale}) rotate(${rotation}deg)`;
				logoRef.current.style.opacity = "0.12";
				logoRef.current.style.visibility = "visible";
			}
			const leftDepth = [
				22,
				15,
				18
			];
			leftBadgesRef.current.forEach((badge, index) => {
				if (!badge) return;
				const depth = leftDepth[index] ?? 15;
				const x = mouseX * depth;
				const y = mouseY * depth - scroll * (.07 + index * .025);
				badge.style.transform = `translate3d(${x}px, ${y}px, 0)`;
			});
			const rightDepth = [
				18,
				24,
				14
			];
			rightBadgesRef.current.forEach((badge, index) => {
				if (!badge) return;
				const depth = rightDepth[index] ?? 15;
				const x = mouseX * depth;
				const y = mouseY * depth + scroll * (.055 + index * .02);
				badge.style.transform = `translate3d(${x}px, ${y}px, 0)`;
			});
			if (orbARef.current) {
				const x = mouseX * -30;
				const y = mouseY * -20 + scroll * .12;
				orbARef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
			}
			if (orbBRef.current) {
				const x = mouseX * 26;
				const y = mouseY * -18 + scroll * .08;
				orbBRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
			}
			if (codeLayerRef.current) {
				const x = mouseX * -12;
				const y = mouseY * -8 - scroll * .035;
				codeLayerRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
			}
			raf = requestAnimationFrame(animate);
		};
		window.addEventListener("mousemove", onMouseMove, { passive: true });
		window.addEventListener("scroll", onScroll, { passive: true });
		targetScroll = window.scrollY;
		raf = requestAnimationFrame(animate);
		return () => {
			window.removeEventListener("mousemove", onMouseMove);
			window.removeEventListener("scroll", onScroll);
			cancelAnimationFrame(raf);
		};
	}, []);
	const setLeftBadge = (index) => (element) => {
		leftBadgesRef.current[index] = element;
	};
	const setRightBadge = (index) => (element) => {
		rightBadgesRef.current[index] = element;
	};
	const floatingLogo = typeof document !== "undefined" ? (0, import_react_dom.createPortal)(/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: logoRef,
		className: "tfc-hero-logo pointer-events-none fixed left-1/2 top-[53%] z-[99999] will-change-transform",
		style: {
			width: "min(58rem, 62vw)",
			height: "min(58rem, 62vw)",
			transform: "translate3d(-50%, -50%, 0) scale(1) rotate(0deg)",
			opacity: .12,
			visibility: "visible",
			pointerEvents: "none"
		},
		"aria-hidden": "true",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "h-full w-full",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { className: "h-full w-full object-contain" })
		})
	}), document.body) : null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [floatingLogo, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "pointer-events-none absolute inset-0 overflow-visible select-none",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				ref: spotlightRef,
				className: "absolute size-[28rem] rounded-full bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-primary/30 via-accent/15 to-transparent blur-3xl opacity-60 sm:size-[42rem]",
				style: {
					left: "50%",
					top: "30%",
					transform: "translate(-50%, -50%)"
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute left-1/2 top-[46%] -translate-x-1/2 -translate-y-1/2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "size-[24rem] rounded-full border border-primary/10 animate-[spin_35s_linear_infinite] sm:size-[38rem]" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute left-1/2 top-[46%] -translate-x-1/2 -translate-y-1/2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "size-[30rem] rounded-full border border-accent/10 animate-[spin_55s_linear_infinite_reverse] sm:size-[48rem]" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				ref: orbARef,
				className: "absolute -left-32 -top-32 size-[30rem] rounded-full bg-gradient-to-br from-primary/35 via-orange-600/15 to-transparent blur-3xl opacity-70 will-change-transform animate-pulse"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				ref: orbBRef,
				className: "absolute -right-36 -top-36 size-[34rem] rounded-full bg-gradient-to-bl from-accent/25 via-amber-500/15 to-transparent blur-3xl opacity-65 will-change-transform animate-pulse"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				ref: setLeftBadge(0),
				className: "absolute left-8 top-20 hidden will-change-transform lg:block",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "glass-strong rounded-2xl border border-primary/40 p-3.5 shadow-2xl backdrop-blur-xl animate-float",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2.5 font-mono text-xs font-bold text-primary-glow",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeXml, { className: "size-4 text-primary-glow animate-pulse" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "<FusionEngine />" })]
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				ref: setLeftBadge(1),
				className: "absolute left-14 top-80 hidden will-change-transform lg:block",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "glass rounded-2xl border border-accent/40 p-3 shadow-xl backdrop-blur-lg animate-[float_7s_ease-in-out_infinite_reverse]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 font-mono text-xs font-semibold text-accent",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cpu, { className: "size-4 text-accent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Neural Model v6.0" })]
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				ref: setLeftBadge(2),
				className: "absolute left-10 top-[28rem] hidden will-change-transform lg:block",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "glass rounded-2xl border border-emerald-500/40 p-3.5 shadow-xl backdrop-blur-lg animate-float",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2.5 font-mono text-xs font-bold text-emerald-400",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, { className: "size-4 text-emerald-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "CTF Shield Active" })]
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				ref: setRightBadge(0),
				className: "absolute right-12 top-24 hidden will-change-transform lg:block",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "glass rounded-2xl border border-amber-500/40 p-3.5 shadow-xl backdrop-blur-lg animate-[float_6s_ease-in-out_infinite_reverse]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2.5 font-mono text-xs font-bold text-amber-400",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Terminal, { className: "size-4 text-amber-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "npm run build:live" })]
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				ref: setRightBadge(1),
				className: "absolute right-8 top-72 hidden will-change-transform lg:block",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "glass-strong rounded-2xl border border-cyan-400/40 p-3 shadow-2xl backdrop-blur-xl animate-float",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 font-mono text-xs font-bold text-cyan-400",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-4 text-cyan-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Viveka 6.0 Matrix" })]
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				ref: setRightBadge(2),
				className: "absolute right-14 top-[26rem] hidden will-change-transform lg:block",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "glass rounded-2xl border border-purple-500/40 p-3.5 shadow-xl backdrop-blur-lg animate-[float_8s_ease-in-out_infinite]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2.5 font-mono text-xs font-bold text-purple-400",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "size-4 text-purple-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "100% Student-Led" })]
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				ref: codeLayerRef,
				className: "absolute inset-0 opacity-30 will-change-transform",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "absolute left-1/4 top-16 font-mono text-xs font-bold text-primary-glow animate-[ping_4s_infinite]",
						children: "01010011"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "absolute right-1/4 top-1/3 font-mono text-xs font-bold text-accent animate-[bounce_5s_infinite]",
						children: "// VIVEKA_6.0"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "absolute left-1/3 top-[60%] font-mono text-xs font-bold text-emerald-400 animate-[pulse_3s_infinite]",
						children: "export const club = \"TechFusion\";"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "absolute right-1/3 top-[80%] font-mono text-xs font-bold text-amber-300 animate-[ping_6s_infinite]",
						children: "fn build_future()"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-[18%] top-[32%] size-1 rounded-full bg-primary-glow opacity-70 animate-ping" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute right-[20%] top-[42%] size-1 rounded-full bg-accent opacity-70 animate-ping [animation-delay:1s]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-[28%] top-[72%] size-1 rounded-full bg-emerald-400 opacity-60 animate-ping [animation-delay:1.8s]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute right-[32%] top-[68%] size-1 rounded-full bg-amber-400 opacity-60 animate-ping [animation-delay:2.5s]" })
		]
	})] });
}
function Home() {
	const previewPhotos = galleryPhotos.slice(0, 5);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "hero-gradient relative isolate min-h-[92vh] overflow-hidden px-5 pb-20 pt-12 text-center sm:px-8 sm:pb-24 sm:pt-16 lg:min-h-[94vh]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroBackground, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "circuit-lines pointer-events-none absolute inset-0 opacity-80 [mask-image:radial-gradient(ellipse_75%_70%_at_50%_10%,#000_35%,transparent_100%)]" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "grid-lines pointer-events-none absolute inset-0 opacity-30 [mask-image:radial-gradient(ellipse_70%_65%_at_50%_0%,#000_30%,transparent_100%)]" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative z-20 mx-auto flex min-h-[78vh] max-w-6xl flex-col items-center justify-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-8 flex items-center gap-3 animate-rise",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-10 bg-gradient-to-r from-transparent to-primary/70 sm:w-16" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono text-[10px] uppercase tracking-[0.35em] text-primary-glow/80",
									children: "Tech Fusion Club"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-10 bg-gradient-to-l from-transparent to-primary/70 sm:w-16" })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-x-10 top-1/2 -z-10 h-32 -translate-y-1/2 rounded-full bg-primary/20 blur-[90px]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "max-w-5xl text-balance font-display text-4xl font-bold leading-[0.98] tracking-[-0.04em] animate-rise [animation-delay:80ms] sm:text-6xl lg:text-8xl",
								children: [
									"Where ideas",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "relative inline-block",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-gradient",
											children: "fuse"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute -bottom-1 left-0 h-[2px] w-full origin-left scale-x-0 bg-gradient-to-r from-primary via-accent to-primary animate-[heroLine_1.2s_ease-out_0.7s_forwards] sm:-bottom-2" })]
									}),
									" ",
									"into technology."
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-8 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground animate-rise [animation-delay:160ms] sm:text-xl",
							children: [
								club.name,
								" is the student-run technical collective at ",
								club.university,
								". Six domains, one calendar of workshops and hackathons, and a mentorship ladder running unbroken since ",
								club.foundedYear,
								"."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-10 flex flex-col gap-4 animate-rise [animation-delay:240ms] sm:flex-row sm:items-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/events",
								className: "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-primary px-8 py-4 font-semibold text-primary-foreground shadow-[0_0_35px_rgba(217,72,15,0.35)] transition-all duration-300 hover:scale-[1.04] hover:shadow-[0_0_55px_rgba(217,72,15,0.55)]",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "relative",
										children: "Explore events"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "relative size-4 transition-transform duration-300 group-hover:translate-x-1" })
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/join",
								className: "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full border border-border/80 bg-background/20 px-8 py-4 font-semibold text-foreground backdrop-blur-xl transition-all duration-300 hover:border-primary/50 hover:bg-primary/10 hover:text-primary-glow",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-primary/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "relative",
										children: "Join the club"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "relative size-4 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" })
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-12 flex max-w-4xl flex-wrap items-center justify-center gap-2.5 animate-rise [animation-delay:300ms]",
							children: [
								{
									name: "Web Dev",
									icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeXml, { className: "size-3.5 text-primary-glow" })
								},
								{
									name: "AI / ML",
									icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cpu, { className: "size-3.5 text-accent" })
								},
								{
									name: "Cybersecurity",
									icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, { className: "size-3.5 text-emerald-400" })
								},
								{
									name: "App Dev",
									icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-3.5 text-cyan-400" })
								},
								{
									name: "Cloud & DevOps",
									icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Terminal, { className: "size-3.5 text-amber-400" })
								},
								{
									name: "UI/UX Design",
									icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "size-3.5 text-purple-400" })
								}
							].map((d, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "group inline-flex items-center gap-1.5 rounded-full border border-border/70 bg-background/25 px-3.5 py-1.5 font-mono text-xs text-foreground/90 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-primary/10 hover:shadow-[0_8px_25px_rgba(0,0,0,0.2)]",
								style: { animationDelay: `${350 + i * 70}ms` },
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "transition-transform duration-300 group-hover:scale-125",
									children: d.icon
								}), d.name]
							}, d.name))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
							className: "mt-16 grid w-full max-w-4xl grid-cols-2 overflow-hidden rounded-3xl border border-border/60 bg-background/15 backdrop-blur-md animate-rise [animation-delay:380ms] sm:grid-cols-4",
							children: stats.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: `relative px-5 py-7 transition-colors duration-300 hover:bg-primary/[0.04] ${i !== 0 ? "border-t border-border/50 sm:border-l sm:border-t-0" : ""}`,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCounter, {
									value: s.value,
									prefix: s.prefix ?? "",
									suffix: s.suffix ?? "",
									label: s.label
								})
							}, s.label))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-10 flex flex-col items-center gap-2 opacity-50 animate-rise [animation-delay:500ms]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-[9px] uppercase tracking-[0.3em] text-muted-foreground",
								children: "Scroll"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "flex h-8 w-5 items-start justify-center rounded-full border border-border/70 p-1",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1 rounded-full bg-primary-glow animate-[scrollDot_1.8s_ease-in-out_infinite]" })
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PillarsSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow",
				children: "Our mission"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-4 text-balance text-3xl font-bold leading-tight sm:text-4xl",
				children: "A club that measures itself in things shipped."
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				delay: 100,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-pretty text-lg leading-relaxed text-foreground/90",
						children: club.mission
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 text-pretty leading-relaxed text-muted-foreground",
						children: club.vision
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/about",
						className: "group mt-8 inline-flex items-center gap-2 font-semibold text-primary-glow",
						children: ["Read the full story", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" })]
					})
				]
			})]
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			eyebrow: "Featured",
			title: "What's next on the calendar",
			body: "Our flagship fest and every workshop in between — all open to students from any department.",
			action: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/events",
				className: "glass inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-colors hover:text-primary-glow",
				children: ["All events ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
			className: "glass-strong border-animated mt-12 grid overflow-hidden rounded-[2rem] lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative min-h-[18rem] overflow-hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: featuredEvent.cover,
					alt: featuredEvent.title,
					className: "size-full object-cover opacity-90"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-card/90 via-card/20 to-transparent lg:bg-gradient-to-r" })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "p-8 sm:p-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "rounded-full border border-accent/40 bg-accent/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-accent",
						children: featuredEvent.status === "upcoming" ? "Upcoming" : featuredEvent.category
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-5 text-balance font-display text-2xl font-bold leading-snug sm:text-3xl",
						children: featuredEvent.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-pretty leading-relaxed text-muted-foreground",
						children: featuredEvent.summary
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-7 space-y-2.5 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, { className: "size-3.5 text-primary-glow" }),
								" ",
								formatEventDate(featuredEvent)
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-3.5 text-primary-glow" }),
								" ",
								featuredEvent.venue
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-9 flex flex-wrap gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/events",
							className: "inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:scale-[1.03]",
							children: ["Event details ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "https://viveka.techfusion.club",
							target: "_blank",
							rel: "noopener noreferrer",
							className: "glass inline-flex items-center gap-1.5 rounded-full px-6 py-3 text-sm font-semibold transition-colors hover:text-primary-glow",
							children: ["Viveka 6.0 Site ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "size-3.5" })]
						})]
					})
				]
			})]
		})] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			eyebrow: "What we work on",
			title: "Six domains, one shared standard of craft",
			body: "Every member picks a domain on day one and gets a mentor inside it. Cross-domain project teams are the norm, not the exception."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
			children: domains.map((d, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				as: "li",
				delay: i * 60,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlowCard, {
					className: "glass lift group h-full rounded-2xl p-7",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-baseline justify-between gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-lg font-bold transition-colors group-hover:text-primary-glow",
								children: d.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-[11px] text-primary-glow/60",
								children: String(i + 1).padStart(2, "0")
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm leading-relaxed text-muted-foreground",
							children: d.blurb
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-5 flex flex-wrap gap-1.5",
							children: d.stack.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "rounded-full border border-border bg-surface px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-muted-foreground",
								children: t
							}, t))
						})
					]
				})
			}, d.slug))
		})] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			eyebrow: "Proof of Work",
			title: "Shipped & Built by Fusion Members",
			body: "We don't just talk about tech — our members build open-source tools, mobile apps, and security scanners used across campus."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-12",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectsShowcase, {}) })
		})] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			eyebrow: "The Lifecycle",
			title: "Your 1-Year Journey in Tech Fusion",
			body: "From a beginner joining day one to organizing campus hackathons and landing tech roles."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-12",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClubRoadmap, {}) })
		})] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			eyebrow: "Ecosystem",
			title: "Supported by Industry Leaders",
			body: "Our events, cloud infrastructure, and dev tools are backed by global technology sponsors.",
			align: "center"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-12",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PartnersSection, {}) })
		})] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			eyebrow: "From the floor",
			title: "Recent event photos",
			action: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/gallery",
				className: "glass inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-colors hover:text-primary-glow",
				children: ["Full gallery ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
			className: "mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5",
			children: previewPhotos.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/gallery",
				className: "group relative overflow-hidden rounded-2xl border border-border",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: p.src,
					alt: p.alt,
					loading: "lazy",
					decoding: "async",
					className: `aspect-square w-full object-cover opacity-80 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100 ${i === 0 ? "sm:aspect-square" : ""}`
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/90 to-transparent p-3 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground",
					children: p.event
				})]
			}, p.src))
		})] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTABanner, {})
	] });
}
//#endregion
export { Home as component };
