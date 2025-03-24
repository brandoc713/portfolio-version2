import React from 'react';
import Image from 'next/image'
//Styled Components wanted to use across the entire website & files
import { Section, SectionTitle, SectionDivider } from '../../styles/GlobalComponents'; 
// import Button from '../../styles/GlobalComponents/Button';
import { LeftSection, CenterSection, JobPositionContainer, JobContent, JobTitle, JobDescription, CompanyTitle, Dates, LogoContainer} from './HeroStyles';

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
        <SectionDivider />
        <br />
        <JobPositionContainer>
          <JobContent>
            <CompanyTitle>Genesys Cloud Services</CompanyTitle>
            <Dates>May 2023 - August 2023</Dates>
            <JobTitle>People Analytics Intern</JobTitle>
            <JobDescription>
              As a People Analytics Intern, I leveraged SQL to run complex queries, creating a centralized viewpoint for Workforce Analytics. I collaborated closely with the People Analytics team to problem-solve and develop innovative solutions for internal challenges. By analyzing data, I identified quantifiable trends that provided actionable HR insights, enabling evidence-based decision-making across the organization.
            </JobDescription>
          </JobContent>
          <LogoContainer>
            <Image
              src="/images/genesys.jpg" // Replace with your logo path
              alt="Genesys Logo"
              width={100}
              height={100}
              style={{
                objectFit: 'cover', // Ensure the logo covers the circle
                width: '100%',
                height: '100%',
              }}
            />
          </LogoContainer>
        </JobPositionContainer>

        <JobPositionContainer>
          <JobContent>
            <CompanyTitle>Curious Cardinals</CompanyTitle>
            <Dates>January 2023 - Present</Dates>
            <JobTitle>Mentor</JobTitle>
            <JobDescription>
              As a Mentor, I fostered a spirit of inquiry and exploration in aspiring individuals aged 11-17 through a tailored matching process. I designed and delivered personalized lessons via Zoom, focusing on the unique interests and fields of each mentee. By creating individualized learning plans and managing a full schedule of mentees, I ensured seamless teaching and meaningful growth for every participant.
            </JobDescription>
          </JobContent>
          <LogoContainer>
            <Image
              src="/images/cc.jpeg" // Replace with your logo path
              alt="Curious Cardinals Logo"
              width={100}
              height={100}
              style={{
                objectFit: 'cover', // Ensure the logo covers the circle
                width: '100%',
                height: '100%',
              }}
            />
          </LogoContainer>
        </JobPositionContainer>

        <JobPositionContainer>
          <JobContent>
            <CompanyTitle>Quantitative Reasoning Center</CompanyTitle>
            <Dates>September 2022 - Present</Dates>
            <JobTitle>Q-Tutor</JobTitle>
            <JobDescription>
              As a Q-Tutor at Vassar College, I instructed and encouraged peers in Mathematics, Physics, and Economics, providing support with assignments and coursework. I dedicated 8 hours weekly to working with an average of 12 students, offering guidance and fostering their academic success. My role involved not only teaching but also motivating students to overcome challenges and achieve their goals.
            </JobDescription>
          </JobContent>
          <LogoContainer>
            <Image
              src="/images/qcenter.png" // Replace with your logo path
              alt="Q-Center Logo"
              width={100}
              height={100}
              style={{
                objectFit: 'cover', // Ensure the logo covers the circle
                width: '100%',
                height: '100%',
              }}
            />
          </LogoContainer>
        </JobPositionContainer>
        <br />
        <br />
        <br />
        {/* PDF showcase */}
        <SectionTitle>
          Resume
        </SectionTitle>
        <SectionDivider />
        <div style={{ width: '100%', height: '800px' }}>
          <iframe 
            src="/images/resume25.pdf" 
            width="100%" 
            height="100%"
            style={{ border: 'none' }}
            title="Resume"
          >
            This browser does not support PDFs. Please download the PDF to view it: 
            <a href="/images/resume25.pdf">Download PDF</a>
          </iframe>
        </div>
      </LeftSection>
    </Section>
  );
};

export default Hero;