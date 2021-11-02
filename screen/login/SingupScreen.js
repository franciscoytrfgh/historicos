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
const LoginScreen = ({ navigation }) => {
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

      {/* Formulario SingUp */}
      <Box
        alignSelf="center"
        shadow="1"
        bgColor="white"
        w="90%"
        p="5"
        borderRadius="10"
        top="10%"
      >
        <Heading>Crea tu cuenta!</Heading>

        {/* Input nombre */}
        <FormControl isRequired my="2">
          <FormControl.Label>Nombre</FormControl.Label>
          <Input type="text" placeholder="Nombre Apellido" />
        </FormControl>

        {/* Input email */}
        <FormControl isRequired my="2">
          <FormControl.Label>Email</FormControl.Label>
          <Input type="email" placeholder="example@domain.com" />
        </FormControl>

        {/* Input Celular */}
        <FormControl isRequired my="2">
          <FormControl.Label>Celular</FormControl.Label>
          <Input type="phone" placeholder="example@domain.com" />
        </FormControl>

        {/* Input password */}
        <FormControl isRequired my="2">
          <FormControl.Label>Contrasena</FormControl.Label>
          <Input type="password" placeholder="*****************" />
        </FormControl>

        {/* Input confirm password */}
        <FormControl isRequired my="2">
          <FormControl.Label>Confirmar contrasena</FormControl.Label>
          <Input type="password" placeholder="*****************" />
        </FormControl>

        {/* Boton iniciar */}
        <Button>Iniciar</Button>
        {/* Link para crear cuanta */}
        <Link
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

export default LoginScreen;
