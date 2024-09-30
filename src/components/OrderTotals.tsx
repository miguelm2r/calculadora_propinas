import { useMemo } from "react";
import { OrderItem } from "../types";
import { formatCurrency } from "../helpers";
type OrderTotalsProps = {
  order: OrderItem[];
  tip: number;
  placeOrder: () => void;
};
export default function OrderTotals({
  order,
  tip,
  placeOrder,
}: OrderTotalsProps) {
  // useMemo nos permite solo usar el codigo cuando cambia
  // El método reduce() ejecuta una función reductora sobre cada elemento de un array, devolviendo como resultado un único valor.
  const subtotalAmount = useMemo(
    () => order.reduce((total, item) => total + item.quantity * item.price, 0),
    [order]
  );
  const tipAmount = useMemo(() => subtotalAmount * tip, [tip, order]);
  const totalAmount = useMemo(() => subtotalAmount + tipAmount, [tip, order]);
  return (
    <>
      <div className="space-y-3">
        <h2 className="font-black text-2xl">Totales y Propina:</h2>
        <p>
          Subtotal a pagar:{" "}
          <span className="font-bold">{formatCurrency(subtotalAmount)}</span>
        </p>
        <p>
          Propina:{" "}
          <span className="font-bold">{formatCurrency(tipAmount)}</span>
        </p>
        <p>
          Total a pagar:{" "}
          <span className="font-bold">{formatCurrency(totalAmount)}</span>
        </p>
      </div>
      <button
        className="w-full bg-black text-white uppercase p-3 mt-10 font-bold disabled:opacity-10"
        disabled={totalAmount === 0}
        onClick={placeOrder}
      >
        Guardar Orden
      </button>
    </>
  );
}
