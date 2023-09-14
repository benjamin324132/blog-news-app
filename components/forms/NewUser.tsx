"use client";
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input"
import { signUpSchema } from "@/validations";
import { useRouter } from "next/navigation";
import { useToast } from "../ui/use-toast";
import axios from "axios";

type UserForm = z.infer<typeof signUpSchema>;

export function NewUser() {
  const router = useRouter();
  const { toast } = useToast();
  const form = useForm<UserForm>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const isLoading = form.formState.isLoading;

  const onSubmit = async (values: UserForm) => {

    try {
      const { data } = await axios.post("/api/users/register", values);
      form.reset();
      router.refresh();
      toast({
        title: "User created",
      });
    } catch (error) {
      toast({
        title: "Something went wrong",
      });
    }

  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="indigo">Create</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create user</DialogTitle>
          <DialogDescription>
            Add a new user/author to the system
          </DialogDescription>
        </DialogHeader>
      <Form {...form}>
        <form
          className="w-full flex flex-col gap-y-6"
          onSubmit={(args) => form.handleSubmit(onSubmit)(args)}
        >
           <FormField
            name="name"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Name" disabled={isLoading} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="email"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Email" disabled={isLoading} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="password"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Pasword</FormLabel>
                <FormControl>
                  <Input type="password" {...field} placeholder="Password" disabled={isLoading} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="w-full" disabled={isLoading}>Create</Button>
        </form>
      </Form>
      </DialogContent>
    </Dialog>
  )
}
