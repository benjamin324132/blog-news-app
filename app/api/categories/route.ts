import prismaDb from "@/lib/db";
import { categorySchema } from "@/validations";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { title, slug, img } = categorySchema.parse(body);

    const categoryExist = await prismaDb.category.findFirst({
      where: {
        OR: [
          {
            title,
          },
          {
            slug,
          },
        ],
      },
    });

    if (categoryExist) {
      return new Response("Category already exists", { status: 400 });
    }

    const category = await prismaDb.category.create({
      data: {
        title,
        slug,
        img,
      },
    });

    return NextResponse.json(category);
  } catch (error) {
    return new Response("Internal error", { status: 500 });
  }
}
