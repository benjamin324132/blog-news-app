import { getSession } from "@/actions/users";
import prismaDb from "@/lib/db";
import {  tagSchema } from "@/validations";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { title, slug } = tagSchema.parse(body);

    const session = await getSession();

    if(!session){
      return new Response("Unauthorized action", {status: 401});
    }

    const tagExist = await prismaDb.tag.findFirst({
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

    if (tagExist) {
      return new Response("Tag already exists", { status: 400 });
    }

    const tag = await prismaDb.tag.create({
      data: {
        title,
        slug,
      },
    });

    return NextResponse.json(tag);
  } catch (error) {
    return new Response("Internal error", { status: 500 });
  }
}
