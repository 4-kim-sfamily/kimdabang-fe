import AddressForm from "@/components/forms/AddressForm";

export default function page() {
  return (
    <main className="p-4">
      <p className="text-2xl font-extrabold pt-4 pl-4">배송지 선택</p>
      <AddressForm />
    </main>
  );
}
