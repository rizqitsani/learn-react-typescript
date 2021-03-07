import { InitialStateType, ItemType } from './types';

export type Action =
  | { type: 'ADD_TO_CART'; payload: ItemType }
  | { type: 'ADD_AMOUNT'; payload: ItemType }
  | { type: 'REDUCE_AMOUNT'; payload: ItemType }
  | { type: 'REMOVE_FROM_CART'; payload: ItemType };

export const cartReducer = (
  state: InitialStateType,
  action: Action,
): InitialStateType => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return [...state, { ...action.payload, amount: 1 }];
    case 'ADD_AMOUNT':
      return state.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, amount: item.amount + 1 };
        }

        return item;
      });
    case 'REDUCE_AMOUNT':
      return state.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, amount: item.amount - 1 };
        }

        return item;
      });
    case 'REMOVE_FROM_CART':
      return state;
    default:
      return state;
  }
};
