import React, { useEffect, useState, createContext } from "react";
import {
  StoreUserInfo,
  ClearUserInfo,
  CheckAlReadyLogin,
  GetUserInfo,
} from "../Common/UserFunc";

const AuthContext = createContext();

const AuthState = (props) => {
  const [isLogin, setIslogin] = useState(false);
  const [userInfo, setuserInfo] = useState({});
  useEffect(() => {
    CheckAlReadyLogin().then((res) => {
      if (res) {
        GetUserInfo().then((loginInfo) => {
          setuserInfo(loginInfo); //重開APP時從AsyncStorage將使用者資訊帶回去
          //如果你一開始記住登入資訊是取消的，下次登入進來要回登入畫面重打
          setIslogin(loginInfo.IsRemberMe);
        });
      } else {
        setIslogin(false);
      }
    });
  }, []);

  const onAuthentication = async (loginInfo) => {
    StoreUserInfo(loginInfo);
    setIslogin(true);
  };

  const onLogOut = () => {
    GetUserInfo()
      .then((loginInfo) => {
        ClearUserInfo();
        setIslogin(false);
      })
      .catch((e) => {
        setIslogin(false);
      });
  };

  return (
    <AuthContext.Provider
      value={{
        onAuthentication,
        isLogin,
        onLogOut,
        userInfo,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
export { AuthContext };
export default AuthState;
