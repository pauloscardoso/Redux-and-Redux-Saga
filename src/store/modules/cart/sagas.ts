//Configurações do SAGA relacionadas ao módulo Cart
//Takelast fica observando as chamadas e se uma chamada ainda não foi concluida e outra acionada, ele cancela as anteriores e executa a última
import { AxiosResponse } from "axios";
import { all, takeLatest, select, call, put } from "redux-saga/effects";
import { IState } from "../..";
import { api } from "../../../services/api";

import {
  addProductToCartFailure,
  addProductToCartRequest,
  addProductToCartSuccess,
} from "./actions";
import { ActionTypes } from "./types";

type checkProductStockRequest = ReturnType<typeof addProductToCartRequest>;

interface IStockReponse {
  id: number;
  quantity: number;
}

//Função que verifica o estoque do produto.
//O Saga vai interceptar a Action de colocar um produto no carrinho e verificar se o produto tem estoque antes de adicionar
function* checkProductStock({ payload }: checkProductStockRequest) {
  const { product } = payload;

  //Verifica a quantidade do produto que está no carrinho ou zera se não houver produto no carrinho
  const currentQuantity: number = yield select((state: IState) => {
    return (
      state.cart.items.find((item) => item.product.id === product.id)
        ?.quantity ?? 0
    );
  });
  //Vai no estoque
  const availableStockResponse: AxiosResponse<IStockReponse> = yield call(
    api.get,
    `stock/${product.id}`
  );
  //verifica se o número do estoque é, pelo menos, 1x maior que a quantidade do que foi posto no carrinho, ou se há produtos em estoque
  if (availableStockResponse.data.quantity > currentQuantity) {
    yield put(addProductToCartSuccess(product));
  } else {
    yield put(addProductToCartFailure(product.id));
  }
}

//all é uma função que recebe um array
//Se a checagem der certo, o produto poderá ser adicionado no carrinho
export default all([
  takeLatest(ActionTypes.addProductToCartRequest, checkProductStock),
]);
