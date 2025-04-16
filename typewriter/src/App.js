import React, { useState } from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [displayedText, setDisplayedText] = useState('');
  const [text, count] = useTypewriter({
    words: [displayedText],
    loop: 0,
    typeSpeed: 60,
  });

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleUpdateText = () => {
      setDisplayedText(inputValue);
  };
  return (
    <div>
    <input
      type="text"
      value={inputValue}
      onChange={handleInputChange}
      placeholder="Type something..."
    />
    <button onClick={handleUpdateText}>Update Text</button>
    <h1>
      {text}
      <Cursor />
    </h1>
  </div>
  );
}

export default App;
