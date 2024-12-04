import { StyleSheet, Text, Pressable } from "react-native";
import { useRouter } from "expo-router";

import colors from "../css/colors";

export const RedirectButton = ({ title, screen }) => {
  const router = useRouter();

  return (
    <Pressable
      onPress={() => {
        router.replace(screen);
      }}
    >
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  text: {
    color: colors.grey,
  },
});
