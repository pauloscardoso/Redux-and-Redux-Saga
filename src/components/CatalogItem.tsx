import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { IState } from "../store";
import { addProductToCartRequest } from "../store/modules/cart/actions";
import { IProduct } from "../store/modules/cart/types";

interface CatalogItemProps {
  product: IProduct;
}

export const CatalogItem: React.FC<CatalogItemProps> = ({ product }) => {
  const dispatch = useDispatch();

  const hasFailedStockCheck = useSelector<IState, boolean>((state) => {
    return state.cart.failedStockCheck.includes(product.id);
  });

  const handleAddProductToCart = React.useCallback(() => {
    dispatch(addProductToCartRequest(product));
  }, [dispatch, product]);

  return (
    <article>
      <strong>{product.title}</strong> {" - "}
      <span>{product.price}</span> {"  "}
      <button type="button" onClick={handleAddProductToCart}>
        Comprar
      </button>
      {hasFailedStockCheck && (
        <span style={{ color: "red" }}>falta de estoque</span>
      )}
    </article>
  );
};
