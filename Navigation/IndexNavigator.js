import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MemberScreen from "../src/Home/MemberScreen";
import SettingScreen from "../src/Home/SettingScreen";
import IndexScreen from "../src/Home/IndexScreen";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

export default function IndexNavigator() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        // tabBarActiveTintColor: "tomato",
        // tabBarInactiveTintColor: "gray",
        tabBarStyle: { height: 60, paddingBottom: 10 },
      })}
    >
      <Tab.Screen
        name="Index"
        component={IndexScreen}
        options={{
          title: "首頁",
          tabBarIcon: ({ focused, color, size }) =>
            !focused ? (
              <Ionicons name="home" size={size} color={color} />
            ) : (
              <Ionicons name="home-outline" size={size} color={color} />
            ),
          unmountOnBlur: true,
        }}
      />
      <Tab.Screen
        name="Member"
        component={MemberScreen}
        options={{
          title: "會員管理",
          unmountOnBlur: true,
          tabBarIcon: ({ focused, color, size }) =>
            !focused ? (
              <MaterialIcons name="people" size={size} color={color} />
            ) : (
              <MaterialIcons name="people-outline" size={size} color={color} />
            ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={SettingScreen}
        options={{
          title: "功能表",
          unmountOnBlur: true,
          tabBarIcon: ({ focused, color, size }) =>
            !focused ? (
              <Ionicons name="md-settings" size={size} color={color} />
            ) : (
              <Ionicons name="md-settings-outline" size={size} color={color} />
            ),
        }}
      />
    </Tab.Navigator>
  );
}
