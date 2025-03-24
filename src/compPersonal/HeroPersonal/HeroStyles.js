import styled from 'styled-components';

export const LeftSection = styled.div`
  width: 100%; // Already set to 100%
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%; // Ensure it stays full width on smaller screens
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%; // Ensure it stays full width on medium screens
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
  width: 100%; // Full width
  padding: 2rem;
  background: #2a2a2a; // Assuming a dark theme based on your styles
  margin: 1rem 0; // Adjusted margin to remove horizontal spacing
  display: flex; // Use flexbox to align content and logo
  align-items: center; // Vertically center the content and logo
  justify-content: space-between; // Space out the content and logo

  @media ${(props) => props.theme.breakpoints.sm} {
    flex-direction: column; // Stack content and logo vertically on small screens
    align-items: flex-start; // Align items to the left
  }
`;

export const JobContent = styled.div`
  width: 80%; // Adjust the width as needed
  text-align: left; // Align text to the left

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%; // Full width on small screens
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

export const CompanyTitle = styled.h2`
  font-weight: 600;
  letter-spacing: 1.5px;
  color: #9cc9e3; // Using the gold color from your theme to make it pop
  font-size: 3.0rem;
  margin-bottom: 0.5rem;
  text-transform: uppercase; // Makes it stand out more
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3); // Adds a subtle shadow for emphasis
`;

// Dates (in white to agree with the theme)
export const Dates = styled.p`
  color: #ffffff; // White color
  font-size: 1.4rem;
  font-style: italic;
  margin-bottom: 1.5rem;
  opacity: 0.9; // Slightly transparent to blend with the theme
`;

export const LogoContainer = styled.div`
  width: 100px; // Adjust the width as needed
  height: 100px; // Adjust the height as needed
  border-radius: 50%; // Make it a circle
  overflow: hidden; // Ensure the logo stays within the circle
  display: flex;
  align-items: center; // Vertically center the logo
  justify-content: center; // Horizontally center the logo
  background: #ffffff; // Optional: Add a background color for the circle
  border: 2px solid #9cc9e3; // Optional: Add a border for the circle

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80px; // Smaller circle on small screens
    height: 80px;
    margin-top: 1rem; // Add spacing between content and logo on small screens
  }
`;