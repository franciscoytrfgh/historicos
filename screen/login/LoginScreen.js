import React from "react";
import {
  Box,
  FormControl,
  Input,
  Button,
  Heading,
  Spacer,
  Text,
  Link,
  Icon,
  Image,
  IconButton,
  HStack,
  VStack,
} from "native-base";
import { Ionicons } from "@expo/vector-icons";

import AppContext from "../../components/AppContext";

const IMG_FONDO = require("../../assets/fondo.jpg");
const LOGO = require("../../assets/logo.png");

const LoginScreen = ({ navigation }) => {
  const variableGlobales = React.useContext(AppContext);

  return (
    <Box bgColor="muted.300" w="100%" h="100%">
      {/* Imagen de fondo */}
      <Image
        position="absolute"
        alt="fondo"
        w="100%"
        h="100%"
        zIndex="-2"
        source={IMG_FONDO}
      />

      <Box
        top="50"
        alignSelf="center"
        shadow="1"
        bgColor="white"
        w={["90%", "30%"]}
        p="5"
        borderRadius="10"
      >
        <HStack>
          <VStack>
            <Heading>Bienvenido!</Heading>
            <Heading size="xs">Inicie sesion, para continuar!</Heading>
          </VStack>
          <Spacer />
          {/* Boton de servicios */}
          <HStack mt="2" alignSelf="center">
            {/* Google */}
            <IconButton
              icon={<Icon as={Ionicons} name="logo-google" />}
            ></IconButton>
            {/* Apple
            <IconButton
              icon={<Icon as={Ionicons} name="logo-apple" />}
            ></IconButton> */}
            {/* Facebook */}
            <IconButton
              icon={<Icon as={Ionicons} name="logo-facebook" />}
            ></IconButton>
          </HStack>
          {/* fin botones de servicios */}
        </HStack>

        {/* Input email */}
        <FormControl isRequired my="2">
          <FormControl.Label>Email</FormControl.Label>
          <Input type="text" placeholder="example@domain.com" />
        </FormControl>

        {/* Input password */}
        <FormControl isRequired my="2">
          <FormControl.Label>Contrasena</FormControl.Label>
          <Input type="password" placeholder="*****************" />
          {/* Link para recuperar contrasena */}
          <Link
            alignSelf="flex-end"
            onPress={() => {
              navigation.navigate("recoveryPassScreen");
            }}
          >
            Olvidaste la contrasena?
          </Link>
        </FormControl>

        {/* Boton iniciar */}
        <Button
          onPress={() => {
            variableGlobales.setLogin(true);
          }}
        >
          Iniciar
        </Button>

        {/* Link para crear cuanta */}
        <Link
          onPress={() => {
            navigation.navigate("singupScreen");
          }}
          mt="2"
          alignSelf="center"
        >
          <Text>No tienes una cuenta? </Text>Create una!
        </Link>
      </Box>
    </Box>
  );
};

export default LoginScreen;
