import { useContext, useState } from "react";
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
import { AuthContext } from "../../Context/AuthState";

export default function LoginScreen({ navigation }) {
  const { onAuthentication } = useContext(AuthContext);
  let UserObject = {
    Account: "",
    Password: "",
    IsRemberMe: true,
  };
  const [loginInfo, setloginInfo] = useState(UserObject);
  function onLogin() {
    if (loginInfo.Account === "" || loginInfo.Password === "") {
      Alert.alert("失敗", "請輸入使用者資訊");
      return false;
    } else {
      loginInfo.Password = "";
      onAuthentication(loginInfo).then(() => {
        Alert.alert("訊息", "登入成功!");
        navigation.navigate("Index");
      });
    }
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
            value={loginInfo.Account}
            placeholder={"帳號"}
            onChangeText={(Account) =>
              setloginInfo({ ...loginInfo, Account: Account })
            }
            className="px-3 py-2 border border-blue-300 rounded-md bg-blue-50"
          />
        </View>
        <View className="my-3 w-10/12">
          <TextInput
            placeholder={"密碼"}
            secureTextEntry={true}
            value={loginInfo.Password}
            onChangeText={(password) =>
              setloginInfo({ ...loginInfo, Password: password })
            }
            className="px-3 py-2 border border-blue-300 rounded-md bg-blue-50"
          />
        </View>
        <View className="flex-row my-5">
          <Switch
            value={loginInfo.IsRemberMe}
            onValueChange={(IsRemberMe) =>
              setloginInfo({ ...loginInfo, IsRemberMe: IsRemberMe })
            }
          />
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
