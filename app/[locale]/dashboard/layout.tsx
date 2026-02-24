import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { notFound } from "next/navigation";

export default async function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    if (!session?.user.role || session.user.role !== "ADMIN") {
        return notFound();
    }

    return <section>{children}</section>;
}
