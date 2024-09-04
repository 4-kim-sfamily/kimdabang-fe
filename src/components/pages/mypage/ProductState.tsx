interface ProductStateResponse {
  state: string;
  amount: number;
}

export default function ProductState({ state, amount }: ProductStateResponse) {
  return (
    <div className="flex w-20 justify-between">
      <span>{state}</span>
      <span>{amount}</span>
    </div>
  );
}
