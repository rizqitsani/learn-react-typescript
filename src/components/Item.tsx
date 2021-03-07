import React, { useContext } from 'react';

import { Box, Flex, Image, Text, useToast } from '@chakra-ui/react';

import { ItemType } from '../types';
import { CartContext } from '../context';

const Item: React.FC<ItemType> = (item: ItemType) => {
  const { state, dispatch } = useContext(CartContext);

  const toast = useToast();

  const { title, price, description, image } = item;

  const handleAddToCart = () => {
    if (state.some((el) => el.id === item.id)) {
      toast({
        title: 'You already have this item on your cart.',
        status: 'error',
        duration: 3000,
        isClosable: true,
        position: 'bottom-right',
      });

      return;
    }

    dispatch({ type: 'ADD_TO_CART', payload: item });
  };

  return (
    <Flex
      direction='column'
      bg='gray.50'
      color='black'
      borderRadius='lg'
      overflow='hidden'
    >
      <Image src={image} w='100%' h='300px' objectFit='cover' />
      <Flex flex={1} direction='column' justify='space-between' px={6} py={4}>
        <Box>
          <Text fontSize='md' fontWeight='bold' mb={3}>
            {title}
          </Text>
          <Text fontSize='sm' noOfLines={3} mb={4}>
            {description}
          </Text>
        </Box>
        <Text fontSize='md' fontWeight='bold'>
          {`$${price}`}
        </Text>
      </Flex>
      <Box
        bg='teal.300'
        color='white'
        mb={0}
        px={6}
        py={3}
        cursor='pointer'
        onClick={handleAddToCart}
        _hover={{ bg: 'teal.500' }}
      >
        <Text align='center' fontSize='sm' fontWeight='bold'>
          ADD TO CART
        </Text>
      </Box>
    </Flex>
  );
};

export default Item;
