import prismaDb from "@/lib/db";

export const getPosts = async ({ count = 10 }) => {
  const posts = await prismaDb.post.findMany({
    take: count,
    include: {
      categoryRelation: true,
      user: true
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return posts;
};

export const getTopPosts = async ({ count = 5 }) => {
  const posts = await prismaDb.post.findMany({
    take: count,
    include: {
      categoryRelation: true,
    },
    orderBy: {
      createdAt: "asc",
    },
  });

  return posts;
};

export const getPostByCategory = async (category: string) => {
  const posts = await prismaDb.post.findMany({
    where: {
      category,
    },
    include: {
      categoryRelation: true,
      user: true
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return posts;
};

export const getPostById = async (id: string) => {
  const post = await prismaDb.post.findUnique({
    where: {
      id,
    },
  });

  return post;
};
