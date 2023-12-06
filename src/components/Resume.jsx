import {
  Box,
  Grid,
  GridItem,
  Heading,
  Text,
  Button,
  Divider,
  SimpleGrid,
} from "@chakra-ui/react";

const Resume = () => {
  return (
    <Grid templateColumns="repeat(6, 1fr)">
      <GridItem as="aside" bgColor={"grey"} colSpan={2} minHh={{ lg: "100vh" }}>
        <Box borderRadius="80px" w="80px" h="80px" bgColor={"white"}></Box>
        <Text>
          I am Strata, a super simple responsive site template freebie crafted
          by HTML5 UP
        </Text>
      </GridItem>
      <GridItem as="main" colSpan={4}>
        <Box spacing="20">
          <Heading>
            Ipsum lorem dolor aliquam ante commodo magna sed accumsan arcu
            neque.
          </Heading>
          <Text>
            Accumsan orci faucibus id eu lorem semper. Eu ac iaculis ac nunc
            nisi lorem vulputate lorem neque cubilia ac in adipiscing in curae
            lobortis tortor primis integer massa adipiscing id nisi accumsan
            pellentesque commodo blandit enim arcu non at amet id arcu magna.
            Accumsan orci faucibus id eu lorem semper nunc nisi lorem vulputate
            lorem neque cubilia.
          </Text>
          <Button>Learn More</Button>
          <Divider color="red" />
          <Text as="h3">Recent Work</Text>
          <SimpleGrid spacing={10} minChildWidth="300px">
            <Box bg="white" h="200px" border="1px solid"></Box>
            <Box bg="white" h="200px" border="1px solid"></Box>

            <Box bg="white" h="200px" border="1px solid"></Box>
            <Box bg="white" h="200px" border="1px solid"></Box>

            <Box bg="white" h="200px" border="1px solid"></Box>
            <Box bg="white" h="200px" border="1px solid"></Box>
          </SimpleGrid>
        </Box>
      </GridItem>
    </Grid>
  );
};

export default Resume;
