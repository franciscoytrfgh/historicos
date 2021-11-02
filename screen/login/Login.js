import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "./LoginScreen";
import SingupScreen from "./SingupScreen";
import RecoveryPassScreen from "./RecoveryPassScreen";

const Stack = createNativeStackNavigator();

const Login = () => {
  React.useEffect(() => {
    console.log("El login aparece");
    return () => {
      console.log("El login se fue...");
    };
  });

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="loginScreen" component={LoginScreen} />
      <Stack.Screen name="singupScreen" component={SingupScreen} />
      <Stack.Screen name="recoveryPassScreen" component={RecoveryPassScreen} />
    </Stack.Navigator>
  );
};

export default Login;
