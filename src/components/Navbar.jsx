import {
  HStack,
  Spacer,
  Button,
  Text,
  Flex,
  Heading,
  useToast,
  Avatar,
  AvatarBadge,
} from "@chakra-ui/react";

export default function Navbar() {
  const toast = useToast();

  const showToast = () => {
    toast({
      id: 1,
      title: "logging out",
      description: "succesfully logged out",
      duration: 2000,
      position: "top",
      isClosable: true,
      status: "success",
    });
  };
  const showToast1 = () => {
    toast({
      id: 2,
      title: "logging out",
      description: "hold on",
      duration: 2000,
      position: "top",
      isClosable: false,
      status: "loading",
      onCloseComplete: showToast,
    });
  };

  return (
    <Flex as="nav" mb="40px" p="10px" alignItems={"center"}>
      <Heading>Dojo Tasks</Heading>
      <Spacer />

      <HStack spacing="20px">
        <Avatar src={"/img/mario.png"}>
          <AvatarBadge w={"1.3em"} bg="teal.500">
            <Text fontSize={"xs"} color={"white"}>
              3
            </Text>
          </AvatarBadge>
        </Avatar>
        <Text>blessing@kds.com</Text>
        <Button colorScheme="purple" onClick={showToast1}>
          Logout
        </Button>
      </HStack>
    </Flex>
  );
}
