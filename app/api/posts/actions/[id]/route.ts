import { getSession } from "@/actions/users";
import prismaDb from "@/lib/db";
import { postschema } from "@/validations";
import { NextResponse } from "next/server";

interface IParams {
  params: {
    id: string;
  };
}

export async function PUT(req: Request, { params }: IParams) {
  try {
    const body = await req.json();
    const { title, shortDescription, content, img, category, slug } =
      postschema.parse(body);

    const session = await getSession();

    if (!session) {
      return new Response("Unauthorized action", { status: 401 });
    }

    const postExist = await prismaDb.post.findMany({
      where: {
        slug,
      },
    });

    if (postExist.length > 1) {
      return new Response("Post slug already in use", { status: 400 });
    }

    const post = await prismaDb.post.update({
      where: {
        id: params.id,
      },
      data: {
        title,
        shortDescription,
        content,
        img,
        category,
        slug,
      },
    });
    return NextResponse.json(post);
  } catch (error) {
    return new Response("Internal error", { status: 500 });
  }
}

export async function DELETE(req: Request, { params }: IParams) {
  try {
    const session = await getSession();

    if (!session) {
      return new Response("Unauthorized action", { status: 401 });
    }

    await prismaDb.post.delete({
      where: {
        id: params.id,
      },
    });
    return NextResponse.json({ message: "Post deleted" });
  } catch (error) {
    return new Response("Internal error", { status: 500 });
  }
}
