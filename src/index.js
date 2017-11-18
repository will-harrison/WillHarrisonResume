import React from 'react';
import ReactDOM from 'react-dom';
import { injectGlobal } from 'styled-components';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

injectGlobal`
  font-family: 'avenir next', avenir, sans-serif;
  body {
    color: rgba(0, 0, 0, .7);
    margin: 0;
    border-top: 5px solid #336699;
    border-bottom: 15px solid #336699;
  }
`;

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
