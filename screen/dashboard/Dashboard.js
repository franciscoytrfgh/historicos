import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import MachineRecordScreen from "./MachineRecordScreen";
import UserScreen from "./UserScreen";
import ScanScreen from "./ScanScreen";

const Stack = createBottomTabNavigator();

const TMP = () => {
  return null;
};

const Dashboard = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        options={{
          tabBarLabel: "Ultimos escaners",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="history" color={color} size={26} />
          ),
        }}
        name="historicosScreen"
        component={MachineRecordScreen}
      />
      <Stack.Screen
        options={{
          tabBarLabel: "Scan",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="qrcode-scan"
              color={color}
              size={26}
            />
          ),
        }}
        name="a"
        component={ScanScreen}
      />
      <Stack.Screen
        options={{
          tabBarLabel: "Mi perfil",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
        name="b"
        component={UserScreen}
      />
    </Stack.Navigator>
  );
};

export default Dashboard;
