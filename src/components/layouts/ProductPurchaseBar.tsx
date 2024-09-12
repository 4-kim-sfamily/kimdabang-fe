"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { DownwardArrow } from "../icons/Index";
import CartItemAmount from "../pages/cart/CartItemAmount";
import BottomNavButtonGroup from "./BottomNavButtonGroup";

export default function ProductPurchaseBar() {
  const [isOptionVisible, setIsOptionVisible] = useState(false);
  const [options, setOptions] = useState<
    { optionId: string; optionDetail: string }[]
  >([]); // 옵션 데이터를 저장할 상태
  const productCode = useParams().productCode;

  // 옵션 데이터를 가져오기 위한 비동기 함수
  const fetchOptions = async () => {
    try {
      console.log("Fetching options for product code:", productCode);

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_JSONSERVER_URL}/productOptionList?productCode=${productCode}`,
      );

      if (!response.ok) {
        throw new Error(`Error fetching productOptionList: ${response.status}`);
      }

      const productOptionList = await response.json();
      console.log("Product Option List:", productOptionList);

      if (productOptionList.length > 0) {
        const optionIds = productOptionList[0].optionId;
        console.log("Option IDs:", optionIds);

        // 각 optionId에 대해 fetch 요청 보내기 (Promise.all 사용)
        const fetchedOptions = await Promise.all(
          optionIds.map(async (id: string) => {
            const optionResponse = await fetch(
              `${process.env.NEXT_PUBLIC_JSONSERVER_URL}/option?optionId=${id}`,
            );
            if (!optionResponse.ok) {
              throw new Error(
                `Error fetching option ${id}: ${optionResponse.status}`,
              );
            }
            const optionData = await optionResponse.json();
            console.log(`Fetched Option ${id}:`, optionData);
            return optionData;
          }),
        );

        // 평탄화(flat) 처리하여 options 배열 설정
        setOptions(fetchedOptions.flat());
        console.log("Flattened Options:", fetchedOptions.flat());
      } else {
        console.log("No options found for the product.");
      }
    } catch (error) {
      console.error("Error fetching options:", error);
      setOptions([]); // 오류 발생 시 빈 배열로 설정
    }
  };

  // 옵션이 보일 때마다 데이터를 fetch
  useEffect(() => {
    if (isOptionVisible) {
      fetchOptions();
    }
  }, [isOptionVisible]);

  const handlePurchaseClick = () => {
    setIsOptionVisible(true);
  };

  return (
    <nav className="bg-white w-full fixed bottom-0">
      <BottomNavButtonGroup
        handleGiftClick={function (): void {
          throw new Error("Function not implemented.");
        }}
        handlePurchaseClick={handlePurchaseClick}
        handleCartClick={function (): void {
          throw new Error("Function not implemented.");
        }}
      ></BottomNavButtonGroup>
      {/* 옵션 선택 창 */}
      <div
        className={`fixed flex flex-col gap-2 bottom-0 left-0 w-full rounded-t-xl  border-[0.1rem] border-t-[#01a862] border-x-[#01a862] bg-white p-4 transition-transform duration-500 ${
          isOptionVisible ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <button className="mx-auto" onClick={() => setIsOptionVisible(false)}>
          <DownwardArrow />
        </button>

        <h2 className="text-lg font-bold">옵션 선택</h2>
        <hr />
        {/* 옵션 내용 */}
        {options.length > 0 ? (
          options.map((option) => (
            <p key={option.optionId}>{option.optionDetail}</p>
          ))
        ) : (
          <p>옵션이 없습니다.</p>
        )}
        <hr />
        <CartItemAmount price={50000} amount={1}></CartItemAmount>
        {/* 옵션 닫기 버튼 */}
        <BottomNavButtonGroup
          handleGiftClick={function (): void {
            throw new Error("Function not implemented.");
          }}
          handlePurchaseClick={function (): void {
            throw new Error("Function not implemented.");
          }}
          handleCartClick={function (): void {
            throw new Error("Function not implemented.");
          }}
        ></BottomNavButtonGroup>
      </div>
    </nav>
  );
}
