import React from 'react';

import Container from 'react-bootstrap/Container';

import TwitterIcon from './Icons/twitter.svg';
import GithubIcon from './Icons/github.svg';

const App = () => (
  <Container>
    <h1>Titles</h1>
    <ul>
      <li>
        <TwitterIcon width="40px" height="40px" />
        <a href="https://twitter.com/rwieruch">Twitter</a>
      </li>
      <li>
        <GithubIcon width="40px" height="40px" />
        <a href="https://github.com/rwieruch">Github</a>
      </li>
    </ul>
  </Container>
);

export default App;
