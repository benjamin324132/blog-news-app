import { categoryExist } from "@/actions/categories";
import { getPostByCategory } from "@/actions/posts";
import MainPostList from "@/components/MainPostList";
import { Metadata } from "next";
import { notFound } from "next/navigation";

interface Iparams {
  params: {
    category: string;
  };
}

export const generateMetadata = async ({
  params,
}: Iparams): Promise<Metadata> => {
  const title =
    params.category.charAt(0).toUpperCase() + params.category.slice(1);
  return {
    title,
  };
};

const Page = async ({ params }: Iparams) => {
  const category = await categoryExist(params.category);

  if (!category) {
    notFound();
  }
  
  const posts = await getPostByCategory(params.category);

  return (
    <MainPostList
      title={posts[0]?.categoryRelation.title || "Category"}
      posts={posts}
    />
  );
};

export default Page;
