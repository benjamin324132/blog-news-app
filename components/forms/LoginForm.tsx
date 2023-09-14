"use client";

import { signInSchema } from "@/validations";
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
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";

type UserForm = z.infer<typeof signInSchema>;

const LoginForm = () => {
  const router = useRouter();
  const { toast } = useToast();
  const form = useForm<UserForm>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const isLoading = form.formState.isLoading;

  const onSubmit = (values: UserForm) => {
    signIn("credentials", {
      email: values.email,
      password: values.password,
      redirect: false,
    }).then((callback) => {
      console.log(callback);
      if (callback?.error) {
        console.log(callback.error);
        toast({
          title: "Something went wrong",
          description: callback.error,
        });
        return;
      }

      if (callback?.ok) {
        router.push("/dashboard");
      }
    });
  };

  return (
    <div className="max-w-sm px-2 py-4 w-full border rounded-lg">
      <h2 className="text-xl font-bold text-center">Login</h2>
      <Form {...form}>
        <form
          className="w-full flex flex-col gap-y-6"
          onSubmit={(args) => form.handleSubmit(onSubmit)(args)}
        >
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
          <Button className="w-full" disabled={isLoading}>Login</Button>
        </form>
      </Form>
    </div>
  );
};

export default LoginForm;
