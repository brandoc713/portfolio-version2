import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';



const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
      <SectionTitle main>Projects</SectionTitle>
      <GridContainer>
        {projects.map(({ id, image, title, description, tags, source}) => (
          <BlogCard ket={id}>
            <Img src={image} />
            <TitleContent>
              <HeaderThree title>{title}</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo>{description}</CardInfo>
            <br />
            <div>
              <TitleContent><strong style={{fontweight: 'bold', color: '#87CEEB'}}>Framework</strong></TitleContent>
              <TagList>
                {tags.map((tag, index) =>(
                  <Tag key={index}>{tag}</Tag>
                ))}
              </TagList>
            </div>
          </BlogCard>
        ))}
      </GridContainer>
  </Section>
);

export default Projects;