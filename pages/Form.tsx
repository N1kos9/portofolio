"use client";
// import { BsSend } from "react-icons/bs";
import { useState } from "react";

function ContactForm() {
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState([]);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Full name: ", fullname);
    console.log("Email: ", email);
    console.log("Message: ", message);

    const res = await fetch("api/contact", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        fullname,
        email,
        message,
      }),
    });

    const { msg, success } = await res.json();
    setError(msg);
    setSuccess(success);

    if (success) {
      setFullName("");
      setEmail("");
      setMessage("");
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="form">
        <div className="name">
          <label htmlFor="fullname"></label>
          <input
            type="text"
            className="input"
            value={fullname}
            onChange={(e) => setFullName(e.target.value)}
            id="fullName"
            placeholder="Name"
          />
        </div>
        <div className="email">
          <label htmlFor="email"></label>
          <input
            type="text"
            className="input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            placeholder="Email"
          />
        </div>
        <div className="message">
          <label htmlFor="message"></label>
          <textarea
            id="message"
            className="input"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Message"
          ></textarea>
        </div>

        <button type="submit" className="send">
          {" "}
          Send{" "}
        </button>
      </form>

      <div className="error-btn">
        {
          error &&
            error.map((e) => (
              <div>
                <p>{e}</p>
              </div>
            ))
          // style={ `${success ? 'sent message' : 'error'}` }
        }
      </div>
    </>
  );
}

export default ContactForm;
