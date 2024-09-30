export default function DeliveryState({
  state,
  count,
}: {
  state: string;
  count: number;
}) {
  return (
    <li className="delivery-state flex flex-col items-center">
      <div className="flex items-center justify-center aspect-square w-[14vw] max-w-[180px] bg-gray-200 rounded-2xl">
        {count}
      </div>
      <p className="text-sm min-w-14">{state}</p>
    </li>
  );
}
