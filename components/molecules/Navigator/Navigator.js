import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";

import { colorPrimary } from "../../../utils/colors";
import CreateDeck from "../../pages/CreateDeck/CreateDeck";
import DeckList from "../DeckList/DeckList";

const Tab = createBottomTabNavigator();

class Navigator extends React.Component {
  render() {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName = "md-add-circle";

            if (route.name === "All decks") {
              iconName = "md-albums";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          }
        })}
        tabBarOptions={{
          activeTintColor: colorPrimary,
          inactiveTintColor: "gray"
        }}
        initialRouteName="DeckList"
      >
        <Tab.Screen name="All decks" component={DeckList} />
        <Tab.Screen name="Create new deck" component={CreateDeck} />
      </Tab.Navigator>
    );
  }
}

export default Navigator;