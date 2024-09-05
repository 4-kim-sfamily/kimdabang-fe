import ProductState from "./ProductState";

interface ProductStateResponse {
  state: string;
  amount: number;
}

const predefinedStates = ["취소", "교환", "반품", "구매확정"];

export default async function ProductStateList() {
  // 서버 컴포넌트에서 데이터 fetch
  const res = await fetch(`${process.env.JSONSERVER_URL}/productstatelist`, {
    cache: "no-store",
  });
  const data: ProductStateResponse[] = await res.json();

  // 각 상태에 맞는 amount를 찾아서 매핑
  const stateAmountMap: { [key: string]: number } = predefinedStates.reduce(
    (acc, state) => {
      const matchedItem = data.find((item) => item.state === state);
      acc[state] = matchedItem ? matchedItem.amount : 0; // 해당 상태가 없으면 0으로 설정
      return acc;
    },
    {} as { [key: string]: number },
  );

  return (
    <section className="flex justify-between my-2 text-[0.7rem] rounded-xl bg-gray-200 p-2 mb-2 text-gray-500">
      {predefinedStates.map((state) => (
        <ProductState
          key={state}
          state={state}
          amount={stateAmountMap[state]}
        />
      ))}
    </section>
  );
}
