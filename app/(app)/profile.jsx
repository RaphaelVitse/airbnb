import { View, Text, Button } from "react-native";

import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";

const Profile = () => {
  const { logout } = useContext(AuthContext);
  return (
    <View>
      <Text>Profile</Text>
      <Button title="Log out" onPress={logout} />
    </View>
  );
};

export default Profile;
