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

  useEffect(() => {
    CheckAlReadyLogin().then((res) => {
      setIslogin(res);
    });
  }, [isLogin]);

  const onAuthentication = async (loginInfo) => {
    StoreUserInfo(loginInfo);
    setIslogin(true);
  };

  const onLogOut = () => {
    GetUserInfo()
      .then((loginInfo) => {
        ClearUserInfo(loginInfo.IsRemberMe);
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
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
export { AuthContext };
export default AuthState;
