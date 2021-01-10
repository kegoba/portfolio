import React from "react"
import {Link} from "react-router-dom"
import vtu from "../assets/images/vtu.PNG"
import men from "../assets/images/men.PNG"
import bsc from "../assets/images/bsc.PNG"
import blog from "../assets/images/blog.PNG"


const Project = ()=>{
    return (
        <div className="container page-position" >
            <div className="container card project"  >
                   <h4> </h4> 
                       <p> projects
                        </p>
                        
                
        </div>
            <div className="container product">
                <div className="flex-container">
                    <div className="flex-col card-light">
                        <img className="image" src={vtu} /> 
                        <p className="products">VTU App <a href={"http://vituapps.herokuapp.com"} target="_blank"> View</a> </p> 
                        
                        
                </div>
                    <div className="flex-col card-light">
                        <img className="image" src={men} />
                        <p className="products"> E-commence App <a href="http://kenstore.herokuapp.com/" target=" _blank"> View</a>  </p> 
                        
                        
                </div>
                    <div className="flex-col card-light">
                        <img className="image" src={blog} />
                        <p className="products"> Blog <a href={"/http://irublog.herokuapp.com"} target=" _blank"> View</a>  </p>
                         
                         
                </div>
                    <div className="flex-col card-light">
                        <img className="image" src={bsc} />
                       
                        <p className="products">  static Web App  <a href={"https://bcshoseservices.com/"} target=" _blank">  View</a>  </p>
                </div>
                </div>
            </div>

    </div>
    )}




export default Project