import { User } from "next-auth"
import { JWT } from "next-auth/jwt"

type UserId = string
type Admin = boolean

declare module "next-auth/jwt" {
  interface JWT {
    id: UserId
    isAdmin: Admin
  }
}

declare module "next-auth" {
  interface Session {
    user: User & {
      id: UserId
      isAdmin: Admin
    }
  }
}