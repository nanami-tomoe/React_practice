import React from 'react';
import Header from './component/Header';
import Paragraph from './component/Paragraph';

function App() {
  const info = {company_name: "Lego", staff_name: "Seunghyun"}
  return (
    <div className="App">
      <Header />
      <Paragraph name={info} />
    </div>
  );
}

export default App;
