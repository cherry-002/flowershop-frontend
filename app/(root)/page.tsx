import Column from '@/components/column';
import Section from '@/components/section';
import SectionCard from '@/components/sectionCard';
import SectionProduct from '@/components/sectionProduct';
import flower from '@/public/images/flower.webp';
import flower2 from '@/public/images/flower.jpg';

export default function Home() {
  return (
    <main>
      <Section>
        <Column rows={2}>سلام</Column>
        <Column rows={2}>
          <div className="grid grid-cols-2 grid-rows-2">
            <SectionCard
              cardName="گل&zwnj;های تازه"
              side="left"
            />
            <SectionProduct
              src={flower}
              alt="flower"
              objPosition='60% 10%'
            />
            <SectionProduct
              src={flower2}
              alt="flower"
            />
            <SectionCard
              cardName="گل&zwnj;های تازه"
              side="right"
            />
          </div>
        </Column>
      </Section>
    </main>
  );
}
