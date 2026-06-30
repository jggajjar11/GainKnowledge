import { Question } from "../types";

export const qaQuestions: Question[] = [
  {
    id: "qa_1",
    text: "How does the architecture of modern testing tools like Playwright and Cypress differ fundamentally from Selenium, and what is the impact on test execution?",
    options: [
      "Selenium runs on the server; Playwright runs on the client's phone.",
      "Selenium communicates asynchronously over HTTP via the WebDriver protocol; Playwright connects directly to browsers via secure, bidirectional WebSockets (CDP - Chrome DevTools Protocol), enabling instant commands, auto-waiting, and network interception.",
      "Playwright requires compiling the web application into an executable; Selenium does not.",
      "Selenium only supports HTML; Playwright supports testing database tables directly."
    ],
    correctAnswerIndex: 1,
    explanation: "Selenium's HTTP REST-based WebDriver has high network overhead, making it slower and causing flaky 'sleep' waits. Playwright's websocket connection allows real-time browser instrumentation, native events, and automatic waits."
  },
  {
    id: "qa_2",
    text: "What is 'Contract Testing' (e.g. using Pact), and what problem does it solve in microservice architectures that standard E2E tests struggle with?",
    options: [
      "It verifies that developers have signed their contracts. Solves legal compliance issues.",
      "It verifies that a service provider and a consumer agree on the schema and payload of API interactions, allowing them to test integrations in isolation without spinning up the entire microservice ecosystem.",
      "It measures the compile time of separate Docker containers.",
      "It blocks deployment of APIs that do not have valid SSL certificates."
    ],
    correctAnswerIndex: 1,
    explanation: "E2E testing in microservices is painful, requiring 20+ services online. Contract testing lets a consumer write 'contracts' of expected requests/responses. The provider tests against this contract locally, ensuring changes don't break clients."
  },
  {
    id: "qa_3",
    text: "Your E2E test suite regularly fails in CI because a certain button takes variable time to load. What is the best-practice way to resolve this 'Flaky Test'?",
    options: [
      "Add a hardcoded `await page.waitForTimeout(5000);` before clicking the button.",
      "Use Playwright/Cypress automatic waiting or locate elements via dynamic states (e.g., `await page.locator('button').waitFor({ state: 'visible' })`), which polls the DOM up to a configurable timeout.",
      "Restart the CI runner up to 10 times until it passes by luck.",
      "Disable testing on that button entirely."
    ],
    correctAnswerIndex: 1,
    explanation: "Hardcoded sleeps (timeouts) make tests slow and still fail when servers lag. Declarative waiting polls the browser continuously, completing the wait *instantly* when the button appears, maximizing test speed and reliability."
  },
  {
    id: "qa_4",
    text: "What is the difference between a 'Stub', a 'Mock', and a 'Spy' in unit and integration testing?",
    options: [
      "Stubs are for databases; Mocks are for APIs; Spies are for security firewalls.",
      "A Stub returns pre-cooked canned data; a Mock pre-programs expectations (e.g. asserts that method X is called with arguments Y); a Spy wraps a real object, recording how it was interacted with without changing its behavior.",
      "They are duplicate names for identical mocking mechanisms.",
      "A Mock compiles code; a Stub runs the code; a Spy measures memory leaks."
    ],
    correctAnswerIndex: 1,
    explanation: "Stubs are passive (used to bypass dependencies). Mocks are active (they fail the test if the code doesn't call them as expected). Spies are retrospective (they let you assert things like `expect(myFunction).toHaveBeenCalledTimes(2)`)."
  },
  {
    id: "qa_5",
    text: "When conducting load testing, what is the core benefit of using modern tools like 'k6' (Grafana) over legacy tools like Apache JMeter?",
    options: [
      "k6 compiles tests into native iOS mobile binaries.",
      "k6 is written in Go, executes lightweight virtual users on single threads (low CPU/RAM usage), and lets you write load test scenarios in standard JavaScript, whereas JMeter uses heavy Java threads and complex XML interfaces.",
      "k6 runs exclusively on physical database servers.",
      "k6 automatically fixes code bugs it discovers during load tests."
    ],
    correctAnswerIndex: 1,
    explanation: "JMeter launches a full OS thread per virtual user, consuming massive RAM. k6 uses Go goroutines to scale to thousands of active virtual users on single machines, while providing clean JS scripts instead of clunky XML."
  },
  {
    id: "qa_6",
    text: "What does the 'Testing Pyramid' recommend regarding the ratio and distribution of tests in an enterprise software project?",
    options: [
      "90% E2E tests, 10% Unit tests to maximize confidence.",
      "A broad base of fast, cheap Unit Tests; a medium layer of Integration/API Tests; and a very small, selective peak of slow, expensive End-to-End (E2E) UI Tests.",
      "An equal count of unit, integration, and E2E tests across all folders.",
      "No unit tests; only manual exploratory QA sessions before releases."
    ],
    correctAnswerIndex: 1,
    explanation: "Unit tests are fast (milliseconds) and cheap to maintain. E2E tests are slow (minutes), heavy, and fragile. The pyramid ensures you catch 90% of bugs early in unit/integration stages, reserving E2E for critical user journeys."
  },
  {
    id: "qa_7",
    text: "In API testing, what does the HTTP status code '415' (Unsupported Media Type) typically indicate, and how do you resolve it?",
    options: [
      "The server is missing a valid SSL certificate. Resolve by buying a certificate.",
      "The client sent a payload in a format (e.g. XML) that the server's endpoint cannot process. Resolve by setting the correct `Content-Type: application/json` header in the request.",
      "The database is locked due to high concurrent connections. Resolve by connection pooling.",
      "The resource does not exist. Resolve by checking the URL path."
    ],
    correctAnswerIndex: 1,
    explanation: "A 415 error means the API refuses to accept the format of the incoming request. If you send a JSON payload but forget to specify `Content-Type: application/json` (or send text instead), the parser rejects the request."
  },
  {
    id: "qa_8",
    text: "What is 'Visual Regression Testing' (e.g. Percy, Applitools), and how does it detect bugs that standard element assertions miss?",
    options: [
      "It tests the speed of screen rendering in milliseconds.",
      "It captures screenshots of the web pages, comparing them pixel-by-pixel against historical baseline screenshots, detecting visual breaks, text overflows, or CSS color glitches.",
      "It tracks the user's eyeballs using webcam tracking scripts.",
      "It compiles CSS layouts into raw canvas coordinate matrices."
    ],
    correctAnswerIndex: 1,
    explanation: "A button can be functional and pass `expect(button).toBeVisible()` even if CSS bugs have rendered it upside down or overlapping text. Visual testing captures screenshots, using differential algorithms to detect visual skew."
  },
  {
    id: "qa_9",
    text: "What is 'Mutation Testing' (e.g. using Stryker), and how does it measure the quality of your unit test suites?",
    options: [
      "It modifies application dependencies to check if the app crashes.",
      "It injects tiny synthetic bugs (mutants) into your actual application code (e.g. changing `>` to `<`). If your unit test suite still passes, it indicates your tests failed to detect the bug (the mutant survived), revealing weak assertions.",
      "It translates JavaScript files into TypeScript files.",
      "It runs tests in parallel across multiple physical operating systems."
    ],
    correctAnswerIndex: 1,
    explanation: "Standard line/branch coverage tells you *if* a line ran, not if your test actually asserted its correctness. Mutation testing breaks code logic in memory. If tests still pass, your assertions are blind and need hardening."
  },
  {
    id: "qa_10",
    text: "In E2E testing, why is 'Network Interception / Mocking' extremely useful during frontend development and automation pipelines?",
    options: [
      "It accelerates connection speeds by bypassing physical Wi-Fi hardware.",
      "It allows you to intercept outgoing API calls, modifying headers, injecting synthetic error states (e.g., 500 Internals), or mocking slow responses to test how the frontend UI handles extreme states in isolation.",
      "It lets you write SQL statements inside browser cookies.",
      "It translates HTML pages into compressed PDF reports."
    ],
    correctAnswerIndex: 1,
    explanation: "Playwright's `route()` or Cypress's `intercept()` lets you mock backend responses. This allows testing edge cases (like how the UI behaves when the payment API returns a 503 or takes 10 seconds) without touching the real backend."
  },
  {
    id: "qa_11",
    text: "What is 'Sanity Testing' and how does it differ from a full 'Regression Testing' suite?",
    options: [
      "Sanity testing is performed by database administrators to check index tables.",
      "Sanity testing is a subset of regression testing, executed quickly to verify that a specific bug fix or small code change functions correctly before running the full, exhaustive regression suite.",
      "Sanity testing only runs on local developer machines, never in CI.",
      "There is no difference; they are interchangeable terms in manual QA."
    ],
    correctAnswerIndex: 1,
    explanation: "Sanity testing is quick and focused, verifying that the application is 'sane' enough to proceed with heavier testing. Full regression testing is a massive, exhaustive sweep checking that *no* existing feature was broken by changes."
  },
  {
    id: "qa_12",
    text: "What does the testing term 'TDD' (Test-Driven Development) prescribe as the core development cycle?",
    options: [
      "Write all application code first, and let a junior QA write tests later.",
      "Red-Green-Refactor: Write a failing unit test first (Red), write the minimum code necessary to make the test pass (Green), and then refactor the code to meet quality standards while keeping tests passing.",
      "Write tests only when customers report active bugs in production.",
      "Run the compiler repeatedly until syntax errors are resolved."
    ],
    correctAnswerIndex: 1,
    explanation: "TDD flips traditional coding. Writing tests first forces you to design clean APIs and understand requirements. Red: confirm test fails. Green: implement minimal code. Refactor: clean up variables and structures with tests as a safety net."
  },
  {
    id: "qa_13",
    text: "What is the primary objective of 'Boundary Value Analysis' (BVA) when designing black-box test cases?",
    options: [
      "To check how many total records can fit inside a database table.",
      "To test inputs at the extreme boundaries and just outside the boundaries of input equivalence classes (e.g., testing values like 0, 1, 99, 100, 101), where programming logic errors commonly occur.",
      "To verify that web layouts look correct on mobile screen boundaries.",
      "To measure the physical latency of network queries at country borders."
    ],
    correctAnswerIndex: 1,
    explanation: "Developers frequently make off-by-one errors (e.g., using `<` instead of `<=`). BVA targets these exact fault vectors by testing the minimum, maximum, and values immediately inside and outside the acceptable ranges."
  },
  {
    id: "qa_14",
    text: "In web automation, why is locating elements via 'CSS Classes' or 'XPath' (like `/div/p[2]`) generally considered a bad practice, and what should you use instead?",
    options: [
      "CSS classes cannot be read by Playwright. Use Javascript selectors instead.",
      "They are highly fragile and break whenever layout or styling changes. Use user-facing accessibility roles (getByRole, getByText) or dedicated test IDs (data-testid) that remain stable regardless of style changes.",
      "XPath selectors are insecure and expose database credentials.",
      "They run 10x slower on modern chrome browsers."
    ],
    correctAnswerIndex: 1,
    explanation: "Locators like `.btn-blue-rounded` or raw XPath break if a designer refactors style. Using `page.getByRole('button', { name: 'Submit' })` tests the page as a user sees it, which improves accessibility and maintains test resilience."
  },
  {
    id: "qa_15",
    text: "What is 'Integration Testing', and how does it differ from 'Unit Testing'?",
    options: [
      "Integration testing is performed exclusively on staging cloud servers.",
      "Unit testing tests individual functions/components in complete isolation; Integration testing verifies that multiple distinct modules, databases, or external APIs interact correctly when combined.",
      "Integration testing only tests HTML layout, while Unit testing tests JS math.",
      "Unit testing is performed manually; Integration testing is always automated."
    ],
    correctAnswerIndex: 1,
    explanation: "Unit tests mock out all dependencies (like databases). Integration tests actively test the boundary. For example, testing that your Postgres repository can successfully write a real record and read it back is an integration test."
  },
  {
    id: "qa_16",
    text: "When executing E2E tests, what is the role of a 'Headless Browser'?",
    options: [
      "A browser that does not display a graphical user interface (GUI), running in background memory to execute tests significantly faster and consume minimal server RAM during CI pipelines.",
      "A broken browser that fails to load CSS files.",
      "A special browser designed for visually impaired users.",
      "A tool that hosts web applications on a terminal interface."
    ],
    correctAnswerIndex: 0,
    explanation: "In CI, servers lack physical monitors. Headless browsers (like headless Chromium or WebKit) run in memory. This eliminates rendering frames to screens, which cuts down overhead and increases execution speeds by up to 3x."
  },
  {
    id: "qa_17",
    text: "What is 'Equivalence Partitioning' as a test design technique?",
    options: [
      "Dividing the database into equal storage segments to balance load.",
      "Grouping input data into classes that can be expected to behave in the same way, allowing you to test only a single representative value from each partition, reducing total test counts.",
      "Splitting testing tasks equally among developers in a team.",
      "A technique that translates SQL queries into equal-length strings."
    ],
    correctAnswerIndex: 1,
    explanation: "If a form accepts ages 18 to 65, you partition inputs into: Invalid (<18), Valid (18-65), and Invalid (>65). Testing numbers like -5, 30, and 90 verifies all partition classes, saving you from testing 100 distinct numbers."
  },
  {
    id: "qa_18",
    text: "What is 'Exploratory Testing' and when is it most effectively utilized?",
    options: [
      "Automated scripts that crawl the web to find open PDF links.",
      "A manual, creative, and unstructured testing approach where testers actively explore the UI to discover edge-case bugs and usability flows that structured automated tests miss.",
      "A database scan to locate unused indexes.",
      "A software vulnerability scan that runs on host servers."
    ],
    correctAnswerIndex: 1,
    explanation: "Automated tests only check what you program them to check. Exploratory testing relies on human intuition, curiosity, and experience. It is highly effective for testing user experience, finding bizarre edge cases, or seeding early bug-hunts."
  },
  {
    id: "qa_19",
    text: "In JUnit or similar testing frameworks, what is the purpose of the `@BeforeEach` (or `beforeEach`) setup hook?",
    options: [
      "To compile the testing code before sending it to CI.",
      "To declare a block of code that must run before *every single* individual test, typically used to reset test database records or clear local browser states.",
      "To run after a test fails to capture screenshots.",
      "To register the testing file in the project's global manifest."
    ],
    correctAnswerIndex: 1,
    explanation: "Test isolation is critical. Tests must never pollute state for other tests. `beforeEach` runs prior to each test, setting up clean variables or seeding a fresh database snapshot, ensuring each test begins in an identical state."
  },
  {
    id: "qa_20",
    text: "What is 'Regression Testing' in software development?",
    options: [
      "Testing older versions of the app to see if they compile on legacy systems.",
      "Re-running existing test suites after code changes (bug fixes or new features) to ensure that the modifications have not inadvertently broken or degraded existing, stable features.",
      "Deleting tables to revert database schemas.",
      "Testing the speed of code execution in older browsers."
    ],
    correctAnswerIndex: 1,
    explanation: "Regression testing is the safety net of software engineering. Every time you push a fix, you run the regression suite to verify that your change to the billing page didn't somehow break the login flow or profile page."
  }
];
