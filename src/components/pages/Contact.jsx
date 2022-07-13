import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";
import { Form, Button, Card, ListGroup, Container } from 'react-bootstrap';


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
            <div className="contactContainer">
                <Form id="contact-htmlForm" onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Label htmlFor='name'>Name:</Form.Label>
                        <Form.Control type="text" defaultValue={name} onBlur={handleBlur} className="htmlForm-control" placeholder="Example: John Doe" name='name' />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label htmlFor='email'>Email:</Form.Label>
                        <Form.Control type="email" defaultValue={email} onBlur={handleBlur} className='htmlForm-control' placeholder="email@email.com" name="email" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label htmlFor='message'>Write message here:</Form.Label>
                        <Form.Control as="textarea" defaultValue={message} onBlur={handleBlur} className="htmlForm-control" name="message" placeholder="Hello Maria....." />
                    </Form.Group>

                    <Button type="submit">Submit</Button>
                </Form>

                <Card className="contactCard" >
                    <Card.Body>
                        <Card.Title>Contact Information</Card.Title>
                        <Card.Text>
                            Phone: 662-545-7566
                        </Card.Text>
                        <Card.Text>
                            Email: mbean1216@icloud.com
                        </Card.Text>
                        <Card.Link href="https://www.linkedin.com/in/maria-meyer-136484227/">LinkedIn</Card.Link>
                    </Card.Body>
                </Card>
            </div>
    );
}

export default Contact;