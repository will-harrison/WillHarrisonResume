import React from 'react';
import styled from 'styled-components'
import { UL, LI, Row, Column } from '../styles/CommonStyles'

const ExperienceRole = ({ role }) => {
  return (
    <Row>
      <Col left flex1 horizontalCenter>
        <JobTitle>{role.title}</JobTitle>
        <JobList>
          {role.companies.map((i, index) => (
            <JobListItem key={index}>
              <Timeline>{i.timeline}</Timeline>
              <Job>{i.company}</Job>
            </JobListItem>
          ))}
        </JobList>
      </Col>
      <Col right flex3>
        <Experience>
          <ExperienceHeader>{role.experience.header}</ExperienceHeader>
          <ExperienceExamples>
            {role.experience.examples.map(i => <Example key={i}>{i}</Example>)}
          </ExperienceExamples>
        </Experience>
      </Col>
    </Row>
  );
};

const JobTitle = styled.div.attrs({ className: "f3 fw5" })``

const JobList = styled(UL).attrs({ className: "f4" })``

const JobListItem = styled(LI).attrs({ className: "f4" })`
  display: flex;
  flex-direction: row;
`
const Timeline = styled.div.attrs({ className: 'f6' })`
  flex: 1;
  padding: 0 10px;
  text-align: right;
  align-self: center;
  `
const Job = styled.div`
  flex: 1;
  width: 175px;
  font-size: 18px;
`

const Experience = styled.div.attrs({ className: "measure" })``

const ExperienceHeader = styled.div.attrs({ className: "f5" })`
  padding-top: 5px;
`

const ExperienceExamples = styled(UL)``
const Example = styled(LI)``


const Col = styled(Column)`
  padding-top: 20px;
  ${props => props.horizontalCenter ? `
    justify-content: flex-start; 
    align-items: flex-end; 
    margin-right: 25px;
    ` : false
  };
  ${props => props.left ? `
    margin-right: 25px;
  ` : false}
  ${props => props.right ? `
    margin-left: 25px;
    padding-right: 50px;
  ` : false}
  ${props => props.flex1 ? `
    flex: 2;
  ` : false}
  ${props => props.flex3 ? `
    flex: 3;
  ` : false}
`


export default ExperienceRole;