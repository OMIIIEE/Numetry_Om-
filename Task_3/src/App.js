// App.js

import React from 'react';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import Header from './Header'
import './App.css'
import Navbar from './Navbar';
import MainBody from './MainBody';
import BottomPart from './BottomPart';
import AboutUs from './NavCom/AboutUs/AboutUs';


const App = () => {
 return (
    <Router>
    <div> 
     <Header/>
      
      <Navbar/>
        <AboutUs/>
      <MainBody/>
      <BottomPart/>
      
    </div>
    </Router>
  );
}

export default App;
