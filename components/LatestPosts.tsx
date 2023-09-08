import { getPosts } from "@/actions/posts";
import MainPostList from "./MainPostList";

const LatestPosts = async () => {
  const posts = await getPosts({});
  return (
   <MainPostList posts={posts} />
  );
};

export default LatestPosts;
