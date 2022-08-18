import React from "react";
import FilterBTN from "../FilterBTN";

const Diet = ({ updateDiet }) => {
  let species = [
    "gluten Free",
    "ketogenic",
    "vegetarian",
    "lacto-Vegetarian",
    "ovo-Vegetarian",
    "vegan",
    "pescetarian",
    "paleo",
    "primal",
    "Low FODMAP",
    "Whole30",
  ];
  return (
    <div className="accordion-item ">
      <h2 className="accordion-header" id="headingTwo">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseTwo"
          aria-expanded="false"
          aria-controls="collapseTwo"
        >
          Diet
        </button>
      </h2>
      <div
        id="collapseTwo"
        className="accordion-collapse collapse"
        aria-labelledby="headingTwo"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body d-flex flex-wrap gap-3">
          {species.map((item, index) => {
            return (
              <FilterBTN
                name="Diet"
                index={index}
                key={index}
                task={updateDiet}
                input={item}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Diet;