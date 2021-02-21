import React from 'react';

import { Logo, Text } from '../../components';

import './index.css';

const Home: React.FC = () => {
  return (
    <div className='App'>
      <header className='App-header'>
        <Logo />
        <Text />
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default Home;
