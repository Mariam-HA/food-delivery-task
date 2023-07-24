import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ROUTES from ".";
import Login from "../screens/Login";
import Register from "../screens/Register";

const AuthNavigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name={ROUTES.AUTHROUTES.LOGIN} component={Login} />
      <Stack.Screen name={ROUTES.AUTHROUTES.REGISTER} component={Register} />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
