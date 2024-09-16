import { getShippingAddressDefault } from "@/actions/shipping/shippingActions";
import { shippingAddressType } from "@/types/ResponseType";
import Link from "next/link";

export default async function AddressSection({
  addressDataList,
}: {
  addressDataList?: shippingAddressType;
}) {
  const data = await getShippingAddressDefault();
  console.log(data);
  return (
    <section className="mt-[56px] w-full p-3 text-sm bg-[#eeeeebcc] py-5">
      <ul className="flex justify-between mb-1">
        <li className="flex gap-1 items-center">
          <p className="font-extrabold">{`배송지이름`}</p>
          {addressDataList && (
            <div className="text-[8px] h-[13px] text-[#12BD84] bg-[#B8ECDA] rounded-sm px-[3px] leading-[13px]">
              기본
            </div>
          )}
        </li>
        <Link href={"/shipping"} className="text-[#a88855]">
          배송지 변경
        </Link>
      </ul>
      <p>{`${data.addressName}`}</p>
      <p>{`${data.address}`}</p>
      <p>{`${data.phone}`}</p>
    </section>
  );
}
