import { Question } from "../types";

export const webdevQuestions: Question[] = [
  {
    id: "wd_1",
    text: "When loading critical external scripts, what is the key difference between using the `async` and `defer` attributes on a `<script>` tag, and how do they affect DOM parsing?",
    options: [
      "`async` guarantees that scripts execute in the exact order they are declared in HTML. `defer` executes scripts in whichever order they finish loading over the network.",
      "`async` requires inline CSS styling to work. `defer` blocks all stylesheet loads until execution completes.",
      "`async` loads the script in parallel and pauses HTML parsing to execute it immediately. `defer` loads the script in parallel but waits to execute it until the entire HTML document is fully parsed.",
      "`async` renders the script on the backend server before sending HTML. `defer` loads it in a background Web Worker thread."
    ],
    correctAnswerIndex: 2,
    explanation: "Both attributes download scripts in the background without blocking HTML parsing. However, `async` executes as soon as it is downloaded, pausing HTML parsing. `defer` preserves order and executes only after HTML parsing is completed, making it safer for scripts that depend on the full DOM structure."
  },
  {
    id: "wd_2",
    text: "A client complains that their legacy Sass (SCSS) and Bootstrap 4 project takes too long to compile in CI, and is suffering from 'CSS bloat'. What is the most effective architectural shift to address this while utilizing modern utilities like Tailwind CSS?",
    options: [
      "Switching to Tailwind CSS to replace deep nested Sass rules with a utility-first approach. This leverages build-time compilation to extract only used classes, outputting a tiny, static utility file based on template content.",
      "Replacing all SCSS code with inline style attributes on every HTML tag, completely bypassing stylesheets.",
      "Importing the entire Bootstrap source library inside every custom block stylesheet to ensure styles never break.",
      "Disabling CSS compression and relying on high-bandwidth CDNs to serve the large CSS assets."
    ],
    correctAnswerIndex: 0,
    explanation: "Traditional preprocessors like Sass compile all declared rules, mixins, and variables, which can lead to 'CSS bloat' as projects grow. Tailwind CSS parses your templates at build time and extracts only the utility classes actually used, producing a highly optimized, small stylesheet."
  },
  {
    id: "wd_3",
    text: "When developing custom blocks for the WordPress Gutenberg block editor, which architectural approach offers the best performance and maintenance balance for a highly dynamic content layout?",
    options: [
      "Using legacy Shortcodes wrapped inside PHP helper functions with `eval()` execution blocks.",
      "Creating hardcoded static HTML files inside the `wp-content/uploads` directory and loading them with jQuery AJAX.",
      "Bypassing the WordPress database completely and writing all page designs into hardcoded theme template files.",
      "Creating modern React-based block types registered via `registerBlockType`, defining an `edit` component for the admin screen and a static `save` element, or utilizing server-rendered blocks (Dynamic Blocks via PHP rendering) when content depends on real-time database queries."
    ],
    correctAnswerIndex: 3,
    explanation: "WordPress Gutenberg custom blocks are registered in JS using React. For static content, saving a JSON-like block representation in the database and rendering it via JavaScript is ideal. For dynamic content (e.g., latest posts, dynamic pricing), a PHP render callback offers real-time server-side database integration."
  },
  {
    id: "wd_4",
    text: "You are audit-testing a website built with a visual page builder (like Elementor or Divi). You notice high DOM node counts (over 3,000 nodes) and poor 'Cumulative Layout Shift' (CLS) scores. What is the root cause of this, and how do you remediate it?",
    options: [
      "The database is overloaded with posts. You can remediate this by emptying the WordPress trash folder.",
      "Page builders often generate deeply nested div wrappers ('div soup') for styling controls, and load unoptimized images without explicit dimensions. You can remediate this by reducing layout nesting depth, using CSS Grid/Flexbox containers, and specifying explicit `width` and `height` attributes on elements.",
      "The client browser is not configured to accept cookies. You can remediate this by forcing a cookie consent banner.",
      "The server is running a modern version of PHP. Upgrading to a legacy, unmaintained PHP version resolves CLS."
    ],
    correctAnswerIndex: 1,
    explanation: "Visual page builders offer ease-of-use but tend to insert deep, complex DOM trees to handle margin, padding, and alignment wrappers. This causes high memory consumption. Lack of explicit dimensions on builder widgets (like image elements) or deferred stylesheets causes sudden visual shifts, impacting CLS."
  },
  {
    id: "wd_5",
    text: "In a Docker-based local development container setup for WordPress (using Nginx, PHP-FPM, and MySQL), you notice that file changes on your local machine take several seconds to reflect inside the container. What is the standard optimization for this volume mount bottleneck?",
    options: [
      "Copying all source files into the Docker image on every file edit and rebuilding the container from scratch.",
      "Uninstalling Docker and running PHP-FPM directly on the database container node without networking blocks.",
      "Using performance-optimized volume mount configurations (like cached or delegated flags on macOS/Windows, or using Mutagen/NFS sync mechanisms) to avoid blocking synchronous filesystem translation between host and guest OS.",
      "Moving all local PHP scripts into inline SQL database tables to bypass local disk storage completely."
    ],
    correctAnswerIndex: 2,
    explanation: "Filesystem virtualization between host machines (macOS/Windows) and Linux-based Docker containers suffers from strict synchronous file-locking. Utilizing flags like `:delegated` tells Docker that the host filesystem is authoritative, allowing writes to be batched and drastically speeding up local PHP page execution."
  },
  {
    id: "wd_6",
    text: "What is the primary benefit of pre-processing Sass/SCSS styles compared to standard CSS, and how has modern CSS Custom Properties (CSS variables) shifted this dynamic in modern web development?",
    options: [
      "Sass compile-time variables run directly in the user's browser runtime. Modern CSS Custom Properties require compiling on the server before rendering.",
      "CSS Custom Properties are compile-time directives, while Sass variables allow dynamic runtime nesting inside SVG icons.",
      "Sass prevents pages from loading over unencrypted HTTP requests, while CSS Custom Properties enforce secure CORS preflights.",
      "Sass variables are evaluated at build time (static), whereas modern CSS Custom Properties are evaluated at runtime by the browser, allowing real-time client-side manipulation (like easy dark mode toggling or dynamic theme switches via JavaScript)."
    ],
    correctAnswerIndex: 3,
    explanation: "Sass variables are processed during compilation, meaning they disappear when CSS is generated. CSS Custom Properties exist in the browser DOM stylesheet, enabling cascading inheritance, media query adjustments, and JavaScript manipulation at runtime, which simplifies modern themes."
  },
  {
    id: "wd_7",
    text: "What is the calculated specificity value of the CSS selector `div.container ul#nav li a[href]` and which rule wins if a conflicting style is applied to `ul.menu li a`?",
    options: [
      "`div.container ul#nav li a[href]` wins because it has an ID selector, which carries a much higher specificity weight (0,1,2,4) compared to (0,0,1,3) for the class selector rule.",
      "They have equal specificity, so whichever rule was written first in the stylesheet takes absolute precedence.",
      "`ul.menu li a` wins because class selectors are always evaluated after ID selectors in modern CSS rendering rules.",
      "Neither wins; the browser ignores conflicting styles completely and defaults to the user's base system configuration styles."
    ],
    correctAnswerIndex: 0,
    explanation: "CSS Specificity is calculated based on three columns: IDs, Classes/attributes, and Elements. The first selector has 1 ID (`#nav`), 2 Classes/Attributes (`.container`, `[href]`), and 4 elements (`div`, `ul`, `li`, `a`), yielding a specificity of 0,1,2,4. The second selector has 1 Class (`.menu`) and 3 elements (`ul`, `li`, `a`), yielding 0,0,1,3. The first selector wins."
  },
  {
    id: "wd_8",
    text: "Under standard CSS rules, if an element has a declared `width: 200px`, `padding: 20px`, and `border: 5px solid black`, what is its final rendered layout width in the browser under default `box-sizing: content-box` versus `box-sizing: border-box`?",
    options: [
      "200px under both because borders and padding are automatically scaled down in modern layouts.",
      "250px under `content-box` and 200px under `border-box`.",
      "225px under `content-box` and 175px under `border-box`.",
      "250px under `content-box` and 150px under `border-box`."
    ],
    correctAnswerIndex: 1,
    explanation: "Under `content-box` (the browser default), width applies only to content. The padding (20px * 2) and border (5px * 2) are added on top, totaling 250px. Under `border-box`, padding and borders are absorbed inside the declared width, so the final visible width remains exactly 200px."
  },
  {
    id: "wd_9",
    text: "What is 'vertical margin collapsing' in CSS block layouts, and which of the following scenarios is NOT a valid way to prevent adjacent siblings from collapsing their vertical margins?",
    options: [
      "Setting one of the elements to `display: inline-block` or creating a new Block Formatting Context (BFC) using `overflow: hidden`.",
      "Converting the layout container to CSS Grid or Flexbox, as grid/flex items do not collapse margins.",
      "Wrapping both elements in a standard empty `<div>` wrapper with no styling, border, or padding classes.",
      "Adding a non-zero `padding-top` or `border-top` to the parent container to separate the parent margin from the child margin."
    ],
    correctAnswerIndex: 2,
    explanation: "Vertical margins collapse when block-level elements are adjacent. Wrapping elements in an unstyled, empty `<div>` has no effect because margins simply collapse through the empty wrapper. Adding padding, borders, or changing layout models (Flex/Grid) creates BFC structures that prevent collapsing."
  },
  {
    id: "wd_10",
    text: "You assign `position: absolute` and `top: 10px` to a `.modal` container. However, instead of aligning to its parent `.card` component, it aligns to the top of the entire webpage. Why does this happen, and how is it resolved?",
    options: [
      "Modern browser sandboxes disable absolute positioning within HTML containers unless a custom JS resize observer is running.",
      "The `.modal` element is missing a `float: left` attribute. Adding float forces the relative alignment to cascade.",
      "The `.card` element is not configured with standard flex layout bounds. Adding `display: flex` with `flex-direction: inline` fixes absolute positioning.",
      "Absolute elements position themselves relative to the nearest ancestor with a non-static position. The parent `.card` lacks this and defaults to `static`; you resolve this by adding `position: relative` to `.card`."
    ],
    correctAnswerIndex: 3,
    explanation: "An absolutely positioned element is placed relative to its nearest positioned ancestor (an ancestor with a position other than `static`). If no such ancestor exists, it defaults to the initial containing block (usually the `html` element). Setting `position: relative` on `.card` establishes the correct positioning context."
  },
  {
    id: "wd_11",
    text: "How do `display: none`, `visibility: hidden`, and `opacity: 0` differ regarding browser DOM representation, accessibility, and click events?",
    options: [
      "`display: none` removes the element from the accessibility tree and document flow. `visibility: hidden` hides the element but preserves its visual space and blocks keyboard/pointer interaction. `opacity: 0` hides it visually, preserves its layout space, and continues to register clicks and pointer events.",
      "`display: none` and `visibility: hidden` are identical; both are used exclusively for search engine index configurations.",
      "`opacity: 0` removes elements from DOM parsing completely. `display: none` renders them as raw text node fragments.",
      "All three allow screen readers to read content, but block mouse click triggers automatically."
    ],
    correctAnswerIndex: 0,
    explanation: "`display: none` collapses the layout entirely and is completely ignored by screen readers and pointers. `visibility: hidden` acts like a transparent blank spacer that cannot be clicked or focused. `opacity: 0` is visually transparent but completely functional in layout space, responding to pointer hovers, clicks, and tabbing."
  },
  {
    id: "wd_12",
    text: "You have a header sidebar with `z-index: 999`, but a banner widget with `z-index: 5` on another part of the page still renders on top of it. What is the most likely CSS cause of this frustrating stacking issue?",
    options: [
      "The CSS parser failed due to a caching error, and requires a full page hard refresh to load styles sequentially.",
      "A parent of the sidebar has a style like `opacity: 0.9`, `transform`, or `filter` which created a new isolated Stacking Context, nesting the sidebar's `z-index` limit inside that context.",
      "Modern HTML standards ignore any `z-index` value higher than 100 unless a custom layout viewport is declared in the head.",
      "The sidebar lacks an absolute `z-index: auto` declaration to clear previous grid container constraints."
    ],
    correctAnswerIndex: 1,
    explanation: "Certain CSS properties (such as `opacity` less than 1, `transform` other than `none`, `filter`, and `mix-blend-mode`) force the browser to initiate a new stacking context on the element. Inside this sub-context, any high `z-index` is encapsulated and cannot exceed the relative stack level of the parent element in the outer world."
  },
  {
    id: "wd_13",
    text: "In modern responsive CSS Grid layouts, what is the crucial behavioral difference between using `repeat(auto-fill, minmax(150px, 1fr))` and `repeat(auto-fit, minmax(150px, 1fr))`?",
    options: [
      "`auto-fill` is only compatible with legacy Bootstrap frameworks. `auto-fit` requires a custom modern Tailwind configuration.",
      "`auto-fill` creates row elements automatically. `auto-fit` prevents any vertical scaling from occurring.",
      "`auto-fill` forces the grid to fill empty space with implicit empty columns even if there are no items to place there. `auto-fit` collapses any empty, unused tracks and stretches the remaining filled columns to occupy the entire grid width.",
      "They are exactly identical in layout behavior, but `auto-fit` runs faster by avoiding subgrid layout recalculation."
    ],
    correctAnswerIndex: 2,
    explanation: "When there is excess width inside a grid container, `auto-fill` generates new empty tracks/columns (filling the container but leaving blank spaces) even if they have no contents. `auto-fit` takes those empty tracks, shrinks their width to `0px`, and stretches the actual content columns to fill the rest of the layout."
  },
  {
    id: "wd_14",
    text: "For smooth, high-performance transitions and animations (60+ FPS) in modern browsers, why is it better to animate elements using `transform: translate()` instead of `top` or `left` properties?",
    options: [
      "`transform` is a native web-assembly process, whereas `top` requires compiling inline Javascript hooks.",
      "`top` and `left` are deprecated styles that throw runtime validation warnings in standard HTML engines.",
      "The browser defaults to rendering `transform` on a separate background Web Worker thread.",
      "Animating `top` or `left` triggers full layout recalculation (Reflow) and repaint loops on the CPU. Animating `transform` bypasses layout steps and delegates rendering to the GPU via composition layers."
    ],
    correctAnswerIndex: 3,
    explanation: "Changes to layout coordinates like `top` and `left` force the browser to recompute layout geometry for surrounding items, triggering slow 'Reflows' on the main CPU thread. CSS Transforms do not affect surrounding layouts, permitting the browser to shift the layer directly on the GPU for sub-pixel accuracy and high frame rates."
  },
  {
    id: "wd_15",
    text: "What makes the native HTML5 `<dialog>` element with `dialog.showModal()` superior to standard custom `div` modals regarding accessibility and UX?",
    options: [
      "It automatically creates a visual backdrop (via `::backdrop`), traps keyboard focus within the dialog, enables immediate closing via the Escape key, and places the dialog in the browser's top layer to avoid `z-index` hierarchy bugs.",
      "It connects directly to local WordPress visual page builders without requiring custom layout components.",
      "It downloads modal assets on-demand via a built-in lazy loading server proxy.",
      "It compresses the parent DOM node to ensure that visual shifts never happen."
    ],
    correctAnswerIndex: 0,
    explanation: "The `<dialog>` element provides robust, out-of-the-box native modal accessibility. Focus-trapping prevents keyboard tab indices from escaping behind the modal, while the native 'top layer' guarantees it displays above all other contents regardless of ancestor styling or `z-index` limitations."
  },
  {
    id: "wd_16",
    text: "You are implementing dynamic item lists where users can delete items. Instead of binding event listeners to 1,000 individual list delete buttons, what is the best event performance practice?",
    options: [
      "Run a recurring `setInterval` check that re-binds event handlers to all `button` classes every 50ms.",
      "Bind a single click event listener to the parent `<ul>` container (Event Delegation). Inspect `event.target` to see if a delete button was clicked, avoiding performance overhead and handling dynamically added list items automatically.",
      "Wrap every single list item inside an active iframe to capture clicks in isolated browser threads.",
      "Instruct the page builder to reload the page via PHP on every user click action."
    ],
    correctAnswerIndex: 1,
    explanation: "Event Delegation relies on 'event bubbling' where events cascade up to ancestor nodes. Binding a single listener to a parent node decreases memory consumption dramatically, eliminates stale handler bindings when items are added/deleted, and makes code maintenance cleaner."
  },
  {
    id: "wd_17",
    text: "What is a mandatory requirement for rendering pseudo-elements like `::before` or `::after` in a stylesheet, and what happens if this requirement is missing?",
    options: [
      "You must assign `display: inline-block` and a non-zero `z-index`. If missing, the browser throws an unhandled rendering console error.",
      "You must connect the pseudo-elements directly to an active Bootstrap theme layout system.",
      "You must include the `content` property (even if empty, e.g., `content: ''`). If missing, the browser will not generate or render the pseudo-element at all.",
      "You must declare them at the top of the HTML body tag inside a custom container node."
    ],
    correctAnswerIndex: 2,
    explanation: "Pseudo-elements are placed in the DOM visually but are generated based on CSS. The browser strictly checks for the presence of the `content` property. If `content` is not defined (or explicitly set to `normal`/`none` implicitly), the pseudo-element is simply not created."
  },
  {
    id: "wd_18",
    text: "You have a flexible layout row containing several items. One item keeps getting squeezed out and shrinking when screen size decreases, despite having a fixed `width: 300px` declared. How do you prevent this item from shrinking under Flexbox?",
    options: [
      "Convert the item into an SVG vector or place it inside a legacy tableset tag.",
      "Add `display: inline` to the parent container to disable flex dimensions completely.",
      "Increase the browser font weight limit to prevent layout wrapping behaviors.",
      "Assign `flex-shrink: 0` to the item, instructing the flex engine not to compress its size relative to its flex siblings."
    ],
    correctAnswerIndex: 3,
    explanation: "By default, flex items have `flex-shrink` set to `1`, meaning they compress if the parent wrapper is too narrow to hold all items. Declaring `flex-shrink: 0` tells the layout engine to preserve the item's baseline size (from `width` or `flex-basis`) no matter how small the parent becomes."
  },
  {
    id: "wd_19",
    text: "How do Tailwind CSS and Bootstrap (v4/5) handle media query design, and how does this affect writing custom responsive utility classes?",
    options: [
      "Both use mobile-first breakpoints (min-width media queries), meaning utility classes (like `md:grid-cols-2` or `col-md-6`) apply at that screen width and scale upwards, unless overridden by a larger breakpoint class.",
      "Tailwind uses desktop-first media queries, while Bootstrap uses mobile-first media queries, causing conflicting styles when nested.",
      "Both frameworks require a server-side preprocessor like Sass to calculate screen dimensions before serving HTML.",
      "Breakpoints in Bootstrap apply only to container classes, while Tailwind breakpoints are restricted to flex items."
    ],
    correctAnswerIndex: 0,
    explanation: "Mobile-first frameworks structure stylesheets starting with the smallest display styles (no media query) and add `@media (min-width: ...)` queries for larger viewports. A utility class like `block md:flex` is `display: block` at small screens, and updates to `display: flex` at medium screen sizes and up."
  },
  {
    id: "wd_20",
    text: "When rendering custom icons or inline SVGs, why is defining the `viewBox` attribute critical for responsive web design, and what happens if you only define `width` and `height` properties?",
    options: [
      "Without `viewBox`, SVG icons will render in black-and-white only, ignoring any fill and stroke properties.",
      "The `viewBox` defines the coordinate space and aspect ratio, allowing the SVG to scale fluidly to any container. Without it, defining only width and height will crop or clip the SVG instead of resizing its vector path coordinates dynamically.",
      "`viewBox` enables WordPress shortcodes to translate the vector elements into CSS animations.",
      "`viewBox` is required to allow CSS variables to inject custom fonts inside inline canvas blocks."
    ],
    correctAnswerIndex: 1,
    explanation: "The `viewBox` acts as the virtual window viewport mapping coordinates (e.g., `0 0 100 100`). Modern browsers use this viewport mapping to upscale/downscale standard vectors automatically when wrapping containers change sizes. Without it, the browser doesn't know the aspect ratio and restricts rendering to rigid pixel bounds."
  }
];
