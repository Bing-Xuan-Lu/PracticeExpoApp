import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

//保存使用者資訊
async function StoreUserInfo(user) {
  try {
    await AsyncStorage.setItem("userData", JSON.stringify(user));
  } catch (error) {
    console.log("Something went wrong", error);
  }
}

//載入使用者資訊
async function GetUserInfo() {
  try {
    let userData = await AsyncStorage.getItem("userData");
    const userResult =
      userData !== undefined ? JSON.parse(userData) : undefined;
    return userResult;
  } catch (error) {
    console.log("GetUserNameError", error);
  }
}

//確認是否有登入&記住登入資訊
async function CheckAlReadyLogin() {
  let checkResult = false;
  await AsyncStorage.getItem("userData").then((res) => {
    if (res !== undefined && res !== null) {
      checkResult = true;
    }
  });
  return checkResult;
}

//清除使用者資訊
function ClearUserInfo() {
  AsyncStorage.clear();
}

export { StoreUserInfo, CheckAlReadyLogin, GetUserInfo, ClearUserInfo };
