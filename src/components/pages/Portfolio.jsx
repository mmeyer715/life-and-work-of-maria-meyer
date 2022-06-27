import React from "react";
import sleepily from "../../assets/about/sleepily.png";
import techTalks from "../../assets/about/techTalks.png";
import handyDandyNotebook from "../../assets/about/handyDandyNotebook.png";
import boozers from "../../assets/about/boozers.png";
import weatherTime from "../../assets/about/weatherTime.png"
import betterDay from "../../assets/about/betterDay.png";

function Portfolio() {
    const data = [
        {
            img: sleepily,
            title: 'Sleepily',
            technologies: 'HTML, CSS, JavaScript, Node.js, Express.js, Handlebars.js, Express-Session, mySQL, sequelize, JawsDB, Heroku',
            gitHub: 'https://github.com/mmeyer715/active-slumber',
            deployedApp: 'https://sleepy-cove-47573.herokuapp.com/'
        },
        {
            img: techTalks,
            title: 'Tech Talks',
            technologies: 'HTML, CSS, Materialize, JavaScript, Node.js, Express.js, Handlebars.js, Express-Session, mySQL, sequelize, bcrypt, JawsDB, Heroku',
            gitHub: 'https://github.com/mmeyer715/tech-talks',
            deployedApp: 'https://tech-talks-now.herokuapp.com/'
        },
        {
            img: handyDandyNotebook,
            title: 'Handy Dandy Notebook',
            technologies: 'HTML, CSS, JavaScript, Node.js, Express.js, Heroku',
            gitHub: 'https://github.com/mmeyer715/handy-dandy-notebook',
            deployedApp: 'https://handy-dandy-notebook.herokuapp.com/'
        },
        {
            img: boozers,
            title: 'Drink When Thirsty',
            technologies: 'HTML, CSS, Materialize, JavaScript, Node.js, jQuery, Open Source API Calls, Local Storage, GitHub Pages',
            gitHub: 'https://github.com/mmeyer715/drink-when-thirsty',
            deployedApp: 'https://mmeyer715.github.io/drink-when-thirsty/'
        },
        {
            img: weatherTime,
            title: 'Weather Time',
            technologies: 'HTML, CSS, JavaScript, Node.js, Bootstrap, Open Source API Call, Local Storage, GitHub Pages',
            gitHub: 'https://github.com/mmeyer715/weather-time',
            deployedApp: 'https://mmeyer715.github.io/weather-time//'
        },
        {
            img: betterDay,
            title: 'Better Day Scheduler',
            technologies: 'HTML, CSS, JavaScript, jQuery, Node.js, Moment.js, Bootstrap, GitHub Pages',
            gitHub: 'https://github.com/mmeyer715/better-day-scheduler',
            deployedApp: 'https://mmeyer715.github.io/better-day-scheduler/'
        }
    ]
    return (
        <div className="row">
            {data.map((fields, index) => {

                return (
                    <div key={index} className="cardContainer card col-sm-12 col-md-6 col-lg-4 d-flex flex-column" >
                        <img className="card-img-top h-25" src={fields.img} alt="" />
                        <div className="card-body h-75">
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