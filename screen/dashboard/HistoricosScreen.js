import React from "react";
import HistoricalList from "./components/HistoricalList";

import ultimosScanner from "../../api/data";
import { Box } from "native-base";

const HistoricosScreen = () => {
  const [view, setView] = React.useState(false);

  return (
    <Box mt="5">
      <HistoricalList view={view} data={ultimosScanner} />
    </Box>
  );
};

export default HistoricosScreen;
