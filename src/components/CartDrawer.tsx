import React, { useContext } from 'react';

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

import { CartContext } from '../context';

import CartItem from './CartItem';

type CartDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
};

const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
}: CartDrawerProps) => {
  const { state } = useContext(CartContext);

  const totalPrice = state.reduce((total, item) => {
    return total + item.price * item.amount;
  }, 0);

  return (
    <Drawer isOpen={isOpen} placement='right' onClose={onClose} size='sm'>
      <DrawerOverlay>
        <DrawerContent py={4}>
          <DrawerHeader>My Cart</DrawerHeader>
          <DrawerCloseButton />

          <DrawerBody>
            {state.map((item) => (
              <CartItem
                key={item.id}
                id={item.id}
                title={item.title}
                price={item.price}
                description={item.description}
                category={item.category}
                image={item.image}
                amount={item.amount}
              />
            ))}
            <Flex justify='space-between' align='center'>
              <Text color='gray.300'>Total</Text>
              <Text fontSize='lg' fontWeight='bold'>
                ${totalPrice.toFixed(2)}
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
