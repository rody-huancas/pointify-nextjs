import { cn } from "@/lib/utils";
import { Product } from "@/types";
import Image from "next/image";

interface CardProductProps {
  product: Product;
}

const CardProduct = ({ product }: CardProductProps) => {
  const { name, image, discount, stock, price, description } = product;

  return (
    <div className="bg-background-foreground rounded-4xl p-6 space-y-5">
      <div className="flex items-center gap-x-6">
        <Image
          src={image}
          alt="Image"
          width={100}
          height={100}
          className="w-24 h-24 object-contain rounded-2xl"
        />
        <div className="space-y-2">
          <div className="flex items-center gap-x-2">
            {discount > 0 && (
              <span className="bg-primary/10 text-primary rounded-full px-2 py-1.5 text-sm font-bold">
                Descuento: {discount}%
              </span>
            )}
            {stock <= 0 && (
              <span className="py-1.5 px-2 bg-red-500/10 text-red-500 rounded-full text-sm font-bold">
                Sin existencias
              </span>
            )}
          </div>
          <h3 className="text-lg md:text-3xl font-bold line-clamp-1">{name}</h3>
        </div>
      </div>
      <p className="text-gray-500 line-clamp-2">{description}</p>
      <div className="flex items-center justify-between">
        <h4 className="text-2xl font-bold">${price.toFixed(2)}</h4>
        <button
          type="button"
          className={cn(
            "w-14 h-14 flex items-center justify-center rounded-full text-xl bg-primary border-4 border-background box-content hover:rotate-90 transition-transform duration-500",
            stock <= 0 &&
              "hover:rotate-0 text-gray-500 bg-background cursor-not-allowed"
          )}
        >
          <i className="fi fi-rr-plus"></i>
        </button>
      </div>
    </div>
  );
};

export default CardProduct;
