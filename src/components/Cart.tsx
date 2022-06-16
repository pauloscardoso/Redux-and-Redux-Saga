import React from "react";
import { useSelector } from "react-redux";

export const Cart: React.FC = () => {
  //pegar os itens do carrinho com useSelector
  const state = useSelector((state) => state);

  console.log(state);

  return (
    <table>
      <thead>
        <tr>
          <th>Product</th>
          <th>Preco</th>
          <th>Quantidade</th>
          <th>Subtotal</th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>
  );
};
