import type { BlogPost, ClinicInformation, ServiceDetail, TeamProfile } from './clinic-data';
export type DentistProfile = TeamProfile;
const phone = '+1 310-408-4940';
const businessId = 'active-roofing-inc';
const photo = '/images/roofing-projects/active-roofing-project-03.jpg';
export const CLINIC_INFO: ClinicInformation = {
  name: 'Active Roofing Inc.', legalName: 'Active Roofing Inc.',
  tagline: 'Roof repairs and roofing services across Wilmington and Los Angeles.',
  primaryLocation: { street: '1614 N Marine Ave', suite: '', city: 'Wilmington', state: 'CA', postalCode: '90744', country: 'US', directions: '1614 N Marine Ave, Wilmington, CA 90744, United States', landmarks: 'Serving Wilmington, Los Angeles and nearby communities.' },
  contact: { phone, emergencyPhone: phone, whatsapp: phone },
  identityHighlights: ['Roof repairs and leak diagnosis', 'Roof replacement and installation', 'Responsive service and careful clean-up'],
  schedule: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map(day => ({ day, hours: '7 AM–9 PM' })),
  verifiedStats: [{ value: 8, suffix: '', label: 'Google reviews', description: 'Google reviews for Active Roofing Inc.' }],
  accreditations: [],
};
export const DENTISTS: TeamProfile[] = [{
  id: businessId, slug: businessId, name: 'Ivan', title: 'Roofing contractor',
  qualifications: 'Roofing contractor', specialization: 'Roof repairs, installation and replacement', experienceYears: 0,
  bio: 'Ivan and the Active Roofing team help homeowners with roof repairs and installations. Customers describe professional, punctual service, careful follow-up, straightforward advice, tidy work and dependable results.',
  philosophy: 'Explain the work clearly, arrive when arranged, and leave the property tidy.',
  education: [], memberships: [],
  specialties: ['Roof leak repairs', 'Roof replacement', 'Roof installation', 'Roof inspections', 'Storm damage repairs', 'Roof maintenance'],
  image: photo, warmImage: '/images/roofing-projects/active-roofing-project-14.jpg',
}];
const serviceEntries = [
  { slug: 'roof-repair', name: 'Roof repair', description: 'Get help with damaged roofing, loose or missing materials and other roof problems. Active Roofing can assess the issue, explain the repair and discuss timing.', focus: ['Roofing materials are damaged or missing', 'You have noticed a roofing problem', 'You need a repair plan for your property'] },
  { slug: 'roof-leak-repair', name: 'Roof leak repair', description: 'Arrange an assessment when water is getting in through the roof. Describe where and when the leak appears so the team can investigate and discuss a repair.', focus: ['Water is coming in through the roof', 'You have noticed a ceiling stain after rain', 'A previous leak needs follow-up'] },
  { slug: 'roof-replacement', name: 'Roof replacement', description: 'Discuss a roof replacement for your home, ADU or garage. Active Roofing can review the project, outline the work and provide next steps for a quote.', focus: ['Your roof needs extensive repairs', 'You are planning a new roof for an addition or garage', 'You want to discuss roof replacement options'] },
  { slug: 'roof-installation', name: 'Roof installation', description: 'Talk to Active Roofing about roofing installation for a new build or property addition, including an ADU or garage project.', focus: ['You need roofing for a new structure', 'You are adding an ADU or garage', 'You want to discuss a roofing installation'] },
  { slug: 'roof-inspections', name: 'Roof inspections', description: 'Arrange a roof assessment to understand its condition and identify repair needs. The team can explain what they find and discuss suitable next steps.', focus: ['You want to check your roof condition', 'You have noticed signs of wear or damage', 'You need to understand a roof repair concern'] },
  { slug: 'storm-damage-roof-repair', name: 'Storm damage roof repair', description: 'If wind or rain has damaged your roof, contact Active Roofing to explain what happened and discuss an inspection and repair.', focus: ['A storm has damaged roofing materials', 'You noticed a roof leak after heavy rain', 'You need to discuss storm-related roof repairs'] },
  { slug: 'roof-maintenance', name: 'Roof maintenance', description: 'Discuss roofing maintenance and repairs that can help address wear before it develops into a larger problem.', focus: ['You want to address visible roof wear', 'You need advice about roof upkeep', 'You want to arrange roofing maintenance'] },
];
function makeService(entry: typeof serviceEntries[number]): ServiceDetail {
  const overview = 'Active Roofing Inc. provides roof repairs and roofing services in Wilmington and Los Angeles. Call to describe the project, discuss options and request a quote.';
  const steps = [
    ['Tell us about the roof', 'First contact', 'Describe the roof issue or project and where the property is located.', 'Share what you have noticed, when it began and any access details.'],
    ['Assess the work', 'By arrangement', 'The roofing team reviews the issue and explains the work that may be needed.', 'The recommended scope depends on the roof condition and the property.'],
    ['Review the quote', 'Before work begins', 'Discuss the proposed work, price and schedule before proceeding.', 'Ask any questions about the scope and next steps.'],
    ['Complete the roofing work', 'As arranged', 'The agreed roofing work is completed at your property.', 'The team can explain relevant follow-up and care after the job.'],
  ];
  return {
    ...entry, shortDescription: entry.description, navLabel: entry.name,
    tagline: entry.name + ' in Wilmington and Los Angeles.', clinicalExplanation: overview,
    whoNeeds: entry.focus, benefits: ['Clear communication and follow-up', 'Straightforward advice about the work', 'Professional, tidy workmanship'],
    indications: entry.focus.map(condition => ({ condition, explanation: 'Call Active Roofing Inc. to describe the roof and discuss the next step.' })),
    procedureSteps: steps.map(([title, duration, description, clinicalDetails], index) => ({ stepNumber: index + 1, title, duration, description, clinicalDetails })),
    recoveryTimeline: [
      { period: 'Before the visit', expectedSensations: 'Share the roof concern and arrange a suitable time.', careProtocol: 'If water is entering the property, protect belongings where safe and describe the leak when you call.' },
      { period: 'During the work', expectedSensations: 'The team assesses the roof and completes the agreed work.', careProtocol: 'Discuss access, work scope and any property-specific arrangements with the team.' },
      { period: 'After the work', expectedSensations: 'Review the completed roofing work and any follow-up notes.', careProtocol: 'Contact Active Roofing if you have questions about the completed job.' },
    ],
    costTransparency: { baseRange: 'Call to discuss the project and request a quote.', factors: ['Roof condition and type of work', 'Property access and materials required', 'The agreed work scope'], whatIsIncluded: ['Discussion of the project and options', 'Agreed scope of work', 'Quote and timing information'], note: 'Pricing depends on the roof and agreed scope. Contact Active Roofing for a quote.' },
    beforeAfterCase: { category: entry.name, clinicalContext: 'Project photos shared by Active Roofing Inc. Contact the team to discuss your roof.', beforeLabel: 'Roof project photo', afterLabel: 'Roof project photo', beforeImage: '/images/roofing-projects/active-roofing-project-11.jpg', afterImage: '/images/roofing-projects/active-roofing-project-17.jpg', timeframe: 'Timing depends on the roof and agreed work.' },
    assignedDentistId: businessId,
    faqs: [
      { question: 'How do I arrange ' + entry.name.toLowerCase() + '?', answer: 'Call ' + phone + ' to describe your roof and discuss availability.' },
      { question: 'What areas do you serve?', answer: 'Active Roofing serves Wilmington, Los Angeles and nearby areas. Call to confirm availability for your property.' },
      { question: 'How do I request a quote?', answer: 'Call ' + phone + ' to describe the project and request a quote.' },
      { question: 'What are your hours?', answer: 'Active Roofing Inc. is listed as open daily from 7 AM to 9 PM. Call to discuss your project and availability.' },
    ],
  };
}
export const SERVICES: ServiceDetail[] = serviceEntries.map(makeService);
export interface EmergencyCondition { id: string; title: string; urgency: 'Immediate (0–2 hours)' | 'Same-Day (2–6 hours)' | 'Urgent (Within 24 hours)'; symptoms: string[]; immediateAction: string[]; clinicTreatment: string; }
export const EMERGENCY_CONDITIONS: EmergencyCondition[] = [];
export const BLOG_POSTS: BlogPost[] = [
 { slug: 'what-to-do-about-a-roof-leak', title: 'What to do when you notice a roof leak', category: 'Roof leak repair', readTime: '3 min read', publishDate: '2026-11-03', lastUpdated: '2026-11-03', authorId: businessId, excerpt: 'What to share when arranging an assessment for a roof leak.', leadImage: photo, relatedServiceSlug: 'roof-leak-repair', content: { intro: 'If you notice water coming in, note where it appears and when it happens. Contact a roofing contractor to discuss an assessment and repair.', sections: [{ heading: 'Note what you can see', body: 'Describe any ceiling stain, dripping water or visible roof damage, and whether it follows rain.' }, { heading: 'Protect the area where safe', body: 'Move belongings away from the leak if safe. Avoid climbing onto a wet or damaged roof.' }] } },
 { slug: 'roof-repair-or-replacement', title: 'Roof repair or replacement: what to discuss', category: 'Roof replacement', readTime: '3 min read', publishDate: '2026-11-03', lastUpdated: '2026-11-03', authorId: businessId, excerpt: 'Information to share when discussing a repair or roof replacement.', leadImage: '/images/roofing-projects/active-roofing-project-02.jpg', relatedServiceSlug: 'roof-replacement', content: { intro: 'The right scope depends on the roof condition and the property. An assessment can help clarify whether a repair or a larger project should be discussed.', sections: [{ heading: 'Describe the roof and concern', body: 'Share the property type, roof issue and any previous repairs.' }, { heading: 'Ask about the scope', body: 'Review the proposed work, materials, quote and schedule before deciding how to proceed.' }] } },
 { slug: 'roofing-for-an-adu-or-garage', title: 'Planning roofing for an ADU or garage', category: 'Roof installation', readTime: '3 min read', publishDate: '2026-11-03', lastUpdated: '2026-11-03', authorId: businessId, excerpt: 'Project details to prepare when arranging roofing for an ADU or garage.', leadImage: photo, relatedServiceSlug: 'roof-installation', content: { intro: 'When planning roofing for an ADU or garage, share the project location, structure and timing so the work can be discussed.', sections: [{ heading: 'Share project details', body: 'Describe the structure, its current stage and the roofing work you need.' }, { heading: 'Review the quote and schedule', body: 'Discuss the proposed scope, price and timing before work begins.' }] } },
];
export const CUSTOMER_REVIEWS: { name: string; date: string; text: string; rating: number }[] = [
 { name: 'Susie LeMay', date: '4 months ago', rating: 5, text: 'Ivan at Active Roofing was amazing and his work was impeccable. He was professional, on time and had great follow up. I would highly recommend him.' },
 { name: 'Jessie Carbajal', date: 'a year ago', rating: 5, text: 'I recently hired Active Roofing Inc. for the complete roofing installation on both my ADU and a 1-car garage addition, and I am beyond impressed with their work.' },
 { name: 'Wan ping Yu', date: '7 months ago', rating: 5, text: 'I have worked with Active Roofing several times and have referred Ivan to neighbors and friends. He is straightforward, punctual, cleans up after the work and consistently does a great job.' },
 { name: 'Max Mougan', date: '11 months ago', rating: 5, text: 'I have used Active Roofing to work on the roofs of five different properties in the Los Angeles area for several years. I would not think of using anybody else.' },
 { name: 'Michael Magaw', date: '8 months ago', rating: 5, text: 'Ivan and his father are honest and reliable. He is our go-to roofer.' },
 { name: 'Yesenia Carbajal', date: '6 years ago', rating: 5, text: 'Trusted roofer, works weekends, quick response, over 10 years of experience. Roof repairs and roof replacement. Highly recommend!' },
];

