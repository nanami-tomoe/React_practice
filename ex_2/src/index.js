import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

class MyClass extends React.Component {
  render() {
    return <h1>Hi everyone!</h1>;
  }
}

ReactDOM.render(<MyClass />, document.getElementById('root'));
