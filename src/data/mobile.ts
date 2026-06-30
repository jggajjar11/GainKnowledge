import { Question } from "../types";

export const mobileQuestions: Question[] = [
  {
    id: "mb_1",
    text: "How does iOS manage memory (using Automatic Reference Counting - ARC) compared to Android (using Garbage Collection - GC), and what memory leak risk do they share?",
    options: [
      "iOS relies on manual malloc calls; Android uses hardware registers. They share zero risks.",
      "iOS ARC tracks reference counts at compile-time, deallocating memory instantly when count hits zero; Android GC periodically scans memory at runtime to find unreferenced objects. They both suffer from 'Retain Cycles' (strong reference loops).",
      "iOS GC runs continuously; Android ARC is a compiler flag. They both suffer from database socket leakage.",
      "Both systems use ARC. They share the risk of hard drive fragmentation."
    ],
    correctAnswerIndex: 1,
    explanation: "ARC increments/decrements reference counts automatically. If Object A holds a strong reference to B, and B to A, their counts never hit zero, leaking both. In Swift, use `weak` or `unowned` to break these cycles; in Android, avoid holding Context references in static variables."
  },
  {
    id: "mb_2",
    text: "In React Native's new architecture (0.68+), what does 'Fabric' replace, and how does it improve UI performance?",
    options: [
      "It replaces JavaScript with raw Python code. It speeds up math computations.",
      "It replaces the legacy asynchronous 'Bridge' (which serialized UI calls to JSON) with a native, synchronous C++ interface (JSI), allowing direct synchronous rendering of Native UI components from the JavaScript thread.",
      "It replaces CSS stylesheets with a physical HTML canvas layout.",
      "It replaces Xcode with an automated command-line compiler script."
    ],
    correctAnswerIndex: 1,
    explanation: "The old RN architecture passed UI updates as async JSON messages over a single bottleneck bridge, causing frame drops during rapid scrolls. Fabric uses JSI (JavaScript Interface) in C++, letting JS threads invoke native UI layouts instantly and synchronously."
  },
  {
    id: "mb_3",
    text: "How does Flutter's rendering engine (Impeller/Skia) differ fundamentally from React Native's layout approach?",
    options: [
      "Flutter compiles views into native iOS/Android system UI buttons; React Native draws them on a canvas.",
      "Flutter bypasses native platform UI components entirely, drawing its own widget hierarchy pixel-by-pixel onto a GPU-accelerated canvas; React Native maps its JS layout elements to physical, native OS UI components.",
      "Flutter runs only inside browser WebViews; React Native compiles to raw C++.",
      "There is no difference; both translate JSX to native Swift components."
    ],
    correctAnswerIndex: 1,
    explanation: "React Native uses the platform's native buttons (`UIButton` on iOS, `android.widget.Button` on Android). Flutter behaves more like a game engine: it draws its entire UI tree manually using its rendering engine (Impeller or Skia), ensuring identical looks on all OS versions."
  },
  {
    id: "mb_4",
    text: "When compiling an iOS app for release, what is the purpose of the 'Provisioning Profile' and its relationship to a 'Signing Certificate'?",
    options: [
      "The profile compiles the Swift code; the certificate encrypts local SQLite databases.",
      "The certificate proves the developer's identity (cryptographic key); the provisioning profile is a plist file from Apple that bundles the certificate, App ID, and authorized device IDs (UDIDs) to authorize the app to run on physical devices.",
      "The profile is a billing statement; the certificate authorizes Apple Store payouts.",
      "The certificate is for Android compilation; the profile is for iOS."
    ],
    correctAnswerIndex: 1,
    explanation: "iOS security requires code signing. The signing certificate (from Apple) signs the binaries. The Provisioning Profile acts as an authorization card: it lists the certificates, the App ID (bundle identifier), and entitlement scopes (push notifications, iCloud), and links them to permitted test devices."
  },
  {
    id: "mb_5",
    text: "In modern Android development, what is 'Jetpack Compose', and what architectural pattern does it use compared to traditional XML layouts?",
    options: [
      "A database compiler that replaces SQLite. Uses SQL queries.",
      "A declarative UI framework where the interface is declared in Kotlin code as state-driven functions, replacing the traditional imperative XML layout-binding pattern.",
      "A testing framework that replaces Espresso. Uses mock browsers.",
      "An image editing suite built into Android Studio."
    ],
    correctAnswerIndex: 1,
    explanation: "Traditional Android layouts used XML, requiring imperative Java/Kotlin code to find and manipulate views (e.g. `findViewById`). Jetpack Compose uses declarative Kotlin functions that automatically re-render (recompose) when state parameters change."
  },
  {
    id: "mb_6",
    text: "What is an 'Over-The-Air' (OTA) update in mobile frameworks like Expo or React Native, and what is its main limitation according to app store guidelines?",
    options: [
      "An update sent via physical Bluetooth transfers. Limitation is 10-meter range.",
      "The ability to push code updates (JS bundles and assets) directly to users' devices without submitting a new build to the App Store. The main limitation is that you cannot change native code (Obj-C/Java) or major app capabilities (e.g. adding camera features).",
      "An update that converts the app into a website. Limitation is lack of notifications.",
      "An automated backup of local SQLite databases to cloud buckets."
    ],
    correctAnswerIndex: 1,
    explanation: "OTA updates are amazing for fixing JS bugs quickly. However, Apple and Google store guidelines forbid using OTA to radically alter the app's core purpose or to bypass the store review process when adding new native SDKs."
  },
  {
    id: "mb_7",
    text: "You are building a mobile application that needs to synchronize offline data. Why is a local key-value store (like localStorage or AsyncStorage) insufficient for heavy data sets, and what is a superior local database choice?",
    options: [
      "Storage keys are limited to 10 characters. Use local text files instead.",
      "AsyncStorage is slow, unindexed, lacks transaction support, and writes the entire database as a single flat string. A superior choice is SQLite, Realm, or WatermelonDB, which support indices, relational queries, and ACID transactions.",
      "Local storage cannot store string arrays. Use cookies.",
      "Mobile operating systems block local databases for security reasons."
    ],
    correctAnswerIndex: 1,
    explanation: "AsyncStorage operates like localStorage: it serializes a single JSON string. Reading/writing big data chokes the CPU and blocks threads. Relational SQLite or object-oriented Realm databases use local indexed database blocks, making them highly efficient."
  },
  {
    id: "mb_8",
    text: "What is 'Deep Linking' on mobile (Universal Links on iOS, App Links on Android), and how does it differ from standard custom URI schemes?",
    options: [
      "Deep linking is a security firewall that blocks untrusted websites from loading.",
      "Universal/App Links use standard HTTPS URLs verified via server-hosted configuration files (e.g., apple-app-site-association), preventing other apps from hijacking your links, whereas custom URI schemes (e.g., myapp://) can be registered by any app.",
      "Deep linking is an automated database backup protocol.",
      "There is no difference; they are different branding terms for redirects."
    ],
    correctAnswerIndex: 1,
    explanation: "Custom schemes (like `fb://`) are vulnerable to interception because any malicious app can claim the same scheme. Universal Links (iOS) and App Links (Android) use real domains. The OS downloads a verification file from the website to prove ownership."
  },
  {
    id: "mb_9",
    text: "In iOS, what does 'ARC Weak Reference' specifically do to prevent retain cycles, and what happens to the weak reference variable when the referenced object is deallocated?",
    options: [
      "It duplicates the object in secondary memory. The variable remains unchanged.",
      "It establishes a reference that does not increment the target object's reference counter. When the referenced object is deallocated, the OS automatically sets the weak variable to `nil` (zeroing weak reference).",
      "It encrypts the variable. The variable throws an error upon deallocation.",
      "It stores the object in the browser cache. The variable is deleted."
    ],
    correctAnswerIndex: 1,
    explanation: "Weak references do not hold ownership. To prevent crashes, weak references must be optional variables in Swift. When the pointed-to object has 0 strong references, it is destroyed, and the OS automatically nullifies (sets to `nil`) the weak pointer."
  },
  {
    id: "mb_10",
    text: "What is 'Android ANR' (Application Not Responding), and how do you prevent it in your Kotlin/Java code?",
    options: [
      "An Android network error. Prevent by using a faster DNS server.",
      "An OS intervention when the main (UI) thread is blocked for more than 5 seconds. Prevent by executing all heavy computations, network queries, and database I/O on background threads (using Kotlin Coroutines or RxJava).",
      "A database overflow. Prevent by clearing local SQLite tables.",
      "A crash caused by installing apps from unauthorized third-party stores."
    ],
    correctAnswerIndex: 1,
    explanation: "Android's main thread handles UI events. If a task (like a synchronous database write or API call) blocks the main thread, the app freezes. If blocked for too long, the OS displays the ANR dialog. Use `Dispatchers.IO` in Coroutines to offload."
  },
  {
    id: "mb_11",
    text: "When implementing push notifications in a mobile app, what is the role of APNs (Apple Push Notification service) and FCM (Firebase Cloud Messaging)?",
    options: [
      "APNs and FCM compile the notification audio files.",
      "They act as the mandatory cloud gateways. You send the notification payload to FCM (cross-platform) or APNs (iOS), which maintains the persistent socket connection to the user's device to deliver the alert.",
      "They are local device databases that cache notifications offline.",
      "They are security protocols that encrypt local cookie storage."
    ],
    correctAnswerIndex: 1,
    explanation: "Mobile operating systems terminate idle background app connections to save battery. APNs (Apple) and FCM (Google) are the only authorized channels that hold open network sockets to wake up devices and display notifications."
  },
  {
    id: "mb_12",
    text: "What is the function of the `AndroidManifest.xml` file in an Android application?",
    options: [
      "It compiles Java code into native dex files.",
      "It serves as the manifest declaration file, defining the app's package name, essential components (Activities, Services, Receivers), requested permissions (camera, location), and hardware requirement configurations.",
      "It holds the application's CSS styles and typography fonts.",
      "It acts as a secure storage container for developer API keys."
    ],
    correctAnswerIndex: 1,
    explanation: "`AndroidManifest.xml` is the identity file read by the Android OS. It tells the system: 'This app has these screens (Activities), runs this background task (Service), needs camera access, and starts on this specific action launcher.'"
  },
  {
    id: "mb_13",
    text: "In iOS, what is the 'AppDelegate' (or SwiftUI App lifecycle) and what is its primary responsibility?",
    options: [
      "A script that uploads app screenshots to the App Store.",
      "The core controller that receives application-level state changes (launching, entering background, terminating, receiving push notifications) and allows executing setup and teardown tasks.",
      "A database proxy that synchronizes SQLite transactions.",
      "A tool that compiles Objective-C files into Swift files."
    ],
    correctAnswerIndex: 1,
    explanation: "The AppDelegate is the entry point for system events. When your app goes from active to background (e.g. user takes a call), the OS calls `applicationDidEnterBackground`, letting you pause tasks, save states, or release memory."
  },
  {
    id: "mb_14",
    text: "What is the mobile development risk known as 'App Size Bloat', and how do you optimize it for release builds?",
    options: [
      "The app occupying too much screen space. Optimize by reducing padding classes.",
      "The compiled app binary becoming extremely heavy on disk. Optimize by enabling ProGuard/R8 (code shrinking and obfuscation), using dynamic asset delivery, compressing PNGs to WebP/SVG, and removing unused dependencies.",
      "The database tables containing duplicate rows. Optimize with unique keys.",
      "The server running out of physical RAM. Optimize by restarting containers."
    ],
    correctAnswerIndex: 1,
    explanation: "Heavy apps suffer lower download conversion rates. ProGuard/R8 removes unused class code and renames methods to short characters. Dynamic delivery splits assets (like language files or high-res images) so users only download what their device needs."
  },
  {
    id: "mb_15",
    text: "In React Native, why is it highly recommended to use the `FlatList` component instead of mapping array data inside a `ScrollView` for long lists?",
    options: [
      "ScrollView is not compatible with Tailwind CSS layout classes.",
      "FlatList implements lazy-loading and cell recycling; it only renders the list items currently visible on screen, destroying or recycling off-screen nodes to maintain low memory usage, unlike ScrollView which renders all items immediately.",
      "FlatList compiles views directly to native SQLite tables.",
      "ScrollView is deprecated and was removed in React Native 0.70."
    ],
    correctAnswerIndex: 1,
    explanation: "ScrollView forces the OS to create and hold thousands of UI views in memory simultaneously, causing immediate out-of-memory crashes for long arrays. FlatList recycles off-screen layouts, rendering only what fits on screen."
  },
  {
    id: "mb_16",
    text: "What is the primary difference between Android's 'Serializable' interface and 'Parcelable' interface for passing data objects between activities?",
    options: [
      "Serializable is for strings; Parcelable is exclusively for integer arrays.",
      "Serializable is a standard Java reflection-based interface (slow, high overhead); Parcelable is an Android-specific IPC serialization mechanism where the developer defines explicit serialization logic (extremely fast and memory efficient).",
      "Parcelable is only compatible with Kotlin coroutines.",
      "Serializable is a native C++ module; Parcelable is a JavaScript script."
    ],
    correctAnswerIndex: 1,
    explanation: "Serializable is easy to use but uses Java reflection, creating massive garbage collection overhead. Parcelable requires manual/generated serialization code, but encodes objects into optimized binary streams, crucial for mobile inter-process speeds."
  },
  {
    id: "mb_17",
    text: "When compiling a iOS application, what does 'Bitcode' enable Apple to do with your binary?",
    options: [
      "It allows Apple to display advertisements inside your app header.",
      "It uploads an intermediate representation of your compiled app, allowing Apple to automatically compile, optimize, and re-tailor your binary for specific device hardware types without you submitting a new build.",
      "It automatically translates your app code into Kotlin for Android.",
      "It encrypts your app database weights using symmetric keys."
    ],
    correctAnswerIndex: 1,
    explanation: "Bitcode represents compiled code before target assembly. If Apple releases a new Apple Watch or iPad chip, they can recompile your app's bitcode to optimize it for the new instruction set, without you re-uploading from Xcode."
  },
  {
    id: "mb_18",
    text: "Why must you implement 'Biometric Authentication' (FaceID/TouchID) locally on the device rather than sending raw facial data or fingerprints to your server APIs?",
    options: [
      "Mobile operating systems never expose raw biometric data; instead, the secure hardware enclave verifies the user locally and returns only a cryptographic success/failure token to your app.",
      "Sending biometric data is blocked by standard network firewalls.",
      "Server databases do not have the storage space to hold fingerprint images.",
      "The server can perform biometric calculations, but it is too expensive."
    ],
    correctAnswerIndex: 0,
    explanation: "For privacy and safety, fingerprint/facial scans are restricted to dedicated physical hardware (Apple's Secure Enclave, Android's Keystore). The OS handles the scans; the app simply requests verification and receives a secure boolean token."
  },
  {
    id: "mb_19",
    text: "What is 'Android WorkManager' used for in background processing?",
    options: [
      "To compile Kotlin classes during development.",
      "To schedule deferrable, guaranteed background work that must run even if the user exits the app or the device reboots, respecting system constraints like charging status or Wi-Fi connectivity.",
      "To balance CPU load between the frontend browser and backend APIs.",
      "To display interactive animation cards during app onboarding."
    ],
    correctAnswerIndex: 1,
    explanation: "WorkManager is the recommended Android API for persistent tasks (e.g. uploading logs). It chooses the best execution method (JobScheduler, background services) depending on OS levels and conditions like 'Only execute when connected to Wi-Fi.'"
  },
  {
    id: "mb_20",
    text: "In Swift, what does the 'defer' statement do inside a function block?",
    options: [
      "It delays the compilation of the function for 10 seconds.",
      "It declares a block of code that must execute immediately before the current scope is exited (e.g., function return), ensuring cleanup code (like closing database handles) always runs.",
      "It runs the function on a background thread instead of the main thread.",
      "It automatically translates the return value into a JSON object."
    ],
    correctAnswerIndex: 1,
    explanation: "`defer` is perfect for resource management. If a function can exit early via multiple throw/guard gates, putting `defer { database.close() }` at the top guarantees the database handle is safely closed, no matter which gate triggered the exit."
  }
];
