import type { Block, OutlineItem, Post } from "./types";

const posts: Post[] = [
  {
    slug: "the-quiet-power-of-a-good-default",
    title: "The Quiet Power of a Good Default",
    dek: "Defaults are not the absence of choice. They are the most consequential decision a product team makes — and the one most often left to chance.",
    topic: "design",
    author: "Elena Marsh",
    publishedAt: "2026-11-12",
    updatedAt: "2026-11-14",
    tags: ["Design systems", "Defaults", "Product design"],
    featured: true,
    art: { palette: 0, variant: 0 },
    body: [
      {
        type: "p",
        text: "Open the settings of almost any application and you will find a small museum of decisions. Notification frequency. Privacy defaults. What happens when you press the spacebar. Most of these settings will never be touched. That is not a failure of curiosity. It is the ordinary outcome of trust.",
      },
      { type: "h2", text: "The default is the product" },
      {
        type: "p",
        text: "When someone uses a product for the first time, they do not experience the full range of possible configurations. They experience the configuration you chose for them. The default is the product, and everything else is a preference.",
      },
      {
        type: "p",
        text: "This is easy to forget because defaults are invisible. They live in code, in configuration files, in the quiet assumptions of a design system. But they shape behavior at a scale no onboarding flow can match.",
      },
      {
        type: "quote",
        text: "Most people never change the settings. That is not laziness; it is trust.",
        cite: "Elena Marsh",
      },
      { type: "h2", text: "Three kinds of defaults" },
      {
        type: "p",
        text: "Not all defaults are the same. It helps to separate them into three families, because each one asks for a different kind of attention.",
      },
      { type: "h3", text: "Inherited defaults" },
      {
        type: "p",
        text: "These come from the platform, the framework, or the tools underneath you. A text field remembers its last value. A browser autofills a form. A component library ships with a focus ring that is technically accessible and visually wrong for your product. Inherited defaults are rarely neutral; they are simply someone else’s decisions arriving unannounced.",
      },
      { type: "h3", text: "Designed defaults" },
      {
        type: "p",
        text: "These are the choices your team makes on purpose: the initial sort order of a list, the first tab a user sees, the privacy setting that ships enabled. Designed defaults deserve the same scrutiny as any interface element, because they do the same work with less visible effort.",
      },
      { type: "h3", text: "Earned defaults" },
      {
        type: "p",
        text: "These are the defaults that emerge from use. A calendar that learns your working hours. An editor that remembers your preferred type size. Earned defaults are powerful precisely because they are specific. The risk is that they become opaque — the product seems to know something the person does not remember teaching it.",
      },
      { type: "h2", text: "What good defaults feel like" },
      {
        type: "p",
        text: "A good default is not merely convenient. It is legible, reversible, and proportionate.",
      },
      {
        type: "ul",
        items: [
          "**Legible.** A person can tell what the default is doing, even if they never change it.",
          "**Reversible.** The cost of undoing it is small, and the path back is obvious.",
          "**Proportionate.** The default does not make a decision larger than the moment requires.",
          "**Generous.** It leaves room for the person who wants something different.",
        ],
      },
      {
        type: "p",
        text: "The best defaults feel less like a decision made on your behalf and more like a room that has been arranged for you. You may move the furniture. You may also simply sit down.",
      },
      { type: "h2", text: "The audit" },
      {
        type: "p",
        text: "Defaults drift. A setting that made sense at launch becomes strange two years later. A privacy default that was generous becomes embarrassing. It helps to audit them on a schedule, the way you would audit copy or accessibility.",
      },
      {
        type: "ol",
        items: [
          "List every default a new account inherits.",
          "Ask what happens if the person never changes it.",
          "Identify which defaults are visible, and which are silent.",
          "Test the reversal path with someone who did not design it.",
        ],
      },
      {
        type: "callout",
        title: "A useful test",
        text: "If a default were a sentence spoken aloud to a new user, would you be comfortable saying it? If not, the default needs work.",
      },
      { type: "h2", text: "Defaults are a form of care" },
      {
        type: "p",
        text: "There is a temptation to treat defaults as a technical detail, a line in a configuration file. But every default is a small statement about what you expect from people and what you are willing to do for them.",
      },
      {
        type: "p",
        text: "Choose the ones you would be happy to defend. The people who never open the settings are trusting you to.",
      },
    ],
  },
  {
    slug: "what-we-talk-about-when-we-talk-about-speed",
    title: "What We Talk About When We Talk About Speed",
    dek: "Performance is not a number on a dashboard. It is the feeling of a product that respects the person using it.",
    topic: "engineering",
    author: "Theo Nakamura",
    publishedAt: "2026-10-28",
    updatedAt: "2026-10-30",
    tags: ["Performance", "Core Web Vitals", "UX"],
    art: { palette: 3, variant: 1 },
    body: [
      {
        type: "p",
        text: "The first time I watched someone use a slow product, I expected frustration. What I saw was worse: adaptation. They tapped, looked away, tapped again. The delay had become part of the interface. By the time the page arrived, they had already built a small routine around its absence.",
      },
      { type: "h2", text: "The number and the feeling" },
      {
        type: "p",
        text: "Performance conversations tend to begin with a number. Core Web Vitals gave us a shared vocabulary: Largest Contentful Paint, Interaction to Next Paint, Cumulative Layout Shift. This was a genuine improvement. Before those metrics, arguments about speed were mostly arguments about vibes.",
      },
      {
        type: "p",
        text: "But a score is a summary, not an experience. A page can pass every threshold and still feel sluggish, because the thresholds describe an average and the person is living through a particular moment. They are on a train. Their phone is warm. They are trying to do one small thing before the next meeting starts.",
      },
      { type: "h2", text: "Three budgets" },
      {
        type: "p",
        text: "It helps to think in budgets rather than scores. A budget is a constraint you design against, not a grade you receive at the end.",
      },
      { type: "h3", text: "The first-second budget" },
      {
        type: "p",
        text: "What can a person see, understand, and act on in the first second? Not everything. The answer should be one clear thing: the headline, the search field, the next step. If the first second is spent on a loading animation and a layout that will soon be replaced, the product has borrowed attention and paid it back with movement.",
      },
      { type: "h3", text: "The interaction budget" },
      {
        type: "p",
        text: "Every interaction has a rhythm. A button that responds instantly but does nothing feels broken. A button that waits two hundred milliseconds and then confirms feels considered. The budget is not zero milliseconds; it is the amount of uncertainty a person is willing to hold.",
      },
      { type: "h3", text: "The attention budget" },
      {
        type: "p",
        text: "Not every millisecond is equal. A delay before a long article loads is different from a delay after someone presses “Pay.” Context changes the cost. Performance work that ignores context becomes a hunt for small wins that nobody can feel.",
      },
      {
        type: "quote",
        text: "Speed is not how fast the page loads. It is how rarely the page asks you to wait.",
        cite: "Theo Nakamura",
      },
      { type: "h2", text: "Measure the right thing" },
      {
        type: "p",
        text: "Lab numbers are necessary. They are repeatable, cheap, and useful for catching regressions before they ship. But lab numbers are a rehearsal. Field data is the performance.",
      },
      {
        type: "ul",
        items: [
          "Track the **75th percentile**, not the average. The average hides the people who are struggling.",
          "Segment by device and connection. A fast desktop can make a slow mobile experience invisible to the team.",
          "Watch long tasks, not just page loads. Most frustration happens after the page has technically finished.",
          "Instrument the moments that matter: first search, first save, first successful checkout.",
        ],
      },
      {
        type: "callout",
        title: "A practical rule",
        text: "If you cannot explain what a performance metric means to a designer, it is not yet a metric your team can act on.",
      },
      { type: "h2", text: "The discipline of subtraction" },
      {
        type: "p",
        text: "Most performance work is not optimization. It is removal. A third-party script that nobody can name. A font weight used in one heading. An image carousel that autoplays three slides before the reader has arrived. These are not edge cases; they are the ordinary sediment of a product that has been growing.",
      },
      {
        type: "p",
        text: "The teams I have seen make the biggest gains treat performance as a product constraint rather than an engineering cleanup. They ask for a budget before the feature is designed. They make the cost visible in the same room where the scope is being decided.",
      },
      { type: "h2", text: "A slower kind of speed" },
      {
        type: "p",
        text: "The goal is not to make everything instantaneous. Some things should take time: a confirmation, a destructive action, a payment. The goal is to make the product feel like it is keeping up with thought.",
      },
      {
        type: "p",
        text: "That is a design problem as much as an engineering one. The best performance work begins with a question: what is the person trying to do, and what is standing in the way? Everything else is measurement.",
      },
    ],
  },
  {
    slug: "writing-documentation-people-actually-read",
    title: "Writing Documentation People Actually Read",
    dek: "Most documentation fails before the first sentence. The problem is rarely the prose — it is the question the page was written to answer.",
    topic: "product",
    author: "Priya Raman",
    publishedAt: "2026-10-07",
    tags: ["Documentation", "Writing", "Product"],
    art: { palette: 2, variant: 2 },
    body: [
      {
        type: "p",
        text: "Every documentation page is an answer to a question. When a page fails, it is usually because the question was never named. The team wrote about a feature. The reader arrived with a problem.",
      },
      { type: "h2", text: "Documentation is a product" },
      {
        type: "p",
        text: "We tend to treat docs as an artifact of the software: something produced after the real work is done. But a documentation site is a product with users, jobs, and a support burden. It has navigation, search, empty states, and a maintenance cost. It deserves the same care as the interface it describes.",
      },
      {
        type: "p",
        text: "The first step is to stop asking “what should we document?” and start asking “what is someone trying to do when they open this page?”",
      },
      { type: "h2", text: "Find the question" },
      {
        type: "p",
        text: "Before writing, write the question at the top of the page. Not the topic. The question, in the words a person would actually use.",
      },
      {
        type: "ul",
        items: [
          "**How do I…** — a task question, usually answered with steps.",
          "**Why does…** — a mental-model question, usually answered with context.",
          "**What happens if…** — a risk question, usually answered with consequences.",
          "**Which one should I…** — a decision question, usually answered with a comparison.",
        ],
      },
      {
        type: "p",
        text: "If you cannot phrase the question, you are not ready to write the page. You are ready to do research.",
      },
      { type: "h2", text: "Structure is a kindness" },
      {
        type: "p",
        text: "The shape of a page tells people whether they can trust it. A wall of prose says: the author was thinking out loud. A clear sequence says: someone has been here before you.",
      },
      {
        type: "ol",
        items: [
          "Answer the question in the first two sentences.",
          "Give the context that makes the answer make sense.",
          "Show the details, examples, and edge cases.",
          "End with what to do when it still does not work.",
        ],
      },
      {
        type: "quote",
        text: "A good documentation page lets a reader leave early.",
        cite: "Priya Raman",
      },
      { type: "h2", text: "Examples earn their space" },
      {
        type: "p",
        text: "An example is not decoration. It is the place where an abstract rule becomes a concrete decision. A good example uses real inputs, shows the output, and includes the failure that people actually hit.",
      },
      {
        type: "p",
        text: "The most useful examples are slightly boring. They look like the work someone will do on a Tuesday, not the demo that won the launch meeting.",
      },
      { type: "h2", text: "The maintenance test" },
      {
        type: "p",
        text: "Documentation rots in the gaps between releases. A page can be accurate and still be useless if nobody owns it. Before publishing, run a maintenance test.",
      },
      {
        type: "ul",
        items: [
          "Can a new hire update this page without asking permission?",
          "Is the example runnable, or does it depend on a private environment?",
          "Does the page name the version it applies to?",
          "Is there a clear owner and a review date?",
        ],
      },
      { type: "h2", text: "Write for the person at 2 a.m." },
      {
        type: "p",
        text: "The best documentation I have written was written for someone tired. They are on a deadline. Something has gone wrong. They do not need your voice; they need the next step.",
      },
      {
        type: "p",
        text: "That reader is also the one who will tell you whether the page works. Watch them use it. The place where they stop reading is the place where the page begins.",
      },
    ],
  },
  {
    slug: "the-case-for-smaller-software",
    title: "The Case for Smaller Software",
    dek: "Every system has a carrying cost. The best engineering teams treat complexity as a budget, not a badge.",
    topic: "engineering",
    author: "Theo Nakamura",
    publishedAt: "2026-09-18",
    tags: ["Architecture", "Simplicity", "Maintenance"],
    art: { palette: 5, variant: 3 },
    body: [
      {
        type: "p",
        text: "A system is not finished when there is nothing left to add. It is finished when there is nothing left to remove — and when the team can still explain it to someone new.",
      },
      { type: "h2", text: "The carrying cost" },
      {
        type: "p",
        text: "Every line of code is a small mortgage. You pay interest on it every time someone reads it, changes it, deploys it, or debugs it at an inconvenient hour. The principal is the original effort. The interest is everything after.",
      },
      {
        type: "p",
        text: "We are reasonably good at estimating the cost of building. We are much worse at estimating the cost of keeping. That asymmetry explains a lot of software that works but nobody wants to touch.",
      },
      { type: "h2", text: "Where complexity hides" },
      {
        type: "p",
        text: "Complexity rarely announces itself as complexity. It arrives as a reasonable request, a useful abstraction, a dependency that saves a week.",
      },
      {
        type: "ul",
        items: [
          "**Dependencies** that each solve a small problem and together create a large surface area.",
          "**Configuration** that makes every environment slightly different and every bug slightly harder to reproduce.",
          "**Abstractions** that were introduced before the second use case existed.",
          "**Distributed boundaries** that turn a function call into a network conversation with its own failure modes.",
          "**Dashboards and alerts** that describe the system without helping anyone change it.",
        ],
      },
      { type: "h2", text: "Subtraction as a practice" },
      {
        type: "p",
        text: "The most effective engineering teams I have worked with treat removal as a first-class activity. They schedule it. They celebrate it. They do not wait for a quiet quarter that never arrives.",
      },
      {
        type: "ol",
        items: [
          "Name the smallest version of the problem that is worth solving.",
          "Delete before adding. Look for an existing capability that can be retired.",
          "Set a complexity budget for the quarter, and spend it deliberately.",
          "Make the boring choice when the problem is not the interesting part.",
        ],
      },
      { type: "h2", text: "Boring is not the same as careless" },
      {
        type: "p",
        text: "Boring technology is not an excuse for sloppy work. A boring database still needs backups. A simple deployment still needs a rollback plan. The point is to spend your novelty where it changes the outcome, not where it flatters the architecture diagram.",
      },
      {
        type: "quote",
        text: "The best architecture is the one you can still understand on a bad day.",
        cite: "Theo Nakamura",
      },
      { type: "h2", text: "A small-software checklist" },
      {
        type: "ul",
        items: [
          "Could a new engineer trace a request from start to finish in an afternoon?",
          "Are there more moving parts than the problem requires?",
          "Does every dependency have a named owner and a reason to exist?",
          "Can we turn this feature off without a deploy?",
          "Would we build it the same way again, knowing what we know now?",
        ],
      },
      { type: "h2", text: "The confidence of less" },
      {
        type: "p",
        text: "Smaller software is not less ambitious. It is ambition directed at the problem rather than the machinery. It leaves room for the next idea, the next person, and the next version of the product.",
      },
      {
        type: "p",
        text: "The teams that last are not the ones with the most sophisticated stack. They are the ones that can still move quickly after the stack has become familiar.",
      },
    ],
  },
  {
    slug: "a-field-guide-to-editorial-interfaces",
    title: "A Field Guide to Editorial Interfaces",
    dek: "The web is full of pages that look like articles and read like dashboards. Editorial interfaces put the sentence back at the center.",
    topic: "design",
    author: "Elena Marsh",
    publishedAt: "2026-08-26",
    tags: ["Typography", "Layout", "Editorial design"],
    art: { palette: 4, variant: 4 },
    body: [
      {
        type: "p",
        text: "There is a particular kind of website that looks like an article and behaves like a dashboard. The type is small, the columns are many, and the sentence is somewhere in the middle, competing with a cookie banner, a newsletter modal, and a floating share bar.",
      },
      {
        type: "p",
        text: "Editorial interfaces are a response to that. They begin with a simple commitment: the text is the primary object. Everything else is in service of it.",
      },
      { type: "h2", text: "The sentence is the interface" },
      {
        type: "p",
        text: "In most software, the interface is the product. In an editorial interface, the sentence is the product. Navigation, bylines, and related links are supporting infrastructure. They should be present, legible, and quiet.",
      },
      {
        type: "p",
        text: "This changes the hierarchy. The headline gets the largest type. The deck gets the second-largest. The body gets the most careful spacing. The metadata gets the smallest type that remains comfortable to read.",
      },
      { type: "h2", text: "Measure, then measure again" },
      {
        type: "p",
        text: "The single most reliable improvement you can make to a long-form page is to control its measure — the number of characters in a line. A measure of roughly 60 to 75 characters is comfortable for most readers at most sizes.",
      },
      {
        type: "p",
        text: "Measure is not a fixed number. It changes with font size, line height, and the reader’s device. Set a maximum width on the text column, then test it with real paragraphs, not lorem ipsum. The right measure is the one where your eye finds the next line without searching.",
      },
      { type: "h2", text: "Hierarchy without noise" },
      {
        type: "p",
        text: "An editorial page needs very few tools to establish hierarchy: size, weight, space, and one accent color. That is usually enough.",
      },
      {
        type: "ul",
        items: [
          "Use **size** for importance, not decoration.",
          "Use **weight** sparingly. A page with four bold elements has no emphasis.",
          "Use **space** to separate ideas. White space is a form of punctuation.",
          "Use **rules** to mark transitions, not to fence every section.",
        ],
      },
      { type: "h2", text: "Rhythm" },
      {
        type: "p",
        text: "Reading is a physical act. The eye moves in small jumps, the hand scrolls, the mind builds a model of the page. Rhythm is what makes that movement feel effortless.",
      },
      {
        type: "p",
        text: "Line height, paragraph spacing, and heading margins are the percussion. If the spacing is inconsistent, the page feels nervous even when the prose is calm. A useful exercise: read the page aloud and notice where you naturally pause. The layout should agree with you.",
      },
      { type: "h2", text: "Restraint" },
      {
        type: "p",
        text: "Every element on an editorial page should answer a question the reader is likely to have. Who wrote this? When? What else is related? If an element answers a question nobody asked, it is probably decoration.",
      },
      {
        type: "quote",
        text: "If a decoration does not help someone read the next sentence, it is furniture in the hallway.",
        cite: "Elena Marsh",
      },
      { type: "h2", text: "A field checklist" },
      {
        type: "ol",
        items: [
          "Set a comfortable measure and test it with real copy.",
          "Use one accent color, and use it for links and labels only.",
          "Make the byline easy to find and easy to ignore.",
          "Keep related links below the article, not inside it.",
          "Check the page at 200% zoom and on a small phone.",
          "Remove one element before launch. Then remove another.",
        ],
      },
      { type: "h2", text: "The long view" },
      {
        type: "p",
        text: "Editorial interfaces are not nostalgic. They are an argument about attention: that a page can be generous, that a reader can be trusted, and that a sentence is still the most powerful thing on the internet.",
      },
    ],
  },
  {
    slug: "why-your-best-ideas-need-a-longer-runway",
    title: "Why Your Best Ideas Need a Longer Runway",
    dek: "The pressure to ship early is real. But the ideas that change how we work rarely arrive on schedule — they accrue.",
    topic: "culture",
    author: "Marcus Bell",
    publishedAt: "2026-07-30",
    tags: ["Creative practice", "Attention", "Work"],
    art: { palette: 1, variant: 5 },
    body: [
      {
        type: "p",
        text: "In the spring of 2024, a small team I worked with spent six weeks on a feature that never shipped. The research was inconclusive, the prototype was awkward, and the roadmap moved on. The feature was cancelled. The work was not wasted.",
      },
      {
        type: "p",
        text: "Two quarters later, a different team used one of the discarded prototypes to solve a problem nobody had connected to it. The idea had been sitting in the drawer, quietly becoming useful.",
      },
      { type: "h2", text: "The myth of the eureka" },
      {
        type: "p",
        text: "We tell stories about ideas arriving fully formed: the napkin sketch, the shower thought, the founder who wakes up knowing. The stories are mostly false. They compress years of noticing into a single scene because the real timeline is less cinematic.",
      },
      {
        type: "p",
        text: "Ideas need a runway. They need time to be wrong in private, to collide with other ideas, and to become specific enough to act on.",
      },
      { type: "h2", text: "What incubation actually looks like" },
      {
        type: "p",
        text: "Incubation is not sitting still. It is a set of small, unglamorous practices that keep an idea alive without forcing it to perform.",
      },
      {
        type: "ul",
        items: [
          "**Gather without an agenda.** Save the article, the screenshot, the sentence you overheard.",
          "**Revisit on a schedule.** A monthly pass through old notes is worth more than a new tool.",
          "**Let other people poke at it.** An idea that cannot survive a skeptical conversation is not ready.",
          "**Sleep on it — twice.** The second sleep is where the obvious objection usually appears.",
          "**Keep a log.** Write down what changed your mind, not just what you decided.",
        ],
      },
      { type: "h2", text: "The cost of premature certainty" },
      {
        type: "p",
        text: "When a team commits too early, the idea hardens before it is ready. The roadmap becomes a defense of the first version. The sunk cost becomes a reason to stop listening. What began as curiosity ends as a project nobody is allowed to question.",
      },
      {
        type: "quote",
        text: "An idea that cannot survive a slow week is usually not an idea. It is an impulse.",
        cite: "Marcus Bell",
      },
      { type: "h2", text: "Making room" },
      {
        type: "ol",
        items: [
          "Protect a small block of time that has no delivery target.",
          "Separate exploration from commitment. Not every sketch is a promise.",
          "Reward the kill. A cancelled experiment that taught you something is a success.",
          "Write the postmortem while the idea is still warm.",
        ],
      },
      {
        type: "p",
        text: "The hardest part is social. Teams are rewarded for visible progress, and incubation is mostly invisible. Leaders have to make the invisible work legible without turning it into a dashboard.",
      },
      { type: "h2", text: "The long runway is a team practice" },
      {
        type: "p",
        text: "A longer runway is not a personality trait. It is not reserved for people who are naturally patient. It is a condition a team can create, or fail to create, through its calendar, its metrics, and its appetite for uncertainty.",
      },
      {
        type: "p",
        text: "The work that lasts is rarely the work that arrived first. Give the good idea another month. You may be surprised by what it becomes.",
      },
    ],
  },
  {
    slug: "designing-for-the-second-visit",
    title: "Designing for the Second Visit",
    dek: "First impressions get the attention. The second visit is where a product earns its place in someone’s life.",
    topic: "product",
    author: "Priya Raman",
    publishedAt: "2026-06-24",
    tags: ["Retention", "Product strategy", "Research"],
    art: { palette: 0, variant: 2 },
    body: [
      {
        type: "p",
        text: "The first visit is a performance. The second visit is a relationship.",
      },
      { type: "h2", text: "The onboarding trap" },
      {
        type: "p",
        text: "Teams spend enormous energy on the first-run experience: the welcome screen, the tooltip tour, the empty state with a friendly illustration. This work matters. But retention is rarely decided during onboarding. It is decided later, when the novelty is gone and the product has to be useful on an ordinary day.",
      },
      {
        type: "p",
        text: "The second visit is where the product meets the person’s memory. They remember a little. They have forgotten more. They are not starting from zero, and they are not continuing from where they left off. They are somewhere in between.",
      },
      { type: "h2", text: "What memory does" },
      {
        type: "p",
        text: "Returning users carry a mental model of the product. That model is incomplete, sometimes wrong, and often more efficient than the interface. Good design works with it instead of asking people to rebuild it.",
      },
      {
        type: "ul",
        items: [
          "**Recent items** are a form of memory. Show them without making people search.",
          "**Saved state** should be visible. If the product remembers, say so.",
          "**Shortcuts** should be discoverable at the moment they become useful, not in a settings page.",
          "**Empty states** should acknowledge history. “Nothing here yet” is different on day one and day thirty.",
        ],
      },
      { type: "h2", text: "Design for the return" },
      { type: "h3", text: "The re-entry point" },
      {
        type: "p",
        text: "Where does a returning person land? If it is a generic dashboard, they have to reconstruct their context. A better re-entry point shows the last thing they touched, the thing that changed, and the thing that needs them next.",
      },
      { type: "h3", text: "The quiet state" },
      {
        type: "p",
        text: "Not every visit needs a notification. A product that is calm when nothing is happening is easier to trust when something is. Restraint is a retention feature.",
      },
      { type: "h3", text: "The recovery path" },
      {
        type: "p",
        text: "Returning users forget passwords, permissions, and where they put things. A good recovery path assumes mild confusion, not incompetence. It offers a way back without a support ticket.",
      },
      {
        type: "quote",
        text: "A product earns its place not when it surprises you, but when it remembers you.",
        cite: "Priya Raman",
      },
      { type: "h2", text: "Measure the second visit" },
      {
        type: "ul",
        items: [
          "Time to first meaningful action on visit two, not visit one.",
          "The percentage of returning users who complete the same core task again.",
          "Support requests that begin with “I can’t find…” or “I forgot…”.",
          "The gap between sessions, segmented by cohort.",
        ],
      },
      { type: "h2", text: "A small exercise" },
      {
        type: "p",
        text: "Open your product in a new session after a week away. Do not read the docs. Do not ask a colleague. Notice what you have to relearn, what you misremember, and what the product could have told you without being asked.",
      },
      {
        type: "p",
        text: "The answers are your roadmap. The second visit is not a retention metric. It is a design brief.",
      },
    ],
  },
  {
    slug: "notes-on-typography-for-the-web",
    title: "Notes on Typography for the Web",
    dek: "Good web typography is not a matter of taste. It is a series of small, testable decisions about rhythm, measure, and contrast.",
    topic: "design",
    author: "Elena Marsh",
    publishedAt: "2026-05-15",
    tags: ["Typography", "CSS", "Accessibility"],
    art: { palette: 3, variant: 4 },
    body: [
      {
        type: "p",
        text: "Typography on the web is often discussed as a matter of taste. It is more useful to treat it as a series of small, testable decisions. The goal is not a beautiful page. The goal is a page that disappears behind the reading.",
      },
      { type: "h2", text: "Start with a scale" },
      {
        type: "p",
        text: "A type scale is a contract. It says: these are the sizes we use, and this is what each one means. Without a scale, every new screen invents its own hierarchy and the product slowly becomes a collage.",
      },
      {
        type: "p",
        text: "For long-form reading, a base size between 18 and 20 pixels is a good starting point. Build the rest of the scale around it, and use relative units so the page respects the reader’s browser settings.",
      },
      {
        type: "code",
        language: "css",
        code: `:root {
  --step-0: 1.125rem;  /* body */
  --step-1: 1.375rem;  /* lead */
  --step-2: 1.75rem;   /* h3 */
  --step-3: 2.25rem;   /* h2 */
  --step-4: 3rem;      /* h1 */
}`,
      },
      { type: "h2", text: "Measure and line height" },
      {
        type: "p",
        text: "Aim for 60 to 75 characters per line. A line that is too long exhausts the eye; a line that is too short breaks the rhythm of the sentence. Line height should usually sit between 1.5 and 1.7 for body text, and tighter for large headings.",
      },
      {
        type: "p",
        text: "These numbers are a starting point, not a law. The right combination depends on the typeface, the contrast, and the length of the text. Test with real paragraphs.",
      },
      { type: "h2", text: "Contrast is not optional" },
      {
        type: "p",
        text: "Body text should meet WCAG AA contrast at minimum. Large text can be slightly lighter, but “slightly lighter” is not an invitation to gray-on-gray. The most common accessibility failure I see in editorial design is a beautiful, low-contrast caption.",
      },
      { type: "h2", text: "Load fewer fonts" },
      {
        type: "p",
        text: "Every font is a request, a parse, and a chance for the layout to shift. Use one or two families. Prefer variable fonts. Self-host when you can, subset to the characters you need, and use `font-display: swap` so the text is readable before the font arrives.",
      },
      {
        type: "ul",
        items: [
          "Self-host fonts rather than relying on a third-party request.",
          "Subset to Latin if that is all you need.",
          "Use a fallback with similar metrics to reduce layout shift.",
          "Do not load a separate weight for every heading.",
        ],
      },
      { type: "h2", text: "The italic question" },
      {
        type: "p",
        text: "Use italics for emphasis, titles, and foreign words — not for entire paragraphs. Use bold for labels and key terms, sparingly. If everything is emphasized, nothing is.",
      },
      { type: "h2", text: "A typographic checklist" },
      {
        type: "ol",
        items: [
          "Set a base size and a small, consistent scale.",
          "Constrain the measure and test it at several widths.",
          "Check contrast for body text, captions, and links.",
          "Verify the layout at 200% zoom.",
          "Load no more than two font families.",
          "Read a full page on a phone before you ship.",
        ],
      },
      {
        type: "quote",
        text: "Good typography is invisible until it is missing.",
        cite: "Elena Marsh",
      },
      {
        type: "p",
        text: "The best compliment a reader can give a page is not “what a beautiful font.” It is “I read the whole thing without noticing the screen.”",
      },
    ],
  },
  {
    slug: "the-unreasonable-value-of-boring-technology",
    title: "The Unreasonable Value of Boring Technology",
    dek: "Novelty is expensive. The most durable systems are usually built from tools that have already survived their own hype cycle.",
    topic: "engineering",
    author: "Theo Nakamura",
    publishedAt: "2026-04-09",
    tags: ["Architecture", "Reliability", "Teams"],
    art: { palette: 2, variant: 0 },
    body: [
      {
        type: "p",
        text: "The most reliable system I have worked on ran on a database older than most of its engineers. It was not exciting. It was excellent.",
      },
      { type: "h2", text: "Innovation tokens" },
      {
        type: "p",
        text: "The idea of innovation tokens is simple: a team has a limited budget for novelty. Spend it on the thing that makes your product different. Spend everything else on technology that is already understood.",
      },
      {
        type: "p",
        text: "This is not an argument against new tools. It is an argument against spending novelty by accident. A new queue, a new framework, a new observability stack — each one is a small bet that the team will have the time and attention to learn it properly.",
      },
      {
        type: "quote",
        text: "Every new technology spends a token you cannot earn back by being clever.",
        cite: "Theo Nakamura",
      },
      { type: "h2", text: "The three a.m. test" },
      {
        type: "p",
        text: "Choose technology for the worst day, not the best demo. At three in the morning, with a partial outage and a tired on-call engineer, the relevant questions are not about elegance. They are about logs, documentation, and whether anyone remembers how the thing works.",
      },
      {
        type: "p",
        text: "Boring tools tend to have better answers to those questions. They have been around long enough to accumulate the unglamorous knowledge that matters: failure modes, migration paths, and a search result for the error message you are staring at.",
      },
      { type: "h2", text: "Where novelty belongs" },
      {
        type: "p",
        text: "Novelty has a place. It belongs in prototypes, in internal tools, in a clearly bounded problem where the team has slack to learn. It belongs where a failure is cheap and the learning is the point.",
      },
      {
        type: "ul",
        items: [
          "A prototype that will be thrown away.",
          "An internal tool with a small, forgiving audience.",
          "A problem that existing tools genuinely cannot solve.",
          "A team with the time to become competent, not just excited.",
        ],
      },
      { type: "h2", text: "The cost of being interesting" },
      {
        type: "p",
        text: "Interesting technology has a hiring cost, a debugging cost, and a documentation cost. It also has an opportunity cost: every hour spent learning the new thing is an hour not spent on the product. None of these costs are visible in the architecture diagram, which is why they are so easy to ignore.",
      },
      { type: "h2", text: "A decision memo" },
      {
        type: "p",
        text: "When a team does choose something new, write it down. A short memo is enough, and it pays for itself the first time someone asks why.",
      },
      {
        type: "ol",
        items: [
          "What problem are we solving?",
          "What is the boring option, and why is it insufficient?",
          "What would we learn from the new option?",
          "What is the cost of reversing the decision?",
          "When will we revisit it?",
        ],
      },
      { type: "h2", text: "The confidence to be dull" },
      {
        type: "p",
        text: "Boring technology is a competitive advantage because it is not interesting enough to distract you. It gives the team a stable floor, and a stable floor is where good product work happens.",
      },
      {
        type: "p",
        text: "Save your excitement for the problem. The tools can be ordinary.",
      },
    ],
  },
  {
    slug: "on-keeping-a-commonplace-book",
    title: "On Keeping a Commonplace Book",
    dek: "Before the feed, thoughtful people kept notebooks. The practice is worth recovering — not as productivity, but as a way of paying attention.",
    topic: "culture",
    author: "Marcus Bell",
    publishedAt: "2026-03-02",
    tags: ["Note-taking", "Attention", "Creative practice"],
    art: { palette: 4, variant: 1 },
    body: [
      {
        type: "p",
        text: "For most of the last five centuries, keeping a commonplace book was unremarkable. Educated people copied passages from their reading into a notebook, grouped them by theme, and returned to them. The practice was not productivity. It was attention.",
      },
      { type: "h2", text: "What it was" },
      {
        type: "p",
        text: "A commonplace book was a personal anthology. It held quotations, recipes, legal principles, poems, and observations — whatever the keeper wanted to keep. The point was not to capture everything. The point was to choose.",
      },
      {
        type: "p",
        text: "John Locke wrote a treatise on how to index one. Virginia Woolf kept notebooks. Many of the ideas we now treat as original arrived through this slow, handwritten route.",
      },
      { type: "h2", text: "Why it worked" },
      {
        type: "ul",
        items: [
          "**Copying was slow.** Slowness gave the sentence time to become yours.",
          "**Selection was deliberate.** A commonplace book was a record of taste, not a feed.",
          "**Juxtaposition was accidental.** Two unrelated passages on facing pages could become a new thought.",
          "**Returning was built in.** The book was meant to be reread, not archived.",
        ],
      },
      { type: "h2", text: "A digital version" },
      {
        type: "p",
        text: "The tool matters less than the practice. A single document, a plain-text folder, or a paper notebook all work. The important thing is that it is yours, that it is easy to add to, and that you go back.",
      },
      {
        type: "ol",
        items: [
          "Keep one place for everything. Fragmentation is the enemy of return.",
          "Capture the sentence, not just the link.",
          "Add one line of your own: why did this stop you?",
          "Review it monthly, and move what still matters forward.",
          "Share selectively. A commonplace book is not a performance.",
        ],
      },
      { type: "h2", text: "The feed is not a notebook" },
      {
        type: "p",
        text: "A feed is optimized for arrival. It wants the next item, the next reaction, the next small hit of novelty. A notebook is optimized for return. It wants the same idea, seen again, with more of your life around it.",
      },
      {
        type: "quote",
        text: "A commonplace book is a conversation with your past self, conducted in fragments.",
        cite: "Marcus Bell",
      },
      { type: "h2", text: "Start small" },
      {
        type: "p",
        text: "A single page is enough to begin. Copy one passage today. Add one sentence about why it matters. Do it again tomorrow, or next week, or when something catches your attention.",
      },
      {
        type: "p",
        text: "The point is not to remember everything. It is to notice what keeps returning — and to give it a place to land.",
      },
    ],
  },
];

const sortedPosts = [...posts].sort(
  (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
);

export function getAllPosts(): Post[] {
  return sortedPosts;
}

export function getPost(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug);
}

export function getPostsByTopic(topic: string): Post[] {
  return sortedPosts.filter((post) => post.topic === topic);
}

export function getPostsByAuthor(authorName: string): Post[] {
  return sortedPosts.filter((post) => post.author === authorName);
}

export function getRelatedPosts(post: Post, limit = 3): Post[] {
  const sameTopic = sortedPosts.filter(
    (candidate) => candidate.slug !== post.slug && candidate.topic === post.topic,
  );
  const others = sortedPosts.filter(
    (candidate) => candidate.slug !== post.slug && candidate.topic !== post.topic,
  );
  return [...sameTopic, ...others].slice(0, limit);
}

export function getAdjacentPosts(slug: string): {
  newer?: Post;
  older?: Post;
} {
  const index = sortedPosts.findIndex((post) => post.slug === slug);
  if (index === -1) return {};
  return {
    newer: index > 0 ? sortedPosts[index - 1] : undefined,
    older: index < sortedPosts.length - 1 ? sortedPosts[index + 1] : undefined,
  };
}

function blockToText(block: Block): string {
  switch (block.type) {
    case "p":
    case "h2":
    case "h3":
      return block.text;
    case "quote":
      return `${block.text} ${block.cite ?? ""}`;
    case "ul":
    case "ol":
      return block.items.join(" ");
    case "callout":
      return `${block.title} ${block.text}`;
    case "code":
      return block.code;
    case "hr":
      return "";
  }
}

export function getWordCount(post: Post): number {
  const text = post.body.map(blockToText).join(" ");
  return text.trim().split(/\s+/).filter(Boolean).length;
}

export function getReadingTime(post: Post): number {
  return Math.max(1, Math.round(getWordCount(post) / 220));
}

export function slugifyHeading(text: string): string {
  return text
    .toLowerCase()
    .replace(/[’']/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function getOutline(post: Post): OutlineItem[] {
  const counts = new Map<string, number>();
  const outline: OutlineItem[] = [];

  for (const block of post.body) {
    if (block.type !== "h2") continue;
    const base = slugifyHeading(block.text);
    const count = (counts.get(base) ?? 0) + 1;
    counts.set(base, count);
    outline.push({
      id: count === 1 ? base : `${base}-${count}`,
      text: block.text,
    });
  }

  return outline;
}
