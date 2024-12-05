import { View, Text, SafeAreaView } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import axios from "axios";
import { Link } from "expo-router";

// J'importe tous les exports de mes composants
import {
  Logo,
  Title,
  Input,
  CustomButton,
  RedirectButton,
} from "../../assets/components/index";

//je recupere le context et le Hook
import { AuthContext } from "../../context/AuthContext";
import { useState, useContext } from "react";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  // console.log(email, password);

  const { login } = useContext(AuthContext); // je recupere les props mises dans le layout

  ////// fonction gerant la connexion quand on appuie sur login
  const handleSubmit = async () => {
    // console.log("submited");
    setErrorMessage(null);
    try {
      const response = await axios.post(
        "https://lereacteur-bootcamp-api.herokuapp.com/api/airbnb/user/log_in",
        {
          email: email,
          password: password,
        }
      );
      console.log(response.data);
      login(response.data.id, response.data.token);

      alert("login ok");
    } catch (error) {
      console.log(error);
      if (error.status === 400 || error.status === 401) {
        setErrorMessage("Mauvais email et/ou mot de passe");
      } else {
        setErrorMessage("Problème serveur");
      }
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAwareScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{
          flex: 1,
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Logo />
        <Title title={"Sign In"} />
        <Input state={email} placeholder="email" setState={setEmail} />
        <Input
          state={password}
          placeholder="password"
          setState={setPassword}
          secure={true}
        />
        {errorMessage && (
          <View>
            <Text>{errorMessage}</Text>
          </View>
        )}
        <CustomButton title="Sign In" pressFunc={handleSubmit} />
        <RedirectButton
          title={"No account ? Register !"}
          screen={"(auth)/signup"}
        />
        <Link href="/home">Vers home</Link>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;
