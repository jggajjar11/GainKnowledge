import { Question } from "../types";

export const cloudQuestions: Question[] = [
  {
    id: "cl_1",
    text: "You are setting up a secure multi-tier web application in a VPC. Where should you place your database instances, and how should they access the internet for updates?",
    options: [
      "In a public subnet with a public IP address. Connect directly via internet gateways.",
      "In a private subnet with no public IP. Route outgoing update traffic through a NAT Gateway (located in a public subnet), while blocking all incoming direct internet traffic.",
      "In a local office container using SSH tunnels.",
      "In an edge location with direct peering to a DNS server."
    ],
    correctAnswerIndex: 1,
    explanation: "Databases must never be exposed to the public internet. Placing them in a private subnet protects them. A NAT Gateway in a public subnet allows private instances to securely fetch outbound updates without accepting direct incoming connections."
  },
  {
    id: "cl_2",
    text: "Your company has a legacy database with unpredictable, massive read spikes. What is the most cost-effective cloud caching strategy on AWS to relieve load on the main engine?",
    options: [
      "Deploy a global DynamoDB cluster spanning 15 regions.",
      "Deploy Amazon ElastiCache for Redis (or Memcached) in front of the database, caching read results and implementing a Cache-Aside strategy with a reasonable TTL.",
      "Upgrade the main relational database instance to the largest hardware size available.",
      "Re-create all relational database tables as local CSV files inside an S3 bucket."
    ],
    correctAnswerIndex: 1,
    explanation: "Redis/Memcached in-memory caching intercepts common queries before they hit the expensive primary relational DB. This absorbs spikes, dramatically decreases latencies (sub-millisecond), and lowers DB hardware costs."
  },
  {
    id: "cl_3",
    text: "You want to implement 'Least Privilege' access in your cloud environments. What is the secure way to grant a containerized app running on AWS EKS or GCP GKE access to a cloud bucket?",
    options: [
      "Hardcode the administrator's API access keys inside the app's Docker image files.",
      "Store your personal cloud credentials as environment variables in git-committed YAML files.",
      "Associate a Cloud IAM Role (AWS IAM Roles for Service Accounts - IRSA, or GCP Workload Identity) directly with the Kubernetes Service Account, generating short-lived dynamic credentials for the pod's container.",
      "Configure the cloud bucket to be fully public, allowing read/write access to any IP."
    ],
    correctAnswerIndex: 2,
    explanation: "EKS IRSA and GCP Workload Identity map Kubernetes service accounts to cloud IAM roles. The cloud provider injects temporary tokens into the container, avoiding long-lived hardcoded secrets that can be leaked or compromised."
  },
  {
    id: "cl_4",
    text: "How do 'AWS EC2 Spot Instances' (or GCP Spot VMs) achieve up to 90% cost savings compared to On-Demand instances, and what is their primary risk?",
    options: [
      "Spot instances use slower, low-power CPUs. The risk is high application crash rates.",
      "Spot instances utilize unused cloud capacity. The primary risk is that the cloud provider can reclaim (terminate) the instance with a short notice (e.g., 2 minutes) when capacity is needed elsewhere.",
      "Spot instances are only compatible with basic text editors. The risk is lack of GPU support.",
      "Spot instances do not support VPC networking, meaning they cannot connect to databases."
    ],
    correctAnswerIndex: 1,
    explanation: "Spot instances let cloud providers monetize unused hardware. They are cheap but volatile. They are ideal for stateless, fault-tolerant workloads (e.g. batch jobs, CI/CD workers, container fleets with auto-balancers) that handle interruptions."
  },
  {
    id: "cl_5",
    text: "What is a 'VPC Peering' connection, and does it route traffic over the public internet?",
    options: [
      "A VPN tunnel that routes traffic over public ISPs. Yes, it is fully public.",
      "A direct network connection between two VPCs that enables routing of traffic using private IP addresses; traffic remains entirely within the cloud provider's private global fiber network, never traversing the public internet.",
      "A DNS record that maps domains between regions.",
      "An SSH tunnel created between two physical web servers."
    ],
    correctAnswerIndex: 1,
    explanation: "VPC Peering connects VPCs directly. Instances communicate as if they are in the same local network. Traffic stays within the cloud provider's secure backbone network, ensuring privacy, high throughput, and lower latency."
  },
  {
    id: "cl_6",
    text: "You are hosting millions of static images in AWS S3. These images are accessed heavily for the first 30 days, but rarely accessed afterward. How do you optimize storage costs securely and automatically?",
    options: [
      "Manually delete images after 30 days and ask users to re-upload them if needed.",
      "Configure an S3 Lifecycle Policy that automatically transitions objects from S3 Standard to S3 Standard-IA (Infrequent Access) or S3 Glacier after 30 days based on creation date.",
      "Compress all images into a single massive ZIP file every night.",
      "Migrate the images to a local database table."
    ],
    correctAnswerIndex: 1,
    explanation: "S3 Lifecycle rules automate cost-saving migrations. S3 Standard-IA has lower storage fees but higher retrieval fees, perfect for old, rarely-read files. Glacier is even cheaper for archival files that don't need instant retrieval."
  },
  {
    id: "cl_7",
    text: "What is the primary cause of serverless 'Cold Starts' (e.g., on AWS Lambda or GCP Cloud Functions), and how do you minimize them in production?",
    options: [
      "The serverless environment getting too cold in winter. Minimize by scheduling heating commands.",
      "The latency associated with spinning up a fresh container instance, initializing the runtime (JVM, Node), and loading application code when a request hits a function with no active hot instances. Minimize via Provisioned Concurrency, lightweight packages, or choosing faster runtimes (Go/Node over Java/C#).",
      "Network packet loss at the API gateway level. Minimize by increasing DNS TTL.",
      "Database locks on the master schema. Minimize with read-replicas."
    ],
    correctAnswerIndex: 1,
    explanation: "If no container is idle, the serverless engine must boot one (cold start). Runtimes with heavy startup times (like Java) or heavy libraries suffer. Provisioned Concurrency keeps a pool of containers initialized, bypassing cold starts entirely."
  },
  {
    id: "cl_8",
    text: "When building a highly available (HA) architecture in the cloud, what is the architectural difference between 'Availability Zones' (AZs) and 'Regions'?",
    options: [
      "Availability Zones are countries; Regions are cities.",
      "Regions are geographically isolated global areas; Availability Zones are distinct, physically separated data centers with redundant power, cooling, and networking within a single region.",
      "Availability Zones only run VMs; Regions run databases.",
      "There is no difference; they are synonymous across cloud providers."
    ],
    correctAnswerIndex: 1,
    explanation: "Regions provide geographical isolation (e.g. us-east-1 vs eu-west-1) to survive catastrophic disasters. AZs are local data center groups (e.g., us-east-1a, 1b, 1c) that provide low-latency failover (sub-millisecond) within a region."
  },
  {
    id: "cl_9",
    text: "What is the security risk of a 'VPC security group' configured with an inbound rule of `0.0.0.0/0` on port 22?",
    options: [
      "It disables secure HTTPS connections on port 443.",
      "It exposes your instance's SSH administration port (22) to the entire public internet, allowing any IP in the world to attempt brute-force password or key attacks.",
      "It blocks local container routing.",
      "It makes the virtual machine run out of disk storage space."
    ],
    correctAnswerIndex: 1,
    explanation: "`0.0.0.0/0` represents the entire internet. Port 22 is for SSH administration. Exposing SSH globally invites endless scanning and automated dictionary attacks. Restrict port 22 to specific bastion host IPs or corporate VPN ranges."
  },
  {
    id: "cl_10",
    text: "What does an AWS 'Application Load Balancer' (ALB) do, and at which layer of the OSI model does it operate?",
    options: [
      "It routes TCP packets at the Network Layer (Layer 3).",
      "It performs content-based routing (inspecting HTTP/HTTPS headers, paths, cookies, and domains) at the Application Layer (Layer 7) to direct traffic to target groups.",
      "It distributes physical power lines to server racks at the Physical Layer (Layer 1).",
      "It manages DNS records at the Session Layer (Layer 5)."
    ],
    correctAnswerIndex: 1,
    explanation: "ALBs are Layer 7 load balancers. They inspect application traffic. This allows routing rules like: 'Send /api requests to Target Group A, and send /static requests to Target Group B,' and enables TLS decryption."
  },
  {
    id: "cl_11",
    text: "In AWS IAM, what is the difference between an IAM User, an IAM Group, and an IAM Role?",
    options: [
      "IAM Users are databases; Groups are tables; Roles are columns.",
      "An IAM User represents a specific person/service; an IAM Group is a collection of users with shared policies; an IAM Role is an identity with permission policies that can be assumed temporarily by anyone or any cloud service.",
      "IAM Roles are only for cloud providers; Users are for customers.",
      "An IAM Group is a hardware server rack cluster."
    ],
    correctAnswerIndex: 1,
    explanation: "IAM roles don't have permanent credentials (passwords/access keys). Instead, resources like EC2 instances, Lambda functions, or federated users 'assume' roles to receive temporary, auto-rotating security credentials."
  },
  {
    id: "cl_12",
    text: "What is a 'Content Delivery Network' (CDN, e.g., CloudFront, Cloudflare), and how does it reduce latency for global users?",
    options: [
      "A network of database mirrors that synchronizes SQL statements globally.",
      "A distributed network of edge servers that cache static and dynamic assets (images, HTML, API responses) geographically close to the user, reducing round-trip time (RTT) and origin server load.",
      "A system that translates website code into multiple languages.",
      "A compression algorithm that reduces web traffic bandwidth."
    ],
    correctAnswerIndex: 1,
    explanation: "CDNs store copies of your assets in hundreds of physical points-of-presence (edge locations) worldwide. A user in Tokyo fetches the image from a Tokyo edge server rather than routing across the Pacific to an origin server in Virginia."
  },
  {
    id: "cl_13",
    text: "You are planning a database backup strategy. What is the cloud term for 'RTO' and 'RPO', and what do they measure?",
    options: [
      "Read-Time Optimization and Read-Port Operation; measures cache hit ratios.",
      "Recovery Time Objective (maximum tolerable downtime after an outage) and Recovery Point Objective (maximum tolerable data loss measured in time, representing how old the recovered data will be).",
      "Real-Time Output and Reliable Protocol Operation; measures network ping.",
      "Regional Transfer Overhead and Resource Provisioning Output; measures bandwidth."
    ],
    correctAnswerIndex: 1,
    explanation: "RTO defines how fast you must recover (e.g. 'Must be back online in 1 hour'). RPO defines how much data you can lose (e.g. 'Can lose up to 15 minutes of transactions'). These metrics dictate your replication and backup intervals."
  },
  {
    id: "cl_14",
    text: "When deploying a Serverless application on AWS, what is the purpose of 'API Gateway' in front of your Lambda functions?",
    options: [
      "To store raw user records in a secure database cluster.",
      "To act as the entry point for HTTP clients, routing incoming REST/WebSocket requests, handling rate limiting, authentication, CORS, and mapping HTTP payloads into JSON objects for Lambda execution.",
      "To compile Lambda functions into native C++ code.",
      "To balance the physical power load across multi-region server arrays."
    ],
    correctAnswerIndex: 1,
    explanation: "AWS Lambda cannot listen directly to incoming HTTP ports. API Gateway acts as the HTTP interface, accepting browser connections, handling authorization, and triggering the Lambda with a structured event payload."
  },
  {
    id: "cl_15",
    text: "What is AWS 'Transit Gateway' and why is it used in large-scale enterprise cloud environments?",
    options: [
      "A fast gateway that converts files into different formats during transfer.",
      "A network transit hub that simplifies interconnecting dozens of VPCs, VPNs, and on-premises networks in a star-topology, replacing complex full-mesh peering setups.",
      "A firewall that intercepts and decrypts encrypted database transactions.",
      "A global load-balancer that routes domain queries based on latency."
    ],
    correctAnswerIndex: 1,
    explanation: "Peering 50 VPCs requires 1,225 peering connections (full-mesh). Transit Gateway acts as a centralized cloud router. You connect all VPCs and VPNs directly to the Transit Gateway, simplifying architecture and route table management."
  },
  {
    id: "cl_16",
    text: "What does the GCP concept of 'Shared VPC' enable an enterprise organization to do?",
    options: [
      "It allows sharing a database table with competitor companies securely.",
      "It allows an organization to connect VPC networks from multiple distinct projects to a common, centralized VPC network, permitting secure resource communication across projects via internal IPs.",
      "It lets different cloud providers (e.g. AWS and Azure) share the same subnets.",
      "It automatically synchronizes file system storage across VMs."
    ],
    correctAnswerIndex: 1,
    explanation: "Shared VPC lets a central host project manage networking (VPCs, subnets, routers, firewalls). Other service projects (e.g. billing, engineering) spin up resources (VMs, GKE) inside these subnets without owning the network admin."
  },
  {
    id: "cl_17",
    text: "How do you securely connect an on-premises enterprise data center to an AWS VPC with high throughput, consistent latency, and bypass the public internet?",
    options: [
      "Establish a standard site-to-site IPsec VPN connection over a local ISP.",
      "Provision an AWS Direct Connect (or GCP Interconnect) physical dedicated network connection from the data center to a cloud provider location.",
      "Use public SSH tunnels with high-grade compression algorithms.",
      "Configure an ingress controller with a NodePort service on all VPC VMs."
    ],
    correctAnswerIndex: 1,
    explanation: "While VPNs run over the unpredictable public internet, Direct Connect/Interconnect provisions physical dedicated fiber lines. This delivers massive, highly reliable bandwidth (up to 100Gbps) and consistent, predictable network latencies."
  },
  {
    id: "cl_18",
    text: "What is 'Infrastructure as Code' (IaC) and what is the primary benefit of declaring infrastructure in files (like Terraform or CloudFormation)?",
    options: [
      "IaC is a method of generating HTML pages from cloud APIs. Benefit is fast styling.",
      "IaC is the practice of managing cloud infrastructure using configuration files. The primary benefit is reproducibility, consistency, automated change plans (dry-runs), and tracking infra history in version control (Git).",
      "IaC lets databases compile themselves into native executables. Benefit is zero lag.",
      "IaC forces developers to configure physical hardware servers manually."
    ],
    correctAnswerIndex: 1,
    explanation: "IaC eliminates manual click-ops. Declaring servers, databases, and subnets in code means you can replicate staging/production environments with 100% accuracy, automate testing, and review changes via PRs before deploying."
  },
  {
    id: "cl_19",
    text: "When managing AWS IAM, what is the role of a 'Service-Linked Role'?",
    options: [
      "A role that allows developers to log in to the AWS console via social media.",
      "A unique IAM role predefined by an AWS service (e.g. Auto Scaling) that grants the service permission to call other AWS services on your behalf to perform automated tasks.",
      "A role that allows database users to execute raw SQL commands.",
      "A security role assigned exclusively to billing administrators."
    ],
    correctAnswerIndex: 1,
    explanation: "AWS services need permissions to interact with your resources (e.g., Auto Scaling needs to delete EC2 instances). Service-Linked Roles are pre-configured roles that let these services perform their duties securely without you manually writing policies."
  },
  {
    id: "cl_20",
    text: "What does 'Storage Class Analysis' in cloud object storage (like S3) help you determine?",
    options: [
      "Whether your files contain virus signatures or malicious scripts.",
      "It analyzes storage access patterns over time to help you identify when you can safely transition infrequently accessed objects to cheaper storage tiers (like Glacier) to optimize costs.",
      "How much physical space is left on the server hard drives.",
      "The exact network latency of file uploads from different global cities."
    ],
    correctAnswerIndex: 1,
    explanation: "Storage Class Analysis monitors access trends on your buckets. It will output reports showing: '95% of your objects in path /archive are never accessed after 15 days,' letting you confidently configure lifecycle rules to save money."
  }
];
