import styled from 'styled-components';

export const LeftSection = styled.div`
  width: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;

// My components
export const CenterSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: center; // Center horizontally
  align-items: center; // Center vertically
  text-align: center; // Center text

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    margin: 0 auto;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    margin: 0 auto;
  }
`;

export const Box = styled.div`
  width: ${(props) => props.width || '100%'}; // Customizable width
  height: ${(props) => props.height || 'auto'}; // Customizable height
  padding: ${(props) => props.padding || '0'}; // Customizable padding
  background-image: url(${(props) => props.bgImage}); // Background image
  background-size: cover; // Ensure the image covers the box
  background-position: center; // Center the image
  border-radius: ${(props) => props.borderRadius || '0'}; // Rounded corners
`;

export const Img = styled.img`
  width:100%;
  height:100%;
  object-fit: cover;
  overflow: hidden;
`
export const RightSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end; // Align content to the right

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    margin: 0 auto;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    margin: 0 auto;
  }
`;

// Job Position Container
export const JobPositionContainer = styled.div`
  border-radius: 10px;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  text-align: center;
  width: 400px;
  padding: 2rem;
  background: #2a2a2a; // Assuming a dark theme based on your styles
  margin: 1rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
`;

// Job Title
export const JobTitle = styled.h3`
  font-weight: 500;
  letter-spacing: 2px;
  color: #9cc9e3;
  padding: .5rem 0;
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

// Job Description
export const JobDescription = styled.p`
  width: 100%;
  padding: 0 20px;
  color: #e4e6e7;
  font-size: 1.6rem;
  line-height: 24px;
  text-align: justify;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.3rem;
  }
`;