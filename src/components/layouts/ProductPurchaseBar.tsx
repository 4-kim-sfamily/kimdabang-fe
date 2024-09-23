"use client";
import { optionType } from "@/types/ResponseType";
import { useEffect, useState } from "react";
import { DownwardArrow } from "../icons/Index";
import CartItemAmount from "../pages/cart/CartItemAmount";
import BottomNavButtonGroup from "./BottomNavButtonGroup";

interface ProductPurchaseBarProps {
  optionsData: optionType[]; // 부모 컴포넌트로부터 넘겨받는 옵션 데이터
  productPrice: number; // 상품 가격
}
export default function ProductPurchaseBar({
  optionsData,
  productPrice,
}: ProductPurchaseBarProps) {
  const [isOptionVisible, setIsOptionVisible] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<{
    [key: string]: string;
  }>({}); // 선택한 옵션 값 저장

  // 옵션이 보일 때마다 데이터를 fetch 대신 props로 받은 optionsData 설정
  const [options, setOptions] = useState<optionType[]>([]);

  useEffect(() => {
    if (optionsData.length > 0) {
      setOptions(optionsData); // props로 전달된 데이터로 옵션 설정
    }
  }, [optionsData]);

  // 옵션이 변경될 때 상태 업데이트
  const handleOptionChange = (optionId: number, value: string) => {
    setSelectedOptions((prev) => ({ ...prev, [optionId]: value }));
  };

  // 선택된 옵션 값 표시
  const selectedOptionText = Object.values(selectedOptions).join(", ");

  // 모든 옵션이 선택되었는지 확인
  const allOptionsSelected =
    options.length > 0 &&
    options.every((option) => selectedOptions[option.optionsId]);

  const handlePurchaseClick = () => {
    setIsOptionVisible(true);
  };
  return (
    <nav className="bg-white w-full fixed bottom-0">
      <BottomNavButtonGroup
        handleGiftClick={() => {}}
        handlePurchaseClick={handlePurchaseClick}
        handleCartClick={() => {}}
      ></BottomNavButtonGroup>

      {/* 옵션 선택 창 */}
      <div
        className={`fixed flex flex-col gap-2 bottom-0 left-0 w-full rounded-t-xl border-[0.1rem] border-t-starbucks border-x-starbucks bg-white p-4 transition-transform duration-500 ${
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
            <div key={option.optionsId} className="mb-4">
              <label className="block mb-2 text-lg font-bold">
                {option.optionValue}
              </label>
              <select
                className="w-full p-2 border rounded"
                defaultValue=""
                onChange={(e) =>
                  handleOptionChange(option.optionsId, e.target.value)
                }
              >
                <option value="" disabled>
                  옵션을 선택해주세요
                </option>
                {option.children.map((childOption) => (
                  <option
                    key={childOption.optionsId}
                    value={childOption.optionValue}
                  >
                    {childOption.optionValue}
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
            <CartItemAmount price={productPrice} amount={1}></CartItemAmount>
          </div>
        )}

        <BottomNavButtonGroup
          handleGiftClick={() => {}}
          handlePurchaseClick={() => {}}
          handleCartClick={() => {}}
        ></BottomNavButtonGroup>
      </div>
    </nav>
  );
}
