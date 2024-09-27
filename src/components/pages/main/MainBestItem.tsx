import { getChildCategory } from "@/actions/main/category";
import ButtonGroup from "@/components/ui/ButtonGroup";
import MainTitle from "@/components/ui/mainTitle";
import { CategoryType } from "@/types/main/AllCategoryDataType";
import { OptionContextprovider } from "../../../context/OptionContext";
import CategoryBestItem from "./CategoryBestItem";
export default async function MainBestItem({
  authStatus,
}: {
  authStatus: boolean;
}) {
  // 여기도 BestItem으로 변경 필요
  const CategoryData: CategoryType[] = await getChildCategory();

  return (
    <section>
      <MainTitle
        title="스타벅스 베스트"
        description="스타벅스 인기 상품들을 만나보세요"
      />
      <OptionContextprovider>
        <ButtonGroup CategoryData={CategoryData} />
        <CategoryBestItem authStatus={authStatus} />
      </OptionContextprovider>
    </section>
  );
}
