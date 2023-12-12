import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


function Navi() {
  return (
    <nav className="bg-white/10 p-3">
      <ul className="flex space-x-4 justify-center mr-16 font-semibold text-white">
        <li><a href="#" className="text-black hover:text-blue-300 ml-20">Sign-Up</a></li>
      </ul>

    </nav>
  );
}

export default Navi;
