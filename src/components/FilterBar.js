import React from "react";

import FilterButtonContainer from "./styles/filterBarStyles";
import Icon from "./Icon";

const FilterBar = ({ filterTypes, selectedFilter, dispatch }) => {
  // click handler for filter buttons... returns null if chosen filter === selectedFilter
  const setFilter = each => {
    let selected = each === selectedFilter ? null : each;
    dispatch({ type: "SET_FILTER", payload: { selectedFilter: selected } });
  };
  return (
    <FilterButtonContainer>
      {filterTypes.map((each, id) => {
        //checks if button is selected filter.
        let isSelected = each === selectedFilter;
        return (
          <div
            key={each + id}
            className={isSelected ? "selected" : null}
            onClick={() => setFilter(each)}
          >
            <span>
              {String(each).toUpperCase()} <Icon each={each} />
            </span>
          </div>
        );
      })}
    </FilterButtonContainer>
  );
};

export default FilterBar;
