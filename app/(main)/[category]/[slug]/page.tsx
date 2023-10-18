import RelatedPosts from "@/components/RealtedPosts";
import { PostWithCategories } from "@/types";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

interface IParams {
  params: {
    slug: string;
  };
}

const getPost = async (slug: string) => {
  const data = await fetch(`${process.env.BASE_URL}/api/posts/${slug}`);

  //if (!data.ok) {
  //  throw new Error("Failed");
 // }

  return data.json();
};

export const generateMetadata = async ({
  params,
}: IParams): Promise<Metadata> => {
  const post = (await getPost(params.slug)) as PostWithCategories | null;

  return {
    title: post?.title,
    description: post?.shortDescription,
    authors: {
       name: post?.user.name || "Author"
    },
    openGraph: {
      title: post?.title,
      description: post?.shortDescription,
      url: `${process.env.BASE_URL}/${post?.category}/${post?.slug}`,
      images: [
        {
          url: post?.img || "",
          width: 1200,
          height: 600,
          alt: post?.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post?.title,
      description: post?.shortDescription || "",
      images: [post?.img || ""],
    },
  };
};

const Page = async ({ params }: IParams) => {
  const post = (await getPost(params.slug)) as PostWithCategories | null;

  if(!post){
     notFound();
  }

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
          <h3 className="font-bold text-lg text-indigo-500 py-1">
            {post?.categoryRelation?.title}
          </h3>
          <h3 className="text-4xl font-semibold py-4">{post?.title}</h3>
          <h4 className="font-bold text-lg py-2">
            By <span className="text-indigo-500">{post?.user.name}</span>
          </h4>
          <div dangerouslySetInnerHTML={{ __html: post?.content || "" }} />
        </div>
        <RelatedPosts />
      </div>
    </div>
  );
};

export default Page;
