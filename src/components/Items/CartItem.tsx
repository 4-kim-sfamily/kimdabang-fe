import { getCartItem } from "@/actions/cart/getCartItemData";
import { getProductInfo } from "@/actions/getProductInfo";
import { getProductCodeInfo } from "@/actions/productOption/getProductOption";
import { XCircle } from "@/components/icons/Index";
import { cartItem } from "@/types/items/Cart";
import { ProductType } from "@/types/ResponseType";
import Image from "next/image";
import Link from "next/link";
import CartItemAmountFetch from "../pages/cart/CartItemAmountFetch";
import DeleteCartItem from "../pages/cart/DeleteCartItem";
import { Skeleton } from "../ui/skeleton";

export default async function CartItem({
  productCode,
  productOptionId,
}: {
  productCode: string;
  productOptionId: number;
}) {
  const [item, info] = await Promise.all([
    getCartItem({ productCode }) as Promise<cartItem>,
    getProductInfo(productCode) as Promise<ProductType>,
  ]);

  let option = "";
  if (productOptionId !== 0) {
    option = await getProductCodeInfo(productCode, productOptionId.toString());
  }

  return (
    <figure className="flex w-full gap-2">
      <div className="relative w-full max-w-24 aspect-square">
        {info.description ? (
          <Image
            src={info.description}
            alt="digh"
            width={300}
            height={300}
            priority
          />
        ) : (
          <Skeleton className="w-full h-full bg-[#e5e7eb]" />
        )}
      </div>
      <ul className="w-full flex flex-col justify-between">
        <li className="flex w-full justify-between">
          <Link
            href={`/product/${productCode}`}
            className="font-extrabold max-w-44"
          >
            {info.productName}
          </Link>
          <DeleteCartItem
            productOptionId={productOptionId}
            productCode={productCode}
          >
            <XCircle />
          </DeleteCartItem>
        </li>
        <li>
          <p>{option}</p>
          <CartItemAmountFetch
            price={info.productPrice}
            amount={item.amount}
            productCode={productCode}
            productOptionId={productOptionId}
          />
        </li>
      </ul>
    </figure>
  );
}
