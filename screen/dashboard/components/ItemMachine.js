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
import { useNavigation } from "@react-navigation/native";
import AppContext from "../../../components/AppContext";

const ItemMachine = ({ item, color, view, onPress }) => {
  const variableGlobales = React.useContext(AppContext);

  const imgs = item.imgs.length;
  const propiedades = Object.keys(item.propiedades).length;

  const navigation = useNavigation();

  const nextPage = () => {
    variableGlobales.setIdMachine(item.id);
    navigation.navigate("Machine");
  };

  if (view) {
    return (
      <Pressable onPress={nextPage}>
        <HStack bgColor={color} p="3">
          <Heading color={color == "muted.200" ? "#111" : "white"} size="xs">
            {item.title}
          </Heading>
          <Spacer />
          <Text>{item.date}</Text>
        </HStack>
      </Pressable>
    );
  }

  return (
    <Pressable onPress={nextPage}>
      <Image
        source={{ uri: item.imgs[0] }}
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
    </Pressable>
  );
};

export default ItemMachine;
