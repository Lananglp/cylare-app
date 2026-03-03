"use client";
import { useState, useEffect } from 'react';
import {
    Scissors,
    Star,
    MapPin,
    Clock,
    Phone,
    Instagram,
    ChevronRight,
    Quote,
    Menu,
    X
} from 'lucide-react';
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

export default function App() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Handle scroll effect for sticky navbar
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // ========== DEMO MODAL ==================

    const [demoOpen, setDemoOpen] = useState(true);

    return (
        <div className="min-h-screen bg-black text-neutral-300 font-sans selection:bg-neutral-800 selection:text-white">

            <Dialog open={demoOpen} onOpenChange={setDemoOpen}>
                <DialogContent className="bg-neutral-950 border-neutral-900">
                    <DialogHeader>
                        <DialogTitle className='mb-3 md:text-xl text-white'>Contoh Studi Kasus Website</DialogTitle>
                        <DialogDescription className='text-neutral-400'>
                            Website yang sedang Anda lihat merupakan contoh studi kasus yang dibuat untuk memberikan gambaran konsep dan fitur.
                        </DialogDescription>
                    </DialogHeader>

                    <div className="-mx-4 no-scrollbar max-h-[50vh] overflow-y-auto px-4 space-y-4 text-sm leading-relaxed text-neutral-400">
                        <p>
                            Halaman ini dirancang sebagai simulasi agar Anda dapat membayangkan
                            bagaimana website bisnis Anda dapat terlihat dan bekerja secara nyata.
                        </p>

                        <p>
                            Mulai dari struktur halaman, tampilan visual, hingga alur konversi
                            menuju WhatsApp, semuanya dibuat untuk memberikan referensi sebelum
                            Anda memulai proyek website Anda sendiri.
                        </p>

                        <p>
                            Setiap bisnis memiliki kebutuhan yang berbeda, sehingga desain dan
                            fitur nantinya dapat disesuaikan sepenuhnya dengan tujuan dan karakter
                            brand Anda.
                        </p>
                    </div>

                    <DialogFooter>
                        <DialogClose asChild>
                            <Button variant="outline">Saya Mengerti</Button>
                        </DialogClose>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

            {/* HEADER & NAVIGATION (SEO: semantic <header> and <nav>) */}
            <header
                className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-md border-b border-neutral-900 py-4' : 'bg-transparent py-6'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
                    <a href="#" className="text-2xl font-bold tracking-tighter text-white flex items-center gap-2 uppercase">
                        <Scissors className="w-6 h-6" />
                        Cylare<span className="text-neutral-500 font-light">Style</span>
                    </a>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex gap-8 text-sm tracking-wide font-medium">
                        <a href="#tentang" className="hover:text-white transition-colors">Tentang Kami</a>
                        <a href="#layanan" className="hover:text-white transition-colors">Layanan</a>
                        <a href="#testimoni" className="hover:text-white transition-colors">Testimoni</a>
                        <a href="#kontak" className="hover:text-white transition-colors">Lokasi</a>
                    </nav>

                    <a
                        href="#booking"
                        className="hidden md:inline-flex items-center justify-center bg-white text-black px-6 py-2.5 text-sm font-semibold hover:bg-neutral-200 transition-colors rounded-none"
                    >
                        Reservasi Sekarang
                    </a>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden text-neutral-300 hover:text-white"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Nav */}
                {mobileMenuOpen && (
                    <nav className="md:hidden absolute top-full left-0 w-full bg-black border-b border-neutral-900 py-6 px-6 flex flex-col gap-4">
                        <a href="#tentang" onClick={() => setMobileMenuOpen(false)} className="text-lg hover:text-white">Tentang Kami</a>
                        <a href="#layanan" onClick={() => setMobileMenuOpen(false)} className="text-lg hover:text-white">Layanan</a>
                        <a href="#testimoni" onClick={() => setMobileMenuOpen(false)} className="text-lg hover:text-white">Testimoni</a>
                        <a href="#kontak" onClick={() => setMobileMenuOpen(false)} className="text-lg hover:text-white">Lokasi</a>
                        <a href="#booking" onClick={() => setMobileMenuOpen(false)} className="mt-4 inline-flex justify-center bg-white text-black px-6 py-3 text-sm font-semibold">
                            Reservasi Sekarang
                        </a>
                    </nav>
                )}
            </header>

            {/* MAIN CONTENT (SEO: semantic <main>) */}
            <main>
                {/* HERO SECTION */}
                <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
                    {/* Subtle Background Pattern/Gradient */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--tw-linear-stops))] from-neutral-900/40 via-black to-black -z-10"></div>

                    <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8 relative z-10">
                            <div className="inline-flex items-center gap-2 px-3 py-1 border border-neutral-800 text-xs font-mono tracking-widest text-neutral-400 uppercase bg-neutral-950/50">
                                <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
                                Buka Hari Ini: 10:00 - 21:00
                            </div>

                            {/* Marketing Psychology: Identity & Confidence */}
                            <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.1] tracking-tight">
                                Rambutmu Adalah <br />
                                <span className="text-neutral-500 italic font-serif">Karaktermu.</span>
                            </h1>

                            <p className="text-lg md:text-xl text-neutral-400 max-w-lg leading-relaxed font-light">
                                Jangan percayakan penampilan pertama Anda pada sembarang orang. Di Cylare Style, kami menggabungkan presisi teknis dengan seni untuk memahat rasa percaya diri Anda.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <a href="#booking" className="inline-flex items-center justify-center bg-white text-black px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-neutral-200 transition-colors">
                                    Pesan Jadwal Sekarang
                                    <ChevronRight className="ml-2 w-4 h-4" />
                                </a>
                                <a href="#layanan" className="inline-flex items-center justify-center border border-neutral-700 text-white px-8 py-4 text-sm font-bold uppercase tracking-widest hover:border-neutral-500 transition-colors">
                                    Lihat Layanan
                                </a>
                            </div>

                            <div className="pt-8 flex items-center gap-4 text-sm text-neutral-500 font-medium">
                                <div className="flex -space-x-2">
                                    <div className="w-8 h-8 rounded-full bg-neutral-800 border-2 border-black flex items-center justify-center text-xs">A</div>
                                    <div className="w-8 h-8 rounded-full bg-neutral-700 border-2 border-black flex items-center justify-center text-xs">R</div>
                                    <div className="w-8 h-8 rounded-full bg-neutral-600 border-2 border-black flex items-center justify-center text-xs">D</div>
                                </div>
                                <p>Dipercaya oleh <strong className="text-white">2,000+</strong> pria sejati.</p>
                            </div>
                        </div>

                        {/* Aesthetic Placeholder for Image */}
                        <div className="relative h-150 w-full hidden lg:block border border-neutral-800 bg-neutral-950 p-4">
                            <div className="w-full h-full bg-neutral-800 border border-neutral-800 flex flex-col items-center justify-center text-neutral-700 overflow-hidden relative group">
                                {/* Simulated aesthetic image container */}
                                <div className="absolute inset-0 opacity-100 bg-[url('/design/2/rambut-1.jpg')] bg-cover bg-center grayscale mix-blend-overlay group-hover:scale-105 transition-transform duration-1000"></div>
                                {/* <div className="absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent"></div> */}
                                <Scissors className="w-16 h-16 mb-4 relative z-10 opacity-50" />
                                <span className="font-mono text-sm tracking-widest uppercase relative z-10"></span>
                            </div>

                            {/* Decorative elements */}
                            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-white/5 blur-3xl rounded-full"></div>
                            <div className="absolute top-1/2 -right-4 w-8 h-32 bg-neutral-900 border border-neutral-800"></div>
                        </div>
                    </div>
                </section>

                {/* LOGO MARQUEE / TRUST INDICATORS (Social Proof) */}
                <section className="border-y border-neutral-900 py-8 bg-black overflow-hidden relative">
                    <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                        {/* Simulating Brand Logos/Mentions */}
                        <span className="text-xl font-serif font-bold italic">MensHealth</span>
                        <span className="text-xl font-bold tracking-widest uppercase">GQ Style</span>
                        <span className="text-xl font-mono tracking-tighter">THE URBAN GENT</span>
                        <span className="text-xl font-bold uppercase tracking-widest border-b-2 border-current leading-none">VOGUE HOMMES</span>
                    </div>
                </section>

                {/* ABOUT / PHILOSOPHY SECTION */}
                <section id="tentang" className="py-24 md:py-32 bg-neutral-950 relative">
                    <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1 relative aspect-square max-w-md mx-auto w-full">
                            <div className="absolute inset-0 border border-neutral-800 translate-x-4 translate-y-4"></div>
                            <div className="absolute inset-0 bg-neutral-900 border border-neutral-800 flex flex-col items-center justify-center p-8 text-center z-10 overflow-hidden">
                                <div className="absolute inset-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80')] bg-cover bg-center grayscale mix-blend-overlay"></div>
                                <div className="absolute inset-0 bg-neutral-900/80"></div>
                                <Quote className="w-12 h-12 text-neutral-700 mb-6 relative z-10" />
                                <p className="text-xl font-serif italic text-neutral-300 leading-relaxed relative z-10">
                                    &quot;Kami tidak memotong rambut untuk membuatnya pendek. Kami memahatnya untuk mempertegas rahang, menyeimbangkan proporsi wajah, dan mengeluarkan aura terbaik dari seorang pria.&quot;
                                </p>
                                <span className="font-mono text-xs tracking-widest uppercase mt-6 relative z-10 text-neutral-500"></span>
                            </div>
                        </div>

                        <div className="order-1 lg:order-2 space-y-8">
                            <div className="space-y-2">
                                <h2 className="text-xs font-mono tracking-widest text-neutral-500 uppercase">Filosofi Kami</h2>
                                <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Lebih dari sekadar rutinitas bulanan.</h3>
                            </div>

                            <p className="text-neutral-400 leading-relaxed">
                                Kebanyakan pria menganggap potong rambut sebagai tugas rutin. Di Cylare Style, kami mengubahnya menjadi ritual perawatan diri. Kami meluangkan waktu untuk menganalisis bentuk wajah, tekstur rambut, dan gaya hidup Anda sebelum gunting menyentuh rambut Anda.
                            </p>
                            <p className="text-neutral-400 leading-relaxed">
                                Hasilnya? Bukan sekadar potongan rambut yang rapi di hari pertama, tetapi gaya yang tumbuh secara natural dan tetap terlihat sempurna berminggu-minggu kemudian.
                            </p>

                            <div className="grid grid-cols-2 gap-8 pt-6 border-t border-neutral-900">
                                <div>
                                    <h4 className="text-4xl font-light text-white mb-2">45+</h4>
                                    <p className="text-sm text-neutral-500 font-medium">Menit Dedikasi per Sesi</p>
                                </div>
                                <div>
                                    <h4 className="text-4xl font-light text-white mb-2">100%</h4>
                                    <p className="text-sm text-neutral-500 font-medium">Fokus pada Detail</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SERVICES MENU SECTION */}
                <section id="layanan" className="py-24 md:py-32 bg-black">
                    <div className="max-w-4xl mx-auto px-6 md:px-12">
                        <div className="text-center space-y-4 mb-16">
                            <h2 className="text-xs font-mono tracking-widest text-neutral-500 uppercase">Menu Layanan</h2>
                            <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Investasi Penampilan Anda</h3>
                            <p className="text-neutral-400 max-w-2xl mx-auto mt-4">Kualitas tidak pernah kompromi. Kami menawarkan layanan premium dengan harga yang masuk akal untuk hasil yang tak terbantahkan.</p>
                        </div>

                        <div className="space-y-6">
                            {/* Service Item 1 */}
                            <article className="group flex flex-col md:flex-row justify-between items-start md:items-center p-6 border border-neutral-900 hover:border-neutral-700 hover:bg-neutral-950 transition-all duration-300">
                                <div className="space-y-2 mb-4 md:mb-0">
                                    <h4 className="text-xl font-bold text-white group-hover:text-neutral-200">The Executive Cut</h4>
                                    <p className="text-sm text-neutral-500 max-w-md">Konsultasi gaya, pencucian rambut premium, potongan presisi, pijat kepala ringan, dan styling dengan pomade eksklusif.</p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <span className="text-sm font-mono text-neutral-600">45 Menit</span>
                                    <div className="h-px w-8 bg-neutral-800 hidden md:block"></div>
                                    <span className="text-2xl font-light text-white">Rp 120.000</span>
                                </div>
                            </article>

                            {/* Service Item 2 */}
                            <article className="group flex flex-col md:flex-row justify-between items-start md:items-center p-6 border border-neutral-900 hover:border-neutral-700 hover:bg-neutral-950 transition-all duration-300">
                                <div className="space-y-2 mb-4 md:mb-0">
                                    <h4 className="text-xl font-bold text-white group-hover:text-neutral-200">Modern Fade & Taper</h4>
                                    <p className="text-sm text-neutral-500 max-w-md">Teknik gradasi tanpa cela dari nol (skin fade) yang disesuaikan dengan struktur tulang tengkorak untuk siluet maskulin.</p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <span className="text-sm font-mono text-neutral-600">50 Menit</span>
                                    <div className="h-px w-8 bg-neutral-800 hidden md:block"></div>
                                    <span className="text-2xl font-light text-white">Rp 150.000</span>
                                </div>
                            </article>

                            {/* Service Item 3 */}
                            <article className="group flex flex-col md:flex-row justify-between items-start md:items-center p-6 border border-neutral-900 hover:border-neutral-700 hover:bg-neutral-950 transition-all duration-300 relative overflow-hidden">
                                <div className="absolute top-0 right-0 bg-white text-black text-[10px] font-bold px-3 py-1 uppercase tracking-widest">Paling Populer</div>
                                <div className="space-y-2 mb-4 md:mb-0 pt-2 md:pt-0">
                                    <h4 className="text-xl font-bold text-white group-hover:text-neutral-200">Cylare Signature Grooming</h4>
                                    <p className="text-sm text-neutral-500 max-w-md">Paket lengkap. The Executive Cut ditambah dengan Hot Towel Shave (cukur jenggot/kumis presisi dengan handuk hangat) dan perawatan wajah dasar.</p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <span className="text-sm font-mono text-neutral-600">75 Menit</span>
                                    <div className="h-px w-8 bg-neutral-800 hidden md:block"></div>
                                    <span className="text-2xl font-light text-white">Rp 250.000</span>
                                </div>
                            </article>

                            {/* Service Item 4 */}
                            <article className="group flex flex-col md:flex-row justify-between items-start md:items-center p-6 border border-neutral-900 hover:border-neutral-700 hover:bg-neutral-950 transition-all duration-300">
                                <div className="space-y-2 mb-4 md:mb-0">
                                    <h4 className="text-xl font-bold text-white group-hover:text-neutral-200">Gentleman Beard Sculpting</h4>
                                    <p className="text-sm text-neutral-500 max-w-md">Pembentukan dan perapian jenggot menggunakan straight razor, diakhiri dengan beard oil premium untuk kelembutan maksimal.</p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <span className="text-sm font-mono text-neutral-600">30 Menit</span>
                                    <div className="h-px w-8 bg-neutral-800 hidden md:block"></div>
                                    <span className="text-2xl font-light text-white">Rp 80.000</span>
                                </div>
                            </article>
                        </div>
                    </div>
                </section>

                {/* TESTIMONIAL / RATING SECTION (Crucial Section) */}
                <section id="testimoni" className="py-24 md:py-32 bg-neutral-950 relative border-y border-neutral-900">
                    {/* Psychological Angle: Social Proof & Relatability */}
                    <div className="max-w-7xl mx-auto px-6 md:px-12">
                        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                            <div className="space-y-4 max-w-2xl">
                                <h2 className="text-xs font-mono tracking-widest text-neutral-500 uppercase flex items-center gap-2">
                                    <Star className="w-4 h-4 fill-white text-white" />
                                    Bintang 5 di Google Reviews
                                </h2>
                                <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Apa Kata Mereka yang Telah Berubah.</h3>
                            </div>
                            <div className="text-left md:text-right">
                                <p className="text-3xl font-light text-white">4.9<span className="text-lg text-neutral-500">/5.0</span></p>
                                <p className="text-sm text-neutral-500">Dari 500+ ulasan pelanggan nyata.</p>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6">
                            {/* Testimonial 1 */}
                            <article className="bg-black p-8 border border-neutral-900 hover:border-neutral-700 transition-colors flex flex-col justify-between h-full">
                                <div>
                                    <div className="flex gap-1 mb-6">
                                        {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 fill-white text-white" />)}
                                    </div>
                                    <p className="text-neutral-300 leading-relaxed mb-8 italic">
                                        &quot;Seumur hidup saya pikir rambut saya tipis dan susah diatur. Barber di Cylare ngasih rekomendasi potongan French Crop bertekstur. Gila, beneran bikin muka kelihatan beda dan rambut kelihatan bervolume. Skill mereka level dewa.&quot;
                                    </p>
                                </div>
                                <div className="flex items-center gap-4 pt-6 border-t border-neutral-900">
                                    <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-sm font-bold text-white">B</div>
                                    <div>
                                        <h4 className="text-white font-bold text-sm">Bima Anugerah</h4>
                                        <p className="text-xs text-neutral-500">Klien sejak 2023</p>
                                    </div>
                                </div>
                            </article>

                            {/* Testimonial 2 */}
                            <article className="bg-black p-8 border border-neutral-900 hover:border-neutral-700 transition-colors flex flex-col justify-between h-full">
                                <div>
                                    <div className="flex gap-1 mb-6">
                                        {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 fill-white text-white" />)}
                                    </div>
                                    <p className="text-neutral-300 leading-relaxed mb-8 italic">
                                        &quot;Vibe tempatnya eksklusif banget. Tenang, nggak berisik, dan pelayanannya sangat personal. Potongan fade-nya sangat mulus (seamless), tanpa garis patah sama sekali. Worth every penny. Pasti balik lagi.&quot;
                                    </p>
                                </div>
                                <div className="flex items-center gap-4 pt-6 border-t border-neutral-900">
                                    <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-sm font-bold text-white">R</div>
                                    <div>
                                        <h4 className="text-white font-bold text-sm">Rendy Pratama</h4>
                                        <p className="text-xs text-neutral-500">Klien sejak 2024</p>
                                    </div>
                                </div>
                            </article>

                            {/* Testimonial 3 */}
                            <article className="bg-black p-8 border border-neutral-900 hover:border-neutral-700 transition-colors flex flex-col justify-between h-full">
                                <div>
                                    <div className="flex gap-1 mb-6">
                                        {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 fill-white text-white" />)}
                                    </div>
                                    <p className="text-neutral-300 leading-relaxed mb-8 italic">
                                        &quot;Bukan sekadar potong rambut, tapi edukasi. Selesai potong, saya diajarin cara styling sendiri di rumah pake pomade yang bener. Hasilnya tiap hari tetep kece kayak baru keluar dari barbershop. Sangat direkomendasikan!&quot;
                                    </p>
                                </div>
                                <div className="flex items-center gap-4 pt-6 border-t border-neutral-900">
                                    <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-sm font-bold text-white">A</div>
                                    <div>
                                        <h4 className="text-white font-bold text-sm">Aditya Wicaksono</h4>
                                        <p className="text-xs text-neutral-500">Klien sejak 2023</p>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                </section>

                {/* IMAGE GALLERY / VIBE (Aesthetic Grid) */}
                <section className="py-2 bg-black">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                        {[1, 2, 3, 4].map((item) => (
                            <div key={item} className="aspect-4/5 bg-neutral-950 border border-neutral-900 flex items-center justify-center group relative overflow-hidden">
                                <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&q=80')] bg-cover bg-center grayscale group-hover:scale-110 transition-transform duration-700"></div>
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500"></div>
                                <span className="font-mono text-xs text-neutral-600 tracking-widest relative z-10"></span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* CTA & LOCATION BOOKING SECTION (Scarcity & Action) */}
                <section id="kontak" className="py-24 md:py-32 bg-black relative">
                    <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16">

                        {/* Booking Form/Info */}
                        <div className="space-y-10" id="booking">
                            <div className="space-y-4">
                                <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Klaim Waktu Anda.</h2>
                                <p className="text-neutral-400">
                                    <strong className="text-white font-medium">Slot harian kami sangat terbatas</strong> untuk memastikan setiap klien mendapatkan perhatian penuh dan kualitas maksimal tanpa terburu-buru. Amankan jadwal Anda sekarang.
                                </p>
                            </div>

                            <div className="bg-neutral-950 p-8 border border-neutral-800 space-y-6 relative overflow-hidden">
                                {/* Decorative */}
                                <div className="absolute top-0 left-0 w-1 h-full bg-white"></div>

                                <h3 className="text-xl font-bold text-white mb-6">Informasi Kontak & Jam Operasional</h3>

                                <ul className="space-y-6">
                                    <li className="flex items-start gap-4">
                                        <MapPin className="w-5 h-5 text-neutral-500 mt-0.5 shrink-0" />
                                        <div>
                                            <strong className="block text-white mb-1">Cylare Style HQ</strong>
                                            <span className="text-sm text-neutral-400">Jl. Senopati No. 88, Kebayoran Baru<br />Jakarta Selatan, 12190</span>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <Clock className="w-5 h-5 text-neutral-500 mt-0.5 shrink-0" />
                                        <div>
                                            <strong className="block text-white mb-1">Jam Operasional</strong>
                                            <span className="text-sm text-neutral-400 block">Senin - Jumat: 10:00 - 21:00</span>
                                            <span className="text-sm text-neutral-400 block">Sabtu - Minggu: 09:00 - 22:00</span>
                                            <span className="text-xs text-red-400 mt-1 block italic">*Akhir pekan disarankan reservasi H-2</span>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <Phone className="w-5 h-5 text-neutral-500 mt-0.5 shrink-0" />
                                        <div>
                                            <strong className="block text-white mb-1">Reservasi via WhatsApp</strong>
                                            <a href="#" className="text-lg font-mono text-white hover:text-neutral-300 transition-colors">+62 812 3456 7890</a>
                                        </div>
                                    </li>
                                </ul>

                                <button className="w-full mt-8 bg-white text-black py-4 text-sm font-bold uppercase tracking-widest hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2">
                                    Chat WhatsApp Sekarang
                                    <ChevronRight className="w-4 h-4" />
                                </button>
                            </div>
                        </div>

                        {/* Aesthetic Map/Location Placeholder */}
                        <div className="bg-neutral-900 border border-neutral-800 min-h-100 flex items-center justify-center relative group">
                            <div className="absolute inset-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80')] bg-cover bg-center grayscale"></div>
                            <div className="absolute inset-0 bg-black/50"></div>

                            <div className="relative z-10 text-center space-y-4 p-6 bg-black/80 backdrop-blur-sm border border-neutral-800">
                                <MapPin className="w-8 h-8 mx-auto text-white" />
                                <p className="font-mono text-sm tracking-widest uppercase text-white"></p>
                                <a href="#" className="text-xs text-neutral-400 hover:text-white underline underline-offset-4 decoration-neutral-700">Buka di Google Maps</a>
                            </div>
                        </div>

                    </div>
                </section>
            </main>

            {/* FOOTER (SEO: semantic <footer>) */}
            <footer className="bg-neutral-950 pt-20 pb-10 border-t border-neutral-900">
                <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
                    <div className="max-w-sm">
                        <a href="#" className="text-2xl font-bold tracking-tighter text-white flex items-center gap-2 uppercase mb-6">
                            <Scissors className="w-6 h-6" />
                            Cylare<span className="text-neutral-500 font-light">Style</span>
                        </a>
                        <p className="text-sm text-neutral-500 leading-relaxed mb-6">
                            Destinasi utama bagi pria modern yang menghargai kualitas, detail, dan suasana eksklusif. Kami tidak mengikuti tren, kami menciptakan standar.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:border-white transition-all">
                                <Instagram className="w-4 h-4" />
                            </a>
                        </div>
                    </div>

                    <div className="flex gap-16 flex-wrap">
                        <div>
                            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Eksplorasi</h4>
                            <ul className="space-y-3 text-sm text-neutral-500">
                                <li><a href="#tentang" className="hover:text-white transition-colors">Tentang Kami</a></li>
                                <li><a href="#layanan" className="hover:text-white transition-colors">Menu Layanan</a></li>
                                <li><a href="#testimoni" className="hover:text-white transition-colors">Ulasan Klien</a></li>
                                <li><a href="#galeri" className="hover:text-white transition-colors">Galeri Gaya</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Legal & Privasi</h4>
                            <ul className="space-y-3 text-sm text-neutral-500">
                                <li><a href="#" className="hover:text-white transition-colors">Syarat & Ketentuan</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Kebijakan Privasi</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Kebijakan Pembatalan</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8 border-t border-neutral-900 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-neutral-600 font-mono">
                        &copy; {new Date().getFullYear()} CYLARE STYLE BARBERSHOP. ALL RIGHTS RESERVED.
                    </p>
                    <p className="text-xs text-neutral-600 font-mono flex items-center gap-1">
                        BUILT WITH PRECISION.
                    </p>
                </div>
            </footer>
        </div>
    );
}