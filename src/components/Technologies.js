import React from 'react';
import styled from 'styled-components';
import SVG from 'react-inlinesvg'
import blah from '../assets/gql.svg'
import "../App.css"


const tech = [
  {id: 1, name: "React", icon: "icon-reactjs"},
  {id: 2, name: "Node", icon: "icon-nodejs"},
  {id: 3, name: "Javascript", icon: "icon-javascript"},
  {id: 4, name: "GraphQl", icon: blah},
  {id: 5, name: "CSS", icon: "icon-css3"},
  {id: 6, name: "React Native", icon: "icon-reactjs"},
  {id: 7, name: "NPM/Yarn", icon: "icon-npm"},
  {id: 8, name: "MongoDB", icon: "icon-mongodb"},
  {id: 9, name: "Postgresql", icon: "icon-postgres-alt"},
  {id: 10, name: "Terminal dweller", icon: "icon-shell"},
]

const Technologies = () => {
  return (
    <div>
      <HR />
      <Title>Technologies</Title>
      <Container>
        <Row>
          {tech.map(t => (
            <TechContainer key={t.id}>
              <Tech>{t.name}</Tech>
              <IconContainer><Icon className={`icn ${t.icon}`}></Icon></IconContainer>
              <IconImage src={t.icon} />
            </TechContainer>
          ))}
        </Row>
      </Container>
    </div>
  );
};

const HR = styled.hr`
  display: block;
  background: transparent;
  width: 75%;
  border: none; 
  height: 2px; 
  background-image: -webkit-linear-gradient(left, #f0f0f0, #336699, #f0f0f0);
  background-image: -moz-linear-gradient(left, #f0f0f0, #336699, #f0f0f0);
  background-image: -ms-linear-gradient(left, #f0f0f0, #336699, #f0f0f0);
  background-image: -o-linear-gradient(left, #f0f0f0, #336699, #f0f0f0); 
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`

const Container = styled(Column)`
  width: 75%;
  margin: 0px auto 10px;
  border: 1px solid #eee;
  border-radius: 3;
  padding: 20px;
  justify-content: space-evenly;
`;

const Title = styled.div`
  @media screen {
    margin-top: 50px;
  }
  @media print {
    margin-top: 25px;
  }
  font-size: 32px;
  text-align: center;
  background-color: #fff;
  font-family: "Montserrat", sans-serif;
`;

const TechContainer = styled(Column)`
  width: calc(75% / 4);
  height: 111px;
`

const Tech = styled.div`
  justify-self: flex-start;
`;

const IconContainer = styled.div`
  transition: color 0.5s ease;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

    &:hover {
      color: #336699;
    }

  
  > img {
    &:hover {
      color: #336699;
    }
  }
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 55px;
  padding: 5px; 
  text-align: center;
`;

const Icon = styled.i`
  text-align: center;
`

const IconImage = styled(SVG)`
  opacity: 70%;
  width: 55px;
  height: 55px;
  padding: 5px;
  
  &:hover {
    transition: color 0.5s ease;
    opacity: 100%;
    & path {
      stroke: #336699;
      fill: #336699;
    }
    & rect {
      stroke: #336699;
      fill: #336699;
    }
  }
`

export default Technologies;
