import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./Card.module.scss";

const CardDetails = () => {
  const key = "f25c41b6441745159634c8d95ad643ba";

  let { id } = useParams();

  let [fetchedData, updateFetchedData] = useState([]);
  let [widgetData, updateWidgetData] = useState([]);
  let { aggregateLikes , analyzedInstructions , cheap , cookingMinutes , creditsText, cuisines , dairyFree , diets , dishTypes , extendedIngredients , gaps , glutenFree , healthScore, image , instructions , license, nutrition , occasions , preparationMinutes , pricePerServing , readyInMinutes , servings , sourceName , summary, sustainable , title , vegan , vegetarian , veryHealthy , veryPopular , winePairing } = fetchedData

  function objToQueryString(obj) {
    const keyValuePairs = [];
    for (const key in obj) {
      keyValuePairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
    }
    return keyValuePairs.join('&');
  }

  const Badge = ({textBadge}) => {
    return (
        <>
          <div className={`${styles.badgeFont} badge bg-success`}>
            {textBadge}
          </div>
        </>
    );
  }


  const queryString = objToQueryString({
      includeNutrition: true,
      apiKey:key
  });

  let api = "https://api.spoonacular.com/recipes/"+id+"/information?"+queryString;
  let apiWidget = "https://api.spoonacular.com/recipes/"+id+"/nutritionLabel.png?"+queryString;
  let apiNutritionWidget = "https://api.spoonacular.com/recipes/"+id+"/nutritionWidget.png?"+queryString;
  let apiTasteWidget = "https://api.spoonacular.com/recipes/"+id+"/tasteWidget.png?"+queryString;
  let apiEquipmentWidget = "https://api.spoonacular.com/recipes/"+id+"/equipmentWidget.png?"+queryString;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);


  return (
    <div className="container d-flex justify-content-center mb-5">
      <div className="d-flex flex-column gap-3">
        <h1 className="text-center">{title}</h1>

        <div className="content">
          <img className="img-fluid" src={image}  alt="" />

          <div className="fs-5 fw-bold mb-2">
            { vegan ? <Badge textBadge="Vegano" /> : null }
            { vegetarian ? <Badge textBadge="Vegetariano" /> : null }
            { glutenFree ? <Badge textBadge="Gluten Free" /> : null }
            { veryHealthy ? <Badge textBadge="Sano" /> : null }
            { cheap ? <Badge textBadge="Barato" /> : null }

            <div
              className={`${styles.pulseInto}  badge bg-success`}>
              <i className={`${styles.iconFont} fa-solid fa-heart-pulse`}></i>
              {healthScore}
            </div>
          </div>
          <div className={`fs-6 fw-normal mt-3 mb-3`}  dangerouslySetInnerHTML={{ __html: summary }} ></div>

          <div className="">
            <span className="fs-4 fw-bold">Cuisines: </span>
            <span className="fs-6"> {cuisines != undefined ? cuisines.join(', ') : null } </span>         
          </div>

          <div className="">
            <span className="fs-4 fw-bold">Diets: </span>
            <span className="fs-6"> {diets != undefined ? diets.join(', ') : null} </span>
          </div>

          <div className="">
            <span className="fs-4 fw-bold">Instructions </span>
            <div className={`fs-6 fw-normal mt-3 mb-3`}  dangerouslySetInnerHTML={{ __html: instructions }} ></div>
          </div>

          <div className="row">
            <div className="col-lg-3">
              <img className="img-fluid" src={apiWidget}  alt="" />
            </div>
            <div className="col-lg-9">
              <img className="img-fluid" src={apiNutritionWidget}  alt="" />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;