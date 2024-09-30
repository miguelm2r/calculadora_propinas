import type { MenuItem } from "../types";

type MenuItemProps = {
  item: MenuItem;
  // El tipo de addItem es una funcion que no retorna nada
  addItem: (item: MenuItem) => void;
};

/* Aqui importamos el type MenuItem y se lo asignamos a item. Creamos un type
 llamado MenuItemProps. Desde App.tsx le mandamos un item que sera de tipo
 MenuItemProps
*/

export default function MenuItem({ item, addItem }: MenuItemProps) {
  return (
    //Al pulsar el boton, se llama a la funcion addItem de useOrders
    <button
      className="border-2 border-teal-400 hover:bg-teal-200 w-full p-3 flex justify-between"
      onClick={() => addItem(item)}
    >
      <p>{item.name}</p>
      <p className="font-black">{item.price}€</p>
    </button>
  );
}
