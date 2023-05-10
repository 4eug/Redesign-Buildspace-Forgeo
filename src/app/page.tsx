import { Container } from '@/components/container';
import HomeHero from '@/components/section/HomePage';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <section className="overflow-hidden">
        <Container className="pt-[9.4rem] lg:mx-[100px] md:mx-[95px] mx-auto">
          <HomeHero />
        </Container>
      </section>
    </>
  );
}
