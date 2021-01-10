import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Menu from "./component/pages/menu"
import Sidebar from "./component/pages/sidebar"
import { FooterDown} from "./component/pages/footer"
import "./component/pages/pages.css";

function App() {
  return (
    <div className="App">
      <div className="sidebar-page">
        <Sidebar/>
      </div>
      <div className=" menu-page">
        <Menu />

      </div>
    
      
      <div className="footer">
        <FooterDown />
      </div>
    </div>
  );
}

export default App;
