import {
  TouchableOpacity,
  TextInput,
  View,
  StyleSheet,
  Text,
  Switch,
  Image,
  ScrollView,
  Alert,
} from "react-native";

export default function LoginScreen({ navigation }) {
  function onLogin() {
    Alert.alert("訊息","登入成功!");
    navigation.navigate("Index");
  }
  return (
    <ScrollView className="flex-1" style={styles.container}>
      <View className="items-center justify-top">
        <Image
          source={require("../../img/logo.png")}
          resizeMode="contain"
          style={styles.logo}
          className="mt-5"
        />
        <Text className="font-bold text-blue-500 text-4xl my-6">
          我的第一支APP
        </Text>
        <View className="my-3 w-10/12">
          <TextInput
            placeholder={"帳號"}
            className="px-3 py-2 border border-blue-300 rounded-md bg-blue-50"
          />
        </View>
        <View className="my-3 w-10/12">
          <TextInput
            placeholder={"密碼"}
            secureTextEntry={true}
            className="px-3 py-2 border border-blue-300 rounded-md bg-blue-50"
          />
        </View>
        <View className="flex-row my-5">
          <Switch value={true} />
          <Text className="pt-3 pl-5">記住登入資訊</Text>
        </View>
        <TouchableOpacity
          className="bg-indigo-700 rounded-lg my-3"
          onPress={onLogin}
        >
          <Text className="text-white text-xl px-5 py-3">登入</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#bef264",
  },
  logo: {
    width: 57,
    height: 57,
  },
});
