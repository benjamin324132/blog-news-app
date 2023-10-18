"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
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
import { Label } from "@/components/ui/label";
import { tagSchema } from "@/validations";
import { z } from "zod";
import { useToast } from "@/components/ui/use-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";

export type NewTagType = z.infer<typeof tagSchema>;

export function NewTagForm() {
  const { toast } = useToast();
  const router = useRouter();

  const form = useForm<NewTagType>({
    resolver: zodResolver(tagSchema),
    defaultValues: {
      title: "",
      slug: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: NewTagType) => {
    try {
      const { data } = await axios.post("/api/tags", values);
      form.reset();
      toast({
        title: "Tag added",
      });
      router.refresh();
    } catch (error) {
      console.log(error);
      toast({
        title: "Something went wrong",
      });
    }
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="indigo">New</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create new Tag</DialogTitle>
        </DialogHeader>
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
                  <FormLabel>Tag title</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isLoading}
                      placeholder="Add a tag title"
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
                  <FormLabel>Tag slug</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isLoading}
                      placeholder="Add a tag slug"
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
      </DialogContent>
    </Dialog>
  );
}
