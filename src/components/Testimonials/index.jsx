import React from "react";
import "./styles.css";
// Sample Clients images
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

// Testimonials Data
const data = [
  {
    avatar: AVTR1,
    name: "Tina Snow",
    review: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error non
    harum vel, iusto, laboriosam dolor autem aliquid commodi tempore aut
    velit, fugiat consequatur fuga sunt earum id sapiente consequuntur
    neque.`,
  },
  {
    avatar: AVTR4,
    name: "Shatta Wale",
    review: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error non
    harum vel, iusto, laboriosam dolor autem aliquid commodi tempore aut
    velit, fugiat consequatur fuga sunt earum id sapiente consequuntur
    neque.`,
  },
  {
    avatar: AVTR3,
    name: "Kwame Despite",
    review: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error non
    harum vel, iusto, laboriosam dolor autem aliquid commodi tempore aut
    velit, fugiat consequatur fuga sunt earum id sapiente consequuntur
    neque.`,
  },
  {
    avatar: AVTR2,
    name: "Nana Ama McBrown",
    review: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error non
    harum vel, iusto, laboriosam dolor autem aliquid commodi tempore aut
    velit, fugiat consequatur fuga sunt earum id sapiente consequuntur
    neque.`,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <div className="container testimonials__container">
        {data.map(({ avatar, name, review }, index) => {
          return (
            <article key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt={name} />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Testimonials;
