import React from 'react';
import { DiFirebase, DiIonic, DiCoffeescript } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technical Skills and Experience</SectionTitle>
    <SectionText>
      During my academic and professional career, I've worked on a wide range of projects to hone my skills pertaining to both Computer Science and Electrical Engineering.
    </SectionText>
    <List>
      <ListItem>
        <DiFirebase size="5rem" />
        <ListContainer>
          <ListTitle>Computer Science</ListTitle>
          <ListParagraph>
            Experience with <br />
            Python, Java, Ocaml, SQL, MATLAB, R, C, VHDL 
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiIonic size="5rem" />
        <ListContainer>
          <ListTitle>Electrical Engineering</ListTitle>
          <ListParagraph>
            Experience with <br />
            Vivado, PSpice, AutoCAD
          </ListParagraph>
        </ListContainer>
      </ListItem>
      
      <ListItem>
        <DiCoffeescript size="5rem" />
        <ListContainer>
          <ListTitle>Additional Knowledge</ListTitle>
          <ListParagraph>
            Experience with <br />
            Microeconomics, Applied Mathematics, Statistics
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
