import React from 'react';
import styled from 'styled-components';

const Education = () => {
  return (
    <Container>
      <Title>Education</Title>
      <Course>
        <Learned>Full Stack Web Development</Learned> &mdash;
        <School>Devtree Academy</School>
      </Course>
      <Course>
        <Learned>Communication</Learned> &mdash;
        <School>Hardin-Simmons University</School>
      </Course>
    </Container>
  );
};

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
`;

const Title = styled.div`
margin-top: 50px;
margin-bottom: 15px;
font-size: 32px;
text-align: center;
background-color: #fff;
font-family: "Montserrat", sans-serif;
`;

const Course = styled.div`
  text-align: center;
  line-height: 2em;
`;

const Learned = styled.span`
  font-size: 24px;
  font-family: 'Montserrat', sans-serif;
`;

const School = styled.span`
  font-size: 18px;d
`;

export default Education;