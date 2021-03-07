import React from 'react';

import { Box, Flex, IconButton, Image, Text } from '@chakra-ui/react';
import { FaMinus, FaPlus } from 'react-icons/fa';

import { ItemType } from '../types';

const CartItem: React.FC<ItemType> = (item: ItemType) => {
  const { title, price, image, amount } = item;

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
          <IconButton aria-label='Add item' icon={<FaMinus />} />
          <Text>{amount}</Text>
          <IconButton aria-label='Add item' icon={<FaPlus />} />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default CartItem;
