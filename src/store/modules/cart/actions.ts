import { ActionTypes, IProduct } from "./types";

export const addProductToCartRequest = (product: IProduct) => {
  return {
    //Propriedade obrigatória
    type: ActionTypes.addProductToCartRequest,
    // payload é qualquer informação adicional para adicionar um produto ao carrinho. São todos os parametros que recebemos do componente.
    payload: {
      product,
    },
  };
};

export const addProductToCartSuccess = (product: IProduct) => {
  return {
    //Propriedade obrigatória
    type: ActionTypes.addProductToCartSuccess,
    // payload é qualquer informação adicional para adicionar um produto ao carrinho. São todos os parametros que recebemos do componente.
    payload: {
      product,
    },
  };
};

export const addProductToCartFailure = (productId: number) => {
  return {
    //Propriedade obrigatória
    type: ActionTypes.addProductToCartFailure,
    // payload é qualquer informação adicional para adicionar um produto ao carrinho. São todos os parametros que recebemos do componente.
    payload: {
      productId,
    },
  };
};
