import React, { useState } from "react";
import axios from "axios";

export default function Contact() {
  const name = useForm("");
  const email = useForm("");
  const message = useForm("");

  const handleSubmit = e => {
    e.preventDefault();

    const params = {
      name: name.value,
      email: email.value,
      message: message.value
    };

    axios
      .post("http://localhost:8080/sendEmail", params)
      .then(data => console.log(data))
      .catch(e => console.log(e));
  };

  return (
    <form onSubmit={handleSubmit} id="contact">
      <iframe
        width="100%"
        height="300"
        frameBorder="0"
        title="Keller Williams Integrity Realty"
        style={{ border: 0 }}
        src={`https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_GOOGLE_MAP_API}
                &q=Weidong+Li&center=45.4177833, -75.8094403&zoom=14`}
        allowFullScreen
      />
      <div className="row">
        <div className="col-5">
          <title>Contact info</title>
          <div>Gatinuea, Quebec, J9J 4E7</div>
          <div>Email: weidongli1988@gmail.com</div>
          <div>Phone: +6138783953</div>
        </div>
        <div className="col-7">
          <title>Let's keep in touch</title>
          <div className="form-group">
            <label htmlFor="email-name">Your Name</label>
            <input
              className="form-control"
              type="text"
              id="email-name"
              name="firstname"
              {...name}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email-address">Your Email</label>
            <input
              className="form-control"
              type="email"
              id="email-address"
              {...email}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email-message">Your Message</label>
            <textarea
              className="form-control"
              type="text"
              id="email-message"
              {...message}
            />
          </div>
          <button type="submit" className="button">
            Send Your Message
          </button>
        </div>
      </div>
    </form>
  );
}

function useForm(initialValue = "") {
  const [value, setValue] = useState(initialValue);
  const onChange = e => setValue(e.target.value);
  return { value, onChange };
}
