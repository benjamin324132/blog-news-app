import { getPosts } from "@/actions/posts";
import Link from "next/link";


const GridPosts = async () => {
  const posts = await getPosts({count: 5});
  
  return (
    <section className="container pt-20">
      <div className="grid grid-cols-1 md:grid-cols-12 md:grid-rows-5 gap-4 md:h-[450px] ">
        <div
          className="md:col-span-5 md:row-span-5 h-60 md:h-auto rounded-3xl"
          style={{
            backgroundImage: `url(${posts[0].img})`,
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        >
          <Link href={`/${posts[0].category}/${posts[0].slug}`}>
            <div className="p-4 h-full flex flex-col items-start justify-end">
              <div className="relative">
                <h4 className="text-indigo-500">
                  {posts[0].categoryRelation.title}
                </h4>
              </div>
              <h3 className="font-bold text-2xl text-white">
                {posts[0].title}
              </h3>
            </div>
          </Link>
        </div>

        <div
          className="md:col-span-5 md:row-span-3 md:col-start-6 h-60 md:h-auto rounded-3xl"
          style={{
            backgroundImage: `url(${posts[1].img})`,
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        >
          <Link href={`/${posts[1].category}/${posts[1].slug}`}>
            <div className="p-4 h-full flex flex-col items-start justify-end">
              <div className="relative">
                <h4 className="text-indigo-500">
                  {posts[1].categoryRelation.title}
                </h4>
              </div>
              <h3 className="font-bold text-lg text-white">{posts[1].title}</h3>
            </div>
          </Link>
        </div>

        <div
          className="md:col-span-2 md:row-span-3 md:col-start-11 h-60 md:h-auto rounded-3xl"
          style={{
            backgroundImage: `url(${posts[2].img})`,
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        >
          <Link href={`/${posts[2].category}/${posts[2].slug}`}>
            <div className="p-4 h-full flex flex-col items-start justify-end">
              <div className="relative">
                <h4 className="text-indigo-500">
                  {posts[2].categoryRelation.title}
                </h4>
              </div>
              <h3 className="font-bold text-sm text-white">{posts[2].title}</h3>
            </div>
          </Link>
        </div>

        <div
          className="md:col-span-4 md:row-span-2 md:col-start-6 md:row-start-4 h-60 md:h-auto rounded-3xl"
          style={{
            backgroundImage: `url(${posts[3].img})`,
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        >
          <Link href={`/${posts[3].category}/${posts[3].slug}`}>
            <div className="p-4 h-full flex flex-col items-start justify-end">
              <div className="relative">
                <h4 className="text-indigo-500">
                  {posts[3].categoryRelation.title}
                </h4>
              </div>
              <h3 className="font-bold text-lg text-white">{posts[3].title}</h3>
            </div>
          </Link>
        </div>

        <div
          className="md:col-span-3 md:row-span-2 md:col-start-10 md:row-start-4 h-60 md:h-auto rounded-3xl"
          style={{
            backgroundImage: `url(${posts[4].img})`,
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        >
          <Link href={`/${posts[4].category}/${posts[4].slug}`}>
            <div className="p-4 h-full flex flex-col items-start justify-end">
              <div className="relative">
                <h4 className="text-indigo-500">
                  {posts[4].categoryRelation.title}
                </h4>
              </div>
              <h3 className="font-bold text-base text-white">{posts[4].title}</h3>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GridPosts;
