'use client'
import { CircleIcon, CreditCardIcon, LogOutIcon, MenuIcon, SettingsIcon, UserIcon } from "lucide-react"
import LanguageSwitcher from "../language-switcher"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu"
import { Button } from "../ui/button"
import { authClient } from "@/lib/auth-client"
import { useEffect, useRef, useState } from "react"
import { Link } from "@/i18n/navigation"
import Image from "next/image"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet"

export const AppHeader = () => {
    const appName = process.env.NEXT_PUBLIC_APP_NAME;
    const {
        data: session,
        isPending, //loading state
    } = authClient.useSession();

    const navRef = useRef<HTMLElement>(null);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (navRef.current) {
                if (window.scrollY > 20) {
                    // Tambah border saat scroll
                    navRef.current.classList.add("bg-slate-950", "border-border");
                    navRef.current.classList.remove("bg-transparent", "border-transparent");
                } else {
                    // Hilangkan border saat di atas
                    navRef.current.classList.add("bg-transparent", "border-transparent");
                    navRef.current.classList.remove("bg-slate-950", "border-border");
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        // Jalankan sekali saat mount untuk cek posisi awal
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            ref={navRef}
            className="fixed w-full z-50 bg-transparent border-b border-transparent transition-all duration-300"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-3">
                    <Link href="/" className="shrink-0 flex items-center gap-2 cursor-pointer">
                        <Image src="/logo.svg" alt="Logo" width={40} height={40} className='invert' />
                        <div className='flex items-center gap-2'>
                            <span className="block font-bold text-lg sm:text-xl tracking-tight text-white">Cylare</span>
                            <span className='hidden sm:block text-[12px] sm:text-xs text-muted-foreground'>by Lanang Lanusa</span>
                        </div>
                    </Link>
                    <div className="hidden lg:flex space-x-6 items-center">
                        <a href="#masalah" className="text-slate-400 hover:text-blue-400 text-sm font-medium transition">Problem</a>
                        <a href="#solusi" className="text-slate-400 hover:text-blue-400 text-sm font-medium transition">Kenapa Kami</a>
                        <a href="#simulasi" className="text-slate-400 hover:text-blue-400 text-sm font-medium transition">Simulasi</a>
                        <a href="#proses" className="text-slate-400 hover:text-blue-400 text-sm font-medium transition">Proses</a>
                        <a href="#harga" className="text-slate-400 hover:text-blue-400 text-sm font-medium transition">Harga</a>
                        <a href="https://wa.me/628123456789?text=Halo%20Cylare,%20saya%20tertarik%20konsultasi%20website" target="_blank" className="bg-blue-600 text-white px-5 py-2.5 rounded-full font-bold text-sm hover:bg-blue-700 transition shadow-lg shadow-blue-500/20">Chat Sekarang</a>
                    </div>
                    {/* Mobile Menu */}
                    <Sheet open={open} onOpenChange={setOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" className="block lg:hidden"><MenuIcon /></Button>
                        </SheetTrigger>
                        <SheetContent showCloseButton={false} className="bg-slate-950">
                            <SheetHeader className="border-b">
                                <SheetTitle className="shrink-0 flex items-center gap-2">
                                    <Image src="/logo.svg" alt="Logo" width={40} height={40} className='invert' />
                                    <div className='flex items-center gap-2'>
                                        <span className="block font-bold text-lg sm:text-xl tracking-tight text-white">Cylare</span>
                                    </div>
                                </SheetTitle>
                            </SheetHeader>
                            <div className="px-4 pt-2 pb-6 space-y-2">
                                <a onClick={() => setOpen(false)} href="#masalah" className="block px-3 py-2 text-slate-300 font-medium">Problem</a>
                                <a onClick={() => setOpen(false)} href="#solusi" className="block px-3 py-2 text-slate-300 font-medium">Kenapa Kami</a>
                                <a onClick={() => setOpen(false)} href="#simulasi" className="block px-3 py-2 text-slate-300 font-medium">Simulasi Proyek</a>
                                <a onClick={() => setOpen(false)} href="#proses" className="block px-3 py-2 text-slate-300 font-medium">Cara Kerja</a>
                                <a onClick={() => setOpen(false)} href="#harga" className="block px-3 py-2 text-slate-300 font-medium">Harga</a>
                                <a href="https://wa.me/628123456789?text=Halo%20Cylare,%20saya%20tertarik%20konsultasi%20website" target="_blank" className="block text-center w-full sm:w-auto bg-blue-600 text-white px-5 py-2.5 rounded-full font-bold text-sm hover:bg-blue-700 transition shadow-lg shadow-blue-500/20">Chat Sekarang</a>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </nav>
    )
}