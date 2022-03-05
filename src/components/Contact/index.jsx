import React from "react";
import { MdOutlineMail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Torch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMail />
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
            <RiMessengerLine />
            <h4>Messenger</h4>
            <h5>dummymessenger</h5>
            <a href="https://m.me/" target={"_blank"} rel="noreferrer">
              Send a Message
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp />
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
        <form action=""></form>
      </div>
    </section>
  );
};

export default Contact;
