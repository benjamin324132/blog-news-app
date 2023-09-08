import RelatedPosts from "@/components/RealtedPosts";
import { Category, Post } from "@prisma/client";
import { Metadata } from "next";
import Image from "next/image";

interface IParams {
  params: {
    slug: string;
  };
}

const getPost = async (slug: string) => {
  const data = await fetch(`http://localhost:3000/api/posts/${slug}`, {
    cache: "no-store",
  });

  if (!data.ok) {
    throw new Error("Failed");
  }

  return data.json();
};

export const generateMetadata = async ({
  params,
}: IParams): Promise<Metadata> => {
  const post = (await getPost(params.slug)) as
    | (Post & { categoryRelation: Category })
    | null;

  return {
    title: post?.title,
    description: post?.shortDescription,
  };
};

const Page = async ({ params }: IParams) => {
  const post = (await getPost(params.slug)) as
    | (Post & { categoryRelation: Category })
    | null;

  return (
    <div className="w-full">
      <div className="max-w-4xl mx-auto">
        <div className="relative w-full h-[300px] md:h-[450px] aspect-square">
          <Image
            src={post?.img || ""}
            fill
            alt={post?.title || "image"}
            className=" object-cover"
          />
        </div>
        <div className="px-3 md:px-0">
          <h3 className="text-4xl font-semibold py-4">{post?.title}</h3>
          <h3 className="font-bold text-lg text-indigo-500 py-4">
            {post?.categoryRelation?.title}
          </h3>
          <div dangerouslySetInnerHTML={{ __html: post?.content || "" }} />
        </div>
        <RelatedPosts />
      </div>
    </div>
  );
};

export default Page;
