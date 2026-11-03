import type { BlogPost, ClinicInformation, ServiceDetail, TeamProfile } from './clinic-data';

export type DentistProfile = TeamProfile;

const phone = '+61 415 610 544';
const businessId = 'avs-plumbing-and-gas';
const plumbingPhoto = '/images/plumbing-technician.jpg';

export const CLINIC_INFO: ClinicInformation = {
  name: 'AVS Plumbing and Gas',
  legalName: 'AVS Plumbing and Gas Pty Ltd',
  tagline: 'Plumbing and gas fitting across Cairns and surrounding areas.',
  primaryLocation: {
    street: '29 Poolwood Rd', suite: '', city: 'Kewarra Beach', state: 'QLD', postalCode: '4879', country: 'AU',
    directions: '29 Poolwood Rd, Kewarra Beach QLD 4879, Australia',
    landmarks: 'Serving Cairns, Kewarra Beach and surrounding areas.',
  },
  contact: { phone, emergencyPhone: phone, whatsapp: phone },
  identityHighlights: ['Plumbing and gas fitting', 'Hot water system repairs and replacement', 'Emergency leaks and plumbing repairs'],
  schedule: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day) => ({ day, hours: 'Open 24 hours' })),
  verifiedStats: [{ value: 50, suffix: '', label: 'Google reviews', description: 'Customer reviews for AVS Plumbing and Gas.' }],
  accreditations: [],
};

export const DENTISTS: TeamProfile[] = [{
  id: businessId, slug: businessId, name: 'Andy', title: 'Plumber and gas fitter',
  qualifications: 'Plumbing and gas services', specialization: 'Residential plumbing repairs, hot water and gas fitting', experienceYears: 0,
  bio: 'Andy and the AVS Plumbing and Gas team help Cairns households with gas stoves, hot water systems, leaking taps and pipes, burst pipes, bathroom and kitchen plumbing, and home renovations. Customers describe prompt, professional service, clear explanations and tidy workmanship.',
  philosophy: 'Explain the issue and options clearly, agree on the work, and treat each home with care.',
  education: [], memberships: [],
  specialties: ['Gas stove installation', 'Gas hot water systems', 'Hot water system repairs and replacement', 'Burst and leaking pipes', 'Leak detection and repairs', 'Tap and mixer repairs', 'Bathroom and kitchen plumbing', 'Whole-home repiping and renovations'],
  image: plumbingPhoto, warmImage: '/images/plumbing-repair.jpg',
}];

const serviceEntries = [
  { slug: 'emergency-plumbing', name: 'Emergency plumbing', description: 'Prompt help with urgent plumbing problems across Cairns, including burst pipes, worsening leaks and hot water failures. Call AVS to explain what has happened and discuss availability.', focus: ['A pipe has burst or water is actively leaking', 'A plumbing fault needs urgent attention', 'You need help restoring water or hot water'] },
  { slug: 'gas-fitting', name: 'Gas fitting and gas stoves', description: 'Talk to AVS Plumbing and Gas about gas fitting and gas stove installation. Explain your appliance and property requirements to arrange a suitable visit.', focus: ['You need a new gas stove installed', 'You have a gas appliance or connection question', 'You want to discuss a gas fitting job'] },
  { slug: 'hot-water-systems', name: 'Hot water systems', description: 'AVS can help with a failed hot water system, gas hot water issues, repairs and replacement. Call to describe the fault and discuss a prompt visit.', focus: ['Your hot water system has stopped working', 'Your gas hot water service has a fault', 'You need a hot water system repaired or replaced'] },
  { slug: 'leak-repairs', name: 'Leak detection and repairs', description: 'Arrange help with leaking taps, shower mixers, pipework and water lines. AVS can inspect the issue, explain practical options and discuss the repair.', focus: ['A tap, mixer or pipe is leaking', 'A leak is getting worse or has stopped normal water use', 'You need help finding and repairing a plumbing leak'] },
  { slug: 'blocked-drains', name: 'Blocked drains and toilets', description: 'Get help investigating blocked toilets and drainage problems. AVS can assess what is affected, explain the next steps and complete the agreed work.', focus: ['A toilet or drain is blocked', 'Water is draining slowly or backing up', 'You need help restoring normal drainage'] },
  { slug: 'bathroom-plumbing', name: 'Bathroom plumbing', description: 'Discuss bathroom plumbing repairs and installations, including leaking shower mixers, taps, toilets and vanity connections.', focus: ['A shower mixer, tap or toilet needs repair', 'You are updating bathroom plumbing', 'A bathroom leak needs investigation'] },
  { slug: 'kitchen-plumbing', name: 'Kitchen plumbing', description: 'From gas stove installation to leaking taps and sink plumbing, AVS can discuss your kitchen plumbing job and the work required.', focus: ['You need a gas stove installed', 'A kitchen tap, sink or pipe is leaking', 'You are planning a kitchen plumbing update'] },
  { slug: 'plumbing-renovations', name: 'Plumbing renovations and repiping', description: 'AVS Plumbing and Gas can discuss plumbing work for renovations, including whole-home repiping and kitchen or laundry plumbing.', focus: ['You are renovating a home', 'You need plumbing replaced or rerouted', 'A burst pipe has affected pipework under the home'] },
];

function makeService(entry: typeof serviceEntries[number]): ServiceDetail {
  const overview = 'AVS Plumbing and Gas provides residential plumbing and gas fitting across Cairns and surrounding areas. Call to describe the issue, discuss options and check availability.';
  const steps = [
    ['Tell us what is happening', 'First contact', 'Describe the plumbing or gas issue and let us know if it is urgent.', 'Share the property location, what you have noticed and any access details.'],
    ['Assess the issue', 'By arrangement', 'A plumber reviews the problem and explains practical options.', 'The work needed depends on the issue and the plumbing or gas system at your property.'],
    ['Agree on the work', 'Before work begins', 'Review the proposed work, price and timing before going ahead.', 'Ask any questions you have about the scope and next steps.'],
    ['Complete the repair', 'As arranged', 'The agreed plumbing or gas work is completed at your property.', 'The team will explain any relevant next steps after the job.'],
  ];
  return {
    ...entry, shortDescription: entry.description, navLabel: entry.name,
    tagline: `${entry.name} in Cairns and surrounding areas.`, clinicalExplanation: overview,
    whoNeeds: entry.focus, benefits: ['Prompt responses and clear communication', 'Practical advice about repair options', 'The work and next steps explained clearly'],
    indications: entry.focus.map((condition) => ({ condition, explanation: 'Call AVS Plumbing and Gas to describe the issue and discuss the next step.' })),
    procedureSteps: steps.map(([title, duration, description, clinicalDetails], index) => ({ stepNumber: index + 1, title, duration, description, clinicalDetails })),
    recoveryTimeline: [
      { period: 'Before the visit', expectedSensations: 'Describe the issue and arrange a suitable time.', careProtocol: 'If safe, turn off the water supply if a pipe is actively leaking.' },
      { period: 'During the work', expectedSensations: 'The plumber assesses and completes the agreed job.', careProtocol: 'Follow any practical advice given for your plumbing or gas system.' },
      { period: 'After the work', expectedSensations: 'Review the completed repair and any next steps.', careProtocol: 'Contact AVS if you have questions about the job.' },
    ],
    costTransparency: { baseRange: 'Call to discuss your job and request a quote.', factors: ['Type and location of the issue', 'Parts and access required', 'The agreed work scope'], whatIsIncluded: ['Discussion of the issue and options', 'Agreed scope of work', 'Quote and timing information'], note: 'Pricing depends on the issue and agreed scope. Contact AVS for a quote.' },
    beforeAfterCase: { category: entry.name, clinicalContext: 'Illustrative plumbing service imagery. Contact AVS to discuss your job.', beforeLabel: 'Before the repair', afterLabel: 'After the repair', beforeImage: plumbingPhoto, afterImage: '/images/plumbing-repair.jpg', timeframe: 'Timing depends on the issue and agreed work.' },
    assignedDentistId: businessId,
    faqs: [
      { question: `How do I arrange ${entry.name.toLowerCase()}?`, answer: `Call ${phone} to describe the issue and discuss availability.` },
      { question: 'What areas do you service?', answer: 'AVS serves Cairns, Kewarra Beach and surrounding areas. Call to confirm availability for your property.' },
      { question: 'How do I request a quote?', answer: `Call ${phone} to describe the work and request a quote.` },
      { question: 'Are you open after hours?', answer: 'AVS is listed as open 24 hours. Call to discuss your plumbing issue and availability.' },
    ],
  };
}

export const SERVICES: ServiceDetail[] = serviceEntries.map(makeService);
export interface EmergencyCondition { id: string; title: string; urgency: 'Immediate (0–2 hours)' | 'Same-Day (2–6 hours)' | 'Urgent (Within 24 hours)'; symptoms: string[]; immediateAction: string[]; clinicTreatment: string; }
export const EMERGENCY_CONDITIONS: EmergencyCondition[] = [];

export const BLOG_POSTS: BlogPost[] = [
  { slug: 'what-to-do-for-a-burst-pipe', title: 'What to do when a pipe bursts', category: 'Emergency plumbing', readTime: '3 min read', publishDate: '2026-10-28', lastUpdated: '2026-10-28', authorId: businessId, excerpt: 'Practical first steps when a water pipe bursts at home.', leadImage: plumbingPhoto, relatedServiceSlug: 'emergency-plumbing', content: { intro: 'A burst pipe can quickly send water through your home. If you can do so safely, shut off the water supply and call a plumber.', sections: [{ heading: 'Turn off the water if safe', body: 'Use the main water shut-off valve if you know where it is and can reach it safely. Keep clear of electrical hazards and standing water.' }, { heading: 'Describe the problem', body: 'Tell the plumber where the water is coming from, when you noticed it and whether the water supply has been turned off.' }] } },
  { slug: 'hot-water-system-stopped-working', title: 'When your hot water stops working', category: 'Hot water systems', readTime: '3 min read', publishDate: '2026-10-28', lastUpdated: '2026-10-28', authorId: businessId, excerpt: 'What information to share when arranging a hot water system repair.', leadImage: '/images/plumbing-hot-water.jpg', relatedServiceSlug: 'hot-water-systems', content: { intro: 'A hot water system can fail without warning. A few details can help your plumber understand the problem and discuss the next step.', sections: [{ heading: 'Note what has changed', body: 'Mention whether there is no hot water, a visible leak, unusual noise or another change in the system.' }, { heading: 'Ask about repair options', body: 'A plumber can assess the system and explain the repair or replacement options for your property.' }] } },
  { slug: 'gas-stove-installation', title: 'Planning a gas stove installation', category: 'Gas fitting', readTime: '3 min read', publishDate: '2026-10-28', lastUpdated: '2026-10-28', authorId: businessId, excerpt: 'Details to discuss when arranging a new gas stove installation.', leadImage: '/images/plumbing-technician.jpg', relatedServiceSlug: 'gas-fitting', content: { intro: 'When arranging a gas stove installation, share the appliance details and property location so the gas fitting work can be discussed.', sections: [{ heading: 'Have the appliance details ready', body: 'Tell the plumber the appliance type and any installation information supplied with it.' }, { heading: 'Confirm the work and timing', body: 'Discuss the installation requirements, quote and suitable timing before the work begins.' }] } },
];

export const CUSTOMER_REVIEWS: { name: string; date: string; text: string; rating: number }[] = [
  { name: 'Katie Sheridan', date: '3 months ago', rating: 5, text: 'I contacted Andy to install a new gas stove for me rather urgently. He responded quickly, was super kind, helpful and informative, and had the job completed the next day. Efficient and very reasonably priced, I highly recommend AVS Plumbing and Gas and will certainly be using them in future.' },
  { name: 'Niki Holgate', date: '8 months ago', rating: 5, text: 'We were having issues with our gas hot water service. Andy from AVS Plumbing came over promptly and took time out of his busy day to explain to us how we could possibly fix the problem. He was kind and patient and gave us great advice. Would highly recommend him.' },
  { name: 'Vincent', date: '2 years ago', rating: 5, text: 'Andy and the team from AVS plumbing have helped out a couple of times and saved the day! Most recently a replacement gas hot water system at short notice... We couldn’t be happier with the care, professionalism and quality of service. Great and friendly team - thanks again!' },
  { name: 'Holley Molley', date: 'a year ago', rating: 5, text: 'Andy and his team have been absolute legends when re plumbing the entire house as we burst a water pipe under the house slab. Professional neat and tidy work on time. Highly recommend Andy and his friendly, reliable and easy to talk to team. Very competitive pricing from a honest hard working nice guy.' },
  { name: 'David McDonough', date: '10 months ago', rating: 5, text: 'Fantastic friendly service at a reasonable price. Andi has completed a couple of projects for us now, as we renovate our home, and we could not be happier. He is reliable, solutions focused and easy to work with. Highly recommended!' },
  { name: 'Kim Rheuben', date: '4 months ago', rating: 5, text: 'Andy and his team did a great job. Came immediately and fixed hot water system in a day. Highly recommend.' },
  { name: 'Leanne Kearns', date: '2 years ago', rating: 5, text: 'AVS plumbing went above an beyond when we had our hot water system blow up. They have since helped us with our renovations and will be our first call for all plumbing and gas needs. Andy and his team are efficient, reliable and affordable. We will strongly recommend them to our friends and family for their future plumbing needs.' },
  { name: 'Elizabeth Molloy', date: 'a year ago', rating: 5, text: 'I have used Andy many times over the years. He is always very responsive, reliable and cost effective. Andy is continually professional and communicates in layman’s terms. It’s always an easy and non stressful experience. I have no hesitation to recommend Andy!' },
  { name: 'Connie Shanks', date: '11 months ago', rating: 5, text: 'AVS plumbing are fast, provide excellent work, friendly and i think, are the best plumbing service in Cairns. I would highly recommend their work and their company.' },
  { name: 'david L', date: '3 years ago', rating: 5, text: 'I contacted Andy from AVS and the service and quality of work awesome start to finish. We had a burst pipe that he fixed and also and full new plumb of a kitchen and laundry. The quality of work, service and professional was spot on. Will definitely be using AVS for all future plumbing needs. Thanks AVS!!' },
  { name: 'Jason Briede', date: 'a year ago', rating: 5, text: 'Andy and team are fast, reliable and professional. They have gone above and beyond to fix issues at our house. It’s great to know we have a trusted plumber when we need one. Thanks team for your hard work!' },
  { name: 'Elizabeth Ward', date: 'a year ago', rating: 5, text: 'I had a great experience with Andy. He was very professional and punctual. Made sure he left the space how he found it. Will definitely be recommending him to anyone I know looking for a plumber.' },
];
