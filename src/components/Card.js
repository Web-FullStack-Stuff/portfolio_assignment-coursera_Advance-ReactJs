import { Heading, HStack, Image, Text, VStack, Box} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <Box bg="white" borderRadius='lg' maxW={370}>
      <Image src={imageSrc} borderRadius='lg'/>
      <VStack  align="left" spacing={1} p={3}>
        <Heading color="black" as='h5' size='sm'>{ title}</Heading>
        <Text color="grey" fontSize="xs">{description}</Text>
        <HStack color="black">
          <Text fontSize="xs">See more</Text>
          <FontAwesomeIcon icon={ faArrowRight} size="1x"/>
        </HStack>
      </VStack>
    </Box>
  );
};

export default Card;
