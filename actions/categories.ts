import prismaDb from "@/lib/db";

export const getCategories = async () => {
  const categories = await prismaDb.category.findMany();

  return categories;
};

export const categoryExist = async (slug: string) => {
  const category = await prismaDb.category.findUnique({
    where: {
      slug
    }
  });

  return category;
};

