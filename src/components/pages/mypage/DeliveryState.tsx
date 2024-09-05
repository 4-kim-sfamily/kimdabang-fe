export default function DeliveryState({
  state,
  count,
}: {
  state: string;
  count: number;
}) {
  return (
    <li className="delivery-state">
      {/* div에 고정된 크기와 중앙 정렬 적용 */}
      <div className="flex items-center justify-center w-16 h-16 bg-gray-200 rounded-3xl">
        {count}
      </div>
      <p>{state}</p>
    </li>
  );
}
