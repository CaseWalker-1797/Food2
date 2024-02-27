import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-paper";
import HomeScreen from "../screens/appStack/HomeScreen";
import PuddingScreen from "../screens/appStack/PuddingScreen";
import { accentColor, inactiveColor2 } from "../style/utilities/Colors";
import { NavigationContainer } from "@react-navigation/native";
import DessertScreen from "../screens/appStack/DessertScreen";

const Tab = createBottomTabNavigator();

const Navigation = ({ navigation }) => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Pudding"
        screenOptions={{
          tabBarActiveTintColor: accentColor,
          tabBarInactiveTintColor: inactiveColor2,
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <Icon source="home" color={color} size={28} />
            ),
          }}
        />
        <Tab.Screen
          name="Dessert"
          component={DessertScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <Icon source="ice-cream" color={color} size={28} />
            ),
          }}
        />
        <Tab.Screen
          name="Pudding"
          component={PuddingScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <Icon source="heart" color={color} size={28} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
