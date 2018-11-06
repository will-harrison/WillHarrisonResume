import React from 'react'
import styled from 'styled-components'

const Contact = () => {
  return (
    <Container>
      <Row>
        <Method><a href="mailto:willharrison@gmail.com">willharrison@gmail.com</a></Method>
        <Method><a href="tel:208-627-3231">208-627-3231</a></Method>
        <Method><a href="http://raygun-labs.com">raygun-labs.com</a></Method>
        <Method><a href="http://github.com/will-harrison">github.com/will-harrison</a></Method>
        <Method><a href="http://linkedin.com/in/willharrison">linkedin.com/in/willharrison</a></Method>
      </Row>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  @media screen {
    margin: 100px 0 20px;
  }
  @media print {
    margin: 50px 0 10px;
  }


`

const Row = styled.div`
display: flex;
flex-direction: row;
justify-content: space-evenly;
`


const Method = styled.div`
  > a {
    text-decoration: none;
    font-size: 14px;
    font-family: "Montserrat", sans-serif;
    color: #336699;
  }
`

export default Contact