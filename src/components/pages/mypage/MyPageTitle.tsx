export default function MyPageTitle({
  username = "GUEST",
}: {
  username: string;
}) {
  return (
    <header>
      <h3 className="text-xl my-1">{username}님</h3>
      <h4 className=" font-extrabold">스타벅스에서 즐거운 쇼핑 되세요 !</h4>
    </header>
  );
}
