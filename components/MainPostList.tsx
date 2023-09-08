import { getPosts } from "@/actions/posts";
import TopPosts from "./TopPosts";
import MainPostCard from "./MainPostCard";
import { PostWithCategories } from "@/types";

interface MainPostListProps {
  title?: string;
  posts: PostWithCategories[];
}

const MainPostList = ({ posts, title ="Latest News" }: MainPostListProps) => {
  return (
    <div className="container pt-20 pb-10">
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-col gap-y-4 flex-1">
          <div>
            <h3 className="text-4xl font-semibold">{title}</h3>
            <div className="border-b-4 border-black mt-3" />
          </div>
          <div>
            {posts.map((post) => (
              <MainPostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
        <div className="w-full md:w-[450px]">
          <TopPosts />
        </div>
      </div>
    </div>
  );
};

export default MainPostList;
