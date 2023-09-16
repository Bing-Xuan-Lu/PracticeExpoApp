import { View, Text, Alert, TouchableOpacity } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { SafeAreaView } from "react-native-safe-area-context";

export default function MemberScreen() {
  const TopTab = createMaterialTopTabNavigator();
  return (
    <SafeAreaView className="flex-1">
      <TopTab.Navigator
        initialRouteName="System"
        screenOptions={{
          tabBarLabelStyle: { fontSize: 16 },
          tabBarStyle: { backgroundColor: "white" },
        }}
      >
        <TopTab.Screen
          name="System"
          component={SystemScreen}
          options={{ title: `系統部門` }}
        />
        <TopTab.Screen
          name="Business"
          component={BusinessScreen}
          options={{ title: `業務部門` }}
        />
      </TopTab.Navigator>
    </SafeAreaView>
  );
}
function SystemScreen() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text>系統部門人員清單</Text>
    </View>
  );
}

function BusinessScreen() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text>業務部門人員清單</Text>
    </View>
  );
}
