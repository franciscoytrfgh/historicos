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
  Avatar,
  Image,
} from "native-base";

const IMG_FONDO = require("../../assets/fondo.jpg");
const LOGO = require("../../assets/logo.png");

const RecoveryPassScreen = ({ navigation }) => {
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
      {/* Logo */}
      <Image
        // source={LOGO}
        bgColor="#999"
        top="15%"
        alt="logo"
        w="50%"
        h="30%"
        alignSelf="center"
        borderRadius="full"
      />
      {/* Espacio entre el logo y el formulario */}
      <Spacer />
      {/* Formulario recuperar contrasena */}
      <Box
        alignSelf="center"
        shadow="1"
        bgColor="white"
        w="90%"
        p="5"
        borderTopRadius="10"
      >
        <Heading>Olvidate tu contrasena!</Heading>
        <Heading size="xs">Ingresa tu Email, para recuperala!</Heading>

        {/* Input email */}
        <FormControl isRequired my="2">
          <Input type="text" placeholder="example@domain.com" />
        </FormControl>

        {/* Boton iniciar */}
        <Button>Recuperar</Button>
        {/* Link para iniciar sesion*/}
        <Link
          alignSelf="flex-end"
          onPress={() => {
            navigation.navigate("loginScreen");
          }}
          mt="2"
          alignSelf="center"
        >
          <Text>Ya tienes una cuenta? </Text>Inicia sesion!
        </Link>
      </Box>
    </Box>
  );
};

export default RecoveryPassScreen;
