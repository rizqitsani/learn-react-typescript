import React, { useContext } from 'react';

import { Box, Flex, IconButton, Image, Text } from '@chakra-ui/react';
import { FaMinus, FaPlus } from 'react-icons/fa';

import { CartContext } from '../context';
import { ItemType } from '../types';

const CartItem: React.FC<ItemType> = (item: ItemType) => {
  const { dispatch } = useContext(CartContext);
  const { title, price, image, amount } = item;

  const handleAddAmount = () => {
    dispatch({ type: 'ADD_AMOUNT', payload: item });
  };

  const handleReduceAmount = () => {
    if (item.amount > 1) {
      dispatch({ type: 'REDUCE_AMOUNT', payload: item });
    }
  };

  return (
    <Flex mb={8}>
      <Image
        src={image}
        h='140px'
        maxW='100px'
        objectFit='cover'
        borderRadius='xl'
        mr={4}
      />
      <Flex direction='column' justify='space-between' flex={1}>
        <Box>
          <Text fontSize='md' fontWeight='bold' mb={3} noOfLines={2}>
            {title}
          </Text>
          <Text fontSize='sm'>${price}</Text>
        </Box>
        <Flex justify='space-between' align='center'>
          <IconButton
            aria-label='Add item'
            icon={<FaMinus />}
            onClick={handleReduceAmount}
          />
          <Text>{amount}</Text>
          <IconButton
            aria-label='Add item'
            icon={<FaPlus />}
            onClick={handleAddAmount}
          />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default CartItem;
