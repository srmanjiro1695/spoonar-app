import React from "react";
import FilterBTN from "../FilterBTN";

const MealType = ({ updateMealType }) => {
  let mealTypes = [
    "main course",
    "side dish",
    "dessert",
    "appetizer",
    "salad",
    "bread",
    "breakfast",
    "soup",
    "beverage",
    "sauce",
    "marinade",
    "fingerfood",
    "snack",
    "drink"
  ];

  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingFour">
        <button
          className="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseFour"
          aria-expanded="true"
          aria-controls="collapseFour"
        >
          MealType
        </button>
      </h2>
      <div
        id="collapseFour"
        className="accordion-collapse collapse show"
        aria-labelledby="headingFour"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body d-flex flex-wrap gap-3">
          {mealTypes.map((item, index) => (
            <FilterBTN
              key={index}
              index={index}
              name="MealType"
              task={updateMealType}
              input={item}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MealType;