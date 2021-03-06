import React from "react";

import { api } from "../services/api";
import { IProduct } from "../store/modules/cart/types";
import { CatalogItem } from "./CatalogItem";

export const Catalog: React.FC = () => {
  const [catalog, setCatalog] = React.useState<IProduct[]>([]);

  React.useEffect(() => {
    api.get("products").then((response) => {
      setCatalog(response.data);
    });
  }, []);

  return (
    <main>
      <h1>Catalog</h1>

      {catalog.map((product) => (
        <CatalogItem key={product.id} product={product} />
      ))}
    </main>
  );
};
