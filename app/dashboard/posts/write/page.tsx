import { getCategories } from "@/actions/categories";
import Postform from "@/components/forms/postForm";

const Page = async () => {
    const categories = await getCategories()
  return (
    <div className="p-6">
      <Postform categories={categories} />
    </div>
  );
};

export default Page;
