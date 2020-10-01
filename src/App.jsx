import React from 'react';

import TwitterIcon from './Icons/twitter.svg';
import GithubIcon from './Icons/github.svg';

const App = () => (
  <div>
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
  </div>
);

export default App;
