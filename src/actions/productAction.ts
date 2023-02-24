import { axiosClient } from "@/utils/axiosClient";
import { Products } from "@/models/Product";

export const getProducts = async (apiPath: string): Promise<Products> => {
  const response = await axiosClient.get<Products>(apiPath);
  return response.data;
};
