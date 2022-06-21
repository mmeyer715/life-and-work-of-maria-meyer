import React, {useState} from "react";


function Contact() {
    const [formInfo, setFormInfo] = useState({
        firstName: ''
    })
    const handleBlur = (event) => {
        console.log(event.target.value.length);
    }

    return (

        <section>
            <form>
                <div className="form-group">
                    <div className="row">
                        <div className="col">
                            <label for='firstName'>First Name:</label>
                            <input onBlur={handleBlur} className="form-control" placeholder="First name" name='firstName' />
                        </div>
                        <div className="col">
                            <label form="lastName">Last Name:</label>
                            <input type={'text'} className="form-control" placeholder="Last name" />
                        </div>
                    </div>
                    <div className="row">
                        <label for='emailInput'>Email Address:</label>
                        <input type={'email'} className='form-control' placeholder="email@email.com" />
                    </div>
                    <div className="row">
                        <label for='messageInput'>Write message here:</label>
                        <textarea className="form-control"></textarea>
                    </div>
                </div>
            </form>
            <div className="flex-contact">
                <h1>Additional Contact Information</h1>
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
                            <a href="mbean1216@icloud.com" rel="personal email">
                                mbean1216@icloud.com
                            </a>
                        </p>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Contact;