import React from "react";
import FilterBTN from "../FilterBTN";

const Cuisine = ({ updateCuisine }) => {
  let cuisines = [
    "African",
    "American",
    "British",
    "Cajun",
    "Caribbean",
    "Chinese",
    "Eastern European",
    "European",
    "French",
    "German",
    "Greek",
    "Indian",
    "Irish",
    "Italian",
    "Japanese",
    "Jewish",
    "Korean",
    "Latin American", 
    "Mediterranean",
    "Mexican",
    "Middle Eastern", 
    "Nordic",
    "Southern",
    "Spanish",
    "Thai",
    "Vietnamese"
  ];

  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingThree">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseThree"
          aria-expanded="false"
          aria-controls="collapseThree"
        >
          Cusine
        </button>
      </h2>
      <div
        id="collapseThree"
        className="accordion-collapse collapse"
        aria-labelledby="headingThree"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body d-flex flex-wrap gap-3">
          {cuisines.map((items, index) => {
            return (
              <FilterBTN
                name="cusine"
                index={index}
                key={index}
                task={updateCuisine}
                input={items}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Cuisine;