export default function page({ params }: { params: { id: string } }) {
  return <div className="w-fll h-[50px] text-5xl mx-30">{params.id}</div>;
}
