import React from 'react';
import logo from './logo.svg';
import './App.css';

const data = [
  'go to work',
  'go shoping',
  'learning'
];



function App() {
  const convertData = data.map((d, i) => {
    return <p key={i}>
      {d}
    </p>
  }) 
  return (
    <div className="App">
      {convertData}
    </div>
  );
}

export default App;
