//criando estados menores
//Este seria um estado isolado de um carrinho de compras (um Reducer)

import { Reducer } from "redux";
import { ICartState } from "./types";

//Valor inicial do Estado (Reducer)
const INITIAL_STATE: ICartState = {
  items: [],
};

//Declaração inicial
export const cart: Reducer<ICartState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_PRODUCT_TO_CART": {
      const { product } = action.payload;

      return {
        ...state,
        items: [
          ...state.items,
          {
            product,
            quantity: 1,
          },
        ],
      };
    }
    default: {
      return state;
    }
  }
};
