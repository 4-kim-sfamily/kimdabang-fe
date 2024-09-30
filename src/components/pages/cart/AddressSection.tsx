import {
  getAddressById,
  getShippingAddressDefault,
} from "@/actions/shipping/shippingActions";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function AddressSection({ id }: { id?: number }) {
  let data = id ? await getAddressById(id) : await getShippingAddressDefault();
  if (!data) {
    return (
      <Link href={"/shipping/addShippingAddress"}>
        <Button className="mt-[56px] py-4 mx-auto text-red-600">
          배송지를 등록해주세요
        </Button>
      </Link>
    );
  }
  return (
    <section className="mt-[56px] w-full p-3 text-sm bg-[#eeeeebcc] py-5">
      <ul className="flex justify-between mb-1">
        <li className="flex gap-1 items-center">
          <p className="font-extrabold">{`${data.addressName}`}</p>
          {!id && (
            <div className="text-[8px] h-[13px] text-[#12BD84] bg-[#B8ECDA] rounded-sm px-[3px] leading-[13px]">
              기본
            </div>
          )}
        </li>
        <Link href={"/shipping"} className="text-[#a88855]">
          배송지 변경
        </Link>
      </ul>
      <p>{`${data.address}`}</p>
      <p>{`${data.phone.replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3")}`}</p>
    </section>
  );
}
