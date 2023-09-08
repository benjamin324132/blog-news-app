import { PostWithCategories } from "@/types";
import Image from "next/image";
import Link from "next/link";

interface RelatedPostCardProps {
  post: PostWithCategories;
}

const RelatedPostCard = ({ post }: RelatedPostCardProps) => {
  return (
    <div className="flex flex-col gap-y-2">
      <div className="relative w-full h-[250px] shrink-0">
        <Link href={`/${post.category}/${post.slug}`}>
          <Image
            src={post.img}
            fill
            alt={post.title}
            className="object-cover"
          />
        </Link>
      </div>
      <div className="flex flex-col items-center justify-center">
        <span className="text-sm text-indigo-500">
          {post.categoryRelation.title}
        </span>
        <Link
          href={`/${post.category}/${post.slug}`}
          className="text-sm font-semibold line-clamp-3"
        >
          {post.title}
        </Link>
      </div>
    </div>
  );
};

export default RelatedPostCard;
