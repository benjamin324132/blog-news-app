import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full bg-black h-36 mt-10 py-4">
      <div className="container">
        <Link href="/" className="text-5xl font-bold text-white">
          INDIE<span className="font-light text-indigo-500">BLOG</span>
        </Link>
        <div>
          <span className="text-white">© 2023</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
