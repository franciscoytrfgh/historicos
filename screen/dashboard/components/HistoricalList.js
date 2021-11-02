import React from "react";
import { FlatList } from "native-base";
import Historical from "./Historical";

const HistoricalList = ({ view, data }) => {
  return (
    <FlatList
      data={data}
      renderItem={(i) => {
        return (
          <Historical
            item={i.item}
            color={i.index % 2 == 0 ? "white" : "muted.200"}
            view={view}
          />
        );
      }}
      keyExtractor={(item) => item.id}
    />
  );
};

export default HistoricalList;
