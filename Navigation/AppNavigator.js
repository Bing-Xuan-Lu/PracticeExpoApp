import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { AuthContext } from "../Context/AuthState";
import LoginScreen from "../src/Home/LoginScreen";
import IndexScreen from "../src/Home/IndexScreen";
import IndexNavigator from "../Navigation/IndexNavigator";

export default function AppNavigator() {
  const RootStack = createStackNavigator();
  const { isLogin } = useContext(AuthContext);
  console.log(isLogin);
  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Login"
      >
        {isLogin ? (
          <RootStack.Screen
            name="Index"
            component={IndexNavigator}
            options={{ title: "首頁" }}
          />
        ) : (
          <RootStack.Screen
            name="Login"
            component={LoginScreen}
            options={{ title: "登入" }}
          />
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
