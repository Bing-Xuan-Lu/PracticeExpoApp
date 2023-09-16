import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import AuditState from "./Context/AuthState";
import AppNavigator from "./Navigation/AppNavigator";
import WebView from "react-native-webview";
export default function App() {
  return (
    <SafeAreaView className="flex-1">
      <StatusBar style="auto" />
      <WebView
        className="flex-1 mt-6"
        source={{
          uri: "https://map.tgos.tw/TGOSCloudMap",
        }}
      />

      {/* <AuditState>
        <AppNavigator />
      </AuditState> */}
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
