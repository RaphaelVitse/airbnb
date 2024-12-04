import { Text, StyleSheet } from "react-native";

import colors from "../css/colors";

export const Title = ({ title }) => {
  return <Text style={styles.text}>{title}</Text>;
};

const styles = StyleSheet.create({
  text: {
    color: colors.grey,
    fontWeight: "600",
    fontSize: 24,
  },
});
