import { Compass, Building2, Megaphone, Landmark } from 'lucide-react';

export const WHAT_WE_DO = [
  {
    slug: 'evaluation',
    number: '01',
    title: 'Evaluation',
    icon: Compass,
    summary: 'Verdicts we can stand behind, not just assert.',
    image: '/images/wwd-evaluation.jpg',
    imageAlt: 'A hillside lodge among trees at golden hour',
    intro:
      "Evaluation is the front door — nothing enters the THEMMIC world, and no capital moves, until a property has been through it. It's less a formality than the whole reason a guest, an agent, or an investor can trust what we say about a place.",
    facts: ['Independent review', 'Same criteria, every time', 'Feeds Management & Investment'],
    sections: [
      {
        heading: 'One standard, checked the same way every time',
        body: 'Every property or experience is audited against three things: the physical condition of the asset, the standard of service running it, and the safety of the people inside it. The same criteria, applied every time, is what makes the result a verdict rather than an opinion — consistent enough to trust, specific enough to act on.',
      },
      {
        heading: 'A documented process, not a gut check',
        body: 'A joint walk-through of the property, paired with a documented checklist — not one inspector’s impression — with findings logged against the same criteria every time, so two evaluations of two different places are actually comparable. Those criteria come from the same EMMIC discipline THEMMIC runs group-wide, not invented per property.',
      },
      {
        heading: 'Independent review, shared honestly',
        body: "Not the operator marking its own homework — a reviewer independent of day-to-day management runs the audit, so the verdict isn't shaped by whoever has the most to gain from a passing grade. Every evaluation produces a written report, shared with the property, with Management, and — when relevant — with Investment.",
      },
      {
        heading: 'A verdict with real consequences',
        body: "A clear verdict — ready, ready-with-conditions, or not yet — feeds directly into Management's SOPs and, where capital is involved, into Investment's decision. Structural issues, safety violations, or a service standard that can't be brought into line within a reasonable window are enough to hold that verdict at 'not yet,' no exceptions for how promising the pitch is.",
      },
      {
        heading: 'Evaluation doesn’t stop at day one',
        body: "A full evaluation happens before a property joins the group, then a lighter recheck on a set cycle, so a verdict reflects how a place is actually running today, not just how it looked on day one. A property that clears evaluation once doesn't get a lifetime exemption — the same audit that let it in is the audit that can flag it for review later.",
      },
    ],
    closing: 'A verdict is only worth having if it was earned the same way every time.',
  },
  {
    slug: 'management',
    number: '02',
    title: 'Management',
    icon: Building2,
    summary: 'Giving hospitality a spine, not just good intentions.',
    image: '/images/wwd-management.jpg',
    imageAlt: 'A guest walking down a softly lit hotel corridor',
    intro:
      'Management is where the standard actually lives — not in a mission statement, but in the daily mechanics of running a property well, on a normal Tuesday as much as opening night.',
    facts: ['SOP for every stage', 'Named owners, not shared blame', 'Proven at Serenade Bhurban'],
    sections: [
      {
        heading: 'A system, not a mission statement',
        body: 'A property runs on SOPs, not good intentions: the booking-to-checkout lifecycle, service scripts, maintenance and staffing standards, and a clear process for handling incidents when they happen. None of it lives on a shelf — the same system is what front-of-house actually uses, day to day, at Serenade Bhurban.',
      },
      {
        heading: 'Proven at Serenade Bhurban',
        body: "Serenade Bhurban runs on exactly this system today — it's the operating evidence that the spine exists, not a plan for one. The SOPs a property is held to are the same standard Evaluation checked it against; Management doesn't invent its own bar, it runs the one already set.",
      },
      {
        heading: 'Named owners, trained staff',
        body: "Every SOP has a named owner — someone whose job it is to know it's being followed, not a shared responsibility that quietly becomes no one's. And an SOP nobody's been trained on isn't a standard, it's a document: new staff walk through the system before their first shift, not after their first mistake.",
      },
      {
        heading: 'Sharpened by every incident',
        body: "An incident isn't just handled and forgotten — it's logged, reviewed, and where it points to a gap in the SOP, the SOP gets updated, getting sharper over time instead of staying static. Guests rarely notice the SOP itself — what they notice is its absence, in the small inconsistencies that show up the moment a property is being run without one.",
      },
      {
        heading: 'Consistency that scales',
        body: 'Guest experience stays consistent even as people change — new staff, a busy weekend, a slow season — because the standard is written down, trained on, and checked. And the same spine that runs Serenade Bhurban is built to be handed to the next property, and the one after that — a system, not a one-off arrangement built around specific people.',
      },
    ],
    closing: 'Good intentions run a property for a week. A spine runs it for years.',
  },
  {
    slug: 'marketplace',
    number: '03',
    title: 'Marketplace',
    icon: Megaphone,
    summary: 'Matching verified demand to certified places.',
    image: '/images/wwd-marketplace.jpg',
    imageAlt: 'Two people shaking hands over a signed agreement',
    intro:
      'Marketplace is the demand side of the same discipline — it only works because Evaluation has already done the work of separating real, certified places from the rest.',
    facts: ['Trade-side, agent to operator', 'Dated, budgeted intent only', 'Certified supply only'],
    sections: [
      {
        heading: 'Verified demand, not guesswork',
        body: 'Verified demand means dated, budget-qualified travel intent — group bookings, corporate retreats, agents carrying confirmed clients — matched to certified properties, with operators bidding for the booking itself. This is a trade marketplace, agent to operator, where ventures like Its Travelick and Jolidays sit, not a consumer marketplace competing with OTAs on price.',
      },
      {
        heading: 'A match, not a listing',
        body: "An agent or corporate buyer submits dated, budgeted intent; THEMMIC checks it against evaluated, certified properties with real availability; operators bid on the booking itself — on price and terms, not just first-come-first-served. THEMMIC doesn't set the price or pick the winner — it verifies the demand and the supply are both real, then lets operators compete on their own terms.",
      },
      {
        heading: 'Certification is the entry ticket',
        body: "Trade buyers are booking on someone else's behalf, often sight-unseen — the certification from Evaluation is what lets them commit without inspecting the property themselves. Only evaluated, certified operators get access to the marketplace at all — certification isn't just a badge, it's the entry ticket to compete for bookings.",
      },
      {
        heading: 'Demand without paying twice',
        body: "THEMMIC's role doesn't end at the handshake — the booking is tracked through to the stay, so a bad experience on either side becomes evidence for the next evaluation cycle, not a dead end. In return, operators get access to qualified, dated demand without paying for it twice — the marketing and the vetting are already done before a lead ever reaches them.",
      },
      {
        heading: 'Growing with the group, not around it',
        body: "Every property available to bid on has already been through Evaluation — Marketplace doesn't widen the pool by lowering the bar, it only draws from properties that cleared it. As the anchor portfolio grows, so does the pool of certified supply on the other side of every match — the marketplace gets more useful as the group gets bigger, not less.",
      },
    ],
    closing: 'A match is only as good as the certainty behind both sides of it.',
  },
  {
    slug: 'investment',
    number: '04',
    title: 'Investment',
    icon: Landmark,
    summary: 'Capital that arrives on time, backed by real numbers.',
    image: '/images/wwd-investment.jpg',
    imageAlt: 'Cranes and scaffolding on buildings under construction',
    intro:
      'Investment is the last step, not the first — capital follows proof, arriving once Evaluation and Management have already shown a property can be trusted to run to standard.',
    facts: ['Renovation & expansion capital', 'Backed by real occupancy data', "Won't fund unproven properties"],
    sections: [
      {
        heading: 'Capital, timed to real need',
        body: 'Renovation and expansion capital, deployed at the point a property needs it to grow — not before. Capital arrives at the moment a property is ready to grow — a renovation cycle, a new wing, an expansion — rather than sitting idle beforehand or showing up too late to catch the demand Marketplace already found.',
      },
      {
        heading: 'Backed by data, not projections',
        body: "That capital is committed against proven occupancy data from a property we already operate, rather than projections on a property we don't. Serenade Bhurban is the proof point: the first property to receive this exact sequence — evaluated, managed, and now growing on its own numbers.",
      },
      {
        heading: 'The last link in the chain',
        body: 'Evaluation sets the standard, Management proves the property can run to it, and only then does Investment size the capital — against a track record, not a pitch deck. Every stage before Investment exists to make sure the capital that eventually arrives is going somewhere that has already proven it can be run well.',
      },
      {
        heading: 'A decision earned, not assumed',
        body: "Capital sizing isn't a single call — it runs through the same chain as everything else: the evaluated condition, the operating track record, and only then the number. A property that hasn't passed Evaluation, or one with no Management system in place to run it, doesn't get capital, regardless of how good the pitch sounds.",
      },
      {
        heading: 'Growth at a pace that holds',
        body: 'Not a quick flip — capital is committed with the same long-view discipline as the rest of THEMMIC, sized against what a property can sustainably earn, not what it might earn in a best case. That means growth at whatever pace actually holds up: evaluated, managed, proven, then funded, repeated rather than rushed.',
      },
    ],
    closing: 'Capital that arrives before the proof is a bet. Capital that arrives after is an investment.',
  },
];

export const NAV_LINKS = [
  { label: 'About', to: '/about' },
  {
    label: 'What We Do',
    to: '/what-we-do',
    children: WHAT_WE_DO.map((item) => ({
      label: item.title,
      to: `/what-we-do/${item.slug}`,
    })),
  },
  { label: 'Projects', to: '/projects' },
  { label: 'Contact', to: '/contact' },
];

export const APPROACH = [
  {
    title: 'Guest-first',
    description:
      'Every decision begins with how it feels to arrive, to stay, to be looked after.',
  },
  {
    title: 'Place & craft',
    description:
      'Rooted in the land it sits on — local, considered, never generic.',
  },
  {
    title: 'Built to last',
    description: 'Self-reliant operations made to endure, not to flip.',
  },
  {
    title: 'Quiet luxury',
    description: 'Premium without noise; calm, warm, and unhurried.',
  },
];

export const BODY_FONT = { fontFamily: 'system-ui, sans-serif' };
