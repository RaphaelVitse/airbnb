import { TextInput, StyleSheet } from "react-native";
import colors from "../css/colors";

export const Input = ({ placeholder, state, setState, secure }) => {
  return (
    <TextInput
      style={styles.textInput}
      placeholder={placeholder}
      value={state}
      onChangeText={setState}
      secureTextEntry={secure}
      autoCapitalize="none"
    />
  );
};

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    borderBottomColor: colors.lightPink,
    borderBottomWidth: 2,
    width: "80%",
    fontSize: 16,
  },
});
