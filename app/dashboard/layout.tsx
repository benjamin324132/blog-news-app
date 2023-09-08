import SideBar from "@/components/dashboard/Sidebar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full relative">
      <div className="fixed h-full w-40 flex flex-col inset-y-0 bg-zinc-100">
        <SideBar />
      </div>
      <main className="pl-40">{children}</main>
    </div>
  );
};

export default Layout;
