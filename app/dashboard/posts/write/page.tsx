import { getCategories } from "@/actions/categories";
import Postform from "@/components/forms/postForm";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Write new post",
};

const Page = async () => {
    const categories = await getCategories()
  return (
    <div className="p-6">
      <Postform categories={categories} />
    </div>
  );
};

export default Page;
