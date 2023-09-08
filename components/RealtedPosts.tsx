import { getPosts } from "@/actions/posts";
import RelatedPostCard from "./RelatedPostCard";

const RelatedPosts = async () => {
  const posts = await getPosts({ count: 4 });
  return (
    <div className="py-4">
      <div className="w-full flex flex-col items-center justify-center">
        <h2 className="text-4xl font-bold">Related Posts</h2>
      </div>
      <div className="pt-10 grid grid-cols-1 md:grid-cols-4 gap-6">
        {posts.map((post) => (
          <RelatedPostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default RelatedPosts;
