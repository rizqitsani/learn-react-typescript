import React, { useContext } from 'react';

import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
} from '@chakra-ui/react';

import { ItemType } from '../types';
import { CartContext } from '../context';

type DeleteDialogProps = {
  cancelRef: React.RefObject<HTMLButtonElement>;
  isOpen: boolean;
  item: ItemType;
  onClose: () => void;
};

const DeleteDialog: React.FC<DeleteDialogProps> = ({
  cancelRef,
  isOpen,
  item,
  onClose,
}: DeleteDialogProps) => {
  const { dispatch } = useContext(CartContext);

  const handleRemoveFromCart = () => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: item });
  };

  return (
    <AlertDialog
      isOpen={isOpen}
      leastDestructiveRef={cancelRef}
      onClose={onClose}
    >
      <AlertDialogOverlay>
        <AlertDialogContent px={1} py={3}>
          <AlertDialogHeader fontSize='lg' fontWeight='bold'>
            Remove Item
          </AlertDialogHeader>

          <AlertDialogBody>
            Are you sure? You can&apos;t undo this action afterwards.
          </AlertDialogBody>

          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='red' onClick={handleRemoveFromCart} ml={3}>
              Delete
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
};

export default DeleteDialog;
