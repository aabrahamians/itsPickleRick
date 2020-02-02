import React from "react";

import { ItemContainer } from "./styles/listStyles";
import Icon from "./Icon";

const ListItem = ({ item }) => {
  return (
    <ItemContainer>
      <p className="tags">
        <Icon each={item.tag} />
      </p>
      <p className="content">{item.content}</p>
    </ItemContainer>
  );
};

export default ListItem;
