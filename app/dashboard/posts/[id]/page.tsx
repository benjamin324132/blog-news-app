import { getCategories } from "@/actions/categories";
import { getPostById } from "@/actions/posts";
import PostEditForm from "@/components/forms/PostEditForm";
import { redirect } from "next/navigation";

interface IParams {
  params: {
    id: string;
  };
}
const Page = async ({ params }: IParams) => {
  const categories = await getCategories();
  const post = await getPostById(params.id);

  if (!post) {
    return redirect("/dashboard/posts");
  }

  return (
    <div className="p-6">
      <PostEditForm post={post} categories={categories} />
    </div>
  );
};

export default Page;
