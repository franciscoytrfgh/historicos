import React from "react";
import ListMachine from "./components/ListMachine";

import ultimosScanner from "../../api/data";
import { Box, Button } from "native-base";

const MachineRecordScreen = ({ navigation }) => {
  const [view, setView] = React.useState(false);

  navigation.setOptions({
    headerRight: () => (
      <Button
        title="Info"
        color="#fff"
        right="2"
        onPress={() => {
          setView(!view);
        }}
      >
        ORDEN
      </Button>
    ),
  });

  return (
    <Box>
      <ListMachine view={view} data={ultimosScanner} />
    </Box>
  );
};

export default MachineRecordScreen;
