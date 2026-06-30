import { Question } from "../types";

export const backendQuestions: Question[] = [
  {
    id: "be_1",
    text: "In a relational database system, what does the 'I' (Isolation) in ACID guarantee, and what is the cost of utilizing the 'Serializable' isolation level?",
    options: [
      "Isolation guarantees that data is stored in separate physical disks. The cost is high hardware disk storage costs.",
      "Isolation ensures that concurrent execution of transactions leaves the database in the same state as if they were executed sequentially. The cost is maximum lock contention, reduced concurrency, and high risk of deadlocks.",
      "Isolation guarantees that index queries bypass the main disk cache. The cost is slower index scan times.",
      "Isolation prevents the database from running out of memory during massive writes. The cost is increased backup size."
    ],
    correctAnswerIndex: 1,
    explanation: "Isolation prevents transactions from seeing incomplete states of other concurrent transactions. Serializable is the highest level; it completely isolates transactions but does so using aggressive locks, which can choke throughput."
  },
  {
    id: "be_2",
    text: "What is a 'B-Tree Index' execution behavior when executing a query like `SELECT * FROM users WHERE status = 'active' AND age > 30`? How should you design a composite index for this query?",
    options: [
      "Order doesn't matter. Create an index on `(age, status)`.",
      "Place the equality column first, followed by the range column. Create a composite index on `(status, age)` because the database can filter on equality first, then perform a range scan.",
      "Create two separate single-column indexes; the database will merge them at runtime with 100% efficiency.",
      "Disable indexing entirely and perform a full-table scan, which is faster for range queries."
    ],
    correctAnswerIndex: 1,
    explanation: "B-Tree indexes are sorted left-to-right. In a composite index, putting equality filters first (`status`) allows the engine to jump directly to those records, then scan the ordered `age` values in that range efficiently."
  },
  {
    id: "be_3",
    text: "What is a 'Cache Stampede' (also known as dog-piling) in heavy backend architectures, and how do you mitigate it?",
    options: [
      "When the cache database runs out of disk space, deleting all keys. Mitigate by increasing memory size.",
      "When a highly popular cache key expires (or is invalidated), and multiple concurrent application requests miss the cache simultaneously, hitting the primary database with identical queries at once, choking it. Mitigate via locking (single-flight) or background pre-expiry calculation.",
      "When a hacker fills the cache with fake keys. Mitigate via rate limiting.",
      "When the server switches from Redis to Memcached without updating the code."
    ],
    correctAnswerIndex: 1,
    explanation: "Cache stampede happens when a hot key expires. Using a mutual exclusion lock (like SingleFlight or mutex) ensures only the first request fetches from the DB and writes to the cache, while other requests wait to read the cached result."
  },
  {
    id: "be_4",
    text: "How does gRPC achieve significantly higher throughput and lower latency compared to standard REST over JSON APIs?",
    options: [
      "By using native browser-based WebSockets to stream HTML nodes.",
      "By utilizing HTTP/2 for multiplexing multiple requests over a single TCP connection, and encoding payloads into compact, binary Protocol Buffers rather than bloated text-based JSON.",
      "By compiling server code directly into native operating system kernels.",
      "By storing all API payloads inside a localized SQLite instance."
    ],
    correctAnswerIndex: 1,
    explanation: "gRPC leverages HTTP/2 features (header compression, multiplexed binary streams) and Protocol Buffers (fast, compact binary serialization), avoiding text-parsing overhead and connection-establishment delays of HTTP/1.1."
  },
  {
    id: "be_5",
    text: "You are building a high-throughput notification system. What is the fundamental architectural difference between Apache Kafka and RabbitMQ?",
    options: [
      "Kafka is a smart-broker/dumb-consumer model based on an append-only commit log (replayable stream); RabbitMQ is a dumb-broker/smart-consumer model based on message queues (messages deleted upon acknowledgment).",
      "Kafka is a distributed append-only commit log where consumers manage their own offset positions (replayable); RabbitMQ is a smart-broker model that routes, queues, and tracks acknowledgments, deleting messages upon successful delivery.",
      "RabbitMQ is written in C++, whereas Kafka is written in JavaScript.",
      "RabbitMQ only supports binary files, whereas Kafka only supports strings."
    ],
    correctAnswerIndex: 1,
    explanation: "Kafka is a log-centric design: messages are stored sequentially and can be re-read (replayable). RabbitMQ is a traditional message queue where the broker handles routing (exchanges) and discards messages once acknowledged."
  },
  {
    id: "be_6",
    text: "What is a database 'Deadlock', and how does a modern database engine handle it when it occurs?",
    options: [
      "When a physical hard drive crashes. The engine automatically boots a secondary replication cluster.",
      "When two or more transactions hold locks on resources the other transaction needs to proceed, creating a cycle. The engine detects this cycle and aborts one of the transactions, rolling it back to break the loop.",
      "When a query takes longer than 30 seconds. The engine terminates the user session.",
      "When a column contains null values that violate a non-null constraint."
    ],
    correctAnswerIndex: 1,
    explanation: "A deadlock is a circular lock dependency. Modern DBs have active deadlock detection threads running in the background. If a loop is found, one transaction is picked as a 'victim' and aborted, allowing others to complete."
  },
  {
    id: "be_7",
    text: "When scaling an Express or Node.js server, why must you configure database 'Connection Pooling', and what is the danger of setting the pool limit too high?",
    options: [
      "Pooling compresses data. Setting it too high fills disk space.",
      "Establishing TCP and database handshakes for every single request is slow. Pooling keeps active connections open. Setting the limit too high exhausts database server memory and process limits, degrading overall DB performance.",
      "Pooling is required to bypass CORS. Setting it too high triggers CORS errors on the client.",
      "Pooling converts relational SQL queries into MongoDB-style documents."
    ],
    correctAnswerIndex: 1,
    explanation: "Database connections are resource-intensive. Reusing open connections via a pool improves response times. Too many connections consume excessive DB-side RAM/processes, causing CPU thrashing and slowing down every query."
  },
  {
    id: "be_8",
    text: "What does a 'Reverse Proxy' (like Nginx or HAProxy) do, and how does it differ from a 'Forward Proxy'?",
    options: [
      "A reverse proxy operates in the client browser; a forward proxy operates on the server.",
      "A reverse proxy sits in front of backend servers, routing client requests and handling SSL termination/caching; a forward proxy sits in front of client devices, filtering outward traffic to the internet.",
      "A reverse proxy translates SQL database schemas into Redis cache commands.",
      "There is no difference; they are different names for an API gateway."
    ],
    correctAnswerIndex: 1,
    explanation: "A reverse proxy acts on behalf of the servers (hiding them, distributing load). A forward proxy acts on behalf of the clients (e.g., in a corporate network, monitoring and caching outgoing internet requests)."
  },
  {
    id: "be_9",
    text: "What is the primary trade-off of using 'Optimistic Concurrency Control' (OCC) over 'Pessimistic Concurrency Control' (locking) in databases?",
    options: [
      "OCC requires a relational database, whereas pessimistic control works only in NoSQL.",
      "OCC assumes conflicts are rare, checking for updates using version numbers before writing (fast, lock-free, but fails under heavy contention); pessimistic locking locks rows immediately (safe, but slows down throughput due to waiting).",
      "OCC only works in-memory; pessimistic control requires SSD storage.",
      "OCC is exclusively designed for micro-services; locking is for monoliths."
    ],
    correctAnswerIndex: 1,
    explanation: "OCC uses versions (e.g., `WHERE version = 5`). If someone else updated it, the query fails and you retry. Under heavy write contention on the same row, OCC triggers constant retries, wasting CPU. Pessimistic locks prevent this."
  },
  {
    id: "be_10",
    text: "When implementing WebSockets for real-time applications, how does the initial connection handshake work?",
    options: [
      "It uses raw UDP packets to establish a direct streaming channel.",
      "The client sends a standard HTTP GET request with an 'Upgrade: websocket' header. If the server agrees, it responds with an HTTP 101 status code, upgrading the existing TCP connection into a bidirectional WebSocket stream.",
      "It establishes a new TLS handshake for every individual message sent.",
      "It queries an active DNS server to establish a direct peer-to-peer WebRTC connection."
    ],
    correctAnswerIndex: 1,
    explanation: "WebSockets start as standard HTTP traffic. The client sends an Upgrade header, the server responds with HTTP 101 Switching Protocols, and the underlying TCP connection is repurposed as a full-duplex binary channel."
  },
  {
    id: "be_11",
    text: "In systems design, what is 'N+1 Query Problem' and how do you spot it in SQL logs?",
    options: [
      "When a query retrieves N columns but needs N+1. Spot it by looking for missing column exceptions.",
      "When the application executes one query to fetch a list of parent records, and then executes N separate database queries to fetch related child details for each parent. Spot it by seeing dozens of identical child queries in sequence.",
      "When the server starts 1 connection too many, crashing the pool. Spot it by checking for connection timeouts.",
      "When a database table has N records but the application expects N+1."
    ],
    correctAnswerIndex: 1,
    explanation: "If you fetch N articles, and then query the `authors` table separately for each article, you run 1 query + N queries = N+1. Spot it by seeing a flood of SQL queries in logs. Fix it with SQL joins or preloading (Eager Loading)."
  },
  {
    id: "be_12",
    text: "What is the function of a 'Circuit Breaker' pattern in a distributed microservices environment?",
    options: [
      "An electrical safety switch in the data center to prevent power surges.",
      "A software wrapper around remote service calls that monitors failures. If failures exceed a threshold, it trips the breaker, instantly failing subsequent calls and returning a fallback response rather than wasting resources on a down service.",
      "A firewall module that prevents DDoS attacks by blocking IP addresses.",
      "An automated load-balancer rule that duplicates requests across zones."
    ],
    correctAnswerIndex: 1,
    explanation: "Circuit breakers prevent cascading failures. If service A calls failing service B, A will experience timeouts and hang. The circuit breaker detects B is down, trips, and returns a local cache/fallback immediately, letting B recover."
  },
  {
    id: "be_13",
    text: "In PostgreSQL, what is the role of the 'VACUUM' command and why is it periodically necessary?",
    options: [
      "It cleans the physical server fans to prevent overheating.",
      "PostgreSQL uses MVCC, meaning updates and deletes leave 'dead tuples' (old row versions) in the tables. VACUUM reclaims storage from these dead tuples and updates table statistics for the query planner.",
      "It completely wipes out all tables to restore database defaults.",
      "It compresses the database schema into a single XML file."
    ],
    correctAnswerIndex: 1,
    explanation: "PostgreSQL's Multi-Version Concurrency Control (MVCC) doesn't overwrite rows; it writes a new version and marks the old one dead. Over time, dead tuples bloat tables. VACUUM frees that space and updates index stats."
  },
  {
    id: "be_14",
    text: "Why is 'Salt' added to passwords before applying a hashing function (like bcrypt or Argon2)?",
    options: [
      "To compress the password so it takes up less space in the database.",
      "To prevent attackers from using 'Rainbow Tables' (pre-computed hash lists) or reverse-dictionary lookups to decode identical passwords, ensuring identical passwords generate completely different hashes.",
      "To encrypt the password symmetrically so it can be decrypted later.",
      "To verify that the password has at least one special character."
    ],
    correctAnswerIndex: 1,
    explanation: "Without salt, two users with the password 'password123' have the exact same hash. An attacker can use pre-computed hash lookup tables to identify common passwords. Salt adds a unique random string per user, making pre-computation useless."
  },
  {
    id: "be_15",
    text: "What does the CAP Theorem state about distributed data systems?",
    options: [
      "You can only achieve Cost, Availability, and Portability simultaneously.",
      "In the event of a network partition (P), a distributed system can guarantee Consistency (C) OR Availability (A), but not both simultaneously.",
      "No database can scale beyond 3 physical servers without losing data.",
      "CPUs, RAM, and Storage are inversely proportional to database speed."
    ],
    correctAnswerIndex: 1,
    explanation: "CAP states: Consistency, Availability, Partition Tolerance. Since network partitions (failures) are inevitable in distributed hardware, you must choose either consistency (fail queries if nodes mismatch) or availability (return local stale data)."
  },
  {
    id: "be_16",
    text: "When implementing 'Cache-Aside' pattern, what is the correct sequence of operations for an application when writing data?",
    options: [
      "Write to cache first, and let the cache sync with the database in 24 hours.",
      "Write data directly to the database first, and then immediately invalidate/delete the corresponding cache key to prevent race conditions during concurrent reads.",
      "Write to database first, and then write the updated value into the cache immediately without deleting.",
      "Delete the database record and rely entirely on cache memory."
    ],
    correctAnswerIndex: 1,
    explanation: "Writing to the database and deleting the cache key is the standard. If you try to update the cache directly, concurrent writes can race and leave stale data in the cache. Deleting forces the next read to fetch the fresh DB value."
  },
  {
    id: "be_17",
    text: "What is the primary purpose of 'WAL' (Write-Ahead Logging) in transaction-heavy databases?",
    options: [
      "To log every user's IP address for analytics purposes.",
      "To guarantee durability and atomic recovery; changes are written sequentially to an append-only log file on disk before they are applied to the actual database pages in memory, allowing recovery after a sudden power loss.",
      "To speed up read queries by logging common search terms.",
      "To compile SQL syntax into native machine-code structures."
    ],
    correctAnswerIndex: 1,
    explanation: "Writing randomly to database disk blocks is slow. Writing sequentially to WAL is fast. By logging the change in the WAL first, the database can safely hold changes in memory, knowing it can replay the log to restore state if the server crashes."
  },
  {
    id: "be_18",
    text: "How does a 'Sharding' architecture scale a relational database horizontally, and what is its main drawback?",
    options: [
      "It scales by converting SQL databases into NoSQL systems. The drawback is loss of typing.",
      "It partitions database rows across multiple completely independent physical databases based on a 'shard key'. The main drawback is that queries spanning multiple shards (cross-shard joins) are extremely complex and slow.",
      "It runs the database in an active-passive configuration. The drawback is high cost.",
      "It replicates the exact same database 10 times. The drawback is duplicate storage."
    ],
    correctAnswerIndex: 1,
    explanation: "Sharding spreads rows across servers. For instance, user IDs 1-1000 go to Shard A, 1001-2000 to Shard B. If you query users across shards, or perform joins between tables sharded on different keys, it requires massive network coordination."
  },
  {
    id: "be_19",
    text: "What is the 'Idempotency' guarantee in API design, and why is it critical for payment gateways?",
    options: [
      "It ensures that only administrators can access the API. Critical to stop theft.",
      "It guarantees that making the same API request multiple times produces the exact same side-effect and result as making it a single time, preventing accidental double-charges due to network retries.",
      "It guarantees that the API responds in less than 50 milliseconds.",
      "It encrypts the payload so that it can only be processed on secure servers."
    ],
    correctAnswerIndex: 1,
    explanation: "If a user submits a payment, but their browser times out before seeing the response, the client retries. An idempotent endpoint uses a unique key (e.g., Idempotency-Key header) to recognize the duplicate request and return the cached success state, avoiding duplicate charges."
  },
  {
    id: "be_20",
    text: "Under what database condition does a 'Table Scan' occur, even if a column has a valid index?",
    options: [
      "When the database runs on a SSD rather than a traditional HDD.",
      "When the query planner estimates that the query will return a very large percentage of the total rows in the table (typically >20-30%), making it cheaper to read the entire table sequentially rather than constantly jumping between index and disk pages.",
      "When the table contains more than 10,000 records.",
      "When the index name has capital letters."
    ],
    correctAnswerIndex: 1,
    explanation: "Indexes require random page fetches. If a query returns a huge portion of the table, sequential scanning of the entire table from disk is actually faster than jumping back and forth using index pointers."
  }
];
