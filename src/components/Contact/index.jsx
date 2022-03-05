import React from "react";
import "./styles.css";

// React icons imports
import { MdOutlineMail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";

// Email js required
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_sbin7xj",
      "template_qkczquf",
      form.current,
      "31ndjHOhKJM7XMwZU"
    );

    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Torch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>dummymail@mail.com</h5>
            <a
              href="mailto:dummymail@mail.com"
              target={"_blank"}
              rel="noreferrer"
            >
              Send a Message
            </a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>dummymessenger</h5>
            <a href="https://m.me/" target={"_blank"} rel="noreferrer">
              Send a Message
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <h5>+123456789</h5>
            <a
              href="https://api.whatsapp.com/send?phone=123456789"
              target={"_blank"}
              rel="noreferrer"
            >
              Send a Message
            </a>
          </article>
        </div>
        {/* END of Contact options */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder={`Your Full Name`}
            required
          />
          <input
            type="email"
            name="email"
            placeholder={`Your Email`}
            required
          />
          <textarea
            name="message"
            rows="7"
            placeholder={`Your Message`}
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
