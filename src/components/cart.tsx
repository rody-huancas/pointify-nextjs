import { productsCart } from "@/assets/data";
import CardQuantityProduct from "./cart-quantity-product";

const Cart = () => {
  const subtotalByProduct = productsCart.map(product => product.price * product.quantity);
  const subtotal = subtotalByProduct.reduce((acc, curr) => acc + curr, 0);
  const tax = subtotal * 0.18;
  const total = subtotal + tax;

  return (
    <aside className="fixed xl:static right-0 bg-background xl:bg-transparent p-5 xl:p-0 flex flex-col gap-y-8 2xl:gap-y-4 h-full z-50 w-[90%] sm:w-[70] lg:w-[50%] xl:w-full transition-all">
      <div className="relative basis-1/12">
        <i className="fi fi-rr-search absolute left-4 top-4 text-primary"></i>
        <input
          className="h-[58px] pl-12 pr-4 rounded-full outline-none w-full"
          placeholder="Buscar Productos"
        />
      </div>

      <div className="basis-11/12 overflow-y-auto flex flex-col bg-background-foreground rounded-4xl p-6">
        <section className="basis-1/12">
          <h1 className="text-2xl font-medium">Detalles de la Orden</h1>
        </section>
        <ul className="basis-8/12 max-h-full overflow-y-auto">
          {productsCart.map((product) => (
            <li key={product.name} className="border p-3 rounded-3xl mb-3">
              <CardQuantityProduct product={product} />
            </li>
          ))}
        </ul>
        <section className="basis-3/12 pt-2 flex flex-col justify-between gap-y-2">
          <ul className="space-y-1 2xl:space-y-3">
            <li className="flex items-center justify-between">
              <p className="text-gray-500">Subtotal:</p>
              <h3 className="text-lg font-bold">$ {subtotal.toFixed(2)}</h3>
            </li>
            <li className="flex items-center justify-between">
              <p className="text-gray-500">IVA (16%):</p>
              <h3 className="text-lg font-bold">$ {tax.toFixed(2)}</h3>
            </li>
            <li className="flex items-center justify-between">
              <p className="text-gray-500">Total:</p>
              <h3 className="text-lg font-bold">$ {total.toFixed(2)}</h3>
            </li>
          </ul>

          <button
            type="button"
            className="p-4 rounded-full bg-primary w-full font-medium hover:tracking-widest transition-all duration-300 ease-linear"
          >
            Confirmar Pedido
          </button>
        </section>
      </div>
    </aside>
  );
};

export default Cart;
