import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import AuditState from "./Context/AuthState";
import AppNavigator from "./Navigation/AppNavigator";

export default function App() {
  return (
    <SafeAreaView className="flex-1">
      <StatusBar style="auto" />
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
