import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="text-5xl font-bold">
      INDIE<span className="font-light text-indigo-500">BLOG</span>
    </Link>
  );
};

export default Logo;
