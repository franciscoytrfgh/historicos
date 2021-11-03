import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";

import Login from "./screen/login/Login";
import Dashboard from "./screen/dashboard/Dashboard";
import AppContext from "./components/AppContext";

export default function App() {
  const [isLogin, setLogin] = React.useState(false);
  const [user, setUser] = React.useState();

  const variableGlobales = {
    isLogin: isLogin,
    setLogin: setLogin,
    user: user,
    setUser: setUser,
  };

  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <AppContext.Provider value={variableGlobales}>
          {!isLogin ? <Login /> : <Dashboard />}
        </AppContext.Provider>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
