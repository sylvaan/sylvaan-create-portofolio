
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Sylvaan!";
const bio1 = "A Frontend Developer";
const bio2 = "specialising in React";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing={8}>
      <Avatar
        size="2xl"
        name="Sylvaan"
        src="https://i.pravatar.cc/150?img=12"
      />
      <VStack spacing={6}>
        <Heading as="h4" size="md" noOfLines={1}>
          {greeting}
        </Heading>
        <Heading as="h1" size={{ base: "xl", md: "3xl" }}>
          {bio1}
        </Heading>
        <Heading as="h1" size={{ base: "xl", md: "3xl" }}>
          {bio2}
        </Heading>
      </VStack>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
