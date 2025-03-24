import React from 'react';
import Image from 'next/image'
//Styled Components wanted to use across the entire website & files
import { Section, SectionText, SectionTitle, SectionDivider } from '../../styles/GlobalComponents'; 
// import Button from '../../styles/GlobalComponents/Button';
import { LeftSection, CenterSection, Box, Img, RightSection, JobPositionContainer, JobTitle, JobDescription, CompanyTitle, Dates } from './HeroStyles';

import myImage from '/public/images/GenericPFP2024.jpeg';

import { useRouter } from 'next/router'; // Import the useRouter hook

const Hero = () => {
  //const router = useRouter(); // Initialize the router
  return (
  
    <Section row nopadding>
      
      <LeftSection>
        
        <SectionTitle main center>
          Work Experience & Resume
        </SectionTitle>
        <SectionDivider />
        <CenterSection>
      <div style=
        {{ 
          width: '250px', // Match the width of the image
          height: '250px', // Match the height of the image
          borderRadius: '50%', // Make it a circle
          border: '3px solid #D3D3D3', // Pastel gray border
          overflow: 'hidden', // Ensure the image stays within the circle
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          src="/images/LinkedInPFP.png"
          alt="Brandon Carido"
          width={200} // Desired width of the image
          height={200} // Desired height of the image
          style={{
            objectFit: 'cover', // Ensure the image covers the circle
            width: '100%', // Make the image fill the container
            height: '100%', // Make the image fill the container
          }}
        />
        </div>
        </CenterSection>
        
        
        <SectionTitle>
          Work Experience
        </SectionTitle>
        <JobPositionContainer>
          <JobTitle>People Analytics Intern — Genesys Cloud Services</JobTitle>
          <JobDescription>As a People Analytics Intern, I leveraged SQL to run complex queries, creating a centralized viewpoint 
            for Workforce Analytics. I collaborated closely with the People Analytics team to problem-solve and develop innovative 
            solutions for internal challenges. By analyzing data, I identified quantifiable trends that provided actionable HR insights, 
            enabling evidence-based decision-making across the organization.</JobDescription>
        </JobPositionContainer>

        <JobPositionContainer>
          <JobTitle>Mentor — Curious Cardinals</JobTitle>
          <JobDescription>As a Mentor, I fostered a spirit of inquiry and exploration in aspiring individuals aged 11-17 through a tailored matching process. I designed and delivered personalized lessons via Zoom, focusing on the unique interests and fields of each mentee. 
            By creating individualized learning plans and managing a full schedule of mentees, I ensured seamless teaching and meaningful 
            growth for every participant.</JobDescription>
        </JobPositionContainer>

        <JobPositionContainer>
          <JobTitle>Q-Tutor — Quantitative Reasoning Center, Vassar College</JobTitle>
          <JobDescription>As a Q-Tutor, I instructed and encouraged peers in Mathematics, Physics, and Economics, 
            providing support with assignments and coursework. I dedicated 8 hours weekly to working with an average of 12 students
            , offering guidance and fostering their academic success. My role involved not only teaching but also motivating students to overcome challenges and achieve their goals.</JobDescription>
        </JobPositionContainer>
        
      </LeftSection>
    </Section>
  );
};

export default Hero;