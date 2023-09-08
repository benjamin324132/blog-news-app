"use client";

import { categorySchema } from "@/validations";
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
import { Button } from "@/components/ui/button";
import axios from "axios";
import { Loader2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

export type NewCategoryType = z.infer<typeof categorySchema>;

const NewCategory = () => {
  const { toast } = useToast();

  const form = useForm<NewCategoryType>({
    resolver: zodResolver(categorySchema),
    defaultValues: {
      title: "",
      slug: "",
      img: "https://cdn.dribbble.com/users/14268/screenshots/970335/photo.png?resize=800x600&vertical=center",
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: NewCategoryType) => {
    try {
      const { data } = await axios.post("/api/categories", values);
      form.reset();
      toast({
        title: "Category added"
      })
    } catch (error) {
      console.log(error);
      toast({
        title: "Something went wrong"
      })
    }
  };

  return (
    <div className="flex flex-col items-start">
      <h1 className=" text-4xl font-bold pb-10">Add a new category</h1>
      <Form {...form}>
        <form
          className="grid gap-4 text-left max-w-lg w-full"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Category title</FormLabel>
                <FormControl>
                  <Input
                    disabled={isLoading}
                    placeholder="Add a category title"
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
                <FormLabel>Category slug</FormLabel>
                <FormControl>
                  <Input
                    disabled={isLoading}
                    placeholder="Add a category slug"
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
          <Button
            disabled={isLoading}
            className="w-fit"
            variant="indigo"
            size="lg"
          >
            {isLoading ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : null}
            Create
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default NewCategory;
