import React from "react";
import { logIn } from "../../firebaseUtils";
import {
  Button,
  Center,
  Flex,
  PasswordInput,
  TextInput,
  Text,
  useMantineTheme,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useNavigate } from "react-router-dom";
import LogoHeader from "../Logo/LogoHeader";

const Login: React.FC = () => {
  const theme = useMantineTheme();
  const navigate = useNavigate();

  type LoginFormFields = {
    email: string;
    password: string;
  };

  const handleSubmit = (formValues: LoginFormFields) => {
    logIn(formValues.email, formValues.password);
  };

  const loginForm = useForm({
    mode: "uncontrolled",
    initialValues: {
      email: "",
      password: "",
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      password: (value) =>
        value.length < 8 ? "Password must have at least 8 characters" : null,
    },
  });

  return (
    <Center style={{ height: "100vh" }}>
      <form onSubmit={loginForm.onSubmit(handleSubmit)}>
        <Flex
          direction="column"
          gap="lg"
          p="lg"
          style={{ maxWidth: "400px", width: "100vw" }}
        >
          <LogoHeader
            logoWidth="300px"
            logoHeight="75px"
            logoColor={theme.colors.blue[6]}
          />
          <Text size="xl" fw={700}>
            Log in to Playmat
          </Text>
          <Flex direction="column" gap="md">
            <TextInput
              key={loginForm.key("email")}
              {...loginForm.getInputProps("email")}
              label="Email"
              placeholder="Your email"
            />
            <PasswordInput
              key={loginForm.key("password")}
              {...loginForm.getInputProps("password")}
              label="Password"
              placeholder="Your password"
            />
          </Flex>
          <Flex direction="column" gap="md">
            <Button type="submit">Log In</Button>
            <Flex direction="column">
              <Text size="sm" ta="center">
                Don't have an account?
              </Text>
              <Text
                variant="link"
                size="sm"
                ta="center"
                fw={500}
                c={theme.colors.blue[3]}
                onClick={() => navigate("/signup")}
                style={{ cursor: "pointer" }}
              >
                Sign Up
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </form>
    </Center>
  );
};

export default Login;
