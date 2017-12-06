import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <Container>
      <P>Hello, my name is <Name>Will Harrison</Name>. I am a React and Node developer from Sandpoint, ID.
      I focus on excellence in user experience, product design, and technical quality.</P>
    </Container>
  );
};

const Container = styled.div.attrs({ className: "measure-wide" }) `
  text-align: center;
  margin: 35px auto;
`;

const Name = styled.span.attrs({ className: "athelas f2" }) `
  
`;

const P = styled.div.attrs({ className: "f3" }) `
  font-size: 18px;
  line-height: 1.5em;
  justify-content: center;
  align-items: center;
`;

export default Header;