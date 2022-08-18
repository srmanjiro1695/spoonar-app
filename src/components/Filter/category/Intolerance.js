import React from "react";
import FilterBTN from "../FilterBTN";

const Intolerance = ({ updateIntolerance }) => {
  let intolerances = [
    "Dairy",
    "Egg",
    "Gluten",
    "Grain",
    "Peanut",
    "Seafood",
    "Sesame",
    "Shellfish",
    "Soy",
    "Sulfite",
    "Tree Nut", 
    "Wheat"
  ];

  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingOne">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseOne"
          aria-expanded="true"
          aria-controls="collapseOne"
        >
          Intolerance
        </button>
      </h2>
      <div
        id="collapseOne"
        className="accordion-collapse collapse"
        aria-labelledby="headingOne"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body d-flex flex-wrap gap-3">
          {intolerances.map((item, index) => (
            <FilterBTN
              key={index}
              index={index}
              name="Intolerance"
              task={updateIntolerance}
              input={item}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Intolerance;