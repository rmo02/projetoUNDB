import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { AppRoutes } from "./app.routes";
import { View } from "react-native";
import { AuthRoutes } from "./auth.routes";

export function Routes() {
  return (
    <View>
      <NavigationContainer>
        <AuthRoutes />
      </NavigationContainer>
    </View>
  );
}
