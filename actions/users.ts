import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import prismaDb from "@/lib/db";
import { getServerSession } from "next-auth";

export const getSession = async () => {
  const session = await getServerSession(authOptions);

  return session?.user;
};

export const getCurrentUser = async () => {
  const user = await getSession();

  if (!user) {
    return null;
  }

  const currentUser = await prismaDb.user.findUnique({
    where: {
      id: user.id,
    },
  });
  return currentUser;
};

export const getUserById = async (id: string) => {
  const user = await prismaDb.user.findUnique({
    where: {
      id,
    },
  });
  return user;
};

export const getUsers = async () => {
  const users = await prismaDb.user.findMany({
    take: 10
  });

  return users;
};
