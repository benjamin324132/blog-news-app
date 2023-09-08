import Link from "next/link";

const Page = () => {
  return <div className="p-4">
    <Link href="/dashboard/posts/write">Write</Link>
  </div>;
};

export default Page;
