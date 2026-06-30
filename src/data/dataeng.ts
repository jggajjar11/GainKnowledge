import { Question } from "../types";

export const dataengQuestions: Question[] = [
  {
    id: "de_1",
    text: "What is the primary architectural difference between row-oriented storage (e.g. Postgres) and column-oriented storage (e.g. Snowflake, BigQuery, Parquet) for analytical workloads?",
    options: [
      "Row-oriented databases support transactions; columnar storage cannot guarantee ACID under any circumstance.",
      "Row-oriented stores keep all column values for a single record contiguous on disk (perfect for OLTP transactional writes); columnar stores keep all values for a single column contiguous on disk (perfect for aggregating specific columns over billions of rows).",
      "Column-oriented stores are only compatible with python models; row stores are for SQL.",
      "Row storage is compressed; columnar storage cannot be compressed."
    ],
    correctAnswerIndex: 1,
    explanation: "Analytical (OLAP) queries usually aggregate a few columns over billions of rows (e.g. `SUM(sales)`). Columnar storage reads only those specific column blocks from disk, avoiding reading unused columns, speeding up queries."
  },
  {
    id: "de_2",
    text: "In Google BigQuery or Snowflake, what is the difference between 'Partitioning' and 'Clustering', and how do you combine them to optimize query performance?",
    options: [
      "Partitioning is for text; Clustering is for integers.",
      "Partitioning divides a table into distinct physical segments based on a column (e.g., date); Clustering sorts the data within those partitions based on specified column values (e.g., customer_id) for index-like range scans.",
      "Clustering divides tables into different geographical regions; Partitioning deletes old rows.",
      "Partitioning is only for cloud environments; Clustering is for local clusters."
    ],
    correctAnswerIndex: 1,
    explanation: "Partitioning splits data into coarse, physical slices (e.g. daily shards) to eliminate full-table scans. Clustering refines this by co-locating rows with similar values inside those slices, offering fine-grained query pruning."
  },
  {
    id: "de_3",
    text: "What is the difference between a Spark 'Transformation' and a Spark 'Action', and why is this separation core to Spark's performance?",
    options: [
      "Transformations are written in Java; Actions are in Python.",
      "Transformations are lazy operations (e.g., select, filter) that build an execution plan (DAG) without running math; Actions (e.g., count, collect) force the execution of the DAG, allowing Spark to optimize the whole pipeline first.",
      "Actions are computed on the client machine; Transformations run on the cloud driver.",
      "Transformations always write to disk; Actions always run in-memory."
    ],
    correctAnswerIndex: 1,
    explanation: "Spark is lazy. Transformations simply declare changes to the dataset. Since Spark knows the full sequence of steps, it compiles them into an optimized Directed Acyclic Graph (DAG), merging steps (like filters) to avoid shuffling data."
  },
  {
    id: "de_4",
    text: "In Apache Spark, what is a 'Shuffle' operation, and why should you actively try to minimize it in your ETL pipelines?",
    options: [
      "Shuffle is a randomizer that reorders database rows to prevent biases. Minimize it to keep data sorted.",
      "Shuffle is the physical redistribution of data across different worker nodes over the network, triggered by operations like `groupBy` or `join`; it is extremely expensive due to disk serialization and network transfer overhead.",
      "Shuffle is an automatic garbage collection task that halts Spark drivers.",
      "Shuffle is a technique that translates Scala code into native Python arrays."
    ],
    correctAnswerIndex: 1,
    explanation: "Shuffling forces Spark to write intermediate results to disk, transfer them over the network, and sort them on destination workers. It is the single biggest bottleneck in distributed computing. Broadcast joins help prevent it."
  },
  {
    id: "de_5",
    text: "How does a 'Broadcast Hash Join' optimize a join in Apache Spark, and when should you use it?",
    options: [
      "It broadcasts the join query to local database instances. Use it when databases have indexes.",
      "It copies (broadcasts) the smaller table in its entirety to all worker nodes, permitting workers to perform a local join without shuffling the massive primary table over the network. Use it when one table is small (e.g. <10MB).",
      "It translates joins into fast SQL CTEs. Use it when joining tables of identical size.",
      "It deletes duplicate keys on the driver before compiling the code."
    ],
    correctAnswerIndex: 1,
    explanation: "Standard joins shuffle both tables across workers so matching keys align. If one table is small, broadcasting it to all workers avoids shuffling the large table. Workers join locally, transforming a network bottleneck into a CPU task."
  },
  {
    id: "de_6",
    text: "When designing an Apache Airflow DAG, why is 'Idempotency' considered a mandatory design requirement for data pipelines?",
    options: [
      "Idempotency ensures that DAGs run in alphabetical order to prevent deadlocks.",
      "An idempotent DAG guarantees that running the same pipeline multiple times with the exact same inputs (e.g., re-running a failed daily backfill) yields the identical output database state, preventing data duplication or corruption.",
      "Idempotency compresses final database tables to save storage costs.",
      "Idempotency allows running Airflow executors on a single local core."
    ],
    correctAnswerIndex: 1,
    explanation: "Data pipelines fail frequently (network issues, API timeouts). If your DAG simply appends rows without checking (non-idempotent), re-running it duplicates data. An idempotent DAG (e.g., using SQL UPSERTs or overwriting partitions) is safe to retry."
  },
  {
    id: "de_7",
    text: "What is 'Backfilling' in Apache Airflow, and what variable do you use to ensure your task pulls data for the correct scheduled interval rather than the current system time?",
    options: [
      "Backfilling is running historical data through your DAG. Use the `ds` or `logical_date` (formerly `execution_date`) template variables in your queries.",
      "Backfilling is backing up database schemas to secondary buckets. Use the `current_time()` variable.",
      "Backfilling is adding columns to SQL tables. Use the `alter_table` command.",
      "Backfilling is restarting failed workers automatically. Use the `retry_delay` configuration."
    ],
    correctAnswerIndex: 0,
    explanation: "When backfilling (running a DAG for last month), relying on `datetime.now()` pulls today's data instead. Airflow's `logical_date` (or `ds` string) tells the task exactly which historical interval it is currently processing, keeping data accurate."
  },
  {
    id: "de_8",
    text: "What is the primary benefit of 'Apache Parquet' over standard CSV/JSON for cloud-based analytical data lake storage?",
    options: [
      "Parquet is a plain-text format that can be edited in notepad.",
      "Parquet is a binary, columnar, compressed format containing schema metadata and column statistics (min/max), allowing query engines (Presto, Athena, Spark) to skip reading whole files during queries (predicate pushdown).",
      "Parquet is only compatible with AWS S3, whereas CSV is not.",
      "Parquet automatically writes SQL join statements for the developer."
    ],
    correctAnswerIndex: 1,
    explanation: "Parquet keeps column statistics. If a query looks for `age > 50`, the query engine reads Parquet file footers first. If a file's max age is 42, the engine skips reading the entire file from S3, saving network bandwidth and I/O."
  },
  {
    id: "de_9",
    text: "In distributed systems, what is the 'Medallion Architecture' (Bronze, Silver, Gold), and what is the typical structure of data in each zone?",
    options: [
      "It represents subscription tiers. Bronze is free; Silver is premium; Gold is enterprise.",
      "Bronze is raw ingestion (as-is); Silver is cleaned, conformed, and enriched data (joined and deduplicated); Gold is business-level aggregated and curated data ready for BI dashboards.",
      "Bronze is for SQL databases; Silver is for MongoDB; Gold is for graph databases.",
      "It describes physical network cables. Bronze is copper; Silver is fiber; Gold is satellite."
    ],
    correctAnswerIndex: 1,
    explanation: "Medallion architecture structures data lakes. Bronze keeps raw files (vital if you need to re-process). Silver sanitizes and structures data (cleaning nulls, standardizing dates). Gold builds aggregated data marts (e.g., monthly sales summary)."
  },
  {
    id: "de_10",
    text: "What is the core difference between the 'ETL' (Extract, Transform, Load) and 'ELT' (Extract, Load, Transform) data integration patterns?",
    options: [
      "ETL is purely local; ELT is cloud-only.",
      "ETL performs transformations on an intermediate compute server before writing to the database; ELT loads raw data directly into a powerful modern cloud data warehouse first, using the warehouse's SQL engine to transform data.",
      "ETL only works with text files; ELT works with image binaries.",
      "ELT was deprecated in 2024; ETL is the modern replacement."
    ],
    correctAnswerIndex: 1,
    explanation: "Legacy database hardware couldn't handle heavy transformations, so ETL used external servers. Modern cloud data warehouses (Snowflake, BigQuery) possess highly scalable compute engines. ELT leverages this by loading raw data and transforming it via SQL."
  },
  {
    id: "de_11",
    text: "In modern analytical SQL databases, what is a 'Window Function' (using the `OVER()` clause) and how does it differ from a standard `GROUP BY`?",
    options: [
      "Window functions are exclusively used to query windows of time in streaming pipelines.",
      "A standard `GROUP BY` collapses your rows into a single summary row; a window function performs calculations across a set of related rows but preserves the individuality of every single row in the result set.",
      "Window functions are used to build CSS layouts in data dashboards.",
      "Window functions translate SQL queries into Spark Scala code."
    ],
    correctAnswerIndex: 1,
    explanation: "With standard `GROUP BY`, you lose individual rows. A window function (e.g., `ROW_NUMBER() OVER (PARTITION BY dept ORDER BY salary DESC)`) calculates ranks, running totals, or moving averages while displaying all original, individual rows."
  },
  {
    id: "de_12",
    text: "What is 'Slowly Changing Dimension Type 2' (SCD Type 2) in data warehousing, and how does it preserve historical data changes?",
    options: [
      "It overwrites the old database record immediately, losing all history.",
      "It creates a new row with active/inactive status flags and validity date ranges (e.g. effective_start_date, effective_end_date) to track historical attribute changes over time.",
      "It saves changes as secondary tables inside a localized Excel spreadsheet.",
      "It scales down the database cluster during low-activity hours."
    ],
    correctAnswerIndex: 1,
    explanation: "SCD Type 2 tracks history. If a customer moves from NY to CA, Type 2 keeps the NY row (marking it expired) and writes a new CA row (marked active). This allows historical reporting to correctly associate old purchases with NY."
  },
  {
    id: "de_13",
    text: "In distributed streaming, what is 'Exactly-Once Semantics' (EOS), and why is it extremely challenging to implement?",
    options: [
      "It ensures that a user can only log in once per session.",
      "It guarantees that even in the face of network dropouts or worker crashes, every streaming record is processed exactly once by the system, requiring coordination between message offset commits and database transaction states.",
      "It limits streaming speeds to exactly one message per second.",
      "It requires deleting all database indexes before launching the stream."
    ],
    correctAnswerIndex: 1,
    explanation: "If a worker processes a message and writes to DB, but crashes before committing the offset to Kafka, it will re-read and duplicate the write on reboot. EOS coordinates state commits and database updates atomically (or ensures operations are strictly idempotent)."
  },
  {
    id: "de_14",
    text: "What is the purpose of 'Data Lineage' in enterprise data engineering platforms?",
    options: [
      "To trace the geographical origin of database developers.",
      "To map and trace the complete flow of data from its raw source origins, through all intermediate transformation jobs, pipelines, and tables, down to final BI dashboards and reports.",
      "To count the number of blank lines in SQL queries.",
      "To measure network transfer speeds between cloud regions."
    ],
    correctAnswerIndex: 1,
    explanation: "Data Lineage provides auditability. If a dashboard shows a wrong metrics score, lineage lets engineers trace backward to locate the exact pipeline step, raw file, or source database table that introduced the error."
  },
  {
    id: "de_15",
    text: "In Apache Spark, what is the 'Data Skew' problem, and what is a common symptom in Spark UI logs?",
    options: [
      "When data is encoded in different time zones. Symptom is file write failures.",
      "When a few partitions contain a massive portion of the dataset (e.g., due to joining on a null/default key), while others are tiny. Symptom is a single task in a stage hanging for hours while all other tasks complete instantly.",
      "When the Spark driver runs out of storage space. Symptom is disk failure.",
      "When Scala compiles code slower than Python. Symptom is long build times."
    ],
    correctAnswerIndex: 1,
    explanation: "Data skew occurs when sorting/joining on common keys (like NULL values). All matching rows go to a single partition/worker node. That worker chokes on GBs of data while other workers sit idle. Fix with salting or broadcast joins."
  },
  {
    id: "de_16",
    text: "What is 'Schema Evolution' in data lakes, and which storage format handles it natively?",
    options: [
      "The process where database schemas are automatically deleted and re-created every night. Handled by MySQL.",
      "The ability to safely add, rename, or drop columns in data tables over time without breaking historical files or queries. Handled natively by formats like Delta Lake, Iceberg, or Avro.",
      "A technique that translates SQL schemas into MongoDB JSON objects. Handled by Node.",
      "The evolution of cloud servers into faster hardware clusters. Handled by AWS."
    ],
    correctAnswerIndex: 1,
    explanation: "Delta Lake and Apache Iceberg maintain a metadata transaction log. When columns change, they update the log. Older files lacking the new column are read with default/null values, ensuring retro-compatibility and preventing query crashes."
  },
  {
    id: "de_17",
    text: "What is 'Change Data Capture' (CDC) in data engineering pipelines?",
    options: [
      "A security tool that logs changes made to developer git repositories.",
      "A process that monitors transactional databases (often reading database WAL logs directly) and streams real-time updates (inserts, updates, deletes) to analytical warehouses without performing expensive full-table scans.",
      "A regular expression that checks if a string is a valid date.",
      "An automated backup scheduler that duplicates databases."
    ],
    correctAnswerIndex: 1,
    explanation: "Instead of querying a busy production database every night via `SELECT *` (which degrades OLTP performance), CDC hooks into the database's commit log (WAL) to extract and stream individual record changes in near real-time, keeping analytical stores synchronized."
  },
  {
    id: "de_18",
    text: "When modeling data warehouses, what is the difference between a 'Star Schema' and a 'Snowflake Schema'?",
    options: [
      "Star Schema is for MySQL; Snowflake Schema is exclusively for the Snowflake data cloud.",
      "Star Schema keeps dimension tables fully de-normalized (flat, fast queries); Snowflake Schema normalizes dimension tables into secondary tables (saves storage, but increases SQL join counts).",
      "Star Schema uses text files; Snowflake Schema uses binary Parquet.",
      "There is no difference; they are different branding names for database indexing."
    ],
    correctAnswerIndex: 1,
    explanation: "Star schema dimensions are flat (e.g., City and Country columns are in the `Customer` table). Snowflake schema fully normalizes them, splitting `Country` into a separate table linked via keys. Star schemas are generally preferred in OLAP for query simplicity and speed."
  },
  {
    id: "de_19",
    text: "What is the primary role of 'dbt' (data build tool) in modern analytics engineering workflows?",
    options: [
      "To compile python scripts into local server executables.",
      "To manage the 'T' (Transform) in ELT pipelines, allowing analysts and engineers to write modular, version-controlled SQL select queries, auto-generating documentation, and executing data quality tests.",
      "To automate the scheduling of cloud server reboots.",
      "To perform real-time streaming of IoT packet traffic."
    ],
    correctAnswerIndex: 1,
    explanation: "dbt acts as a compiler for SQL. Instead of writing raw table creation scripts, you write modular SQL select statements. dbt handles the orchestration, compiling them into CTEs, tables, or views in your target warehouse, while running automated data tests."
  },
  {
    id: "de_20",
    text: "When reading structured files, what is 'Predicate Pushdown' and why is it highly efficient?",
    options: [
      "A technique that pushes processing of queries onto the client's local browser context.",
      "A feature where filtering conditions (e.g., `WHERE year = 2025`) are pushed directly down to the storage layer, allowing the system to read only matching data blocks and bypass loading non-matching blocks into memory.",
      "An automated SQL parser that translates SELECT statements into UPDATE statements.",
      "A database constraint that blocks users from entering duplicate rows."
    ],
    correctAnswerIndex: 1,
    explanation: "Without Predicate Pushdown, a system reads the entire file, loads it into RAM, and then filters it. Predicate pushdown uses metadata (like Parquet row-group statistics) to filter out entire file sections at the disk/S3 level, minimizing network and I/O."
  }
];
