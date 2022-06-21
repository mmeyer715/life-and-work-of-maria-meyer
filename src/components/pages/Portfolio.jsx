import React from "react";
import sleepily from "../../assets/about/sleepily.png"

function Portfolio() {
    const data = [
        {
            img: sleepily ,
            title: 'Sleepily',
            technologies: 'Express.js, Handlebars.js, Express-Session, mySQL, sequelize, JawsDB, Heroku',
            gitHub: 'https://github.com/mmeyer715/active-slumber',
            deployedApp: 'https://sleepy-cove-47573.herokuapp.com/'
        },
        {
            img: sleepily ,
            title: 'Sleepily',
            technologies: 'Express.js, Handlebars.js, Express-Session, mySQL, sequelize, JawsDB, Heroku',
            gitHub: 'https://github.com/mmeyer715/active-slumber',
            deployedApp: 'https://sleepy-cove-47573.herokuapp.com/'
        }
    ]
    return (
        <div className="row">
            {data.map((fields, index) => {

                return (
                    <div key={index} className="card col-sm-12 col-md-6 col-lg-4" >
                        <img className="card-img-top" src={ fields.img } alt="" />
                        <div className="card-body">
                            <h5 className="card-title">{fields.title}</h5>
                            <p>Technologies Used: {fields.technologies}</p>
                            <p> <a href={fields.gitHub}>GitHub Repo</a> </p>
                            <p> <a href={fields.deployedApp}>Deployed Application</a> </p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Portfolio;