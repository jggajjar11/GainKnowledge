import { Question } from "../types";

export const sreQuestions: Question[] = [
  {
    id: "sr_1",
    text: "In Site Reliability Engineering (SRE), what is the difference between an SLI, an SLO, and an SLA?",
    options: [
      "SLIs are databases; SLOs are API tables; SLAs are customer receipts.",
      "An SLI (Indicator) is the quantitative metric (e.g., latency); an SLO (Objective) is the target reliability goal (e.g., latency < 200ms for 99% of requests); an SLA (Agreement) is the legal commitment specifying penalties if the SLO is violated.",
      "An SLA is the speed of deployment; an SLO is the code coverage %; an SLI is the count of lines of code.",
      "They are duplicate terms; SREs use them interchangeably to describe p99 latencies."
    ],
    correctAnswerIndex: 1,
    explanation: "SLI is 'what you measure' (e.g. error rate). SLO is 'what you want to hit' (e.g. error rate < 0.1%). SLA is the contract with customers (e.g. 'If we fail our SLO, we refund you 10%')."
  },
  {
    id: "sr_2",
    text: "What does the PACELC theorem state about distributed database systems, extending the standard CAP theorem?",
    options: [
      "No database can scale beyond 10 physical hardware servers without failing transactions.",
      "If there is a Partition (P), choose Availability (A) or Consistency (C); Else (E), choose Latency (L) or Consistency (C) during normal, healthy operations.",
      "It measures the ratio of CPUs (P) to memory (A) in transactional clusters (C).",
      "It states that consistent hashing algorithms are mathematically optimal."
    ],
    correctAnswerIndex: 1,
    explanation: "CAP only talks about network partitions. PACELC goes further: if there is a partition, trade off A vs C. Else (normal operations), trade off Latency vs Consistency (e.g. waiting for all replicas to acknowledge writes lowers latency but raises consistency)."
  },
  {
    id: "sr_3",
    text: "You are designing a Rate Limiter for an API gateway. What is the key advantage of the 'Sliding Window Counter' algorithm over the 'Fixed Window' algorithm?",
    options: [
      "Sliding Window requires no external database memory whatsoever.",
      "Sliding Window eliminates the boundary burst problem, where an attacker sends twice their rate limit right at the window boundary (e.g., 59th second and 61st second) and succeeds in bypassing limits.",
      "Sliding Window runs 100x faster on single physical server cores.",
      "Fixed Window was deprecated and outlawed by RFC standards in 2023."
    ],
    correctAnswerIndex: 1,
    explanation: "Fixed Window resets at minute boundaries. If limit is 100/min, a user can fire 100 requests in the 59th second and another 100 in the 61st second, causing a burst of 200 requests within 2 seconds. Sliding window monitors actual contiguous seconds."
  },
  {
    id: "sr_4",
    text: "What is a 'Cascading Failure' in a distributed microservices environment, and what mechanism is most effective to halt it?",
    options: [
      "When physical server racks fall over. Halt by bolting racks securely.",
      "When a failure in one service increases load or latency in dependent services, causing them to exhaust resources (threads/sockets) and crash in a domino effect. Halt via Circuit Breakers and aggressive timeouts.",
      "When a database table runs out of primary index columns. Halt by adding auto-increments.",
      "When developers commit broken syntax to git. Halt with pre-commit hooks."
    ],
    correctAnswerIndex: 1,
    explanation: "If service B is slow, calling service A will hang waiting for B, holding open threads. Soon, A runs out of threads and crashes, causing upstream service Ingress to crash. Circuit breakers immediately stop calling B, protecting A's threads."
  },
  {
    id: "sr_5",
    text: "In System Design, what is the 'Gossip Protocol' and what is its primary use case?",
    options: [
      "A chat application protocol used by remote software developers. Use case: Slack integrations.",
      "A decentralized, peer-to-peer communication protocol where nodes periodically share information about their local state with randomly selected neighbors, used for cluster membership, node discovery, and state synchronization.",
      "A secure cryptography protocol used to sign user access cookies.",
      "An automated backup scheduler that copy files between physical server arrays."
    ],
    correctAnswerIndex: 1,
    explanation: "Gossip Protocol (like a rumor spreading) allows distributed databases (Cassandra, Consul) to maintain cluster states. Nodes tell random nodes about node health. Soon, the entire cluster gains 100% consensus on node statuses."
  },
  {
    id: "sr_6",
    text: "What is an 'Error Budget', and how does an SRE team use it to balance feature release speed with system reliability?",
    options: [
      "The physical dollars budgeted for hardware server repairs. Balance with cloud plans.",
      "The margin of acceptable unreliability (e.g., 0.1% for a 99.9% SLO). If the budget is exhausted due to high outages, the team halts all new feature deployments and shifts focus entirely to reliability fixes.",
      "The count of compiler bugs allowed before code is rejected in CI pipelines.",
      "The billing limits configured in cloud consoles to prevent expensive overruns."
    ],
    correctAnswerIndex: 1,
    explanation: "Error budget bridges SRE and dev goals. Developers want speed; SREs want stability. An error budget (e.g., 43 minutes of monthly downtime) lets developers deploy fast until the budget runs dry, aligning both teams' incentives."
  },
  {
    id: "sr_7",
    text: "What is 'Graceful Degradation' in distributed systems, and what is a classic UI/UX example of it?",
    options: [
      "When a browser tab crashes and displays a black screen. Example: Out of Memory error.",
      "The ability of an application to stay partially functional when dependent services fail. Example: A video streaming site serving lower-resolution video or disabling comments when those specific microservices are down.",
      "When a database table is deleted automatically during maintenance hours.",
      "An automated backup utility that compresses image files on disks."
    ],
    correctAnswerIndex: 1,
    explanation: "Instead of crashing the entire app if a secondary service is down (e.g., the recommendation engine), graceful degradation displays a static fallback or hides the recommendation block, letting users still make purchases."
  },
  {
    id: "sr_8",
    text: "What is the primary role of a 'Load Balancer' in horizontally scalable architectures, and what is the difference between Round Robin and Least Connections routing?",
    options: [
      "Load balancers compile code templates. Round robin is for frontend; least connections is for database tables.",
      "It acts as a reverse proxy, distributing incoming traffic across multiple backend servers. Round Robin routes requests sequentially (ignores current node load); Least Connections routes requests to the server with the fewest active sessions.",
      "It measures the temperature of server hardware racks. Round robin is for cooling fans.",
      "It encrypts incoming web packets before sending them to database clusters."
    ],
    correctAnswerIndex: 1,
    explanation: "Load balancers split traffic. Round Robin is simple but can overload servers handling long, heavy requests. Least Connections dynamically checks server workloads, routing new traffic to idle servers, optimizing resource usage."
  },
  {
    id: "sr_9",
    text: "What is 'Consistent Hashing' and why is it crucial for caching clusters (like Redis/Memcached) during scale-up or scale-down events?",
    options: [
      "A hashing algorithm that guarantees password hashes always have identical lengths.",
      "A hashing technique where scale-up or scale-down of nodes requires re-mapping of only a tiny fraction of total keys (1/n keys), preventing a catastrophic mass cache invalidation across the cluster.",
      "An automated compiler rule that translates SQL queries into fast memory blocks.",
      "A secure database synchronization mechanism that replicates databases."
    ],
    correctAnswerIndex: 1,
    explanation: "Traditional hashing uses `hash(key) % N`. If N (node count) changes, almost all keys map to different nodes, completely wiping out cache hit rates. Consistent Hashing maps keys to a ring, minimizing cache misses during node changes."
  },
  {
    id: "sr_10",
    text: "What is 'Thundering Herd' problem, and how does adding 'Jitter' (random noise) to retry backoffs resolve it?",
    options: [
      "When multiple physical servers reboot simultaneously after a power loss.",
      "When a system recovery event triggers thousands of client devices to retry connection requests at the exact same millisecond, overloading servers. Adding Jitter spreads out retry intervals, breaking up synchronized waves of traffic.",
      "When a database table is sharded on an invalid key, causing all columns to write to one server.",
      "A software compile error where files are processed out of alphabetical order."
    ],
    correctAnswerIndex: 1,
    explanation: "Without jitter, if an outage occurs, all client SDKs retry at exactly 1s, 2s, 4s (exponential backoff). This hits the recovering server with synchronized spikes. Jitter adds small random offsets (e.g., 1.2s, 1.9s, 4.3s), smoothing the request load."
  },
  {
    id: "sr_11",
    text: "What is the function of 'Rate Limiting' at the edge layer, and how does the Token Bucket algorithm handle bursty traffic?",
    options: [
      "It blocks users from uploading large files. Token Bucket deletes files.",
      "It limits incoming client requests. The Token Bucket algorithm holds tokens representing capacity; clients can consume tokens rapidly to handle sudden traffic bursts (burstiness), but are capped when tokens run dry.",
      "It scales down server CPU usage. Token Bucket shuts down idle cores.",
      "It translates SQL queries into Redis cache commands."
    ],
    correctAnswerIndex: 1,
    explanation: "Token bucket is great for APIs. If bucket capacity is 20, and refill rate is 2 tokens/sec, a client can fire 20 requests in a burst. Once empty, they can only make requests at the refill rate (2/sec), protecting downstream APIs."
  },
  {
    id: "sr_12",
    text: "What is the difference between vertical scaling (Scale-Up) and horizontal scaling (Scale-Out)?",
    options: [
      "Vertical scaling is for databases; Horizontal scaling is exclusively for frontend assets.",
      "Vertical scaling adds more CPU, RAM, or storage to a single physical/virtual server; Horizontal scaling adds more independent server instances to your cluster, distributing load across multiple machines.",
      "Vertical scaling operates in-memory; Horizontal scaling operates on local SSD disks.",
      "Vertical scaling requires a relational SQL database, while Horizontal scaling is for NoSQL."
    ],
    correctAnswerIndex: 1,
    explanation: "Vertical scaling has hard hardware limits and requires downtime. Horizontal scaling has virtually infinite potential: you add cheap VMs or containers behind a load balancer, making the system highly available and fault-tolerant."
  },
  {
    id: "sr_13",
    text: "In distributed system consensus, what is the difference between the Raft and Paxos algorithms?",
    options: [
      "Raft is only used on mobile; Paxos is used on servers.",
      "Both solve distributed consensus, but Raft is designed to be much more understandable and modular, decomposing consensus into explicit states (Leader Election, Log Replication, Safety), whereas Paxos is mathematically abstract.",
      "Paxos is an active database; Raft is a standard file system configuration.",
      "Raft requires a relational database; Paxos runs exclusively on NoSQL."
    ],
    correctAnswerIndex: 1,
    explanation: "Distributed nodes must agree on state (consensus). Paxos was the classic, complex mathematical solution. Raft was developed later, offering equivalent safety but split into clear, easy-to-reason-about steps, powering systems like etcd."
  },
  {
    id: "sr_14",
    text: "What does a 'Blameless Postmortem' seek to achieve after a production outage?",
    options: [
      "To identify the specific software engineer who wrote the bug and demote them.",
      "To analyze the systemic flaws (tooling, alerts, documentation) that allowed the incident to occur, focus on fixing those processes, and avoid assigning blame to individuals to foster trust and rapid incident learning.",
      "To calculate the exact financial loss of the outage for tax purposes.",
      "To automatically roll back the code deployment using Git CLI commands."
    ],
    correctAnswerIndex: 1,
    explanation: "Punishing developers for human errors makes them hide mistakes. Blameless postmortems assume engineers acted with good intentions with the info they had. It focuses on: 'Why did our systems fail to protect the developer from doing this?'"
  },
  {
    id: "sr_15",
    text: "What is 'SRE Toil' and what is the target percentage of SRE time typically allocated to eliminate it?",
    options: [
      "Toil is compiling application binaries. Target is 100% automated.",
      "Toil is manual, repetitive, operational work that has no enduring value and scales linearly with service size (e.g., manual database cleanups). SRE guidelines target capping toil to at most 50% of SRE time, dedicating the rest to engineering.",
      "Toil is the database schema backup procedure. Target is 10% of time.",
      "Toil is the count of meetings SREs must attend. Target is 25% of time."
    ],
    correctAnswerIndex: 1,
    explanation: "Toil is manual work (e.g., manually restarting a crashed service). If SREs spend all time on toil, they cannot engineer reliability. SRE teams cap toil at 50%, dedicating the other half to writing code that automates away that toil."
  },
  {
    id: "sr_16",
    text: "What is a 'Hot Standby' vs 'Cold Standby' configuration in Disaster Recovery (DR) setups?",
    options: [
      "Hot standby uses physical GPU nodes; Cold standby uses standard CPUs.",
      "A Hot Standby is an active database replica that constantly receives real-time updates and can assume operations immediately on failover; a Cold Standby is an unpowered or unconfigured server that must be booted and restored from backups.",
      "Hot standby operates in the user's browser cache; Cold standby runs in S3.",
      "There is no difference; they are different branding names for AWS Multi-AZ."
    ],
    correctAnswerIndex: 1,
    explanation: "Hot Standby has zero/minimal RTO because it is fully booted, configured, and synchronized. Cold Standby is cheap (saves cloud runtime fees) but takes hours to boot, configure, and restore from historical backups (high RTO)."
  },
  {
    id: "sr_17",
    text: "When implementing 'Rate Limiting', what is the danger of the 'Leaky Bucket' algorithm compared to the 'Token Bucket' algorithm?",
    options: [
      "Leaky Bucket is incompatible with SQL databases.",
      "Leaky Bucket forces a strict, constant egress rate of traffic, completely smoothing out peaks. This is dangerous for applications that actually need to support short, legitimate bursts of client requests (e.g., page refreshes).",
      "Leaky Bucket deletes unused user accounts automatically.",
      "Leaky Bucket uses 10x more CPU operations than Token Bucket."
    ],
    correctAnswerIndex: 1,
    explanation: "Leaky bucket processes requests at a constant, steady drip. If a user legitimate bursts 5 clicks, the bucket leaks them slowly, introducing artificial latency to the client. Token bucket processes bursts instantly as long as tokens remain."
  },
  {
    id: "sr_18",
    text: "What does the 'p99 latency' metric specifically represent, and why is it preferred over 'average latency' when evaluating user experience?",
    options: [
      "It represents the latency of the fastest 99% of requests. Preferred because it isolates test users.",
      "It represents the 99th percentile, meaning 99% of requests are faster than this value, and only 1% are slower. It is preferred because averages completely hide outliers (e.g., 99 users get 10ms but 1 user gets 10 seconds; average looks great but 1 user has a broken site).",
      "It measures the speed of database updates in columns.",
      "It is the latency of requests coming exclusively from 5G mobile devices."
    ],
    correctAnswerIndex: 1,
    explanation: "Averages are misleading (e.g., a few terrible timeouts look fine in a low average). Monitoring p95 or p99 latencies focuses on the worst-case experiences of your actual users, guiding you to optimize slow backend query paths."
  },
  {
    id: "sr_19",
    text: "What is 'System Design' partitioning via 'Consistent Hashing' ring routing? Where are nodes and keys mapped?",
    options: [
      "Nodes and keys are mapped to separate tables in SQL databases.",
      "Both server nodes (using their IP/Name hash) and item keys are mapped onto a shared circular mathematical 360-degree 'ring'. A key is assigned to the next closest node traveling clockwise on the ring.",
      "Nodes are mapped in-memory; keys are saved on SSD disks.",
      "They are mapped to DNS routers across geographical continents."
    ],
    correctAnswerIndex: 1,
    explanation: "By hashing nodes and keys onto the same circular space, scale-up simply places a new node on the ring. Only keys between the preceding node and the new node are moved. This isolates caching disruptions to a small subset of keys."
  },
  {
    id: "sr_20",
    text: "What is an SRE 'SLA Violation Alert', and why should you avoid routing it directly to an engineer's phone pager at 3:00 AM if it does not violate SLOs?",
    options: [
      "It uses too much phone battery. Alert via email instead.",
      "Pager alerts must target actual, active customer-facing SLO violations with actionable remediation. Alerting on non-SLO metrics causes severe pager fatigue, leading engineers to ignore or silence critical alerts.",
      "It violates local data privacy laws.",
      "SLA violations are handled automatically by cloud schedulers anyway."
    ],
    correctAnswerIndex: 1,
    explanation: "Pager fatigue is real. SREs only page engineers for real fires (SLO breached or immediately threatened, e.g., disk full in 15 mins). If an alert is just a warning (e.g., CPU high but latency normal), log it to ticket systems, not pagers."
  }
];
