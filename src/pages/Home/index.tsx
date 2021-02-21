import React from 'react';

import { Flex, Grid, useDisclosure } from '@chakra-ui/react';

import {
  CartDrawer,
  ColorModeSwitcher,
  DrawerToggle,
  Item,
  MainContainer,
} from '../../components';

const Home: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <MainContainer>
        <Flex justify='end' w='100%' py={8}>
          <DrawerToggle onClick={onOpen} />
          <ColorModeSwitcher />
        </Flex>
        <Grid
          templateColumns={{ base: 'repeat(1 ,1fr)', md: 'repeat(4, 1fr)' }}
          gap={{ base: 10, md: 8 }}
        >
          <Item
            id={1}
            title='Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops'
            price={109.95}
            description='Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday'
            image='https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'
          />
          <Item
            id={2}
            title='Mens Casual Premium Slim Fit T-Shirts'
            price={22.3}
            description='Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.'
            image='https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg'
          />
        </Grid>
      </MainContainer>
      <CartDrawer isOpen={isOpen} onClose={onClose} />
    </>
    // <Box textAlign='center' fontSize='xl'>
    //   <Grid minH='100vh' p={3}>
    //     <ColorModeSwitcher justifySelf='flex-end' />
    //     <VStack spacing={8}>
    //       <Logo />
    //       <Text />
    //       <Link
    //         color='teal.500'
    //         href='https://chakra-ui.com'
    //         fontSize='2xl'
    //         target='_blank'
    //         rel='noopener noreferrer'
    //       >
    //         Learn Chakra
    //       </Link>
    //     </VStack>
    //   </Grid>
    // </Box>
  );
};

export default Home;
