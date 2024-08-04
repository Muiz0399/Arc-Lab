import React from "react";
import "./ContactForm.css";
const ContactForm = () => {
  return (
    <div className="form-contact">
      <div className="contact-form">
        <div className="contact-form-container">
          <form action="#" className="form-page">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Your Name"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Your Email"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Subject"
              />
            </div>
            <div className="form-group">
              <textarea
                cols="30"
                rows="7"
                className="form-control"
                placeholder="Message"
              ></textarea>
            </div>
            <div className="form-group">
              <input type="submit" value="Send Message" className="form-btn " />
            </div>
          </form>
        </div>
      </div>
      <h2 className=" mt-5">
        If you got any questions please do not hesitate to send us a message
      </h2>
    </div>
  );
};

export default ContactForm;
