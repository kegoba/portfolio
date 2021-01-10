import React, {Component} from "react"
import { Route, Link, Switch, BrowserRouter as Router } from 'react-router-dom'
//import './App.css';

import Home from "../pages/home"
import Sidebar from "../pages/sidebar"
import Contact from "../pages/Contact";
import Project from "../pages/project";

class Menu extends Component{
    constructor(){
        super()
        this.state ={
            route : false

        }


       
    }

    render(){
        return(


            <Router className="container text-center">
                <div className="menu">
                    <nav className="navbar navbar-expand-lg navbar-light ">
                        
                        <button
                            className=" text-left" 
                            type="button"
                            className="navbar-toggler"
                            data-toggle="collapse"
                            data-target="#dropDrown"
                        >
                            <span className="navbar-toggler-icon"> </span>
                           
                        </button>
                        <li className="nav-item text-left number">
                            <i className="fa fa-phone-square">   </i>  +2348130888740
                                </li> 
                        
                        <div className="collapse   navbar-collapse" id="dropDrown">
                            <ul className="navbar-nav  mr-auto">
                                <li className="nav-item text-left">
                                    <Link to={"/"} className="nav-link " > Home  </Link>
                                   
                                </li>
                               
                                <li className="nav-item text-left">
                                    <Link to={"/project"} className="nav-link " > Portfolio  </Link>     
                                </li>
                                 
                                <li className="nav-item text-left">
                                    <Link to={"/contact"} className="nav-link" > Contact    </Link>
                                </li> 
                                
                                      
                            </ul>
                        </div>

                            </nav>
                      
                            
                </div>
               
                            <Switch>
                                <Route exact path="/" component={Home} />
                                <Route exact path="/contact" component={Contact} />
                                <Route exact path="/project" component={Project} />
                                   

                            </Switch>

                </Router>



        )
    }
}



export default Menu
