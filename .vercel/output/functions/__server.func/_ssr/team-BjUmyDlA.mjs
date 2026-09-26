import { i as __toESM } from "../_runtime.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { F as ArrowUpRight, O as ChevronUp, _ as Linkedin, v as Link2, x as Github, y as Instagram } from "../_libs/lucide-react.mjs";
import { n as gsapWithCSS } from "../_libs/gsap.mjs";
import { a as useCursorGlow, n as Section } from "./Section-DVbDmvsO.mjs";
import { t as CTABanner } from "./CTABanner-ByIzD7-T.mjs";
import { t as HeroBackground } from "./HeroBackground-BkuZo5kK.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/team-BjUmyDlA.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var tierMeta = {
	faculty: {
		label: "Faculty Coordinators",
		description: "Departmental oversight, institutional support, and university guidance."
	},
	gsec: {
		label: "General Secretaries",
		description: "Overall leadership accountable for the club's direction, vision, and campus operations."
	},
	jsec: {
		label: "Joint Secretaries",
		description: "Coordinating inter-departmental logistics, outreach, and internal mentorship."
	},
	head: {
		label: "Department Heads",
		description: "Heads leading Technical, Documentation, Media, Creative, Management, and Treasury."
	},
	core: {
		label: "Core Teams",
		description: "Core members driving Technical, Documentation, Media, Creative, and Management execution."
	}
};
var members = [
	{
		id: "veena-singh",
		name: "Dr. Veena Singh",
		fullName: "Dr. Veena Singh",
		designation: "Faculty Coordinator",
		tier: "faculty",
		domain: "University Club Coordinator",
		branch: "IMCE",
		bio: "Chief Faculty Mentor guiding university student technical societies, annual tech fests, inter-departmental logistics, and leadership development.",
		photo: "/images/members/faculty-coordinator.jpg",
		accessCode: "TF-FAC-0001",
		socials: { linkedin: "https://www.linkedin.com/in/prof-dr-veena-singh-26a48b196/" }
	},
	{
		id: "abhishek-saxena",
		name: "Er. Abhishek Kumar Saxena",
		fullName: "Er. Abhishek Kumar Saxena",
		designation: "Faculty Coordinator",
		tier: "faculty",
		domain: "Technical Society",
		branch: "IQAC",
		bio: "Convener driving student technical projects, hackathons, open-source build nights, and university digital media initiatives.",
		photo: "https://www.vivekatheintelligence.in/abhishek.jpg",
		accessCode: "TF-FAC-0002",
		socials: { linkedin: "https://www.linkedin.com/in/abhishek-kumar-saxena-80a51111a/" }
	},
	{
		id: "mrityunjay-rai",
		name: "Dr. Mrityunjay Rai",
		fullName: "Dr. Mrityunjay Rai",
		designation: "Faculty Coordinator",
		tier: "faculty",
		domain: "Technical Society",
		branch: "IQAC",
		bio: "Coordinating inter-departmental technical competitions, hardware/software mentorship ladders, and engineering research labs.",
		photo: "https://th.bing.com/th/id/OIP.90nfazrcFSf6EtqDH9jVzgHaHa?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
		accessCode: "TF-FAC-0003",
		socials: { linkedin: "https://www.linkedin.com/in/dr-mritunjay-rai-36b85118/" }
	},
	{
		id: "sunny-kumar",
		name: "Er. Sunny Kumar",
		fullName: "Er. Sunny Kumar",
		designation: "Faculty Coordinator",
		tier: "faculty",
		domain: "Technical Society",
		branch: "DCSE",
		bio: "Mentoring web & mobile app development bootcamps, competitive coding tracks, and student project showcases.",
		photo: "https://srmu.ac.in/storage/teams/11zon-cropped-5-11zon-23022411165423.jpeg",
		accessCode: "TF-FAC-0004",
		socials: { linkedin: "https://www.linkedin.com/in/sunny-kumar-a7910b234/" }
	},
	{
		id: "neeta-bhusal-sharma",
		name: "Er. Neeta Bhusal Sharma",
		fullName: "Er. Neeta Bhusal Sharma",
		designation: "Faculty Coordinator",
		tier: "faculty",
		domain: "Technical Society",
		branch: "DCSE",
		bio: "Guiding AI/ML workshops, cybersecurity hackathons, UI/UX design sprints, and student team development.",
		photo: "https://srmu.ac.in/storage/teams/11zon-cropped-2-11zon-23022410512735.jpeg",
		accessCode: "TF-FAC-0005",
		socials: {}
	},
	{
		id: "rashi-malik",
		name: "Rashi Malik",
		fullName: "Rashi Malik",
		designation: "General Secretary",
		tier: "gsec",
		domain: "Tech Fusion Club",
		branch: "B.TECH CS (DS+AI)",
		bio: "General Secretary of Tech Fusion Club.",
		photo: "https://api.dicebear.com/9.x/notionists/svg?seed=Rashi&backgroundColor=e2e8f0",
		accessCode: "TF-GSEC-01",
		socials: {}
	},
	{
		id: "anshuma-yadav",
		name: "Anshuma Yadav",
		fullName: "Anshuma Yadav",
		designation: "General Secretary",
		tier: "gsec",
		domain: "Tech Fusion Club",
		branch: "B.TECH CS(CC+AI)",
		bio: "General Secretary of Tech Fusion Club.",
		photo: "https://api.dicebear.com/9.x/notionists/svg?seed=Anshuma&backgroundColor=e2e8f0",
		accessCode: "TF-GSEC-02",
		socials: {}
	},
	{
		id: "divyanshi-pandey",
		name: "Divyanshi Pandey",
		fullName: "Divyanshi Pandey",
		designation: "General Secretary",
		tier: "gsec",
		domain: "Tech Fusion Club",
		branch: "B.TECH CS(CC+AI)",
		bio: "General Secretary of Tech Fusion Club.",
		photo: "https://api.dicebear.com/9.x/notionists/svg?seed=Divyanshi&backgroundColor=e2e8f0",
		accessCode: "TF-GSEC-03",
		socials: {}
	},
	{
		id: "raunak-srivastava",
		name: "Raunak Srivastava",
		fullName: "Raunak Srivastava",
		designation: "General Secretary",
		tier: "gsec",
		domain: "Tech Fusion Club",
		branch: "B.TECH ECE",
		bio: "General Secretary of Tech Fusion Club.",
		photo: "https://api.dicebear.com/9.x/notionists/svg?seed=Raunak&backgroundColor=e2e8f0",
		accessCode: "TF-GSEC-04",
		socials: {}
	},
	{
		id: "anshu-kasaudhan",
		name: "Anshu Kasaudhan",
		fullName: "Anshu Kasaudhan",
		designation: "General Secretary",
		tier: "gsec",
		domain: "E-sports Club",
		branch: "B.Tech CSE",
		bio: "General Secretary of E-sports Club.",
		photo: "https://api.dicebear.com/9.x/notionists/svg?seed=Anshu&backgroundColor=e2e8f0",
		accessCode: "ES-GSEC-01",
		socials: {}
	},
	{
		id: "sanskar-dixit",
		name: "Sanskar Dixit",
		fullName: "Sanskar Dixit",
		designation: "General Secretary",
		tier: "gsec",
		domain: "E-sports Club",
		branch: "B.Tech CSE",
		bio: "General Secretary of E-sports Club.",
		photo: "https://api.dicebear.com/9.x/notionists/svg?seed=Sanskar&backgroundColor=e2e8f0",
		accessCode: "ES-GSEC-02",
		socials: {}
	},
	{
		id: "aakarsh-mishra",
		name: "Aakarsh Mishra",
		fullName: "Aakarsh Mishra",
		designation: "General Secretary",
		tier: "gsec",
		domain: "E-sports Club",
		branch: "B.Tech CSE",
		bio: "General Secretary of E-sports Club.",
		photo: "https://api.dicebear.com/9.x/notionists/svg?seed=Aakarsh&backgroundColor=e2e8f0",
		accessCode: "ES-GSEC-03",
		socials: {}
	},
	{
		id: "aviral-mishra-gsec",
		name: "Aviral Mishra",
		fullName: "Aviral Mishra",
		designation: "General Secretary",
		tier: "gsec",
		domain: "E-sports Club",
		branch: "B.Tech",
		bio: "General Secretary of E-sports Club.",
		photo: "https://api.dicebear.com/9.x/notionists/svg?seed=AviralG&backgroundColor=e2e8f0",
		accessCode: "ES-GSEC-04",
		socials: {}
	},
	{
		id: "prateek-singh",
		name: "Prateek Singh",
		fullName: "Prateek Singh",
		designation: "Joint Secretary",
		tier: "jsec",
		domain: "Tech Fusion Club",
		branch: "BBA",
		bio: "Joint Secretary of Tech Fusion Club.",
		photo: "https://api.dicebear.com/9.x/notionists/svg?seed=Prateek&backgroundColor=e2e8f0",
		accessCode: "TF-JSEC-01",
		socials: {}
	},
	{
		id: "jahnvi-pandey",
		name: "Jahnvi Pandey",
		fullName: "Jahnvi Pandey",
		designation: "Joint Secretary",
		tier: "jsec",
		domain: "Tech Fusion Club",
		branch: "BCA(DS+AI)",
		bio: "Joint Secretary of Tech Fusion Club.",
		photo: "https://api.dicebear.com/9.x/notionists/svg?seed=Jahnvi&backgroundColor=e2e8f0",
		accessCode: "TF-JSEC-02",
		socials: {}
	},
	{
		id: "kushagra-dev",
		name: "Kushagra Dev",
		fullName: "Kushagra Dev",
		designation: "Joint Secretary",
		tier: "jsec",
		domain: "Tech Fusion Club",
		branch: "B.TECH CSE",
		bio: "Joint Secretary of Tech Fusion Club.",
		photo: "https://api.dicebear.com/9.x/notionists/svg?seed=Kushagra&backgroundColor=e2e8f0",
		accessCode: "TF-JSEC-03",
		socials: {}
	},
	{
		id: "aviral-mishra-jsec",
		name: "Aviral Mishra",
		fullName: "Aviral Mishra",
		designation: "Joint Secretary",
		tier: "jsec",
		domain: "E-sports Club",
		branch: "B.Tech CS (DS+AI)",
		bio: "Joint Secretary of E-sports Club.",
		photo: "https://api.dicebear.com/9.x/notionists/svg?seed=AviralJ&backgroundColor=e2e8f0",
		accessCode: "ES-JSEC-01",
		socials: {}
	},
	{
		id: "divyansh-srivastava",
		name: "Divyansh Srivastava",
		fullName: "Divyansh Srivastava",
		designation: "Joint Secretary",
		tier: "jsec",
		domain: "E-sports Club",
		branch: "B.Tech CSE (DS+AI)",
		bio: "Joint Secretary of E-sports Club.",
		photo: "https://api.dicebear.com/9.x/notionists/svg?seed=Divyansh&backgroundColor=e2e8f0",
		accessCode: "ES-JSEC-02",
		socials: {}
	},
	{
		id: "riza-khaleel",
		name: "Riza Khaleel",
		fullName: "Riza Khaleel",
		designation: "Treasurer",
		tier: "head",
		domain: "Tech Fusion Club",
		branch: "B.TECH ECE",
		bio: "Treasurer of Tech Fusion Club.",
		photo: "https://api.dicebear.com/9.x/notionists/svg?seed=Riza&backgroundColor=e2e8f0",
		accessCode: "TF-HEAD-01",
		socials: {}
	},
	{
		id: "ashish-singh",
		name: "Ashish Singh",
		fullName: "Ashish Singh",
		designation: "Treasurer",
		tier: "head",
		domain: "E-sports Club",
		branch: "B.Tech (CS)",
		bio: "Treasurer of E-sports Club.",
		photo: "https://api.dicebear.com/9.x/notionists/svg?seed=Ashish&backgroundColor=e2e8f0",
		accessCode: "ES-HEAD-01",
		socials: {}
	},
	{
		id: "rudra-pratap-singh",
		name: "Rudra Pratap Singh",
		fullName: "Rudra Pratap Singh",
		designation: "Documentation Head",
		tier: "head",
		domain: "Tech Fusion Club",
		branch: "BBA BA",
		bio: "Documentation Head of Tech Fusion Club.",
		photo: "https://api.dicebear.com/9.x/notionists/svg?seed=Rudra&backgroundColor=e2e8f0",
		accessCode: "TF-HEAD-02",
		socials: {}
	},
	{
		id: "rumana-mahmood",
		name: "Rumana Mahmood Ansari",
		fullName: "Rumana Mahmood Ansari",
		designation: "Documentation Head",
		tier: "head",
		domain: "Tech Fusion Club",
		branch: "B.TECH ECE",
		bio: "Documentation Head of Tech Fusion Club.",
		photo: "https://api.dicebear.com/9.x/notionists/svg?seed=Rumana&backgroundColor=e2e8f0",
		accessCode: "TF-HEAD-03",
		socials: {}
	},
	{
		id: "aimen-abidi",
		name: "Aimen Abidi",
		fullName: "Aimen Abidi",
		designation: "Documentation Head",
		tier: "head",
		domain: "E-sports Club",
		branch: "B.Tech CSE (AI+ML)",
		bio: "Documentation Head of E-sports Club.",
		photo: "https://api.dicebear.com/9.x/notionists/svg?seed=Aimen&backgroundColor=e2e8f0",
		accessCode: "ES-HEAD-02",
		socials: {}
	},
	{
		id: "ayaan",
		name: "Ayaan",
		fullName: "Ayaan",
		designation: "Creative Head",
		tier: "head",
		domain: "Tech Fusion Club",
		branch: "BCA",
		bio: "Creative Head of Tech Fusion Club.",
		photo: "https://api.dicebear.com/9.x/notionists/svg?seed=Ayaan&backgroundColor=e2e8f0",
		accessCode: "TF-HEAD-04",
		socials: {}
	},
	{
		id: "shubham-vishwakarma",
		name: "Shubham Vishwakarma",
		fullName: "Shubham Vishwakarma",
		designation: "Media Head",
		tier: "head",
		domain: "Tech Fusion Club",
		branch: "B.TECH CS (DS+AI)",
		bio: "Media Head of Tech Fusion Club.",
		photo: "https://api.dicebear.com/9.x/notionists/svg?seed=Shubham&backgroundColor=e2e8f0",
		accessCode: "TF-HEAD-05",
		socials: {}
	},
	{
		id: "shreya-tripathi",
		name: "Shreya Tripathi",
		fullName: "Shreya Tripathi",
		designation: "Media Head",
		tier: "head",
		domain: "E-sports Club",
		branch: "B.Tech (ECE)",
		bio: "Media Head of E-sports Club.",
		photo: "https://api.dicebear.com/9.x/notionists/svg?seed=Shreya&backgroundColor=e2e8f0",
		accessCode: "ES-HEAD-03",
		socials: {}
	},
	{
		id: "astik-singh",
		name: "Astik Singh",
		fullName: "Astik Singh",
		designation: "Technical Head",
		tier: "head",
		domain: "Tech Fusion Club",
		branch: "B.TECH ECE",
		bio: "Technical Head of Tech Fusion Club.",
		photo: "https://api.dicebear.com/9.x/notionists/svg?seed=Astik&backgroundColor=e2e8f0",
		accessCode: "TF-HEAD-06",
		socials: {}
	},
	{
		id: "subhadeep-pal",
		name: "Subhadeep Pal",
		fullName: "Subhadeep Pal",
		designation: "Technical Head",
		tier: "head",
		domain: "Tech Fusion Club",
		branch: "B.TECH ME",
		bio: "Technical Head of Tech Fusion Club.",
		photo: "https://api.dicebear.com/9.x/notionists/svg?seed=Subhadeep&backgroundColor=e2e8f0",
		accessCode: "TF-HEAD-07",
		socials: {}
	},
	{
		id: "praveen-singh",
		name: "Praveen Singh",
		fullName: "Praveen Singh",
		designation: "Technical Head",
		tier: "head",
		domain: "E-sports Club",
		branch: "BCA",
		bio: "Technical Head of E-sports Club.",
		photo: "https://api.dicebear.com/9.x/notionists/svg?seed=Praveen&backgroundColor=e2e8f0",
		accessCode: "ES-HEAD-04",
		socials: {}
	},
	{
		id: "abdul-sabroj-khan",
		name: "Abdul Sabroj Khan",
		fullName: "Abdul Sabroj Khan",
		designation: "Management Head",
		tier: "head",
		domain: "Tech Fusion Club",
		branch: "B.TECH ME",
		bio: "Management Head of Tech Fusion Club.",
		photo: "https://api.dicebear.com/9.x/notionists/svg?seed=Abdul&backgroundColor=e2e8f0",
		accessCode: "TF-HEAD-08",
		socials: {}
	},
	{
		id: "aditya-pratap-singh",
		name: "Aditya Pratap Singh",
		fullName: "Aditya Pratap Singh",
		designation: "Management Head",
		tier: "head",
		domain: "Tech Fusion Club",
		branch: "B.TECH ME",
		bio: "Management Head of Tech Fusion Club.",
		photo: "https://api.dicebear.com/9.x/notionists/svg?seed=Aditya&backgroundColor=e2e8f0",
		accessCode: "TF-HEAD-09",
		socials: {}
	},
	{
		id: "vikas-kumar",
		name: "Vikas Kumar",
		fullName: "Vikas Kumar",
		designation: "Management Head",
		tier: "head",
		domain: "Tech Fusion Club",
		branch: "B.TECH CSE",
		bio: "Management Head of Tech Fusion Club.",
		photo: "https://api.dicebear.com/9.x/notionists/svg?seed=Vikas&backgroundColor=e2e8f0",
		accessCode: "TF-HEAD-10",
		socials: {}
	},
	{
		id: "ashutosh-singh",
		name: "Ashutosh Singh",
		fullName: "Ashutosh Singh",
		designation: "Management Head",
		tier: "head",
		domain: "E-sports Club",
		branch: "B.TECH CS (DS+AI)",
		bio: "Management Head of E-sports Club.",
		photo: "https://api.dicebear.com/9.x/notionists/svg?seed=Ashutosh&backgroundColor=e2e8f0",
		accessCode: "ES-HEAD-05",
		socials: {}
	},
	{
		id: "abhishek-jaiswal",
		name: "Abhishek Jaiswal",
		fullName: "Abhishek Jaiswal",
		designation: "Management Head",
		tier: "head",
		domain: "E-sports Club",
		branch: "B.Tech CS (DS+AI)",
		bio: "Management Head of E-sports Club.",
		photo: "https://api.dicebear.com/9.x/notionists/svg?seed=Abhishek&backgroundColor=e2e8f0",
		accessCode: "ES-HEAD-06",
		socials: {}
	}
];
function membersByTier(tier) {
	return members.filter((m) => m.tier === tier);
}
var socialIcons = {
	linkedin: Linkedin,
	github: Github,
	instagram: Instagram,
	portfolio: Link2
};
var socialLabels = {
	linkedin: "LinkedIn",
	github: "GitHub",
	instagram: "Instagram",
	portfolio: "Portfolio"
};
function MemberCard({ member, size = "md", index = 0 }) {
	const [expanded, setExpanded] = (0, import_react.useState)(false);
	const heights = {
		lg: "min-h-[30rem]",
		md: "min-h-[26rem]",
		sm: "min-h-[22rem]"
	};
	const glowRef = useCursorGlow();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		ref: glowRef,
		onClick: () => setExpanded((value) => !value),
		className: cn("group relative cursor-pointer overflow-hidden rounded-3xl", "border border-border/70 bg-surface/90", "transition-all duration-500 ease-out", "hover:-translate-y-2 hover:scale-[1.02]", "hover:border-primary/40 hover:shadow-2xl", heights[size]),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "\r\n          pointer-events-none absolute -inset-20\r\n          bg-primary/10 blur-3xl\r\n          opacity-0 transition-opacity duration-500\r\n          group-hover:opacity-100\r\n        " }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative h-[15rem] overflow-hidden sm:h-[17rem]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: member.photo,
						alt: `${member.name}, ${member.designation}`,
						loading: index < 3 ? "eager" : "lazy",
						decoding: "async",
						className: "\r\n            size-full object-cover\r\n            transition-transform duration-700 ease-out\r\n            group-hover:scale-110\r\n          "
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "\r\n            absolute right-4 top-4\r\n            grid size-10 place-items-center\r\n            rounded-full border border-white/20\r\n            bg-black/25 text-white backdrop-blur-md\r\n            transition-all duration-300\r\n            group-hover:scale-110\r\n            group-hover:bg-primary\r\n          ",
						children: expanded ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronUp, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-5" })
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 p-5 sm:p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: member.designation
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "\r\n            mt-2 font-display text-xl font-bold\r\n            leading-tight sm:text-2xl\r\n          ",
						children: member.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted-foreground",
						children: member.domain
					}),
					!expanded && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "\r\n              mt-5 flex items-center gap-2\r\n              text-xs font-medium text-primary\r\n            ",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "View profile" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "\r\n                size-3.5\r\n                transition-transform duration-300\r\n                group-hover:translate-x-1\r\n                group-hover:-translate-y-1\r\n              " })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: cn("grid transition-all duration-500 ease-out", expanded ? "mt-5 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "overflow-hidden",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "border-t border-border/70 pt-5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm leading-relaxed text-muted-foreground",
										children: member.bio
									}),
									member.branch && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-4",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "\r\n                      inline-flex rounded-full\r\n                      border border-border\r\n                      bg-background/60\r\n                      px-3 py-1.5\r\n                      text-[10px] font-medium\r\n                      uppercase tracking-wider\r\n                      text-muted-foreground\r\n                    ",
											children: member.branch
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-5 flex items-center gap-2",
										children: [Object.keys(socialIcons).map((key) => {
											const Icon = socialIcons[key];
											const href = member.socials?.[key] || "#";
											return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
												href,
												target: href === "#" ? void 0 : "_blank",
												rel: "noreferrer noopener",
												"aria-label": `${member.name} on ${socialLabels[key]}`,
												onClick: (e) => {
													e.stopPropagation();
													if (href === "#") e.preventDefault();
												},
												className: cn(`
                          grid size-9 place-items-center
                          rounded-full border
                          transition-all duration-300
                        `, href !== "#" ? `
                            border-border
                            bg-background/70
                            text-muted-foreground
                            hover:scale-110
                            hover:border-primary
                            hover:bg-primary
                            hover:text-primary-foreground
                          ` : `
                            cursor-not-allowed
                            border-transparent
                            bg-background/40
                            text-muted-foreground/30
                          `),
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-4" })
											}, key);
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "ml-auto text-xs text-muted-foreground",
											children: "Click to collapse"
										})]
									})
								]
							})
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "\r\n          absolute bottom-0 left-0\r\n          h-[2px] w-0\r\n          bg-primary\r\n          transition-all duration-500\r\n          group-hover:w-full\r\n        " })
		]
	});
}
var tiers = [
	{
		tier: "faculty",
		size: "sm",
		cols: "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
	},
	{
		tier: "gsec",
		size: "sm",
		cols: "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
	},
	{
		tier: "jsec",
		size: "sm",
		cols: "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
	},
	{
		tier: "head",
		size: "sm",
		cols: "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
	},
	{
		tier: "core",
		size: "sm",
		cols: "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
	}
];
function Team() {
	(0, import_react.useLayoutEffect)(() => {
		const ctx = gsapWithCSS.context(() => {
			gsapWithCSS.timeline({ defaults: { ease: "power4.out" } }).from(".hero-eyebrow", {
				x: -60,
				opacity: 0,
				duration: .7
			}).from(".hero-line", {
				x: -120,
				opacity: 0,
				duration: 1,
				stagger: .15
			}, "-=0.35").from(".hero-description", {
				x: -70,
				opacity: 0,
				duration: .8
			}, "-=0.55").from(".hero-middle-image", {
				opacity: 0,
				scale: .85,
				duration: 1.2,
				ease: "power3.out"
			}, "-=0.7");
			const scrollTimeline = gsapWithCSS.timeline({ scrollTrigger: {
				trigger: ".hero-section",
				start: "top top",
				end: "+=120%",
				scrub: 1,
				pin: true,
				anticipatePin: 1,
				invalidateOnRefresh: true
			} });
			scrollTimeline.to(".hero-content", {
				scaleX: 1.12,
				duration: .3,
				transformOrigin: "left center",
				ease: "power2.out"
			});
			scrollTimeline.to(".hero-middle-image", {
				scale: 1.08,
				duration: .5,
				ease: "power2.out"
			}, 0);
			scrollTimeline.to(".hero-content", {
				scale: .58,
				y: -100,
				opacity: 0,
				duration: .7,
				ease: "power3.inOut"
			});
			scrollTimeline.to(".hero-middle-image", {
				scale: .9,
				y: -50,
				opacity: 0,
				duration: .7,
				ease: "power3.inOut"
			}, "<");
			scrollTimeline.to(".hero-background", {
				scale: 1.08,
				opacity: .5,
				duration: 1,
				ease: "none"
			}, 0);
			gsapWithCSS.from(".team-sections", {
				y: 100,
				opacity: 0,
				scale: .97,
				duration: 1,
				ease: "power3.out",
				scrollTrigger: {
					trigger: ".team-sections",
					start: "top 85%",
					end: "top 45%",
					scrub: 1
				}
			});
		});
		return () => ctx.revert();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "\r\n          hero-section\r\n          relative\r\n          min-h-screen\r\n          overflow-hidden\r\n          flex\r\n          items-center\r\n          pb-8\r\n        ",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "\r\n            hero-background\r\n            pointer-events-none\r\n            absolute\r\n            inset-0\r\n            -z-10\r\n            opacity-40\r\n          ",
				"aria-hidden": "true",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "\r\n              absolute\r\n              inset-0\r\n              bg-[linear-gradient(to_right,rgba(0,0,0,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.035)_1px,transparent_1px)]\r\n              bg-[size:72px_72px]\r\n            " }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "\r\n              absolute\r\n              left-[-10%]\r\n              top-[20%]\r\n              h-[420px]\r\n              w-[420px]\r\n              rounded-full\r\n              bg-red-100/40\r\n              blur-3xl\r\n            " }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "\r\n              absolute\r\n              right-[-8%]\r\n              top-[15%]\r\n              h-[500px]\r\n              w-[500px]\r\n              rounded-full\r\n              bg-blue-100/50\r\n              blur-3xl\r\n            " })
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				className: "relative z-10 w-full",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "\r\n              relative\r\n              flex\r\n              min-h-[720px]\r\n              \r\n              \r\n            ",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "\r\n                hero-content\r\n                relative\r\n                z-20\r\n                max-w-4xl\r\n                pt-20\r\n                lg:w-[62%]\r\n              ",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "hero-eyebrow eyebrow",
								children: "The Leadership & Team"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "\r\n                  mt-4\r\n                  max-w-5xl\r\n                  text-balance\r\n                  font-display\r\n                  text-5xl\r\n                  font-bold\r\n                  leading-[1.02]\r\n                  sm:text-6xl\r\n                  lg:text-7xl\r\n                  xl:text-8xl\r\n                ",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "hero-line block text-foreground",
									children: "The hierarchy powering"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "hero-line block text-primary",
									children: "Tech Fusion Club."
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "\r\n                  hero-description\r\n                  mt-8\r\n                  max-w-3xl\r\n                  text-pretty\r\n                  text-xl\r\n                  leading-relaxed\r\n                  text-muted-foreground\r\n                  sm:text-2xl\r\n                ",
								children: "Tap or click any card to flip it and reveal that member's official access badge — domain, branch, year, and ID code."
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "\r\n                hero-middle-image\r\n                pointer-events-none\r\n                absolute\r\n                right-[-10px]\r\n                top-1/2\r\n                hidden\r\n                h-[500px]\r\n                w-[500px]\r\n                -translate-y-1/2\r\n                lg:block\r\n                xl:right-[-150px]\r\n                xl:h-[560px]\r\n                xl:w-[560px]\r\n              ",
						"aria-hidden": "true",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "\r\n                  absolute\r\n                  inset-0\r\n                  overflow-hidden\r\n                  rounded-full\r\n                  opacity-[0.28]\r\n                  [clip-path:circle(34%_at_50%_50%)]\r\n                ",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "\r\n                    absolute\r\n                    left-1/2\r\n                    top-1/2\r\n                    h-[760px]\r\n                    w-[760px]\r\n                    -translate-x-1/2\r\n                    -translate-y-1/2\r\n                  ",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroBackground, {})
							})
						})
					})]
				})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "team-sections",
			children: tiers.map(({ tier, size, cols }) => {
				const people = membersByTier(tier);
				if (people.length === 0) return null;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
					className: "py-10 sm:py-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-2 border-b border-border/70 pb-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-2xl font-bold text-foreground",
							children: tierMeta[tier].label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "max-w-2xl text-sm leading-relaxed text-muted-foreground",
							children: tierMeta[tier].description
						})]
					}), (() => {
						const isEsports = (m) => m.club === "Esports" || m.domain.toLowerCase().includes("e-sports") || m.domain.toLowerCase().includes("esport");
						const departmentOrder = [
							"Treasurer",
							"Documentation",
							"Technical",
							"Management",
							"Creative",
							"Media"
						];
						const getDeptIndex = (m) => {
							const d = m.designation;
							const idx = departmentOrder.findIndex((dept) => d.includes(dept));
							return idx === -1 ? 999 : idx;
						};
						const tfcMembers = people.filter((m) => !isEsports(m)).sort((a, b) => getDeptIndex(a) - getDeptIndex(b));
						const esportsMembers = people.filter((m) => isEsports(m)).sort((a, b) => getDeptIndex(a) - getDeptIndex(b));
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 grid gap-12",
							children: [tfcMembers.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-lg font-semibold tracking-wide text-primary",
									children: "Tech Fusion Club"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: `grid gap-5 ${cols}`,
									children: tfcMembers.map((m, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MemberCard, {
										member: m,
										size,
										index: i
									}) }, m.id))
								})]
							}), esportsMembers.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-lg font-semibold tracking-wide text-primary",
									children: "TFC Esports Club"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: `grid gap-5 ${cols}`,
									children: esportsMembers.map((m, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MemberCard, {
										member: m,
										size,
										index: i
									}) }, m.id))
								})]
							})]
						});
					})()]
				}, tier);
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTABanner, {
			eyebrow: "Join the roster",
			title: "Your badge could be on this page next semester.",
			body: "Applications open twice a year. Pick a domain, meet your mentor, and start shipping."
		})
	] });
}
//#endregion
export { Team as component };
