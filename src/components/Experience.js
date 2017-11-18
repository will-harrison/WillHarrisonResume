import React from 'react';
import styled from 'styled-components';

const Experience = () => {
  return (
    <div>
      <Title>Experience</Title>
      <Container>
        <Row>
          <Column left>
            <Column size={"32px"} veritcalCenter extra>Javascript Developer</Column>
            <Company size={"18px"} extra>Raygun Labs</Company>
            <Company size={"18px"} extra>Market Igniter</Company>
            <Company size={"18px"} extra>Ziggie Ecommerce</Company>
            <Company size={"18px"} extra>Kochava</Company>
          </Column>
          <Column right>
            <P>
              As a Software Developer, I work to improve the user experience by automating business workflow, reducing complexity and increasing reliable output.
              I have experience with Front and Back End development, writing APIs, building databases, and building intuitive user experiences to interface with the data.
            </P>
            <UL>
              <LI>React, Redux, React Router 4, and various styling libraries.</LI>
              <LI>Node, Express, Hapi, SocketIO.</LI>
              <LI>SQL Server, MySQL, PostgreSQL, Mongodb, and Rethinkdb.</LI>
              <LI>Experience working on existing code bases as well as starting projects from the ground up.</LI>
              <LI>Enterprise and startup experience.</LI>
            </UL>
          </Column>
        </Row>
        <Row>
          <Column left>
            <Column size={"32px"} veritcalCenter extra>Retail Data Analyst</Column>
            <Company size={"18px"} extra>Coldwater Creek</Company>
            <Company size={"18px"} extra>HEB Grocery Company</Company>
            <Company size={"18px"} extra>Ziggie Ecommerce</Company>
          </Column>
          <Column right>
            <P>As a Data Analyst, I make sense of large data sets. I build reports, forecasts and data models to provide business direction. I have more than a decade's experience as a Retail Inventory Planner and Sr. Allocation Analyst. I’ve managed multiple multi-million dollar retail categories at once.</P>
            <UL>
              <LI>Excel, VBA, SQL, Python</LI>
              <LI>Forecasting and analyis of inbound and outbound inventory.</LI>
              <LI>Created numerous processes and tools to streamline the flow of inventory from the warehouse to the store.</LI>
            </UL>
          </Column>
        </Row>
        <Row>
          <Column left>
            <Column size={"32px"} veritcalCenter extra>Business Analyst</Column>
            <Company size={"18px"} extra>Coldwater Creek</Company>
            <Company size={"18px"} extra>Ziggie Ecommerce</Company>
          </Column>
          <Column right>
            <P>As a Business Analyst, I have been a Subject Matter Expert for an SAP implementation while working with a team that created in-house Allocation and Replenishment software to interface with SAP. I was responsible for user training, documentation, SOPs, and testing of the simultaneous projects. These projects went live on time with no critical defects.</P>
            <UL>
              <LI>Business Analyst, SME, and Product Manager for concurrent Agile and waterfall style projects.</LI>
              <LI>Lead Product Designer for an Allocation and Replenishment system, giving the analysts the ability to manage inventory at granular and macro levels.</LI>
            </UL>
          </Column>
        </Row>
      </Container>
      <HR />
    </div>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-size: ${props => props.size};
`;

const Company = styled(Row) `
  line-height: 1em;
  margin-left: 60%;
  margin-top: 10px;
  justify-content: flex-start;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  padding-top: 20px;
  font-size: ${props => props.size};
  ${props => props.veritcalCenter ? `
      justify-content: flex-start; 
      align-items: flex-end; 
      margin-right: 25px;
      margin-top: 15px;
      font-weight: 500;
    ` : false
  };
  ${props => props.left ? `
    margin-right: 25px;
  ` : false}
  ${props => props.right ? `
    margin-left: 25px;
  ` : false}
`;


const Title = styled.div`
margin-top: 50px;
font-size: 32px;
text-align: center;
background-color: #fff;
font-family: "Montserrat", sans-serif;
`;

const UL = styled.ul`
  padding: 0;
  padding-top: 5px;
`;

const LI = styled.li.attrs({ className: "list f5" }) `
  padding: 5px 0;
`;

const P = styled.p.attrs({ className: "p f5 measure" }) `
  padding-top: 25px;
`;

const HR = styled.hr`
width: 75%;
border: 0; 
height: 2px; 
background-image: -webkit-linear-gradient(left, #f0f0f0, #336699, #f0f0f0);
background-image: -moz-linear-gradient(left, #f0f0f0, #336699, #f0f0f0);
background-image: -ms-linear-gradient(left, #f0f0f0, #336699, #f0f0f0);
background-image: -o-linear-gradient(left, #f0f0f0, #336699, #f0f0f0); 
`;

export default Experience;