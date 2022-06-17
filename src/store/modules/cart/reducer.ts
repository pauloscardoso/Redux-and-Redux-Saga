//criando estados menores
//Este seria um estado isolado de um carrinho de compras (um Reducer)

import { Reducer } from "redux";
import { ICartState } from "./types";
import produce from "immer";

//Valor inicial do Estado (Reducer)
const INITIAL_STATE: ICartState = {
  items: [],
};

//Declaração inicial
export const cart: Reducer<ICartState> = (state = INITIAL_STATE, action) => {
  //Produce cria um rascunho q tem o mesmo formato do estado. No fim, ele compara o rascunho com o state e faz as alterações de forma automatica
  return produce(state, (draft) => {
    switch (action.type) {
      case "ADD_PRODUCT_TO_CART": {
        const { product } = action.payload;

        //verificar se o item a ser adicionado no carrinho já está no carrinho
        const productInCartIndex = draft.items.findIndex(
          (item) => item.product.id === product.id
        );

        if (productInCartIndex >= 0) {
          draft.items[productInCartIndex].quantity++;
        } else {
          draft.items.push({
            product,
            quantity: 1,
          });
        }

        break;
      }
      default: {
        return state;
      }
    }
  });
};
