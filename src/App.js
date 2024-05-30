import React, { useState } from 'react'; 
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ReactDOM from 'react-dom';
import HomePage from './components/HomePage';

function App() {
  const [selectedText, setSelectedText] = useState('');
  const handleTextSelection = (text) => {
    setSelectedText(text);
  };

  return (
    <div className="App">
      <Router>
        <HomePage setSelectedText={handleTextSelection} selectedText={selectedText} />
      </Router>
    </div>
  );
}

export default App;
