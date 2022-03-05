import React from "react";
import "./styles.css";
// Sample Clients images
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <div className="container testimonials__container">
        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="Avatar One" />
            <h5 className="client__name">Liza Scout</h5>
            <small className="client__review">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error
              non harum vel, iusto, laboriosam dolor autem aliquid commodi
              tempore aut velit, fugiat consequatur fuga sunt earum id sapiente
              consequuntur neque.
            </small>
          </div>
        </article>

        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="Avatar One" />
            <h5 className="client__name">Liza Scout</h5>
            <small className="client__review">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error
              non harum vel, iusto, laboriosam dolor autem aliquid commodi
              tempore aut velit, fugiat consequatur fuga sunt earum id sapiente
              consequuntur neque.
            </small>
          </div>
        </article>

        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="Avatar One" />
            <h5 className="client__name">Liza Scout</h5>
            <small className="client__review">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error
              non harum vel, iusto, laboriosam dolor autem aliquid commodi
              tempore aut velit, fugiat consequatur fuga sunt earum id sapiente
              consequuntur neque.
            </small>
          </div>
        </article>

        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="Avatar One" />
            <h5 className="client__name">Liza Scout</h5>
            <small className="client__review">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error
              non harum vel, iusto, laboriosam dolor autem aliquid commodi
              tempore aut velit, fugiat consequatur fuga sunt earum id sapiente
              consequuntur neque.
            </small>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Testimonials;
