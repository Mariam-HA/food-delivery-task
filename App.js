import { NavigationContainer } from "@react-navigation/native";
import RootNavigation from "./src/navigation/RootNavigation";
import AuthNavigation from "./src/navigation/AuthNavigation";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { getToken } from "./src/api/auth/storage";
import UserContext from "./src/context/UserContext";
import { SafeAreaView, StyleSheet } from "react-native";
import "react-native-gesture-handler";

export default function App() {
  const [user, setUser] = useState(false);

  const checkToken = async () => {
    const token = await getToken();
    if (token) {
      setUser(true);
    }
  };
  console.log(user);

  useEffect(() => {
    checkToken();
  }, []);

  return (
    <QueryClientProvider client={new QueryClient()}>
      <UserContext.Provider value={{ user, setUser }}>
        <NavigationContainer>
          {user ? <RootNavigation /> : <AuthNavigation />}
        </NavigationContainer>
      </UserContext.Provider>
    </QueryClientProvider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "pink",
  },
});
