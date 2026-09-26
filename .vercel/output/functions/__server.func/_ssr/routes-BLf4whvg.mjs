import { t as cn } from "./utils-C_uf36nf.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as ExternalLink, D as CircleCheck, E as Cloud, F as ArrowUpRight, I as ArrowRight, N as BookOpen, P as Award, T as CodeXml, a as Terminal, c as Sparkles, d as ShieldCheck, f as Rocket, h as MapPin, i as UserPlus, j as CalendarDays, l as Smartphone, r as Users, s as Star, t as Zap, u as Shield, w as Cpu, x as Github } from "../_libs/lucide-react.mjs";
import { n as club, o as stats, r as domains } from "./router-sTbCbLXT.mjs";
import { i as useCountUp, n as Section, r as SectionHeading, t as Reveal } from "./Section-DVbDmvsO.mjs";
import { t as CTABanner } from "./CTABanner-ByIzD7-T.mjs";
import { t as GlowCard } from "./GlowCard-BSqra6Jb.mjs";
import { a as formatEventDate, i as featuredEvent } from "./events-DwZD37OF.mjs";
import { t as galleryPhotos } from "./gallery-DXVzHa-j.mjs";
import { t as HeroBackground } from "./HeroBackground-BkuZo5kK.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BLf4whvg.js
var import_jsx_runtime = require_jsx_runtime();
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
function PillarsSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid gap-6 sm:grid-cols-2",
		children: pillars.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlowCard, {
			className: "glass lift group rounded-2xl p-7 flex flex-col justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between gap-4 mb-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "rounded-xl border border-border bg-surface-strong p-3",
						children: p.icon
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "font-mono text-xs font-bold text-primary-glow/60",
						children: ["PILLAR ", p.number]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-display text-xl font-bold text-foreground group-hover:text-primary-glow transition-colors",
					children: p.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-xs text-primary-glow mt-1 font-semibold",
					children: p.subtitle
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm text-muted-foreground leading-relaxed",
					children: p.description
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 pt-4 border-t border-border/40 flex flex-wrap gap-2",
				children: p.tags.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "rounded-full border border-border/70 bg-surface px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground",
					children: t
				}, t))
			})]
		}, p.number))
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
function Home() {
	const previewPhotos = galleryPhotos.slice(0, 5);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "hero-gradient relative overflow-hidden px-5 pb-16 pt-16 sm:px-8 sm:pb-24 sm:pt-24 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroBackground, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "circuit-lines pointer-events-none absolute inset-0 opacity-80 [mask-image:radial-gradient(ellipse_75%_65%_at_50%_0%,#000_40%,transparent_100%)]" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "grid-lines pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_40%,transparent_100%)]" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mx-auto flex max-w-4xl flex-col items-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "mt-8 text-balance font-display text-4xl font-bold leading-[1.05] tracking-tight animate-rise [animation-delay:80ms] sm:text-6xl lg:text-7xl",
							children: [
								"Where ideas ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-gradient",
									children: "fuse"
								}),
								" into technology."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground animate-rise [animation-delay:160ms] sm:text-xl",
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
								className: "group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 font-semibold text-primary-foreground transition-transform duration-300 hover:scale-[1.04] shadow-[0_0_25px_rgba(217,72,15,0.4)]",
								children: ["Explore events", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4 transition-transform duration-300 group-hover:translate-x-1" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/join",
								className: "glass pulse-glow inline-flex items-center justify-center rounded-full px-8 py-4 font-semibold text-foreground transition-colors hover:text-primary-glow",
								children: "Join the club"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-12 flex flex-wrap items-center justify-center gap-2 animate-rise [animation-delay:300ms]",
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
							].map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "glass inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 font-mono text-xs text-foreground/90 border border-border/80",
								children: [d.icon, d.name]
							}, d.name))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
							className: "mt-16 grid w-full grid-cols-2 gap-8 border-t border-border/70 pt-12 sm:grid-cols-4",
							children: stats.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCounter, {
								value: s.value,
								prefix: s.prefix,
								suffix: s.suffix,
								label: s.label
							}, s.label))
						})
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			eyebrow: "The Framework",
			title: "Four Pillars of Tech Fusion Club",
			body: "How our technical collective operates week after week to produce industry-ready student engineers."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-12",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PillarsSection, {}) })
		})] }),
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
