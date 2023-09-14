"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Edit, Eye, MoreVertical, Trash } from "lucide-react";
import { useTransition } from "react";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import { PostWithCategories } from "@/types";
import axios from "axios";

interface PostActionsProps {
  post: PostWithCategories;
}

const PostActions: React.FC<PostActionsProps> = ({ post }) => {
  let [isPending, startTransition] = useTransition();
  const { toast } = useToast();
  const router = useRouter();


  const deletePost = async () => {
  try {
    const {data} = await axios.delete(`/api/posts/actions/${post.id}`);
    toast({
      title: "Post deleted"
    });
    router.refresh();
  } catch (error) {
    toast({
      title: "Something went wrong"
    })
  }
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <MoreVertical className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuItem
          onClick={() => router.push(`/${post.category}/${post.slug}`)}
        >
          <Eye className="mr-2 h-4 w-4" /> View
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => router.push(`/dashboard/posts/${post.id}`)}
        >
          <Edit className="mr-2 h-4 w-4" /> Update
        </DropdownMenuItem>
        <DropdownMenuItem onClick={deletePost} className=" text-red-500">
          <Trash className="mr-2 h-4 w-4" /> Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default PostActions;
