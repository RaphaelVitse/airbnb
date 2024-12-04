import { Image, View, StyleSheet } from "react-native";

import logo from "../imgs/logo.png";

export const Logo = () => {
  return (
    <View>
      <Image source={logo} resizeMode="contain" style={styles.mainLogo} />
    </View>
  );
};

const styles = StyleSheet.create({
  mainLogo: {
    height: 100,
    width: 100,
  },
});
