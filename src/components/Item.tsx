import React from 'react';

import { Box, Image, Text } from '@chakra-ui/react';

import { ItemType } from '../types';

const Item: React.FC<ItemType> = ({
  id,
  title,
  price,
  description,
  image,
}: ItemType) => {
  return (
    <Box bg='gray.50' color='black' borderRadius='lg' overflow='hidden'>
      <Image src={image} w='100%' h='300px' objectFit='cover' />
      <Box px={6} py={4}>
        <Text fontSize='md' fontWeight='bold' mb={3}>
          {id}. {title}
        </Text>
        <Text fontSize='sm' noOfLines={2} mb={4}>
          {description}
        </Text>
        <Text fontSize='md' fontWeight='bold'>
          {`$${price}`}
        </Text>
      </Box>
      <Box
        bg='teal.300'
        color='white'
        mb={0}
        px={6}
        py={3}
        _hover={{ bg: 'teal.500' }}
      >
        <Text align='center' fontSize='sm' fontWeight='bold'>
          ADD TO CART
        </Text>
      </Box>
    </Box>
  );
};

export default Item;
