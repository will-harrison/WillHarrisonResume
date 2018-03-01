import React from 'react';
import styled from 'styled-components'
import { UL, LI, Row, Column } from '../styles/CommonStyles'

const ExperienceRole = ({ role }) => {
  return (
    <Row>
      <Col left flex1 horizontalCenter>
        <JobTitle>{role.title}</JobTitle>
        <JobList>
          {role.companies.map(i => <JobListItem key={i}>{i}</JobListItem>)}
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

const JobTitle = styled.div.attrs({ className: "f2 fw5" }) ``


const JobList = styled(UL).attrs({ className: "f4" }) ``

const JobListItem = styled(LI).attrs({ className: "f4" }) ``

const Experience = styled.div.attrs({ className: "measure" }) ``

const ExperienceHeader = styled.div.attrs({ className: "f5" }) `
  padding-top: 5px;
`

const ExperienceExamples = styled(UL) ``
const Example = styled(LI) ``


const Col = styled(Column) `
  padding-top: 20px;
  ${props => props.horizontalCenter ? `
    justify-content: flex-start; 
    align-items: flex-end; 
    margin-right: 25px;
    ` : false
  };
  ${props => props.left ? `
    margin-right: 25px;
    min-width: 45%;
  ` : false}
  ${props => props.right ? `
    margin-left: 25px;
    min-width: 50%;
    max-width: 55%;
  ` : false}
  ${props => props.flex1 ? `
    flex: 1;
  ` : false}
  ${props => props.flex3 ? `
    flex: 3;
  ` : false}
`


export default ExperienceRole;