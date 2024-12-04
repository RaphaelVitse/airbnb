import { View, Text, SafeAreaView } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import {
  Logo,
  Title,
  Input,
  CustomButton,
  RedirectButton,
} from "../../assets/components/index";

import { useState } from "react";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

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
        <CustomButton title="Sign In" pressFunc={handleSubmit} />
        <RedirectButton title={"No account ? Register !"} screen={"/signup"} />
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;
