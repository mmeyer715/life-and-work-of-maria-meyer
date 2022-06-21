import React from "react";
import sleepily from "../../assets/about/sleepily.png"

function Portfolio() {
    const data = [
        {
            src: '',
            title: '#about-me',
            technologies: 'About',
            gitRepo: '',
            deployedApp: '',
        },
        {
            src: { sleepily },
            title: 'Sleepily',
            technologies: 'Express.js, Handlebars, Express-Session, mySQL, sequelize',
            gitRepo: 'https://github.com/mmeyer715/active-slumber',
            deployedApp: 'https://sleepy-cove-47573.herokuapp.com/login',
        },
        {
            src: '',
            title: '#about-me',
            technologies: 'About',
            gitRepo: '',
            deployedApp: '',
        },
        {
            src: '',
            title: '#about-me',
            technologies: 'About',
            gitRepo: '',
            deployedApp: '',
        },
        {
            src: '',
            title: '#about-me',
            technologies: 'About',
            gitRepo: '',
            deployedApp: '',
        },
        {
            src: '',
            title: '#about-me',
            technologies: 'About',
            gitRepo: '',
            deployedApp: '',
        },
    ]
    data.map((fields, index) => {
        return (
            <div key={index} className="card bg-dark text-white">
                <img className="card-img" src={fields.src} alt="" />
                <div className="card-img-overlay">
                    <h5 className="card-title">{fields.title}</h5>
                    <p className="card-text">Technologies Used: {fields.technologies}</p>
                    <p className="card-text">GitHub: {fields.gitRepo}</p>
                    <p className="card-text">Deployed: {fields.deployedApp}</p>
                </div>
            </div>
        )
    });

};

export default Portfolio;