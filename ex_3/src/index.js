import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

const myelement1 = (
  <div>
    <h1>Class name</h1>
    <p>Mobile Software</p>
    <h2>Professor's name</h2>
    <p>WoongSup Kim</p>
  </div>
); 

const myelement2 = (
  <div>
    <h1>List of Students</h1>
    <ul>
      <li>YoonHo Choi</li>
      <li>JunKyung Kim</li>
      <li>InSun Byun</li>
      <li>DongHun Kim</li>
      <li>YuTan Kim</li>
    </ul>
  </div>
);

ReactDOM.render(myelement1, document.getElementById('2022112088'));
ReactDOM.render(myelement2, document.getElementById('seunghyeon'));
reportWebVitals();
