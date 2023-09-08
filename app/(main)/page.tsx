import Grid4Posts from "@/components/4GridPost";
import GridPosts from "@/components/GridPosts";
import LatestPosts from "@/components/LatestPosts";
import RelatedPosts from "@/components/RealtedPosts";

export default async function Home() {
  return (
    <>
      <GridPosts />
      <LatestPosts />
      <Grid4Posts />
    </>
  );
}
