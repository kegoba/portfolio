

import React from "react";
import { Link } from "react-router-dom";



    export const FooterDown =()=>{
      const year = new Date ()
  
        return (
          <div className=" footer-down">
            <div className="container ">
              <div className="row ">
                <div className="col  thin-foot">
                    
                  <p className="handle"> Social-media Handle </p>
                  <p className="">
                    <a href="https://wa.me/2347038034761" >   <i className="fa fa1 fa-facebook"/> </a>
                    <a href="https://wa.me/2347038034761" >  <i className="fa fa1 fa-twitter"/> </a>
                    <a href="https://wa.me/2347038034761" > <i className="fa fa1 fa-instagram"/> </a>
                     <a href="https://wa.me/2347038034761" >   <i className="fa fa1 fa-linkedin "/> </a>
                    <a href="https://wa.me/2347038034761" > <i className="fa fa1 fa-whatsapp"> </i>  </a> 
                   </p> 
                  <p> <i className="fa  fa-envelope"> </i> egobakelvin@gmail.com </p>
                 </div>
                </div>
            <div className="copyright">
                    <p className="copyright"> Copyright @ { year.getFullYear() }; </p>
                  </div>
          </div>
          </div>
        );
    }

