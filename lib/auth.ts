import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import prisma from "./prisma";
import { admin as adminPlugin } from "better-auth/plugins"
import { ac, admin, user } from "@/auth/permissions"

export const auth = betterAuth({
    // trustedOrigins: ['http://localhost:3001'], // hidupkan jika kena cors
    database: prismaAdapter(prisma, {
        provider: "postgresql", // or "mysql", "postgresql", ...etc
    }),
    appName: process.env.NEXT_PUBLIC_APP_NAME,
    emailAndPassword: {
        enabled: true,
        // loginPath: "/sign-in",
        // registerPath: "/sign-up",
        // async hashPassword(password="") {
        //     return bcrypt.hash(password, 10);
        // },

        // async verifyPassword(password="", hash="") {
        //     return bcrypt.compare(password, hash);
        // },
    },
    session: {
        expiresIn: 60 * 60 * 24 * 7, // 1 week
        // path: "/",
        // sameSite: "lax",
        // secure: process.env.NODE_ENV === "production",
    },
    plugins: [
        adminPlugin({
            defaultRole: "user",
            ac,
            roles: {
                admin,
                user,
                // myCustomRole
            }
        }),
    ]
});

type Session = typeof auth.$Infer.Session