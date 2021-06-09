import React, { Component, Fragment } from 'react';
import {_getUsers, _getQuestions } from '../utils/_DATA';

import 'bootstrap/dist/css/bootstrap.min.css';

import Navigation from './Navigation';
import QuestionFrame from './QuestionFrame';
import Results from './Results';

class App extends Component {
  componentDidMount() {
    console.group()
    console.log(_getUsers());
    console.log(_getQuestions());
    console.groupEnd();
  }

  render() {
    return (
      <Fragment>
      <Navigation />
      <QuestionFrame>
        <Results/>
      </QuestionFrame>
      </Fragment>
    )
  }
}

export default App;
