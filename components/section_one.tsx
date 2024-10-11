import Column from './column';
import Section from './section';
import SectionCard from './sectionCard';

const Section_one = () => {
  return (
    <Section>
      <Column>
        <SectionCard
          cardName="gol susan"
          side="right"
        />
        <SectionCard
          cardName="gol abi"
          side="left"
        />
      </Column>
      <Column>2</Column>
    </Section>
  );
};

export default Section_one;
