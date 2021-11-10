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

      {/* Formulario recuperar contrasena */}
      <Box
        top="50"
        alignSelf="center"
        shadow="1"
        bgColor="white"
        w={["90%", "30%"]}
        p="5"
        borderRadius="10"
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
