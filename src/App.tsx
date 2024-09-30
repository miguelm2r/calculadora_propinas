import { menuItems } from "./data/db";
import MenuItem from "./components/MenuItem";
import useOrder from "./hooks/useOrder";
import OrderContents from "./components/OrderContents";
import OrderTotals from "./components/OrderTotals";
import TipPercentageForm from "./components/TipPercentageForm";

function App() {
  //Le importamos useOrder de nuestros hook y se lo asignamos a addItem
  //Para que al pulsar el boton en el componente MenuItem, llame a useOrder y lo añada a la lista
  const { addItem, order, removeItem, tip, setTip, placeOrder } = useOrder();
  return (
    <>
      <header className="bg-teal-400 py-5">
        <h1 className="text-center text-4xl font-black">
          Calculadora de Propinas y Consumo
        </h1>
      </header>

      <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">
        <div className="p-5">
          <h2 className="text-4xl font-black">Menú</h2>
          {/* Estamos importando de la base de datos menuItems, luego de componentes
          MenuItem. Iteramos sobre la base de datos con un map. Dentro usa el componente
          MenuItem al que le pasamos la variable item */}
          <div className="space-y-3 mt-10">
            {menuItems.map((item) => (
              <MenuItem key={item.id} item={item} addItem={addItem} />
            ))}
          </div>
        </div>
        <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
          {order.length > 0 ? (
            <>
              {/* Incluimos el componente de OrderContents para ver lo que llevamos ordenado */}
              <OrderContents order={order} removeItem={removeItem} />
              {/* Incluimos el componente de seleccion de propina */}
              <TipPercentageForm setTip={setTip} tip={tip} />
              {/* Incluimos el componente ordertotals que nos calcula el precio final con propina */}
              <OrderTotals order={order} tip={tip} placeOrder={placeOrder} />
            </>
          ) : (
            <p className="text-center">La orden esta vacia</p>
          )}
        </div>
      </main>
    </>
  );
}

export default App;
