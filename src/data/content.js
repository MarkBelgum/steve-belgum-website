import { Heart, Users, Target, Book } from 'lucide-react';
import { client } from './contentful';

export async function getContent() {
  if (!client) {
    console.log('Contentful client not initialized. Missing environment variables.');
    return null;
  }
  try {
    const response = await client.getEntries();
    console.log('Contentful Data:', response);
    return response;
  } catch (error) {
    console.error('Error fetching Contentful data:', error);
    return null;
  }
}

export const aboutTitle = 'About Steve';
export const coreValuesTitle = 'Core Values';

export const aboutPage = [
  {
    title: 'Listen & Understand', desc: "I'm Steve Belgum, a seasoned business leader and U.S. Marine Corps veteran. I provide customized coaching solutions for people like you." +
      " Married to Lynda for 32 years, I've gained insights into the challenges and joys of marriage. I specialize in helping couples find fullfillment in their relationships and helping veterans reintegrate into civilian life."
  },
];

export const coreValues = [
  'Identity and Vision',
  'Action Oriented',
  'Results Driven',
];

export const approachSteps = [
  { title: 'Listen & Understand', desc: 'Every person\'s story is unique. We start by understanding your experiences, challenges, and goals.' },
  { title: 'Ask Good Questions', desc: 'Together, we create a faith-centered roadmap tailored to your specific needs and aspirations.' },
  { title: 'Take Action', desc: 'With accountability and support, we execute your plan one step at a time, celebrating progress along the way.' }
];

export const couplesServices = [
  {
    icon: Heart,
    title: 'Biblical Foundation',
    description: 'Build your marriage on Christ-centered principles that provide stability, purpose, and lasting joy through all seasons.'
  },
  {
    icon: Users,
    title: 'Communication Skills',
    description: 'Learn healthy communication patterns, active listening, and conflict resolution strategies that strengthen your bond.'
  },
  {
    icon: Target,
    title: 'Shared Vision & Goals',
    description: 'Align your dreams, set mutual goals, and create a compelling vision for your life together.'
  },
  {
    icon: Book,
    title: 'Premarital & Early Marriage',
    description: 'Navigate the critical early years with tools for financial planning, intimacy, roles, and building strong habits together.'
  },
];

export const veteranServices = [
  {
    icon: Target,
    title: 'Transition Planning',
    description: 'Strategic guidance for moving from military to civilian life, including career planning, education, and finding your new mission.'
  },
  {
    icon: Heart,
    title: 'Faith Integration',
    description: 'Discover how your Christian faith can be the anchor during transition, providing peace, direction, and renewed purpose.'
  },
  {
    icon: Users,
    title: 'Identity & Purpose',
    description: 'Navigate the shift from military identity to civilian life while maintaining the discipline, honor, and sense of purpose that defined your service.'
  },
  {
    icon: Book,
    title: 'Personal Development',
    description: 'Set meaningful goals, develop new skills, and create a roadmap for the next chapter of your life.'
  },
];

export const heroContent = {
  titleLine1: "Developing Leaders ",
  titleLine2: "by Mentoring and Coaching",
  subtitle: "Helping young couples and veterans find clarity, purpose, and confidence",
  buttonCouples: "Couples Coaching",
  buttonVeterans: "Veterans Coaching"
};

export const navigationContent = {
  logo: "sentinel",
  items: [
    { label: 'About', path: '/', id: 'about' },
    { label: 'Couples Coaching', path: '/couples-coaching' },
    { label: 'Veteran Coaching', path: '/veteran-coaching' },
    { label: 'Contact', id: 'contact' },
    { label: '✈️', path: '/travel-with-purpose' },
  ]
};

export const footerContent = {
  copyright: "© 2026 Steve Belgum. All rights reserved",
  tagline: "Serving veterans and couples with faith, honor, and purpose",
  credit: "Website created by Mark Belgum"
};

export const contactPageContent = {
  title: "Ready to Start Your Next Chapter?",
  subtitle: "Whether you're a veteran seeking purpose in civilian life or a couple building a strong marriage foundation, let's talk about how I can support your journey.",
  buttonText: "Contact Form"
};

export const travelPageContent = {
  title: "Ready to Travel with a Purpose?",
  description: "What is Travel with a Purpose?"
};

export const veteranPageContent = {
  title: "Veteran Coaching",
  subtitle: "Specialized coaching designed for veterans of all branches transitioning to civilian life",
  description: [
    "The transition from military to civilian life is one of the most challenging journeys a service member faces. The structure, camaraderie, and clear sense of mission don't just disappear when you take off the uniform. I understand the unique challenges veterans face—whether you served in the Army, Navy, Air Force, Marines, Coast Guard, or Space Force.",
    "My coaching approach helps you leverage the leadership skills, discipline, and resilience you developed in service while building a meaningful civilian life grounded in faith. We'll work together to identify your new mission, strengthen relationships, and create a purpose-driven path forward."
  ]
};

export const couplesPageContent = {
  title: "Couples Coaching",
  subtitle: "Building strong, Christ-centered marriages for young couples",
  description: [
    "The early years of marriage are both exciting and challenging. You're learning to blend two lives, two backgrounds, and two sets of expectations into one unified partnership. Without proper guidance, small issues can become major obstacles.",
    "My couples coaching provides young married couples and engaged partners with the biblical tools, practical strategies, and supportive accountability needed to build a thriving marriage. Whether you're engaged, newlyweds, or in your first few years of marriage, I'll help you establish patterns that lead to lifelong love and partnership."
  ]
};

export const approachTitle = "My Approach";

export const bookLinkTitle = "Check out my upcoming book";
export const bookLinkText = "Amazon";

export const bookUrl = "https://www.amazon.com/Basics-of-Biblical-Greek-Vocabulary/dp/B000HZ72Q8/ref=tmm_aud_swatch_0";
export const contactUrl = "https://docs.google.com/forms/d/1VwmxQI2TTV2qKhpFGYhYS0q1bHRuk2rMRtKt9w-xtGQ/edit";
