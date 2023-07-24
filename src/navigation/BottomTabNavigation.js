import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Cart from "../screens/Cart";
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import ROUTES from ".";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

function BottomTabNavigation() {
  return (
    <Tab.Navigator
      //   tabBarOptions={{
      // activeTintColor: "tomato",
      // inactiveTintColor: "gray",
      screenOptions={{
        tabBarActiveTintColor: "#e91e63",
      }}
    >
      <Tab.Screen
        name={ROUTES.HEDERROUTES.HOME}
        component={Home}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Feather name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name={ROUTES.HEDERROUTES.CART}
        component={Cart}
        options={{
          title: "Add to cart",
          tabBarIcon: ({ size, color }) => (
            <AntDesign name="shoppingcart" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={ROUTES.HEDERROUTES.PROFILE}
        component={Profile}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="person-circle-outline" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
export default BottomTabNavigation;
