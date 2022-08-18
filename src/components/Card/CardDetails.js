import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const CardDetails = () => {
  const key = "f25c41b6441745159634c8d95ad643ba";

  let { id } = useParams();

  let [fetchedData, updateFetchedData] = useState([]);

  function objToQueryString(obj) {
    const keyValuePairs = [];
    for (const key in obj) {
      keyValuePairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
    }
    return keyValuePairs.join('&');
  }

  const queryString = objToQueryString({
      includeNutrition: true,
      apiKey:key
  });

  let api = "https://api.spoonacular.com/recipes/"+id+"/information?"+queryString;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      console.log(data)
      updateFetchedData(data);
    })();
  }, [api]);


  return (
    <div className="container d-flex justify-content-center mb-5">
      <div className="d-flex flex-column gap-3">
        <h1 className="text-center"></h1>

        <img className="img-fluid"  alt="" />
       
        <div className="content">
          <div className="">
            <span className="fw-bold">Gender : </span>
            
          </div>
          <div className="">
            <span className="fw-bold">Location: </span>
            
          </div>
          <div className="">
            <span className="fw-bold">Origin: </span>
            
          </div>
          <div className="">
            <span className="fw-bold">Species: </span>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;