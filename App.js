import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import AuditState from "./Context/AuthState";
import AppNavigator from "./Navigation/AppNavigator";
import WebView from "react-native-webview";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import { Entypo } from "@expo/vector-icons";
import RNPickerSelect from "react-native-picker-select";

export default function App() {
  const items = [
    { label: "選項1", value: "option1" },
    { label: "選項2", value: "option2" },
    { label: "選項3", value: "option3" },
  ];
  return (
    <SafeAreaView className="flex-1">
      <StatusBar style="auto" />
      {/* <View className="mt-5">
        <RNPickerSelect
          style={StyleSheet.create({
            inputIOSContainer: {
              paddingVertical: 15,
              paddingHorizontal: 10,
            },
          })}
          placeholder={{ label: "請選擇", value: "", color: "#9EA0A4" }}
          items={items}
          value="option1"
          onValueChange={(value) => console.log(value)}
        />
      </View> */}
      <AuditState>
        <AppNavigator />
      </AuditState>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});