import { SafeAreaView, View, Text } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Link } from "expo-router";
import axios from "axios";

import {
  Logo,
  Title,
  Input,
  CustomButton,
  RedirectButton,
  LargeInput,
} from "../../assets/components/index";

import { useState } from "react";

const SignupScreen = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [description, setDescription] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  console.log(
    "states =",
    email,
    username,
    description,
    password,
    confirmPassword
  );

  const handleSignup = async () => {
    console.log("signup");

    try {
      setErrorMessage(null);
      const response = await axios.post(
        "https://lereacteur-bootcamp-api.herokuapp.com/api/airbnb/user/sign_up",
        {
          email,
          username,
          description,
          password,
        }
      );

      console.log(response.data);
      alert("Inscription reussie ! ton token est : ", response.data.token);
    } catch (error) {
      console.log(error);
      if (password !== confirmPassword) {
        setErrorMessage("Password must be the same");
      } else if (error.response.data.message === "Missing parameters") {
        setErrorMessage("Veuillez compléter tous les champs !");
      } else if (
        error.response.data.message === "This email already has an account."
      ) {
        setErrorMessage("L'adresse mail saisie existe déjà");
      } else {
        setErrorMessage("Une erreur est survenue, merci de réessayer");
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
        <Title title="Sign Up" />
        <Input state={email} placeholder={"email"} setState={setEmail} />
        <Input
          state={username}
          placeholder={"username"}
          setState={setUsername}
        />
        <LargeInput
          state={description}
          setState={setDescription}
          placeholder={"describe yourself"}
        />
        <Input
          state={password}
          secure
          setState={setPassword}
          placeholder={"password"}
        />
        <Input
          state={confirmPassword}
          setState={setConfirmPassword}
          placeholder={"confirm password"}
          secure
        />
        {errorMessage && (
          <View>
            <Text>{errorMessage}</Text>
          </View>
        )}
        <CustomButton title={"Signup"} pressFunc={handleSignup} />
        <RedirectButton
          title={"Already have an account ??? Go login !"}
          screen={"(auth)/"}
        />

        <Link href="/home">vers Home</Link>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default SignupScreen;
