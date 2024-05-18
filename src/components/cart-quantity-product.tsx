import Image from "next/image";
import { ProductCart } from "@/types";

interface CardQuantityProductProps {
  product: ProductCart;
}

const CardQuantityProduct = ({ product }: CardQuantityProductProps) => {
  const { price, image, name, quantity } = product;

  return (
    <>
      <div className="flex items-center justify-between gap-x-5">
        <div className="flex items-center gap-x-4">
          <Image
            src={image}
            alt="Image"
            width={100}
            height={100}
            className="w-14 h-14 object-contain"
          />
          <h4 className="text-lg font-bold line-clamp-1">{name}</h4>
        </div>
        <span className="bg-background w-10 h-10 flex items-center justify-center rounded-full font-medium text-sm">
          x{quantity}
        </span>
      </div>

      <div className="flex items-center justify-between gap-x-5 mt-3">
        <div className="flex items-center gap-x-2">
          <button
            type="button"
            className="w-8 h-8 bg-primary rounded-full flex items-center justify-center"
          >
            <i className="fi fi-rr-minus"></i>
          </button>
          <button
            type="button"
            className="w-8 h-8 bg-primary rounded-full flex items-center justify-center"
          >
            <i className="fi fi-rr-plus"></i>
          </button>
        </div>

        <h3 className="text-lg font-medium">
            ${(price * quantity).toFixed(2)}
        </h3>
      </div>
    </>
  );
};

export default CardQuantityProduct;
