import { FAQItem } from "./types";

export const ASCII_FAQ_FRAMES = [
  [
    "  ██████╗  █████╗  ██████╗  ",
    "  ██╔════╝ ██╔══██╗██╔═══██╗ ",
    "  █████╗   ███████║██║   ██║ ",
    "  ██╔══╝   ██╔══██║██║▄▄ ██║ ",
    "  ██║      ██║  ██║╚██████╔╝ ",
    "  ╚═╝      ╚═╝  ╚═╝ ╚══▀▀═╝  ",
  ],
  [
    "  +=====+  +=====+  +=====+  ",
    "  ||       ||   ||  ||   ||  ",
    "  |====+   |=====|  ||   ||  ",
    "  ||       ||   ||  || \\ ||  ",
    "  ||       ||   ||  +====\\+  ",
    "  ^^       ^^   ^^   ^^^^^^  ",
  ],
  [
    "  /^^^^^/  /^^^^^\\  /^^^^^\\  ",
    "  |:::--   |:::::|  |:::::|  ",
    "  |====~   |=====|  |::|::|  ",
    "  |:::--   |:::::|  |::\\::|  ",
    "  \\_____\\  \\_____/  \\___\\_\\  ",
    "  ~~~~~~~  ~~~~~~~  ~~~~~~~  ",
  ],
];

export const ASCII_LANDSCAPE_FRAMES = [
  [
    "                                      ..---..                           ",
    "                   . .               +:::--:::+                 . .     ",
    "               .::+==+::.         .:=++====++=:.            .::+==+::.  ",
    "         .---:;==++++++==;:---.  :+++========+++:   .---:;==++++++==;:---.",
    "      .-:++====+*######*+====++:-=+++========+++=-:++====+*######*+====++:-",
    "  ..:;==++++++*##########*++++++==;::..    ..::;==++++++*##########*++++++==;::..",
    "==++***######XX@@@@@@@@XX######***++========++***######XX@@@@@@@@XX######***++==",
  ],
  [
    "                                      ..===..                           ",
    "                   ^ ^               +::^~~^::+                 ^ ^     ",
    "               .::+**+::.         .:=++++++++=:.            .::+**+::.  ",
    "         .---:;==******==;:---.  :+++===^^===+++:   .---:;==******==;:---.",
    "      .-:++====+*######*+====++:-=+++========+++=-:++====+*######*+====++:-",
    "  ..:;==++++++*##########*++++++==;::..    ..::;==++++++*##########*++++++==;::..",
    "==++***######XX@@@@@@@@XX######***++========++***######XX@@@@@@@@XX######***++==",
  ],
];

export const devOpsFaqs: FAQItem[] = [
  {
    question: "How does your managed infrastructure work?",
    answer:
      "We architect, deploy, and maintain custom cloud infrastructure on AWS, GCP, or Hetzner. Using automated Terraform scripts and Docker containers, we replace high PaaS markups while giving you enterprise-grade reliability and 24/7 proactive monitoring.",
  },
  {
    question: "How do you cut cloud bills by 50% to 70%?",
    answer:
      "Platforms like Vercel and Heroku add 300%+ margins on RAM, bandwidth, and build time. By moving workloads to optimized bare-metal or raw cloud compute instances with auto-scaling, you only pay for actual raw compute.",
  },
  {
    question: "Can we migrate without downtime?",
    answer:
      "Yes. We configure parallel shadow environments, perform dry-run data synchronizations, and cut over DNS records using progressive canary routing. Your production users will experience zero downtime.",
  },
  {
    question: "What technologies and cloud providers do you support?",
    answer:
      "We specialize in AWS, Google Cloud, DigitalOcean, Hetzner, and bare-metal servers. Our stack includes Kubernetes, Docker, Terraform, Nginx, PostgreSQL clusters, Redis, and automated GitHub Actions CI/CD.",
  },
  {
    question: "Do you offer month-to-month management?",
    answer:
      "Yes, we provide both one-time migration projects and ongoing 24/7 managed retainers covering automated security patches, backup audits, disaster recovery drills, and scaling.",
  },
  {
    question: "How do we get started with an audit?",
    answer:
      "Book a free 30-minute cloud architectural audit. We review your architecture, locate idle infrastructure and resource bottlenecks, and map out your savings roadmap.",
  },
];

export const globeConfig = {
  pointSize: 3.5,
  globeColor: "#051638",
  showAtmosphere: true,
  atmosphereColor: "#60a5fa",
  atmosphereAltitude: 0.15,
  emissive: "#06183e",
  emissiveIntensity: 0.2,
  shininess: 0.8,
  polygonColor: "rgba(255, 255, 255, 0.75)",
  ambientLight: "#38bdf8",
  directionalLeftLight: "#ffffff",
  directionalTopLight: "#ffffff",
  pointLight: "#ffffff",
  arcTime: 1200,
  arcLength: 0.8,
  rings: 1,
  maxRings: 3,
  initialPosition: { lat: 22.3193, lng: 114.1694 },
  autoRotate: true,
  autoRotateSpeed: 0.5,
};

export const colors = ["#ff5722", "#3b82f6", "#06b6d4"];

export const sampleArcs = [
  {
    order: 1,
    startLat: -19.885592,
    startLng: -43.951191,
    endLat: -22.9068,
    endLng: -43.1729,
    arcAlt: 0.1,
    color: colors[0],
  },
  {
    order: 1,
    startLat: 28.6139,
    startLng: 77.209,
    endLat: 3.139,
    endLng: 101.6869,
    arcAlt: 0.2,
    color: colors[1],
  },
  {
    order: 2,
    startLat: 51.5072,
    startLng: -0.1276,
    endLat: 40.7128,
    endLng: -74.006,
    arcAlt: 0.3,
    color: colors[0],
  },
  {
    order: 2,
    startLat: 37.7749,
    startLng: -122.4194,
    endLat: 35.6762,
    endLng: 139.6503,
    arcAlt: 0.35,
    color: colors[2],
  },
  {
    order: 3,
    startLat: 1.3521,
    startLng: 103.8198,
    endLat: 52.52,
    endLng: 13.405,
    arcAlt: 0.4,
    color: colors[1],
  },
  {
    order: 4,
    startLat: -33.8688,
    startLng: 151.2093,
    endLat: 22.3193,
    endLng: 114.1694,
    arcAlt: 0.25,
    color: colors[0],
  },
];

export const traditionalSteps = [
  {
    num: "01",
    title: "Over-engineer AWS infrastructure",
    desc: '"Provision high-tier multi-region instances for low traffic"',
  },
  {
    num: "02",
    title: "Pay bloated monthly bills",
    desc: "Waste startup budget on idle servers & enterprise add-ons",
  },
  {
    num: "03",
    title: "Unmanaged deployment & setup",
    desc: "Risk of downtime with zero 24/7 incident coverage",
  },
  {
    num: "04",
    title: "Exposed security vulnerabilities",
    desc: "Unpatched servers and default open firewall rules",
  },
];

export const managedSteps = [
  {
    num: "01",
    title: "Code review & sync meeting",
    desc: '"Share repo, align on real app traffic & architecture goals"',
  },
  {
    num: "02",
    title: "Right-sized deployment",
    desc: "Provision exact required compute, bandwidth & database specs",
  },
  {
    num: "03",
    title: "Continuous security & patching",
    desc: "Zero-trust firewalling, encrypted secrets, and hard security",
  },
  {
    num: "04",
    title: "24/7 operations & support",
    desc: "Continuous uptime monitoring & instant alert response",
  },
];

export const row1 = [
  { icon: "logos:aws" },
  { empty: true },
  { icon: "logos:google-cloud" },
  { empty: true },
  { icon: "logos:digital-ocean-icon" },
  { empty: true },
  { icon: "logos:microsoft-azure" },
  { empty: true },
  { icon: "simple-icons:hostinger", color: "#673DE6" },
  { empty: true },
  { icon: "logos:vercel-icon" },
  { empty: true },
  { icon: "logos:netlify-icon" },
  { empty: true },
];

// Row 2 — Database & Backend Services
export const row2 = [
  { icon: "logos:postgresql" },
  { empty: true },
  { icon: "logos:mysql-icon" },
  { empty: true },
  { icon: "logos:mongodb-icon" },
  { empty: true },
  { icon: "logos:supabase-icon" },
  { empty: true },
  { icon: "logos:firebase-icon" },
  { empty: true },
  { icon: "simple-icons:resend", color: "#000000" },
  { empty: true },
];

// Row 3 — Containerization & Deployment
export const row3 = [
  { icon: "thesvg-color:render" },
  { empty: true },
  { icon: "logos:nginx" },
  { empty: true },
  { icon: "logos:docker-icon" },
  { empty: true },
  { icon: "logos:kubernetes" },
  { empty: true },
  { icon: "logos:gitlab-icon" },
  { empty: true },
  { icon: "logos:github-icon" },
  { empty: true },
];

// Row 4 — CI/CD, Security & Monitoring
export const row4 = [
  { icon: "simple-icons:sonarqube" },
  { empty: true },
  { icon: "logos:jenkins" },
  { empty: true },
  { icon: "simple-icons:trivy" },
  { empty: true },
  { icon: "simple-icons:prometheus" },
  { empty: true },
  { icon: "logos:grafana" },
  { empty: true },
  { icon: "simple-icons:git" },
  { empty: true },
];

// Tech stack items for the background matrix cells
export const TECH_NODES_LEFT = [
  { icon: "logos:aws", label: "AWS" },
  { icon: "logos:terraform-icon", label: "Terraform" },
  { icon: "logos:docker-icon", label: "Docker" },
  { icon: "logos:kubernetes", label: "K8s" },
  { icon: "logos:nginx", label: "Nginx" },
  { icon: "logos:postgresql", label: "Postgres" },
  { icon: "logos:redis", label: "Redis" },
  { icon: "simple-icons:hetzner", color: "#d50c2d", label: "Hetzner" },
  { icon: "logos:google-cloud", label: "GCP" },
];

export const TECH_NODES_RIGHT = [
  { icon: "logos:supabase-icon", label: "Supabase" },
  { icon: "logos:github-actions", label: "CI/CD" },
  { icon: "logos:linux-tux", label: "Linux" },
  { icon: "logos:cloudflare-icon", label: "Cloudflare" },
  { icon: "logos:go", label: "Golang" },
  { icon: "logos:python", label: "Python" },
  { icon: "logos:grafana", label: "Grafana" },
  { icon: "logos:prometheus", label: "Prometheus" },
  { icon: "logos:datadog", label: "Datadog" },
];

// ASCII Cloud Particle Generator matching Firecrawl rising particle flame logic
export const ASCII_CHARS = [".", ":", ";", "+", "=", "^", "*", "%", "#", "@"];
