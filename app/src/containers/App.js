import './App.css';
import React from 'react';
import Sidebar from '../common/Sidebar';
import Tshirt from '../components/cardType/Tshirt';


function App() {

  return (
    <div>
      <Sidebar></Sidebar>
      <Tshirt></Tshirt>
    </div>
  );
}

export default App;
