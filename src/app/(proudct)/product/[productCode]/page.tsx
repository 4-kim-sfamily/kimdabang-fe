import { options } from "@/app/api/auth/[...nextauth]/options";
import ProductContainer from "@/components/pages/product/[productId]/ProductContainer";
import { getServerSession } from "next-auth/next";

export default async function page({
  params,
}: {
  params: { productCode: string };
}) {
  const session = await getServerSession(options);
  const authStatus = Boolean(session?.user);
  return (
    <main>
      <ProductContainer
        productCode={params.productCode}
        authStatus={authStatus}
      />
    </main>
  );
}
