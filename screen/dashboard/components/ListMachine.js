import React from "react";
import { FlatList } from "native-base";
import ItemMachine from "./ItemMachine";

const ListMachine = ({ view, data }) => {
  return (
    <FlatList
      p="2"
      w="98%"
      alignSelf="center"
      data={data}
      renderItem={(i) => {
        return (
          <ItemMachine
            item={i.item}
            color={i.index % 2 == 0 ? "#222" : "muted.200"}
            view={view}
          />
        );
      }}
      keyExtractor={(item) => item.id}
    />
  );
};

export default ListMachine;
