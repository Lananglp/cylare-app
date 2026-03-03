'use client'
import { MenuIcon } from "lucide-react"
import LanguageSwitcher from "../language-switcher"
import { Button } from "../ui/button"
import { useEffect, useRef, useState } from "react"
import { Link } from "@/i18n/navigation"
import Image from "next/image"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet"
import { ThemeButton } from "../theme-button"
import { textToWhatsapp } from "@/config/config"

export const AppHeader = () => {
    const appName = process.env.NEXT_PUBLIC_APP_NAME;
    // const {
    //     data: session,
    //     isPending, //loading state
    // } = authClient.useSession();

    const navRef = useRef<HTMLElement>(null);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (navRef.current) {
                if (window.scrollY > 20) {
                    // Tambah border saat scroll
                    navRef.current.classList.add("bg-background", "border-border");
                    navRef.current.classList.remove("bg-transparent", "border-transparent");
                } else {
                    // Hilangkan border saat di atas
                    navRef.current.classList.add("bg-transparent", "border-transparent");
                    navRef.current.classList.remove("bg-background", "border-border");
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        // Jalankan sekali saat mount untuk cek posisi awal
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            ref={navRef}
            className="fixed w-full z-50 bg-transparent border-b border-transparent transition-all duration-300"
        >
            <nav>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-3">
                        <Link href="/" className="shrink-0 flex items-center gap-2 cursor-pointer">
                            <Image src="/logo.svg" alt="Logo" width={40} height={40} className='dark:invert' />
                            <div className='flex items-center gap-2'>
                                <span className="block font-bold text-lg sm:text-xl tracking-tight text-primary">{appName}</span>
                                <span className='hidden sm:block text-[12px] sm:text-xs text-muted-foreground'>by Lanang Lanusa</span>
                            </div>
                        </Link>
                        <ul className="hidden lg:flex space-x-4 items-center">
                            <li>
                                <Link href="#masalah" className="text-muted-foreground hover:text-blue-600 dark:hover:text-blue-400 text-sm font-medium transition">Problem</Link>
                            </li>
                            <li>
                                <Link href="#solusi" className="text-muted-foreground hover:text-blue-600 dark:hover:text-blue-400 text-sm font-medium transition">Kenapa Kami</Link>
                            </li>
                            <li>
                                <Link href="#simulasi" className="text-muted-foreground hover:text-blue-600 dark:hover:text-blue-400 text-sm font-medium transition">Simulasi</Link>
                            </li>
                            <li>
                                <Link href="#proses" className="text-muted-foreground hover:text-blue-600 dark:hover:text-blue-400 text-sm font-medium transition">Proses</Link>
                            </li>
                            <li>
                                <Link href="#harga" className="text-muted-foreground hover:text-blue-600 dark:hover:text-blue-400 text-sm font-medium transition">Harga</Link>
                            </li>
                            <li className="flex items-center gap-1">
                                <ThemeButton />
                                <LanguageSwitcher />
                                <Button asChild variant={"brand"} size={"sm"}>
                                    <Link href={textToWhatsapp} target="_blank" rel="noopener noreferrer">Chat Sekarang</Link>
                                </Button>
                            </li>
                        </ul>
                        {/* Mobile Menu */}
                        <Sheet open={open} onOpenChange={setOpen}>
                            <SheetTrigger asChild>
                                <Button variant="ghost" className="block lg:hidden"><MenuIcon /></Button>
                            </SheetTrigger>
                            <SheetContent showCloseButton={false}>
                                <SheetHeader className="border-b">
                                    <SheetTitle className="shrink-0 flex items-center gap-2">
                                        <Image src="/logo.svg" alt="Logo" width={40} height={40} className='dark:invert' />
                                        <div className='flex items-center gap-2'>
                                            <span className="block font-bold text-lg sm:text-xl tracking-tight text-primary">{appName}</span>
                                        </div>
                                    </SheetTitle>
                                </SheetHeader>
                                <ul className="overflow-y-auto px-4 pt-2 pb-6 space-y-2">
                                    <li>
                                        <Link onClick={() => setOpen(false)} href="#masalah" className="block px-3 py-2 text-muted-foreground font-medium">Problem</Link>
                                    </li>
                                    <li>
                                        <Link onClick={() => setOpen(false)} href="#solusi" className="block px-3 py-2 text-muted-foreground font-medium">Kenapa Kami</Link>
                                    </li>
                                    <li>
                                        <Link onClick={() => setOpen(false)} href="#simulasi" className="block px-3 py-2 text-muted-foreground font-medium">Simulasi Proyek</Link>
                                    </li>
                                    <li>
                                        <Link onClick={() => setOpen(false)} href="#proses" className="block px-3 py-2 text-muted-foreground font-medium">Cara Kerja</Link>
                                    </li>
                                    <li>
                                        <Link onClick={() => setOpen(false)} href="#harga" className="block px-3 py-2 text-muted-foreground font-medium">Harga</Link>
                                    </li>
                                    <li className="mt-4 flex items-center gap-1">
                                        <ThemeButton />
                                        <LanguageSwitcher />
                                        <div className="w-full">
                                            <Button asChild variant={"brand"} size={"sm"} className="w-full">
                                                <Link href={textToWhatsapp} target="_blank" rel="noopener noreferrer">Chat Sekarang</Link>
                                            </Button>
                                        </div>
                                    </li>
                                </ul>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </nav>
        </header>
    )
}