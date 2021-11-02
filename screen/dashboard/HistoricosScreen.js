import React from "react";
import {
  Box,
  IconButton,
  Heading,
  HStack,
  Spacer,
  Icon,
  Divider,
} from "native-base";
import HistoricalList from "./components/HistoricalList";
import { Ionicons } from "@expo/vector-icons";

import ultimosScanner from "../../api/data";

const HistoricosScreen = () => {
  const [view, setView] = React.useState(false);

  return (
    <Box top="5">
      <HistoricalList view={false} data={ultimosScanner} />
    </Box>
  );
};

export default HistoricosScreen;
