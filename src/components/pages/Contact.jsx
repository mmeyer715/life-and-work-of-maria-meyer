import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";


function Contact() {
    // const [errMsg, setErrMsg] = useState('');
    // const [formInfo, setFormInfo] = useState({ name: '', email: '', message: '' });
    // const { name, email, message } = formInfo;

    // function handleBlur(event) {
    
    return (
        <div>
            test
        </div>
    )
}
//         <section>
//             <htmlForm id="contact-htmlForm" onSubmit={handleSubmit}>
//                 <div className="htmlForm-group">
//                     <div className="row">
//                         <div className="col">
//                             <label htmlFor='firstName'>First Name:</label>
//                             <input type="text" defaultValue={firstName} onBlur={handleBlur} className="htmlForm-control" placeholder="First name" name='firstName' />
//                         </div>
//                         <div className="col">
//                             <label htmlFor="lastName">Last Name:</label>
//                             <input type="text" defaultValue={las} onBlur={handleBlur} className="htmlForm-control" placeholder="Last name" name="lastName" />
//                         </div>
//                     </div>
//                     <div className="row">
//                         <label htmlhtmlFor='emailInput'>Email Address:</label>
//                         <input type="email" defaultValue={email} onBlur={handleBlur} className='htmlForm-control' placeholder="email@email.com" name="email" />
//                     </div>
//                     <div className="row">
//                         <label htmlFor='messageInput'>Write message here:</label>
//                         <textarea defaultValue={message} onBlur={handleBlur} className="htmlForm-control" name="message"></textarea>
//                     </div>
//                 </div>
//                 {errMsg && (
//                     <div>
//                         <p>{errMsg}</p>
//                     </div>
//                 )}
//                 <button type="submit">Submit</button>
//             </htmlForm>
//             <div className="flex-contact">
//                 <h1>Additional Contact InhtmlFormation</h1>
//                 <div className="contact-info">
//                     <ul>
//                         <p>
//                             662-545-7566
//                         </p>
//                         <p>
//                             <a href="https://www.linkedin.com/in/maria-meyer-136484227/" rel="linkedin account">
//                                 Linkedin
//                             </a>
//                         </p>
//                         <p>
//                             <a href="mbean1216@icloud.com" rel="personal email">
//                                 mbean1216@icloud.com
//                             </a>
//                         </p>
//                     </ul>
//                 </div>
//             </div>
//         </section>
//     );
// }

export default Contact;