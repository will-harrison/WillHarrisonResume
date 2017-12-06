import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <Container>
      <P>Hello, my name is <Name>Will Harrison</Name>. I am a Javascript and React developer from Sandpoint, ID.
      I focus on excellence in user experience, product design, and technical quality.</P>
    </Container>
  );
};

const Container = styled.div.attrs({ className: "measure-wide" }) `
  display: flex;
  flex-direction: column;
  margin: 35px 30%;
  `;

const Name = styled.span.attrs({ className: "athelas f2" }) `
  
`;

const P = styled.div.attrs({ className: "f3" }) `
  font-size: 18px;
  justify-content: center;
  line-height: 1.5em;
  justify-content: space-evenly;  
`;

export default Header;