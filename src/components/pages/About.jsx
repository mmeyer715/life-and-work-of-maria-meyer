import React from "react";
import recent from "../../assets/about/recent.jpg";

function About() {
    return (
        <div className="d-flex row justify-content-around">
          <div className="col-sm-12 col-md-4">
            <img src={recent} className='recentPic img-fluid rounded' alt='about' />
          </div>
          <div className="d-flex align-items-center">
            <h1>Summary</h1>
            <p>
            Full stack web developer expanding a customer service background to create, build, and refactor applications that meet coding standards and are beautiful. Will soon earn a certification of completion from the Technology & Leadership Center at Washington University McKelvey School of Engineering for full stack development. Some of my skills include but are not limited to: HTML, JavaScript, CSS, React.js, MVC Framework, SQL, NoSQL, MongoDB, server-side development(Express.js, Node.js), deployment to Heroku and GitHub, UI/UX design, OOP, debugging, algorithms and data structures, and MERN stack. Based on peer review, my three most proficient skills are: JavaScript, DB Languages, and API creation and routes. I am known for my continuous drive to learn and improve with everything I do. With each new project, my goal is to provide the best user experience while continuing to evolve my current coding practices. I’m excited and ready to advance my skills with a fast-paced, creative team to build exceptional experiences on the web.
            </p>
          </div>
        </div>
    )
}

export default About;