import React from "react";
import {
  Box,
  Text,
  Heading,
  HStack,
  Spacer,
  Badge,
  Image,
  Pressable,
} from "native-base";

function BadgeGravedad({ type }) {
  switch (type) {
    case 0:
      return <Badge colorScheme="info">Baja</Badge>;
    case 1:
      return <Badge colorScheme="warning">Medio</Badge>;
    case 2:
      return <Badge colorScheme="danger">Alta</Badge>;
  }
}

const Historical = ({ item, color, view, onPress }) => {
  const imgs = item.imgs.length;
  const propiedades = Object.keys(item.propiedades).length;

  if (view) {
    return (
      <HStack bgColor={color} p="3">
        <Heading size="xs">{item.title}</Heading>
        <Spacer />
        <Text>{item.date}</Text>
      </HStack>
    );
  }

  return (
    <>
      <Image
        source={{ uri: item.imgs[0].uri }}
        w="100%"
        h="90%"
        position="absolute"
        borderRadius="10"
        alt={item.title}
      />
      <Box p="3" bgColor="#rgba(0,0,0,.7)" mb="3" borderRadius="10">
        <HStack>
          <Heading color="white">{item.title}</Heading>
          <Spacer />
          <Text color="white">{item.date}</Text>
        </HStack>
        {/* Info basica */}
        <Box>
          <Text color="white">Nº de registros: </Text>
          <Text color="white">Empresa: {item.company}</Text>
          <Text color="white">Ubicacion: {item.location}</Text>
        </Box>
        {/* end info basica */}
      </Box>
    </>
  );
};

export default Historical;
