import Section from './Section';
import SectionHeader from './SectionHeader';
import ApproachStep from './ApproachStep';

const Approach = () => {
  const steps = [
    { num: '01', title: 'Listen & Understand', desc: 'Every person\'s story is unique. We start by understanding your experiences, challenges, and goals.' },
    { num: '02', title: 'Ask Good Questions', desc: 'Together, we create a faith-centered roadmap tailored to your specific needs and aspirations.' },
    { num: '03', title: 'Take Action', desc: 'With accountability and support, we execute your plan one step at a time, celebrating progress along the way.' }
  ];

  return (
    <Section id="approach" bgColor="bg-white">
      <SectionHeader title="My Approach" />
      <div className="approach-grid">
        {steps.map((step, index) => (
          <ApproachStep key={index} step={step} index={index} />
        ))}
      </div>
    </Section>
  );
};

export default Approach;