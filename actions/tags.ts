import prismaDb from "@/lib/db";

export const getTags = async () => {
  const tags = await prismaDb.tag.findMany();

  return tags;
};

export const tagExist = async (slug: string) => {
  const tag = await prismaDb.tag.findUnique({
    where: {
      slug,
    },
  });

  return tag;
};
