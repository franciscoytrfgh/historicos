import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Dashboard from "./dashboard/Dashboard";
import DashboardMachine from "./machine/DashboardMachine";

const Stack = createNativeStackNavigator();

function Main() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Main" component={Dashboard} />
      <Stack.Screen name="Machine" component={DashboardMachine} />
    </Stack.Navigator>
  );
}

export default Main;
