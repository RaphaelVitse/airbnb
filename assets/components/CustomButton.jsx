import { StyleSheet, Pressable, Text } from "react-native";

import colors from "../css/colors";

export const CustomButton = ({ title, pressFunc }) => {
  return (
    <Pressable style={styles.button} onPress={pressFunc}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 60,
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
    borderColor: colors.pink,
    borderWidth: 3,
    borderRadius: 60,
  },
  text: {
    color: colors.grey,
    fontWeight: "500",
    fontSize: 18,
  },
});
