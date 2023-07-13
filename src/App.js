import React, { useState } from 'react';
import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  const [displayText, setDisplayText] = useState('');

  const handleButtonClick = () => {
    const textAreaValue = document.getElementById('textarea').value;
    setDisplayText(textAreaValue);
  };

  return (
    <div className="App">
      <Header title="My React Application" />
      <Content handleButtonClick={handleButtonClick} />
      {displayText && <p>{displayText}</p>}
      <Footer />
    </div>
  );
}

export default App;
