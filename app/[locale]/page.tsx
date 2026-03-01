"use client"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Link } from '@/i18n/navigation'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react';

function page() {

    const navRef = useRef<HTMLElement>(null);

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
        <div className='bg-slate-950 selection:bg-sky-500/30 selection:text-sky-200'>
            {/* Navigation */}
            <nav
                ref={navRef}
                className="fixed w-full z-50 bg-transparent border-b border-transparent transition-all duration-300"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-3">
                        <Link href="/" className="shrink-0 flex items-center gap-2 cursor-pointer">
                            {/* <Image src="/logo.svg" alt="Logo" width={40} height={40} className='rounded-full' /> */}
                            <div className='flex items-center gap-2'>
                                <span className="block font-bold text-lg sm:text-xl tracking-tight text-white">Cylare</span>
                                <span className='block text-[12px] sm:text-xs text-muted-foreground'>by Lanang Lanusa</span>
                            </div>
                        </Link>
                        <div className="hidden lg:flex space-x-6 items-center">
                            <a href="#masalah" className="text-slate-400 hover:text-sky-400 text-sm font-medium transition">Problem</a>
                            <a href="#solusi" className="text-slate-400 hover:text-sky-400 text-sm font-medium transition">Kenapa Kami</a>
                            <a href="#simulasi" className="text-slate-400 hover:text-sky-400 text-sm font-medium transition">Simulasi</a>
                            <a href="#proses" className="text-slate-400 hover:text-sky-400 text-sm font-medium transition">Proses</a>
                            <a href="#harga" className="text-slate-400 hover:text-sky-400 text-sm font-medium transition">Harga</a>
                            <a href="https://wa.me/628123456789?text=Halo%20Cylare,%20saya%20tertarik%20konsultasi%20website" target="_blank" className="bg-sky-500 text-white px-5 py-2.5 rounded-full font-bold text-sm hover:bg-sky-600 transition shadow-lg shadow-sky-500/20">Chat Sekarang</a>
                        </div>
                        <div className="lg:hidden flex items-center">
                            <button id="mobile-menu-btn" className="text-slate-400 focus:outline-none">
                                <span className="text-2xl">☰</span>
                            </button>
                        </div>
                    </div>
                </div>
                {/* Mobile Menu */}
                <div id="mobile-menu" className="hidden lg:hidden bg-slate-950 border-t border-slate-800">
                    <div className="px-4 pt-2 pb-6 space-y-2">
                        <a href="#masalah" className="block px-3 py-2 text-slate-300 font-medium">Problem</a>
                        <a href="#solusi" className="block px-3 py-2 text-slate-300 font-medium">Kenapa Kami</a>
                        <a href="#simulasi" className="block px-3 py-2 text-slate-300 font-medium">Simulasi Proyek</a>
                        <a href="#proses" className="block px-3 py-2 text-slate-300 font-medium">Cara Kerja</a>
                        <a href="#harga" className="block px-3 py-2 text-slate-300 font-medium">Harga</a>
                    </div>
                </div>
            </nav>
            {/* Hero Section */}
            <section className="relative isolate pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
                <div className='absolute inset-0 -z-20 grid grid-cols-12 divide-x divide-slate-900'>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className='absolute inset-0 -z-20 bg-radial from-transparent to-slate-950'/>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
                    <div className="absolute top-20 left-[calc(50%-24rem)] w-72 h-72 bg-sky-400/10 rounded-full blur-[120px]" />
                    <div className="absolute bottom-20 right-[calc(50%-24rem)] w-96 h-96 bg-sky-400/10 rounded-full blur-[120px]" />
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center gap-2 py-1 px-4 rounded-full bg-slate-900 border border-slate-800 text-sky-400 text-xs font-bold mb-8 uppercase tracking-widest">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75" />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500" />
                        </span>
                        Menerima 3 Klien Bulan Ini
                    </div>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-8">
                        Website Anda Harusnya Jadi <br /><span className="bg-linear-to-r from-sky-200 to-sky-400 bg-clip-text text-transparent">Mesin Penjualan 24/7.</span>
                    </h1>
                    <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-400 mb-10 leading-relaxed">
                        Sudah bukan zamannya website cuma jadi brosur online yang sepi. Kami rancang alur website yang "memaksa" pengunjung penasaran dan berujung chat ke WhatsApp Anda.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <a href="https://wa.me/628123456789?text=Halo%20Cylare,%20saya%20mau%20konsultasi%20strategi%20website%20gratis" target="_blank" className="px-8 py-4 bg-sky-500 text-white font-bold rounded-xl hover:bg-sky-600 transition-all shadow-xl shadow-sky-500/20 transform hover:-translate-y-1">
                            Konsultasi Gratis Sekarang ➔
                        </a>
                        <a href="#simulasi" className="px-8 py-4 bg-slate-900 text-white font-bold border border-slate-800 rounded-xl hover:bg-slate-800 transition">
                            Lihat Simulasi Proyek
                        </a>
                    </div>
                </div>
                <div className="mt-16 flex justify-center items-center gap-8 text-muted-foreground grayscale opacity-70">
                    {/* Simple unicode placeholders for "Clients" to imply social proof without specific logos */}
                    <span className="text-2xl font-bold">UMKM INDONESIA</span>
                    <span className="text-2xl font-bold">•</span>
                    <span className="text-2xl font-bold">STARTUP LOKAL</span>
                    <span className="text-2xl font-bold">•</span>
                    <span className="text-2xl font-bold">BRAND PERSONAL</span>
                </div>
            </section>
            {/* SECTION 1: Agitation / The Real Problem */}
            <section id="masalah" className="relative isolate overflow-hidden py-24 bg-slate-900/30">
                <div className="absolute top-0 right-[calc(50%-50rem)] w-80 h-80 blur-3xl bg-sky-500/10 rounded-bl-full" />
                <div className="absolute top-0 left-[calc(50%-50rem)] w-80 h-80 blur-3xl bg-sky-500/10 rounded-br-full" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Kenapa Bisnis Anda Butuh Website <span className="text-sky-400">Sekarang?</span></h2>
                        <p className="text-slate-400 text-lg max-w-2xl mx-auto">Jujur saja, ngandelin satu platform sosial media itu bahaya. Algoritma berubah, bisnis Anda bisa anjlok besok pagi.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-slate-900 border border-border hover:border-sky-500/50 transition duration-300 hover:-translate-y-2 p-6 rounded-2xl card-hover relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-8 blur-3xl bg-sky-500/75 rounded-bl-full" />
                            <div className="text-3xl mb-4">💬</div>
                            <h3 className="font-bold text-white mb-2">DM Numpuk, Closing Lama</h3>
                            <p className="text-sm text-slate-400">Jawab pertanyaan yang itu-itu saja tiap hari di IG/WA bikin admin capek. Pembeli keburu lari ke kompetitor yang pelayanannya instan.</p>
                        </div>
                        <div className="bg-slate-900 border border-border hover:border-sky-500/50 transition duration-300 hover:-translate-y-2 p-6 rounded-2xl card-hover relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-8 blur-3xl bg-sky-500/75 rounded-bl-full" />
                            <div className="text-3xl mb-4">🔍</div>
                            <h3 className="font-bold text-white mb-2">Gak Muncul di Google</h3>
                            <p className="text-sm text-slate-400">Saat orang ketik "Jasa [Bisnis Anda] terdekat", yang muncul kompetitor Anda. Anda kehilangan pembeli yang sudah siap bayar.</p>
                        </div>
                        <div className="bg-slate-900 border border-border hover:border-sky-500/50 transition duration-300 hover:-translate-y-2 p-6 rounded-2xl card-hover relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-8 blur-3xl bg-sky-500/75 rounded-bl-full" />
                            <div className="text-3xl mb-4">⚠️</div>
                            <h3 className="font-bold text-white mb-2">Rawan Banned &amp; Algoritma</h3>
                            <p className="text-sm text-slate-400">Akun IG/TikTok bisa hilang kapan saja tanpa peringatan. Kalau akun hilang, audiens dan sumber pemasukan Anda ikut hilang.</p>
                        </div>
                        <div className="bg-slate-900 border border-border hover:border-sky-500/50 transition duration-300 hover:-translate-y-2 p-6 rounded-2xl card-hover relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-8 blur-3xl bg-sky-500/75 rounded-bl-full" />
                            <div className="text-3xl mb-4">🏢</div>
                            <h3 className="font-bold text-white mb-2">Terlihat Kurang Profesional</h3>
                            <p className="text-sm text-slate-400">Klien B2B atau pembeli tiket besar biasanya minta "Boleh minta link websitenya?". Kalau jawabnya "Cek IG kita ya kak", tingkat trust langsung turun.</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* Problem */}
            <section id="masalah" className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-12">Atau, website lama Anda cuma jadi beban biaya kan?</h2>
                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <div className="shrink-0 h-10 w-10 flex items-center justify-center rounded-lg bg-slate-900 text-red-600 text-xl font-bold">✕</div>
                                    <div className="ml-4">
                                        <h3 className="text-lg font-bold">Sepi Pengunjung</h3>
                                        <p className="text-muted-foreground">Desain bagus tapi loading lambat dan strukturnya berantakan. Google benci, customer kabur.</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="shrink-0 h-10 w-10 flex items-center justify-center rounded-lg bg-slate-900 text-red-600 text-xl font-bold">✕</div>
                                    <div className="ml-4">
                                        <h3 className="text-lg font-bold">Copywriting Kaku</h3>
                                        <p className="text-muted-foreground">"Kami adalah solusi terbaik bla bla..." Membosankan. Orang beli karena emosi, bukan data teknis.</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="shrink-0 h-10 w-10 flex items-center justify-center rounded-lg bg-slate-900 text-red-600 text-xl font-bold">✕</div>
                                    <div className="ml-4">
                                        <h3 className="text-lg font-bold">Tombol 'Beli' Gak Dipencet</h3>
                                        <p className="text-muted-foreground">Susunan layout bikin bingung. User mau beli tapi gak tau harus klik mana. Hilang deh omzet.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative bg-slate-900 rounded-2xl p-8 border border-slate-800">
                            <div className="absolute -top-4 -right-4 bg-red-800 text-white px-4 py-2 rounded-lg font-bold shadow-lg transform rotate-2">Realita Pahit</div>
                            <div className="space-y-4">
                                <div className="bg-slate-800 p-4 rounded-lg shadow-sm opacity-50">
                                    <div className="h-4 bg-slate-600 rounded w-3/4 mb-2" />
                                    <div className="h-4 bg-slate-600 rounded w-1/2" />
                                </div>
                                <div className="bg-slate-800 p-4 rounded-lg shadow-sm border-2 border-red-900">
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="font-semibold text-red-500">Website Biasa</span>
                                        <span className="text-xs text-muted-foreground">Bounce Rate: 80%</span>
                                    </div>
                                    <p className="text-sm text-muted-foreground">Customer masuk -&gt; Bingung baca teks panjang -&gt; Keluar -&gt; Beli di kompetitor.</p>
                                </div>
                                <div className="bg-slate-800 p-4 rounded-lg shadow-sm opacity-50">
                                    <div className="h-4 bg-slate-600 rounded w-2/3 mb-2" />
                                    <div className="h-4 bg-slate-600 rounded w-1/4" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Solusi */}
            <section id="solusi" className="relative isolate overflow-hidden py-20 bg-slate-900/30 text-white">
                <div className="absolute top-0 right-[calc(50%-50rem)] w-80 h-80 blur-3xl bg-sky-500/10 rounded-bl-full" />
                <div className="absolute bottom-0 left-[calc(50%-50rem)] w-80 h-80 blur-3xl bg-sky-500/10 rounded-tr-full" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Apapun Bisnisnya, Goalnya Tetap Chat WA.</h2>
                    <p className="text-xl text-slate-400 max-w-3xl mx-auto">Kami sesuaikan sistem website dengan model bisnis Anda. Fokusnya satu: Mempermudah klien untuk menghubungi Anda.</p>
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="relative overflow-hidden bg-slate-900 p-8 rounded-2xl border border-slate-800">
                        <div className="absolute -top-12 right-0 w-40 h-24 blur-3xl bg-sky-500/50 rounded-bl-full" />
                        <div className="text-4xl mb-4">🎯</div>
                        <h3 className="text-xl font-bold mb-3">Landing Page (Single Page)</h3>
                        <p className="text-slate-400 mb-6">Satu halaman to-the-point. Sangat cocok untuk jualan produk fisik atau jasa spesifik lewat iklan FB/IG/TikTok.</p>
                        <div className="pt-4 border-t border-slate-800 text-sm text-cyan-300 font-semibold"><span className='text-primary font-normal'>Goal :</span> 1 Tombol Direct WA</div>
                    </div>
                    <div className="relative overflow-hidden bg-slate-900 p-8 rounded-2xl border border-slate-800">
                        <div className="absolute -top-12 right-0 w-40 h-24 blur-3xl bg-sky-500/50 rounded-bl-full" />
                        <div className="text-4xl mb-4">🏢</div>
                        <h3 className="text-xl font-bold mb-3">Company Profile</h3>
                        <p className="text-slate-400 mb-6">Membangun kepercayaan klien korporat. Tampilkan portfolio, legalitas, dan tim agar Anda terlihat kredibel.</p>
                        <div className="pt-4 border-t border-slate-800 text-sm text-cyan-300 font-semibold"><span className='text-primary font-normal'>Goal :</span> Form Penawaran ke WA</div>
                    </div>
                    <div className="relative overflow-hidden bg-slate-900 p-8 rounded-2xl border border-slate-800">
                        <div className="absolute -top-12 right-0 w-40 h-24 blur-3xl bg-sky-500/50 rounded-bl-full" />
                        <div className="text-4xl mb-4">🛍️</div>
                        <h3 className="text-xl font-bold mb-3">Katalog Toko Online</h3>
                        <p className="text-slate-400 mb-6">Tampilkan ribuan produk dengan rapi. Pengunjung pilih barang, klik checkout, lalu daftar orderan masuk ke WA Anda.</p>
                        <div className="pt-4 border-t border-slate-800 text-sm text-cyan-300 font-semibold"><span className='text-primary font-normal'>Goal :</span> Order Otomatis via WA</div>
                    </div>
                </div>
            </section>

            {/* SECTION 3 & 9: Why Us & Guarantees */}
            <section id="solusi" className="py-24 bg-slate-950 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold leading-relaxed text-white mb-8">Kenapa Cylare Beda dari Tukang Web <span className="text-sky-300">500 Ribuan?</span></h2>
                            <p className="text-slate-400 mb-12 leading-relaxed">Web murah biasanya cuma pakai template bajakan, loading lemot, dan desainnya kaku. Mereka jualan fitur. <strong className="text-white">Kami jualan strategi konversi.</strong></p>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="shrink-0 h-10 w-10 flex items-center justify-center rounded-lg bg-slate-900 text-emerald-400 text-xl font-bold">✓</div>
                                    <div>
                                        <h4 className="text-lg font-bold text-white mb-1">Fokus ke Closing (Sales)</h4>
                                        <p className="text-slate-400">Desain cantik itu bonus. Tujuan utamanya adalah menyusun tombol, warna, dan teks (copywriting) agar otak pengunjung mau klik tombol WhatsApp.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="shrink-0 h-10 w-10 flex items-center justify-center rounded-lg bg-slate-900 text-emerald-400 text-xl font-bold">✓</div>
                                    <div>
                                        <h4 className="text-lg font-bold text-white mb-1">Garansi Bug &amp; Error 30 Hari</h4>
                                        <p className="text-slate-400">Setelah website live, kami garansi selama 30 hari. Ada error? Kami perbaiki gratis. Kami tidak akan "habis dibayar lalu hilang".</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="shrink-0 h-10 w-10 flex items-center justify-center rounded-lg bg-slate-900 text-emerald-400 text-xl font-bold">✓</div>
                                    <div>
                                        <h4 className="text-lg font-bold text-white mb-1">Diskusi Langsung via WhatsApp</h4>
                                        <p className="text-slate-400">Nggak perlu kirim tiket email yang dibalas 3 hari kemudian. Ada revisi? Langsung chat kami di WA, kita bahas santai.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            {/* <div className="absolute inset-0 bg-linear-to-tr from-sky-500/20 to-indigo-500/20 blur-3xl rounded-full" /> */}
                            <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl relative">
                                <div className="text-center mb-6">
                                    <span className="inline-block bg-emerald-500/10 text-emerald-400 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest border border-emerald-500/20">Komitmen Kami</span>
                                </div>
                                <ul className="space-y-4">
                                    <li className="flex items-center gap-3 bg-slate-800/50 p-4 rounded-lg">
                                        <span className="text-2xl">✅</span>
                                        <span className="text-white font-medium">Revisi Desain Sampai Cocok</span>
                                    </li>
                                    <li className="flex items-center gap-3 bg-slate-800/50 p-4 rounded-lg">
                                        <span className="text-2xl">✅</span>
                                        <span className="text-white font-medium">Bukan Template Asal Jadi</span>
                                    </li>
                                    <li className="flex items-center gap-3 bg-slate-800/50 p-4 rounded-lg">
                                        <span className="text-2xl">✅</span>
                                        <span className="text-white font-medium">Support Teknis Setelah Live</span>
                                    </li>
                                </ul>
                                <p className="text-xs text-muted-foreground mt-4 text-center"><span className='text-red-500'>*</span> Sesuai batas wajar (max 5x mayor)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* SECTION 5: Mid-page CTA */}
            <section className="relative isolate overflow-hidden py-16 bg-slate-900/30">
                <div className="absolute top-0 right-[calc(50%-50rem)] w-80 h-80 blur-3xl bg-sky-500/10 rounded-bl-full" />
                <div className="absolute -top-1/2 right-[calc(50%-20rem)] w-64 h-64 blur-3xl bg-sky-500/10 rounded-b-full" />
                <div className="absolute bottom-0 left-[calc(50%-50rem)] w-80 h-80 blur-3xl bg-sky-500/10 rounded-tr-full" />
                <div className="absolute -bottom-1/2 left-[calc(50%-26rem)] w-72 h-72 blur-3xl bg-sky-500/10 rounded-t-full" />
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold leading-tight text-white mb-6">Siap Punya Website yang<br />Bekerja Otomatis?</h2>
                    <p className="text-sky-100 mb-8 opacity-90">Berhenti buang waktu melayani prospek yang tidak serius.<br />Biarkan website memfilter mereka untuk Anda.</p>
                    <a href="https://wa.me/628123456789?text=Halo%20Cylare,%20saya%20siap%20upgrade%20website%20bisnis%20saya" target="_blank" className="inline-block px-8 py-4 bg-sky-500 text-white font-bold rounded-xl hover:bg-sky-600 transition shadow-2xl transform hover:scale-105">
                        Konsultasi Gratis Sekarang ➔
                    </a>
                </div>
            </section>
            {/* SECTION 6: Project Simulations */}
            <section id="simulasi" className="py-24 bg-slate-950">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Simulasi Proyek <span className="text-sky-400">(Studi Kasus)</span></h2>
                        <p className="text-slate-400 max-w-2xl mx-auto">Masih bingung website Anda nanti bentuknya seperti apa? Berikut bayangan bagaimana kami menyelesaikan masalah spesifik di industri yang berbeda.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Simulation 1 */}
                        <div className="bg-slate-900/50 p-8 rounded-3xl border border-slate-800 relative group overflow-hidden">
                            <div className="absolute -top-12 right-0 w-40 h-24 blur-3xl bg-sky-500/50 rounded-bl-full" />
                            <div className="inline-block px-3 py-1 bg-sky-500/20 text-sky-400 rounded-lg text-xs font-bold mb-4">Bisnis F&amp;B / Coffee Shop</div>
                            <h3 className="text-xl font-bold text-white mb-4">Sistem Pre-Order Otomatis</h3>
                            <div className="mb-4">
                                <p className="text-xs text-slate-500 uppercase font-bold mb-1">Masalah Klien:</p>
                                <p className="text-sm text-slate-300">Pusing rekap orderan via DM IG. Sering salah catat pesanan karena format berantakan.</p>
                            </div>
                            <div>
                                <p className="text-xs text-sky-400 uppercase font-bold mb-1">Solusi Cylare:</p>
                                <p className="text-sm text-slate-300">Buat <span className="text-white font-medium">Landing Page Katalog</span>. Customer tinggal klik menu, isi data diri, lalu orderan terkirim ke WA admin dengan format yang rapi dan total harga otomatis.</p>
                            </div>
                        </div>
                        {/* Simulation 2 */}
                        <div className="bg-slate-900/50 p-8 rounded-3xl border border-slate-800 relative group overflow-hidden">
                            <div className="absolute -top-12 right-0 w-40 h-24 blur-3xl bg-sky-500/50 rounded-bl-full" />
                            <div className="inline-block px-3 py-1 bg-sky-500/20 text-sky-400 rounded-lg text-xs font-bold mb-4">Skincare / Fashion Lokal</div>
                            <h3 className="text-xl font-bold text-white mb-4">Meningkatkan Trust Brand</h3>
                            <div className="mb-4">
                                <p className="text-xs text-slate-500 uppercase font-bold mb-1">Masalah Klien:</p>
                                <p className="text-sm text-slate-300">Iklan di FB Ads jalan terus, klik banyak, tapi yang beli dikit karena brand belum terkenal (trust issue).</p>
                            </div>
                            <div>
                                <p className="text-xs text-sky-400 uppercase font-bold mb-1">Solusi Cylare:</p>
                                <p className="text-sm text-slate-300">Buat <span className="text-white font-medium">Sales Page Premium</span>. Fokus pada desain elegan, pamerkan sertifikat BPOM, dan susun blok testimoni "Before/After" yang meyakinkan secara psikologis.</p>
                            </div>
                        </div>
                        {/* Simulation 3 */}
                        <div className="bg-slate-900/50 p-8 rounded-3xl border border-slate-800 relative group overflow-hidden">
                            <div className="absolute -top-12 right-0 w-40 h-24 blur-3xl bg-sky-500/50 rounded-bl-full" />
                            <div className="inline-block px-3 py-1 bg-sky-500/20 text-sky-400 rounded-lg text-xs font-bold mb-4">Jasa / B2B Consultant</div>
                            <h3 className="text-xl font-bold text-white mb-4">Profile Perusahaan Kredibel</h3>
                            <div className="mb-4">
                                <p className="text-xs text-slate-500 uppercase font-bold mb-1">Masalah Klien:</p>
                                <p className="text-sm text-slate-300">Sering ditanya "Kliennya siapa aja?", repot kirim PDF portfolio bolak-balik via email ke calon korporat.</p>
                            </div>
                            <div>
                                <p className="text-xs text-sky-400 uppercase font-bold mb-1">Solusi Cylare:</p>
                                <p className="text-sm text-slate-300">Bangun <span className="text-white font-medium">Company Profile Berwibawa</span>. Tampilkan daftar klien besar, pamerkan metodologi kerja, dan sediakan form "Minta Penawaran" langsung di website.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* SECTION 2: Work Process */}
            <section id="proses" className="py-24 bg-slate-900/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Cara Kerja Kami <span className="text-sky-400">(Anti Ribet)</span></h2>
                        <p className="text-slate-400 max-w-2xl mx-auto">Banyak klien kami gaptek, dan itu tidak masalah. Kami yang urus pusingnya, Anda tinggal pantau hasilnya.</p>
                    </div>
                    {/* CSS Timeline */}
                    <div className="relative max-w-3xl mx-auto">
                        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-800 hidden md:block" />
                        <div className="space-y-12">
                            <div className="relative flex items-start gap-6 md:gap-10">
                                <div className="w-16 h-16 rounded-2xl bg-slate-900 border border-slate-700 text-sky-400 flex items-center justify-center font-bold text-2xl shrink-0 z-10 relative">1</div>
                                <div className="pt-3">
                                    <h3 className="text-xl font-bold text-white mb-2">Konsultasi Kebutuhan Bisnis</h3>
                                    <p className="text-slate-400 text-sm">Kita ngobrol santai via WhatsApp. Anda ceritakan jualan apa, target marketnya siapa, dan masalahnya di mana. Kami akan sarankan paket yang pas.</p>
                                </div>
                            </div>
                            <div className="relative flex items-start gap-6 md:gap-10">
                                <div className="w-16 h-16 rounded-2xl bg-slate-900 border border-slate-700 text-sky-400 flex items-center justify-center font-bold text-2xl shrink-0 z-10 relative">2</div>
                                <div className="pt-3">
                                    <h3 className="text-xl font-bold text-white mb-2">Riset &amp; Konsep (Wireframe)</h3>
                                    <p className="text-slate-400 text-sm">Setelah sepakat (dan pembayaran DP), kami tidak langsung ngoding. Kami riset kompetitor Anda, buat copywriting, dan susun sketsa mentah untuk Anda setujui.</p>
                                </div>
                            </div>
                            <div className="relative flex items-start gap-6 md:gap-10">
                                <div className="w-16 h-16 rounded-2xl bg-slate-900 border border-slate-700 text-sky-400 flex items-center justify-center font-bold text-2xl shrink-0 z-10 relative">3</div>
                                <div className="pt-3">
                                    <h3 className="text-xl font-bold text-white mb-2">Development &amp; Desain UI</h3>
                                    <p className="text-slate-400 text-sm">Tim kami mulai meracik website Anda. Mulai dari warna, layout, animasi, sampai integrasi ke nomor WhatsApp Anda.</p>
                                </div>
                            </div>
                            <div className="relative flex items-start gap-6 md:gap-10">
                                <div className="w-16 h-16 rounded-2xl bg-slate-900 border border-slate-700 text-sky-400 flex items-center justify-center font-bold text-2xl shrink-0 z-10 relative">4</div>
                                <div className="pt-3">
                                    <h3 className="text-xl font-bold text-white mb-2">Revisi &amp; Finalisasi</h3>
                                    <p className="text-slate-400 text-sm">Kami berikan link preview rahasia. Anda cek. Jika ada bagian yang kurang sreg, sampaikan saja. Kita revisi sampai Anda puas.</p>
                                </div>
                            </div>
                            <div className="relative flex items-start gap-6 md:gap-10">
                                <div className="w-16 h-16 rounded-2xl bg-sky-500 text-white flex items-center justify-center font-bold text-2xl shrink-0 z-10 shadow-lg shadow-sky-500/30">🚀</div>
                                <div className="pt-3">
                                    <h3 className="text-xl font-bold text-white mb-2">Launching &amp; Support Live</h3>
                                    <p className="text-slate-400 text-sm">Website di-online-kan menggunakan domain milik Anda (.com / .id). Kami beri tutorial cara pakainya, dan mulai masa garansi 30 hari.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* SECTION 8: Pricing & Maintenance */}
            <section id="harga" className="py-24 bg-slate-950">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Investasi Bisnis Anda</h2>
                        <p className="text-slate-400">Harga di bawah ini adalah harga 1x bayar pembuatan. <br />Bisa <span className="text-white font-bold">Bayar DP 50%</span> dulu untuk mulai pengerjaan.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Plan 1 */}
                        <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-3xl flex flex-col hover:border-sky-500/30 transition">
                            <h3 className="text-xl font-bold text-white mb-2">Starter (Landing Page)</h3>
                            <p className="text-sm text-slate-500 mb-6">Validasi produk jualan atau jasa spesifik via ads.</p>
                            <div className="text-3xl font-extrabold text-white mb-8">Rp 1.500.000</div>
                            <ul className="space-y-4 mb-10 text-sm text-slate-400 grow">
                                <li className="flex items-center gap-2"><span className="text-sky-400">✓</span> 1 Halaman Fokus Jualan</li>
                                <li className="flex items-center gap-2"><span className="text-sky-400">✓</span> Copywriting</li>
                                <li className="flex items-center gap-2"><span className="text-sky-400">✓</span> Tombol Direct WhatsApp</li>
                                <li className="flex items-center gap-2 font-bold text-sky-300"><span className="text-sky-400">✓</span> Maksimal 3x Revisi Mayor</li>
                                <li className="flex items-center gap-2"><span className="text-sky-400">✓</span> Gratis Hosting &amp; Domain .com 1 thn</li>
                            </ul>
                            <a href="https://wa.me/628123456789?text=Saya%20tertarik%20Paket%20Starter" className="w-full py-4 text-center bg-slate-800 text-white rounded-xl font-bold hover:bg-slate-700 transition">Pilih Paket</a>
                        </div>
                        {/* Plan 2: Best Value */}
                        <div className="bg-slate-900 border-2 border-sky-500 p-8 rounded-3xl flex flex-col relative transform lg:-translate-y-6 shadow-2xl shadow-sky-500/10">
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-sky-500 text-white px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">Paling Sering Dipilih</div>
                            <h3 className="text-xl font-bold text-white mb-2">Business Growth</h3>
                            <p className="text-sm text-slate-400 mb-6">Untuk UMKM yang butuh Company Profile / Web Utuh.</p>
                            <div className="text-4xl font-extrabold text-sky-400 mb-8">Rp 3.500.000</div>
                            <ul className="space-y-4 mb-10 text-sm text-slate-300 grow">
                                <li className="flex items-center gap-2"><span className="text-sky-400">✓</span> Multi bahasa (en, id)</li>
                                <li className="flex items-center gap-2"><span className="text-sky-400">✓</span> Sampai 5 Halaman Strategis</li>
                                <li className="flex items-center gap-2"><span className="text-sky-400">✓</span> Desain Custom (Bukan Template)</li>
                                <li className="flex items-center gap-2"><span className="text-sky-400">✓</span> Integrasi Form Order WA</li>
                                <li className="flex items-center gap-2 font-bold text-sky-300"><span className="text-sky-400">✓</span> Maksimal 5x Revisi Mayor</li>
                                <li className="flex items-center gap-2"><span className="text-sky-400">✓</span> Basic SEO Setup (Google)</li>
                            </ul>
                            <a href="https://wa.me/628123456789?text=Saya%20tertarik%20Paket%20Business%20Growth" className="w-full py-4 text-center bg-sky-500 text-white rounded-xl font-bold hover:bg-sky-600 transition shadow-lg shadow-sky-500/20">Ambil Slot Konsultasi</a>
                        </div>
                        {/* Plan 3 */}
                        <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-3xl flex flex-col hover:border-sky-500/30 transition">
                            <h3 className="text-xl font-bold text-white mb-2">Katalog Online</h3>
                            <p className="text-sm text-slate-500 mb-6">Punya puluhan/ratusan produk yang butuh katalog.</p>
                            <div className="text-3xl font-extrabold text-white mb-8">Rp 5.500.000</div>
                            <ul className="space-y-4 mb-10 text-sm text-slate-400 grow">
                                <li className="flex items-center gap-2"><span className="text-sky-400">✓</span> Sistem Keranjang Belanja</li>
                                <li className="flex items-center gap-2"><span className="text-sky-400">✓</span> Order List Langsung ke WA Admin</li>
                                <li className="flex items-center gap-2"><span className="text-sky-400">✓</span> Halaman Admin Manajemen Produk</li>
                                <li className="flex items-center gap-2 font-bold text-sky-300"><span className="text-sky-400">✓</span> Revisi s/d Puas (Batas Wajar)</li>
                                <li className="flex items-center gap-2"><span className="text-sky-400">✓</span> Video Tutorial Edit Mandiri</li>
                            </ul>
                            <a href="https://wa.me/628123456789?text=Saya%20tertarik%20Paket%20Katalog" className="w-full py-4 text-center bg-slate-800 text-white rounded-xl font-bold hover:bg-slate-700 transition">Diskusi Dulu</a>
                        </div>
                    </div>
                    {/* Maintenance & After Sales Detail */}
                    <div className="mt-16 bg-linear-to-br from-slate-900 to-slate-800 p-8 rounded-3xl border border-slate-700/50 shadow-xl max-w-4xl mx-auto">
                        <div className="flex flex-col md:flex-row gap-8 items-center">
                            <div className="w-full md:w-1/3 text-center md:text-left">
                                <span className="text-5xl">🤝</span>
                                <h4 className="text-white font-bold mt-4 text-xl">Layanan After-Sales</h4>
                                <p className="text-sm text-slate-400 mt-2">Kami tidak akan meninggalkan Anda setelah website live.</p>
                            </div>
                            <div className="w-full md:w-2/3 space-y-4 text-sm">
                                <div className="p-4 bg-slate-950/50 rounded-xl border border-slate-800 flex items-start gap-3">
                                    <span className="text-emerald-400 mt-0.5">✓</span>
                                    <div>
                                        <strong className="text-white block mb-1">Gratis Maintenance 1 Bulan Pertama</strong>
                                        <p className="text-slate-400">Cek error, backup minor, dan perbaikan bug kami cover 100% gratis setelah website rilis.</p>
                                    </div>
                                </div>
                                <div className="p-4 bg-slate-950/50 rounded-xl border border-slate-800 flex items-start gap-3">
                                    <span className="text-sky-400 mt-0.5">🔄</span>
                                    <div>
                                        <strong className="text-white block mb-1">Opsi Maintenance Berbayar (Bulan ke-2 dst)</strong>
                                        <p className="text-slate-400">Cuma Rp 250rb - 500rb/bulan (opsional). Kami bantu update keamanan, monitor uptime, perpanjangan domain, dan ganti foto/teks agar Anda fokus jualan saja.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* SECTION 7: About / Personal Branding */}
            <section className="py-24 bg-slate-900/30 border-t border-slate-800/50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-white mb-8">Siapa di Balik Cylare?</h2>
                    <div className="card-bg p-8 md:p-12 rounded-[40px] border border-slate-800">
                        <div className="w-24 h-24 bg-linear-to-br from-slate-700 to-slate-900 border-2 border-sky-500 rounded-full mx-auto mb-6 flex items-center justify-center text-4xl overflow-hidden">
                            🧑‍💻
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">Halo, Saya Founder Cylare.</h3>
                        <p className="text-slate-400 text-lg leading-relaxed mb-6">
                            Saya melihat banyak teman-teman UMKM dan pengusaha lokal yang tertipu oleh jasa pembuatan website abal-abal. Bayar mahal, tapi yang didapat web template lemot yang sama sekali gak mendatangkan pembeli.
                        </p>
                        <p className="text-slate-400 text-lg leading-relaxed mb-8">
                            Itu sebabnya saya membangun Cylare. Menggunakan *modern tech stack* yang stabil dan fokus 100% pada struktur psikologi penjualan. Misi saya simpel: <strong>Membantu bisnis Anda memiliki mesin kasir digital yang bisa diandalkan.</strong>
                        </p>
                        <div className="inline-flex gap-2">
                            <span className="px-3 py-1 bg-slate-800 text-slate-300 rounded text-xs font-mono">Modern Tech</span>
                            <span className="px-3 py-1 bg-slate-800 text-slate-300 rounded text-xs font-mono">Sales Focused</span>
                            <span className="px-3 py-1 bg-slate-800 text-slate-300 rounded text-xs font-mono">UMKM Friendly</span>
                        </div>
                    </div>
                </div>
            </section>
            {/* SECTION 4: Expanded FAQ */}
            <section className="py-24 bg-slate-950">
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-white mb-12">Yang Sering Ditanyakan (FAQ)</h2>
                    <div className="space-y-4">
                        {/* FAQ 1 */}
                        <Accordion
                            type="multiple"
                            className="rounded-2xl border border-slate-800"
                        >
                            <AccordionItem
                                value="item-1"
                                className="border-b px-4 last:border-b-0 py-2"
                            >
                                <AccordionTrigger className='font-semibold text-md'>Berapa lama proses pengerjaannya?</AccordionTrigger>
                                <AccordionContent className='text-muted-foreground'>Sangat bergantung pada paket dan kesiapan data (logo, teks, foto produk). Rata-rata: Landing Page (3-5 hari kerja), Company Profile (7-10 hari kerja), Katalog (14 hari kerja). Kami pastikan tidak molor asalkan komunikasi lancar.</AccordionContent>
                            </AccordionItem>
                            <AccordionItem
                                value="item-2"
                                className="border-b px-4 last:border-b-0 py-2"
                            >
                                <AccordionTrigger className='font-semibold text-md'>Apakah pembayarannya bisa dicicil / bayar DP dulu?</AccordionTrigger>
                                <AccordionContent className='text-muted-foreground'>Sangat bisa! Anda cukup membayar <strong className='text-primary'>DP 50%</strong> untuk memulai pengerjaan desain dan development. Sisanya 50% dilunasi saat website sudah selesai, direvisi, dan siap untuk dipublikasikan (live).</AccordionContent>
                            </AccordionItem>
                            <AccordionItem
                                value="item-3"
                                className="border-b px-4 last:border-b-0 py-2"
                            >
                                <AccordionTrigger className='font-semibold text-md'>Saya gaptek, urusan hosting dan domain bagaimana?</AccordionTrigger>
                                <AccordionContent className='text-muted-foreground'>Anda terima beres. Harga paket kami sudah termasuk pembelian Domain (nama web Anda, misal: bisnisanda.com) dan Hosting (tempat simpan data web) untuk tahun pertama. Kami yang set-up semuanya dari A sampai Z.</AccordionContent>
                            </AccordionItem>
                            <AccordionItem
                                value="item-4"
                                className="border-b px-4 last:border-b-0 py-2"
                            >
                                <AccordionTrigger className='font-semibold text-md'>Gimana kalau saya tidak suka dengan desain awalnya?</AccordionTrigger>
                                <AccordionContent className='text-muted-foreground'>Makanya di tahap ke-2, kita akan sepakati "Sketsa Kasar / Konsep" dulu sebelum kami ngoding. Jika desain awalnya kurang sreg, gunakan jatah revisi Anda. Kami sangat fleksibel dan terbuka pada masukan Anda.</AccordionContent>
                            </AccordionItem>
                            <AccordionItem
                                value="item-5"
                                className="border-b px-4 last:border-b-0 py-2"
                            >
                                <AccordionTrigger className='font-semibold text-md'>Apa butuh perpanjangan tahun depan? Biayanya berapa?</AccordionTrigger>
                                <AccordionContent className='text-muted-foreground'>Ya, sama seperti sewa ruko, domain dan hosting wajib diperpanjang per tahun (mulai tahun kedua). Biayanya sangat terjangkau, kisaran Rp 350.000 - Rp 600.000 per TAHUN tergantung kapasitas. Kami akan ingatkan H-30 sebelum jatuh tempo.</AccordionContent>
                            </AccordionItem>
                            <AccordionItem
                                value="item-6"
                                className="border-b px-4 last:border-b-0 py-2"
                            >
                                <AccordionTrigger className='font-semibold text-md'>Kenapa revisinya dibatasi?</AccordionTrigger>
                                <AccordionContent className='text-muted-foreground'>Untuk menjaga proyek tetap on-schedule dan sehat. Tapi tenang, "Revisi Mayor" itu artinya ubah layout besar. Kalau cuma ganti kata-kata atau ganti satu-dua foto, itu gratis selamanya selama masa maintenance. Kami fleksibel, bukan robot.</AccordionContent>
                            </AccordionItem>
                            <AccordionItem
                                value="item-7"
                                className="border-b px-4 last:border-b-0 py-2"
                            >
                                <AccordionTrigger className='font-semibold text-md'>Gimana kalau saya nggak perpanjang maintenance?</AccordionTrigger>
                                <AccordionContent className='text-muted-foreground'>Tidak apa-apa. Website tetap milik Anda 100%. Anda bisa mengelolanya sendiri. Maintenance berbayar hanya jika Anda ingin "terima beres" dan nggak mau pusing urusan teknis seperti update plugin, backup data, atau serangan malware.</AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>
            </section>
            {/* Final CTA */}
            <section className="py-24 relative overflow-hidden bg-slate-900">
                <div className="absolute inset-0 bg-sky-900/10 blur-3xl" />
                <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Masih Ragu? <span className="text-sky-400">Kita Ngobrol Dulu Aja.</span></h2>
                    <p className="text-xl text-slate-400 mb-12">Ceritakan masalah bisnis Anda di WhatsApp. Kami kasih saran strategi websitenya secara jujur. Kalau dirasa nggak cocok, nggak jadi beli juga nggak apa-apa.</p>
                    <div className="bg-slate-950 border border-sky-500 p-10 rounded-[40px] shadow-2xl relative">
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-sky-500 px-4 py-1 rounded-full text-white font-bold text-xs uppercase shadow-lg shadow-sky-500/30">Admin Standby</div>
                        <a href="https://wa.me/628123456789?text=Halo%20Cylare,%20boleh%20tanya-tanya%20dulu%20soal%20bikin%20website?" target="_blank" className="inline-flex items-center gap-4 bg-sky-500 text-white px-10 py-5 rounded-2xl font-black text-2xl hover:bg-sky-600 transition shadow-2xl shadow-sky-500/40 transform hover:scale-105">
                            Hubungi WhatsApp ➔
                        </a>
                        <p className="mt-6 text-slate-500 text-sm">"Jangan tunggu kompetitor Anda yang duluan ambil pasar di Google."</p>
                    </div>
                </div>
            </section>
            {/* Footer */}
            <footer className="py-12 border-t border-slate-900 bg-slate-950">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <div className="font-bold text-2xl text-white mb-4">Cylare</div>
                    <p className="text-slate-500 text-sm max-w-sm mx-auto mb-8">Partner strategi digital untuk bisnis yang serius ingin tumbuh. Bukan sekadar bikin web, tapi bangun aset jualan 24 jam.</p>
                    <div className="flex justify-center gap-6 text-slate-400 text-xs mb-8">
                        <a href="#" className="hover:text-sky-400 transition">Instagram</a>
                        <a href="#" className="hover:text-sky-400 transition">TikTok</a>
                        <a href="#" className="hover:text-sky-400 transition">Portfolio Lengkap</a>
                    </div>
                    <p className="text-slate-700 text-[10px] uppercase tracking-widest font-bold">© 2024 Cylare Digital Agency. No Jargon. No Bullshit. Just Conversions.</p>
                </div>
            </footer>
        </div>


    )
}

export default page