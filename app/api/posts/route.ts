import prismaDb from "@/lib/db";
import { postschema } from "@/validations";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const quey = req.nextUrl.searchParams;
  const page = quey.get("page") || 10;
  const name = quey.get("name") || "Benja";

  const posts = await prismaDb.post.findMany();
  return NextResponse.json(posts);
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { title, slug, shortDescription, img, content, category } =
      postschema.parse(body);

    const post = await prismaDb.post.create({
      data: {
        title,
        slug,
        shortDescription,
        img,
        content,
        category,
      },
    });

    return NextResponse.json(post);
  } catch (error) {
    return new Response("Internal error", { status: 500 });
  }
}
