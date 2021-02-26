import React from 'react';

import { Code, Flex, Grid, Spinner, useDisclosure } from '@chakra-ui/react';

import { useQuery } from 'react-query';

import {
  CartDrawer,
  ColorModeSwitcher,
  DrawerToggle,
  Item,
  MainContainer,
} from '../../components';

import { ItemType } from '../../types';

const getProducts = async (): Promise<ItemType[]> => {
  const response = await fetch('https://fakestoreapi.com/products');
  const products = await response.json();

  return products;
};

const Home: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { data, error, isLoading } = useQuery<ItemType[], Error>(
    'products',
    getProducts,
  );

  if (isLoading) {
    return (
      <Flex minH='100vh' justify='center' align='center'>
        <Spinner thickness='4px' color='teal.300' size='xl' />
      </Flex>
    );
  }

  return (
    <>
      {error ? (
        <Code>{error}</Code>
      ) : (
        <>
          <MainContainer>
            <Flex justify='end' w='100%' py={8}>
              <DrawerToggle onClick={onOpen} />
              <ColorModeSwitcher />
            </Flex>
            <Grid
              templateColumns={{
                base: 'repeat(1 ,1fr)',
                sm: 'repeat(2, 1fr)',
                md: 'repeat(4, 1fr)',
              }}
              gap={{ base: 10, md: 8 }}
            >
              {data?.map((item) => (
                <Item
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  price={item.price}
                  description={item.description}
                  category={item.category}
                  image={item.image}
                  amount={1}
                />
              ))}
            </Grid>
          </MainContainer>
          <CartDrawer isOpen={isOpen} onClose={onClose} />
        </>
      )}
    </>
  );
};

export default Home;
