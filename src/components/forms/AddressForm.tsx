"use client";
import { AddAddress } from "@/actions/shipping/shippingActions";
import { AddAddressRequestData } from "@/types/RequestType";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../ui/button";

const addressSchema = z.object({
  addressName: z.string().min(1, "받는분을 입력하세요."),
  address: z.string().min(1, "기본주소를 입력하세요."),
  detailAddress: z.string().min(1, "상세주소를 입력하세요."),
  phone: z
    .string()
    .min(10, "유효한 연락처를 입력하세요.")
    .max(11, "유효한 연락처를 입력하세요."),
  isDefault: z.boolean().default(false),
  postalCode: z.string().min(5, "우편번호를 입력해주세요"),
});

type AddressFormValues = z.infer<typeof addressSchema>;

export default function AddressForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AddressFormValues>({
    resolver: zodResolver(addressSchema),
  });

  const onSubmit = async (data: AddressFormValues) => {
    const requestData: AddAddressRequestData = {
      address: `${data.address}${data.detailAddress}(${data.postalCode})`,
      isDefault: data.isDefault ?? false,
      addressName: data.addressName,
      phone: data.phone,
    };

    const resData = await AddAddress(requestData);
    if (resData === "OK") {
      router.back();
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 flex flex-col justify-between pt-8 gap-3"
    >
      <div>
        <div className={`input-wrapper`}>
          <label htmlFor="addressName" className="focus:text-sm">
            받는분
          </label>
          <input id="addressName" type="text" {...register("addressName")} />
        </div>
        {errors.addressName && (
          <p className="text-red-500">{errors.addressName.message}</p>
        )}
      </div>
      <div>
        <div className={`input-wrapper`}>
          <label htmlFor="postalCode">우편번호</label>
          <input
            id="postalCode"
            type="number"
            {...register("postalCode", { valueAsNumber: false })}
          />
        </div>
        {errors.postalCode && (
          <p className="text-red-500">{errors.postalCode.message}</p>
        )}
      </div>
      <div>
        <div className={`input-wrapper`}>
          <label htmlFor="address">기본주소</label>
          <input id="address" type="text" {...register("address")} />
        </div>
        {errors.address && (
          <p className="text-red-500">{errors.address.message}</p>
        )}
      </div>

      <div>
        <div className={`input-wrapper`}>
          <label htmlFor="detailAddress">상세주소</label>
          <input
            id="detailAddress"
            placeholder=""
            {...register("detailAddress")}
            className="input"
          />
        </div>
        {errors.detailAddress && (
          <p className="text-red-500">{errors.detailAddress.message}</p>
        )}
      </div>

      <div>
        <div className={`input-wrapper`}>
          <label htmlFor="phone">연락처</label>
          <input
            id="phone"
            type="number"
            {...register("phone", { valueAsNumber: false })}
          />
        </div>
        {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}
      </div>

      <div>
        <label htmlFor="isDefault" className="flex items-center gap-2 mt-3">
          <input id="isDefault" type="checkbox" {...register("isDefault")} />
          기본 배송지로 저장합니다
        </label>
        {errors.isDefault && (
          <p className="text-red-500">{errors.isDefault.message}</p>
        )}
      </div>

      <Button
        type="submit"
        variant="starbucks"
        size="lg"
        className="fixed left-[50%] translate-x-[-50%] bottom-5"
      >
        등록
      </Button>
    </form>
  );
}
