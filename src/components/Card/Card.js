import React from "react";
import { Link } from "react-router-dom";
import styles from "./Card.module.scss";
import CardDetails from "./CardDetails";

const Card = ({ page, results }) => {
  let display;

  const Badge = ({textBadge}) => {
    return (
        <>
          <div className={`${styles.badgeFont} badge bg-success`}>
            {textBadge}
          </div>
        </>
    );
  }


  if (results) {
    display = results.map((x) => {
      let { id, image, title, vegan, vegetarian, veryHealthy, veryPopular, diets, dishTypes, glutenFree, healthScore, likes, summary, cheap } = x;

      return (
        <Link
          style={{ textDecoration: "none" }}
          to={`${page}${id}`}
          key={id}
          className="col-lg-4 col-md-6 col-sm-6 col-12 mb-4 position-relative text-dark"
        >
          <div
            className={`${styles.card} d-flex flex-column justify-content-center`}
          >
            <img className={`${styles.img} img-fluid`} src={image} alt="" />
            <div className={`${styles.content}`}>
              <div className="fs-5 fw-bold mb-0">{title}</div>

              <div className="fs-5 fw-bold mb-2">
                { vegan ? <Badge textBadge="Vegano" /> : null }
                { vegetarian ? <Badge textBadge="Vegetariano" /> : null }
                { glutenFree ? <Badge textBadge="Gluten Free" /> : null }
                { veryHealthy ? <Badge textBadge="Sano" /> : null }
                { cheap ? <Badge textBadge="Barato" /> : null }
              </div>

              <div className="">
                <div className={`${styles.fs8} fw-normal`}  dangerouslySetInnerHTML={{ __html: summary }} ></div>
              </div>
            </div>
          </div>

          <div
            className={`${styles.heart} position-absolute badge bg-primary`}>
            <i className={`${styles.iconFont} fa-solid fa-thumbs-up`}></i>
            {likes}
          </div>

          <div
            className={`${styles.pulse} position-absolute badge bg-success`}>
            <i className={`${styles.iconFont} fa-solid fa-heart-pulse`}></i>
            {healthScore}
          </div>

        </Link>
      );
    });
  } else {
    display = "No Recipes Found :/";
  }

  return <>{display}</>;
};

export default Card;