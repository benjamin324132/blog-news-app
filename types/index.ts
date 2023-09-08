import { Category, Post } from "@prisma/client";


export type PostWithCategories = Post & {
   categoryRelation: Category
}
