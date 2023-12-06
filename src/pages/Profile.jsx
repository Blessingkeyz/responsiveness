import {
  TabList,
  Tab,
  Tabs,
  TabPanels,
  TabPanel,
  List,
  ListIcon,
  ListItem,
} from "@chakra-ui/react";
import {
  EmailIcon,
  ChatIcon,
  StarIcon,
  WarningIcon,
  CheckCircleIcon,
} from "@chakra-ui/icons";

export default function Profile() {
  return (
    <Tabs mt="40px" p="20px" colorScheme="purple" variant="enclosed">
      <TabList>
        <Tab _selected={{ color: "white", bg: "purple.400" }}>Account</Tab>
        <Tab _selected={{ color: "white", bg: "purple.400" }}>Task History</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <List spacing={4}>
            <ListItem>
              <ListIcon as={EmailIcon} />
              Email: kome@KDS.com
            </ListItem>
            <ListItem>
              <ListIcon as={ChatIcon} />
              Lorem
            </ListItem>
            <ListItem>
              <ListIcon as={StarIcon} />
              Lorem
            </ListItem>
          </List>
        </TabPanel>

        <TabPanel>
          <List spacing={4}>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="teal.400" />
              Lorem ipsum
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="teal.400" />
              Lorem
            </ListItem>
            <ListItem>
              <ListIcon as={WarningIcon} color="red.400" />
              Lorem
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="teal.400" />
              Lorem
            </ListItem>
            <ListItem>
              <ListIcon as={WarningIcon} color="red.400" />
              Lorem
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="teal.400" />
              Lorem
            </ListItem>
          </List>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
