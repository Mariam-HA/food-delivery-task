import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import ROUTES from ".";
import Cart from "../screens/Cart";
import Home from "../screens/Home";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import Profile from "../screens/Profile";
import LottiAnimations from "../screens/LottiAnimations";

const Tab = createMaterialBottomTabNavigator();

function MaterialDesign() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#e91e63"
      inactiveColor="#3e2465"
      barStyle={{ backgroundColor: "pink", height: 80 }}
      shifting={true}
    >
      <Tab.Screen
        name={ROUTES.HEDERROUTES.HOME}
        component={Home}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Feather name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name={ROUTES.HEDERROUTES.CART}
        component={LottiAnimations}
        options={{
          title: "Add to cart",
          tabBarIcon: ({ size, color }) => (
            <AntDesign name="shoppingcart" size={26} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={ROUTES.HEDERROUTES.PROFILE}
        component={Profile}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="person-circle-outline" size={26} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
export default MaterialDesign;
