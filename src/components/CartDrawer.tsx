import React from 'react';

import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Text,
} from '@chakra-ui/react';

import CartItem from './CartItem';

type CartDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
};

const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
}: CartDrawerProps) => {
  return (
    <Drawer isOpen={isOpen} placement='right' onClose={onClose} size='sm'>
      <DrawerOverlay>
        <DrawerContent py={4}>
          <DrawerHeader>My Cart</DrawerHeader>
          <DrawerCloseButton />

          <DrawerBody>
            <CartItem />
            <CartItem />
            <Flex justify='space-between' align='center'>
              <Text color='gray.300'>Total</Text>
              <Text fontSize='lg' fontWeight='bold'>
                $1234.56
              </Text>
            </Flex>
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='teal'>Checkout</Button>
          </DrawerFooter>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};

export default CartDrawer;
