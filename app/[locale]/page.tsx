"use client"
import { AppHeader } from '@/components/app/header';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Button } from '@/components/ui/button';
import { DPPercentage, percentageAfterDP, textToWhatsapp } from '@/config/config';
import { Link } from '@/i18n/navigation';
import { CheckIcon, CircleCheckBigIcon, MoveRightIcon } from 'lucide-react';
import Image from 'next/image';

const BackgroundGrid = () => {
    
    return (
        <>
            <div className='absolute inset-0 -z-20 grid grid-cols-12 divide-x divide-input/50'>
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
            <div className='absolute hidden dark:block inset-0 -z-20 bg-radial from-transparent to-background' />
            <div className="absolute hidden dark:block top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
                <div className="absolute top-20 left-[calc(50%-24rem)] w-72 h-72 bg-blue-400/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-20 right-[calc(50%-24rem)] w-96 h-96 bg-blue-400/10 rounded-full blur-[120px]" />
            </div>
        </>
    )
}

function HomePage() {

    const appName = process.env.NEXT_PUBLIC_APP_NAME;

    // ===========================================================================

    return (
        <>
            {/* Navigation */}
            <AppHeader />
            {/* Hero Section */}
            <main>
                <section className="relative isolate overflow-hidden pt-32 pb-20 lg:pt-48 lg:pb-32">
                    <BackgroundGrid />
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <div className="inline-flex items-center gap-2 py-1 px-4 rounded-full bg-secondary/50 border border-secondary text-blue-400 text-xs font-bold mb-8 uppercase tracking-widest">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
                            </span>
                            Menerima 3 Klien Bulan Ini
                        </div>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-primary leading-tight mb-8">
                            Website Anda Harusnya Jadi <br /><span className="bg-linear-to-r from-blue-700 dark:from-blue-500 to-blue-600 dark:to-blue-400 bg-clip-text text-transparent">Mesin Penjualan 24/7.</span>
                        </h1>
                        <p className="mt-4 max-w-2xl mx-auto text-xl text-muted-foreground mb-10 leading-relaxed">
                            Sudah bukan zamannya website cuma jadi brosur online yang sepi. Kami rancang alur website yang &quot;memaksa&quot; pengunjung penasaran dan berujung chat ke WhatsApp Anda.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Button asChild variant={"brand"} size={"xl"}>
                                <Link href={textToWhatsapp} target="_blank" rel="noopener noreferrer">Konsultasi Gratis Sekarang <MoveRightIcon /></Link>
                            </Button>
                            <Button asChild variant={"glass"} size={"xl"}>
                                <Link href="#simulasi">Lihat Simulasi Proyek</Link>
                            </Button>
                        </div>
                    </div>
                    <div className="mt-16 border-y border-border/50 py-6 bg-secondary/30 space-x-0 md:space-x-12 flex flex-col md:flex-row justify-center items-center gap-8 text-muted-foreground grayscale opacity-70">
                        <div className="text-xl lg:text-2xl font-bold">UMKM INDONESIA</div>
                        <div className="text-xl lg:text-2xl font-bold">STARTUP LOKAL</div>
                        <div className="text-xl lg:text-2xl font-bold">BRAND PERSONAL</div>
                    </div>
                </section>
                {/* SECTION 1: Agitation / The Real Problem */}
                <section id="masalah" className="scroll-mt-36 relative isolate overflow-hidden py-24 bg-secondary/30">
                    <div className="absolute hidden dark:block top-0 right-[calc(50%-50rem)] w-80 h-80 blur-3xl bg-blue-500/10 rounded-bl-full" />
                    <div className="absolute hidden dark:block top-0 left-[calc(50%-50rem)] w-80 h-80 blur-3xl bg-blue-500/10 rounded-br-full" />
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Kenapa Bisnis Anda Butuh Website <span className="text-blue-600 dark:text-blue-500">Sekarang?</span></h2>
                            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Jujur saja, ngandelin satu platform sosial media itu bahaya. Algoritma berubah, bisnis Anda bisa anjlok besok pagi.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div className="bg-card border border-border hover:border-blue-500/50 transition duration-300 hover:-translate-y-2 p-6 rounded-2xl card-hover relative overflow-hidden">
                                <div className="absolute hidden dark:block top-0 right-0 w-32 h-8 blur-3xl bg-blue-500/75 rounded-bl-full" />
                                <div className="text-3xl mb-4">💬</div>
                                <h3 className="sm:text-md font-bold text-primary mb-2">DM Numpuk, Closing Lama</h3>
                                <p className="text-muted-foreground">Jawab pertanyaan yang itu-itu saja tiap hari di IG/WA bikin admin capek. Pembeli keburu lari ke kompetitor yang pelayanannya instan.</p>
                            </div>
                            <div className="bg-card border border-border hover:border-blue-500/50 transition duration-300 hover:-translate-y-2 p-6 rounded-2xl card-hover relative overflow-hidden">
                                <div className="absolute hidden dark:block top-0 right-0 w-32 h-8 blur-3xl bg-blue-500/75 rounded-bl-full" />
                                <div className="text-3xl mb-4">🔍</div>
                                <h3 className="sm:text-md font-bold text-primary mb-2">Gak Muncul di Google</h3>
                                <p className="text-muted-foreground">Saat orang ketik &quot;Jasa [Bisnis Anda] terdekat&quot;, yang muncul kompetitor Anda. Anda kehilangan pembeli yang sudah siap bayar.</p>
                            </div>
                            <div className="bg-card border border-border hover:border-blue-500/50 transition duration-300 hover:-translate-y-2 p-6 rounded-2xl card-hover relative overflow-hidden">
                                <div className="absolute hidden dark:block top-0 right-0 w-32 h-8 blur-3xl bg-blue-500/75 rounded-bl-full" />
                                <div className="text-3xl mb-4">⚠️</div>
                                <h3 className="sm:text-md font-bold text-primary mb-2">Rawan Banned &amp; Algoritma</h3>
                                <p className="text-muted-foreground">Akun IG/TikTok bisa hilang kapan saja tanpa peringatan. Kalau akun hilang, audiens dan sumber pemasukan Anda ikut hilang.</p>
                            </div>
                            <div className="bg-card border border-border hover:border-blue-500/50 transition duration-300 hover:-translate-y-2 p-6 rounded-2xl card-hover relative overflow-hidden">
                                <div className="absolute hidden dark:block top-0 right-0 w-32 h-8 blur-3xl bg-blue-500/75 rounded-bl-full" />
                                <div className="text-3xl mb-4">🏢</div>
                                <h3 className="sm:text-md font-bold text-primary mb-2">Terlihat Kurang Profesional</h3>
                                <p className="text-muted-foreground">Klien B2B atau pembeli tiket besar biasanya minta &quot;Boleh minta link websitenya?&quot;. Kalau jawabnya &quot;Cek IG kita ya kak&quot;, tingkat trust langsung turun.</p>
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
                                        <div className="shrink-0 h-10 w-10 flex items-center justify-center rounded-lg bg-secondary text-red-600 text-xl font-bold">✕</div>
                                        <div className="ml-4">
                                            <h3 className="sm:text-lg font-bold">Sepi Pengunjung</h3>
                                            <p className="text-muted-foreground">Desain bagus tapi loading lambat dan strukturnya berantakan. Google benci, customer kabur.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="shrink-0 h-10 w-10 flex items-center justify-center rounded-lg bg-secondary text-red-600 text-xl font-bold">✕</div>
                                        <div className="ml-4">
                                            <h3 className="sm:text-lg font-bold">Copywriting Kaku</h3>
                                            <p className="text-muted-foreground">&quot;Kami adalah solusi terbaik bla bla...&quot; Membosankan. Orang beli karena emosi, bukan data teknis.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="shrink-0 h-10 w-10 flex items-center justify-center rounded-lg bg-secondary text-red-600 text-xl font-bold">✕</div>
                                        <div className="ml-4">
                                            <h3 className="sm:text-lg font-bold">Tombol &quot;Beli&quot; Gak Dipencet</h3>
                                            <p className="text-muted-foreground">Susunan layout bikin bingung. User mau beli tapi gak tau harus klik mana. Hilang deh omzet.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="relative bg-secondary dark:bg-secondary/50 rounded-2xl p-4 sm:p-8 border border-border">
                                <div className="absolute -top-4 -right-2 lg:-right-4 bg-red-600 text-white px-4 py-2 text-sm rounded-lg font-bold shadow-lg transform rotate-2">Realita Pahit</div>
                                <div className="space-y-4">
                                    <div className="bg-slate-300 dark:bg-slate-800 p-4 rounded-lg shadow-sm opacity-50">
                                        <div className="h-4 bg-slate-400 dark:bg-slate-600 rounded w-3/4 mb-2" />
                                        <div className="h-4 bg-slate-400 dark:bg-slate-600 rounded w-1/2" />
                                    </div>
                                    <div className="bg-background dark:bg-slate-800 p-4 rounded-lg shadow-sm border-2 border-red-400 dark:border-red-900">
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="font-medium text-red-500 dark:text-red-600">Website Biasa</span>
                                            <span className="text-xs text-muted-foreground">Bounce Rate: 80%</span>
                                        </div>
                                        <p className="text-sm text-muted-foreground">Customer masuk -&gt; Bingung baca teks panjang -&gt; Keluar -&gt; Beli di kompetitor.</p>
                                    </div>
                                    <div className="bg-slate-300 dark:bg-slate-800 p-4 rounded-lg shadow-sm opacity-50">
                                        <div className="h-4 bg-slate-400 dark:bg-slate-600 rounded w-2/3 mb-2" />
                                        <div className="h-4 bg-slate-400 dark:bg-slate-600 rounded w-1/4" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Solusi */}
                <section id="solusi" className="scroll-mt-32 relative isolate overflow-hidden py-20 bg-secondary/30 text-primary">
                    <div className="absolute hidden dark:block top-0 right-[calc(50%-50rem)] w-80 h-80 blur-3xl bg-blue-500/10 rounded-bl-full" />
                    <div className="absolute hidden dark:block bottom-0 left-[calc(50%-50rem)] w-80 h-80 blur-3xl bg-blue-500/10 rounded-tr-full" />
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Apapun Bisnisnya, Goalnya Tetap Chat WA.</h2>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Kami sesuaikan sistem website dengan model bisnis Anda. Fokusnya satu: Mempermudah klien untuk menghubungi Anda.</p>
                    </div>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="relative overflow-hidden bg-card p-8 rounded-2xl border border-border">
                            <div className="absolute hidden dark:block -top-12 right-0 w-40 h-24 blur-3xl bg-blue-500/50 rounded-bl-full" />
                            <div className="text-4xl mb-4">🎯</div>
                            <h3 className="text-xl font-bold mb-3">Landing Page (Single Page)</h3>
                            <p className="text-muted-foreground mb-6">Satu halaman to-the-point. Sangat cocok untuk jualan produk fisik atau jasa spesifik lewat iklan FB/IG/TikTok.</p>
                            <div className="pt-4 border-t border-border text-sm text-blue-600 dark:text-blue-300 font-semibold"><span className='text-primary font-normal'>Goal :</span> 1 Tombol Direct WA</div>
                        </div>
                        <div className="relative overflow-hidden bg-card p-8 rounded-2xl border border-border">
                            <div className="absolute hidden dark:block -top-12 right-0 w-40 h-24 blur-3xl bg-blue-500/50 rounded-bl-full" />
                            <div className="text-4xl mb-4">🏢</div>
                            <h3 className="text-xl font-bold mb-3">Company Profile</h3>
                            <p className="text-muted-foreground mb-6">Membangun kepercayaan klien korporat. Tampilkan portfolio, legalitas, dan tim agar Anda terlihat kredibel.</p>
                            <div className="pt-4 border-t border-border text-sm text-blue-600 dark:text-blue-300 font-semibold"><span className='text-primary font-normal'>Goal :</span> Form Penawaran ke WA</div>
                        </div>
                        <div className="relative overflow-hidden bg-card p-8 rounded-2xl border border-border">
                            <div className="absolute hidden dark:block -top-12 right-0 w-40 h-24 blur-3xl bg-blue-500/50 rounded-bl-full" />
                            <div className="text-4xl mb-4">🛍️</div>
                            <h3 className="text-xl font-bold mb-3">Katalog Toko Online</h3>
                            <p className="text-muted-foreground mb-6">Tampilkan ribuan produk dengan rapi. Pengunjung pilih barang, klik checkout, lalu daftar orderan masuk ke WA Anda.</p>
                            <div className="pt-4 border-t border-border text-sm text-blue-600 dark:text-blue-300 font-semibold"><span className='text-primary font-normal'>Goal :</span> Order Otomatis via WA</div>
                        </div>
                    </div>
                </section>

                {/* SECTION 3 & 9: Why Us & Guarantees */}
                <section id="solusi" className="py-24 bg-background">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold leading-relaxed text-primary mb-8">Kenapa {appName} Beda dari Tukang Web <span className="text-blue-600 dark:text-blue-500">500 Ribuan?</span></h2>
                                <p className="text-muted-foreground mb-12 leading-relaxed">Web murah biasanya cuma pakai template bajakan, loading lemot, dan desainnya kaku. Mereka jualan fitur. <strong className="text-primary">Kami jualan strategi konversi.</strong></p>
                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="shrink-0 h-10 w-10 flex items-center justify-center rounded-lg bg-secondary text-blue-600 text-xl font-bold">✓</div>
                                        <div>
                                            <h4 className="text-lg font-bold text-primary mb-1">Fokus ke Closing (Sales)</h4>
                                            <p className="text-muted-foreground">Desain cantik itu bonus. Tujuan utamanya adalah menyusun tombol, warna, dan teks (copywriting) agar otak pengunjung mau klik tombol WhatsApp.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="shrink-0 h-10 w-10 flex items-center justify-center rounded-lg bg-secondary text-blue-600 text-xl font-bold">✓</div>
                                        <div>
                                            <h4 className="text-lg font-bold text-primary mb-1">Garansi Bug &amp; Error 30 Hari</h4>
                                            <p className="text-muted-foreground">Setelah website live, kami garansi selama 30 hari. Ada error? Kami perbaiki gratis. Kami tidak akan &quot;habis dibayar lalu hilang&quot;.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="shrink-0 h-10 w-10 flex items-center justify-center rounded-lg bg-secondary text-blue-600 text-xl font-bold">✓</div>
                                        <div>
                                            <h4 className="text-lg font-bold text-primary mb-1">Diskusi Langsung via WhatsApp</h4>
                                            <p className="text-muted-foreground">Nggak perlu kirim tiket email yang dibalas 3 hari kemudian. Ada revisi? Langsung chat kami di WA, kita bahas santai.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="relative">
                                {/* <div className="absolute inset-0 bg-linear-to-tr from-blue-500/20 to-indigo-500/20 blur-3xl rounded-full" /> */}
                                <div className="bg-secondary dark:bg-secondary/50 border border-border p-8 rounded-3xl relative">
                                    <div className="text-center mb-6">
                                        <span className="inline-block bg-blue-500/10 text-blue-600 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest border border-blue-500/20">Komitmen Kami</span>
                                    </div>
                                    <ul className="space-y-4">
                                        <li className="flex items-center gap-3 bg-input dark:bg-input/30 p-4 rounded-lg">
                                            <CheckIcon size={20} className='text-blue-400' />
                                            <span className="text-primary font-medium">Revisi Desain Sampai Cocok</span>
                                        </li>
                                        <li className="flex items-center gap-3 bg-input dark:bg-input/30 p-4 rounded-lg">
                                            <CheckIcon size={20} className='text-blue-400' />
                                            <span className="text-primary font-medium">Bukan Template Asal Jadi</span>
                                        </li>
                                        <li className="flex items-center gap-3 bg-input dark:bg-input/30 p-4 rounded-lg">
                                            <CheckIcon size={20} className='text-blue-400' />
                                            <span className="text-primary font-medium">Support Teknis Setelah Live</span>
                                        </li>
                                    </ul>
                                    <p className="text-xs text-muted-foreground mt-4 text-center"><span className='text-red-500'>*</span> Sesuai batas wajar (max 5x mayor)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* SECTION 5: Mid-page CTA */}
                <section className="relative isolate overflow-hidden py-16 bg-secondary/30">
                    <div className="absolute hidden dark:block top-0 right-[calc(50%-50rem)] w-80 h-80 blur-3xl bg-blue-500/10 rounded-bl-full" />
                    <div className="absolute hidden dark:block -top-1/2 right-[calc(50%-20rem)] w-64 h-64 blur-3xl bg-blue-500/10 rounded-b-full" />
                    <div className="absolute hidden dark:block bottom-0 left-[calc(50%-50rem)] w-80 h-80 blur-3xl bg-blue-500/10 rounded-tr-full" />
                    <div className="absolute hidden dark:block -bottom-1/2 left-[calc(50%-26rem)] w-72 h-72 blur-3xl bg-blue-500/10 rounded-t-full" />
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold leading-tight text-primary mb-6">Siap Punya Website yang<br />Bekerja Otomatis?</h2>
                        <p className="text-muted-foreground mb-8 opacity-90">Berhenti buang waktu melayani <br className='sm:hidden' /> prospek yang tidak serius.<br />Biarkan website memfilter <br className='sm:hidden' /> mereka untuk Anda.</p>
                        <Button asChild variant={"brand"} size={"xl"}>
                            <Link href={textToWhatsapp} target="_blank" rel="noopener noreferrer">Konsultasi Gratis Sekarang <MoveRightIcon /></Link>
                        </Button>
                    </div>
                </section>
                {/* SECTION 6: Project Simulations */}
                <section id="simulasi" className="scroll-mt-28 py-24 bg-background">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">Simulasi Proyek <br className='sm:hidden' /> <span className="text-blue-600 dark:text-blue-500">(Studi Kasus)</span></h2>
                            <p className="text-muted-foreground max-w-2xl mx-auto">Masih bingung website Anda nanti bentuknya seperti apa? Berikut bayangan bagaimana kami menyelesaikan masalah spesifik di industri yang berbeda.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/* Contoh Website Servis AC */}
                            <div className="bg-card dark:bg-secondary/30 rounded-3xl border border-border relative overflow-hidden">
                                <Link href={"/design/1"} className='block aspect-video relative isolate overflow-hidden group'>
                                    <div className='absolute inset-0 z-10 group-hover:bg-background/30 transition-colors duration-500' />
                                    <Image src="/design/1/thumbnail.jpg" alt="Contoh Website Servis AC" width={600} height={600} className='group-hover:scale-110 transition duration-500' />
                                </Link>
                                <div className='p-6'>
                                    <div className="inline-block px-3 py-1 bg-blue-500/10 text-blue-600 rounded-lg text-xs font-bold mb-2">Studi Kasus</div>
                                    <h3 className="text-xl font-bold text-primary mb-4">Website Servis AC</h3>
                                    <p className="text-sm text-muted-foreground">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos error dolore amet provident eaque quibusdam.</p>
                                </div>
                            </div>
                            {/* Contoh Website Barbershop */}
                            <div className="bg-card dark:bg-secondary/30 rounded-3xl border border-border relative overflow-hidden">
                                <Link href={"/design/2"} className='block aspect-video relative isolate overflow-hidden group'>
                                    <div className='absolute inset-0 z-10 group-hover:bg-background/30 transition-colors duration-500' />
                                    <Image src="/design/2/thumbnail.jpg" alt="Contoh Website Barbershop" width={600} height={600} className='group-hover:scale-110 transition duration-500' />
                                </Link>
                                <div className='p-6'>
                                    <div className="inline-block px-3 py-1 bg-blue-500/10 text-blue-600 rounded-lg text-xs font-bold mb-2">Studi Kasus</div>
                                    <h3 className="text-xl font-bold text-primary mb-4">Website Barbershop</h3>
                                    <p className="text-sm text-muted-foreground">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos error dolore amet provident eaque quibusdam.</p>
                                </div>
                            </div>
                            {/* Contoh Website katalog baju */}
                            <div className="bg-card dark:bg-secondary/30 rounded-3xl border border-border relative overflow-hidden">
                                <Link href={"/design/3"} className='block aspect-video relative isolate overflow-hidden group'>
                                    <div className='absolute inset-0 z-10 group-hover:bg-background/30 transition-colors duration-500' />
                                    <Image src="/design/3/thumbnail.jpg" alt="Contoh Website katalog baju" width={600} height={600} className='group-hover:scale-110 transition duration-500' />
                                </Link>
                                <div className='p-6'>
                                    <div className="inline-block px-3 py-1 bg-blue-500/10 text-blue-600 rounded-lg text-xs font-bold mb-2">Studi Kasus</div>
                                    <h3 className="text-xl font-bold text-primary mb-4">Website Katalog Pakaian</h3>
                                    <p className="text-sm text-muted-foreground">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos error dolore amet provident eaque quibusdam.</p>
                                </div>
                            </div>
                            {/* Contoh Website GYM */}
                            <div className="bg-card dark:bg-secondary/30 rounded-3xl border border-border relative overflow-hidden">
                                <Link href={"/design/4"} className='block aspect-video relative isolate overflow-hidden group'>
                                    <div className='absolute inset-0 z-10 group-hover:bg-background/30 transition-colors duration-500' />
                                    <Image src="/design/4/thumbnail.jpg" alt="Contoh Website katalog baju" width={600} height={600} className='group-hover:scale-110 transition duration-500' />
                                </Link>
                                <div className='p-6'>
                                    <div className="inline-block px-3 py-1 bg-blue-500/10 text-blue-600 rounded-lg text-xs font-bold mb-2">Studi Kasus</div>
                                    <h3 className="text-xl font-bold text-primary mb-4">Website GYM</h3>
                                    <p className="text-sm text-muted-foreground">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos error dolore amet provident eaque quibusdam.</p>
                                </div>
                            </div>
                            {/* <div className="bg-card dark:bg-secondary/30 p-8 rounded-3xl border border-border relative group overflow-hidden">
                                <div className="absolute hidden dark:block -top-12 right-0 w-40 h-24 blur-3xl bg-blue-500/50 rounded-bl-full" />
                                <div className="inline-block px-3 py-1 bg-blue-500/10 text-blue-600 rounded-lg text-xs font-bold mb-4">Bisnis F&amp;B / Coffee Shop</div>
                                <h3 className="text-xl font-bold text-primary mb-4">Sistem Pre-Order Otomatis</h3>
                                <div className="mb-4">
                                    <p className="text-xs text-primary uppercase font-bold mb-1">Masalah Klien:</p>
                                    <p className="text-sm text-muted-foreground">Pusing rekap orderan via DM IG. Sering salah catat pesanan karena format berantakan.</p>
                                </div>
                                <div>
                                    <p className="text-xs text-blue-600 uppercase font-bold mb-1">Solusi Cylare:</p>
                                    <p className="text-sm text-muted-foreground">Buat <span className="text-primary font-medium">Landing Page Katalog</span>. Customer tinggal klik menu, isi data diri, lalu orderan terkirim ke WA admin dengan format yang rapi dan total harga otomatis.</p>
                                </div>
                            </div>
                            <div className="bg-card dark:bg-secondary/30 p-8 rounded-3xl border border-border relative group overflow-hidden">
                                <div className="absolute hidden dark:block -top-12 right-0 w-40 h-24 blur-3xl bg-blue-500/50 rounded-bl-full" />
                                <div className="inline-block px-3 py-1 bg-blue-500/10 text-blue-600 rounded-lg text-xs font-bold mb-4">Skincare / Fashion Lokal</div>
                                <h3 className="text-xl font-bold text-primary mb-4">Meningkatkan Trust Brand</h3>
                                <div className="mb-4">
                                    <p className="text-xs text-primary uppercase font-bold mb-1">Masalah Klien:</p>
                                    <p className="text-sm text-muted-foreground">Iklan di FB Ads jalan terus, klik banyak, tapi yang beli dikit karena brand belum terkenal (trust issue).</p>
                                </div>
                                <div>
                                    <p className="text-xs text-blue-600 uppercase font-bold mb-1">Solusi Cylare:</p>
                                    <p className="text-sm text-muted-foreground">Buat <span className="text-primary font-medium">Sales Page Premium</span>. Fokus pada desain elegan, pamerkan sertifikat BPOM, dan susun blok testimoni &quot;Before/After&quot; yang meyakinkan secara psikologis.</p>
                                </div>
                            </div>
                            <div className="bg-card dark:bg-secondary/30 p-8 rounded-3xl border border-border relative group overflow-hidden">
                                <div className="absolute hidden dark:block -top-12 right-0 w-40 h-24 blur-3xl bg-blue-500/50 rounded-bl-full" />
                                <div className="inline-block px-3 py-1 bg-blue-500/10 text-blue-600 rounded-lg text-xs font-bold mb-4">Jasa / B2B Consultant</div>
                                <h3 className="text-xl font-bold text-primary mb-4">Profile Perusahaan Kredibel</h3>
                                <div className="mb-4">
                                    <p className="text-xs text-primary uppercase font-bold mb-1">Masalah Klien:</p>
                                    <p className="text-sm text-muted-foreground">Sering ditanya &quot;Kliennya siapa aja?&quot;, repot kirim PDF portfolio bolak-balik via email ke calon korporat.</p>
                                </div>
                                <div>
                                    <p className="text-xs text-blue-600 uppercase font-bold mb-1">Solusi Cylare:</p>
                                    <p className="text-sm text-muted-foreground">Bangun <span className="text-primary font-medium">Company Profile Berwibawa</span>. Tampilkan daftar klien besar, pamerkan metodologi kerja, dan sediakan form &quot;Minta Penawaran&quot; langsung di website.</p>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </section>
                {/* SECTION 2: Work Process */}
                <section id="proses" className="scroll-mt-24 relative isolate overflow-hidden py-24 bg-secondary/30">
                    <div className="absolute hidden dark:block top-0 right-[calc(50%-50rem)] w-80 h-80 blur-3xl bg-blue-500/10 rounded-bl-full" />
                    <div className="absolute hidden dark:block top-[calc(50%-0rem)] right-[calc(50%-30rem)] w-80 h-80 blur-3xl bg-blue-500/10 rounded-b-full" />
                    <div className="absolute hidden dark:block bottom-0 left-[calc(50%-50rem)] w-80 h-80 blur-3xl bg-blue-500/10 rounded-tr-full" />
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">Cara Kerja Kami <br  className='sm:hidden'/> <span className="text-blue-600 dark:text-blue-500">(Anti Ribet)</span></h2>
                            <p className="text-muted-foreground max-w-2xl mx-auto">Banyak klien kami gaptek, dan itu tidak masalah. Kami yang urus pusingnya, Anda tinggal pantau hasilnya.</p>
                        </div>
                        {/* CSS Timeline */}
                        <div className="relative max-w-3xl mx-auto">
                            <div className="absolute left-4.5 sm:left-8 top-0 bottom-0 w-0.5 bg-border block" />
                            <div className="space-y-12">
                                <div className="relative flex items-start gap-6 md:gap-10">
                                    <div className="w-10 h-10 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-secondary border text-blue-600 flex items-center justify-center font-bold text-xl sm:text-2xl shrink-0 z-10 relative">1</div>
                                    <div className="pt-3">
                                        <h3 className="text-xl font-bold text-primary mb-2">Konsultasi Kebutuhan Bisnis</h3>
                                        <p className="text-muted-foreground text-sm">Kita ngobrol santai via WhatsApp. Anda ceritakan jualan apa, target marketnya siapa, dan masalahnya di mana. Kami akan sarankan paket yang pas.</p>
                                    </div>
                                </div>
                                <div className="relative flex items-start gap-6 md:gap-10">
                                    <div className="w-10 h-10 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-secondary border text-blue-600 flex items-center justify-center font-bold text-xl sm:text-2xl shrink-0 z-10 relative">2</div>
                                    <div className="pt-3">
                                        <h3 className="text-xl font-bold text-primary mb-2">Riset &amp; Konsep (Wireframe)</h3>
                                        <p className="text-muted-foreground text-sm">Setelah sepakat (dan pembayaran DP), kami tidak langsung ngoding. Kami riset kompetitor Anda, buat copywriting, dan susun sketsa mentah untuk Anda setujui.</p>
                                    </div>
                                </div>
                                <div className="relative flex items-start gap-6 md:gap-10">
                                    <div className="w-10 h-10 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-secondary border text-blue-600 flex items-center justify-center font-bold text-xl sm:text-2xl shrink-0 z-10 relative">3</div>
                                    <div className="pt-3">
                                        <h3 className="text-xl font-bold text-primary mb-2">Development &amp; Desain UI</h3>
                                        <p className="text-muted-foreground text-sm">Tim kami mulai meracik website Anda. Mulai dari warna, layout, animasi, sampai integrasi ke nomor WhatsApp Anda.</p>
                                    </div>
                                </div>
                                <div className="relative flex items-start gap-6 md:gap-10">
                                    <div className="w-10 h-10 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-secondary border text-blue-600 flex items-center justify-center font-bold text-xl sm:text-2xl shrink-0 z-10 relative">4</div>
                                    <div className="pt-3">
                                        <h3 className="text-xl font-bold text-primary mb-2">Revisi &amp; Finalisasi</h3>
                                        <p className="text-muted-foreground text-sm">Kami berikan link preview rahasia. Anda cek. Jika ada bagian yang kurang sreg, sampaikan saja. Kita revisi sampai Anda puas.</p>
                                    </div>
                                </div>
                                <div className="relative flex items-start gap-6 md:gap-10">
                                    <div className="w-10 h-10 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-blue-500 text-primary flex items-center justify-center font-bold text-2xl shrink-0 z text-xl-sm:10 shadow-lg shadow-blue-500/30">🚀</div>
                                    <div className="pt-3">
                                        <h3 className="text-xl font-bold text-primary mb-2">Launching &amp; Support Live</h3>
                                        <p className="text-muted-foreground text-sm">Website di-online-kan menggunakan domain milik Anda. Kami beri tutorial cara pakainya, dan mulai masa garansi 30 hari.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* SECTION 8: Pricing & Maintenance */}
                <section id="harga" className="py-24 bg-background">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">Investasi Bisnis Anda</h2>
                            <p className="text-muted-foreground">Harga di bawah ini adalah harga <br className='sm:hidden' /> sekali bayar pembuatan. <br />Bisa <span className="text-primary font-bold">Bayar DP {DPPercentage}</span> dulu <br className='sm:hidden' /> untuk mulai pengerjaan.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/* Plan 1 */}
                            <div className="relative isolate overflow-hidden bg-card dark:bg-secondary/30 border p-8 rounded-3xl flex flex-col hover:border-blue-500/30 transition">
                                <div className="absolute hidden dark:block top-0 right-0 w-32 h-80 blur-3xl bg-blue-500/10 rounded-bl-full" />
                                <h3 className="text-xl font-bold text-primary mb-2">Basic <span className='text-base font-semibold text-blue-600 dark:text-blue-300 align-middle ms-1'>Landing Page</span></h3>
                                <p className="text-sm text-muted-foreground mb-6">Cocok untuk jualan 1 produk, validasi ide bisnis, atau halaman khusus untuk iklan FB/TikTok Ads.</p>
                                {/* <div className="text-md font-medium text-primary">Mulai dari:</div> */}
                                <div className="text-md font-medium line-through text-muted-foreground mb-0">Rp 1.300.000</div>
                                <div className="text-3xl font-extrabold text-primary mb-8">Rp 800.000</div>
                                <ul className="space-y-4 mb-10 text-sm text-muted-foreground grow">
                                    <li className="flex items-center gap-2"><CheckIcon size={18} className='text-blue-600' /> 1 Halaman</li>
                                    <li className="flex items-center gap-2"><CheckIcon size={18} className='text-blue-600' /> Tombol WhatsApp</li>
                                    <li className="flex items-center gap-2 font-medium text-blue-600 dark:text-blue-400"><CheckIcon size={18} className='text-blue-600' /> Maksimal 3x Revisi</li>
                                    <li className="flex items-center gap-2"><CheckIcon size={18} className='text-blue-600' /> Simple SEO Setup</li>
                                    <li className="flex items-center gap-2"><CheckIcon size={18} className='text-blue-600' /> Responsif Desain Terjamin</li>
                                    <li className="flex items-center gap-2"><CheckIcon size={18} className='text-blue-600' /> Copywriting</li>
                                    <li className="flex items-center gap-2"><CheckIcon size={18} className='text-blue-600' /> Tautan IG, FB, TikTok, Dll</li>
                                    <li className="flex items-center gap-2"><CheckIcon size={18} className='text-blue-600' /> Gratis Domain .com 1 tahun</li>
                                </ul>
                                <Button asChild variant={"glass"} size={"xl"}>
                                    <Link href={textToWhatsapp+"%20dengan%20pilihan%20paket%20Basic%20(Landing%20Page)"} target="_blank" rel="noopener noreferrer">Konsultasi Sekarang</Link>
                                </Button>
                            </div>
                            {/* Plan 2: Best Value */}
                            <div className="bg-card dark:bg-secondary/30 border-2 border-blue-500 p-8 rounded-3xl flex flex-col relative transform lg:-translate-y-6 shadow-2xl shadow-blue-500/10">
                                <div className="absolute hidden dark:block top-0 right-0 w-32 h-80 blur-3xl bg-blue-500/10 rounded-bl-full" />
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 dark:bg-blue-500 text-white px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">Paling Sering Dipilih</div>
                                <h3 className="text-xl font-bold text-primary mb-2">Plus <span className='text-base font-semibold text-blue-600 dark:text-blue-300 align-middle ms-1'>Company Profile</span></h3>
                                <p className="text-sm text-muted-foreground mb-6">Tampil lebih profesional dan meyakinkan. Cocok untuk profil perusahaan, web instansi, atau portofolio bisnis jasa.</p>
                                {/* <div className="text-md font-medium text-primary">Mulai dari:</div> */}
                                <div className="text-md font-medium line-through text-muted-foreground mb-0">Rp 2.100.000</div>
                                <div className="text-3xl font-extrabold text-primary mb-8">Rp 1.500.000</div>
                                <ul className="space-y-4 mb-10 text-sm text-muted-foreground grow">
                                    <li className="text-md font-medium text-primary">Semua yang ada di Basic, Plus:</li>
                                    <li className="flex items-center gap-2"><CheckIcon size={18} className='text-blue-600' /> Sampai 5-6 Halaman</li>
                                    <li className="flex items-center gap-2"><CheckIcon size={18} className='text-blue-600' /> Dark Mode</li>
                                    <li className="flex items-center gap-2"><CheckIcon size={18} className='text-blue-600' /> Sistem Keranjang Belanja</li>
                                    <li className="flex items-center gap-2"><CheckIcon size={18} className='text-blue-600' /> Tombol & Order List ke Whatsapp</li>
                                    <li className="flex items-center gap-2"><CheckIcon size={18} className='text-blue-600' /> Tombol/Form Order WhatsApp</li>
                                    <li className="flex items-center gap-2 font-medium text-blue-600 dark:text-blue-400"><CheckIcon size={18} className='text-blue-600' /> Maksimal 5x Revisi</li>
                                    <li className="flex items-center gap-2"><CheckIcon size={18} className='text-blue-600' /> Basic SEO Setup (Google)</li>
                                    <li className="flex items-center gap-2"><CheckIcon size={18} className='text-blue-600' /> Lokasi Peta (Google Maps)</li>
                                </ul>
                                <Button asChild variant={"brand"} size={"xl"}>
                                    <Link href={textToWhatsapp+"%20dengan%20pilihan%20paket%20Plus%20(Company%20Profile)"} target="_blank" rel="noopener noreferrer">Konsultasi Sekarang</Link>
                                </Button>
                            </div>
                            {/* Plan 3 */}
                            <div className="relative isolate overflow-hidden bg-card dark:bg-secondary/30 border p-8 rounded-3xl flex flex-col hover:border-blue-500/30 transition">
                                <div className="absolute hidden dark:block top-0 right-0 w-32 h-80 blur-3xl bg-blue-500/10 rounded-bl-full" />
                                <h3 className="text-xl font-bold text-primary mb-2">Pro <span className='text-base font-semibold text-blue-600 dark:text-blue-300 align-middle ms-1'>E Commerce</span></h3>
                                <p className="text-sm text-muted-foreground mb-6">Punya toko online sendiri atau coffee shop. Lengkap dengan fitur keranjang belanja</p>
                                {/* <div className="text-md font-medium text-primary">Mulai dari:</div> */}
                                <div className="text-md font-medium line-through text-muted-foreground mb-0">Rp 2.900.000</div>
                                <div className="text-3xl font-extrabold text-primary mb-8">Rp 2.300.000</div>
                                <ul className="space-y-4 mb-10 text-sm text-muted-foreground grow">
                                    <li className="text-md font-medium text-primary">Semua yang ada di Plus, Pro:</li>
                                    <li className="flex items-center gap-2"><CheckIcon size={18} className='text-blue-600' /> Sampai 10-12 Halaman</li>
                                    <li className="flex items-center gap-2"><CheckIcon size={18} className='text-blue-600' /> Kelola Produk/Katalog sendiri</li>
                                    <li className="flex items-center gap-2"><CheckIcon size={18} className='text-blue-600' /> Admin Panel</li>
                                    <li className="flex items-center gap-2 font-medium text-blue-600 dark:text-blue-400"><CheckIcon size={18} className='text-blue-600' /> Maksimal 8x Revisi</li>
                                    <li className="flex items-center gap-2"><CheckIcon size={18} className='text-blue-600' /> Advanced SEO Setup (Google)</li>
                                    <li className="flex items-center gap-2"><CheckIcon size={18} className='text-blue-600' /> Tutorial Penggunaan Admin Panel</li>
                                </ul>
                                <Button asChild variant={"glass"} size={"xl"}>
                                    <Link href={textToWhatsapp+"%20dengan%20pilihan%20paket%20Pro%20(E%20Commerce)"} target="_blank" rel="noopener noreferrer">Konsultasi Sekarang</Link>
                                </Button>
                            </div>
                        </div>
                        <div className="mt-12 max-w-2xl mx-auto bg-card dark:bg-secondary/30 p-8 rounded-3xl border">
                            <h4 className="font-bold text-primary mb-4 flex items-center gap-2">
                                <span>➕</span> Fitur Tambahan (Add-ons)
                            </h4>
                            <div className="flex justify-between items-center py-3 border-b border-slate-700 text-sm sm:text-base">
                                <span className="text-muted-foreground">Blog / Artikel + Admin Panel</span>
                                <span className="font-semibold text-primary">+ Rp 800.000</span>
                            </div>
                            <div className="flex justify-between items-center py-3">
                                <span className="text-muted-foreground">Multi-bahasa (ID/EN)</span>
                                <span className="font-semibold text-primary">+ Rp 1.400.000</span>
                            </div>
                        </div>

                    </div>
                </section>

                {/* Maintenance & After Sales Detail */}
                <section className='relative isolate overflow-hidden bg-secondary/30 py-16'>
                    <div className="absolute hidden dark:block top-0 right-[calc(50%-50rem)] w-80 h-80 blur-3xl bg-blue-500/10 rounded-bl-full" />
                    <div className="absolute hidden dark:block -top-1/2 right-[calc(50%-20rem)] w-64 h-64 blur-3xl bg-blue-500/10 rounded-b-full" />
                    <div className="absolute hidden dark:block bottom-0 left-[calc(50%-50rem)] w-80 h-80 blur-3xl bg-blue-500/10 rounded-tr-full" />
                    <div className="absolute hidden dark:block -bottom-1/2 left-[calc(50%-26rem)] w-72 h-72 blur-3xl bg-blue-500/10 rounded-t-full" />
                    <div className="max-w-4xl mx-auto px-4">
                        <div className="flex flex-col md:flex-row gap-8 items-center">
                            <div className="w-full md:w-1/3 text-center md:text-left">
                                <span className="text-5xl">🤝</span>
                                <h4 className="text-primary font-bold mt-4 text-xl">Layanan After-Sales</h4>
                                <p className="text-sm text-muted-foreground mt-2">Kami tidak akan meninggalkan Anda setelah website live.</p>
                            </div>
                            <div className="w-full md:w-2/3 space-y-4 text-sm">
                                <div className="p-4 bg-card dark:bg-secondary/30 rounded-xl border border-border flex items-start gap-3">
                                    <div className='mt-1'>
                                        <CircleCheckBigIcon size={20} className='text-blue-400' />
                                    </div>
                                    <div>
                                        <strong className="text-primary block mb-1">Gratis Maintenance 1 Bulan Pertama</strong>
                                        <p className="text-muted-foreground">Cek error, backup minor, dan perbaikan bug kami cover 100% gratis setelah website rilis.</p>
                                    </div>
                                </div>
                                <div className="p-4 bg-card dark:bg-secondary/30 rounded-xl border border-border flex items-start gap-3">
                                    <div className='mt-1'>
                                        <CircleCheckBigIcon size={20} className='text-blue-400' />
                                    </div>
                                    <div>
                                        <strong className="text-primary block mb-1">Opsi Maintenance Berbayar (Bulan ke-2 dst)</strong>
                                        <p className="text-muted-foreground">Cuma Rp 250rb - 500rb/bulan (opsional). Kami bantu update keamanan, monitor uptime, perpanjangan domain, dan ganti foto/teks agar Anda fokus jualan saja.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION 7: About / Personal Branding */}
                <section className="py-24">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-3xl font-bold text-primary mb-8">Siapa di Balik {appName}?</h2>
                        <div className="relative isolate overflow-hidden p-8 md:p-12 rounded-[40px] bg-secondary/30 border border-border/50">
                            <div className="absolute hidden dark:block top-0 right-0 w-64 h-64 blur-3xl bg-blue-500/10 rounded-bl-full" />
                            <div className="absolute hidden dark:block top-0 left-0 w-40 h-40 blur-3xl bg-blue-500/10 rounded-b-full" />
                            <div className="absolute hidden dark:block bottom-0 left-0 w-80 h-80 blur-3xl bg-blue-500/10 rounded-tr-full" />
                            <div className="w-24 h-24 bg-linear-to-br from-slate-700 to-secondary border-2 border-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center text-4xl overflow-hidden">
                                🧑‍💻
                            </div>
                            <h3 className="text-xl font-bold text-primary mb-4">Halo, Saya Founder {appName}.</h3>
                            <p className="text-muted-foreground leading-relaxed mb-6">
                                Saya melihat banyak teman-teman UMKM dan pengusaha lokal yang tertipu oleh jasa pembuatan website abal-abal. Bayar mahal, tapi yang didapat web template lemot yang sama sekali gak mendatangkan pembeli.
                            </p>
                            <p className="text-muted-foreground leading-relaxed mb-8">
                                Itu sebabnya saya membangun {appName}. Menggunakan *modern tech stack* yang stabil dan fokus 100% pada struktur psikologi penjualan. Misi saya simpel: <strong>Membantu bisnis Anda memiliki mesin kasir digital yang bisa diandalkan.</strong>
                            </p>
                            <div className="inline-flex gap-2">
                                <span className="px-3 py-1 bg-secondary text-muted-foreground rounded text-xs font-mono">Modern Tech</span>
                                <span className="px-3 py-1 bg-secondary text-muted-foreground rounded text-xs font-mono">Sales Focused</span>
                                <span className="px-3 py-1 bg-secondary text-muted-foreground rounded text-xs font-mono">UMKM Friendly</span>
                            </div>
                        </div>
                    </div>
                </section>
                {/* SECTION 4: Expanded FAQ */}
                <section className="py-24 bg-background">
                    <div className="max-w-3xl mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center text-primary mb-12">Yang Sering Ditanyakan (FAQ)</h2>
                        <div className="space-y-4">
                            {/* FAQ 1 */}
                            <Accordion
                                type="multiple"
                                className="rounded-2xl border border-border"
                            >
                                <AccordionItem
                                    value="item-1"
                                    className="border-b px-4 last:border-b-0 py-2"
                                >
                                    <AccordionTrigger className='font-semibold text-md'>Berapa lama proses pengerjaannya?</AccordionTrigger>
                                    <AccordionContent className='text-muted-foreground'>Sangat bergantung pada paket dan kesiapan data (logo, teks, foto produk). Rata-rata: paket Basic (3-5 hari kerja), Plus (7-10 hari kerja), Pro (14 hari kerja). Kami pastikan tidak molor asalkan komunikasi lancar.</AccordionContent>
                                </AccordionItem>
                                <AccordionItem
                                    value="item-2"
                                    className="border-b px-4 last:border-b-0 py-2"
                                >
                                    <AccordionTrigger className='font-semibold text-md'>Apakah pembayarannya bisa dicicil / bayar DP dulu?</AccordionTrigger>
                                    <AccordionContent className='text-muted-foreground'>Sangat bisa! Anda cukup membayar <strong className='text-primary'>{DPPercentage}</strong> untuk memulai pengerjaan desain dan development. Sisanya {percentageAfterDP} dilunasi saat website sudah selesai, direvisi, dan siap untuk dipublikasikan (live).</AccordionContent>
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
                                    <AccordionContent className='text-muted-foreground'>Makanya di tahap ke-2, kita akan sepakati &quot;Sketsa Kasar / Konsep&quot; dulu sebelum kami ngoding. Jika desain awalnya kurang sreg, gunakan jatah revisi Anda. Kami sangat fleksibel dan terbuka pada masukan Anda.</AccordionContent>
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
                                    <AccordionContent className='text-muted-foreground'>Untuk menjaga proyek tetap on-schedule dan sehat. Tapi tenang, &quot;Revisi Mayor&quot; itu artinya ubah layout besar. Kalau cuma ganti kata-kata atau ganti satu-dua foto, itu gratis selamanya selama masa maintenance. Kami fleksibel, bukan robot.</AccordionContent>
                                </AccordionItem>
                                <AccordionItem
                                    value="item-7"
                                    className="border-b px-4 last:border-b-0 py-2"
                                >
                                    <AccordionTrigger className='font-semibold text-md'>Gimana kalau saya nggak perpanjang maintenance?</AccordionTrigger>
                                    <AccordionContent className='text-muted-foreground'>Tidak apa-apa. Website tetap milik Anda 100%. Anda bisa mengelolanya sendiri. Maintenance berbayar hanya jika Anda ingin &quot;terima beres&quot; dan nggak mau pusing urusan teknis seperti update plugin, backup data, atau serangan malware.</AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </div>
                </section>
                {/* Final CTA */}
                <section className="py-24 relative isolate overflow-hidden bg-secondary/30">
                    <div className="absolute hidden dark:block top-0 right-[calc(50%-50rem)] w-80 h-80 blur-3xl bg-blue-500/10 rounded-bl-full" />
                    <div className="absolute hidden dark:block -top-12 right-[calc(50%-20rem)] w-64 h-64 blur-3xl bg-blue-500/10 rounded-b-full" />
                    <div className="absolute hidden dark:block bottom-0 left-[calc(50%-50rem)] w-80 h-80 blur-3xl bg-blue-500/10 rounded-tr-full" />
                    <div className="absolute hidden dark:block -bottom-12 left-[calc(50%-26rem)] w-72 h-72 blur-3xl bg-blue-500/10 rounded-t-full" />
                    <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-6">Masih Ragu? <span className="text-blue-600 dark:text-blue-500">Kita Ngobrol Dulu Aja.</span></h2>
                        <p className="text-xl text-muted-foreground mb-12">Ceritakan masalah bisnis Anda di WhatsApp. Kami kasih saran strategi websitenya secara jujur. Kalau dirasa nggak cocok, nggak jadi beli juga nggak apa-apa.</p>
                        <div className="bg-background border border-blue-500 p-10 rounded-[40px] relative">
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 dark:bg-blue-500 px-4 py-1 rounded-full text-white font-bold text-xs uppercase">Admin Standby</div>
                            <Button asChild variant={"brand"} size={"xxl"}>
                                <Link href={textToWhatsapp} target="_blank" rel="noopener noreferrer">Hubungi WhatsApp <MoveRightIcon /></Link>
                            </Button>
                            <p className="mt-6 text-slate-500 text-sm">&quot;Jangan tunggu kompetitor Anda yang duluan ambil pasar di Google.&quot;</p>
                        </div>
                    </div>
                </section>
            </main>
            {/* Footer */}
            <footer className="py-12 border-t border-secondary bg-background">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <div className="font-bold text-2xl text-primary mb-4">{appName}</div>
                    <p className="text-slate-500 text-sm max-w-sm mx-auto mb-8">Partner strategi digital untuk bisnis yang serius ingin tumbuh. Bukan sekadar bikin web, tapi bangun aset jualan 24 jam.</p>
                    <div className="flex justify-center gap-6 text-muted-foreground text-xs mb-8">
                        <Link href="https://www.instagram.com/lananglanusa/" target='_blank' className="hover:text-blue-400 transition">Instagram</Link>
                        <Link href="https://www.tiktok.com/@lananglanusa" target='_blank' className="hover:text-blue-400 transition">TikTok</Link>
                        <Link href="https://lananglanusa.my.id/" target='_blank' className="hover:text-blue-400 transition">Portfolio Lengkap</Link>
                    </div>
                    <p className="text-slate-700 text-[10px] uppercase tracking-widest font-bold">©2025 - {new Date().getFullYear()} {appName}. All right reserved.</p>
                </div>
            </footer>
        </>
    )
}

export default HomePage