import {
    createBottomTabNavigator,
    BottomTabNavigationProp,
  } from "@react-navigation/bottom-tabs";
import { Home } from "@screens/Home";
import { Profile } from "@screens/Profile";
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Platform } from "react-native";


type AppRoutes = {
    home: undefined;
    profile: undefined;
  };

  export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>;

  const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>();

export function AppRoutes() {
    return (
        <Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveTintColor: 'green',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: {
            backgroundColor: 'gray',
            borderTopWidth: 0,
            height: Platform.OS === "android" ? "auto" : 96,
            paddingBottom: 10,
            paddingTop: 6,
          },
        }}
      >
        <Screen
          name="home"
          component={Home}
          options={{
            tabBarIcon: ({ color }: any) => (
              <AntDesign name="home" fill={color} width={20} height={20} />
            ),
          }}
        />

<Screen
          name="profile"
          component={Profile}
          options={{
            tabBarIcon: ({ color }: any) => (
              <MaterialCommunityIcons fill={color} name="face-man-profile"  width={20} height={20} />
            ),
          }}
        />
        </Navigator>
    )
}