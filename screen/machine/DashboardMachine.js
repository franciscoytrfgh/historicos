import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import InfoMachine from "./InfoMachine";
import ListHitorical from "./ListHistorical";
import NewRecordMachine from "./NewRecordMachine";

const Stack = createBottomTabNavigator();

function TMP() {
  return null;
}

const DashboardMachine = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: false,
          tabBarLabel: "Informacion",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="information-outline"
              color={color}
              size={26}
            />
          ),
        }}
        name="infoMachine"
        component={InfoMachine}
      />
      <Stack.Screen
        options={{
          tabBarLabel: "Registros",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="history" color={color} size={26} />
          ),
        }}
        name="Registros"
        component={ListHitorical}
      />
      <Stack.Screen
        options={{
          tabBarLabel: "Nuevo historico",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="playlist-plus"
              color={color}
              size={26}
            />
          ),
        }}
        name="newRecord"
        component={NewRecordMachine}
      />
    </Stack.Navigator>
  );
};

export default DashboardMachine;
