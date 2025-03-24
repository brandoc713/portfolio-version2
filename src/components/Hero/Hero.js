import React from 'react';

//Styled Components wanted to use across the entire website & files
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents'; 
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

import { useRouter } from 'next/router'; // Import the useRouter hook

const Hero = () => {
  const router = useRouter(); // Initialize the router
  return (
  
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hello, <br/>
          my name is Brandon Carido. I&apos;m an undergraduate student studying Computer Science and Electrical Engineering.
        </SectionTitle>
        <SectionText>
          I am pursuing the five year Dual-Degree Engineering Program at Vassar College and Dartmouth College. I am passionate about technology, and I am always looking to learn new things.
        </SectionText>
        <Button onClick={() => router.push('/personal')}>Resume</Button>
      </LeftSection>
    </Section>
  );
};

export default Hero;