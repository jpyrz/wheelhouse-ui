import React from "react";
import { signUp } from "../../firebaseUtils";
import "./SignUp.css";
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
import { apiRequest } from "../../api/api";

const SignUp: React.FC = () => {
  const theme = useMantineTheme();
  const navigate = useNavigate();

  type SignUpFormFields = {
    username: string;
    email: string;
    password: string;
    reEnterPassword: string;
  };

  async function handleSignUp(formValues: SignUpFormFields) {
    try {
      await signUp(formValues.email, formValues.password);
      await apiRequest("users/profile", "PUT", {
        displayName: formValues.username,
      });
    } catch (error) {
      console.error("Sign-up error:", error);
    }
  }

  const signUpForm = useForm({
    mode: "uncontrolled",
    initialValues: {
      username: "",
      email: "",
      password: "",
      reEnterPassword: "",
    },

    validate: {
      username: (value) =>
        value.length < 5 ? "Name must have at least 5 characters" : null,
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      password: (value) =>
        value.length < 8 ? "Password must have at least 8 characters" : null,
      reEnterPassword: (value, values) =>
        value === values.password ? null : "Passwords do not match",
    },
  });

  return (
    <Center style={{ height: "100vh" }}>
      <form onSubmit={signUpForm.onSubmit(handleSignUp)}>
        <Flex
          direction="column"
          gap="lg"
          p="lg"
          style={{ maxWidth: "400px", width: "100vw" }}
        >
          <LogoHeader
            logoWidth={300}
            logoHeight={150}
            logoColor={theme.colors.blue[6]}
          />
          <Text size="xl" fw={700}>
            Create an account
          </Text>
          <Flex direction="column" gap="md">
            <TextInput
              key={signUpForm.key("username")}
              {...signUpForm.getInputProps("username")}
              label="Username"
              placeholder="Your username"
            />
            <TextInput
              key={signUpForm.key("email")}
              {...signUpForm.getInputProps("email")}
              label="Email"
              placeholder="Your email"
            />
            <PasswordInput
              key={signUpForm.key("password")}
              {...signUpForm.getInputProps("password")}
              label="Password"
              placeholder="Your password"
            />
            <PasswordInput
              key={signUpForm.key("reEnterPassword")}
              {...signUpForm.getInputProps("reEnterPassword")}
              label="Re-enter password"
              placeholder="Re-enter your password"
            />
          </Flex>
          <Flex direction="column" gap="md">
            <Button type="submit">Create Account</Button>
            <Flex direction="column">
              <Text size="sm" ta="center">
                Already have an account?
              </Text>
              <Text
                variant="link"
                size="sm"
                ta="center"
                fw={500}
                c={theme.colors.blue[3]}
                onClick={() => navigate("/login")}
                style={{ cursor: "pointer" }}
              >
                Login
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </form>
    </Center>
  );
};

export default SignUp;
