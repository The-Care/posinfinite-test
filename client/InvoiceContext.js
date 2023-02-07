import React, { createContext, useState } from "react";
import { getProduct } from "./dataProduct/ProductService";

export const InvoiceContext = createContext();

export function InvoiceProvider(props) {
  const [items, setItems] = useState([]);

  function addItemToInvoice(id) {
    const product = getProduct(id);
    setItems((prevItems) => {
      const item = prevItems.find((item) => item.id == id);
      if (!item) {
        return [
          ...prevItems,
          {
            id,
            qty: 1,
            product,
            totalPrice: product.price,
          },
        ];
      } else {
        return prevItems.map((item) => {
          if (item.id == id) {
            item.qty++;
            item.totalPrice += product.price;
          }
        });
      }
    });
  }
  function getItemCount() {
    return items.reduce((sum, item) => sum + item.qty, 0);
  }
  function getTotalPrice() {
    return items.reduce((sum, item) => sum + item.totalPrice, 0);
  }

  return (
    <InvoiceContext.Provider
      value={{ items, getItemCount, addItemToInvoice, getTotalPrice }}
    >
      {props.children}
    </InvoiceContext.Provider>
  );
}
