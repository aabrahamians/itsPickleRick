import React, { useEffect, useReducer } from "react";
import axios from "axios";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faMapMarkerAlt,
  faMale,
  faQuoteRight
} from "@fortawesome/free-solid-svg-icons";

//reducer
import reducer from "./reducer";

//components
import Loading from "./components/Loading";
import FilterBar from "./components/FilterBar";
import List from "./components/List";

//css
import "./styles.css";

//setup for font-awesome icons
library.add(faMapMarkerAlt, faQuoteRight, faMale);

export default function App() {
  // initialize state
  let [state, dispatch] = useReducer(reducer, {
    data: null,
    filterTypes: null,
    selectedFilter: null
  });
  // deconstruct needed keys from state
  let { data, filterTypes, selectedFilter } = state;

  // pass empty array as the second argument so that the effect only fires once.
  useEffect(() => {
    axios
      .get(
        //using a cors proxy
        "https://cors-anywhere.herokuapp.com/https://sbt-tech-exercise-content.s3-us-west-1.amazonaws.com/content.json"
      )
      .then(response => {
        dispatch({ type: "SET_DATA", payload: response.data.content });
      });
  }, []);

  // if no data return loading
  if (data === null) return <Loading />;
  return (
    <>
      <FilterBar
        filterTypes={filterTypes}
        dispatch={dispatch}
        selectedFilter={selectedFilter}
      />
      <List data={data} selectedFilter={selectedFilter} />
    </>
  );
}
