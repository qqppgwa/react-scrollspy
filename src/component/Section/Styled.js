import styled from 'styled-components';

export const Section = styled.section`
  // }) //   return { height: height }; // .attrs(({ height }) => {
  width: 100%;
  height: ${({ height }) => height};
  /* border-bottom: 5px solid brown; */
  background-color: ${({ background }) => background};
`;
