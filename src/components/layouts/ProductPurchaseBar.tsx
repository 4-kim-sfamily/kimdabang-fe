"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { DownwardArrow } from "../icons/Index";
import CartItemAmount from "../pages/cart/CartItemAmount";
import BottomNavButtonGroup from "./BottomNavButtonGroup";

export default function ProductPurchaseBar() {
  const [isOptionVisible, setIsOptionVisible] = useState(false);
  const [options, setOptions] = useState<
    { optionId: string; optionDetail: string; optionValue: string[] }[]
  >([]); // 옵션 데이터를 저장할 상태
  const [selectedOptions, setSelectedOptions] = useState<{
    [key: string]: string;
  }>({}); // 선택한 옵션 값 저장

  const productCode = useParams().productCode;

  // 옵션 데이터를 가져오기 위한 비동기 함수
  const fetchOptions = async () => {
    try {
      // 현재 JSONSERVER에서 받는데 이후, 변경 필요
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_JSONSERVER_URL}/productOptionList?productCode=${productCode}`,
      );

      if (!response.ok) {
        throw new Error(`제품 옵션리스트 Fetching 실패: ${response.status}`);
      }
      const productOptionList = await response.json();

      if (productOptionList.length > 0) {
        // 옵션 ID
        const optionIds = productOptionList[0].optionId;

        // 각 optionId에 대해 fetch 요청 보내기 (Promise.all 사용)
        const fetchedOptions = await Promise.all(
          optionIds.map(async (id: string) => {
            const optionResponse = await fetch(
              `${process.env.NEXT_PUBLIC_JSONSERVER_URL}/option?optionId=${id}`,
            );
            if (!optionResponse.ok) {
              throw new Error(
                `옵션 FEtch 실패 ${id}: ${optionResponse.status}`,
              );
            }
            const optionData = await optionResponse.json();
            return optionData;
          }),
        );

        // 평탄화(flat) 처리하여 options 배열 설정
        setOptions(fetchedOptions.flat());
      } else {
        console.log("옵션이 없는 제품");
      }
    } catch (error) {
      console.error("옵션 Fetch 실패", error);
      setOptions([]); // 오류 발생 시 빈 배열로 설정
    }
  };

  // 옵션이 보일 때마다 데이터를 fetch
  useEffect(() => {
    if (isOptionVisible) {
      fetchOptions();
    }
  }, [isOptionVisible]);

  // 옵션이 변경될 때 상태 업데이트
  const handleOptionChange = (optionId: string, value: string) => {
    setSelectedOptions((prev) => ({ ...prev, [optionId]: value }));
  };

  // 선택된 옵션 값 표시
  const selectedOptionText = Object.values(selectedOptions).join(", ");

  // 모든 옵션이 선택되었는지 확인
  const allOptionsSelected =
    Object.keys(selectedOptions).length === options.length;

  const handlePurchaseClick = () => {
    setIsOptionVisible(true);
  };

  return (
    <nav className="bg-white w-full fixed bottom-0">
      <BottomNavButtonGroup
        handleGiftClick={function (): void {}}
        handlePurchaseClick={handlePurchaseClick}
        handleCartClick={function (): void {}}
      ></BottomNavButtonGroup>

      {/* 옵션 선택 창 */}
      <div
        className={`fixed flex flex-col gap-2 bottom-0 left-0 w-full rounded-t-xl border-[0.1rem] border-t-[#01a862] border-x-[#01a862] bg-white p-4 transition-transform duration-500 ${
          isOptionVisible ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <button
          className="mx-auto"
          onClick={() => {
            setIsOptionVisible(false);
          }}
        >
          <DownwardArrow />
        </button>
        <h2 className="text-lg font-bold">옵션 선택</h2>
        <hr />

        {/* 옵션 내용 */}
        {options.length > 0 ? (
          options.map((option) => (
            <div key={option.optionId} className="mb-4">
              <label className="block mb-2 text-lg font-bold">
                {option.optionDetail}
              </label>
              <select
                className="w-full p-2 border rounded"
                defaultValue=""
                onChange={(e) =>
                  handleOptionChange(option.optionId, e.target.value)
                }
              >
                <option value="" disabled>
                  옵션을 선택해주세요
                </option>
                {option.optionValue.map((value, index) => (
                  <option key={index} value={value}>
                    {value}
                  </option>
                ))}
              </select>
            </div>
          ))
        ) : (
          <p>옵션이 없습니다.</p>
        )}
        <hr />

        {/* 모든 옵션이 선택되면 CartItemAmount와 TextBox 표시 */}
        {allOptionsSelected && (
          <div className="flex items-center gap-4">
            <input
              type="text"
              className="w-1/2 p-2 border-white rounded"
              value={selectedOptionText} // 선택된 옵션 값 표시
              readOnly
            />
            <CartItemAmount price={50000} amount={1}></CartItemAmount>
          </div>
        )}

        <BottomNavButtonGroup
          handleGiftClick={function (): void {}}
          handlePurchaseClick={function (): void {}}
          handleCartClick={function (): void {}}
        ></BottomNavButtonGroup>
      </div>
    </nav>
  );
}
