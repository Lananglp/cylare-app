"use client";
import { useState, useMemo } from 'react';
import { ShoppingBag, X, Menu, Star, CheckCircle, ArrowRight, ShieldCheck, Zap, ArrowUpRight, MessageCircle } from 'lucide-react';
import DemoWebView from '@/components/app/demo-web-view';

// --- TIPE DATA ---
type Category = 'Semua' | 'Baju' | 'Jaket' | 'Celana' | 'Kacamata' | 'Topi';

interface Product {
    id: string;
    name: string;
    category: Category;
    price: number;
    image: string;
    rating: number;
    reviews: number;
}

interface CartItem {
    product: Product;
    quantity: number;
}

// --- DATA DUMMY PRODUK ---
const PRODUCTS: Product[] = [
    // Baju - 50K
    { id: 'b1', name: 'T-Shirt Classic Noir', category: 'Baju', price: 50000, rating: 4.8, reviews: 124, image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=500' },
    { id: 'b2', name: 'Oversized Minimalist Blanc', category: 'Baju', price: 50000, rating: 4.9, reviews: 89, image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&q=80&w=500' },
    { id: 'b3', name: 'Graphic Print "Silence"', category: 'Baju', price: 50000, rating: 4.7, reviews: 56, image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&q=80&w=500' },
    // Jaket - 100K
    { id: 'j1', name: 'Windbreaker Urban Shield', category: 'Jaket', price: 100000, rating: 4.9, reviews: 210, image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&q=80&w=500' },
    { id: 'j2', name: 'Denim Jacket Washed Black', category: 'Jaket', price: 100000, rating: 4.8, reviews: 145, image: 'https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef?auto=format&fit=crop&q=80&w=500' },
    { id: 'j3', name: 'Varsity "Cylare" Edition', category: 'Jaket', price: 100000, rating: 5.0, reviews: 88, image: 'https://images.unsplash.com/photo-1559551409-dadc959f76b8?auto=format&fit=crop&q=80&w=500' },
    // Celana - 80K
    { id: 'c1', name: 'Cargo Pants Utility Dark', category: 'Celana', price: 80000, rating: 4.7, reviews: 167, image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&q=80&w=500' },
    { id: 'c2', name: 'Chino Slim Fit Essential', category: 'Celana', price: 80000, rating: 4.8, reviews: 230, image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&q=80&w=500' },
    { id: 'c3', name: 'Shorts Relaxed Monochrome', category: 'Celana', price: 80000, rating: 4.6, reviews: 94, image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&q=80&w=500' },
    // Kacamata - 50K
    { id: 'k1', name: 'Retro Square Shades', category: 'Kacamata', price: 50000, rating: 4.9, reviews: 312, image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&q=80&w=500' },
    { id: 'k2', name: 'Aviator Classic Noir', category: 'Kacamata', price: 50000, rating: 4.8, reviews: 178, image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&q=80&w=500' },
    // Topi - 75K
    { id: 't1', name: 'Baseball Cap Minimalist', category: 'Topi', price: 75000, rating: 4.8, reviews: 105, image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&q=80&w=500' },
    { id: 't2', name: 'Bucket Hat Reversible', category: 'Topi', price: 75000, rating: 4.7, reviews: 82, image: 'https://images.unsplash.com/photo-1614980753444-ea667794ccf6?auto=format&fit=crop&q=80&w=500' },
];

const TESTIMONIALS = [
    { id: 1, name: 'Bima Saputra', role: 'Mahasiswa', text: '"Awalnya ragu karena harganya murah banget untuk ukuran distro. Pas barangnya sampai, kaget! Kualitas kain bajunya beneran premium, dingin dan pas di badan. Bakal langganan terus di Cylare!"', rating: 5 },
    { id: 2, name: 'Rizky Pratama', role: 'Pekerja Kreatif', text: '"Jaket Windbreakernya jadi andalan buat riding malam. Desainnya minimalis, gak norak, dan yang paling penting build quality-nya rapi. Pengalaman belanja via WA juga fast respon banget."', rating: 5 },
    { id: 3, name: 'Andi Kusuma', role: 'Fotografer', text: '"Suka banget sama konsep monokromnya. Celana cargonya nyaman dipakai gerak seharian buat motret. Potongan harganya sangat worth it dengan barang yang didapat. Sangat direkomendasikan!"', rating: 4.5 },
];

// --- FORMAT RUPIAH ---
const formatIDR = (price: number) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(price);
};

export default function App() {
    const [activeCategory, setActiveCategory] = useState<Category>('Semua');
    const [cart, setCart] = useState<CartItem[]>([]);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // --- LOGIKA KERANJANG ---
    const addToCart = (product: Product) => {
        setCart(prev => {
            const existing = prev.find(item => item.product.id === product.id);
            if (existing) {
                return prev.map(item => item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
            }
            return [...prev, { product, quantity: 1 }];
        });
        setIsCartOpen(true);
    };

    const removeFromCart = (productId: string) => {
        setCart(prev => prev.filter(item => item.product.id !== productId));
    };

    const updateQuantity = (productId: string, delta: number) => {
        setCart(prev => prev.map(item => {
            if (item.product.id === productId) {
                const newQuantity = Math.max(1, item.quantity + delta);
                return { ...item, quantity: newQuantity };
            }
            return item;
        }));
    };

    const cartTotal = useMemo(() => cart.reduce((total, item) => total + (item.product.price * item.quantity), 0), [cart]);
    const cartCount = useMemo(() => cart.reduce((count, item) => count + item.quantity, 0), [cart]);

    // --- LOGIKA CHECKOUT WHATSAPP ---
    const handleCheckoutWA = () => {
        if (cart.length === 0) return;

        const phoneNumber = "6281234567890"; // Ganti dengan nomor WA bisnis yang asli
        let message = "Halo *Cylare Fashion*, saya tertarik untuk memesan produk berikut:\n\n";

        cart.forEach((item, index) => {
            message += `${index + 1}. ${item.product.name}\n   └ ${item.quantity} x ${formatIDR(item.product.price)} = ${formatIDR(item.product.price * item.quantity)}\n`;
        });

        message += `\n*Total Pesanan: ${formatIDR(cartTotal)}*\n\n`;
        message += "Mohon informasi untuk ketersediaan stok, ongkos kirim, dan metode pembayarannya. Terima kasih! 🖤";

        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
    };

    // --- FILTER PRODUK ---
    const filteredProducts = activeCategory === 'Semua'
        ? PRODUCTS
        : PRODUCTS.filter(p => p.category === activeCategory);

    return (
        <div className="min-h-screen bg-white text-gray-900 selection:bg-black selection:text-white flex flex-col">

            <DemoWebView className="bg-neutral-950 border-neutral-900" />

            {/* --- HEADER (SEMANTIC: <header>, <nav>) --- */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 transition-all">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        {/* Logo */}
                        <div className="shrink-0 flex items-center gap-2 cursor-pointer">
                            <div className="w-8 h-8 bg-black rounded-sm flex items-center justify-center">
                                <span className="text-white font-bold text-xl leading-none">C</span>
                            </div>
                            <span className="font-extrabold text-2xl tracking-tighter uppercase">Cylare.</span>
                        </div>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex space-x-8">
                            {['Beranda', 'Koleksi', 'Tentang Kami', 'Testimoni'].map((item) => (
                                <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-sm font-medium text-gray-600 hover:text-black transition-colors uppercase tracking-widest">
                                    {item}
                                </a>
                            ))}
                        </nav>

                        {/* Cart & Mobile Menu Toggle */}
                        <div className="flex items-center space-x-5">
                            <button
                                onClick={() => setIsCartOpen(true)}
                                className="relative p-2 text-gray-600 hover:text-black transition-colors"
                                aria-label="Buka Keranjang"
                            >
                                <ShoppingBag className="w-6 h-6" />
                                {cartCount > 0 && (
                                    <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-black rounded-full">
                                        {cartCount}
                                    </span>
                                )}
                            </button>
                            <button
                                className="md:hidden p-2 text-gray-600"
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                aria-label="Menu"
                            >
                                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Navigation Dropdown */}
                {isMobileMenuOpen && (
                    <nav className="md:hidden bg-white border-t border-gray-100 p-4 space-y-4">
                        {['Beranda', 'Koleksi', 'Tentang Kami', 'Testimoni'].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase().replace(' ', '-')}`}
                                className="block text-base font-medium text-gray-800 uppercase tracking-wider"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {item}
                            </a>
                        ))}
                    </nav>
                )}
            </header>

            {/* --- MAIN CONTENT (SEMANTIC: <main>) --- */}
            <main className="grow pt-20">

                {/* SECTION 1: HERO (NEW EDITORIAL DESIGN) */}
                <section id="beranda" className="relative bg-white pt-24 pb-16 md:pt-32 md:pb-24 border-b border-black/10 overflow-hidden">
                    <div className="absolute -top-10 left-0 right-0 overflow-hidden whitespace-nowrap opacity-5 pointer-events-none select-none">
                        <h2 className="text-[15rem] font-black uppercase tracking-tighter">CYLARE FASHION CYLARE</h2>
                    </div>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

                        {/* Background Grid Lines (Estetik Minimalis) */}
                        <div className="absolute inset-0 grid grid-cols-2 md:grid-cols-4 gap-4 pointer-events-none opacity-[0.03] z-0">
                            <div className="h-full border-x border-black"></div>
                            <div className="h-full border-r border-black"></div>
                            <div className="h-full border-r border-black hidden md:block"></div>
                            <div className="h-full border-r border-black hidden md:block"></div>
                        </div>

                        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8 relative z-10">

                            {/* Text Content */}
                            <div className="w-full lg:w-1/2 pt-10">
                                <div className="flex items-center gap-4 mb-6">
                                    <span className="w-12 h-0.5 bg-black"></span>
                                    <span className="text-sm font-bold uppercase tracking-widest text-gray-500">Koleksi 2026</span>
                                </div>

                                <h1 className="text-6xl sm:text-7xl lg:text-[5.5rem] font-black uppercase tracking-tighter leading-[0.9] mb-8 text-black">
                                    Esensi <br />
                                    <span className="text-transparent bg-clip-text bg-linear-to-b from-black to-gray-500">
                                        Monokrom.
                                    </span>
                                </h1>

                                <div className="pl-5 border-l-2 border-black mb-10">
                                    <p className="text-lg text-gray-600 max-w-md leading-relaxed">
                                        Menghadirkan harmoni dalam kesederhanaan. Koleksi eksklusif Cylare dirancang untuk menonjolkan karakter autentik Anda tanpa perlu berteriak.
                                    </p>
                                </div>

                                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                                    <a href="#koleksi" className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white bg-black hover:bg-gray-900 transition-colors uppercase tracking-wider text-sm">
                                        Eksplorasi Sekarang
                                        <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </a>

                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-black">
                                            <Star className="w-4 h-4 fill-current" />
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-sm font-bold uppercase">Kualitas Premium</span>
                                            <span className="text-xs text-gray-500">100% Original</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Image Collage */}
                            <div className="w-full lg:w-1/2 relative h-125 sm:h-162.5] mt-8 lg:mt-0">
                                {/* Image 1 (Main/Back) */}
                                <div className="absolute top-0 right-0 w-4/5 h-[90%] bg-gray-100 z-10 overflow-hidden">
                                    <img
                                        src="https://images.unsplash.com/photo-1550246140-5119ae4790b8?auto=format&fit=crop&q=80&w=800"
                                        alt="Model pria gaya monokrom"
                                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
                                    />
                                </div>

                                {/* Image 2 (Front/Overlap) */}
                                <div className="absolute bottom-0 left-0 w-3/5 h-[55%] bg-white p-2 sm:p-4 shadow-2xl z-20">
                                    <div className="w-full h-full bg-gray-100 overflow-hidden">
                                        <img
                                            src="https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&q=80&w=600"
                                            alt="Detail streetwear"
                                            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
                                        />
                                    </div>
                                    {/* Badge */}
                                    <div className="absolute -left-4 -top-4 bg-black text-white w-16 h-16 flex flex-col items-center justify-center rounded-full shadow-lg transform -rotate-12 hover:rotate-0 transition-transform cursor-default">
                                        <span className="text-xs font-black leading-none">NEW</span>
                                        <span className="text-[10px] font-medium leading-none">DROP</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION 1: HERO */}
                {/* <section id="beranda" className="relative bg-gray-50 overflow-hidden">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 md:pt-32 md:pb-40">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <div className="z-10">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/5 border border-black/10 text-xs font-semibold uppercase tracking-wider mb-6">
                                    <span className="w-2 h-2 rounded-full bg-black animate-pulse"></span>
                                    Koleksi Terbaru 2026
                                </div>
                                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-black leading-[1.1] mb-6">
                                    GAYA AUTENTIK, <br />
                                    <span className="text-transparent bg-clip-text bg-linear-to-r from-black to-gray-500">
                                        TANPA KOMPROMI.
                                    </span>
                                </h1>
                                <p className="text-lg text-gray-600 mb-8 max-w-lg leading-relaxed">
                                    Tingkatkan kepercayaan diri Anda dengan koleksi distro eksklusif dari Cylare Fashion. Desain minimalis yang menonjolkan karakter, dirancang dengan kualitas material premium namun tetap ramah di kantong.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <a href="#koleksi" className="inline-flex justify-center items-center px-8 py-4 text-base font-bold text-white bg-black hover:bg-gray-800 rounded-none transition-all duration-300 transform hover:-translate-y-1">
                                        Lihat Koleksi <ArrowRight className="ml-2 w-5 h-5" />
                                    </a>
                                    <div className="flex items-center gap-3 px-4 py-2">
                                        <div className="flex -space-x-3">
                                            <img className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100" alt="User" />
                                            <img className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=100" alt="User" />
                                            <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center text-xs font-bold">+2k</div>
                                        </div>
                                        <div className="text-sm">
                                            <div className="font-bold">Dipercaya 2000+</div>
                                            <div className="text-gray-500">Pelanggan Puas</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="relative z-10 hidden md:block">
                                <div className="absolute inset-0 bg-black translate-x-4 translate-y-4"></div>
                                <img
                                    src="https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&q=80&w=800"
                                    alt="Model pria mengenakan pakaian streetwear monokrom"
                                    className="relative z-10 w-full h-[600px] object-cover border-2 border-black grayscale hover:grayscale-0 transition-all duration-700"
                                />
                            </div>
                        </div>
                    </div>
                    Background Decorative Text
                    <div className="absolute -bottom-10 left-0 right-0 overflow-hidden whitespace-nowrap opacity-5 pointer-events-none select-none">
                        <h2 className="text-[15rem] font-black uppercase tracking-tighter">CYLARE FASHION CYLARE</h2>
                    </div>
                </section> */}

                {/* SECTION 2: VALUE PROPOSITION / MENGAPA MEMILIH KAMI */}
                <section id="tentang-kami" className="py-20 bg-black text-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center max-w-2xl mx-auto mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4 uppercase tracking-tight">Lebih Dari Sekadar Pakaian</h2>
                            <p className="text-gray-400">Kami memahami bahwa pakaian adalah investasi visual. Oleh karena itu, Cylare hadir memberikan standar baru untuk pakaian distro harian Anda.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                            {[
                                { icon: ShieldCheck, title: "Kualitas Premium", desc: "Menggunakan bahan pilihan yang sejuk, tahan lama, dan tidak mudah luntur meski dicuci berkali-kali." },
                                { icon: Zap, title: "Desain Eksklusif", desc: "Diproduksi dalam jumlah terbatas. Anda tidak akan mudah menemukan orang dengan baju yang sama di jalanan." },
                                { icon: CheckCircle, title: "Harga Terjangkau", desc: "Kualitas mall dengan harga jalanan. Potong jalur distribusi agar Anda mendapatkan harga paling jujur." }
                            ].map((feature, idx) => (
                                <div key={idx} className="p-8 border border-white/10 hover:border-white/40 transition-colors bg-white/5">
                                    <feature.icon className="w-12 h-12 mb-6 text-white" />
                                    <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                                    <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* SECTION 3: KATALOG PRODUK */}
                <section id="koleksi" className="py-24 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                            <div>
                                <h2 className="text-4xl font-black uppercase tracking-tight mb-2">Katalog Estetik</h2>
                                <p className="text-gray-500 max-w-md">Pilih kategori dan temukan gaya yang paling merepresentasikan diri Anda hari ini.</p>
                            </div>

                            {/* Filter Kategori */}
                            <div className="flex flex-wrap gap-2">
                                {(['Semua', 'Baju', 'Jaket', 'Celana', 'Kacamata', 'Topi'] as Category[]).map(category => (
                                    <button
                                        key={category}
                                        onClick={() => setActiveCategory(category)}
                                        className={`px-5 py-2 text-sm font-semibold rounded-full border transition-all ${activeCategory === category
                                                ? 'bg-black text-white border-black'
                                                : 'bg-white text-gray-600 border-gray-200 hover:border-black'
                                            }`}
                                    >
                                        {category}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Grid Produk */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {filteredProducts.map((product) => (
                                <article key={product.id} className="group flex flex-col cursor-pointer">
                                    <div className="relative overflow-hidden bg-gray-100 aspect-4/5 mb-4">
                                        <img
                                            src={product.image}
                                            alt={`Produk ${product.name}`}
                                            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 grayscale group-hover:grayscale-0"
                                        />
                                        {/* Badge Kategori */}
                                        <div className="absolute top-3 left-3 bg-white px-3 py-1 text-xs font-bold uppercase tracking-wider shadow-sm">
                                            {product.category}
                                        </div>
                                        {/* Tombol Add to Cart (Hover) */}
                                        <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                            <button
                                                onClick={(e) => { e.stopPropagation(); addToCart(product); }}
                                                className="w-full bg-black text-white py-3 font-bold text-sm uppercase flex items-center justify-center gap-2 hover:bg-gray-800"
                                            >
                                                <ShoppingBag className="w-4 h-4" /> Tambah ke Tas
                                            </button>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex justify-between items-start mb-1">
                                            <h3 className="font-bold text-lg leading-tight line-clamp-1 group-hover:text-gray-600 transition-colors">{product.name}</h3>
                                        </div>
                                        <div className="flex items-center gap-2 mb-2">
                                            <div className="flex items-center text-yellow-400">
                                                <Star className="w-3 h-3 fill-current" />
                                                <span className="text-xs text-gray-600 font-semibold ml-1">{product.rating}</span>
                                            </div>
                                            <span className="text-xs text-gray-400">({product.reviews} ulasan)</span>
                                        </div>
                                        <p className="font-black text-lg">{formatIDR(product.price)}</p>
                                    </div>
                                </article>
                            ))}
                        </div>

                        {filteredProducts.length === 0 && (
                            <div className="text-center py-20 text-gray-500">
                                <p>Produk untuk kategori ini sedang kosong.</p>
                            </div>
                        )}
                    </div>
                </section>

                {/* SECTION 4: PSIKOLOGI MARKETING / SOCIAL PROOF STRIP */}
                <section className="border-y border-black bg-white overflow-hidden py-6">
                    <div className="flex whitespace-nowrap animate-marquee items-center gap-8 text-xl font-bold uppercase tracking-widest text-black">
                        <span>⚡️ STOK TERBATAS</span> <span className="text-gray-300">•</span>
                        <span>DIKIRIM DALAM 24 JAM</span> <span className="text-gray-300">•</span>
                        <span>GARANSI TUKAR SIZE</span> <span className="text-gray-300">•</span>
                        <span>100% PRODUK ORIGINAL</span> <span className="text-gray-300">•</span>
                        <span>⚡️ STOK TERBATAS</span> <span className="text-gray-300">•</span>
                        <span>DIKIRIM DALAM 24 JAM</span> <span className="text-gray-300">•</span>
                        <span>GARANSI TUKAR SIZE</span> <span className="text-gray-300">•</span>
                        <span>100% PRODUK ORIGINAL</span>
                    </div>
                </section>

                {/* SECTION 5: TESTIMONI & RATING (WAJIB) */}
                <section id="testimoni" className="py-24 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-black uppercase tracking-tight mb-4">Kata Mereka</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                                Bukan sekadar klaim sepihak. Ini adalah bukti nyata dari mereka yang telah memutuskan untuk meng-upgrade gaya mereka bersama Cylare.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {TESTIMONIALS.map((testi) => (
                                <div key={testi.id} className="bg-white p-8 shadow-sm border border-gray-100 flex flex-col h-full relative">
                                    <div className="text-6xl text-gray-200 absolute top-4 left-6 font-serif opacity-50">&ldquo;</div>
                                    <div className="relative z-10 grow">
                                        <div className="flex mb-4">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} className={`w-5 h-5 ${i < Math.floor(testi.rating) ? 'text-black fill-current' : 'text-gray-300'}`} />
                                            ))}
                                        </div>
                                        <p className="text-gray-700 italic mb-6 leading-relaxed text-lg">
                                            {testi.text}
                                        </p>
                                    </div>
                                    <div className="border-t border-gray-100 pt-4 mt-auto">
                                        <p className="font-bold text-black uppercase tracking-wider">{testi.name}</p>
                                        <p className="text-sm text-gray-500">{testi.role}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-16 text-center">
                            <p className="text-xl font-bold mb-6">Sekarang giliran Anda. Buktikan sendiri kualitasnya.</p>
                            <a href="#koleksi" className="inline-flex items-center justify-center px-8 py-4 border-2 border-black font-bold uppercase hover:bg-black hover:text-white transition-colors">
                                Mulai Belanja <ArrowUpRight className="ml-2 w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </section>

            </main>

            {/* --- FOOTER (SEMANTIC: <footer>) --- */}
            <footer className="bg-black text-white pt-20 pb-10 border-t-4 border-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
                        <div className="md:col-span-2">
                            <span className="font-extrabold text-3xl tracking-tighter uppercase mb-6 block text-white">Cylare.</span>
                            <p className="text-gray-400 max-w-md leading-relaxed text-sm">
                                Cylare Fashion adalah brand streetwear lokal yang fokus pada estetik monokrom, kualitas bahan premium, dan harga yang masuk akal. Kami percaya gaya yang bagus tidak harus menguras isi dompet.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-bold uppercase tracking-widest text-sm mb-6 text-gray-200">Navigasi</h4>
                            <ul className="space-y-3">
                                {['Beranda', 'Koleksi', 'Tentang Kami', 'Testimoni'].map((item) => (
                                    <li key={item}>
                                        <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-gray-400 hover:text-white transition-colors text-sm">
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold uppercase tracking-widest text-sm mb-6 text-gray-200">Bantuan</h4>
                            <ul className="space-y-3">
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Cara Pemesanan</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Konfirmasi Pembayaran</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Syarat & Ketentuan</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Kebijakan Privasi</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-500 text-sm">
                            &copy; {new Date().getFullYear()} Cylare Fashion. All rights reserved.
                        </p>
                        <p className="text-gray-500 text-sm flex items-center gap-1">
                            Didesain dengan gaya, dikirim dengan cinta.
                        </p>
                    </div>
                </div>
            </footer>

            {/* --- MODAL KERANJANG (CART SLIDE-OVER) --- */}
            {isCartOpen && (
                <div className="fixed inset-0 z-100 overflow-hidden">
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" onClick={() => setIsCartOpen(false)} />

                    <div className="absolute inset-y-0 right-0 max-w-md w-full flex">
                        <div className="h-full flex flex-col bg-white shadow-2xl w-full animate-slide-in-right">

                            {/* Cart Header */}
                            <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
                                <h2 className="text-xl font-black uppercase tracking-tight flex items-center gap-2">
                                    <ShoppingBag className="w-5 h-5" /> Tas Belanja ({cartCount})
                                </h2>
                                <button onClick={() => setIsCartOpen(false)} className="text-gray-400 hover:text-black transition-colors p-2">
                                    <X className="w-6 h-6" />
                                </button>
                            </div>

                            {/* Cart Items */}
                            <div className="flex-1 overflow-y-auto p-6">
                                {cart.length === 0 ? (
                                    <div className="h-full flex flex-col items-center justify-center text-center text-gray-500 space-y-4">
                                        <ShoppingBag className="w-16 h-16 text-gray-200" />
                                        <p className="text-lg">Tas belanja Anda masih kosong.</p>
                                        <button
                                            onClick={() => setIsCartOpen(false)}
                                            className="text-black font-bold uppercase underline underline-offset-4 hover:text-gray-600"
                                        >
                                            Mulai Belanja
                                        </button>
                                    </div>
                                ) : (
                                    <ul className="space-y-6">
                                        {cart.map((item) => (
                                            <li key={item.product.id} className="flex py-2">
                                                <div className="h-24 w-20 shrink-0 overflow-hidden bg-gray-100 rounded-sm">
                                                    <img
                                                        src={item.product.image}
                                                        alt={item.product.name}
                                                        className="h-full w-full object-cover object-center grayscale"
                                                    />
                                                </div>

                                                <div className="ml-4 flex flex-1 flex-col justify-center">
                                                    <div>
                                                        <div className="flex justify-between text-base font-bold text-gray-900">
                                                            <h3 className="line-clamp-2 pr-4">{item.product.name}</h3>
                                                            <p className="ml-4 whitespace-nowrap">{formatIDR(item.product.price)}</p>
                                                        </div>
                                                        <p className="mt-1 text-sm text-gray-500">{item.product.category}</p>
                                                    </div>
                                                    <div className="flex flex-1 items-end justify-between text-sm">
                                                        <div className="flex items-center border border-gray-200 rounded-sm">
                                                            <button onClick={() => updateQuantity(item.product.id, -1)} className="px-3 py-1 text-gray-600 hover:bg-gray-100 transition-colors">-</button>
                                                            <span className="px-3 py-1 font-semibold border-x border-gray-200 w-8 text-center">{item.quantity}</span>
                                                            <button onClick={() => updateQuantity(item.product.id, 1)} className="px-3 py-1 text-gray-600 hover:bg-gray-100 transition-colors">+</button>
                                                        </div>
                                                        <div className="flex">
                                                            <button
                                                                type="button"
                                                                onClick={() => removeFromCart(item.product.id)}
                                                                className="font-bold text-red-500 hover:text-red-700 uppercase text-xs tracking-wider"
                                                            >
                                                                Hapus
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>

                            {/* Cart Footer / Checkout */}
                            {cart.length > 0 && (
                                <div className="border-t border-gray-100 px-6 py-6 bg-gray-50">
                                    <div className="flex justify-between text-base font-bold text-gray-900 mb-2">
                                        <p>Subtotal</p>
                                        <p>{formatIDR(cartTotal)}</p>
                                    </div>
                                    <p className="text-sm text-gray-500 mb-6">Ongkos kirim akan dihitung saat konfirmasi di WhatsApp.</p>

                                    <button
                                        // onClick={handleCheckoutWA}
                                        className="w-full flex items-center justify-center gap-2 rounded-none border border-transparent bg-black px-6 py-4 text-base font-bold text-white shadow-sm hover:bg-gray-800 transition-colors uppercase tracking-wider"
                                    >
                                        <MessageCircle className="w-5 h-5" />
                                        Checkout via WhatsApp
                                    </button>

                                    <div className="mt-4 flex justify-center text-center text-sm text-gray-500">
                                        <p>
                                            atau{' '}
                                            <button
                                                type="button"
                                                className="font-bold text-black hover:text-gray-700 underline underline-offset-4"
                                                onClick={() => setIsCartOpen(false)}
                                            >
                                                Lanjut Belanja
                                            </button>
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}

            {/* Global CSS Inject untuk Animasi Marquee sederhana agar file tetap single-file */}
            <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        @keyframes slideInRight {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        .animate-slide-in-right {
          animation: slideInRight 0.3s ease-out forwards;
        }
        html {
          scroll-behavior: smooth;
        }
      `}</style>
        </div>
    );
}