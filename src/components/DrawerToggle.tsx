import React from 'react';

import { IconButton } from '@chakra-ui/react';
import { FaShoppingCart } from 'react-icons/fa';

type DrawerToggleProps = {
  onClick: () => void;
};

const DrawerToggle: React.FC<DrawerToggleProps> = (
  props: DrawerToggleProps,
) => {
  return (
    <IconButton
      size='md'
      fontSize='lg'
      variant='ghost'
      color='current'
      icon={<FaShoppingCart />}
      aria-label='Open cart'
      {...props}
    />
  );
};

export default DrawerToggle;
