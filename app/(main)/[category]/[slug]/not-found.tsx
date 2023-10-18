import Link from "next/link";

export default function NotFound() {
  return (
    <div className=" min-h-screen flex items-center justify-center">
      <div>
        <h2 className=" text-5xl font-bold text-center">Post Not Found</h2>
        <h2 className=" text-sm text-center">The post you are looking for does not exist</h2>
      </div>
    </div>
  );
}
