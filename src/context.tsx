import React, { createContext, useReducer } from 'react';

import { cartReducer, Action } from './reducers';

import { InitialStateType } from './types';

type CartProviderProps = {
  children: React.ReactNode;
};

const initialState: InitialStateType = [];

const CartContext = createContext<{
  state: InitialStateType;
  dispatch: React.Dispatch<Action>;
}>({
  state: initialState,
  dispatch: () => null,
});

const CartProvider: React.FC<CartProviderProps> = ({
  children,
}: CartProviderProps) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
