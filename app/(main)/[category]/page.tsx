import { getPostByCategory } from "@/actions/posts";
import MainPostList from "@/components/MainPostList";

interface Iparams {
  params: {
    category: string;
  };
}
const Page = async ({ params }: Iparams) => {
  const posts = await getPostByCategory(params.category);

  return <MainPostList title={posts[0]?.categoryRelation.title || "Category"} posts={posts} />;
};

export default Page;
