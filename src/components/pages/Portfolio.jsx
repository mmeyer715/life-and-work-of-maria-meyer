import React from "react";
import sleepily from "../../assets/about/sleepily.png"

function Portfolio() {
    // const data = [
    //     {
    //         img: { sleepily },
    //         title: 'Sleepily',
    //         technologies: 'Express.js, Handlebars.js, Express-Session, mySQL, sequelize, JawsDB, Heroku',
    //         gitHub: 'https://github.com/mmeyer715/active-slumber',
    //         deployedApp: 'https://sleepy-cove-47573.herokuapp.com/'
    //     }
    // ]
    return (
        // <div>
        //     {data.map((fields, index) => {
        //         return (
                    <div className="card bg-dark text-white">
                        <img className="card-img" src={sleepily} alt="" />
                            <div className="card-img-overlay">
                                <h5 className="card-title">Sleepily</h5>
                                <p className="card-text">Technologies Used: Express.js, Handlebars.js, Express-Session, mySQL, sequelize, JawsDB, Heroku</p>
                                <p className="card-text">GitHub: https://github.com/mmeyer715/active-slumber </p>
                                <p className="card-text">Deployed URL: https://sleepy-cove-47573.herokuapp.com/ </p>
                            </div>
                    </div>
        //         )
        //     })}
        // </div>
    )
}

export default Portfolio;