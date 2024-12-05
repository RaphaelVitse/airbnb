import { StyleSheet, Text, View, Image } from "react-native";

import colors from "../css/colors";

export const AnnounceCard = ({
  picture,
  price,
  title,
  ratingValue,
  reviews,
  avatar,
}) => {
  return (
    <View>
      <View>
        <Image style={styles.picture} source={{ uri: picture }} />
        <Text style={styles.price}>{price}</Text>
      </View>
      <View>
        <View>
          <Text>{title}</Text>
          <Text>{ratingValue}</Text>
          <Text>{reviews}</Text>
        </View>
        <View>
          <Image source={{ uri: avatar }} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  picture: {
    height: 100,
    width: 100,
    resizeMode: "contain",
  },
  price: {
    color: colors.grey,
    backgroundColor: "black",
    fontSize: 18,
  },
});
