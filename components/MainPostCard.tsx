import { PostWithCategories } from "@/types";
import Image from "next/image";
import Link from "next/link";

interface MainPostCardProps {
  post: PostWithCategories;
}

const MainPostCard = ({ post }: MainPostCardProps) => {
  return (
    <div
      className="flex flex-col md:gap-4 md:flex-row h-full md:h-[250px] mb-8"
    >
      <div className="relative w-full md:w-[350px] h-[250px] md:shrink-0">
        <Link href={`/${post.category}/${post.slug}`}>
          <Image
            src={post.img}
            fill
            alt={post.title}
            className="object-cover"
          />
        </Link>
      </div>
      <Link href={`/${post.category}/${post.slug}`}>
        <div>
          <span className="text-indigo-500">{post.categoryRelation.title}</span>
          <h3 className=" text-base md:text-xl font-semibold">{post.title}</h3>
          <p>{post.shortDescription}</p>
        </div>
      </Link>
    </div>
  );
};

export default MainPostCard;
