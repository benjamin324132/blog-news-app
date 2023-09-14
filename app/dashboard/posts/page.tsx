import { getPosts } from "@/actions/posts";
import { DataTable } from "@/components/DataTable";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import Link from "next/link";
import { PostColumns } from "./components/TableColumn";

export const metadata: Metadata = {
  title: "Posts",
};

const Page = async () => {
  const posts = await getPosts({ count: 15});
  return (
    <div className="p-4">
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-4xl">Posts</h3>
        <Button asChild variant="indigo">
          <Link href="/dashboard/posts/write">Write</Link>
        </Button>
      </div>
      <DataTable searchKey="title" data={posts} columns={PostColumns} />
    </div>
  );
};

export default Page;
