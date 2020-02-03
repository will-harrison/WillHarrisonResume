import React from 'react';
import styled from 'styled-components';
import ExperienceRole from './ExperienceRole'
import { Row, HR } from '../styles/CommonStyles'

const roles = [
  {
    title: "Javascript/React",
    companies: [
      { company: 'RevUnit', timeline: '2019 - 2020' },
      { company: 'Raygun Labs', timeline: '2014 - 2019' },
      { company: 'TripCraft', timeline: '2017 - 2018' },
      { company: 'Market Igniter', timeline: '2017' },
      { company: 'Ziggie Ecommerce', timeline: '2016 - 2017' },
      { company: 'Kochava', timeline: '2014' }
    ],
    experience: {
      header: `
      As a Software Developer, I work to improve the user experience by automating business workflow, reducing complexity and increasing reliable output.
      I have experience with Front and Back End development, writing APIs, building databases, and building intuitive user experiences to interface with the data.
    `,
      examples: [
        'React, Redux, React Router 4, and various styling libraries.',
        'Graphql, Prisma, Apollo', 
        'Node, Express, Hapi, SocketIO.',
        'SQL Server, MySQL, PostgreSQL, Mongodb, and Rethinkdb.',
        'Experience working on existing code bases as well as starting projects from the ground up.',
        'Enterprise and startup experience.'
      ]
    }
  },
  {
    title: 'React Native',
    companies: [
      { company: 'Raygun Labs', timeline: '2017 - Current' },
      { company: 'Graybox', timeline: '2018 - Current' }
    ],
    experience: {
      header: `
      I've been lead and primary developer for a React Native project that incorporates custom SVG animation, maps, camera and camera roll, geo-location, and other native features.
      `,
      examples: [
        'React Native, Expo, Redux, React Navigation, Styled Components.',
        'Self contained apps using SQLite and AsyncStorage for data storage.'
      ]
    }
  },
  {
    title: 'Retail Data Analyst',
    companies: [
      { company: 'Coldwater Creek', timeline: '2005 - 2014' },
      { company: 'HEB Grocery Company', timeline: '2000 - 2005' },
      { company: 'Ziggie Ecommerce', timeline: '2016 - 2017' }
    ],
    experience: {
      header: `
        As a Data Analyst, I make sense of large data sets. I build reports, forecasts and data models to provide business direction. I have more than a decade's experience as a Retail Inventory Planner and Sr. Allocation Analyst. I’ve managed multiple multi-million dollar retail categories at once.
      `,
      examples: [
        'Excel, VBA, SQL, Python',
        'Forecasting and analyis of inbound and outbound inventory.',
        'Created numerous processes and tools to streamline the flow of inventory from the warehouse to the store.'
      ]
    }
  },
  {
    title: 'Business Analyst',
    companies: [
      { company: 'Coldwater Creek', timeline: '2011 - 2013' },
      { company: 'Ziggie Ecommerce', timeline: '2016 - 2017' }
    ],
    experience: {
      header: `
        As a Business Analyst, I have been a Subject Matter Expert for an SAP implementation while working with a team that created in-house Allocation and Replenishment software to interface with SAP. I was responsible for user training, documentation, SOPs, and testing of the simultaneous projects. These projects went live on time with no critical defects.
      `,
      examples: [
        'Business Analyst, SME, and Product Manager for concurrent Agile and waterfall style projects.',
        'Lead Product Designer for an Allocation and Replenishment system, giving the analysts the ability to manage inventory at granular and macro levels.'
      ]
    }
  }
]

const Experience = () => {
  return (
    <div>
      <Title>Experience</Title>
      <Container>
        {roles.map((role, index) => <ExperienceRole role={roles[index]} key={index} />)}
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




const Company = styled(Row)`
  line-height: 1em;
  margin-left: 60%;
  margin-top: 10px;
  justify-content: flex-start;
`;


const Title = styled.div`
  margin-top: 50px;
  font-size: 32px;
  text-align: center;
  background-color: #fff;
  font-family: "Montserrat", sans-serif;
`;

const UL = styled.ul.attrs({ className: "list f5" })`
  padding: 0;
  padding-top: 5px;
`;

const LI = styled.li.attrs({ className: "list f5" })`
  padding: 5px 0;
`;

const P = styled.p.attrs({ className: "p f5 measure" })`
  padding-top: 25px;
`;

export default Experience;