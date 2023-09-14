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
import { User } from "@prisma/client";

interface UserActionsProps {
  user: User;
}

const UserActions: React.FC<UserActionsProps> = ({ user }) => {
  let [isPending, startTransition] = useTransition();
  const { toast } = useToast();
  const router = useRouter();


  const deletePost = async () => {
  try {
    const {data} = await axios.delete(`/api/users/actions/${user.id}`);
    toast({
      title: "User deleted"
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
          onClick={() => router.push(`/dashboard/posts/${user.id}`)}
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

export default UserActions;
