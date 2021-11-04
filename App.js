import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";

import Login from "./screen/login/Login";
import AppContext from "./components/AppContext";
import Main from "./screen/Main";

export default function App() {
  const [isLogin, setLogin] = React.useState(false);
  const [idMachine, setIdMachine] = React.useState(0);

  const variableGlobales = {
    isLogin: isLogin,
    setLogin: setLogin,
    idMachine: idMachine,
    setIdMachine: setIdMachine,
  };

  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <AppContext.Provider value={variableGlobales}>
          {!isLogin ? <Login /> : <Main />}
        </AppContext.Provider>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
