import React from 'react';

import { Box, Flex, Image, Text } from '@chakra-ui/react';

import { ItemType } from '../types';

const Item: React.FC<ItemType> = ({
  title,
  price,
  description,
  image,
}: ItemType) => {
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
