import { options } from "@/app/api/auth/[...nextauth]/options";
import { AddressContextprovider } from "@/app/context/AddressContext";
import AddressSection from "@/components/pages/cart/AddressSection";
import CartItemSection from "@/components/pages/cart/CartItemSection";
import { CartItemType } from "@/types/items/Cart";
import { Session } from "next-auth";
import { getServerSession } from "next-auth/next";
interface UserAddressResponseType {
  status: string;
  message: string;
  data: AddressData[];
}

interface AddressData {
  id: number;
  address: string;
  isDefault: boolean;
  addressName: string;
}
export default async function page() {
  const session: Session | null = await getServerSession(options);
  let addressData: UserAddressResponseType | null = null;
  if (session?.user?.accessToken) {
    const starRes = await fetch(
      `${process.env.BACKEND_URL}/api/v1/useraddress/get-useraddress`,
      {
        method: "GET",
        headers: {
          Authorization: `${session.user.accessToken}`,
          "Content-Type": "application/json",
        },
        cache: "no-store",
      },
    );
    if (starRes.ok) {
      addressData = await starRes.json();
      console.log(addressData?.data);
    } else {
      console.error("starData 받기 에러");
    }
  }
  const res = await fetch("http://localhost:4000/cartItemList", {
    cache: "no-store",
  });
  const cartItemList: CartItemType[] = await res.json();
  return (
    <main>
      <AddressContextprovider>
        {addressData && <AddressSection addressDataList={addressData?.data} />}
      </AddressContextprovider>

      <CartItemSection items={cartItemList} />
    </main>
  );
}
