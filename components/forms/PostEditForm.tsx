"use client";

import { useEffect, useState } from "react";
import { postschema } from "@/validations";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Category, Post } from "@prisma/client";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import axios from "axios";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.bubble.css";
import { Loader2 } from "lucide-react";
import { useToast } from "../ui/use-toast";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export type PostType = z.infer<typeof postschema>;

interface PostEdiFormProps {
  post: Post;
  categories: Category[];
}

const PostEdiForm: React.FC<PostEdiFormProps> = ({ post, categories }) => {
  const [mounted, setMounted] = useState(false);
  const { toast } = useToast();

  const form = useForm<PostType>({
    resolver: zodResolver(postschema),
    defaultValues: {
      title: post.title,
      slug: post.slug,
      category: post.category,
      img: post.img,
      shortDescription: post.shortDescription,
      content: post.content,
    },
  });

  const isLoading = form.formState.isSubmitting;

  useEffect(() => {
    setMounted(true);
  }, []);

  const onSubmit = async (values: PostType) => {
    try {
      const { data } = await axios.put(
        `/api/posts/actions/${post.id}`,
        values
      );
      toast({
        title: "Post updated",
      });
      form.reset();
    } catch (error) {
      console.log(error);
      toast({
        title: "Something went wrong",
      });
    }
  };

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex flex-col items-start">
      <h1 className=" text-4xl font-bold pb-10">Edit post</h1>
      <Form {...form}>
        <form
          className="grid gap-4 text-left max-w-4xl w-full"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Post title</FormLabel>
                <FormControl>
                  <Input
                    disabled={isLoading}
                    placeholder="Add a post title"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="slug"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Post slug</FormLabel>
                <FormControl>
                  <Input
                    disabled={isLoading}
                    placeholder="Add a post slug"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Add a valid slug (no middle spaces or invalid characters)
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem className="max-w-[350px]">
                <FormLabel>Select a category</FormLabel>
                <FormControl>
                  <Select
                    disabled={isLoading}
                    value={field.value}
                    onValueChange={field.onChange}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Category</SelectLabel>
                        {categories.map((category) => (
                          <SelectItem key={category.id} value={category.slug}>
                            {category.title}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="shortDescription"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Short description</FormLabel>
                <FormControl>
                  <Textarea
                    disabled={isLoading}
                    placeholder="Add a post description"
                    {...field}
                  />
                </FormControl>
                <FormDescription>Min 20 and max 150 characters</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Content</FormLabel>
                <FormControl>
                  <ReactQuill
                    theme="bubble"
                    value={field.value}
                    onChange={field.onChange}
                    placeholder="Post Content"
                    className="min-h-[400px] w-full rounded-md border border-input bg-background px-3 py-2"
                  />
                  {/** <Textarea rows={10} placeholder="Post Content" {...field} />*/}
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            disabled={isLoading}
            className="w-fit"
            variant="indigo"
            size="lg"
          >
            {isLoading ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : null}
            Save
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default PostEdiForm;
