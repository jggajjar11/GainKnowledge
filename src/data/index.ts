import { Domain } from "../types";
import { genaiQuestions } from "./genai";
import { mlQuestions } from "./ml";
import { frontendQuestions } from "./frontend";
import { backendQuestions } from "./backend";
import { fullstackQuestions } from "./fullstack";
import { devopsQuestions } from "./devops";
import { cloudQuestions } from "./cloud";
import { dataengQuestions } from "./dataeng";
import { mobileQuestions } from "./mobile";
import { qaQuestions } from "./qa";
import { securityQuestions } from "./security";
import { sreQuestions } from "./sre";
import { webdevQuestions } from "./webdev";

export const domains: Domain[] = [
  {
    id: "genai",
    name: "Gen AI / AI Engineer",
    shortName: "Gen AI",
    iconName: "Sparkles",
    description: "Multi-agent chains (LangGraph), RAG evaluation (RAGAS), semantic chunking, prompt injection vectors, and structured logit constraints.",
    difficulty: "Expert",
    colorClass: "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300",
    bgClass: "from-purple-500/10 to-indigo-500/10",
    hoverBorderClass: "hover:border-purple-500/40",
    textClass: "text-purple-600 dark:text-purple-400",
    questions: genaiQuestions
  },
  {
    id: "ml",
    name: "Machine Learning Engineer",
    shortName: "Machine Learning",
    iconName: "Brain",
    description: "Model and concept drift mitigation, high-cardinality target encoding, vanishing gradients, custom regularizations, and SHAP gaming values.",
    difficulty: "Expert",
    colorClass: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
    bgClass: "from-blue-500/10 to-cyan-500/10",
    hoverBorderClass: "hover:border-blue-500/40",
    textClass: "text-blue-600 dark:text-blue-400",
    questions: mlQuestions
  },
  {
    id: "frontend",
    name: "Frontend Engineer",
    shortName: "Frontend",
    iconName: "Layout",
    description: "React 19 concurrent loops, hydration errors, Interaction to Next Paint (INP), event loop microtasking, and WAI-ARIA modal traps.",
    difficulty: "Advanced",
    colorClass: "bg-rose-100 text-rose-800 dark:bg-rose-900/30 dark:text-rose-300",
    bgClass: "from-rose-500/10 to-pink-500/10",
    hoverBorderClass: "hover:border-rose-500/40",
    textClass: "text-rose-600 dark:text-rose-400",
    questions: frontendQuestions
  },
  {
    id: "backend",
    name: "Backend Engineer",
    shortName: "Backend",
    iconName: "Server",
    description: "ACID Isolation Serializable costs, composite B-Tree indexes, cache stampede locks, HTTP/2 gRPC, and Kafka append commit logs.",
    difficulty: "Advanced",
    colorClass: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300",
    bgClass: "from-emerald-500/10 to-teal-500/10",
    hoverBorderClass: "hover:border-emerald-500/40",
    textClass: "text-emerald-600 dark:text-emerald-400",
    questions: backendQuestions
  },
  {
    id: "fullstack",
    name: "Full Stack Engineer",
    shortName: "Full Stack",
    iconName: "Layers",
    description: "CORS preflights, secure HttpOnly session cookies, offline IndexedDB sync, JWT vulnerabilities, Webhooks signatures, and RSC hydration.",
    difficulty: "Advanced",
    colorClass: "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300",
    bgClass: "from-amber-500/10 to-orange-500/10",
    hoverBorderClass: "hover:border-amber-500/40",
    textClass: "text-amber-600 dark:text-amber-400",
    questions: fullstackQuestions
  },
  {
    id: "devops",
    name: "DevOps Engineer",
    shortName: "DevOps",
    iconName: "GitBranch",
    description: "Monorepo CI hashing, GitOps state reconciliation loops, DORA metrics calculation, Kubernetes liveness probes, and OOMKilled profiles.",
    difficulty: "Advanced",
    colorClass: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300",
    bgClass: "from-indigo-500/10 to-violet-500/10",
    hoverBorderClass: "hover:border-indigo-500/40",
    textClass: "text-indigo-600 dark:text-indigo-400",
    questions: devopsQuestions
  },
  {
    id: "cloud",
    name: "Cloud Engineer",
    shortName: "Cloud",
    iconName: "Cloud",
    description: "Multi-tier private subnetting, NAT gateway routing, IAM Workload Identities, Spot terminations, S3 tierings, and serverless cold starts.",
    difficulty: "Advanced",
    colorClass: "bg-sky-100 text-sky-800 dark:bg-sky-900/30 dark:text-sky-300",
    bgClass: "from-sky-500/10 to-blue-500/10",
    hoverBorderClass: "hover:border-sky-500/40",
    textClass: "text-sky-600 dark:text-sky-400",
    questions: cloudQuestions
  },
  {
    id: "dataeng",
    name: "Data Engineer",
    shortName: "Data",
    iconName: "Database",
    description: "Columnar OLAP structures, BigQuery partitioning, Spark lazy DAG pipelines and shuffle bottlenecks, Airflow idempotency, and Parquet predicate pushdowns.",
    difficulty: "Advanced",
    colorClass: "bg-cyan-100 text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-300",
    bgClass: "from-cyan-500/10 to-teal-500/10",
    hoverBorderClass: "hover:border-cyan-500/40",
    textClass: "text-cyan-600 dark:text-cyan-400",
    questions: dataengQuestions
  },
  {
    id: "mobile",
    name: "Mobile Engineer",
    shortName: "Mobile",
    iconName: "Smartphone",
    description: "Swift ARC weak zeroing vs JVM Garbage Collectors, React Native Fabric C++ JSI threads, Flutter Impeller pixels, and Android ANR freezes.",
    difficulty: "Intermediate",
    colorClass: "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300",
    bgClass: "from-orange-500/10 to-red-500/10",
    hoverBorderClass: "hover:border-orange-500/40",
    textClass: "text-orange-600 dark:text-orange-400",
    questions: mobileQuestions
  },
  {
    id: "qa",
    name: "QA / SDET",
    shortName: "QA / SDET",
    iconName: "ShieldCheck",
    description: "Playwright CDP WebSockets, Pact contract schemas, test flakiness, Mock/Stub/Spy assertions, and Stryker mutation score testing.",
    difficulty: "Intermediate",
    colorClass: "bg-teal-100 text-teal-800 dark:bg-teal-900/30 dark:text-teal-300",
    bgClass: "from-teal-500/10 to-emerald-500/10",
    hoverBorderClass: "hover:border-teal-500/40",
    textClass: "text-teal-600 dark:text-teal-400",
    questions: qaQuestions
  },
  {
    id: "security",
    name: "Cybersecurity Engineer",
    shortName: "Cybersecurity",
    iconName: "Lock",
    description: "SSRF cloud metadata vectors, Broken Object Level Authorization (BOLA), STRIDE threat modeling, Symmetric AES vs Asymmetric ECC, and Rainbow Tables.",
    difficulty: "Expert",
    colorClass: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300",
    bgClass: "from-red-500/10 to-rose-500/10",
    hoverBorderClass: "hover:border-red-500/40",
    textClass: "text-red-600 dark:text-red-400",
    questions: securityQuestions
  },
  {
    id: "sre",
    name: "System Design / SRE",
    shortName: "System Design",
    iconName: "Activity",
    description: "SLA/SLO/SLI p99 metrics, PACELC tradeoffs, sliding window rate limiters, gossip node memberships, consistent hashing ring routes, and cascading timeouts.",
    difficulty: "Expert",
    colorClass: "bg-fuchsia-100 text-fuchsia-800 dark:bg-fuchsia-900/30 dark:text-fuchsia-300",
    bgClass: "from-fuchsia-500/10 to-purple-500/10",
    hoverBorderClass: "hover:border-fuchsia-500/40",
    textClass: "text-fuchsia-600 dark:text-fuchsia-400",
    questions: sreQuestions
  },
  {
    id: "webdev",
    name: "Web Developer / Engineer",
    shortName: "Web Dev",
    iconName: "Globe",
    description: "HTML5/CSS3 rendering, modern Vanilla JS event loops, Tailwind/Bootstrap utilities, preprocessor compiling, Gutenberg blocks, and CMS visual builder scaling.",
    difficulty: "Intermediate",
    colorClass: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300",
    bgClass: "from-yellow-500/10 to-amber-500/10",
    hoverBorderClass: "hover:border-yellow-500/40",
    textClass: "text-yellow-600 dark:text-yellow-400",
    questions: webdevQuestions
  }
];
