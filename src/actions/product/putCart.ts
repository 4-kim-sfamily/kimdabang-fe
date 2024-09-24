import { fetchData } from "../common/common";

export const putCart = async (
  productCode: string,
  optionId: number,
  amount: number,
) => {
  const data = await fetchData(`/api/v1/cart/${productCode}`, "PUT", {
    productOptionId: optionId,
    amount,
  });
  return data;
};
