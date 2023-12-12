import { useState, useEffect } from 'react';
import Navi from './nav';
import Body from './body';
import Contact from './contact';
import SubHero from './subhero';
import Host from './host';
import { BrowserRouter, Routes } from 'react-router-dom';

function App() {
  const url = 'https://randomuser.me/api'
  const [personData, setPersonData] = useState([{}]);

  return (
    <div className="bg-white">



      <Navi />

      <SubHero />

    </div>
  );
}

export default App;
