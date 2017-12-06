import React from 'react';
import styled from 'styled-components';
import "../App.css"

const Technologies = () => {
  return (
    <div>
      <HR />
      <Title>Technologies</Title>
      <Container>
        <Box>
          <Centered><Tech>React JS</Tech><Icon><i className="icn icon-reactjs"></i></Icon></Centered>
          <Centered><Tech>Node</Tech><Icon><i className="icn icon-nodejs"></i></Icon></Centered>
          <Centered><Tech>Javascript</Tech><Icon><i className="icn icon-javascript"></i></Icon></Centered>
          <Centered><Tech>HTML</Tech><Icon><i className="icn icon-html5"></i></Icon></Centered>
          <Centered><Tech>CSS</Tech><Icon><i className="icn icon-css3"></i></Icon></Centered>
        </Box>
        <Box></Box>
        <Box>
          <Centered><Tech>NPM/Yarn</Tech><Icon><i className="icon-npm"></i></Icon></Centered>
          <Centered><Tech>MongoDB</Tech><Icon><i className="icon-mongodb"></i></Icon></Centered>
          <Centered><Tech>MS SQL Server</Tech><Icon><i className="icon-mssql"></i></Icon></Centered>
          <Centered><Tech>Postgresql</Tech><Icon><i className="icon-postgres-alt"></i></Icon></Centered>
          <Centered><Tech>Terminal dweller</Tech><Icon><i className="icon-shell"></i></Icon></Centered>
        </Box>
      </Container>
    </div>
  );
};

const HR = styled.hr`
width: 75%;
border: 0; 
height: 2px; 
background-image: -webkit-linear-gradient(left, #f0f0f0, #336699, #f0f0f0);
background-image: -moz-linear-gradient(left, #f0f0f0, #336699, #f0f0f0);
background-image: -ms-linear-gradient(left, #f0f0f0, #336699, #f0f0f0);
background-image: -o-linear-gradient(left, #f0f0f0, #336699, #f0f0f0); 
`;

const Container = styled.div`
  width: 50%;
  margin: 0px auto 10px;
  border: 1px solid #eee;
  border-radius: 3;
  padding: 20px;
`;

const Title = styled.div`
  margin-top: 50px;
  font-size: 32px;
  text-align: center;
  background-color: #fff;
  font-family: "Montserrat", sans-serif;
`;

const Tech = styled.div`
  text-align: center;
`;

const Box = styled.div` 
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const Centered = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center
  width: 150, 
  height: 150, 
  fontSize: "72px",
  color: #888;
  transition: color 0.5s ease;

    &:hover {
      color: #336699;
    }

  > i {
    font-size: 72px;
  }
  `;

const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 72px;
  padding: 5px; 
`;

export default Technologies;