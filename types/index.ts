import { Category, Post, User } from "@prisma/client";


export type PostWithCategories = Post & {
   categoryRelation: Category
   user: User
}
