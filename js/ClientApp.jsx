import React from 'react';
import {render} from 'react-dom';

const App = () => (
  <div className="app">
    <div className="landing">
      <h1>Spot The Tube</h1>
      <input type="text" placeholder="Search" />
      <a>Browse All</a>
    </div>
  </div>
);

render (<App />, document.getElementById ('app'));
