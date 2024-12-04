import { Stack } from "expo-router";
import { useState } from "react";
import { AuthContext } from "../context/AuthContext";

const RootLayout = () => {
  const [userId, setUserId] = useState("");
  const [userToken, setUserToken] = useState("");

  return (
    <AuthContext.Provider
      value={{
        userId: userId,
        setUserID: setUserId,
        userToken: userToken,
        setUserToken: setUserToken,
      }}
    >
      <Stack screenOptions={{ headerShown: false }} />;
    </AuthContext.Provider>
  );
};

export default RootLayout;
