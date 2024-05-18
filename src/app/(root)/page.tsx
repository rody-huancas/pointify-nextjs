import { products } from "@/assets/data";
import CardProduct from "@/components/card-product";
import Categories from "@/components/categories";

export default function Home() {
  return (
    <>
      <Categories />

      <ul className="grid md:grid-cols-2 gap-5 pt-8">
        {products.map((product) => (
          <li key={product.name}>
            <CardProduct product={product} />
          </li>
        ))}
      </ul>
    </>
  );
}
