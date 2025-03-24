import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiEclipse } from 'react-icons/di'; // Ensure this is the correct import
import { Md13Mp } from 'react-icons/md'; // Ensure this is the correct import

// Styled Components
import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles'; // Ensure these are correctly exported

const Header = () => (
  <Container>
    <Div1>
      <Link href="/" passHref>
        <div style={{ display: "flex", alignItems: "center", color: "white", marginTop: "2px" }}>
          <DiEclipse size="3rem" /> <Span>Brandon Carido</Span>
        </div>
      </Link>
    </Div1>
    <Div2>
      <li>
        <NavLink href="#projects">Projects</NavLink>
      </li>
      <li>
        <NavLink href="#tech">Skills</NavLink>
      </li>
      <li>
        <NavLink href="#about">About Me</NavLink>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/brandoc713">
        <AiFillGithub size="3rem"/>
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/brandoncarido/">
        <AiFillLinkedin size="3rem"/>
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
