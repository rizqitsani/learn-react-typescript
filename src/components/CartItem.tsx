import React from 'react';

import { Box, Flex, IconButton, Image, Text } from '@chakra-ui/react';
import { FaMinus, FaPlus } from 'react-icons/fa';

const CartItem: React.FC = () => {
  return (
    <Flex mb={8}>
      <Image
        src='https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'
        h='140px'
        w='140px'
        objectFit='cover'
        borderRadius='xl'
        mr={4}
      />
      <Flex direction='column' justify='space-between'>
        <Box>
          <Text fontSize='md' fontWeight='bold' mb={3}>
            Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
          </Text>
          <Text fontSize='sm'>$109.95</Text>
        </Box>
        <Flex justify='space-between' align='center'>
          <IconButton aria-label='Add item' icon={<FaMinus />} />
          <Text>1</Text>
          <IconButton aria-label='Add item' icon={<FaPlus />} />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default CartItem;
