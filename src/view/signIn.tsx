import React from "react";
import { Button, TextInput, View } from "react-native";
import { useAuth } from "../provider/auth/AuthContext";

export default function SignInScreen() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const { signIn } = useAuth();

  return (
    <View>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button onPress={() => signIn({ username, password })} title="Sign in"></Button>
    </View>
  );
}