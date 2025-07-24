import styled from 'styled-components';

// PageContainer Component: Provides padding for the entire page
const PageContainer = styled.main`
  // border: 1px solid red;
  max-width: ${({ maxWidth = '59rem' }) => maxWidth}; // Sets maximum width for the entire page
  /* padding: 0 2rem; Adds padding to the left and right sides */
  margin: 0 auto; /* Centers the container */
  padding: 0 0rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 0 2rem; /* Adjust side padding on medium screens */
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    padding: 0 0.8rem; /* Adjust side padding on medium screens */
  }
`;

// Container Component: Provides internal padding for its content
const Container = styled.section`
  // border: 1px solid blue;
  max-width: 100%; /* Ensures the container doesn't stretch too wide on larger screens */
  margin: 0 auto; /* Centers the container */
  padding: ${({ noPaddingTop, noPaddingBottom }) => {
    const top = noPaddingTop ? '0' : '8.125rem';
    const bottom = noPaddingBottom ? '0' : '8.125rem';
    return `${top} 0rem ${bottom}`;
  }};
  display: flex; /* Flexbox layout for internal alignment */
  flex-direction: column; /* Stack children vertically by default */


  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ noPaddingTop, noPaddingBottom }) => {
    const top = noPaddingTop ? '0' : '8.125rem';
    const bottom = noPaddingBottom ? '0' : '8.125rem';
    return `${top} 2rem ${bottom}`;
  }};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    padding: ${({ noPaddingTop, noPaddingBottom }) => {
    const top = noPaddingTop ? '0' : '85px';
    const bottom = noPaddingBottom ? '0' : '75px';
    return `${top} 0.8rem ${bottom}`;
  }};
  }
`;

export { PageContainer, Container };
