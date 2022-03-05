import React from "react";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.webp";
import IMG3 from "../../assets/portfolio3.webp";
import IMG4 from "../../assets/portfolio4.webp";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.webp";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="projects thumbnails" />
          </div>
          <h3>This is a Portfolio Item Title</h3>
          <a
            href="https://github.com/"
            className="btn"
            target={"_blank"}
            rel="noreferrer"
          >
            Github
          </a>
          <a
            href="https://github.com/"
            className="btn btn-primary"
            target={"_blank"}
            rel="noreferrer"
          >
            Live Demo
          </a>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="projects thumbnails" />
          </div>
          <h3>This is a Portfolio Item Title</h3>
          <a
            href="https://github.com/"
            className="btn"
            target={"_blank"}
            rel="noreferrer"
          >
            Github
          </a>
          <a
            href="https://github.com/"
            className="btn btn-primary"
            target={"_blank"}
            rel="noreferrer"
          >
            Live Demo
          </a>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="projects thumbnails" />
          </div>
          <h3>This is a Portfolio Item Title</h3>
          <a
            href="https://github.com/"
            className="btn"
            target={"_blank"}
            rel="noreferrer"
          >
            Github
          </a>
          <a
            href="https://github.com/"
            className="btn btn-primary"
            target={"_blank"}
            rel="noreferrer"
          >
            Live Demo
          </a>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG4} alt="projects thumbnails" />
          </div>
          <h3>This is a Portfolio Item Title</h3>
          <a
            href="https://github.com/"
            className="btn"
            target={"_blank"}
            rel="noreferrer"
          >
            Github
          </a>
          <a
            href="https://github.com/"
            className="btn btn-primary"
            target={"_blank"}
            rel="noreferrer"
          >
            Live Demo
          </a>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG5} alt="projects thumbnails" />
          </div>
          <h3>This is a Portfolio Item Title</h3>
          <a
            href="https://github.com/"
            className="btn"
            target={"_blank"}
            rel="noreferrer"
          >
            Github
          </a>
          <a
            href="https://github.com/"
            className="btn btn-primary"
            target={"_blank"}
            rel="noreferrer"
          >
            Live Demo
          </a>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG6} alt="projects thumbnails" />
          </div>
          <h3>This is a Portfolio Item Title</h3>
          <a
            href="https://github.com/"
            className="btn"
            target={"_blank"}
            rel="noreferrer"
          >
            Github
          </a>
          <a
            href="https://github.com/"
            className="btn btn-primary"
            target={"_blank"}
            rel="noreferrer"
          >
            Live Demo
          </a>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
