export default function DeliveryState({ state }: { state: string }) {
  return (
    <li className="delivery-state">
      <div />
      <p>{state}</p>
    </li>
  );
}
