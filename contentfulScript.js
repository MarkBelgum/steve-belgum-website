const { createClient } = require('contentful-management');

require('dotenv').config({ path: '.env.local' });

const client = createClient({ accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN });

async function setup() {
  try {
    const space = await client.getSpace(process.env.REACT_APP_CONTENTFUL_SPACE_ID);
    const env = await space.getEnvironment('master');

    const heroSection = await env.createContentType({
      name: 'Hero Section',
      fields: [
        { id: 'titleLine1', name: 'Title Line 1', type: 'Symbol', required: true },
        { id: 'titleLine2', name: 'Title Line 2', type: 'Symbol', required: true },
        { id: 'subtitle', name: 'Subtitle', type: 'Text', required: true },
        { id: 'buttonCouples', name: 'Button Couples', type: 'Symbol' },
        { id: 'buttonVeterans', name: 'Button Veterans', type: 'Symbol' },
      ]
    });
    await heroSection.publish();

    const heroEntry = await env.createEntry('heroSection', {
      fields: {
        titleLine1: { 'en-US': 'Developing Leaders ' },
        titleLine2: { 'en-US': 'by Mentoring and Coaching' },
        subtitle: { 'en-US': 'Helping young couples and veterans find clarity, purpose, and confidence' },
        buttonCouples: { 'en-US': 'Couples Coaching' },
        buttonVeterans: { 'en-US': 'Veterans Coaching' }
      }
    });
    await heroEntry.publish();

    const aboutPage = await env.createContentType({
      name: 'About Page',
      fields: [
        { id: 'title', name: 'Page Title', type: 'Symbol', required: true },
        { id: 'sections', name: 'Sections', type: 'Array', items: { type: 'Object' }, required: true },
      ]
    });
    await aboutPage.publish();

    const aboutEntry = await env.createEntry('aboutPage', {
      fields: {
        title: { 'en-US': 'About Steve' },
        sections: {
          'en-US': [
            {
              title: 'Listen & Understand',
              description: "I'm Steve Belgum, a seasoned business leader and U.S. Marine Corps veteran. I provide customized coaching solutions for people like you. Married to Lynda for 32 years, I've gained insights into the challenges and joys of marriage. I specialize in helping couples find fullfillment in their relationships and helping veterans reintegrate into civilian life."
            }
          ]
        }
      }
    });
    await aboutEntry.publish();

    const coreValuesType = await env.createContentType({
      name: 'Core Values',
      fields: [
        { id: 'values', name: 'Values', type: 'Array', items: { type: 'Symbol' }, required: true },
      ]
    });
    await coreValuesType.publish();

    const coreValuesEntry = await env.createEntry('coreValues', {
      fields: {
        values: { 'en-US': ['Identity and Vision', 'Action Oriented', 'Results Driven'] }
      }
    });
    await coreValuesEntry.publish();

    const approachStepsType = await env.createContentType({
      name: 'Approach Steps',
      fields: [
        { id: 'title', name: 'Title', type: 'Symbol', required: true },
        { id: 'description', name: 'Description', type: 'Text', required: true },
      ]
    });
    await approachStepsType.publish();

    const approachEntries = [
      { title: 'Listen & Understand', description: "Every person's story is unique. We start by understanding your experiences, challenges, and goals." },
      { title: 'Ask Good Questions', description: "Together, we create a faith-centered roadmap tailored to your specific needs and aspirations." },
      { title: 'Take Action', description: "With accountability and support, we execute your plan one step at a time, celebrating progress along the way." }
    ];

    for (let step of approachEntries) {
      const entry = await env.createEntry('approachSteps', { fields: { title: { 'en-US': step.title }, description: { 'en-US': step.description } } });
      await entry.publish();
    }

    const serviceType = await env.createContentType({
      name: 'Service',
      fields: [
        { id: 'title', name: 'Title', type: 'Symbol', required: true },
        { id: 'description', name: 'Description', type: 'Text', required: true },
        { id: 'icon', name: 'Icon', type: 'Symbol' },
        { id: 'category', name: 'Category', type: 'Symbol', required: true },
      ]
    });
    await serviceType.publish();

    const couplesServices = [
      { icon: 'Heart', title: 'Biblical Foundation', description: 'Build your marriage on Christ-centered principles that provide stability, purpose, and lasting joy through all seasons.', category: 'Couples' },
      { icon: 'Users', title: 'Communication Skills', description: 'Learn healthy communication patterns, active listening, and conflict resolution strategies that strengthen your bond.', category: 'Couples' },
      { icon: 'Target', title: 'Shared Vision & Goals', description: 'Align your dreams, set mutual goals, and create a compelling vision for your life together.', category: 'Couples' },
      { icon: 'Book', title: 'Premarital & Early Marriage', description: 'Navigate the critical early years with tools for financial planning, intimacy, roles, and building strong habits together.', category: 'Couples' }
    ];

    const veteranServices = [
      { icon: 'Target', title: 'Transition Planning', description: 'Strategic guidance for moving from military to civilian life, including career planning, education, and finding your new mission.', category: 'Veterans' },
      { icon: 'Heart', title: 'Faith Integration', description: 'Discover how your Christian faith can be the anchor during transition, providing peace, direction, and renewed purpose.', category: 'Veterans' },
      { icon: 'Users', title: 'Identity & Purpose', description: 'Navigate the shift from military identity to civilian life while maintaining the discipline, honor, and sense of purpose that defined your service.', category: 'Veterans' },
      { icon: 'Book', title: 'Personal Development', description: 'Set meaningful goals, develop new skills, and create a roadmap for the next chapter of your life.', category: 'Veterans' }
    ];

    for (let service of [...couplesServices, ...veteranServices]) {
      const entry = await env.createEntry('service', {
        fields: {
          title: { 'en-US': service.title },
          description: { 'en-US': service.description },
          icon: { 'en-US': service.icon },
          category: { 'en-US': service.category }
        }
      });
      await entry.publish();
    }

    const pageContentType = await env.createContentType({
      name: 'Page Content',
      fields: [
        { id: 'title', name: 'Title', type: 'Symbol', required: true },
        { id: 'subtitle', name: 'Subtitle', type: 'Symbol' },
        { id: 'description', name: 'Description', type: 'Array', items: { type: 'Text' } },
        { id: 'buttonText', name: 'Button Text', type: 'Symbol' }
      ]
    });
    await pageContentType.publish();

    const pages = [
      { title: 'Contact', subtitle: "Ready to Start Your Next Chapter?", description: ["Whether you're a veteran seeking purpose in civilian life or a couple building a strong marriage foundation, let's talk about how I can support your journey."], buttonText: 'Contact Form' },
      { title: 'Travel', subtitle: 'Ready to Travel with a Purpose?', description: ['What is Travel with a Purpose?'], buttonText: '' },
      {
        title: 'Veteran Coaching', subtitle: 'Specialized coaching designed for veterans of all branches transitioning to civilian life', description: [
          "The transition from military to civilian life is one of the most challenging journeys a service member faces. The structure, camaraderie, and clear sense of mission don't just disappear when you take off the uniform. I understand the unique challenges veterans face—whether you served in the Army, Navy, Air Force, Marines, Coast Guard, or Space Force.",
          "My coaching approach helps you leverage the leadership skills, discipline, and resilience you developed in service while building a meaningful civilian life grounded in faith. We'll work together to identify your new mission, strengthen relationships, and create a purpose-driven path forward."
        ], buttonText: ''
      },
      {
        title: 'Couples Coaching', subtitle: 'Building strong, Christ-centered marriages for young couples', description: [
          "The early years of marriage are both exciting and challenging. You're learning to blend two lives, two backgrounds, and two sets of expectations into one unified partnership. Without proper guidance, small issues can become major obstacles.",
          "My couples coaching provides young married couples and engaged partners with the biblical tools, practical strategies, and supportive accountability needed to build a thriving marriage. Whether you're engaged, newlyweds, or in your first few years of marriage, I'll help you establish patterns that lead to lifelong love and partnership."
        ], buttonText: ''
      }
    ];

    for (let page of pages) {
      const entry = await env.createEntry('pageContent', {
        fields: {
          title: { 'en-US': page.title },
          subtitle: { 'en-US': page.subtitle },
          description: { 'en-US': page.description },
          buttonText: { 'en-US': page.buttonText || '' }
        }
      });
      await entry.publish();
    }

    const bookType = await env.createContentType({
      name: 'Book / Link',
      fields: [
        { id: 'title', name: 'Title', type: 'Symbol', required: true },
        { id: 'linkText', name: 'Link Text', type: 'Symbol' },
        { id: 'url', name: 'URL', type: 'Symbol', required: true }
      ]
    });
    await bookType.publish();

    const bookEntry = await env.createEntry('bookLink', {
      fields: {
        title: { 'en-US': 'Check out my upcoming book' },
        linkText: { 'en-US': 'Amazon' },
        url: { 'en-US': 'https://www.amazon.com/Basics-of-Biblical-Greek-Vocabulary/dp/B000HZ72Q8/ref=tmm_aud_swatch_0' }
      }
    });
    await bookEntry.publish();

    console.log('All content types and entries created and published successfully!');

  } catch (error) {
    console.error('Error setting up Contentful:', error);
  }
}

setup();
