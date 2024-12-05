import { Stack, router } from "expo-router";
import { useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

const RootLayout = () => {
  const [userId, setUserId] = useState(null);
  const [userToken, setUserToken] = useState(null);
  console.log("usertoken", userToken);

  const userStorage = JSON.stringify({
    userId: userId,
    userToken: userToken,
  });
  console.log("user ====", userStorage);

  const login = async (id, token) => {
    setUserId(id), setUserToken(token);
    await AsyncStorage.setItem("userStorage", userStorage);
  };

  const logout = async () => {
    setUserId(null);
    setUserToken(null);
    await AsyncStorage.removeItem("user");
  };

  useEffect(() => {
    //redirection vers /home si userToker et userId existe
    if (userToken && userId) {
      router.replace("/home");
    }
    //Sinon redirection vers index (login)
    else {
      router.replace("/");
    }
  }, [userId, userToken]); // se met a jout a chaque changement de userToken et userId

  return (
    <AuthContext.Provider
      value={{
        userId: userId,
        userToken: userToken,
        login,
        logout,
      }}
    >
      <Stack screenOptions={{ headerShown: false }} />
    </AuthContext.Provider>
  );
};

export default RootLayout;
