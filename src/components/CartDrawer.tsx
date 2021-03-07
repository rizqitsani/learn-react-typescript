import React, { useContext } from 'react';

import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Text,
  useColorModeValue,
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

  const totalColor = useColorModeValue('gray.700', 'gray.300');

  const totalPrice = state.reduce((total, item) => {
    return total + item.price * item.amount;
  }, 0);

  return (
    <Drawer isOpen={isOpen} placement='right' onClose={onClose} size='sm'>
      <DrawerOverlay>
        <DrawerContent py={4}>
          <DrawerHeader>
            <Flex justify='space-between' align='center'>
              My Cart
              <Text fontSize='md'>{state.length} Item(s)</Text>
            </Flex>
          </DrawerHeader>

          <DrawerBody>
            {state.length > 0 ? (
              state.map((item) => (
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
              ))
            ) : (
              <Text fontWeight='bold'>Your cart is empty</Text>
            )}
          </DrawerBody>

          <DrawerFooter display='flex' align='center'>
            <Flex align='center' mr='auto'>
              <Text color={totalColor} mr={2}>
                Total
              </Text>
              <Text fontSize='lg' fontWeight='bold'>
                ${totalPrice.toFixed(2)}
              </Text>
            </Flex>
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
