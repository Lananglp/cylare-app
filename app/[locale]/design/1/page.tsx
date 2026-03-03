"use client";

import { useState, useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import { Link } from '@/i18n/navigation';
import Image from 'next/image';

// --- Tipe Data TypeScript ---
type SymptomKey = 'tidak_dingin' | 'bocor' | 'berisik' | 'bau';
type AcType = '0.5-1' | '1.5-2' | 'cassette' | 'inverter';
type ServiceType = 'cuci' | 'tambah_freon' | 'isi_full' | 'besar' | 'pasang';

// --- Data Konstan ---
const diagnosisData: Record<SymptomKey, { title: string; desc: string; recommendation: string; priceEstimate: string; icon: string }> = {
    'tidak_dingin': {
        title: "Analisa: Freon Kosong / Evaporator Kotor",
        desc: "AC menyala tapi hanya keluar angin biasa adalah gejala paling umum. Biasanya disebabkan oleh filter yang memblokir udara dingin, atau tekanan freon yang sudah habis karena kebocoran halus.",
        recommendation: "Solusi Cepat: Cuci Besar + Cek Tekanan Freon",
        priceEstimate: "Mulai Rp 75.000",
        icon: "🥵"
    },
    'bocor': {
        title: "Analisa: Saluran Pembuangan Mampet",
        desc: "Air menetes dari unit indoor di dalam kamar 90% disebabkan oleh lendir atau kotoran yang menumpuk dan menyumbat selang pembuangan air (drainase) AC Anda.",
        recommendation: "Solusi Cepat: Service Cuci Rutin (Tembak Saluran)",
        priceEstimate: "Mulai Rp 75.000",
        icon: "💧"
    },
    'berisik': {
        title: "Analisa: Masalah Mekanis / Kotoran",
        desc: "Suara getaran keras bisa berasal dari baut bracket yang kendor. Namun jika suaranya seperti 'kretek-kretek' dari dalam, biasanya karena bearing kipas aus atau ada kotoran mengeras di blower.",
        recommendation: "Solusi Cepat: Pengecekan Fisik & Perbaikan Ringan",
        priceEstimate: "Cek Lapangan (Estimasi Rp 100rb - 250rb)",
        icon: "🔊"
    },
    'bau': {
        title: "Analisa: Jamur di Evaporator",
        desc: "Bau apek, asam, atau seperti cuka menandakan adanya koloni jamur dan bakteri yang bersarang di kisi-kisi evaporator yang lembab. Udara ini tidak sehat untuk dihirup keluarga.",
        recommendation: "Solusi Cepat: Cuci Besar + Semprot Desinfektan Khusus",
        priceEstimate: "Mulai Rp 95.000",
        icon: "🤢"
    }
};

const pricingDB: Record<AcType, Record<ServiceType, number>> = {
    '0.5-1': { 'cuci': 75000, 'tambah_freon': 150000, 'isi_full': 250000, 'besar': 150000, 'pasang': 350000 },
    '1.5-2': { 'cuci': 85000, 'tambah_freon': 200000, 'isi_full': 350000, 'besar': 200000, 'pasang': 450000 },
    'cassette': { 'cuci': 150000, 'tambah_freon': 300000, 'isi_full': 500000, 'besar': 350000, 'pasang': 750000 },
    'inverter': { 'cuci': 90000, 'tambah_freon': 250000, 'isi_full': 450000, 'besar': 250000, 'pasang': 400000 }
};

export default function JasaServisAC() {
    // --- State Management ---
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSymptom, setActiveSymptom] = useState<SymptomKey | null>(null);
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    // Calculator States
    const [acType, setAcType] = useState<AcType>('0.5-1');
    const [serviceType, setServiceType] = useState<ServiceType>('cuci');
    const [qty, setQty] = useState<number>(1);

    // Chart State
    const [chartMode, setChartMode] = useState<'kotor' | 'bersih'>('kotor');
    const chartRef = useRef<HTMLCanvasElement>(null);
    const chartInstance = useRef<Chart | null>(null);

    // --- Derived Values (Kalkulator) ---
    const totalHarga = pricingDB[acType][serviceType] * qty;
    const formatHarga = `Rp ${totalHarga.toLocaleString('id-ID')}`;

    // Pembuatan Link WA Dinamis
    const serviceNameMap: Record<ServiceType, string> = {
        'cuci': 'Cuci Rutin / Pembersihan',
        'tambah_freon': 'Tambah Freon',
        'isi_full': 'Isi Freon Full',
        'besar': 'Service Besar',
        'pasang': 'Jasa Pasang Unit'
    };
    const acNameMap: Record<AcType, string> = {
        '0.5-1': 'Split Wall (0.5 PK - 1 PK)',
        '1.5-2': 'Split Wall (1.5 PK - 2 PK)',
        'cassette': 'AC Cassette / Standing',
        'inverter': 'AC Inverter (Semua PK)'
    };

    const waText = `Halo Admin Cylare Tech, saya ingin pesan layanan *${serviceNameMap[serviceType]}*.\n\nDetail:\n- Jenis AC: ${acNameMap[acType]}\n- Jumlah: ${qty} Unit\n- Estimasi Harga: Rp ${totalHarga.toLocaleString('id-ID')}\n\nKapan teknisi bisa datang ke lokasi saya?`;
    const waLink = `https://wa.me/6281234567890?text=${encodeURIComponent(waText)}`;

    // --- Handlers ---
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const headerOffset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({ top: offsetPosition, behavior: "smooth" });
            setIsMobileMenuOpen(false);
        }
    };

    const adjustQty = (amount: number) => {
        setQty((prev) => Math.max(1, prev + amount));
    };

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    // --- Chart.js Effect ---
    useEffect(() => {
        // Hindari eksekusi jika canvas belum dirender
        if (!chartRef.current) return;

        // Inisialisasi Chart pertama kali
        chartInstance.current = new Chart(chartRef.current, {
            type: 'line',
            data: {
                labels: ['Bulan 1', 'Bulan 2', 'Bulan 3', 'Bulan 4', 'Bulan 5', 'Bulan 6'],
                datasets: [{
                    label: 'Efisiensi AC (Tanpa Cuci)',
                    data: [100, 92, 80, 65, 55, 45],
                    borderColor: '#f87171',
                    backgroundColor: 'rgba(248, 113, 113, 0.1)',
                    borderWidth: 3,
                    pointBackgroundColor: '#f87171',
                    tension: 0.4,
                    fill: true
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                color: '#cbd5e1',
                plugins: {
                    legend: { position: 'bottom', labels: { font: { family: 'Inter', size: 13 } } },
                    tooltip: {
                        backgroundColor: 'rgba(15, 23, 42, 0.9)',
                        padding: 12,
                        callbacks: {
                            label: function (context) {
                                return context.dataset.label + ': ' + context.parsed.y + '%';
                            }
                        }
                    }
                },
                scales: {
                    x: { grid: { display: false }, ticks: { color: '#94a3b8' } },
                    y: {
                        beginAtZero: false,
                        min: 30,
                        max: 105,
                        grid: { color: '#334155' },
                        ticks: { color: '#94a3b8' },
                        title: { display: true, text: 'Kapasitas Pendinginan (%)', color: '#cbd5e1' }
                    }
                }
            }
        });

        // Cleanup chart saat komponen di-unmount
        return () => {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }
        };
    }, []);

    // Effect untuk Update Data Chart saat mode berubah
    useEffect(() => {
        if (!chartInstance.current) return;

        const dataDirty = [100, 92, 80, 65, 55, 45];
        const dataClean = [100, 98, 97, 96, 95, 94];

        if (chartMode === 'kotor') {
            chartInstance.current.data.datasets[0].data = dataDirty;
            chartInstance.current.data.datasets[0].label = 'Efisiensi AC (Tanpa Cuci)';
            chartInstance.current.data.datasets[0].borderColor = '#f87171';
            chartInstance.current.data.datasets[0].backgroundColor = 'rgba(248, 113, 113, 0.1)';
        } else {
            chartInstance.current.data.datasets[0].data = dataClean;
            chartInstance.current.data.datasets[0].label = 'Efisiensi AC (Rutin Cuci)';
            chartInstance.current.data.datasets[0].borderColor = '#34d399';
            chartInstance.current.data.datasets[0].backgroundColor = 'rgba(52, 211, 153, 0.1)';
        }
        chartInstance.current.update();
    }, [chartMode]);

    return (
        <div className="antialiased bg-slate-50 text-slate-800 selection:bg-blue-200 selection:text-blue-900">
            {/* Embedded CSS for animations and specific styles */}
            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes bounceIn {
                    0% { transform: scale(0); }
                    50% { transform: scale(1.1); }
                    100% { transform: scale(1); }
                }
                @keyframes fadeIn { 
                    from { opacity: 0; transform: translateY(10px); } 
                    to { opacity: 1; transform: translateY(0); } 
                }
                .animate-fade-in { animation: fadeIn 0.5s ease-in-out; }
            `}} />

            {/* Floating WhatsApp Button */}
            <Link
                href="#"
                className="fixed bottom-5 right-5 z-50 bg-green-500 hover:bg-green-600 text-white p-2.5 rounded-full shadow-2xl flex items-center justify-center transition-transform group"
            >
                <Image src="/whatsapp-icon-2.svg" alt="WhatsApp Logo" width={28} height={28} />
                <span className="max-w-0 overflow-hidden whitespace-nowrap transition-all duration-300 group-hover:max-w-xs group-hover:ml-2 font-medium">Chat Sekarang</span>
            </Link>

            {/* Navigation */}
            <nav className="bg-white border-b border-slate-200 sticky top-0 z-40">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-14 md:h-20">
                        <div className="flex items-center">
                            <div className="hrink-0 flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('home')}>
                                <div className="w-10 h-10 bg-linear-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-sm">C</div>
                                <span className="font-bold text-2xl tracking-tight text-slate-800">Cylare<span className="text-blue-600">Tech</span></span>
                            </div>
                        </div>
                        <div className="hidden lg:flex items-center space-x-8">
                            <button onClick={() => scrollToSection('layanan')} className="text-slate-600 hover:text-blue-600 font-medium transition">Layanan</button>
                            <button onClick={() => scrollToSection('diagnosa')} className="text-slate-600 hover:text-blue-600 font-medium transition">Cek Masalah</button>
                            <button onClick={() => scrollToSection('harga')} className="text-slate-600 hover:text-blue-600 font-medium transition">Estimasi Harga</button>
                            <button onClick={() => scrollToSection('testimoni')} className="text-slate-600 hover:text-blue-600 font-medium transition">Testimoni</button>
                            <Link href="#" className="bg-green-500 hover:bg-green-600 text-white px-6 py-2.5 rounded-full font-semibold transition shadow-md flex items-center gap-2">
                                <Image src="/whatsapp-icon-2.svg" alt="WhatsApp Logo" width={24} height={24} /> Chat Sekarang
                            </Link>
                        </div>
                        <div className="flex items-center lg:hidden">
                            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-slate-600 text-3xl focus:outline-none">☰</button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden bg-white border-t absolute w-full shadow-lg">
                        <div className="px-4 pt-2 pb-4 space-y-2">
                            <button onClick={() => scrollToSection('layanan')} className="block w-full text-left py-3 text-slate-700 font-medium border-b border-slate-50">Layanan</button>
                            <button onClick={() => scrollToSection('diagnosa')} className="block w-full text-left py-3 text-slate-700 font-medium border-b border-slate-50">Cek Masalah AC</button>
                            <button onClick={() => scrollToSection('harga')} className="block w-full text-left py-3 text-slate-700 font-medium border-b border-slate-50">Estimasi Harga</button>
                            <button onClick={() => scrollToSection('testimoni')} className="block w-full text-left py-3 text-slate-700 font-medium border-b border-slate-50">Testimoni</button>
                            <Link href="#" className="w-full flex items-center justify-center gap-2 mt-4 bg-green-500 text-white px-3 py-3 rounded-lg font-bold"><Image src="/whatsapp-icon-2.svg" alt="WhatsApp Logo" width={24} height={24} /> Chat Sekarang</Link>
                        </div>
                    </div>
                )}
            </nav>

            {/* Hero Section */}
            <section id="home" className="relative bg-white overflow-hidden pt-10 pb-16 lg:pt-20 lg:pb-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                        <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left flex flex-col justify-center">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-100 text-orange-700 text-sm font-semibold mb-6 w-fit sm:mx-auto lg:mx-0">
                                <span className="animate-pulse">⚠️</span> AC Panas Bikin Emosi?
                            </div>
                            <h1 className="text-4xl tracking-tight font-extrabold text-slate-900 sm:text-5xl md:text-6xl lg:leading-tight">
                                Kembalikan Kesejukan Rumah Anda <span className="text-blue-600">Hari Ini Juga.</span>
                            </h1>
                            <p className="mt-4 text-lg text-slate-600 sm:mt-6">
                                Jangan biarkan AC menetes, berisik, atau boros listrik. Tim teknisi ahli dari <strong>PT. Cylare Tech</strong> siap datang tepat waktu, mengecek tuntas, dengan harga jujur & garansi uang kembali.
                            </p>

                            <div className="mt-6 flex items-center justify-center lg:justify-start gap-4 text-sm font-medium text-slate-500">
                                <div className="flex items-center gap-1 text-yellow-500">⭐⭐⭐⭐⭐</div>
                                <span>4.9/5 dari 5,000+ Pelanggan Jabodetabek</span>
                            </div>

                            <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0 flex flex-col sm:flex-row gap-4">
                                <Link href="#" className="w-full sm:w-auto flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-xl text-white bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-blue-500/30 transition-all transform hover:-translate-y-1">
                                    Booking Hari Ini
                                </Link>
                                <button onClick={() => scrollToSection('harga')} className="w-full sm:w-auto flex items-center justify-center px-8 py-4 border-2 border-slate-200 text-lg font-bold rounded-xl text-slate-700 bg-white hover:bg-slate-50 hover:border-slate-300 transition-all">
                                    Lihat Daftar Harga
                                </button>
                            </div>
                        </div>

                        <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
                            <div className="relative mx-auto w-full rounded-2xl overflow-hidden bg-slate-50 border border-slate-200 p-8">
                                <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-white opacity-10 rounded-full blur-2xl"></div>
                                <h3 className="text-2xl font-bold mb-6">Kenapa Harus Sekarang?</h3>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3">
                                        <span className="bg-white/20 px-2 py-0.5 rounded-full text-sm">✓</span>
                                        <span>Mencegah kompresor jebol (Biaya ganti mahal!)</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="bg-white/20 px-2 py-0.5 rounded-full text-sm">✓</span>
                                        <span>Udara langsung bersih dari bakteri/jamur</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="bg-white/20 px-2 py-0.5 rounded-full text-sm">✓</span>
                                        <span>Tagihan listrik bulan depan langsung turun</span>
                                    </li>
                                </ul>
                                <div className="mt-8 bg-white/10 rounded-xl p-4 backdrop-blur-sm border border-white/20">
                                    <p className="text-sm">&quot;Teknisinya rapi banget, AC yang tadinya cuma keluar angin doang sekarang dingin menggigil kayak di kutub.&quot; <br /><span className="font-bold mt-2 block">- Bpk. Hendra, Jaksel</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Layanan Kami */}
            <section id="layanan" className="py-16 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-base text-blue-600 font-bold tracking-wide uppercase">Spesialisasi Kami</h2>
                        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                            Layanan Lengkap Perawatan AC
                        </p>
                        <p className="mt-4 max-w-2xl text-lg text-slate-600 mx-auto">
                            Dari cuci rutin hingga instalasi sistem sentral, kami tangani dengan alat standar pabrik.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Service Cards */}
                        <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all border border-slate-100 hover:-translate-y-1 group">
                            <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center text-3xl mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">🧼</div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Cuci AC Rutin</h3>
                            <p className="text-slate-600 text-sm mb-4">Pembersihan mendalam menggunakan mesin steam tekanan tinggi & aman.</p>
                        </div>
                        <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all border border-slate-100 hover:-translate-y-1 group">
                            <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center text-3xl mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">🔧</div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Isi/Tambah Freon</h3>
                            <p className="text-slate-600 text-sm mb-4">Pengecekan tekanan freon akurat. Tersedia untuk R32, R410a, dan R22 original.</p>
                        </div>
                        <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all border border-slate-100 hover:-translate-y-1 group">
                            <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center text-3xl mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">📦</div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Bongkar Pasang</h3>
                            <p className="text-slate-600 text-sm mb-4">Pindahan rumah atau pasang unit baru? Instalasi dijamin rapi, divakum standar SOP.</p>
                        </div>
                        <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all border border-slate-100 hover:-translate-y-1 group">
                            <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center text-3xl mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">⚙️</div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Perbaikan Kerusakan</h3>
                            <p className="text-slate-600 text-sm mb-4">Solusi untuk AC mati total, sensor error, kompresor macet, hingga perbaikan PCB.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Interactive Diagnostic Tool */}
            <section id="diagnosa" className="py-16 bg-slate-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-base text-blue-400 font-semibold tracking-wide uppercase">Diagnosa Cerdas</h2>
                        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl">
                            Apa Keluhan AC Anda Hari Ini?
                        </p>
                    </div>

                    <div className="bg-slate-800 rounded-2xl shadow-2xl overflow-hidden md:flex border border-slate-700">
                        <div className="md:w-1/2 p-8 border-b md:border-b-0 md:border-r border-slate-700">
                            <h3 className="text-xl font-medium text-slate-300 mb-6">Pilih Gejala Utama:</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {Object.keys(diagnosisData).map((key) => {
                                    const symptomKey = key as SymptomKey;
                                    const isActive = activeSymptom === symptomKey;
                                    return (
                                        <button
                                            key={symptomKey}
                                            onClick={() => setActiveSymptom(symptomKey)}
                                            className={`p-5 rounded-xl text-left transition border group ${isActive ? 'bg-blue-600 border-blue-400' : 'bg-slate-700 border-transparent hover:bg-slate-600 hover:border-slate-500'}`}
                                        >
                                            <span className="text-3xl block mb-2 group-hover:scale-110 transition-transform">
                                                {diagnosisData[symptomKey].icon}
                                            </span>
                                            <span className="font-bold block capitalize">{symptomKey.replace('_', ' ')}</span>
                                            <span className="text-xs text-slate-400">Tekan untuk info</span>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        <div className="md:w-1/2 p-8 bg-slate-800/50 flex flex-col justify-center min-h-[350px]">
                            {activeSymptom ? (
                                <div className="text-left animate-fade-in bg-slate-800 p-6 rounded-2xl border border-slate-700 shadow-inner">
                                    <div className="flex items-center gap-4 mb-5">
                                        <span className="text-5xl bg-slate-700 p-3 rounded-2xl border border-slate-600">{diagnosisData[activeSymptom].icon}</span>
                                        <h4 className="text-2xl font-bold text-white">{diagnosisData[activeSymptom].title}</h4>
                                    </div>
                                    <p className="text-slate-300 mb-6 text-lg leading-relaxed">{diagnosisData[activeSymptom].desc}</p>
                                    <div className="bg-blue-900/40 border-l-4 border-blue-400 p-4 mb-6 rounded-r-lg">
                                        <p className="font-bold text-blue-300">{diagnosisData[activeSymptom].recommendation}</p>
                                        <p className="text-sm text-blue-100 mt-1">Estimasi Biaya: {diagnosisData[activeSymptom].priceEstimate}</p>
                                    </div>
                                    <button onClick={() => scrollToSection('harga')} className="w-full bg-white text-slate-900 py-3.5 rounded-xl font-bold hover:bg-slate-200 transition-colors">
                                        Hitung Total Biaya
                                    </button>
                                </div>
                            ) : (
                                <div className="text-center text-slate-500 h-full flex flex-col items-center justify-center animate-fade-in">
                                    <span className="text-6xl block mb-4 opacity-50">🔍</span>
                                    <p className="text-lg">Silakan tekan salah satu keluhan di <span className='inline md:hidden'>atas</span><span className='hidden md:inline'>samping</span> untuk melihat analisa teknis kami.</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Values & Cara Kerja */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-extrabold text-slate-900">Mengapa Ribuan Keluarga Memilih Kami?</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center mb-20">
                        <div>
                            <div className="w-20 h-20 bg-green-50 text-green-600 rounded-full flex items-center justify-center text-4xl mx-auto mb-6 shadow-sm border border-green-100">👷</div>
                            <h3 className="text-xl font-bold mb-3 text-slate-900">Teknisi Tersertifikasi</h3>
                            <p className="text-slate-600">Teknisi terlatih, berseragam, dan mematuhi SOP kebersihan ketat.</p>
                        </div>
                        <div>
                            <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center text-4xl mx-auto mb-6 shadow-sm border border-blue-100">💸</div>
                            <h3 className="text-xl font-bold mb-3 text-slate-900">Anti &quot;Harga Tembak&quot;</h3>
                            <p className="text-slate-600">Transparan. Segala tindakan wajib mendapat persetujuan biaya dari Anda dulu.</p>
                        </div>
                        <div>
                            <div className="w-20 h-20 bg-orange-50 text-orange-600 rounded-full flex items-center justify-center text-4xl mx-auto mb-6 shadow-sm border border-orange-100">🛡️</div>
                            <h3 className="text-xl font-bold mb-3 text-slate-900">Garansi Pasti Kembali</h3>
                            <p className="text-slate-600">Garansi 14-30 hari jika masalah yang sama muncul kembali, 100% GRATIS.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* NEW Section: Cara Kerja */}
            <section className="py-16 bg-slate-50 border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-extrabold text-slate-900">Proses Cepat &amp; Tanpa Ribet</h2>
                    </div>
                    <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12 relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-1/2 left-20 right-20 h-1 bg-blue-200 -z-0 transform -translate-y-1/2" />
                        {/* Step 1 */}
                        <div className="relative z-10 bg-white p-6 rounded-2xl shadow-md border border-slate-100 text-center w-full md:w-1/3">
                            <div className="w-12 h-12 bg-blue-600 text-white font-bold text-xl rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-white shadow-sm">1</div>
                            <h4 className="font-bold text-lg mb-2 text-slate-900">Booking via WA</h4>
                            <p className="text-sm text-slate-600">Konsultasikan masalah &amp; atur jadwal kedatangan yang Anda inginkan.</p>
                        </div>
                        {/* Step 2 */}
                        <div className="relative z-10 bg-white p-6 rounded-2xl shadow-md border border-slate-100 text-center w-full md:w-1/3">
                            <div className="w-12 h-12 bg-blue-600 text-white font-bold text-xl rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-white shadow-sm">2</div>
                            <h4 className="font-bold text-lg mb-2 text-slate-900">Teknisi Eksekusi</h4>
                            <p className="text-sm text-slate-600">Teknisi datang mengecek, memberikan estimasi final, lalu mengerjakan perbaikan.</p>
                        </div>
                        {/* Step 3 */}
                        <div className="relative z-10 bg-white p-6 rounded-2xl shadow-md border border-slate-100 text-center w-full md:w-1/3">
                            <div className="w-12 h-12 bg-green-500 text-white font-bold text-xl rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-white shadow-sm">✔</div>
                            <h4 className="font-bold text-lg mb-2 text-slate-900">Dingin &amp; Nyaman</h4>
                            <p className="text-sm text-slate-600">Bayar setelah selesai. Ruangan kembali sejuk, keluarga kembali nyaman.</p>
                        </div>
                    </div>
                </div>
            </section>


            {/* Price Calculator */}
            <section id="harga" className="py-20 bg-blue-600 text-white bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fillRule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fillOpacity=\'0.1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-10">
                        <span className="bg-white/20 text-white px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide uppercase mb-4 inline-block">Kalkulator Harga</span>
                        <h2 className="text-4xl font-extrabold mb-4">Hitung Biaya Servis Anda</h2>
                        <p className="text-blue-100 text-lg max-w-2xl mx-auto">Kami mengedepankan transparansi. Ketahui perkiraan biaya pengeluaran Anda.</p>
                    </div>

                    <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden text-slate-800">
                        <div className="p-6 md:p-10">
                            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-8">
                                <div className="md:col-span-5">
                                    <label className="block text-sm font-bold text-slate-700 mb-2">Pilih Jenis/Ukuran AC</label>
                                    <select
                                        value={acType}
                                        onChange={(e) => setAcType(e.target.value as AcType)}
                                        className="block w-full pl-4 pr-10 py-3.5 text-base border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent rounded-xl border appearance-none cursor-pointer"
                                    >
                                        <option value="0.5-1">Split Wall (0.5 PK - 1 PK)</option>
                                        <option value="1.5-2">Split Wall (1.5 PK - 2 PK)</option>
                                        <option value="cassette">AC Cassette / Standing</option>
                                        <option value="inverter">AC Inverter (Semua PK)</option>
                                    </select>
                                </div>
                                <div className="md:col-span-5">
                                    <label className="block text-sm font-bold text-slate-700 mb-2">Pilih Layanan Utama</label>
                                    <select
                                        value={serviceType}
                                        onChange={(e) => setServiceType(e.target.value as ServiceType)}
                                        className="block w-full pl-4 pr-10 py-3.5 text-base border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent rounded-xl border appearance-none cursor-pointer"
                                    >
                                        <option value="cuci">Cuci Rutin / Pembersihan</option>
                                        <option value="tambah_freon">Tambah Freon (R32/R410/R22)</option>
                                        <option value="isi_full">Isi Freon Full (Dari Kosong)</option>
                                        <option value="besar">Service Besar (Turun Indoor)</option>
                                        <option value="pasang">Jasa Pasang Unit</option>
                                    </select>
                                </div>
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-bold text-slate-700 mb-2">Jumlah</label>
                                    <div className="flex items-center bg-slate-50 border border-slate-200 rounded-xl overflow-hidden h-[54px]">
                                        <button onClick={() => adjustQty(-1)} className="w-full h-full bg-slate-100 hover:bg-slate-200 text-slate-600 font-bold transition focus:outline-none">-</button>
                                        <span className="w-16 text-center font-bold text-lg">{qty}</span>
                                        <button onClick={() => adjustQty(1)} className="w-full h-full bg-slate-100 hover:bg-slate-200 text-slate-600 font-bold transition focus:outline-none">+</button>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-linear-to-r from-slate-50 to-slate-100 rounded-2xl p-6 border border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6">
                                <div>
                                    <p className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-1">Estimasi Total Biaya</p>
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">{formatHarga}</span>
                                    </div>
                                    <p className="text-xs text-slate-400 mt-2">*Harga final bisa menyesuaikan hasil pengecekan aktual di lapangan.</p>
                                </div>
                                <Link href="#" className="w-full md:w-auto text-center bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-green-500/30 transform transition hover:-translate-y-1 flex justify-center items-center gap-2">
                                    <Image src="/whatsapp-icon-2.svg" alt="WhatsApp Logo" width={24} height={24} /> Pesan via WhatsApp
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* NEW Section: Testimoni */}
            <section id="testimoni" className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-extrabold text-slate-900">Apa Kata Mereka?</h2>
                        <p className="mt-4 text-slate-600">Ribuan AC telah kami selamatkan. Ini pengalaman jujur pelanggan kami.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Review 1 */}
                        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                            <div className="text-yellow-400 text-xl mb-4">★★★★★</div>
                            <p className="text-slate-700 italic mb-4">&quot;Awalnya ragu karena sering kena getok harga sama kang AC pinggir jalan. Tapi pake Cylare transparan banget. Dikasih tau dulu kerusakannya apa, harganya berapa, baru dikerjain.&quot;</p>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-blue-200 text-blue-700 flex items-center justify-center font-bold">A</div>
                                <div>
                                    <p className="font-bold text-sm text-slate-900">Ardiansyah</p>
                                    <p className="text-xs text-slate-500">Bintaro, Tangsel</p>
                                </div>
                            </div>
                        </div>
                        {/* Review 2 */}
                        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                            <div className="text-yellow-400 text-xl mb-4">★★★★★</div>
                            <p className="text-slate-700 italic mb-4">&quot;Teknisinya sopan banget, buka sepatu waktu masuk rumah dan bawa terpal buat nutupin kasur biar ngga kena cipratan air cucian AC. Recommended banget buat ibu-ibu!&quot;</p>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-pink-200 text-pink-700 flex items-center justify-center font-bold">D</div>
                                <div>
                                    <p className="font-bold text-sm text-slate-900">Dina Mariana</p>
                                    <p className="text-xs text-slate-500">Tebet, Jaksel</p>
                                </div>
                            </div>
                        </div>
                        {/* Review 3 */}
                        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                            <div className="text-yellow-400 text-xl mb-4">★★★★★</div>
                            <p className="text-slate-700 italic mb-4">&quot;AC kantor tiba-tiba bocor deres pas lagi jam sibuk. WA admin langsung direspon, 1 jam kemudian teknisi sampe. Penanganannya cepet dan bersih. Mantap Cylare Tech.&quot;</p>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-indigo-200 text-indigo-700 flex items-center justify-center font-bold">K</div>
                                <div>
                                    <p className="font-bold text-sm text-slate-900">Kevin Surya (PT. ABC)</p>
                                    <p className="text-xs text-slate-500">Sudirman, Jakpus</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* Edukasi (Chart) */}
            <section id="edukasi" className="py-16 bg-slate-900 text-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
                        <div className="mb-10 lg:mb-0 relative z-10">
                            <h2 className="text-3xl font-extrabold sm:text-4xl mb-6">AC Kotor Bikin Kantong Jebol</h2>
                            <p className="text-lg text-slate-300 mb-6">
                                Menunda cuci AC mungkin terasa hemat di awal. Tapi tahukah Anda? Kompresor AC yang tersumbat debu bekerja <strong>30% lebih keras</strong>, yang berujung pada lonjakan tagihan listrik bulanan.
                            </p>

                            <div className="bg-blue-900/50 border-l-4 border-blue-500 p-5 mb-8 rounded-r-lg">
                                <p className="text-sm text-blue-200">
                                    <strong>Fakta Teknis:</strong> Debu setebal 1mm pada coil evaporator dapat menurunkan efisiensi pertukaran suhu hingga 21%.
                                </p>
                            </div>

                            <Link href="#" className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-green-700 hover:bg-green-800 transition-colors">
                                <Image src="/whatsapp-icon-2.svg" alt="WhatsApp Logo" width={24} height={24} /> Jadwalkan Cuci AC Sekarang
                            </Link>
                        </div>

                        <div className="relative">
                            <div className="absolute inset-0 bg-blue-500 rounded-full blur-[100px] opacity-20"></div>

                            <div className="bg-slate-800 p-6 rounded-2xl shadow-2xl border border-slate-700 relative z-10">
                                <h3 className="text-xl font-bold text-white mb-2 text-center">Grafik Penurunan Performa AC</h3>
                                <p className="text-sm text-slate-400 mb-6 text-center">Bandingkan efisiensi pendinginan AC Bersih vs Kotor (dalam bulan)</p>

                                {/* Chart Container */}
                                <div className="w-full max-w-150 h-75 md:h-87.5 mx-auto bg-slate-900 rounded-xl p-2 relative">
                                    <canvas ref={chartRef}></canvas>
                                </div>

                                <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
                                    <button onClick={() => setChartMode('kotor')} className={`px-5 py-2.5 rounded-lg text-sm font-bold transition border ${chartMode === 'kotor' ? 'bg-red-500/20 text-red-400 border-red-500/50' : 'bg-red-500/5 text-red-500/60 border-red-500/20'}`}>Simulasi Tanpa Cuci</button>
                                    <button onClick={() => setChartMode('bersih')} className={`px-5 py-2.5 rounded-lg text-sm font-bold transition border ${chartMode === 'bersih' ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/50' : 'bg-emerald-500/5 text-emerald-500/60 border-emerald-500/20'}`}>Simulasi Rutin Cuci</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Accordion */}
            <section className="py-16 bg-slate-50">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-extrabold text-slate-900">Pertanyaan Sering Ditanyakan</h2>
                    </div>

                    <div className="space-y-4">
                        {[
                            { q: "Apakah ada biaya kunjungan/transport?", a: "Gratis biaya transport untuk wilayah jangkauan kami (radius 5 KM dari titik teknisi terdekat). Jika di luar jangkauan, akan ada biaya transport tambahan mulai dari Rp 25.000." },
                            { q: "Bagaimana sistem garansinya?", a: "Kami memberikan garansi 14 hari untuk kebocoran setelah cuci, dan 30 hari untuk pengisian freon / penggantian sparepart. Simpan nota digital yang dikirim via WhatsApp sebagai bukti klaim." },
                            { q: "Apakah melayani servis di Apartemen / Gedung Perkantoran?", a: "Tentu. Namun pastikan Anda sudah mengurus Surat Izin Kerja (SIK) atau persetujuan dari pihak Building Management (BM) gedung sebelum teknisi kami datang." }
                        ].map((faq, idx) => (
                            <div key={idx} className="bg-white border border-slate-200 rounded-xl overflow-hidden">
                                <button className="w-full px-6 py-4 text-left font-bold text-slate-800 flex justify-between items-center focus:outline-none" onClick={() => toggleFaq(idx)}>
                                    <span>{faq.q}</span>
                                    <span className={`text-blue-600 text-xl font-bold transform transition-transform duration-300 ${openFaq === idx ? 'rotate-45' : ''}`}>+</span>
                                </button>
                                <div className={`bg-slate-50 text-slate-600 transition-all duration-300 overflow-hidden ${openFaq === idx ? 'max-h-96 px-6 py-4 border-t border-slate-100' : 'max-h-0 px-6 py-0'}`}>
                                    {faq.a}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-slate-950 text-slate-300 pt-16 pb-8 border-t-[6px] border-blue-600">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
                        <div className="lg:col-span-1">
                            <span className="font-bold text-2xl tracking-tight text-white">Cylare<span className="text-blue-600">Tech</span></span>
                            <p className="mt-4 text-sm leading-relaxed">
                                Penyedia layanan tata udara spesialis pendingin ruangan profesional. Kenyamanan, kebersihan, dan transparansi adalah prioritas kami dalam melayani keluarga Indonesia.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-bold text-lg text-white mb-4">Layanan Cepat</h4>
                            <ul className="space-y-3 text-sm">
                                <li><span className="hover:text-blue-400 cursor-pointer transition">Cuci AC Split & Cassette</span></li>
                                <li><span className="hover:text-blue-400 cursor-pointer transition">Bongkar Pasang (Pindahan)</span></li>
                                <li><span className="hover:text-blue-400 cursor-pointer transition">Isi Freon (R32, R410, R22)</span></li>
                                <li><span className="hover:text-blue-400 cursor-pointer transition">Perbaikan PCB & Sensor</span></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-lg text-white mb-4">Hubungi Kami</h4>
                            <ul className="space-y-3 text-sm">
                                <li className="flex items-start gap-3"><span className="text-blue-600 mt-0.5">📞</span><span>+62 812-3456-7890</span></li>
                                <li className="flex items-start gap-3"><span className="text-blue-600 mt-0.5">📧</span><span>cs@cylaretech.com</span></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-lg text-white mb-4">Jam Operasional</h4>
                            <div className="bg-slate-900 p-4 rounded-lg border border-slate-800 text-sm">
                                <div className="flex justify-between mb-2"><span>Senin - Jumat</span><span className="font-bold text-white">08.00 - 18.00</span></div>
                                <div className="flex justify-between mb-2"><span>Sabtu</span><span className="font-bold text-white">09.00 - 16.00</span></div>
                                <div className="flex justify-between pt-2 border-t border-slate-700"><span className="text-orange-400">Minggu / Libur</span><span className="font-bold text-orange-400">By Appt</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}