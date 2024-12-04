import { SafeAreaView, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

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

  const handleSignup = async () => {
    console.log("signup");

    try {
      const { data } = await axios.post(
        "https://lereacteur-bootcamp-api.herokuapp.com/api/airbnb/user/sign_up",
        {
          email,
          username,
          description,
          password,
        }
      );

      console.log(data);
    } catch (error) {
      console.log(error);
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
        <CustomButton title={"Signup"} pressFunc={handleSignup} />
        <RedirectButton
          title={"Already have an account ??? Go login !"}
          screen={"/"}
        />
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default SignupScreen;
