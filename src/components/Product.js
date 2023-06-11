import { Box, Button, Center, GridItem, HStack, Heading, Image, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";

const Header = ({ title }) => (
  <Box p={4} shadow='md'>
    <Heading>{title}</Heading>
  </Box>
);

function Product({ location }) {
  const { state } = location;
  const history = useHistory();

  if (!state) {
    history.push("/");
  }

  const back = () => {
    history.push("/");
  };

  return (
    <Box>
      <Header title={state.title} />
      <Box p={8} d='flex' alignItems='center'>
        <Box ml={4}>
          <SimpleGrid spacing={4} columns={{ base: 1, md: 5 }}>
            <GridItem colSpan={2}>
              <Center>
                <Image w={48} src={state.image} />
              </Center>
            </GridItem>
            <GridItem colSpan={3}>
              <Stack spacing={4}>
                <Heading>Price: ${state.price}</Heading>
                <Text>{state.description}</Text>
                <HStack>
                  <Button w='xs' size='sm' colorScheme='purple'>
                    Buy Now
                  </Button>
                  <Button w='xs' size='sm' onClick={back}>
                    Share Product
                  </Button>
                </HStack>
              </Stack>
            </GridItem>
          </SimpleGrid>
        </Box>
      </Box>
    </Box>
  );
}

export default Product;
