import { createAuthClient } from "better-auth/react"
import { inferAdditionalFields } from "better-auth/client/plugins"
import type { auth } from "./auth"

export const authClient = createAuthClient({
    baseURL: "https://book-nest-client-eight.vercel.app",
    plugins: [
        inferAdditionalFields<typeof auth>()
    ]
})

export const { signIn, signUp, useSession } = authClient