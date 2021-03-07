import React, { useContext, useRef, useState } from 'react';

import { Box, Flex, IconButton, Image, Text } from '@chakra-ui/react';
import { FaMinus, FaPlus, FaTrashAlt } from 'react-icons/fa';

import { CartContext } from '../context';
import { ItemType } from '../types';

import DeleteDialog from './DeleteDialog';

const CartItem: React.FC<ItemType> = (item: ItemType) => {
  const { dispatch } = useContext(CartContext);
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const cancelRef = useRef<HTMLButtonElement>(null);

  const { title, price, image, amount } = item;

  const handleCloseAlert = () => setIsAlertOpen(false);

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
          <Box>
            <IconButton
              aria-label='Remove from cart'
              icon={<FaTrashAlt />}
              onClick={() => setIsAlertOpen(true)}
              mr={2}
            />
            <IconButton
              aria-label='Add item'
              icon={<FaMinus />}
              onClick={handleReduceAmount}
            />
          </Box>
          <Text>{amount}</Text>
          <IconButton
            aria-label='Add item'
            icon={<FaPlus />}
            onClick={handleAddAmount}
          />
        </Flex>
      </Flex>

      <DeleteDialog
        cancelRef={cancelRef}
        isOpen={isAlertOpen}
        item={item}
        onClose={handleCloseAlert}
      />
    </Flex>
  );
};

export default CartItem;
