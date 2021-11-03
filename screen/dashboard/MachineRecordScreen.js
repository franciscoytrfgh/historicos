import React from "react";
import ListMachine from "./components/ListMachine";

import ultimosScanner from "../../api/data";
import { Box } from "native-base";

const MachineRecordScreen = () => {
  const [view, setView] = React.useState(false);

  return (
    <Box mt="5">
      <ListMachine view={view} data={ultimosScanner} />
    </Box>
  );
};

export default MachineRecordScreen;
