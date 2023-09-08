import { getCategories } from "@/actions/categories";
import Link from "next/link";

const Page = async () => {
   const categories = await getCategories();

  return (
    <div className="p-4">
      <Link href="/dashboard/categories/new">Write</Link>
    </div>
  );
};

export default Page;
