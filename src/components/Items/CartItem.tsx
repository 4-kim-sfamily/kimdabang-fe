import { getCartItem } from "@/actions/cart/getCartItemData";
import { getProductInfo } from "@/actions/getProductInfo";
import { getProductMedia } from "@/actions/getProductMedia";
import { XCircle } from "@/components/icons/Index";
import { cartItem } from "@/types/items/Cart";
import { ProductMediaType, ProductType } from "@/types/ResponseType";
import Image from "next/image";
import Link from "next/link";
import CartItemAmount from "../pages/cart/CartItemAmount";
import DeleteCartItem from "../pages/cart/DeleteCartItem";
import { Skeleton } from "../ui/skeleton";

export default async function CartItem({
  productCode,
}: {
  productCode: string;
}) {
  const [item, img, info] = await Promise.all([
    getCartItem({ productCode }) as Promise<cartItem>,
    getProductMedia(productCode) as Promise<ProductMediaType>,
    getProductInfo(productCode) as Promise<ProductType>,
  ]);
  console.log(img);
  return (
    <figure className="flex w-full gap-4">
      <div className="relative w-[32%] max-w-24 aspect-square">
        {img.mediaURL ? (
          <Image
            src={img.mediaURL}
            alt="digh"
            fill
            style={{ objectFit: "cover" }}
          />
        ) : (
          <Skeleton className="w-full h-full bg-[#e5e7eb]" />
        )}
      </div>
      <ul className="w-full flex flex-col justify-between">
        <li className="flex w-full justify-between mb-2">
          <Link href={"/상품상세페이지로"} className="font-extrabold">
            {info.productName}
          </Link>
          <DeleteCartItem
            apiUri="productCode 삭제"
            selectedProductCodes={productCode}
          >
            <XCircle />
          </DeleteCartItem>
        </li>
        <li>
          <CartItemAmount
            price={info.productPrice}
            discountedPrice={info.productPrice}
            amount={item.amount}
          />
        </li>
      </ul>
    </figure>
  );
}
