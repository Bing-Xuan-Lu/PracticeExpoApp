import { View, Text, Alert, TouchableOpacity } from "react-native";
import { AuthContext } from "../../Context/AuthState";
import { useContext, useState } from "react";


export default function IndexScreen({ navigation }) {
  const { onLogOut, userInfo } = useContext(AuthContext);

  function CheckLogout() {
    Alert.alert("訊息", "確定要登出嗎?", [
      {
        text: "取消",
        onPress: () => {
          return false;
        },
      },
      { text: "確認", onPress: () => onLogOut() },
    ]);
  }
  return (
    <View className="flex-1 items-center justify-center">
      <Text>{userInfo.Account}你好</Text>
      <TouchableOpacity
        className="bg-red-600 rounded-lg w-10/12 m-3"
        onPress={CheckLogout}
      >
        <Text className="text-white text-xl m-3 text-center">登出</Text>
      </TouchableOpacity>
    </View>
  );
}
