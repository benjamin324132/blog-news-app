import { getPosts } from "@/actions/posts";
import RelatedPostCard from "./RelatedPostCard";

const Grid4Posts = async () => {
  const posts = await getPosts({ count: 4 });
  return (
    <div className="container py-6 border-b-4 border-t-4 border-black">
      <div className="w-full flex flex-col items-center justify-center">
        <h2 className="text-4xl font-bold">Related Posts</h2>
        <p className="text-sm md:text-xl font-semibold text-zinc-400">
          Check the trending news from IndieBlog.
        </p>
      </div>
      <div className="pt-10 grid grid-cols-1 md:grid-cols-4 gap-6">
        {posts.map((post) => (
          <RelatedPostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Grid4Posts;
