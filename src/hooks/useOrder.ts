import { useState } from "react";
import type { MenuItem, OrderItem } from "../types";

// Creamos un type para el order llamado OrderItem

// Si ya tenemos un tipo porque se lo asigna del valor inicial, no hace falta especificarlo como en total o auth
//   const [total, setTotal] = useState(0);
//   const [auth, setAuth] = useState<>(false);

export default function useOrder() {
  // Creamos un hook y le asignamos el tipo OrderItem
  const [order, setOrder] = useState<OrderItem[]>([]);
  // Creamos un hook para las propinas
  const [tip, setTip] = useState(0);
  // Creamos la funcion addItem a la que le pasamos un item desde MenuItem de tipo MenuItem
  const addItem = (item: MenuItem) => {
    // Comprobamos si el item existe en el array de order
    const itemExist = order.find((orderItem) => orderItem.id === item.id);
    // Si el item no existe lo agregamos y si existe le aumentamos la cantidad
    if (itemExist) {
      // Usamos un map para recorrer el array, en caso de que el id sea igual, le aumentamos la cantidad en 1 y si no es igual devolvemos el elemento como estaba
      const updatedOrder = order.map((orderItem) =>
        orderItem.id === item.id
          ? { ...orderItem, quantity: orderItem.quantity + 1 }
          : orderItem
      );
      // Le asignamos a order el nuevo array modificado
      setOrder(updatedOrder);
    } else {
      // Creamos un nuevo item a la que le asignamos un typo OrderItem. Copiamos el item y le añadimos la cantidad
      const newItem: OrderItem = { ...item, quantity: 1 };
      // A la orden, le copiamos el array anterior y le agregamos el nuevo item
      setOrder([...order, newItem]);
    }
  };

  // Creamos una funcion que elimina el elemento al pulsar el boton x de OrderContents. Para ello usa un filtro y si el item.id es diferente de id lo guarda el elemento
  const removeItem = (id: MenuItem["id"]) => {
    setOrder(order.filter((item) => item.id !== id));
  };

  // Funcion
  const placeOrder = () => {
    setOrder([]);
    setTip(0);
  };

  return {
    addItem,
    order,
    removeItem,
    tip,
    setTip,
    placeOrder,
  };
}
