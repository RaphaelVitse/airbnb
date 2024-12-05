import { View, Text, FlatList } from "react-native";
import { Link } from "expo-router";
import axios from "axios";

import { useState, useEffect } from "react";
import { AnnounceCard } from "../../../assets/components/AnnounceCard";

// J'importe tous les exports de mes composants

const Home = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://lereacteur-bootcamp-api.herokuapp.com/api/airbnb/rooms"
        );
        console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return isLoading ? (
    <View>
      <Text> Loading...</Text>
    </View>
  ) : (
    <View>
      <Text>Home</Text>
      <Link href="/room">Vers Room</Link>
      <FlatList
        data={data}
        renderItem={({ item, index }) => {
          // console.log(arg);

          return (
            <AnnounceCard
              // picture={item.picture[0].url}
              price={item.price}
              title={item.title}
              ratingValue={item.ratingValue}
              reviews={item.reviews}
              avatar={item.user.account.photo.url}
            />
          );
        }}
        keyExtractor={(item) => {
          return String(item._id);
        }}
      />
    </View>
  );
};

export default Home;
