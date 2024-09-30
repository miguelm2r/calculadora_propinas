import { formatCurrency } from "../helpers";
import { MenuItem, OrderItem } from "../types";

// Declaramos el tipo de la variable order y de la funcion removeItem
type orderContentsProps = {
  order: OrderItem[];
  removeItem: (id: MenuItem["id"]) => void;
};

// En este componente, iremos visualizando los elementos de la orden. Para ello le pasamos order
export default function OrderContents({
  order,
  removeItem,
}: orderContentsProps) {
  return (
    <div>
      <h2 className="font-black text-4xl">Consumo</h2>
      <div className="space-y-3 mt-10">
        {order.map((item) => (
          <div
            key={item.id}
            className="flex justify-between border-t border-gray-200 py-5 last-of-type:border-b items-center"
          >
            <div>
              <p className="text-lg">
                {item.name} - {formatCurrency(item.price)}
              </p>
              <p className="font-black">
                Cantidad: {item.quantity} -{" "}
                {formatCurrency(item.price * item.quantity)}
              </p>
            </div>
            <button
              className="bg-red-600 h-8 w-8 rounded-full text-white font-black"
              onClick={() => removeItem(item.id)}
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
