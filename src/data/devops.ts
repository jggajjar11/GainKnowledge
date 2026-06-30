import { Question } from "../types";

export const devopsQuestions: Question[] = [
  {
    id: "do_1",
    text: "You are designing a CI/CD pipeline for a massive monorepo. How do you prevent full rebuilds and test suites from running on every single pull request?",
    options: [
      "By hosting all code on a public FTP server and editing files directly.",
      "By utilizing build systems with content-addressable caches (e.g., Turborepo, Nx, or Bazel) that detect modified file hashes and only rebuild/retest affected packages in the dependency graph.",
      "By limiting developers to making changes in at most one file per commit.",
      "By compiling the entire monorepo into a single giant bash script."
    ],
    correctAnswerIndex: 1,
    explanation: "Modern monorepo build tools build a directed graph of your code. By hashing file contents, they can detect exactly which packages changed, and selectively execute tasks (builds, tests, lints) only on modified packages and their dependents."
  },
  {
    id: "do_2",
    text: "What are the four core metrics defined by DORA (DevOps Research and Assessment) to measure software delivery performance?",
    options: [
      "CPU Usage, Disk I/O, Network Latency, Memory Leak Rate.",
      "Deployment Frequency, Lead Time for Changes, Change Failure Rate, and Mean Time to Recovery (MTTR) / Service Restoration Time.",
      "Deployment Frequency, Lead Time for Changes, Change Failure Rate, and Failed Deployment Rollback Time.",
      "Code Coverage %, Lines of Code, Number of Pull Requests, Velocity Points."
    ],
    correctAnswerIndex: 1,
    explanation: "DORA defines four metrics: Deployment Frequency (how often code is deployed), Lead Time (code commit to prod), Change Failure Rate (% of deployments causing outages), and Service Restoration Time (MTTR from incident)."
  },
  {
    id: "do_3",
    text: "In a GitOps deployment pattern (using tools like ArgoCD or FluxCD), what is the role of the reconciliation loop, and how is manual drift handled?",
    options: [
      "It deletes git commits to match cluster status. Drift is handled by closing git access.",
      "It continuously compares the desired state stored in Git with the live state in the Kubernetes cluster. If drift occurs (e.g., someone manually edits a live deployment), it automatically overrides the cluster changes to match Git.",
      "It converts Docker images into Helm charts automatically. Drift is ignored.",
      "It coordinates database backups between active and standby nodes."
    ],
    correctAnswerIndex: 1,
    explanation: "Git is the single source of truth in GitOps. The controller constantly runs a reconciliation loop. If any manual edits are made in the cluster via kubectl (drift), the controller detects the deviation and reverts the cluster state to match git."
  },
  {
    id: "do_4",
    text: "Your Kubernetes pod is crashing repeatedly with a status of 'OOMKilled'. What is the root cause, and how do you resolve it?",
    options: [
      "The pod ran out of disk space. Resolve by attaching an AWS EBS block.",
      "The application process inside the container exceeded the physical memory (RAM) limits set in its spec.containers[].resources.limits.memory. Resolve by profiling the app for leaks or raising the memory limit.",
      "The CPU was throttled due to extreme concurrent connections. Resolve by adding more pods.",
      "The container was terminated by a liveness probe failure."
    ],
    correctAnswerIndex: 1,
    explanation: "OOMKilled (Out Of Memory) is triggered by the kernel's OOM killer when a container breaches its specified memory limit. You must profile the app to check for memory leaks (e.g. Node.js heap leaks) or scale up the limit in your YAML."
  },
  {
    id: "do_5",
    text: "What is the key difference between a Kubernetes 'Liveness Probe' and a 'Readiness Probe'?",
    options: [
      "There is no difference; they are duplicate terms for health checks.",
      "Liveness probes determine if a container needs to be restarted (killed if failing); Readiness probes determine if a container is ready to accept network traffic (removed from load balancers if failing).",
      "Liveness probes check memory; readiness probes check CPU utilization.",
      "Liveness probes run on startup; readiness probes run only on shutdown."
    ],
    correctAnswerIndex: 1,
    explanation: "If a liveness probe fails, Kubernetes kills the pod and boots a new one. If a readiness probe fails, the pod is left alive but marked unhealthy, meaning the Ingress/Service stops routing traffic to it until it recovers."
  },
  {
    id: "do_6",
    text: "Why is utilizing 'Docker Multi-stage Builds' considered a fundamental best practice for production container images?",
    options: [
      "It allows running containers on multiple operating systems simultaneously.",
      "It enables you to separate the build environment (containing heavy compilers, SDKs, and source files) from the final runtime environment, shipping only the final lightweight compiled binaries, dramatically reducing image size and attack surface.",
      "It automatically runs security vulnerability scans in parallel during deployment.",
      "It forces the container to run on multiple physical CPU nodes."
    ],
    correctAnswerIndex: 1,
    explanation: "A standard Node build needs `npm` and devDependencies, adding hundreds of MBs. Multi-stage builds let you compile assets in stage 1, then copy *only* the compiled `/dist` directory into a clean, tiny alpine/distroless stage 2 image."
  },
  {
    id: "do_7",
    text: "You are managing infrastructure with Terraform and notice 'Terraform State Drift'. What is drift, and how do you reconcile it securely?",
    options: [
      "Drift is when your Terraform version becomes outdated. Reconcile by updating the CLI.",
      "Drift is the discrepancy between the actual configuration of your real-world cloud resources and the state file recorded in Terraform. Reconcile by running `terraform plan` to identify discrepancies, then import/update configuration or run apply to align state.",
      "Drift is when the state file gets corrupted during backup. Reconcile by deleting it.",
      "Drift is when resources are migrated to a different cloud region."
    ],
    correctAnswerIndex: 1,
    explanation: "State drift occurs when resources are modified outside of Terraform (e.g., via the AWS web console). Running `terraform plan` compares reality with the state file, helping you adjust your TF code or run `terraform apply` to overwrite manual changes."
  },
  {
    id: "do_8",
    text: "What is the primary difference between the 'Blue-Green' and 'Canary' deployment strategies in Kubernetes?",
    options: [
      "Blue-Green is manual; Canary is completely automated.",
      "Blue-Green routes traffic to a completely new identical cluster alongside the old one, switching 100% of traffic instantly; Canary gradually rolls out the new version to a tiny subset of users (e.g., 5%) first, monitoring metrics before fully scaling.",
      "Blue-Green is for frontend updates; Canary is for backend SQL schema migrations.",
      "Blue-Green only works on AWS; Canary only works on GCP."
    ],
    correctAnswerIndex: 1,
    explanation: "Blue-Green maintains two identical environments, making rollback instant but requiring double resources. Canary tests the waters: it shifts a small sliver of production traffic to the new version, validating error rates before a wider rollout."
  },
  {
    id: "do_9",
    text: "In modern cloud architectures, what is 'Platform Engineering', and how does it relate to traditional DevOps?",
    options: [
      "Platform Engineering completely eliminates the need for CI/CD pipelines.",
      "Platform Engineering focuses on building 'Internal Developer Platforms' (IDPs) and self-service portals to reduce cognitive load on software engineers, standardizing deployments while leaving infrastructure details to platform teams.",
      "Platform Engineering requires all developers to write code in raw assembly language.",
      "Platform Engineering is a marketing rebranding of hardware server repair."
    ],
    correctAnswerIndex: 1,
    explanation: "Traditional DevOps often forced software developers to learn complex Kubernetes, Terraform, and IAM rules (cognitive overload). Platform Engineering packages these into automated, reusable IDP portals, enabling self-service."
  },
  {
    id: "do_10",
    text: "You are configuring a Prometheus alert. What is the difference between a 'Metric' (Prometheus) and a 'Trace' (OpenTelemetry)?",
    options: [
      "Metrics are text files; Traces are video logs of user screens.",
      "Metrics are numeric, aggregated data points over time (e.g., CPU load, request count); Traces represent the end-to-end path of a single transaction as it travels through multiple microservices, showing durations of each hop.",
      "Metrics only work on databases; Traces only work on ingress proxies.",
      "Prometheus does not support metrics; it only supports tracing."
    ],
    correctAnswerIndex: 1,
    explanation: "Metrics give you high-level aggregated health stats (e.g., 'API error rate is 5%'). Traces act as microscopic needles: they tell you 'Request ID #1234 timed out because the DB query in Service C took 4.2 seconds.'"
  },
  {
    id: "do_11",
    text: "What is a 'Kubernetes Ingress Controller' and how does it differ from a standard 'NodePort' service?",
    options: [
      "NodePort runs on the database; Ingress is a hardware cable.",
      "NodePort exposes a service directly on a high-range port on every VM node; Ingress Controller acts as an internal reverse proxy/load-balancer (Layer 7), routing external traffic based on domains/paths (e.g., api.site.com/v1) to internal services.",
      "Ingress is a secure database backup command; NodePort is a client-side routing library.",
      "They are identical; NodePort was deprecated in Kubernetes 1.25."
    ],
    correctAnswerIndex: 1,
    explanation: "NodePort exposes service sockets on physical node IPs (hard to manage at scale). Ingress Controller (using Nginx, Envoy, etc.) sits at the edge of the cluster, inspecting HTTP routes/domains to direct traffic, and terminates SSL."
  },
  {
    id: "do_12",
    text: "When managing secrets in Git repositories, why is utilizing encrypted secrets (like Mozilla SOPS, Sealed Secrets) or dynamic secrets providers preferred over base64-encoded Kubernetes secrets?",
    options: [
      "Base64 is a highly secure encryption standard that requires supercomputers to crack.",
      "Base64 is not encryption; it is simply plain-text encoding that is trivially decoded. Encrypted secrets allow commit safely to public Git, while providers like Vault generate dynamic, short-lived credentials on demand.",
      "Kubernetes secrets cannot be read by application containers.",
      "Base64 secrets are incompatible with Docker container execution."
    ],
    correctAnswerIndex: 1,
    explanation: "Checking base64 files into Git is a major security breach. Standard Kubernetes secrets are just base64-encoded plaintext. Encrypting secret files with GPG/AWS KMS before commit (GitOps), or pulling from HashiCorp Vault at runtime, keeps credentials secure."
  },
  {
    id: "do_13",
    text: "What does the 'Chaos Engineering' practice (e.g., using Netflix's Chaos Monkey) seek to prove in production clusters?",
    options: [
      "To force the system to perform automated SQL index updates.",
      "To test and prove the resilience of a distributed system by proactively injecting failures (killing random pods, dropping packets) to ensure the system heals itself automatically without user downtime.",
      "To test how many fake user registrations a database can handle before crashing.",
      "To verify that developers can fix bugs during late-night hours."
    ],
    correctAnswerIndex: 1,
    explanation: "Chaos engineering tests resiliency theories in production. By systematically breaking things (e.g. terminating AWS instances in multi-AZ setups), you verify that automated failovers, auto-scalers, and circuit breakers function as designed."
  },
  {
    id: "do_14",
    text: "Your Kubernetes deployment YAML has a 'RollingUpdate' strategy. You set `maxSurge` to 25% and `maxUnavailable` to 0%. What is the rollout behavior?",
    options: [
      "It terminates 25% of the old pods immediately before booting any new ones.",
      "It boots up to 25% new pods alongside old ones first, and ensures that during the entire update, the number of active, healthy pods never drops below 100% of the desired replica count.",
      "It rolls back the deployment automatically if any single network packet is dropped.",
      "It deletes all old pods and waits for manual approval before booting new ones."
    ],
    correctAnswerIndex: 1,
    explanation: "With `maxUnavailable: 0%`, the deployment is forbidden from taking old pods offline first. It must spawn new pods (`maxSurge: 25%` allows up to 1.25x capacity), wait for them to pass readiness probes, then systematically terminate the old pods."
  },
  {
    id: "do_15",
    text: "In Terraform, what is the primary security risk of committing the `.terraform.tfstate` file to a public git repository?",
    options: [
      "The file is extremely heavy, causing git merge conflicts.",
      "The state file is stored in unencrypted plain text and contains sensitive variables, passwords, cloud access keys, and private configuration details of your infrastructure.",
      "Git will automatically execute the Terraform code on every commit, costing money.",
      "It makes the Terraform code run only on Linux environments."
    ],
    correctAnswerIndex: 1,
    explanation: "Terraform state contains a complete blueprint of your infrastructure, including raw passwords, database connections, and private keys. State must always be stored securely in remote backends (like AWS S3 or GCP GCS) with encryption and locking."
  },
  {
    id: "do_16",
    text: "When utilizing Docker, why is setting the container's default user to a non-root UID considered a major security hardening practice?",
    options: [
      "Non-root containers run up to 30% faster on modern Linux servers.",
      "In the event of a container breakout vulnerability, an attacker who compromises the container process won't inherit host-level root privileges, limiting their ability to compromise the underlying physical node.",
      "Non-root users are exempt from cloud subscription licensing fees.",
      "Root containers cannot write files to local volumes."
    ],
    correctAnswerIndex: 1,
    explanation: "By default, Docker containers run processes as root. If an attacker exploits an application exploit and escapes the container namespace, they can gain root access to the physical host. Running as non-root (UID 10001) heavily restricts this."
  },
  {
    id: "do_17",
    text: "In Prometheus metrics, what is the fundamental difference between a 'Counter' and a 'Gauge'?",
    options: [
      "Prometheus does not support Counters; it uses standard Prometheus histograms instead.",
      "A Counter is a cumulative metric that only ever increases or resets to zero on reboot (e.g. total requests); a Gauge is a metric that can go up and down arbitrarily (e.g. current memory usage).",
      "Gauges are floating-point numbers; Counters can only be integers.",
      "Counters are only for error rates; Gauges are for user signups."
    ],
    correctAnswerIndex: 1,
    explanation: "Counters model cumulative events (e.g., total web requests). To calculate rates, you apply the `rate()` function. Gauges measure fluctuating instantaneous states (e.g., disk usage, queue size) where rates are irrelevant."
  },
  {
    id: "do_18",
    text: "You run a deployment and see a Kubernetes pod stuck in 'ImagePullBackOff'. How do you troubleshoot this?",
    options: [
      "The pod does not have enough CPU limits. Increase resources.limits.cpu.",
      "The container runtime failed to download the image. Check for typos in the image name/tag, verify that the image exists in the registry, and ensure proper imagePullSecrets exist for private registries.",
      "The image is too large to fit in container RAM memory.",
      "The physical node is disconnected from the power supply."
    ],
    correctAnswerIndex: 1,
    explanation: "ImagePullBackOff means Kubernetes tried to pull a container image, failed, and is now backing off (waiting) before retrying. Typographed tags, invalid registry credentials, or missing secrets are the standard culprits."
  },
  {
    id: "do_19",
    text: "What does the DevOps acronym 'CI/CD' stand for, and what is its primary operational goal?",
    options: [
      "Cloud Integration / Continuous Development; goal is to host all code on cloud servers.",
      "Continuous Integration / Continuous Delivery (or Deployment); goal is to automate the building, testing, and deployment of code to enable frequent, safe, and reliable release cycles.",
      "Code Inspection / Container Delivery; goal is to check code quality in local IDEs.",
      "Computer Information / Central Database; goal is to sync SQL database schemas."
    ],
    correctAnswerIndex: 1,
    explanation: "CI automates developer code integration (building, testing on every commit). CD automates the release pipeline (testing, deploying to staging/prod), eliminating error-prone manual handoffs and ensuring rapid iteration."
  },
  {
    id: "do_20",
    text: "In Helm (the Kubernetes Package Manager), what is the purpose of the `values.yaml` file?",
    options: [
      "It stores the compiled binary of the Helm executable.",
      "It serves as the default configuration file, declaring variable values that are injected dynamically into your Helm chart templates, allowing easy customization across different environments (dev, prod).",
      "It encrypts the communication channel between Helm and the Kubernetes API.",
      "It lists all the docker containers running on your local machine."
    ],
    correctAnswerIndex: 1,
    explanation: "Helm charts use templates for Kubernetes objects. The `values.yaml` holds the parameters (e.g. replicaCount, image tag, CPU values) that fill these templates. This keeps resource definitions dry and customizable for environments."
  }
];
