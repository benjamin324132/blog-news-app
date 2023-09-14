import prismaDb from "@/lib/db";
import { NextResponse } from "next/server";
//Vt3H9o5A5zgRm5mD

interface IParams {
  params: {
    slug: string;
  };
}

export async function GET(req: Request, { params }: IParams) {
  try {
    const post = await prismaDb.post.findUnique({
      where: {
        slug: params.slug,
      },
      include:{
        categoryRelation: true,
        user: true
      }
    });
    return NextResponse.json(post);
  } catch (error) {
    return new Response("Internal error", { status: 500 });
  }
}
