import { Tabs } from "expo-router";
import { Header } from "react-native/Libraries/NewAppScreen";

import logo from "../../assets/imgs/logo.png";

const AppLayout = () => {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      {/* <Tabs.Screen name="(/home" options={{ title: { logo } }} />

      <Tabs.Screen name="/room" options={{ title: "ROOM" }} /> */}
    </Tabs>
  );
};

export default AppLayout;
