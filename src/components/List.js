import React from "react";

import { ListContainer } from "./styles/listStyles";

import ListItem from "./ListItem";

const List = ({ data, selectedFilter }) => {
  //if selectedFilter is passed we filter data
  if (selectedFilter) {
    data = data.filter(each => each.tag === selectedFilter);
  }
  return (
    <ListContainer>
      {data.map((each, id) => (
        <ListItem key={each.tag + id} item={each} />
      ))}
    </ListContainer>
  );
};

export default List;
