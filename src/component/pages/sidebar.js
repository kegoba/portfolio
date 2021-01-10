import React, { Component } from "react";
import { Route, Link, Switch, BrowserRouter as Router } from 'react-router-dom'

import "./pages.css"
import pic from "../assets/images/pic.jpg"
import pdf from "../assets/cv.pdf";

class Sidebar extends Component {

  handleCv = (e) => {
    const cv = pdf
    window.open(cv)

  }
    render() {
        return (
          <div className=" sidebar">
            <div className=" bio-info">
              <li className="nav-item text-left">
                <a href="/" className="" >  <img className="profile-image" src={pic} alt={pic} />  </a>
              </li>
              <ul className="">
                <li className="nav-item text-left">
                  <a href={"/"} className="nav-link " > FULL-STACK WEB DEVELOPER  </a>
                </li>
                <li className="nav-item text-left">
                  <a href={"/project"} className="nav-link " > Portfolio  </a>
                </li>
                <li className="nav-item text-left">
                  <a className="nav-link" onClick={this.handleCv} > My-CV  </a>
                </li>
                <li className="nav-item text-left">
                  <a href={"/contact"} className="nav-link" > Contact    </a>
                </li>
               
              </ul>

      
             
              
            </div>

            
           
          </div>
        );

    }

}

export default Sidebar;
