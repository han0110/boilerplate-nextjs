// @flow

import React, { Component } from 'react';
import Hello from '../components/Hello';

import '../styles/style.scss';

class Index extends Component<{}> {
  render() {
    return (
      <div>
        <Hello />
      </div>
    );
  }
}

export default Index;
