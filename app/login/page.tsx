import { getSession } from "@/actions/users";
import LoginForm from "@/components/forms/LoginForm";
import { redirect } from "next/navigation";

const Page = async () => {
  const session = await getSession();

  if (session) {
    redirect("/dashboard");
  }

  return (
    <div className=" min-h-screen w-full flex items-center justify-center">
      <LoginForm />
    </div>
  );
};

export default Page;
