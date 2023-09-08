import prismaDb from "@/lib/db";

export const getCategories = async () => {
  const categories = await prismaDb.category.findMany();

  return categories;
};
