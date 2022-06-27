import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";


function Contact() {
    const [errMsg, setErrMsg] = useState('');
    const [formInfo, setFormInfo] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formInfo;

    function handleBlur(event) {
        if (event.target.name === 'email') {
            const valid = validateEmail(event.target.value);

            if (!valid) {
                setErrMsg('Your email is invalid!');
            } else {
                setErrMsg('');
            }
        } else {
            if (!event.target.value.length) {
                setErrMsg(`${event.target.name} is required`);
            } else {
                setErrMsg('');
            }
        }
        setFormInfo({ ...formInfo, [event.target.name]: event.target.value })
    }

    function handleSubmit(event) {
        event.preventDefault();
    }

    return (
        <section>
            <form id="contact-htmlForm" onSubmit={handleSubmit}>
                <div className="htmlForm">
                    <div className="row">
                            <label htmlFor='name'>Name:</label>
                            <input type="text" defaultValue={name} onBlur={handleBlur} className="htmlForm-control" placeholder="Example: John Doe" name='name' />
                    </div>
                    <div className="row">
                        <label htmlFor='email'>Email Address:</label>
                        <input type="email" defaultValue={email} onBlur={handleBlur} className='htmlForm-control' placeholder="email@email.com" name="email" />
                    </div>
                    <div className="row">
                        <label htmlFor='message'>Write message here:</label>
                        <textarea defaultValue={message} onBlur={handleBlur} className="htmlForm-control" name="message"></textarea>
                    </div>
                </div>
                {errMsg && (
                    <div>
                        <p>{errMsg}</p>
                    </div>
                )}
                <button type="submit">Submit</button>
            </form>
            
            <div className="flex-contact">
                <h1>Additional Forms of Contact</h1>
                <div className="contact-info">
                    <ul>
                        <p>
                            662-545-7566
                        </p>
                        <p>
                            <a href="https://www.linkedin.com/in/maria-meyer-136484227/" rel="linkedin account">
                                Linkedin
                            </a>
                        </p>
                        <p>
                                mbean1216@icloud.com
                        </p>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Contact;