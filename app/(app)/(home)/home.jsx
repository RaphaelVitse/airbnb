import { View, Text, StyleSheet } from "react-native";
import { Link } from "expo-router";
const Home = () => {
  return (
    <View>
      <Text>Home</Text>
      <Link href="/room">Vers Room</Link>
    </View>
  );
};

export default Home;
