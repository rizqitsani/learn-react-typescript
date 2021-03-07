import React, { useContext } from 'react';

import { Button, Flex, Text } from '@chakra-ui/react';
import { FaShoppingCart } from 'react-icons/fa';

import { CartContext } from '../context';

type DrawerToggleProps = {
  onClick: () => void;
};

const DrawerToggle: React.FC<DrawerToggleProps> = (
  props: DrawerToggleProps,
) => {
  const { state } = useContext(CartContext);

  return (
    <Flex alignItems='center'>
      <Button
        size='md'
        fontSize='lg'
        variant='ghost'
        color='current'
        leftIcon={<FaShoppingCart />}
        {...props}
      >
        <Text fontSize='sm'>{state.length}</Text>
      </Button>
    </Flex>
  );
};

export default DrawerToggle;
