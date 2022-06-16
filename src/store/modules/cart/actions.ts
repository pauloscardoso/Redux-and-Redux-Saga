import { IProduct } from './types';

export const addProductToCart = (product: IProduct) => {
  return {
    //Propriedade obrigatória
    type: 'ADD_PRODUCT_TO_CART',
    // payload é qualquer informação adicional para adicionar um produto ao carrinho. São todos os parametroc que recebemos do componente.
    payload: {
      product,
    }
  }
}