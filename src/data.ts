import { Property, Service, ProcessStep, Category, Testimonial, Feature, Faq } from './types';

export const properties: Property[] = [
  {
    id: '1',
    title: 'The Heritage Glasshouse',
    price: '₹12.5 Cr',
    location: 'Umaid Heritage, Jodhpur',
    area: '8,500 sq.ft',
    bedrooms: '5 BHK',
    facing: 'East',
    type: 'Luxury Villa',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCjZx9oOsM8YodTeoux5oSprnF43Zc5so5XCFdhh0led9G01z3ecrjOVwnZOGo2BTyEi6OK8a7qII27Gg-3z9T1-6ZucdVYq6sDV5R2SXs4W8RgJKZ8xbI5x1tdutC51ZIEj2U8kMn57MgQa98y2tPAzxR9Tj5NpL-REwKmrLSy5Y9te2T_Rdq4iGq6fLyS011YZudWcKA_tlrv0A20DLiZaBYzjxwUD-MOdg4tc1dxqfxD4aUhrnY9YBsq6FWOyndaSPOx25ULlDY',
    alt: 'Modern luxury villa bathed in soft light in Jodhpur'
  },
  {
    id: '2',
    title: 'Aravalli Foothills Estate',
    price: '₹4.2 Cr',
    location: 'Kukas, Jaipur',
    area: 'N/A',
    bedrooms: 'N/A',
    plotSize: '2 Acres',
    zoning: 'Residential',
    access: '60ft Road',
    type: 'Investment Land',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDjey_KnWR_u4Ocrtlb2evVQ0AiVVgs3jo3tVayCGdUpRzOqltjPsxVUnPjP1Rmxf2w5JlZX7ZpEasUEQQf_hZ8chhDBFoNLtYfZ0hK5la8kJcKUqaxI1hl7tUAd3H5gxibfDO4iutVMQFAE5zmgHDXF3MNbrTg-acTeS-4FS3UaoC4otYin8RBxykqKAIEW6tIxoVcEohs1RH14GhJZoXLbD2KTW9-csjsDCI8lH4hBYhfNfkKKEkZYmCoodcAN0gOjd2-kaZNYF0',
    alt: 'Aerial view of serene investment land in Aravalli foothills'
  },
  {
    id: '3',
    title: 'The Oasis Enclave',
    price: 'From ₹6.8 Cr',
    location: 'Assagao, Goa',
    area: 'N/A',
    bedrooms: '4 BHK',
    configuration: '4 BHK Villas',
    amenities: 'Clubhouse',
    status: 'Ready to Move',
    type: 'Gated Community',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB9HIScAJLK0A7va9GRFERyifrycDgtwIEVHDI34aa0V61VqGSidt6veU0WmocMCNdGuGidhWue5C-2hdawFStITLQ_zX6Xha2H7xCWpm72dHatXyH2FhFHEL84c4tSRbAulFbZWPPloAjZ3Zlmdpz4WuLs4fOTTZi3jM-jRAHX4Qd0e-mVtGvQnYcmOzIaRDLDEBYbjwcvi8_cRAL8mGqTOXNsL0AK8j8H8lt317tH9fC3yVyBNuFppy2pQ8vu5N6B9Rpd-fJbzro',
    alt: 'Lush gated community streetscape lined with palm trees'
  },
  {
    id: '4',
    title: 'Courtyard Residence',
    price: '₹15.0 Cr',
    location: 'Fateh Sagar, Udaipur',
    area: '12,000 sq.ft',
    bedrooms: '6 BHK',
    specialty: 'Lake View',
    type: 'Luxury Villa',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC6Ilai8PM7RwOwfMrSM9cuAoe3-lAnC53ycOX2_P4wB3FGRTDrnyJ9I7_yoWGLQNneCIzmdzHPv6OA3HOlvYm3cxmC-Cs2-2TJ2ewknsbimpEeFSaInq6mO__hsZ8AjFN4n0c2_CmmYE1he-38eIBWHGRCpqKxHhT7NrJIofjhSGjJIAA4G3Nar-2qvl_42Pr1WSlchDrZwsvaGYmsxLKXolpnMHbXpwe0lUHetyYTmgslHjHF1-PyCJTvKEQoQ4SYpOJL93Hvcfs',
    alt: 'Luxury courtyard villa interior to exterior view'
  },
  {
    id: '5',
    title: 'The Royal Enclave',
    price: '₹8.5 Cr',
    location: 'Ratanada, Jodhpur',
    area: '6,000 sq.ft',
    bedrooms: '4 BHK',
    facing: 'North-East',
    type: 'Luxury Villa',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCjZx9oOsM8YodTeoux5oSprnF43Zc5so5XCFdhh0led9G01z3ecrjOVwnZOGo2BTyEi6OK8a7qII27Gg-3z9T1-6ZucdVYq6sDV5R2SXs4W8RgJKZ8xbI5x1tdutC51ZIEj2U8kMn57MgQa98y2tPAzxR9Tj5NpL-REwKmrLSy5Y9te2T_Rdq4iGq6fLyS011YZudWcKA_tlrv0A20DLiZaBYzjxwUD-MOdg4tc1dxqfxD4aUhrnY9YBsq6FWOyndaSPOx25ULlDY',
    alt: 'Royal enclave luxury villa exterior'
  },
  {
    id: '6',
    title: 'Pali Road Commercial Estate',
    price: '₹18.0 Cr',
    location: 'Pali Highway, Jodhpur',
    area: '20,000 sq.ft',
    bedrooms: 'N/A',
    zoning: 'Commercial',
    access: '100ft Highway',
    type: 'Commercial Property',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDjey_KnWR_u4Ocrtlb2evVQ0AiVVgs3jo3tVayCGdUpRzOqltjPsxVUnPjP1Rmxf2w5JlZX7ZpEasUEQQf_hZ8chhDBFoNLtYfZ0hK5la8kJcKUqaxI1hl7tUAd3H5gxibfDO4iutVMQFAE5zmgHDXF3MNbrTg-acTeS-4FS3UaoC4otYin8RBxykqKAIEW6tIxoVcEohs1RH14GhJZoXLbD2KTW9-csjsDCI8lH4hBYhfNfkKKEkZYmCoodcAN0gOjd2-kaZNYF0',
    alt: 'Sprawling commercial estate on Pali road'
  }
];

export const services: Service[] = [
  { id: '1', title: 'Property Buying', description: 'Curated selection of premium villas and apartments. We handle the search so you can focus on the choice.', icon: 'UserSquare2' },
  { id: '2', title: 'Land Purchase', description: 'Secure prime plots in emerging corridors of Jodhpur. Clear titles and strategic locations guaranteed.', icon: 'Mountain' },
  { id: '3', title: 'Villa Sales', description: 'Exclusive marketing strategies for high-end properties, connecting sellers with a discerning buyer network.', icon: 'Home' },
  { id: '4', title: 'Investment Advisory', description: 'Data-driven insights into the Jodhpur real estate market to maximize your ROI with long-term stability.', icon: 'TrendingUp' },
  { id: '5', title: 'Documentation', description: 'Seamless legal and administrative support. We ensure all paperwork is flawless and compliant.', icon: 'FileText' },
  { id: '6', title: 'Site Visits', description: 'Guided tours of shortlisted properties with our local experts, providing context beyond the brochure.', icon: 'Car' }
];

export const processSteps: ProcessStep[] = [
  { id: '1', number: '01', title: 'Consultation', description: 'Understanding your vision, budget, and specific requirements in detail.' },
  { id: '2', number: '02', title: 'Property Shortlisting', description: 'Presenting a curated shortlist of properties that perfectly align with your goals.' },
  { id: '3', number: '03', title: 'Site Visit', description: 'Personalized tours of the shortlisted sites to experience the space firsthand.' },
  { id: '4', number: '04', title: 'Documentation & Purchase', description: 'Finalizing negotiations, documentation, and a smooth handover process.' }
];

export const faqs: Faq[] = [
  { question: 'What is the typical timeframe for a property transaction?', answer: 'Typically, a straightforward transaction takes between 30 to 45 days from initial agreement to final registration, depending on document readiness.' },
  { question: 'Do you assist with financing and home loans?', answer: 'Yes, we have partnerships with leading national banks and financial institutions to facilitate smooth loan approvals for our clients.' },
  { question: 'Are foreign nationals allowed to buy property in Jodhpur?', answer: 'Foreign nationals of non-Indian origin cannot acquire agricultural land/plantation property. However, specific regulations apply for residential properties based on RBI guidelines and FEMA. We provide specialized legal counsel for such queries.' }
];

export const categories: Category[] = [
  {
    id: 'c1',
    title: 'Luxury Villas',
    description: 'Exclusive heritage and modern villas crafted for premium living.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC6Ilai8PM7RwOwfMrSM9cuAoe3-lAnC53ycOX2_P4wB3FGRTDrnyJ9I7_yoWGLQNneCIzmdzHPv6OA3HOlvYm3cxmC-Cs2-2TJ2ewknsbimpEeFSaInq6mO__hsZ8AjFN4n0c2_CmmYE1he-38eIBWHGRCpqKxHhT7NrJIofjhSGjJIAA4G3Nar-2qvl_42Pr1WSlchDrZwsvaGYmsxLKXolpnMHbXpwe0lUHetyYTmgslHjHF1-PyCJTvKEQoQ4SYpOJL93Hvcfs'
  },
  {
    id: 'c2',
    title: 'Residential Plots',
    description: 'Secure open spaces to build your dream architecture.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCjZx9oOsM8YodTeoux5oSprnF43Zc5so5XCFdhh0led9G01z3ecrjOVwnZOGo2BTyEi6OK8a7qII27Gg-3z9T1-6ZucdVYq6sDV5R2SXs4W8RgJKZ8xbI5x1tdutC51ZIEj2U8kMn57MgQa98y2tPAzxR9Tj5NpL-REwKmrLSy5Y9te2T_Rdq4iGq6fLyS011YZudWcKA_tlrv0A20DLiZaBYzjxwUD-MOdg4tc1dxqfxD4aUhrnY9YBsq6FWOyndaSPOx25ULlDY'
  },
  {
    id: 'c3',
    title: 'Investment Land',
    description: 'High-growth corridors prime for long-term appreciation.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDjey_KnWR_u4Ocrtlb2evVQ0AiVVgs3jo3tVayCGdUpRzOqltjPsxVUnPjP1Rmxf2w5JlZX7ZpEasUEQQf_hZ8chhDBFoNLtYfZ0hK5la8kJcKUqaxI1hl7tUAd3H5gxibfDO4iutVMQFAE5zmgHDXF3MNbrTg-acTeS-4FS3UaoC4otYin8RBxykqKAIEW6tIxoVcEohs1RH14GhJZoXLbD2KTW9-csjsDCI8lH4hBYhfNfkKKEkZYmCoodcAN0gOjd2-kaZNYF0'
  },
  {
    id: 'c4',
    title: 'Commercial Properties',
    description: 'Strategic locations for thriving businesses and corporate spaces.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAlHMwdFzwtwMxK1hFF9Urq_LehJ8okl2BK2JSyosKF6V_xHUm8PHV7ZITCacBMGmDH00HyhjdzvGxrOE-FXpysytMG0ehSDVp8-qylrpm6DRq86KS0sqI4s1lN5PrBMy2F4Bp53pWLVgH0yCSi9-9y59q5Ahn0Gj0qdSfc8H8iJBhP2znZ1aJ4JByqla-lw2yBpXsTVWO_rjdlRWxuzrl8NzPNdEyEMZ77W7L7Xxe6ZowCt9Wx5zSRB1iXdUM325ZecKVCivM6dK4'
  }
];

export const whyChooseUs: Feature[] = [
  { id: 'f1', title: 'Verified Listings', description: '100% legal clearance and clear titles verified by our expert legal team.', icon: 'Shield' },
  { id: 'f2', title: 'Local Market Expertise', description: 'Deep roots in Jodhpur giving you access to off-market premium assets.', icon: 'Map' },
  { id: 'f3', title: 'Transparent Transactions', description: 'No hidden fees. Every step is clearly communicated and documented.', icon: 'FileText' },
  { id: 'f4', title: 'Documentation Assistance', description: 'End-to-end support for registries, mutations, and compliance paperwork.', icon: 'CheckCircle' },
  { id: 'f5', title: 'Personalized Site Visits', description: 'Chauffeur-driven guided property tours tailored to your schedule.', icon: 'Car' },
  { id: 'f6', title: 'Investment Guidance', description: 'Strategy consultation for optimizing your real estate portfolio.', icon: 'TrendingUp' }
];

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Amit Sharma',
    photo: 'https://api.dicebear.com/7.x/notionists/svg?seed=Amit',
    property: 'Luxury Villa Buyer',
    rating: 5,
    text: 'Deora Properties made finding our dream heritage home seamless. Their attention to detail and absolute transparency gave us incredible peace of mind.'
  },
  {
    id: 't2',
    name: 'Priya Desai',
    photo: 'https://api.dicebear.com/7.x/notionists/svg?seed=Priya',
    property: 'Investment Land Purchaser',
    rating: 5,
    text: 'Their understanding of the Jodhpur growth corridors is unmatched. My plot investment has already appreciated significantly within just two years.'
  },
  {
    id: 't3',
    name: 'Rajesh Singh',
    photo: 'https://api.dicebear.com/7.x/notionists/svg?seed=Rajesh',
    property: 'Commercial Investor',
    rating: 5,
    text: 'As an NRI investor, I needed a team I could trust heavily. They managed all documentation cleanly without requiring me to constantly travel.'
  },
  {
    id: 't4',
    name: 'Vikram & Anjali Rathore',
    photo: 'https://api.dicebear.com/7.x/notionists/svg?seed=Vikram',
    property: 'New Homeowners',
    rating: 5,
    text: 'From the first consultation to the final handover, the team at Deora properties treated us like family. Truly a white-glove real estate service.'
  }
];

export const homeFaqs: Faq[] = [
  { question: 'How do you verify properties?', answer: 'Every property goes through a rigorous 14-point legal title check conducted by an independent legal counsel before it is added to our portfolio.' },
  { question: 'Do you assist with legal documentation?', answer: 'Yes, our end-to-end service includes drafting agreements, coordinating with the registrar office, and completing all necessary mutation processes.' },
  { question: 'Can I schedule a site visit?', answer: 'Absolutely. We offer personalized, chauffeur-driven site visits. Simply contact us to arrange a convenient time for you.' },
  { question: 'Do you help NRI investors?', answer: 'Yes, we have specialized services for Non-Resident Indians managing all compliance, POA documentation, and virtual tours.' },
  { question: 'What types of properties do you offer?', answer: 'We specialize in luxury villas, premium residential plots, large-scale investment lands, and high-value commercial properties within the Jodhpur region.' }
];
