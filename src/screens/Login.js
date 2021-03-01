import React, { useState } from "react";
import styled from "styled-components/native";
import { Button } from "react-native";
import { Image, Input } from "../components";
import { images } from "../utils/images";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.background};
  padding: 20px;
`;

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const passwordRef = useState();
  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{ flex: 1 }}
      extraScrollHeight={20}
    >
      <Container>
        <Image url={images.logo} imageStyle={{ borderRadius: 8 }} />
        <Input
          label="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          onSubmitEditing={() => passwordRef.current.focus()}
          placeholder="Email"
          retrunKeyType="next"
        />
        <Input
          ref={passwordRef}
          label="Password"
          value={[password]}
          onChangeText={(text) => setPassword(text)}
          onSubmitEditing={() => {}}
          placeholder="Password"
          retrunKeyType="done"
          isPassword
        />
        <Button title="Signup" onPress={() => navigation.navigate("Signup")} />
      </Container>
    </KeyboardAwareScrollView>
  );
};

export default Login;
