import React from "react";
import linkenIn from '../../assets/about/linkenIn.png'
import gitHub from "../../assets/about/gitHub.png";
import stack from "../../assets/about/Stack.png"
function Footer() {
    const data = [
        {
            href: 'https://www.linkedin.com/in/maria-meyer-136484227/',
            src: linkenIn
        },
        {
            href: 'https://github.com/mmeyer715',
            src: gitHub
        },
        {
            href: 'https://stackoverflow.com/users/17548222/mmeyer715',
            src: stack
        },
    ]
    return (
        <footer className="d-flex justify-content-center">
            {data.map((fields, index) => {
                return (
                    <a key={index} href={fields.href}>
                        <img src={ fields.src } alt=""  className="footImg img-fluid"/>
                    </a>
                )
            })}
        </footer>
    );
}

export default Footer;