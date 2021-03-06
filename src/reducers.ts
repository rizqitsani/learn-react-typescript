import { InitialStateType } from './types';

export type Action = { type: 'ADD_TO_CART' } | { type: 'REMOVE_FROM_CART' };

export const cartReducer = (
  state: InitialStateType,
  action: Action,
): InitialStateType => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return state;
    case 'REMOVE_FROM_CART':
      return state;
    default:
      return state;
  }
};
