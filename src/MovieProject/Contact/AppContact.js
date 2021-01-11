import React, { useState } from 'react';
import "./Contact.css";

export function AppContact(){
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [message,setMessage] = useState("");

    const handleSubmit=(e)=>{
        e.preventDefault();
        alert("Message send");
        console.log(name);
        console.log(email);
        console.log(message);
    };

    const onNameChange = (event) => {
        setName( event.target.value)
    };

    const onEmailChange = (event) => {
        setEmail(event.target.value)
    };

    const onMessageChange = (event) => {
        setMessage(event.target.value)
    };
    return(
        <div className="AppContact">
            <form  onSubmit={handleSubmit} method="POST" className={"formWraper"}>
                <div className={"formInput"}>
                    <div>
                        <input type="text" placeholder={"Full name"} className="form-control"  value={name} onChange={onNameChange} />
                        <input type="email" placeholder={"Email"} className="form-control"   value={email} onChange={onEmailChange} />
                    </div>
                    <div>
                        <textarea placeholder={"Text here..."} className="form-control" rows="3"  value={message} onChange={onMessageChange} />
                    </div>
                </div>
                <div>
                    <button disabled={!email || !name || !message} type="submit" className="formBtn">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default AppContact;