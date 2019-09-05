import React, { useState, useEffect } from "react";
import axios from "axios";
import classnames from "classnames";
import { Modal } from "react-bootstrap";

export default function Contact() {
  const name = useForm("");
  const email = useForm("");
  const message = useForm("");
  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (Object.keys(errors).length !== 0) {
      setErrors({});
    }
  }, [name.value, email.value, message.value]);

  const handleSubmit = e => {
    e.preventDefault();

    let hasError = false;
    let errors = {};
    if (name.value.trim() === "") {
      errors.name = "Please provide your name";
      hasError = true;
    }

    if (email.value.trim() === "") {
      errors.email = "Please provide your email";
      hasError = true;
    }

    if (message.value.trim() === "") {
      errors.message = "Please put anything you want to say to me";
      hasError = true;
    }

    if (hasError) {
      setErrors(errors);
    } else {
      const params = {
        name: name.value,
        email: email.value,
        message: message.value
      };

      axios
        .post(
          `http://${process.env.API_HOST || "0.0.0.0"}:8080/sendEmail`,
          params
        )
        .then(data => {
          setShowModal(true);
        })
        .catch(e => console.log(e));
    }
  };
  // `http://${process.env.REACT_APP_API_HOST || "localhost:8080"}/sendEmail`
  const handleModelHide = () => {
    setShowModal(false);
    name.setValue("");
    email.setValue("");
    message.setValue("");
  };

  return (
    <form onSubmit={handleSubmit} id="contact" noValidate>
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
          <InputField
            id="email-name"
            label="Your Name"
            {...name}
            error={errors.name}
          />
          <InputField
            id="email-address"
            label="Your Email"
            {...email}
            error={errors.email}
          />
          <TextAreaField
            id="email-message"
            label="Your Message"
            {...message}
            error={errors.message}
          />
          <button type="submit" className="button">
            Send Your Message
          </button>
        </div>
      </div>
      <CustomModel show={showModal} onHide={handleModelHide} />
    </form>
  );
}

function useForm(initialValue = "") {
  const [value, setValue] = useState(initialValue);
  const onChange = e => setValue(e.target.value);
  return { value, onChange, setValue };
}

function InputField({ id, label, value, onChange, error }) {
  return (
    <div className="form-group" style={{ position: "relative" }}>
      <label htmlFor={id}>{label}</label>
      <input
        className={classnames({
          "form-control": true,
          "is-invalid": error
        })}
        type="text"
        id={id}
        value={value}
        onChange={onChange}
      />
      <div
        className="invalid-feedback mt-0"
        style={{ position: "absolute", color: "#dcc7ad" }}
      >
        {error && <p className="mb-0">{error}</p>}
      </div>
    </div>
  );
}

function TextAreaField({ id, label, value, onChange, error }) {
  return (
    <div className="form-group" style={{ position: "relative" }}>
      <label htmlFor={id}>{label}</label>
      <textarea
        className={classnames({
          "form-control": true,
          "is-invalid": error
        })}
        type="text"
        id="email-message"
        value={value}
        onChange={onChange}
      />
      <div
        className="invalid-feedback mt-0"
        style={{ position: "absolute", color: "#dcc7ad" }}
      >
        {error && <p className="mb-0">{error}</p>}
      </div>
    </div>
  );
}

function CustomModel(props) {
  return (
    <Modal {...props}>
      <Modal.Body>
        <h5>Email Sent!</h5>
        <h6>
          Thank you so much for taking time to contact me. I'll get back to you
          as soon as possible.
        </h6>
        <div className="text-right">
          <button className="btn btn-secondary" onClick={props.onHide}>
            close
          </button>
        </div>
      </Modal.Body>
    </Modal>
  );
}
