"use client";
import DemoWebView from '@/components/app/demo-web-view';
import { useEffect, useRef, useState } from 'react';
import {
  Chart,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
  Filler,
  Title,
  ChartConfiguration
} from "chart.js";

// Register komponen yang dipakai
Chart.register(
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
  Filler,
  Title
);

// --- PLACEHOLDERS REQUIRED BY SYSTEM ---
const SystemPlaceholders = () => (
    <div className="hidden" aria-hidden="true">
        <div dangerouslySetInnerHTML={{ __html: '<!-- Chosen Palette: Monochrome Dark (Black, White, Dark Grays) -->' }} />
        <div dangerouslySetInnerHTML={{ __html: '<!-- Application Structure Plan: Landing page structure optimized for conversion. Sections are logically ordered: Hero (Attention) -> Problem/Solution (Agitation & Answer) -> Data/Chart (Logical Proof) -> About (Authority) -> Mid-CTA (Action) -> Testimonials (Social Proof) -> Memberships (Commitment) -> Location/Footer (Logistics). Designed to overcome objections and funnel users to WhatsApp. -->' }} />
        <div dangerouslySetInnerHTML={{ __html: '<!-- Visualization & Content Choices: Line chart showing average member progress (Muscle Mass vs Fat Loss) over 6 months to provide data-driven proof of the gym\'s effectiveness. Uses Chart.js via CDN in a constrained container. NO SVG or Mermaid used. -->' }} />
        <div dangerouslySetInnerHTML={{ __html: '<!-- CONFIRMATION: NO SVG graphics used. NO Mermaid JS used. -->' }} />
    </div>
);

export default function App() {
    const chartRef = useRef<HTMLCanvasElement | null>(null);
    const chartInstanceRef = useRef<Chart<"line"> | null>(null);
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    // WhatsApp CTA Link Generator
    const waNumber = "6281234567890"; // Ganti dengan nomor asli
    // const getWaLink = (message: string) => `https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`;
    const getWaLink = (message: string) => `#`;

    // Initialize Chart.js dynamically
    useEffect(() => {
        if (!chartRef.current) return;

        const config: ChartConfiguration<"line"> = {
            type: "line",
            data: {
                labels: [
                    "Bulan 1",
                    "Bulan 2",
                    "Bulan 3",
                    "Bulan 4",
                    "Bulan 5",
                    "Bulan 6"
                ],
                datasets: [
                    {
                        label: "Massa Otot (kg)",
                        data: [0, 1.2, 2.5, 3.8, 5.0, 6.5],
                        borderColor: "#ffffff",
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                        borderWidth: 2,
                        tension: 0.3,
                        fill: true,
                        yAxisID: "y"
                    },
                    {
                        label: "Kadar Lemak (%)",
                        data: [25, 23, 20.5, 18, 15.5, 13],
                        borderColor: "#888888",
                        borderDash: [5, 5],
                        borderWidth: 2,
                        tension: 0.3,
                        yAxisID: "y1"
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                interaction: {
                    mode: "index",
                    intersect: false
                },
                plugins: {
                    legend: {
                        labels: {
                            color: "#ffffff",
                            font: { family: "sans-serif" }
                        }
                    },
                    tooltip: {
                        backgroundColor: "rgba(0,0,0,0.8)",
                        titleColor: "#fff",
                        bodyColor: "#fff",
                        borderColor: "#333",
                        borderWidth: 1
                    }
                },
                scales: {
                    x: {
                        grid: { color: "#333" },
                        ticks: { color: "#aaa" }
                    },
                    y: {
                        type: "linear",
                        position: "left",
                        grid: { color: "#333" },
                        ticks: { color: "#aaa" },
                        title: {
                            display: true,
                            text: "Peningkatan Otot",
                            color: "#fff"
                        }
                    },
                    y1: {
                        type: "linear",
                        position: "right",
                        grid: { drawOnChartArea: false },
                        ticks: { color: "#aaa" },
                        title: {
                            display: true,
                            text: "Penurunan Lemak",
                            color: "#fff"
                        }
                    }
                }
            }
        };

        chartInstanceRef.current = new Chart(chartRef.current, config);

        return () => {
            chartInstanceRef.current?.destroy();
            chartInstanceRef.current = null;
        };
    }, []);

    // Smooth scroll
    const scrollTo = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
            setIsMenuOpen(false);
        }
    };

    return (
        <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
            <SystemPlaceholders />

            <DemoWebView className='bg-black dark:bg-black' />

            {/* Navigation */}
            <nav className="fixed w-full z-50 bg-black/90 backdrop-blur-md border-b border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        <div className="shrink-0 cursor-pointer" onClick={() => scrollTo('hero')}>
                            <span className="text-2xl font-black tracking-tighter uppercase">Cylare<span className="text-gray-500">Fit</span></span>
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden lg:flex items-center space-x-8">
                            {['Problem', 'Data', 'About', 'Testimoni', 'Membership', 'Lokasi'].map((item) => (
                                <button
                                    key={item}
                                    onClick={() => scrollTo(item.toLowerCase())}
                                    className="text-sm font-medium text-gray-300 hover:text-white transition-colors uppercase tracking-wider"
                                >
                                    {item}
                                </button>
                            ))}
                            <a
                                href={getWaLink('Halo Cylare Fitness, saya ingin tanya-tanya dulu.')}
                                target="_blank" rel="noreferrer"
                                className="bg-white text-black px-6 py-2 text-sm font-bold uppercase tracking-wider hover:bg-gray-200 transition-colors"
                            >
                                Join Now
                            </a>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="lg:hidden flex items-center">
                            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
                                <span className="text-2xl">{isMenuOpen ? '✕' : '☰'}</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden bg-black border-b border-white/10 px-4 pt-2 pb-6 space-y-4">
                        {['Problem', 'Data', 'About', 'Testimoni', 'Membership', 'Lokasi'].map((item) => (
                            <button
                                key={item}
                                onClick={() => scrollTo(item.toLowerCase())}
                                className="block w-full text-left text-base font-medium text-gray-300 hover:text-white uppercase tracking-wider"
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                )}
            </nav>

            <main>
                {/* HERO SECTION */}
                <section id="hero" className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-4 flex items-center h-210 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop')" }}>
                    <div className="absolute inset-0 z-0 bg-linear-to-b from-black/80 via-zinc-900/80 to-black"></div>
                    <div className="max-w-7xl mx-auto relative z-10 text-center">
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-tight mb-6">
                            Bentuk Versi Terbaik <br className="hidden md:block" /> Dirimu. <span className="text-gray-500">Tanpa Alasan.</span>
                        </h1>
                        <p className="mt-4 text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-10">
                            Motivasi itu sementara. Disiplin adalah segalanya. Kami menyediakan fasilitas, sistem, dan lingkungan yang memaksa Anda untuk berkembang atau tertinggal.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
                            <a
                                href={getWaLink('Halo Cylare, saya siap memulai perubahan. Bagaimana cara daftarnya?')}
                                target="_blank" rel="noreferrer"
                                className="w-full sm:w-auto bg-white text-black px-8 py-4 text-lg font-bold uppercase tracking-widest hover:bg-gray-200 transition-all border-2 border-white"
                            >
                                Mulai Hari Ini
                            </a>
                            <button
                                onClick={() => scrollTo('problem')}
                                className="w-full sm:w-auto bg-transparent text-white px-8 py-4 text-lg font-bold uppercase tracking-widest border-2 border-gray-600 hover:border-white transition-all"
                            >
                                Pelajari Lebih Lanjut
                            </button>
                        </div>
                    </div>
                </section>

                {/* PROBLEM & SOLUTION SECTION */}
                <section id="problem" className="py-24 bg-zinc-950 px-4 relative overflow-hidden">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div className="relative z-10">
                                <h2 className="text-xl text-gray-500 font-bold uppercase tracking-widest mb-2">Realita Pahit</h2>
                                <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-6 leading-none">Berapa Kali Anda Memulai Lalu Berhenti?</h3>
                                <div className="space-y-6 text-gray-400 text-lg">
                                    <p>Resolusi tahun baru yang dilupakan di bulan Februari. Membayar member gym namun hanya datang dua kali sebulan. Menjalankan diet menyiksa yang berujung pada balas dendam makan.</p>
                                    <p>Anda lelah dengan siklus kegagalan ini. Masalahnya bukan pada niat Anda, tapi pada <strong className="text-white">lingkungan dan sistem</strong> Anda.</p>
                                </div>
                                <div className="mt-8 hidden lg:block">
                                    <img src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1470&auto=format&fit=crop" alt="" className="w-full h-64 object-cover border border-white/10 grayscale hover:grayscale-0 transition-all duration-500" />
                                </div>
                            </div>
                            <div className="bg-black border border-white/10 p-8 md:p-12 relative z-10">
                                <h2 className="text-xl text-white font-bold uppercase tracking-widest mb-2">Solusi Cylare</h2>
                                <h3 className="text-3xl font-black uppercase tracking-tight mb-8">Sistem Berbasis Hasil</h3>
                                <ul className="space-y-6">
                                    {[
                                        { title: 'Program Terstruktur', desc: 'Bukan sekadar mengangkat beban secara acak. Kami memiliki blueprint spesifik untuk target Anda.' },
                                        { title: 'Lingkungan Kompetitif', desc: 'Dikelilingi oleh individu-individu yang serius bertransformasi. Energi ini menular.' },
                                        { title: 'Pemantauan Progres Nyata', desc: 'Kami melacak data Anda. Angka tidak pernah berbohong.' }
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-start">
                                            <span className="text-2xl mr-4 mt-1">✓</span>
                                            <div>
                                                <h4 className="text-white font-bold text-xl uppercase">{item.title}</h4>
                                                <p className="text-gray-400 mt-1">{item.desc}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* DATA / CHART SECTION (Proof of concept) */}
                <section id="data" className="py-24 bg-black px-4">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-xl text-gray-500 font-bold uppercase tracking-widest mb-2">Data & Fakta</h2>
                            <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tight">Angka Tidak Berbohong</h3>
                            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">Rata-rata transformasi member konsisten Cylare Fitness dalam 6 bulan pertama. Peningkatan massa otot berbanding lurus dengan penurunan drastis persentase lemak tubuh.</p>
                        </div>

                        {/* Chart Container - strictly constrained as per instructions */}
                        <div className="chart-container relative w-full max-w-4xl mx-auto bg-zinc-950 p-6 border border-white/10" style={{ height: '400px', maxHeight: '450px' }}>
                            <canvas ref={chartRef} id="progressChart"></canvas>
                        </div>
                        <p className="text-center text-sm text-gray-500 mt-6">*Data agregat dari 500+ member aktif Cylare Fitness periode 2024-2025.</p>
                    </div>
                </section>

                {/* ABOUT SECTION */}
                <section id="about" className="py-24 bg-zinc-950 px-4 border-y border-white/10">
                    <div className="max-w-7xl mx-auto text-center">
                        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-12">Bukan Gym Biasa.<br />Ini Arena Pembentukan Karakter.</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                { icon: '🦾', title: 'Peralatan Standar Internasional', desc: 'Mesin mekanik presisi, free weights premium, dan area fungsional luas tanpa antrean panjang.' },
                                { icon: '🧠', title: 'Pelatih Berlisensi', desc: 'Bukan sekadar penghitung repetisi. Pelatih kami adalah praktisi anatomi dan biomekanik yang tersertifikasi.' },
                                { icon: '⚡', title: 'Budaya Tanpa Alasan', desc: 'Tidak ada ruang untuk kemalasan. Di sini, kita saling mendorong melewati batas toleransi rasa sakit.' }
                            ].map((feature, idx) => (
                                <div key={idx} className="bg-black p-8 border border-white/5 hover:border-white/20 transition-colors">
                                    <div className="text-5xl mb-6">{feature.icon}</div>
                                    <h3 className="text-2xl font-bold uppercase mb-4">{feature.title}</h3>
                                    <p className="text-gray-400">{feature.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* MID CTA SECTION */}
                <section className="py-32 bg-fixed bg-cover bg-center text-white text-center px-4 relative overflow-hidden" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1470&auto=format&fit=crop')" }}>
                    <div className="absolute inset-0 bg-black/80 backdrop-blur-[1px]"></div>
                    <div className="relative z-10 max-w-4xl mx-auto">
                        <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6">Waktu Terus Berjalan.</h2>
                        <p className="text-xl font-medium mb-10 max-w-2xl mx-auto text-gray-300">
                            Satu tahun dari sekarang, Anda akan berharap Anda memulainya hari ini. Jangan biarkan keraguan merampas potensi terbaik tubuh Anda.
                        </p>
                        <a
                            href={getWaLink('Saya tidak mau menunda lagi. Jadwalkan kunjungan pertama saya.')}
                            target="_blank" rel="noreferrer"
                            className="inline-block bg-white text-black px-10 py-5 text-xl font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors shadow-[8px_8px_0px_0px_rgba(255,255,255,0.2)] hover:shadow-none hover:translate-x-1 hover:translate-y-1"
                        >
                            Klaim Sesi Trial Anda
                        </a>
                    </div>
                </section>

                {/* TESTIMONIALS SECTION */}
                <section id="testimoni" className="py-24 bg-black px-4">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-xl text-gray-500 font-bold uppercase tracking-widest mb-2">Bukti Sosial</h2>
                            <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tight">Mereka Sudah Membuktikan</h3>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                { name: 'Adrian P.', role: 'Pengusaha', review: 'Bertahun-tahun gym pindah-pindah tanpa hasil. 6 bulan di Cylare, komposisi tubuh saya berubah total. Lingkungannya sangat mendukung untuk push limit.', stars: 5 },
                                { name: 'Sarah K.', role: 'Ibu Rumah Tangga', review: 'Awalnya intimidasi karena terlihat hardcore, tapi pelatihnya sangat profesional. Saya turun 12kg dan merasa jauh lebih kuat dari usia 20-an saya.', stars: 5 },
                                { name: 'Bima W.', role: 'Atlet Amatir', review: 'Peralatannya no-joke. Plate-loaded machines disini sangat lengkap. The best iron paradise di kota ini tanpa diragukan lagi.', stars: 5 }
                            ].map((testi, idx) => (
                                <div key={idx} className="bg-zinc-950 p-8 border border-white/10 flex flex-col justify-between">
                                    <div>
                                        <div className="text-yellow-500 text-xl tracking-widest mb-4">
                                            {Array(testi.stars).fill('★').join('')}
                                        </div>
                                        <p className="text-gray-300 italic mb-6">&quot;{testi.review}&quot;</p>
                                    </div>
                                    <div className="border-t border-white/10 pt-4 mt-auto">
                                        <p className="font-bold text-white uppercase">{testi.name}</p>
                                        <p className="text-sm text-gray-500">{testi.role}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* MEMBERSHIP SECTION */}
                <section id="membership" className="py-24 bg-zinc-950 px-4 border-t border-white/10">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-4">Pilih Komitmen Anda</h2>
                            <p className="text-gray-400 max-w-2xl mx-auto">Tidak ada kontrak menjebak. Hanya harga transparan untuk fasilitas premium.</p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            {/* Basic */}
                            <div className="bg-black border border-white/10 p-8 flex flex-col">
                                <h3 className="text-2xl font-bold uppercase text-gray-400 mb-2">Basic</h3>
                                <div className="text-5xl font-black mb-6">Rp 350K<span className="text-xl text-gray-500 font-normal">/bln</span></div>
                                <ul className="space-y-4 mb-8 flex-1">
                                    <li className="flex text-gray-300"><span className="mr-2">✓</span> Akses semua alat</li>
                                    <li className="flex text-gray-300"><span className="mr-2">✓</span> Loker harian</li>
                                    <li className="flex text-gray-600"><span className="mr-2">✕</span> Kelas grup</li>
                                    <li className="flex text-gray-600"><span className="mr-2">✕</span> Sesi Personal Trainer</li>
                                </ul>
                                <a
                                    href={getWaLink('Halo, saya mau daftar membership Basic.')} target="_blank" rel="noreferrer"
                                    className="block text-center border-2 border-white text-white py-3 font-bold uppercase hover:bg-white hover:text-black transition-colors"
                                >Pilih Basic</a>
                            </div>

                            {/* Pro (Highlighted) */}
                            <div className="bg-white text-black p-8 flex flex-col transform md:-translate-y-4 shadow-2xl">
                                <div className="bg-black text-white text-xs font-bold uppercase tracking-widest py-1 px-3 inline-block self-start mb-4">Paling Populer</div>
                                <h3 className="text-2xl font-bold uppercase mb-2">Pro</h3>
                                <div className="text-5xl font-black mb-6">Rp 550K<span className="text-xl text-gray-600 font-normal">/bln</span></div>
                                <ul className="space-y-4 mb-8 flex-1">
                                    <li className="flex font-medium"><span className="mr-2">✓</span> Akses semua alat 24/7</li>
                                    <li className="flex font-medium"><span className="mr-2">✓</span> Loker permanen & Handuk</li>
                                    <li className="flex font-medium"><span className="mr-2">✓</span> Akses tak terbatas kelas grup</li>
                                    <li className="flex text-gray-400"><span className="mr-2">✕</span> Sesi Personal Trainer</li>
                                </ul>
                                <a
                                    href={getWaLink('Halo, saya tertarik bergabung dengan membership Pro.')} target="_blank" rel="noreferrer"
                                    className="block text-center bg-black text-white py-4 font-bold uppercase text-lg hover:bg-zinc-800 transition-colors"
                                >Pilih Pro</a>
                            </div>

                            {/* Elite */}
                            <div className="bg-black border border-white/10 p-8 flex flex-col">
                                <h3 className="text-2xl font-bold uppercase text-gray-400 mb-2">Elite</h3>
                                <div className="text-5xl font-black mb-6">Rp 1.2M<span className="text-xl text-gray-500 font-normal">/bln</span></div>
                                <ul className="space-y-4 mb-8 flex-1">
                                    <li className="flex text-gray-300"><span className="mr-2">✓</span> Semua akses paket PRO</li>
                                    <li className="flex text-gray-300"><span className="mr-2">✓</span> 4x Sesi PT per bulan</li>
                                    <li className="flex text-gray-300"><span className="mr-2">✓</span> Konsultasi Gizi Bulanan</li>
                                    <li className="flex text-gray-300"><span className="mr-2">✓</span> Akses VIP Lounge</li>
                                </ul>
                                <a
                                    href={getWaLink('Halo, saya ingin reservasi untuk paket Elite beserta PT.')} target="_blank" rel="noreferrer"
                                    className="block text-center border-2 border-white text-white py-3 font-bold uppercase hover:bg-white hover:text-black transition-colors"
                                >Pilih Elite</a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* LOCATION SECTION */}
                <section id="lokasi" className="py-24 bg-black px-4">
                    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-6">Markas Kami.</h2>
                            <p className="text-gray-400 text-lg mb-8">Berlokasi strategis di pusat kota dengan area parkir luas. Kunjungi fasilitas kami dan rasakan atmosfernya secara langsung sebelum Anda memutuskan.</p>

                            <div className="space-y-4 mb-8">
                                <div className="flex items-start">
                                    <span className="text-2xl mr-4">📍</span>
                                    <div>
                                        <h4 className="font-bold text-white uppercase">Alamat</h4>
                                        <p className="text-gray-400">Jl. Jenderal Sudirman No. 88, Kawasan Bisnis Terpadu, Jakarta Selatan 12190</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <span className="text-2xl mr-4">🕒</span>
                                    <div>
                                        <h4 className="font-bold text-white uppercase">Jam Operasional</h4>
                                        <p className="text-gray-400">Senin - Jumat: 05:00 - 23:00<br />Sabtu - Minggu: 06:00 - 21:00</p>
                                    </div>
                                </div>
                            </div>

                            <a
                                href="https://maps.google.com" target="_blank" rel="noreferrer"
                                className="inline-block border-2 border-white text-white px-8 py-3 font-bold uppercase hover:bg-white hover:text-black transition-colors"
                            >
                                Buka di Google Maps
                            </a>
                        </div>

                        {/* Visual Location Image */}
                        <div className="aspect-square md:aspect-auto md:h-full min-h-100 border border-white/20 relative overflow-hidden group">
                            <img
                                src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1470&auto=format&fit=crop"
                                alt=""
                                className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 p-8 z-10">
                                <h3 className="text-2xl font-black uppercase tracking-widest text-white mb-2">Cylare HQ</h3>
                                <p className="text-gray-400 font-mono">-6.2255° S, 106.8080° E</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* FOOTER & FINAL CTA */}
            <footer className="bg-zinc-950 border-t border-white/10 pt-20 pb-10 px-4">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-8">Keringat Hari Ini, <br /> Kebanggaan Esok Hari.</h2>
                    <a
                        href={getWaLink('Halo Cylare Fitness, saya siap bergabung!')}
                        target="_blank" rel="noreferrer"
                        className="inline-block bg-white text-black px-12 py-5 text-xl font-black uppercase tracking-widest hover:bg-gray-200 transition-colors mb-20"
                    >
                        Hubungi Kami via WhatsApp
                    </a>

                    <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/10 pt-8 mt-8">
                        <span className="text-2xl font-black tracking-tighter uppercase mb-4 md:mb-0">Cylare<span className="text-gray-600">Fit</span></span>
                        <p className="text-gray-600 text-sm">© {new Date().getFullYear()} Cylare Fitness. All rights reserved. Bangun otot, bukan alasan.</p>
                        <div className="flex space-x-6 mt-4 md:mt-0">
                            <a href="#" className="text-gray-500 hover:text-white text-xl">IG</a>
                            <a href="#" className="text-gray-500 hover:text-white text-xl">FB</a>
                            <a href="#" className="text-gray-500 hover:text-white text-xl">YT</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}