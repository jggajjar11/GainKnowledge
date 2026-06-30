import { Question } from "../types";

export const fullstackQuestions: Question[] = [
  {
    id: "fs_1",
    text: "When designing a Next.js or Remix application, what is the core architectural difference between 'Server-Side Rendering' (SSR) and 'Incremental Static Regeneration' (ISR)?",
    options: [
      "SSR compiles components into WebAssembly; ISR translates them into raw SQL.",
      "SSR renders the page on the server for every single incoming request (highly dynamic, higher latency); ISR builds a static HTML file at compile-time and regenerates it in the background on a schedule or via on-demand revalidation.",
      "SSR runs entirely in the user's browser; ISR runs exclusively on GCP Cloud Run.",
      "There is no difference; SSR is just an older marketing name for ISR."
    ],
    correctAnswerIndex: 1,
    explanation: "SSR is request-driven, creating fresh HTML on each page hit. ISR serves pre-rendered static HTML instantly, and then rebuilds the page in the background once a specified timeout or webhook triggers, combining static speeds with dynamic updates."
  },
  {
    id: "fs_2",
    text: "A browser blocks your frontend from fetching an API. You see a CORS error in console. Why did the browser block this, and how do you fix it securely?",
    options: [
      "The client's computer is infected with malware. Fix by scanning the operating system.",
      "The browser blocked it due to Same-Origin Policy because the API server didn't return an Access-Control-Allow-Origin header matching your client origin. Fix by adding the client's specific URL to the server's allowed origins list.",
      "The server is shut down. Fix by restarting the Express container.",
      "The client is sending too many requests. Fix by disabling local javascript in the browser."
    ],
    correctAnswerIndex: 1,
    explanation: "CORS is a browser security mechanism. If origin A tries to request origin B, the browser checks for a handshake. To fix it, origin B's server must return headers (Access-Control-Allow-Origin) authorizing origin A. Avoid wildcard `*` in authenticated APIs."
  },
  {
    id: "fs_3",
    text: "To protect session cookies from Cross-Site Scripting (XSS) and Cross-Site Request Forgery (CSRF) attacks, which cookie flags must be set on your authentication cookie?",
    options: [
      "Set `Expires=0` and `Path=/` flags.",
      "Set `HttpOnly` (blocks JS access, protecting against XSS), `Secure` (forces HTTPS transmission), and `SameSite=Lax` or `SameSite=Strict` (blocks cookie from being sent on cross-site requests, protecting against CSRF).",
      "Set `Domain=*` and `Max-Age=99999` to keep the user signed in permanently.",
      "No flags are needed; modern browsers handle cookie security automatically."
    ],
    correctAnswerIndex: 1,
    explanation: "`HttpOnly` blocks scripts (XSS) from reading `document.cookie`. `Secure` prevents transit over unencrypted channels. `SameSite` dictates when cookies are sent with cross-site requests, which blocks CSRF attacks."
  },
  {
    id: "fs_4",
    text: "Why is storing JWT tokens in standard browser `localStorage` generally considered a high security risk for sensitive production apps?",
    options: [
      "Because localStorage automatically deletes data every 24 hours.",
      "Because localStorage is physically readable by any JavaScript script running on your page, including third-party analytics, ads, or compromised npm dependencies via XSS attacks.",
      "Because localStorage is extremely slow, causing the client browser to lag.",
      "Because localStorage only supports raw XML structures."
    ],
    correctAnswerIndex: 1,
    explanation: "Any script on your page has access to `localStorage`. If your app is vulnerable to XSS (e.g., from an untrusted script or injection), an attacker can easily read the JWT and hijack the user session. Secure cookies are far more resilient."
  },
  {
    id: "fs_5",
    text: "What is a 'CORS Preflight' request, and what HTTP method does the browser use to execute it?",
    options: [
      "An automated check to see if the user has a valid subscription. Uses the GET method.",
      "A preliminary request sent by the browser before the actual request, using the OPTIONS method, to verify that the target server understands and allows the custom headers/methods of the upcoming request.",
      "An encryption handshake that happens on the network level. Uses the POST method.",
      "A cache clearing operation performed by the client. Uses the DELETE method."
    ],
    correctAnswerIndex: 1,
    explanation: "For 'non-simple' requests (e.g., requests with JSON body, PUT/DELETE, or custom headers), the browser sends an OPTIONS request first. If the server responds with a 2xx status and correct CORS headers, the browser fires the actual request."
  },
  {
    id: "fs_6",
    text: "When implementing 'Offline Sync' (e.g., in a Progressive Web App), why do you use a Service Worker, and what client-side storage is best suited for offline databases?",
    options: [
      "To run background threads that directly query the server's Postgres database. Use localStorage.",
      "To intercept network requests, cache assets, and queue data syncs; use IndexedDB because it supports large, structured binary and textual data storage and operates asynchronously.",
      "To encrypt browser cookies securely; use session storage.",
      "To automatically reboot the client's router; use cookies."
    ],
    correctAnswerIndex: 1,
    explanation: "Service Workers act as local proxies intercepting network requests to serve assets offline. IndexedDB is perfect for storing offline queues/data because it's non-blocking (async) and handles massive datasets unlike localStorage."
  },
  {
    id: "fs_7",
    text: "What is 'Server-Side Hydration' in modern JavaScript frameworks (like React/Svelte), and why is it necessary?",
    options: [
      "The process of loading remote assets into the database cluster.",
      "The process where client-side JavaScript reads the static HTML pre-rendered by the server and attaches event listeners, boots local state managers, and renders the application interactive.",
      "A technique to compress HTML before shipping it over networks.",
      "A server-side memory cleanup utility that runs every 5 minutes."
    ],
    correctAnswerIndex: 1,
    explanation: "SSR ships fast, non-interactive HTML to the browser. Hydration is the phase where the browser loads the client JS, walks the existing HTML, and binds event handlers (like onClick) so the page becomes interactive."
  },
  {
    id: "fs_8",
    text: "Why is 'Debouncing' critical when implementing a search bar that queries a backend API as the user types, and how does it differ from 'Throttling'?",
    options: [
      "Debouncing speeds up database index reads by 10x.",
      "Debouncing delays the API call until the user has stopped typing for a specified time (e.g., 300ms); Throttling limits the API call to at most once per fixed time interval (e.g., once every 500ms) regardless of input activity.",
      "Throttling is used for forms, whereas debouncing is for video playback.",
      "Debouncing is done on the server-side, whereas throttling is client-side."
    ],
    correctAnswerIndex: 1,
    explanation: "Without debouncing, typing 'React' triggers 5 separate API queries. Debouncing resets a timer on every keypress, firing only when typing pauses. Throttling is better for scroll/resize handlers, enforcing steady interval checks."
  },
  {
    id: "fs_9",
    text: "In a full-stack system, what is 'SQL Injection' (SQLi), and what is the absolute best way to eliminate this risk entirely in your backend code?",
    options: [
      "A database bug where records are duplicated. Eliminate by adding unique constraints.",
      "When untrusted user input is concatenated directly into raw SQL strings, allowing attackers to execute arbitrary database queries. Eliminate by using parameterized queries (prepared statements) or a secure ORM.",
      "A hardware hack where electricity is routed to hard drives. Eliminate by using SSL.",
      "When SQL files are checked into Git. Eliminate by adding them to .gitignore."
    ],
    correctAnswerIndex: 1,
    explanation: "Parameterized queries separate the SQL query structure from the user data. The database compiles the SQL template first, treating user parameters strictly as literal values, rendering SQL injection payloads inert."
  },
  {
    id: "fs_10",
    text: "What is 'Web Security Headers' and what does 'Content Security Policy' (CSP) help prevent?",
    options: [
      "An encryption layer for HTTPS. CSP prevents data packet loss.",
      "A set of HTTP response headers that direct the browser to enable specific security boundaries. CSP restricts where scripts, styles, and assets can be loaded from, blocking XSS and clickjacking attacks.",
      "A backup system for routers. CSP prevents domain registration hijacking.",
      "A visual header bar in browsers that displays a lock icon."
    ],
    correctAnswerIndex: 1,
    explanation: "CSP tells the browser: 'Only load scripts from self and secure domain X.' Even if an attacker injects a `<script src='evil.com'>` tag into your page (XSS), the browser reads the CSP policy, blocks the script, and reports the breach."
  },
  {
    id: "fs_11",
    text: "What is 'Database Connection Exhaustion' in serverless architectures (like AWS Lambda or GCP Cloud Functions) and how do you resolve it?",
    options: [
      "When the serverless function runs out of disk space. Resolve by adding SSD mount paths.",
      "Serverless scales by spinning up hundreds of isolated container instances. If each opens a database connection pool, the database's connection limit is quickly exhausted. Resolve by using an RDS Proxy or HTTP-based database connection pools.",
      "When database tables have too many records. Resolve by partitioning columns.",
      "When users log out of the application simultaneously. Resolve with cache-aside."
    ],
    correctAnswerIndex: 1,
    explanation: "Serverless lacks persistent backend memory. 500 concurrent function invocations mean 500 independent processes. Since standard pools open multiple connections per process, a database can easily run out of sockets. Proxies queue and share sockets."
  },
  {
    id: "fs_12",
    text: "When designing a secure API 'Webhook' listener (e.g., receiving payment notifications from Stripe), how do you verify that the incoming POST request is genuinely from Stripe and not an attacker spoofing the endpoint?",
    options: [
      "By verifying that the sender's IP address matches Stripe's public domain name via a reverse DNS lookup.",
      "By verifying the cryptographic signature included in the request headers (e.g., Stripe-Signature) using the webhook signing secret shared securely with Stripe.",
      "By forcing Stripe's server to fill out a CAPTCHA form on every request.",
      "By checking if the request body contains a 'trust_me: true' flag."
    ],
    correctAnswerIndex: 1,
    explanation: "Verifying webhook signatures is critical. The provider signs the request body using a shared secret key. Your backend hashes the incoming payload with the secret. If your calculated hash matches the signature, the payload is authentic."
  },
  {
    id: "fs_13",
    text: "What is the primary trade-off of using a 'Client-Side Routing' (SPA) approach versus 'Multi-Page Routing' (MPA)?",
    options: [
      "SPAs are highly insecure and cannot utilize HTTPS.",
      "SPAs deliver incredibly fast transitions and desktop-like interactions after initial load, but suffer from heavy initial JS bundles (slower first load) and complicated SEO configuration compared to MPAs.",
      "MPAs require writing all components in native C++.",
      "SPAs are only compatible with relational databases."
    ],
    correctAnswerIndex: 1,
    explanation: "SPAs load a single HTML page and swap out views dynamically via JavaScript. This offers amazing speed once loaded, but the initial page download is larger and search engines historically found indexing SPAs difficult without SSR."
  },
  {
    id: "fs_14",
    text: "What does the browser's 'HTTP Strict Transport Security' (HSTS) response header enforce?",
    options: [
      "It blocks scripts from accessing cookies.",
      "It forces the browser to only connect to the domain using secure HTTPS connections, automatically converting all insecure HTTP links to HTTPS on the client side.",
      "It limits the number of open tabs a user can have on your website.",
      "It compiles CSS layouts into WebAssembly files."
    ],
    correctAnswerIndex: 1,
    explanation: "HSTS protects users from man-in-the-middle attacks (like SSL stripping). Once a browser sees the HSTS header, it remembers to never send insecure HTTP requests to that domain, executing automatic secure redirects client-side."
  },
  {
    id: "fs_15",
    text: "What is 'CSS-in-JS' runtime performance overhead in large-scale React applications, and why has the industry shifted back toward utility-first (Tailwind) or build-time CSS?",
    options: [
      "CSS-in-JS is not supported in Google Chrome, causing page load failures.",
      "Runtime CSS-in-JS libraries (like Styled Components) must parse styles, generate class names, and inject style tags into the DOM during component execution, causing CPU bottlenecks and lag during massive list renders.",
      "Tailwind automatically hosts all images on a global CDN.",
      "CSS-in-JS is incompatible with TypeScript typing definitions."
    ],
    correctAnswerIndex: 1,
    explanation: "In big applications, evaluating CSS-in-JS styles during the React render cycle burns considerable CPU cycles. Tailwind or CSS Modules are compiled at build time into standard static CSS classes, avoiding all runtime script overhead."
  },
  {
    id: "fs_16",
    text: "How do you securely handle a password reset flow in a full-stack application?",
    options: [
      "Email the user their current password in plain text so they can remember it.",
      "Generate a short-lived, cryptographically secure random token, hash it and store it in the DB with an expiration timestamp, and send a unique URL containing the token to the user's registered email.",
      "Directly expose the user's database row to a client-side form.",
      "Send a temporary password '123456' and disable passwords for 24 hours."
    ],
    correctAnswerIndex: 1,
    explanation: "Password resets must be highly secure. Short-lived (e.g., 15 mins) single-use tokens must be hashed in the database (similar to passwords) so a database breach doesn't leak active recovery links."
  },
  {
    id: "fs_17",
    text: "What is the primary benefit of 'Server Components' (RSC) in frameworks like React 19 / Next.js?",
    options: [
      "They allow client-side animations to run directly on the server.",
      "They render components exclusively on the server, allowing developers to query databases directly inside components and shipping zero client-side JavaScript for those components, reducing bundle size.",
      "They automate the installation of backend server modules.",
      "They let you run Python code directly in a React context."
    ],
    correctAnswerIndex: 1,
    explanation: "RSC allows components to stay server-side. Since they don't hydrate or execute on the client, their dependencies (like heavy markdown parser libraries) are not shipped in the client bundle, optimizing loading performance."
  },
  {
    id: "fs_18",
    text: "When implementing 'Long Polling' as a fallback for real-time data, how does it differ from standard 'Short Polling'?",
    options: [
      "Long polling uses twice as much database space as short polling.",
      "Short polling repeatedly queries the server on a fixed timer; Long polling opens an HTTP request, and the server holds the response open until new data is available or a timeout occurs, reducing unnecessary empty request overhead.",
      "Long polling requires peer-to-peer WebRTC connections.",
      "Short polling is only supported in Internet Explorer."
    ],
    correctAnswerIndex: 1,
    explanation: "Short polling generates massive request overhead by querying every X seconds. Long polling keeps the request socket hanging. As soon as the server receives data, it responds, and the client instantly opens a new long-poll request."
  },
  {
    id: "fs_19",
    text: "What is the function of 'Rate Limiting' in API security, and what algorithm is commonly used?",
    options: [
      "It limits the file size of uploads. Uses the LZMA algorithm.",
      "It limits the number of requests a user/IP can make in a given timeframe to prevent abuse, scraping, and DDoS attacks. A common algorithm is Token Bucket or Sliding Window Log.",
      "It limits database query response sizes to 50 items. Uses the binary search algorithm.",
      "It scales down server CPU usage automatically during off-hours."
    ],
    correctAnswerIndex: 1,
    explanation: "Rate limiting protects servers from overloading and credentials attacks. The Token Bucket algorithm represents capacity with tokens; requests consume tokens. Tokens replenish over time, smoothly handling bursts while capping peak rates."
  },
  {
    id: "fs_20",
    text: "What is the security risk of a 'CSRF' (Cross-Site Request Forgery) attack, and how does a Anti-CSRF token mitigate it?",
    options: [
      "CSRF reads your database records. Mitigated with database encryption.",
      "An attacker tricks a logged-in user's browser into executing an unauthorized action on a target site (e.g., changing passwords) using their automatic session cookies. A unique, unpredictable Anti-CSRF token sent in headers/body ensures the request originated from the genuine frontend.",
      "It causes browser tabs to crash. Mitigated with web workers.",
      "It forces the client browser to download mining software. Mitigated with ad-blockers."
    ],
    correctAnswerIndex: 1,
    explanation: "Since browsers append session cookies to all requests going to Domain A (even if the request was triggered by a script on malicious Domain B), attackers can trigger state changes. A random, one-time token validates the request actually came from Domain A's UI."
  }
];
