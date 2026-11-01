export interface TeamProfile { id: string; slug: string; name: string; title: string; qualifications: string; specialization: string; experienceYears: number; bio: string; philosophy: string; education: string[]; memberships: string[]; specialties: string[]; image: string; warmImage: string; }
export type DentistProfile = TeamProfile;
export interface ServiceDetail { slug: string; name: string; navLabel: string; tagline: string; shortDescription: string; clinicalExplanation: string; whoNeeds: string[]; benefits: string[]; indications: { condition: string; explanation: string }[]; procedureSteps: { stepNumber: number; title: string; duration: string; description: string; clinicalDetails: string }[]; recoveryTimeline: { period: string; expectedSensations: string; careProtocol: string }[]; costTransparency: { baseRange: string; factors: string[]; whatIsIncluded: string[]; note: string }; beforeAfterCase: { category: string; clinicalContext: string; beforeLabel: string; afterLabel: string; beforeImage: string; afterImage: string; timeframe: string }; assignedDentistId: string; faqs: { question: string; answer: string; relatedSlug?: string }[]; }
export interface ClinicInformation { name: string; legalName: string; tagline: string; primaryLocation: { street: string; suite: string; city: string; state: string; postalCode: string; country: string; directions: string; landmarks: string; coordinates?: { lat: number; lng: number } }; contact: { phone: string; emergencyPhone: string; email?: string; whatsapp: string; website?: string }; identityHighlights: string[]; schedule: { day: string; hours: string; isOpenToday?: boolean; isEmergencyOnly?: boolean }[]; verifiedStats: { value: number; suffix: string; label: string; description: string }[]; accreditations: string[]; }
const phone = '+61 417 890 910';
const businessId = 'jnf-plumbing-cairns';
const plumbingPhoto = '/images/plumbing-technician.jpg';
export const CLINIC_INFO: ClinicInformation = {
  name: 'JNF Plumbing Cairns', legalName: 'JNF Plumbing Cairns', tagline: 'Reliable plumbing repairs and maintenance across Cairns.',
  primaryLocation: { street: '17 Gardiner Cl', suite: '', city: 'Brinsmead', state: 'QLD', postalCode: '4870', country: 'AU', directions: '17 Gardiner Cl, Brinsmead QLD 4870, Australia', landmarks: 'Serving Cairns, Brinsmead and surrounding areas.' },
  contact: { phone, emergencyPhone: phone, whatsapp: phone },
  identityHighlights: ['Emergency plumbing and burst pipe repairs', 'Hot water systems and plumbing repairs', 'Blocked drains, toilets and leak repairs'],
  schedule: [{ day: 'Monday–Sunday', hours: 'Open 24 hours' }],
  verifiedStats: [{ value: 85, suffix: '', label: 'Google reviews', description: 'Customer reviews for JNF Plumbing Cairns.' }],
  accreditations: [],
};
export const DENTISTS: TeamProfile[] = [{
  id: businessId, slug: businessId, name: 'Jake', title: 'Plumber at JNF Plumbing Cairns',
  qualifications: 'Plumbing services', specialization: 'Residential plumbing repairs and maintenance', experienceYears: 0,
  bio: 'Jake and the JNF Plumbing Cairns team help local households with plumbing repairs, burst and leaking pipes, hot water systems, blocked toilets, drainage and plumbing inspections. Customers mention prompt service, clear communication and honest advice.',
  philosophy: 'Explain the options clearly, agree on the work and leave the area tidy.',
  education: [], memberships: [], specialties: ['Emergency plumbing', 'Burst pipe repairs', 'Leak repairs', 'Hot water systems', 'Blocked drains and toilets', 'Bathroom plumbing', 'Stormwater drainage', 'Plumbing inspections'],
  image: plumbingPhoto, warmImage: '/images/plumbing-repair.jpg',
}];
const serviceEntries = [
  { slug: 'emergency-plumbing', name: 'Emergency plumbing', description: 'For urgent plumbing problems such as burst pipes, sudden leaks or a failed hot water system, call JNF Plumbing Cairns to discuss the issue and availability.', focus: ['A burst pipe or active water leak needs attention', 'A plumbing issue has left your home without water', 'You need urgent help with a plumbing problem'] },
  { slug: 'leak-detection-and-repairs', name: 'Leak detection and repairs', description: 'Get help tracking down and repairing leaks in pipes, walls, bathrooms and water lines. JNF can discuss the signs you have noticed and the next steps.', focus: ['You have found a leaking or burst pipe', 'There is a leak between the water meter and your home', 'You need help investigating a suspected water leak'] },
  { slug: 'hot-water-systems', name: 'Hot water systems', description: 'JNF Plumbing Cairns can help with hot water system faults, repairs and replacement options. Call to explain what has stopped working and arrange a suitable visit.', focus: ['Your hot water system has stopped working', 'You need a hot water unit repaired or replaced', 'You want advice about a hot water system issue'] },
  { slug: 'blocked-drains-and-toilets', name: 'Blocked drains and toilets', description: 'Arrange help with a blocked toilet or drainage problem. The team can assess the issue, explain the options and complete the agreed repair.', focus: ['A toilet or drain is blocked', 'Water is draining slowly or backing up', 'You need help restoring normal drainage'] },
  { slug: 'bathroom-and-kitchen-plumbing', name: 'Bathroom and kitchen plumbing', description: 'From cistern replacements and leaking hoses to sink and insinkerator installation, discuss your bathroom or kitchen plumbing job with JNF.', focus: ['You need a toilet cistern replaced or repaired', 'A sink, tap or vanity hose needs attention', 'You are planning a kitchen or bathroom plumbing job'] },
  { slug: 'stormwater-and-pump-services', name: 'Stormwater and pump services', description: 'Talk to JNF about stormwater drainage, water pumps and plumbing issues affecting your property. Work is discussed and quoted to suit the job.', focus: ['You need a stormwater drain or water pump installed', 'A pump or drainage issue is affecting your property', 'You want to discuss a drainage improvement'] },
  { slug: 'roof-plumbing-and-leak-inspections', name: 'Roof plumbing and leak inspections', description: 'Arrange a plumbing inspection when a roof leak or plumbing concern needs investigation. JNF can assess the issue and provide a clear report of findings where required.', focus: ['A roof leak needs a plumbing investigation', 'A building or pest inspection recommends plumbing follow-up', 'You need a written plumbing assessment for a property'] },
  { slug: 'pre-purchase-plumbing-inspections', name: 'Pre-purchase plumbing inspections', description: 'Get a plumber’s assessment when you are considering a property purchase or need further investigation after a building and pest inspection.', focus: ['You are considering buying a home', 'A pre-purchase inspection recommends a plumbing assessment', 'You want to understand a plumbing concern before you buy'] },
];
function makeService(entry: typeof serviceEntries[number]): ServiceDetail {
 const overview = 'JNF Plumbing Cairns provides residential plumbing help in Cairns and surrounding areas. Call to describe the issue, discuss options and arrange a visit.';
 const steps = [
  ['Tell us what is happening', 'First contact', 'Describe the plumbing problem and let us know if water is actively leaking.', 'Share the property location, the signs you have noticed and any access details.'],
  ['Assess the issue', 'By arrangement', 'A plumber reviews the problem and explains practical options.', 'The work needed depends on the issue and the plumbing at your property.'],
  ['Agree on the work', 'Before work begins', 'Review the proposed work, price and timing before going ahead.', 'Ask any questions you have about the scope and next steps.'],
  ['Complete the repair', 'As arranged', 'The agreed plumbing work is completed at your property.', 'The team will explain any relevant next steps after the job.'],
 ];
 return {
  ...entry, shortDescription: entry.description, navLabel: entry.name, tagline: entry.name + ' in Cairns and surrounding areas.', clinicalExplanation: overview,
  whoNeeds: entry.focus, benefits: ['Prompt responses and clear communication', 'Honest advice about practical repair options', 'The work and next steps explained clearly'],
  indications: entry.focus.map(condition => ({ condition, explanation: 'Call JNF Plumbing Cairns to describe the issue and discuss the right next step.' })),
  procedureSteps: steps.map(([title,duration,description,clinicalDetails], index) => ({ stepNumber:index+1,title,duration,description,clinicalDetails })),
  recoveryTimeline: [
   { period: 'Before the visit', expectedSensations: 'Describe the issue and arrange a suitable time.', careProtocol: 'If it is safe to do so, turn off the water supply if a pipe is actively leaking.' },
   { period: 'During the work', expectedSensations: 'The plumber assesses and completes the agreed job.', careProtocol: 'Follow any practical advice given for your plumbing system.' },
   { period: 'After the work', expectedSensations: 'Review the completed repair and any next steps.', careProtocol: 'Contact JNF Plumbing Cairns if you have questions about the job.' },
  ],
  costTransparency: { baseRange: 'Call to discuss your job and request a quote.', factors: ['Type and location of the plumbing issue', 'Parts and access required', 'The agreed work scope'], whatIsIncluded: ['Discussion of the issue and options', 'Agreed scope of work', 'Quote and timing information'], note: 'Pricing depends on the issue and agreed scope. Contact JNF for a quote.' },
  beforeAfterCase: { category: entry.name, clinicalContext: 'Illustrative plumbing service imagery. Contact JNF to discuss your job.', beforeLabel: 'Before the repair', afterLabel: 'After the repair', beforeImage: plumbingPhoto, afterImage: '/images/plumbing-repair.jpg', timeframe: 'Timing depends on the issue and agreed work.' },
  assignedDentistId: businessId,
  faqs: [
   { question: 'How do I arrange ' + entry.name.toLowerCase() + '?', answer: 'Call ' + phone + ' to describe the issue and discuss availability.' },
   { question: 'What areas do you service?', answer: 'JNF Plumbing Cairns serves Cairns and surrounding areas. Call to confirm availability for your property.' },
   { question: 'How do I request a quote?', answer: 'Call ' + phone + ' to describe the plumbing work and request a quote.' },
   { question: 'Are you open after hours?', answer: 'JNF Plumbing Cairns is listed as open 24 hours. Call to discuss your plumbing issue and availability.' },
  ],
 };
}
export const SERVICES: ServiceDetail[] = serviceEntries.map(makeService);
export interface EmergencyCondition {id:string;title:string;urgency:'Immediate (0–2 hours)'|'Same-Day (2–6 hours)'|'Urgent (Within 24 hours)';symptoms:string[];immediateAction:string[];clinicTreatment:string;}
export const EMERGENCY_CONDITIONS: EmergencyCondition[] = [];
export interface BlogPost {slug:string;title:string;category:string;readTime:string;publishDate:string;lastUpdated:string;authorId:string;excerpt:string;leadImage:string;relatedServiceSlug:string;content:{intro:string;sections:{heading:string;body:string}[];faqs?:{question:string;answer:string}[]};}
export const BLOG_POSTS: BlogPost[] = [
 { slug:'what-to-do-for-a-burst-pipe', title:'What to do when a pipe bursts', category:'Emergency plumbing', readTime:'3 min read', publishDate:'2026-10-28', lastUpdated:'2026-10-28', authorId:businessId, excerpt:'Practical first steps when a water pipe bursts at home.', leadImage:plumbingPhoto, relatedServiceSlug:'emergency-plumbing', content:{ intro:'A burst pipe can quickly send water through your home. If you can do so safely, shut off the water supply and call a plumber.', sections:[{heading:'Turn off the water if safe',body:'Use the main water shut-off valve if you know where it is and can reach it safely. Keep clear of electrical hazards and standing water.'},{heading:'Describe the problem',body:'Tell the plumber where the water is coming from, when you noticed it and whether the water supply has been turned off.'}] } },
 { slug:'hot-water-system-stopped-working', title:'When your hot water stops working', category:'Hot water systems', readTime:'3 min read', publishDate:'2026-10-28', lastUpdated:'2026-10-28', authorId:businessId, excerpt:'What information to share when arranging a hot water system repair.', leadImage:'/images/plumbing-hot-water.jpg', relatedServiceSlug:'hot-water-systems', content:{ intro:'A hot water system can fail without warning. A few details can help your plumber understand the problem and discuss the next step.', sections:[{heading:'Note what has changed',body:'Mention whether there is no hot water, a visible leak, unusual noise or another change in the system.'},{heading:'Ask about repair options',body:'A plumber can assess the system and explain the repair or replacement options for your property.'}] } },
 { slug:'blocked-toilet-and-drain-help', title:'What to do about a blocked toilet or drain', category:'Blocked drains and toilets', readTime:'3 min read', publishDate:'2026-10-28', lastUpdated:'2026-10-28', authorId:businessId, excerpt:'How to explain a blocked toilet or drain when you call a plumber.', leadImage:'/images/plumbing-pipes.jpg', relatedServiceSlug:'blocked-drains-and-toilets', content:{ intro:'If a toilet or drain is blocked, describe what you can see and whether water is backing up. Avoid repeated flushing if the bowl is close to overflowing.', sections:[{heading:'Share the signs',body:'Let the plumber know which fixtures are affected, when the problem began and whether other drains are working.'},{heading:'Arrange an assessment',body:'A plumber can investigate the blockage and explain the available repair options.'}] } },
];
export const CUSTOMER_REVIEWS: {name:string;date:string;text:string;rating:number}[] = [
 { name:'Esteena Greig', date:'6 months ago', rating:5, text:'I had a great experience with Jake. He was incredibly prompt in fitting me in and made the whole process smooth and stress-free. Professional, efficient, and easy to deal with—highly recommend!' },
 { name:'Chris Harvey', date:'2 years ago', rating:5, text:'Jake was quick to respond and arrived promptly to handle our broken pipe. His communication was top-notch, getting out to us first thing the next morning.' },
 { name:'Tahnee Hansson', date:'3 months ago', rating:5, text:'JNF came around at short notice to fix a water leak located between the water meter and the house. Nick and Max replaced the line and filled the trench. Great guys!!' },
 { name:'Eva', date:'5 months ago', rating:5, text:"Reliable, honest, efficient. Highly recommend. Thank you, team. 5 star experience." },
 { name:'Tim Banks', date:'10 months ago', rating:5, text:'Jake is the most reliable plumber I have ever met. I had a major plumbing issue and he was all over it. Now he\'s my favourite plumber, highly recommend.' },
 { name:'Tammy Perazza', date:'a year ago', rating:5, text:'The service and support provided by Jake to repair our water leak and get us back with running water ASAP was fantastic. Awesome service, will use again every time.' },
 { name:'Kate Harper', date:'a year ago', rating:5, text:'Jake proved great service after a Building & Pest inspection required further plumbing investigation. The report provided was very detailed. He responded very quickly which was very appreciated. Highly recommend.' },
 { name:'Monique Chantrill', date:'a year ago', rating:5, text:'I can’t recommend JNF Plumbing enough! You can trust them to be honest, capable and reliable. They were able to fix my hot water tank very quickly.' },
 { name:'Julie Caine', date:'5 months ago', rating:5, text:'Very prompt professional service, job done efficiently and quickly at short notice to mend leaking pipe. Would highly recommend.' },
 { name:'Robyn Prowse', date:'2 years ago', rating:5, text:'Fantastic and friendly service. Came to our caravan on a Saturday morning when we couldn’t get our drinking water pump to work. Found the problem and fixed it. Would highly recommend Jake.' },
 { name:'Meryl Slater', date:'2 years ago', rating:5, text:'Absolutely brilliant service, response time, thorough knowledge and clear advice. Highly recommend JNF Plumbing Cairns! A genuine, trustworthy and quality service.' },
 { name:'Vicki Knowles', date:'3 months ago', rating:5, text:'Wonderful service from JNF Plumbing to replace a new cistern. Staff made regular calls to let me know estimated time of arrival, the job was completed efficiently and the area left clean and tidy.' },
];
