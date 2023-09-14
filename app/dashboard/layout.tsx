import { getSession } from "@/actions/users";
import SideBar from "@/components/dashboard/Sidebar";
import { redirect } from "next/navigation";

const Layout = async ({ children }: { children: React.ReactNode }) => {
  const session = await getSession();

  if(!session){
    redirect("/login")
  }
  
  return (
    <div className="h-full relative">
      <div className="fixed h-full w-10 md:w-40 flex flex-col inset-y-0 bg-zinc-100">
        <SideBar />
      </div>
      <main className="pl-10 md:pl-40">{children}</main>
    </div>
  );
};

export default Layout;
