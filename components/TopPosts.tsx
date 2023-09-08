import { getTopPosts } from "@/actions/posts";
import SamllPostCard from "./SmallPostCard";

const TopPosts = async () => {
  const posts = await getTopPosts({});
  return (
    <div className="w-full md:p-4">
      <h3 className="text-xl font-bold tracking-wider text-indigo-500">
        Top Posts
      </h3>
      <div className="flex flex-col gap-y-4">
        {posts.map((post) => (
          <SamllPostCard post={post} key={post.id} />
        ))}
      </div>
    </div>
  );
};

export default TopPosts;
