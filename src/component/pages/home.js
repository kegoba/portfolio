import React, { Component } from "react";

import "./pages.css"


class Home extends Component {
    render() {
        return (
          <div className="container page-position ">
            <div className=" container bio  card">

              <h4> Hi, I'm Kelvin </h4>
              <p>
                I am a Full-stack web developer that love exploring new
                technologies
              </p>
              <p>
                Creating Custom Software Applications to solve people's Needs
                both here in Nigeria and outside the country.
              </p>
            </div>


            <div className=" conatainer">
              <h4 className="p"> What i am good at... </h4>
              <div className="flex-container">
                <div className="flex-col card">
                  <p>
                    I develop applications to meet standard requirment. I have
                    experience in  building dynamic and static web applications. I
                    design and develop web projects of any complexity and
                    magnitude. Under website development services, i  use modern
                    web development stacks and software tools such as: PHP
                    (Laravel),  Python (Django and Flask) , Javascript (Node,
                    React, Redux), HTML and Css, etc

                  </p>
                    

                
                  
                </div>
                <div className="flex-col card">
                  <p>Competence• Ecommerce solutions • Content management systems
                  (CMS) sites• Social network applications • VTU/Telecom Portal
                  Development • USSD Design and Implementation • ShortCode
                  Application Development • Bulk Voice Calls Application
                  Development • Bulk SMS application Development • Membership
                  Sites • Forum & blog • Database integration • Real Estate
                  Website Design • Hotel and Booking Portal • Create custom site
                  engine • Payment gateways integration • Developing web
                  interface for data entry • Add features to or modify existing
                  script… and  much more</p>
                  
                </div>
              </div>
            </div>
            <div className="container">
              <h4> What i do</h4>
              <div className="flex-container">
                <div className="flex-col-skills card">
                  <h4> WEB DEVELOPMENT</h4>I have experience building websites
                  using modern tech tools
                </div>
                <div className="flex-col-skills card">
                  <h4> DATA STRUCTURES & ALGORITHMS </h4>
                  As coming from the CS background, I have basic fundamental
                  concepts of DSA
                </div>
                <div className="flex-col-skills card">
                  <h4> DEV OPS</h4>
                  <p>
                    I currently getting familar and working with
                    the following DevOps tools like Jenkins, Docker
                    </p>
                </div>
              </div>

           
            </div>
          </div>
        );

    }

}

export default Home;
