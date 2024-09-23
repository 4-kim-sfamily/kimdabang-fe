"use client";
import { optionType } from "@/types/ResponseType"; // optionType을 사용
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
  const [currentOptions, setCurrentOptions] = useState<optionType[]>([]);
  const [subOptions, setSubOptions] = useState<optionType[]>([]); // 하위 옵션 관리

  useEffect(() => {
    if (optionsData.length > 0) {
      setCurrentOptions(optionsData); // 첫 번째 depth의 옵션 설정
    }
  }, [optionsData]);

  // 옵션 선택 시 하위 옵션으로 이동
  const handleOptionChange = (
    optionId: number,
    value: string,
    children: optionType[] | undefined,
    depth: number,
  ) => {
    setSelectedOptions((prev) => ({ ...prev, [optionId]: value }));

    if (children && children.length > 0) {
      setSubOptions(children); // 하위 옵션 설정
    } else {
      setSubOptions([]); // 하위 옵션이 없으면 초기화
    }
  };

  // 하위 옵션 선택 시 상태 업데이트
  const handleSubOptionChange = (optionId: number, value: string) => {
    setSelectedOptions((prev) => ({ ...prev, [optionId]: value }));
  };

  // 선택된 옵션 값 표시
  const selectedOptionText = Object.values(selectedOptions).join(", ");

  // 모든 옵션이 선택되었는지 확인 (하위 옵션이 없는 상태)
  const allOptionsSelected =
    subOptions.length === 0 && Object.keys(selectedOptions).length > 0;

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
        {currentOptions.length > 0 ? (
          currentOptions.map((option) => (
            <div key={option.optionsId} className="mb-4">
              {/* depth가 홀수인 경우: 옵션 이름 표시 */}
              {option.depth % 2 !== 0 ? (
                <label className="block mb-2 text-lg font-bold">
                  {option.optionValue} {/* 옵션 이름 */}
                </label>
              ) : (
                // depth가 짝수인 경우: 드롭다운에서 선택
                <select
                  className="w-full p-2 border rounded"
                  defaultValue=""
                  onChange={(e) =>
                    handleOptionChange(
                      option.optionsId,
                      e.target.value,
                      option.children,
                      option.depth,
                    )
                  }
                >
                  <option value="" disabled>
                    {option.optionValue}을(를) 선택해주세요
                  </option>
                  {option.children?.map((childOption) => (
                    <option
                      key={childOption.optionsId}
                      value={childOption.optionValue}
                    >
                      {childOption.optionValue} {/* 옵션 값 */}
                    </option>
                  ))}
                </select>
              )}
            </div>
          ))
        ) : (
          <p>옵션이 없습니다.</p>
        )}

        {/* 하위 옵션 내용 */}
        {subOptions.length > 0 &&
          subOptions.map((subOption) => (
            <div key={subOption.optionsId} className="mb-4">
              {/* depth가 홀수인 경우: 하위 옵션 이름 표시 */}
              {subOption.depth % 2 !== 0 ? (
                <label className="block mb-2 text-lg font-bold">
                  {subOption.optionValue} {/* 하위 옵션 이름 */}
                </label>
              ) : (
                // depth가 짝수인 경우: 드롭다운에서 선택
                <select
                  className="w-full p-2 border rounded"
                  defaultValue=""
                  onChange={(e) =>
                    handleSubOptionChange(subOption.optionsId, e.target.value)
                  }
                >
                  <option value="" disabled>
                    {subOption.optionValue}을(를) 선택해주세요
                  </option>
                  {subOption.children?.map((childSubOption) => (
                    <option
                      key={childSubOption.optionsId}
                      value={childSubOption.optionValue}
                    >
                      {childSubOption.optionValue} {/* 하위 옵션 값 */}
                    </option>
                  ))}
                </select>
              )}
            </div>
          ))}

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
