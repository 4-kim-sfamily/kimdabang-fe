"use client";
import { putCart } from "@/actions/product/putCart";
import { optionType } from "@/types/ResponseType";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { DownwardArrow } from "../icons/Index";
import CartItemAmount from "../pages/cart/CartItemAmount";
import BottomNavButtonGroup from "./BottomNavButtonGroup";

interface ProductPurchaseBarProps {
  productCode: string; // 상품 코드
  optionsData: optionType[]; // 부모 컴포넌트로부터 넘겨받는 옵션 데이터
  productPrice: number; // 상품 가격
}

export default function ProductPurchaseBar({
  productCode,
  optionsData,
  productPrice,
}: ProductPurchaseBarProps) {
  const router = useRouter();
  const [isOptionVisible, setIsOptionVisible] = useState(false);
  const [selectedOptionId, setSelectedOptionId] = useState<number | null>(null); // 선택한 OptionId 저장
  const [childOptions, setChildOptions] = useState<optionType[]>([]); // 하위 옵션 저장
  const [selectedChildOption, setSelectedChildOption] = useState<string | null>(
    null,
  ); // 하위 옵션 선택 값 저장
  const [selectedOptionsText, setSelectedOptionsText] = useState<string>(""); // 최종 선택된 옵션 값 저장
  const [selectedChildOptionId, setSelectedChildOptionId] = useState<
    number | null
  >(null); // 하위 옵션 선택 값 저장
  // 초기 옵션은 optionsData[0]으로 설정
  const initialOption = optionsData[0];
  const [amount, setAmount] = useState(1);
  const handleAmountChange = (newAmount: number) => {
    setAmount(newAmount);
  };

  // 비동기 함수: 이벤트 핸들러 안에서 사용
  const handleCartClick2 = async () => {
    try {
      const response = await putCart(
        productCode,
        selectedChildOptionId ? selectedChildOptionId : 0,
        amount,
      );

      alert("장바구니에 추가되었습니다.");
    } catch (error) {
      console.error("장바구니 추가 중 오류 발생:", error);
    }
  };

  const handlePurchaseClick = () => {
    if (selectedOptionId) {
      router.push(
        `/checkout?type=buyNow&productCode=${productCode}&optionId=${selectedOptionId}&amount=${amount}`,
      );
    } else {
      router.push(
        `/checkout?type=buyNow&productCode=${productCode}&optionId=0&amount=${amount}`,
      );
    }
  };
  // 선택한 옵션의 하위 옵션 검색 및 자동으로 첫 번째 자식을 선택
  useEffect(() => {
    if (selectedOptionId) {
      const selectedOption = initialOption.children.find(
        (option) => option.optionsId === selectedOptionId,
      );
      if (selectedOption && selectedOption.children.length > 0) {
        setChildOptions(selectedOption.children); // 하위 옵션 배열을 저장
      }
    }
  }, [selectedOptionId, initialOption]);

  // 상위 옵션 선택
  const handleOptionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOptionId(Number(e.target.value)); // 선택한 OptionId 업데이트
    setSelectedChildOption(null); // 상위 옵션을 바꾸면 하위 옵션 초기화
  };

  const handleChildOptionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = childOptions[0].children.find(
      (option) => option.optionValue === e.target.value,
    );
    if (selectedOption) {
      setSelectedChildOption(selectedOption.optionValue); // 하위 옵션 선택 값 저장)
      setSelectedChildOptionId(selectedOption.optionsId);
      console.log("선택된 OptionId: ", selectedOption.optionsId); // 선택된 optionId 확인
      // 추가로 선택된 optionId를 저장하려면 여기에 상태 업데이트 로직을 넣을 수 있습니다.
    }
  };
  // 모든 옵션이 선택되었을 때 텍스트로 출력
  useEffect(() => {
    if (selectedOptionId && selectedChildOption) {
      const selectedOption = initialOption.children.find(
        (option) => option.optionsId === selectedOptionId,
      );
      setSelectedOptionsText(
        `선택한 옵션: ${selectedOption?.optionValue} - ${selectedChildOption}`,
      );
    }
  }, [selectedOptionId, selectedChildOption, initialOption]);

  const handleButtonClick = () => {
    setIsOptionVisible(true);
  };

  return (
    <nav className="bg-white w-full fixed bottom-0">
      <BottomNavButtonGroup
        handleGiftClick={handleButtonClick}
        handlePurchaseClick={handleButtonClick}
        handleCartClick={handleButtonClick}
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

        {/* 초기 옵션 선택 */}
        {initialOption && (
          <div className="mb-4">
            <label className="block mb-2 text-lg font-bold">
              {initialOption.optionValue}
            </label>
            <select
              className="w-full p-2 border rounded"
              defaultValue=""
              onChange={handleOptionChange}
            >
              <option value="" disabled>
                옵션을 선택해주세요
              </option>
              {initialOption.children.map((childOption) => (
                <option
                  key={childOption.optionsId}
                  value={childOption.optionsId}
                >
                  {childOption.optionValue}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* 하위 옵션 배열을 표시 */}
        {childOptions.length > 0 && (
          <div className="mb-4">
            <label className="block mb-2 text-lg font-bold">{`${childOptions[0].optionValue}`}</label>
            <select
              className="w-full p-2 border rounded"
              onChange={handleChildOptionChange}
              value={selectedChildOption || ""}
            >
              <option value="" disabled>
                옵션을 선택해주세요
              </option>
              {childOptions[0].children.map((lastOption) => (
                <option
                  key={lastOption.optionsId}
                  value={lastOption.optionValue}
                >
                  {lastOption.optionValue}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* 선택된 옵션 출력 */}
        {selectedOptionsText && (
          <div className="mt-4 p-2 bg-gray-100 rounded">
            <p className="text-lg">{selectedOptionsText}</p>
          </div>
        )}
        <CartItemAmount
          price={productPrice}
          amount={amount}
          onAmountChange={handleAmountChange}
        />
        <BottomNavButtonGroup
          handleGiftClick={() => {}}
          handlePurchaseClick={handlePurchaseClick}
          handleCartClick={handleCartClick2}
        ></BottomNavButtonGroup>
      </div>
    </nav>
  );
}
