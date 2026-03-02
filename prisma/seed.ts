import { PrismaClient } from "../app/generated/prisma/client";
import { PrismaPg } from '@prisma/adapter-pg'
import 'dotenv/config'
import { auth } from "@/lib/auth";

const adapter = new PrismaPg({
    connectionString: process.env.DATABASE_URL,
})

const prisma = new PrismaClient({
    adapter,
});

// const userData: Prisma.UserCreateInput[] = [
//     {
//         name: "Administrator",
//         email: "admin@admin.id",
//     },
// ];

async function main() {
    const email = "admin@admin.id";
    const password = "CylarePowerApp"; // GANTI setelah login pertama
    const name = "Administrator";
    const role = "admin";

    // Cek dulu apakah user sudah ada
    const existingAdmin = await prisma.user.findUnique({
        where: { email },
    });

    if (existingAdmin) {
        console.log("✅ Admin sudah ada, seed dilewati.");
        return;
    }

    // ✅ Buat user lewat Better Auth
    const result = await auth.api.createUser({
        body: {
            email,
            password,
            name,
            role,
        },
    });

    if (!result?.user) {
        throw new Error("Gagal membuat admin lewat Better Auth");
    }

    // Kalau kamu punya field role di table user
    await prisma.user.update({
        where: { id: result.user.id },
        data: {
            role: "ADMIN",
            emailVerified: true,
        },
    });

    console.log("🚀 Admin dibuat:");
    console.log({
        email,
        password,
        id: result.user.id,
    });
}

main()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })