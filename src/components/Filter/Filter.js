import React from "react";
import Cuisine from "./category/Cuisine";
import Diet from "./category/Diet";
/*
import Intolerance from "./category/Intolerance";
import MealType from "./category/MealType";
*/

const Filter = ({
  updateCuisine,
  updateDiet,
  updateIntolerance,
  updateMealType,
}) => {

  let clear = () => {
    updateCuisine("");
    updateDiet("");
    updateIntolerance("");
    updateMealType("");
    window.location.reload(false);
  };

  return (
    <div className="col-lg-3 col-12 mb-5">
      <div className="text-center fw-bold fs-4 mb-2">Filters</div>
      <div
        style={{ cursor: "pointer" }}
        onClick={clear}
        className="text-primary text-decoration-underline text-center mb-3"
      >
        Clear Filters
      </div>
      <div className="accordion" id="accordionExample">
        <Cuisine
          updateCuisine={updateCuisine}
        />
        <Diet
          updateDiet={updateDiet}
        />
        
      </div>
    </div>
  );
};

export default Filter;