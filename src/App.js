import React, { Component } from 'react';
import './styles/font-mfizz.css';
import styled from 'styled-components';
import Header from './components/Header';
import Technologies from './components/Technologies';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';

class App extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Technologies />
        <Experience />
        <Education />
        <Contact />
      </Container>
    );
  }
}

const Container = styled.div.attrs({
  className: "avenir"
}) `
  display: flex;
  flex-direction: column;
`;

export default App;
