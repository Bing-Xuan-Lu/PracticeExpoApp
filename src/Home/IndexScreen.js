import {
  View,
  Text,
  Alert,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import { AuthContext } from "../../Context/AuthState";
import { useContext, useState, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { useIsFocused } from "@react-navigation/native";
import { BarCodeScanner } from "expo-barcode-scanner";
import BarcodeMask from "react-native-barcode-mask";
import { GPSLocation, GPSTrackLocation } from "../../Common/GPSLocation";

export default function IndexScreen({ navigation }) {
  const IndexStack = createStackNavigator();
  return (
    <IndexStack.Navigator initialRouteName="Index">
      <IndexStack.Screen
        name="Index"
        component={IndexView}
        options={{ title: "首頁" }}
      />
      <IndexStack.Screen
        name="QRCode"
        component={QRCodeView}
        options={{ title: "QR Code掃描" }}
      />
      <IndexStack.Screen
        name="GPS"
        component={GPSView}
        options={{ title: "GPS位置追蹤" }}
      />
    </IndexStack.Navigator>
  );
}

function IndexView({ navigation }) {
  const { userInfo } = useContext(AuthContext);
  console.log(userInfo);
  return (
    <View className="flex-1 items-center justify-center">
      <Text>{userInfo.Account}你好</Text>
      <TouchableOpacity
        className="bg-sky-600 rounded-lg w-10/12 m-3"
        onPress={() => navigation.navigate("QRCode")}
      >
        <Text className="text-white text-xl m-3 text-center">QRCode功能</Text>
      </TouchableOpacity>
      <TouchableOpacity
        className="bg-yellow-600 rounded-lg w-10/12 m-3"
        onPress={() => navigation.navigate("GPS")}
      >
        <Text className="text-white text-xl m-3 text-center">GPS定位功能</Text>
      </TouchableOpacity>
    </View>
  );
}

function GPSView() {
  const [gpsresult, setgpsresult] = useState();
  return (
    <View>
      <Text>{gpsresult}</Text>
      <TouchableOpacity
        className="bg-sky-600 rounded-lg w-10/12 m-3"
        onPress={() => navigation.navigate("GPS")}
      >
        <Text className="text-white text-xl m-3 text-center">取得現在位置</Text>
      </TouchableOpacity>
      <TouchableOpacity
        className="bg-green-600 rounded-lg w-10/12 m-3"
        onPress={() => GPSTrackLocation().StartLocationTracking()}
      >
        <Text className="text-white text-xl m-3 text-center">
          開始記錄背景位置
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        className="bg-red-600 rounded-lg w-10/12 m-3"
        onPress={() => GPSTrackLocation().StopLocationTracking()}
      >
        <Text className="text-white text-xl m-3 text-center">
          停止記錄背景位置
        </Text>
      </TouchableOpacity>
    </View>
  );
}

function QRCodeView({ navigation, route }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [checkQRCodeOk, setcheckQRCodeOk] = useState(false);

  const finderWidth = 280;
  const finderHeight = 230;
  const width = Dimensions.get("window").width;
  const height = Dimensions.get("window").height - 130; //依照上方選單列微調
  const viewMinX = (width - finderWidth) / 2;
  const viewMinY = (height - finderHeight) / 2;

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();

    //重置照相機
    setScanned(false);
    setcheckQRCodeOk(false);
  }, []);
  const handleBarCodeScanned = ({ type, data, bounds }) => {
    const { origin } = bounds;
    const { x, y } = origin;
    if (
      x >= viewMinX &&
      y >= viewMinY &&
      x <= viewMinX + finderWidth / 2 &&
      y <= viewMinY + finderHeight / 2
    ) {
      setScanned(true);
      if (type.indexOf("QRCode") < 0) {
        //驗證QRCode類型
        Alert.alert("錯誤", "不能刷取QR Code以外的類型!!!");
      } else if (data.indexOf("Hello") < 0) {
        //驗證QRCode內容
        Alert.alert("錯誤", "只能刷取特定QR Code內容");
      } else {
        Alert.alert("刷取完成", `BarCode類型：${type} \n BarCode內容：${data}`);
      }
    }
  };
  if (hasPermission === null) {
    return <Text>尚未啟用照相功能</Text>;
  }
  if (hasPermission === false) {
    return <Text>尚未開啟拍照功能</Text>;
  }

  return (
    <View className="flex-1">
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        className="flex-1"
      >
        <BarcodeMask edgeColor="#62B1F6" showAnimatedLine />
      </BarCodeScanner>

      {scanned && !checkQRCodeOk && (
        <TouchableOpacity
          className="bg-neutral-500 rounded-lg m-5"
          onPress={() => setScanned(false)}
        >
          <Text className="text-white text-center text-xl px-5 py-3">
            重新掃描
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
