import React from 'react';

class Paragraph extends React.Component { 
  render() {
    return (
      <div>
        <p>Welcome to {this.props.name.company_name} Customer Service. My name is {this.props.name.staff_name}. How can I help you?</p>
      </div>
    );
  }
}

export default Paragraph;