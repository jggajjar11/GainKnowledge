import { Question } from "../types";

export const securityQuestions: Question[] = [
  {
    id: "sc_1",
    text: "What is 'Server-Side Request Forgery' (SSRF), and how does an attacker exploit it to breach cloud infrastructures?",
    options: [
      "When a client browser is hijacked to send multiple fake API calls. Exploit via DNS spoofing.",
      "When a backend server is tricked into executing HTTP requests to internal, private resources (like a cloud metadata service: 169.254.169.254) that should be inaccessible from the public internet.",
      "When a database administrator enters invalid passwords repeatedly. Exploit via dictionary attacks.",
      "When an attacker forces a domain to compile static assets over secure HTTPS connections."
    ],
    correctAnswerIndex: 1,
    explanation: "SSRF occurs when an app takes a user-supplied URL and fetches it server-side without validation. Attackers can pass internal IP addresses (like AWS Instance Metadata Service), retrieving sensitive cloud environment credentials."
  },
  {
    id: "sc_2",
    text: "What is 'Broken Object Level Authorization' (BOLA, formerly IDOR), and what is a classic scenario of this vulnerability in an API endpoint?",
    options: [
      "A bug where a database table crashes due to high load. Scenario: full table scan.",
      "When an endpoint accepts an object ID (e.g., `/api/invoice/998`) and returns the record without verifying that the currently logged-in user actually owns or has permission to read that specific record ID.",
      "An encryption mismatch where keys do not match. Scenario: SSL certificate expired.",
      "A compile-time error where TypeScript types are missing in variables."
    ],
    correctAnswerIndex: 1,
    explanation: "BOLA is one of the most common API vulnerabilities. If the server authenticates that User X is logged in, but fails to authorize that User X owns invoice `998`, User X can iterate numbers and read everyone's invoices."
  },
  {
    id: "sc_3",
    text: "In cryptographic systems, what is the core difference between Symmetric Encryption (e.g. AES) and Asymmetric Encryption (e.g. RSA, ECC)?",
    options: [
      "Symmetric is used only on mobile; Asymmetric is exclusively for server databases.",
      "Symmetric encryption uses the identical secret key for both encryption and decryption; Asymmetric encryption uses a mathematically linked keypair: a public key to encrypt and a private key to decrypt.",
      "Asymmetric encryption is 100x faster than symmetric encryption and uses less CPU.",
      "Symmetric encryption is purely manual; Asymmetric is automated by cloud providers."
    ],
    correctAnswerIndex: 1,
    explanation: "Symmetric (AES) is extremely fast and efficient, perfect for encrypting data-at-rest. Asymmetric (RSA/ECC) solves key-distribution: you can share your public key globally, letting anyone send you encrypted files that only you can decrypt."
  },
  {
    id: "sc_4",
    text: "What does the 'STRIDE' threat modeling framework stand for, and what security attribute does Spoofing compromise?",
    options: [
      "Speed, Testing, Reliability, Integration, Deployment, Evaluation. Spoofing compromises speed.",
      "Spoofing, Tampering, Repudiation, Information Disclosure, Denial of Service, Elevation of Privilege. Spoofing compromises Authenticity (user or machine identity).",
      "Storage, Security, Routing, Interfaces, Databases, Encryption. Spoofing compromises storage.",
      "There is no such framework; STRIDE was replaced by OWASP in 2024."
    ],
    correctAnswerIndex: 1,
    explanation: "STRIDE is Microsoft's threat modeling system. Spoofing (pretending to be someone else) compromises Authenticity. Tampering compromises Integrity. Repudiation compromises Non-repudiability. Information disclosure compromises Confidentiality."
  },
  {
    id: "sc_5",
    text: "In AppSec, what is the difference between SAST (Static Application Security Testing) and DAST (Dynamic Application Security Testing)?",
    options: [
      "SAST runs on physical hardware; DAST runs on virtual machines.",
      "SAST analyzes source code in a non-running state (inside IDE or repository) to find syntax flaws; DAST evaluates a running application over HTTP inputs to find active runtime vulnerabilities.",
      "SAST only tests SQL databases; DAST only tests CSS designs.",
      "DAST is performed manually; SAST is fully automated in git pipelines."
    ],
    correctAnswerIndex: 1,
    explanation: "SAST is 'inside-out' (scans code files for raw patterns like unsafe regex or missing sanitizers). DAST is 'outside-in' (acts as an active scanner, feeding malicious inputs into running endpoints to check for SQLi/XSS responses)."
  },
  {
    id: "sc_6",
    text: "What is 'Software Composition Analysis' (SCA) and why is it a vital phase in a secure SDLC pipeline?",
    options: [
      "An analysis of how well different developers write clean code layout styling.",
      "A security scan of your project's open-source dependencies (e.g., packages in package.json) to identify known CVE vulnerabilities and license compliance issues.",
      "A database scan to check table storage volumes.",
      "An automated optimizer that shrinks Docker image files."
    ],
    correctAnswerIndex: 1,
    explanation: "Modern apps are 80% open-source packages. SCA scanners (like Snyk, npm audit, Trivy) read your manifest and check if nested dependencies contain known vulnerabilities (CVEs), helping you update compromised libraries."
  },
  {
    id: "sc_7",
    text: "How does a 'Zero Trust Network Architecture' (ZTNA) model differ from traditional perimeter-based security models?",
    options: [
      "Zero Trust requires hiring zero external developers to prevent leaks.",
      "Zero Trust assumes that threats exist both inside and outside the network; it removes the concept of a 'trusted internal network' and requires continuous authentication, authorization, and device validation for every individual request.",
      "Zero Trust blocks all incoming HTTP requests, allowing only physical console access.",
      "Zero Trust relies entirely on public key infrastructure without password variables."
    ],
    correctAnswerIndex: 1,
    explanation: "Legacy security models acted like castles: secure the border, and once inside, you have full access. Zero Trust operates under 'Never Trust, Always Verify': even if you are on the internal corporate Wi-Fi, you must constantly verify identities."
  },
  {
    id: "sc_8",
    text: "What is 'Cross-Site Scripting' (XSS), and how does 'Stored XSS' differ from 'Reflected XSS'?",
    options: [
      "XSS is a database breach. Stored XSS deletes records; Reflected XSS duplicates them.",
      "Stored XSS occurs when malicious scripts are permanently stored in the database (e.g., in a forum post) and rendered to any user who visits; Reflected XSS occurs when a temporary script is echoed back from a single request (e.g., via search query parameters).",
      "XSS is a network packet drop. Reflected XSS affects only physical routers.",
      "Stored XSS runs on the server; Reflected XSS runs in the browser."
    ],
    correctAnswerIndex: 1,
    explanation: "XSS is injecting JavaScript into client browsers. Stored XSS is highly dangerous because a single injection (like a comment field) can run malicious code in the browser of every single user who reads that comment page."
  },
  {
    id: "sc_9",
    text: "You are setting up 'SAML' or 'OIDC' Single Sign-On (SSO). What is the primary role of the 'Identity Provider' (IdP) versus the 'Service Provider' (SP)?",
    options: [
      "IdP compiles the HTML pages; SP hosts the backend databases.",
      "The IdP authenticates the user's identity and issues security assertions (tokens); the SP (your application) trusts the IdP's tokens and grants access to the services.",
      "The SP is Apple App Store; the IdP is the cloud hosting provider.",
      "They are identical terms; both are handled by standard database tables."
    ],
    correctAnswerIndex: 1,
    explanation: "In enterprise SSO, the IdP (e.g. Okta, Azure AD) verifies who the user is (passwords, MFA). The SP (e.g. Slack, your app) doesn't manage passwords; it trusts the cryptographic tokens issued by the IdP, authorizing the user instantly."
  },
  {
    id: "sc_10",
    text: "What is a 'Rainbow Table' and how does it compromise basic, unsalted password hashes?",
    options: [
      "A colorful visual chart that logs password strengths in visual colors.",
      "A massive pre-computed lookup table of common words and their corresponding MD5/SHA256 hashes, allowing attackers to instantly reverse password hashes without performing slow brute-force calculations.",
      "A hardware server rack designed to speed up cloud backup procedures.",
      "A database indexing table that speeds up SELECT queries on password columns."
    ],
    correctAnswerIndex: 1,
    explanation: "If hashes are unsalted, 'password123' always hashes to `5e884898...`. A rainbow table holds millions of pre-hashed common words, making cracking database hashes a simple key-lookup task. Salting makes rainbow tables completely useless."
  },
  {
    id: "sc_11",
    text: "What is a 'Man-in-the-Middle' (MitM) attack, and what security standard protects APIs from this?",
    options: [
      "When a developer modifies database records without permission. Protected by SQL parameters.",
      "When an attacker intercepts, reads, or alters the network communications between a client and an API server. Protected by TLS (Transport Layer Security) with HTTPS.",
      "When a server fails to reboot after a deployment. Protected by Docker.",
      "An attack where multiple accounts are registered simultaneously. Protected by CAPTCHA."
    ],
    correctAnswerIndex: 1,
    explanation: "MitM attacks intercept open Wi-Fi or router connections to read plaintext credentials. TLS encrypts traffic between client and server, utilizing cryptographic handshakes so eavesdroppers see only scrambled bits."
  },
  {
    id: "sc_12",
    text: "What is 'SSRF' (Server-Side Request Forgery) protection on the application level? How should you restrict outgoing requests?",
    options: [
      "By blocking all incoming SQL queries inside API routes.",
      "By implementing a strict Outbound IP/Domain Whitelist, resolving dns locally, and blocking outgoing requests targeting private, local, or loopback network ranges (e.g., `10.0.0.0/8`, `127.0.0.1`, `169.254.0.0/16`).",
      "By using larger cookie sizes to store secure user sessions.",
      "By deploying the application inside an isolated Docker network."
    ],
    correctAnswerIndex: 1,
    explanation: "To stop SSRF, backend URL fetchers must parse URLs and resolve IPs. If the target IP falls into private RFC 1918 subnets (or loopbacks), the request must be instantly aborted to prevent internal network scanning."
  },
  {
    id: "sc_13",
    text: "What security vulnerability does a 'SQL Injection' (SQLi) expose, and how can an attacker abuse it beyond reading data?",
    options: [
      "It allows reading database structures. Abuse: can modify CSS styles.",
      "It allows injecting SQL fragments into input fields. Abuse: can bypass login checks, modify data, delete tables, or potentially execute shell commands on the underlying host OS using DB administrative functions.",
      "It causes memory leaks. Abuse: can crash browser tabs.",
      "It allows hackers to read cookies. Abuse: can bypass DNS firewalls."
    ],
    correctAnswerIndex: 1,
    explanation: "SQLi is catastrophic. Beyond reading tables, attackers can inject commands to delete data (`DROP TABLE`), write files to disks, or (in database engines like MS SQL/Postgres with administrative functions enabled) execute OS shell commands."
  },
  {
    id: "sc_14",
    text: "What is 'Clickjacking', and what HTTP response header prevents it?",
    options: [
      "When an ad script drains user mobile batteries. Prevent with ad blockers.",
      "When an attacker overlays an invisible iframe of your website over a malicious page, tricking users into clicking hidden buttons on your site. Prevent with `X-Frame-Options: DENY` or CSP `frame-ancestors 'none'`.",
      "When an attacker hijacks a domain DNS registration. Prevent with DNSSEC.",
      "When a physical mouse button is broken. Prevent with keyboard inputs."
    ],
    correctAnswerIndex: 1,
    explanation: "Clickjacking overlays a transparent iframe (like a 'Delete My Account' page) over a fake game. Clicking the game clicks the invisible button. Setting `X-Frame-Options` or CSP restricts where your page can be embedded, blocking the overlay."
  },
  {
    id: "sc_15",
    text: "What does the security concept of 'Defense in Depth' specify?",
    options: [
      "Storing all database backup files in deep undersea data centers.",
      "Implementing multiple layered security controls (network firewalls, IAM, encryption, code scanners, MFA) across all application vectors, so if one control fails, other layers are active to block the breach.",
      "Running security tests exclusively during late-night development hours.",
      "Writing extremely deep and complex nested directories inside code structures."
    ],
    correctAnswerIndex: 1,
    explanation: "No single security control is perfect. Defense in Depth ensures that if a hacker exploits an application bug (e.g. SQLi), they are still blocked from host access by a non-root Docker user, database VPC isolation, and KMS encryption."
  },
  {
    id: "sc_16",
    text: "When managing APIs, what is the threat known as 'Credential Stuffing' and how do you defend against it?",
    options: [
      "When developers commit passwords to Git. Defend with .gitignore files.",
      "An automated attack where hackers use scripts to feed millions of leaked username/password combinations (from other breaches) into your login page, looking for recycled credentials. Defend with MFA, rate limiting, and CAPTCHAs.",
      "When a database column runs out of storage space. Defend with column indexing.",
      "When a user enters a password containing too many special characters. Defend with regex."
    ],
    correctAnswerIndex: 1,
    explanation: "Since users recycle passwords across websites, a breach on site A lets hackers script credential stuffing attacks on site B. Defensive controls like cloud firewalls (WAFs), CAPTCHAs, rate-limiting login attempts, and MFA stop these bots."
  },
  {
    id: "sc_17",
    text: "What is the purpose of 'JWT Signing' (Json Web Token) and what security attribute does it guarantee?",
    options: [
      "It encrypts the payload so that it cannot be read by anyone. Guarantees confidentiality.",
      "It uses a secret key (symmetric) or private key (asymmetric) to append a cryptographic signature, allowing the server to verify that the token's contents have not been altered (tampered with) by the client. Guarantees Integrity.",
      "It compresses the session details. Guarantees fast load times.",
      "It converts the payload into an XML database structure. Guarantees portability."
    ],
    correctAnswerIndex: 1,
    explanation: "JWTs are base64-encoded strings and can be decoded by anyone (not encrypted by default). The signature guarantees Integrity: if a user decodes their token and changes `role: 'user'` to `role: 'admin'`, the server signature verification will fail."
  },
  {
    id: "sc_18",
    text: "What does 'SAML' stand for and in what context is it primarily utilized?",
    options: [
      "Security Assessment Markup Language; used in database backups.",
      "Security Assertion Markup Language; an XML-based open standard for exchanging authentication and authorization data between identity providers and service providers, heavily used in enterprise SSO.",
      "Symmetric Asset Management Layout; used in CSS grid structures.",
      "Supervised Active Machine Learning; used in AI engineering models."
    ],
    correctAnswerIndex: 1,
    explanation: "SAML is the backbone of traditional enterprise Single Sign-On. It allows secure web-based authentication, letting corporate employees sign in once to their dashboard and access 100+ separate software tools without re-typing passwords."
  },
  {
    id: "sc_19",
    text: "What is the vulnerability known as 'Directory Traversal' (or Path Traversal) and how do you secure file download endpoints against it?",
    options: [
      "A network error when routing folders across cloud projects. Secure with VPC peering.",
      "When input parameters are used directly in file paths, letting attackers pass sequences like `../../etc/passwd` to download arbitrary host files. Secure by sanitizing paths, using whitelisted file maps, or storing assets in isolated cloud buckets.",
      "When a user creates too many nested folders in the application UI. Secure with CSS limits.",
      "When files are saved without a file extension. Secure with MIME filters."
    ],
    correctAnswerIndex: 1,
    explanation: "If you have an endpoint like `/download?file=logo.png` and resolve it as `path.join(__dirname, file)`, passing `../../etc/passwd` escapes the root directory. You must sanitize user input, strip `..` patterns, or use database-driven file lookup tables."
  },
  {
    id: "sc_20",
    text: "What does the security acronym 'MFA' stand for and what are the three classic authentication factors?",
    options: [
      "Memory, File, Archive; factors are RAM, SSD, and Tape storage.",
      "Multi-Factor Authentication; factors are Something You Know (password), Something You Have (authenticator token/phone), and Something You Are (biometrics).",
      "Model, Flow, Access; factors are database schemas, API routes, and cloud roles.",
      "Metric, Frequency, Analysis; factors are CPU load, latency, and throughput."
    ],
    correctAnswerIndex: 1,
    explanation: "MFA multiplies authentication hurdles. Requiring multiple factors means even if an attacker compromises a user's password (Something You Know), they still cannot breach the account without physical access to their phone/token (Something You Have)."
  }
];
