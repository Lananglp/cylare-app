import { createAuthClient } from 'better-auth/react'
import { adminClient } from "better-auth/client/plugins"
import { ac, admin, user } from "@/auth/permissions"

// export const { signIn, signUp, signOut, useSession } = createAuthClient()
export const authClient = createAuthClient({
    plugins: [
        adminClient({
            defaultRole: "user",
            ac,
            roles: {
                admin,
                user,
                // myCustomRole
            }
        })
    ]
})

export type Session = typeof authClient.$Infer.Session