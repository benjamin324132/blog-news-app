import CategoriesList from "@/components/CategoriesList";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="w-full">
      <Navbar />
      <CategoriesList />
      {children}
      <Footer />
    </main>
  );
};

export default MainLayout;
