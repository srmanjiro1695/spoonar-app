import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import React, {useState , useEffect} from "react";

import Search from "./components/Search/Search";
import Card from "./components/Card/Card";
import Pagination from "./components/Pagination/Pagination";

/*
import Filter from "./components/Filter/Filter";
*/


function App(){
	return(
		<>
			<Home />
		</>
	);
}

const Home = () =>{
	const key = "f25c41b6441745159634c8d95ad643ba";

	let [pageNumber, updatePageNumber] = useState(1);
	let [fetchedData, updateFetchedData] = useState([]);
	let [search, setSearch] = useState("pasta");
	let { totalResults, results, number, offset} = fetchedData;

	function objToQueryString(obj) {
	  const keyValuePairs = [];
	  for (const key in obj) {
	    keyValuePairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
	  }
	  return keyValuePairs.join('&');
	}

	const queryString = objToQueryString({
	    query: search,
	    fillIngredients: true,
	    addRecipeInformation: true,
	    number: 50,
	    apiKey:key
	});

	let api_call = "https://api.spoonacular.com/recipes/complexSearch?"+queryString;

	useEffect(() => {
		(
			async function () {
				let data = await fetch(api_call).then((res) => res.json());
				updateFetchedData(data)
			}
		)(); 
	},[api_call]);

	return (
		<div className="App">
	      <h1 className="text-center mb-3">Recipes</h1>
	      <Search setSearch={setSearch} updatePageNumber={updatePageNumber} />
	      <div className="container">
	        <div className="row">
	          
	          <div className="col-lg-12 col-12">
	            <div className="row">
	              <Card page="/" results={results} />
	            </div>
	          </div>
	        </div>
	      </div>

	    </div>
	);
}

export default App;