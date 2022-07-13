import React from "react";

function Resume() {
    const data = [
        'HTML', 'CSS', 'JavaScript', 'Node.js', 'React.js', 'Express.js', 'Handlebars', 'MVC framework', 'OPP', 'SQL', 'NoSQL', 'MongoDB', 'server-side development', 'Heroku', 'Github', 'UI/UX design', 'MERN', 'Test Driven Development'
    ]
    return (
        <div className="resumeContainer">
            <div className="skillsList">
                <ul>
                    {data.map((fields, index) => {
                        return (
                            <li key={index}>{fields}</li>
                        )
                    })}
                </ul>
            </div>
            <h1><a href='https://docdro.id/QLxcbQO' download>View Resume Here</a></h1>
        </div>
    );
}

export default Resume;