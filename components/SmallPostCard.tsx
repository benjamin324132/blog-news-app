import { PostWithCategories } from "@/types";
import { Post } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

interface SmallPostCardProps {
  post: PostWithCategories;
}

const SmallPostCard = ({ post }: SmallPostCardProps) => {
  return (
    <Link href={`/${post.category}/${post.slug}`}>
      <div className="flex gap-x-2 items-start justify-between" key={post.id}>
        <div>
          <span className="text-sm text-indigo-500">
            {post.categoryRelation.title}
          </span>
          <h2 className="line-clamp-3 text-sm md:text-base">{post.title}</h2>
        </div>
        <div className="relative w-[100px] h-[100px] shrink-0">
          <Image
            src={post.img}
            fill
            alt={post.title}
            className="object-cover"
          />
        </div>
      </div>
    </Link>
  );
};

export default SmallPostCard;
