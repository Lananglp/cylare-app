"use client"
import { AppHeader } from '@/components/app/header';
import LanguageSwitcher from '@/components/language-switcher';
import { Button } from '@/components/ui/button';
import { authClient } from '@/lib/auth-client';
import { dataItems } from '@/types/global';
import { ArrowUpRightIcon, BadgeCheckIcon, CircleIcon, CloudAlertIcon, CodeXmlIcon, EyeOffIcon, HeartOffIcon, PanelRightIcon, RocketIcon, SearchIcon, StarIcon, ThumbsDownIcon, TrendingDownIcon } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

function Page() {
    const language = useTranslations("HomePage");
    const { 
        data: session, 
        isPending, //loading state
        error, //error object
        refetch //refetch the session
    } = authClient.useSession();

    const features = [
        {
            name: 'Sulit Ditemukan',
            description:
                'Sebagian besar pelanggan mencari informasi melalui internet. Tanpa website, bisnis Anda lebih sulit ditemukan dan dipertimbangkan.',
            icon: EyeOffIcon,
        },
        {
            name: 'Diragukan Kredibilitasnya',
            description:
                'Ketika tidak ada sumber informasi resmi, calon pelanggan bisa meragukan keaslian dan profesionalitas usaha Anda.',
            icon: HeartOffIcon,
        },
        {
            name: 'Kehilangan Peluang',
            description:
                'Banyak keputusan dibuat sebelum Anda sempat berbicara. Tanpa kehadiran online yang jelas, peluang dapat berpindah ke kompetitor.',
            icon: TrendingDownIcon,
        },
        {
            name: 'Tertinggal dari Kompetitor',
            description:
                'Bisnis lain sudah membangun identitas digital yang kuat. Ketidakhadiran website membuat Anda terlihat kurang siap di tengah persaingan.',
            icon: ThumbsDownIcon,
        },
    ]

    const solution = [
        {
            name: 'Mudah Ditemukan',
            description:
                'Website membantu bisnis Anda hadir di hasil pencarian dan menjadi sumber informasi resmi yang dapat diakses kapan saja.',
            icon: SearchIcon,
        },
        {
            name: 'Identitas yang Jelas',
            description:
                'Menampilkan profil, layanan, dan nilai bisnis secara terstruktur sehingga pengunjung memahami siapa Anda dan apa yang Anda tawarkan.',
            icon: BadgeCheckIcon,
        },
        {
            name: 'Mengarahkan Keputusan',
            description:
                'Informasi yang lengkap dan tersusun rapi membantu calon pelanggan mengambil keputusan dengan lebih yakin.',
            icon: ArrowUpRightIcon,
        },
        {
            name: 'Siap Berkembang',
            description:
                'Website dapat dikembangkan sesuai kebutuhan bisnis, baik untuk promosi, sistem pemesanan, maupun ekspansi layanan.',
            icon: RocketIcon,
        }
    ]

    const services = [
        {
            name: 'Website Company Profile',
            description:
                'Menampilkan profil bisnis, layanan, portofolio, dan informasi kontak secara jelas untuk membangun identitas yang kuat.',
            icon: CodeXmlIcon,
        },
        {
            name: 'Website Custom',
            description:
                'Pengembangan website dengan fitur khusus sesuai kebutuhan, seperti sistem pemesanan, dashboard, atau integrasi lainnya.',
            icon: CodeXmlIcon,
        },
        {
            name: 'Tampilan Multi Perangkat',
            description:
                'Dirancang agar tetap nyaman digunakan di desktop, tablet, maupun smartphone.',
            icon: CodeXmlIcon,
        },
        {
            name: 'Pengelolaan Konten',
            description:
                'Memungkinkan Anda mengelola artikel, produk, atau informasi tanpa perlu memahami teknis pemrograman.',
            icon: CodeXmlIcon,
        },
        {
            name: 'Optimasi Dasar SEO',
            description:
                'Struktur website disiapkan agar mudah diindeks mesin pencari dan mendukung visibilitas bisnis Anda.',
            icon: CodeXmlIcon,
        },
        {
            name: 'Pengembangan Berkelanjutan',
            description:
                'Website dapat dikembangkan lebih lanjut sesuai pertumbuhan dan kebutuhan bisnis di masa depan.',
            icon: CodeXmlIcon,
        }
    ]

    const superiorities = [
        {
            name: 'Dikembangkan Secara Kustom',
            description:
                'Website dibangun langsung melalui proses pengembangan kode, sehingga tampilan dan fungsinya dapat disesuaikan secara lebih fleksibel sesuai kebutuhan bisnis Anda. Pendekatan ini memberikan ruang pengembangan yang lebih luas dibandingkan platform instan yang memiliki batasan sistem.',
            icon: StarIcon,
        },
        {
            name: 'Dirancang Berdasarkan Tujuan Bisnis',
            description:
                'Setiap bagian website dirancang dengan mempertimbangkan kebutuhan komunikasi, target pasar, dan arah pertumbuhan usaha Anda.',
            icon: StarIcon,
        },
        {
            name: 'Siap Dikembangkan',
            description:
                'Website tidak hanya dibuat untuk kebutuhan saat ini, tetapi disiapkan agar dapat dikembangkan di masa depan tanpa harus membangun ulang dari awal.',
            icon: StarIcon,
        },
        {
            name: 'Proses Pengembangan yang Transparan',
            description:
                'Setiap tahap pengerjaan dikomunikasikan secara terbuka, sehingga Anda mengetahui perkembangan proyek dan dapat memberikan masukan sebelum tahap berikutnya dimulai.',
            icon: StarIcon,
        },
        {
            name: 'Estimasi Waktu yang Realistis',
            description:
                'Durasi pengerjaan disesuaikan dengan tingkat kompleksitas dan revisi yang dibutuhkan. Setiap proyek memiliki karakteristik berbeda, sehingga estimasi waktu akan disampaikan secara transparan di awal dan dapat menyesuaikan jika terjadi perubahan kebutuhan.',
            icon: StarIcon,
        },
    ]

    return (
        // <div>
        //     <AppHeader />
        //     <p>{session?.user.email}</p>
        //     <h1>{language("title")}</h1>
        //     <p>{language("description")}</p>
        //     <Link href="/sign-in">login</Link>
        //     <Link href="/sign-up">register</Link>
        // </div>
        <div className='bg-sky-800/20'>
            <div className="">
                <header className="fixed inset-x-0 top-0 z-50 px-3 py-2 backdrop-blur-sm">
                    <nav aria-label="Global" className="max-w-5xl mx-auto flex items-center justify-between">
                        <div className="flex lg:flex-1">
                            <a href="#" className="-m-1.5 p-1.5 flex items-center gap-2">
                                <span className="sr-only">Cylare</span>
                                <img
                                    alt=""
                                    src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                                    className="size-8"
                                />
                                <span className='inline-block font-medium'>Cylare</span>
                            </a>
                        </div>
                        <div className="flex lg:hidden">
                            <Button
                                type="button"
                                variant={"ghost"}
                                // onClick={() => setMobileMenuOpen(true)}
                                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-neutral-200"
                            >
                                <span className="sr-only">Open main menu</span>
                                <PanelRightIcon aria-hidden="true" className="size-6" />
                            </Button>
                        </div>
                        <div className="hidden lg:flex lg:gap-x-12">
                            {dataItems.navbar.map((item) => (
                                <a key={item.name} href={item.href} className="text-sm/6 text-white">
                                    {item.name}
                                </a>
                            ))}
                        </div>
                        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                            <a href="#" className="text-sm/6 font-semibold text-white">
                                Log in <span aria-hidden="true">&rarr;</span>
                            </a>
                        </div>
                    </nav>
                    {/* <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                        <div className="fixed inset-0 z-50" />
                        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-neutral-900 p-6 sm:max-w-sm sm:ring-1 sm:ring-neutral-100/10">
                            <div className="flex items-center justify-between">
                                <a href="#" className="-m-1.5 p-1.5">
                                    <span className="sr-only">Your Company</span>
                                    <img
                                        alt=""
                                        src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                                        className="h-8 w-auto"
                                    />
                                </a>
                                <button
                                    type="button"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="-m-2.5 rounded-md p-2.5 text-neutral-200"
                                >
                                    <span className="sr-only">Close menu</span>
                                    <XMarkIcon aria-hidden="true" className="size-6" />
                                </button>
                            </div>
                            <div className="mt-6 flow-root">
                                <div className="-my-6 divide-y divide-white/10">
                                    <div className="space-y-2 py-6">
                                        {navigation.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5"
                                            >
                                                {item.name}
                                            </a>
                                        ))}
                                    </div>
                                    <div className="py-6">
                                        <a
                                            href="#"
                                            className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-white hover:bg-white/5"
                                        >
                                            Log in
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </DialogPanel>
                    </Dialog> */}
                </header>

                <div className="relative isolate px-6 pt-14 lg:px-8">
                    <div className='absolute -z-10 inset-0 bg-linear-to-tr from-transparent blur-3xl to-sky-800/20 from-70% to-70%' />
                    <div className='absolute -z-10 inset-0 bg-linear-to-bl from-transparent blur-3xl to-sky-800/20 from-70% to-70%' />
                    {/* <div className='absolute -z-10 inset-x-0 top-24 p-10 -rotate-8 flex items-center justify-center bg-linear-to-tr from-neutral-950 to-transparent from-0% to-100%'></div> */}
                    {/* <div className='absolute -z-10 inset-x-0 bottom-24 rotate-8 p-10 flex items-center justify-center bg-linear-to-t from-neutral-950/20 to-transparent from-0% to-100%'></div> */}
                    <div
                        aria-hidden="true"
                        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                    >
                        <div
                            style={{
                                clipPath:
                                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                            }}
                            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-sky-400 to-sky-900 opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75"
                        />
                    </div>

                    <div
                        aria-hidden="true"
                        className="absolute inset-x-0 top-32 -z-10 transform-gpu overflow-hidden blur-3xl"
                    >
                        <div
                            style={{
                                clipPath:
                                    'ellipse(49% 15% at 50% 50%)',
                            }}
                            className="relative left-[calc(50%-40rem)] aspect-square w-144.5 translate-y-1/2 -rotate-30 bg-linear-to-tr from-sky-400 to-sky-900 opacity-30"
                        />
                    </div>
                    <div className="mx-auto max-w-5xl py-32 sm:py-48 lg:py-56">
                        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                            <div className="relative rounded-full px-3 py-1 text-sm/6 text-neutral-400 ring-1 ring-white/10 hover:ring-white/20">
                                Announcing our next round of funding.{' '}
                                <a href="#" className="font-semibold text-sky-400">
                                    <span aria-hidden="true" className="absolute inset-0" />
                                    Read more <span aria-hidden="true">&rarr;</span>
                                </a>
                            </div>
                        </div>
                        <div className="text-center">
                            <h1 className="text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl">
                                Website adalah fondasi kepercayaan di <span className='text-shadow-[0_0px_20px_rgb(0_150_200/0.5)]'>era digital</span>
                            </h1>
                            <p className="mt-8 text-lg font-medium text-pretty text-neutral-400 sm:text-xl/8">
                                Sebagian besar pelanggan mencari dan membandingkan bisnis melalui internet.
                                Website membantu membangun kredibilitas dan menunjukkan bahwa usaha Anda siap berkembang
                            </p>
                            <div className="mt-10 flex items-center justify-center gap-x-6">
                                <a
                                    href="#"
                                    className="rounded-md bg-sky-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-sky-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
                                >
                                    Get started
                                </a>
                                <a href="#" className="text-sm/6 font-semibold text-white">
                                    Learn more <span aria-hidden="true">→</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div
                        aria-hidden="true"
                        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                    >
                        <div
                            style={{
                                clipPath:
                                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                            }}
                            className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-sky-400 to-sky-900 opacity-30 sm:left-[calc(50%+36rem)] sm:w-288.75"
                        />
                    </div>
                    {/* <div className='absolute inset-x-0 bottom-0 p-10 flex items-center justify-center'>
                        <div className='relative inline-block w-72 h-10 rounded-tr-full border-t-2'>
                            <div className='absolute -left-10 -top-4 inline-block w-72 h-4 rounded-tr-full border-t-2'></div>
                            <div className='absolute -left-20 -top-8 inline-block w-72 h-4 rounded-tr-full border-t-2'></div>
                        </div>
                        <div className='relative inline-block w-72 h-10 rounded-tl-full border-t-2 border-t-'>
                            <div className='absolute -right-10 -top-4 inline-block w-72 h-4 rounded-tl-full border-t-2 border-t-'></div>
                            <div className='absolute -right-20 -top-8 inline-block w-72 h-4 rounded-tl-full border-t-2 border-t-'></div>
                        </div>
                    </div> */}
                </div>
            </div>
            
            {/* <div className="bg-neutral-900 py-24 sm:py-32"> */}
            <div className="relative isolate py-20">
                <div className="mx-auto max-w-4xl px-6 lg:px-8">
                    <div className="mx-auto lg:text-center">
                        <h2 className="text-base/7 font-semibold text-sky-400">Realita Bisnis Digital</h2>
                        <p className="mt-2 text-4xl font-semibold leading-snug tracking-tight text-pretty text-white sm:text-5xl">
                            Apa yang Terjadi Jika Bisnis Anda Tidak Memiliki Website?
                        </p>
                        <p className="mt-6 text-lg/8 text-neutral-300">
                            Di era digital, orang menilai kredibilitas dari jejak online.
                            Tidak adanya website dapat menimbulkan pertanyaan tentang keseriusan dan stabilitas bisnis Anda.
                        </p>
                        {/* <p className="mt-6 text-lg/8 text-neutral-300">
                            Kepercayaan sering kali terbentuk dalam hitungan detik.
                            Jika kesan pertama tidak meyakinkan, keputusan bisa dibuat tanpa Anda.
                        </p> */}
                    </div>
                    <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                            {features.map((feature) => (
                                <div key={feature.name} className="relative pl-16">
                                    <dt className="text-base/7 font-semibold text-white">
                                        <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-sky-800 shadow-xl shadow-neutral-900">
                                            <feature.icon aria-hidden="true" className="size-6 text-white" />
                                        </div>
                                        {feature.name}
                                    </dt>
                                    <dd className="mt-2 text-base/7 text-neutral-400">{feature.description}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
                <div
                    aria-hidden="true"
                    className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-40rem)]"
                >
                    <div
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                        className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-90 bg-linear-to-tr from-sky-400 to-sky-900 opacity-30 sm:left-[calc(50%-20rem)] sm:w-288.75"
                    />
                </div>
            </div>

















            <div className="relative isolate py-20 bg-sky-800/20">
                <div className="mx-auto max-w-5xl xl:max-w-7xl grid grid-cols-1 xl:grid-cols-12 gap-12 px-6 xl:px-0">
                    <div className="col-span-6 my-auto mx-auto lg:max-w-3xl xl:max-w-none lg:text-center xl:text-start">
                        <h2 className="text-base/7 font-semibold text-sky-400">Solusi untuk Bisnis Anda</h2>
                        <p className="mt-2 text-4xl font-semibold leading-snug tracking-tight text-pretty text-white sm:text-5xl">
                            Website yang Mewakili dan Menguatkan Bisnis Anda
                        </p>
                        <p className="mt-6 text-lg/8 text-neutral-300">
                            Website yang tepat tidak hanya membuat bisnis Anda terlihat,
                            tetapi membantu pengunjung memahami siapa Anda, apa yang Anda tawarkan,
                            dan mengapa mereka harus memilih Anda.
                        </p>
                    </div>
                    <div className="col-span-6 p-6">
                        <dl className="space-y-8 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-1">
                            {solution.map((feature) => (
                                <div key={feature.name} className="relative pl-16">
                                    <dt className="text-base/7 font-semibold text-white">
                                        <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-sky-800 shadow-xl shadow-neutral-900">
                                            <feature.icon aria-hidden="true" className="size-6 text-white" />
                                        </div>
                                        {feature.name}
                                    </dt>
                                    <dd className="mt-2 text-base/7 text-neutral-400">{feature.description}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
                <div
                    aria-hidden="true"
                    className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-40rem)]"
                >
                    <div
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                        className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-90 bg-linear-to-tr from-sky-400 to-sky-900 opacity-30 sm:left-[calc(50%-20rem)] sm:w-288.75"
                    />
                </div>
            </div>

















            <div className="relative isolate pb-20 pt-40 mx-auto max-w-7xl px-6 lg:px-8 space-y-12">
                <div className='border-b border-border pb-12'>
                    <h2 className="text-base/7 font-semibold text-sky-400">Layanan yang Saya Tawarkan</h2>
                    <p className="mt-2 text-4xl font-semibold leading-snug tracking-tight text-pretty text-white sm:text-5xl">
                        Jenis Website yang Bisa Anda Pilih
                    </p>
                    <div className="mt-6">
                        <p className="text-lg/8">Saya menyediakan 3 jenis website yang paling umum digunakan bisnis.</p>
                        <p className="text-lg/8">Strukturnya jelas, tujuannya jelas, dan tidak dibuat rumit.</p>
                    </div>
                    <div className="mt-6 max-w-3xl">
                        <p className="text-neutral-300">Semua website dirancang ringan, cepat diakses, dan mudah dikelola.</p>
                        <p className="text-neutral-300">Admin panel tersedia untuk kebutuhan seperti blog, update konten, atau data pendaftaran tanpa sistem yang terlalu kompleks.</p>
                    </div>
                </div>
                <div className='mx-auto max-w-7xl space-y-20'>
                    <div>
                        <div className='flex space-x-8 lg:ps-6'>
                            <div className='hidden lg:block text-9xl font-bold pe-3'>
                                <span>1</span>
                            </div>
                            <div className='w-full'>
                                <h3 className='mb-4 pb-4 text-3xl border-b border-border font-semibold leading-snug tracking-tight text-pretty text-white sm:text-4xl'>Landing Page</h3>
                                <div className='grid grid-cols-1 lg:grid-cols-12 gap-4 border-b border-border lg:divide-x lg:divide-border pb-4 mb-8'>
                                    <div className='lg:col-span-7'>
                                        <p className="mb-6 text-lg/8">Fokus pada satu tujuan utama.</p>
                                        <p className="text-neutral-300">Website satu halaman atau beberapa section yang diarahkan untuk satu aksi:</p>
                                        <p className="mb-6 text-neutral-300">menghubungi, mendaftar, atau melakukan pemesanan.</p>
                                        <p className="mb-6 text-neutral-300">Cocok untuk promosi yang spesifik dan terarah.</p>
                                    </div>
                                    <div className='lg:col-span-5'>
                                        <h6 className='mb-2 text-md font-medium leading-snug tracking-tight text-pretty text-white'>Cocok digunakan untuk:</h6>
                                        <ul className="mb-6 ps-8 list-disc text-neutral-300">
                                            <li>Promosi satu layanan unggulan</li>
                                            <li>Iklan berbayar (Meta Ads / Google Ads)</li>
                                            <li>Pendaftaran event atau webinar</li>
                                            <li>Pre-order produk</li>
                                            <li>Campaign promo terbatas</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className=''>
                                    <h6 className='mb-4 text-md font-medium leading-snug tracking-tight text-pretty text-white'>Contoh Implementasi Nyata:</h6>
                                    <ul className='flex flex-wrap items-center gap-2'>
                                        <li className='w-full lg:w-auto border border-border text-neutral-300 rounded px-3 py-1'>Landing page jasa pembuatan rumah dengan tombol “Konsultasi via WhatsApp”</li>
                                        <li className='w-full lg:w-auto border border-border text-neutral-300 rounded px-3 py-1'>Halaman promosi kursus Bahasa Inggris dengan form pendaftaran</li>
                                        <li className='w-full lg:w-auto border border-border text-neutral-300 rounded px-3 py-1'>Landing page event lomba sekolah dengan sistem daftar online</li>
                                        <li className='w-full lg:w-auto border border-border text-neutral-300 rounded px-3 py-1'>Halaman promo klinik gigi dengan diskon scaling</li>
                                        <li className='w-full lg:w-auto border border-border text-neutral-300 rounded px-3 py-1'>Landing page jasa desain interior khusus apartemen</li>
                                        <li className='w-full lg:w-auto border border-border text-neutral-300 rounded px-3 py-1'>Halaman promosi catering pernikahan</li>
                                        <li className='w-full lg:w-auto border border-border text-neutral-300 rounded px-3 py-1'>Landing page jasa instalasi solar panel</li>
                                        <li className='w-full lg:w-auto border border-border text-neutral-300 rounded px-3 py-1'>Halaman pendaftaran gym dengan paket membership</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='flex space-x-8 lg:ps-6'>
                            <div className='hidden lg:block text-9xl font-bold pe-3'>
                                <span>2</span>
                            </div>
                            <div className='w-full'>
                                <h3 className='mb-4 pb-4 text-3xl border-b border-border font-semibold leading-snug tracking-tight text-pretty text-white sm:text-4xl'>Company Profile</h3>
                                <div className='grid grid-cols-1 lg:grid-cols-12 gap-4 border-b border-border lg:divide-x lg:divide-border pb-4 mb-8'>
                                    <div className='lg:col-span-7'>
                                        <p className="mb-6 text-lg/8">Menampilkan identitas dan membangun kepercayaan.</p>
                                        <p className="text-neutral-300">Website ini berfungsi sebagai wajah resmi bisnis Anda di internet.</p>
                                        <p className="mb-6 text-neutral-300">Bukan untuk promosi satu produk saja, tapi untuk menunjukkan siapa Anda dan apa yang Anda kerjakan.</p>
                                    </div>
                                    <div className='lg:col-span-5'>
                                        <h6 className='mb-2 text-md font-medium leading-snug tracking-tight text-pretty text-white'>Biasanya terdiri dari:</h6>
                                        <ul className="mb-6 grid grid-cols-2 ps-8 list-disc text-neutral-300">
                                            <li>Beranda</li>
                                            <li>Tentang Kami</li>
                                            <li>Layanan</li>
                                            <li>Portofolio / Proyek</li>
                                            <li>Blog (opsional)</li>
                                            <li>Kontak</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className=''>
                                    <h6 className='mb-4 text-md font-medium leading-snug tracking-tight text-pretty text-white'>Contoh Implementasi Nyata:</h6>
                                    <ul className='flex flex-wrap items-center gap-2'>
                                        <li className='w-full lg:w-auto border border-border text-neutral-300 rounded px-3 py-1'>Website perusahaan kontraktor dengan daftar proyek bangunan</li>
                                        <li className='w-full lg:w-auto border border-border text-neutral-300 rounded px-3 py-1'>Website konsultan pajak dengan profil tim dan layanan</li>
                                        <li className='w-full lg:w-auto border border-border text-neutral-300 rounded px-3 py-1'>Website klinik kesehatan dengan profil dokter</li>
                                        <li className='w-full lg:w-auto border border-border text-neutral-300 rounded px-3 py-1'>Website perusahaan distribusi barang</li>
                                        <li className='w-full lg:w-auto border border-border text-neutral-300 rounded px-3 py-1'>Website arsitek dengan galeri desain rumah</li>
                                        <li className='w-full lg:w-auto border border-border text-neutral-300 rounded px-3 py-1'>Website travel agent dengan daftar paket wisata</li>
                                        <li className='w-full lg:w-auto border border-border text-neutral-300 rounded px-3 py-1'>Website perusahaan outsourcing</li>
                                        <li className='w-full lg:w-auto border border-border text-neutral-300 rounded px-3 py-1'>Website sekolah atau lembaga kursus</li>
                                        <li className='w-full lg:w-auto border border-border text-neutral-300 rounded px-3 py-1'>Website notaris atau kantor hukum</li>
                                        <li className='w-full lg:w-auto border border-border text-neutral-300 rounded px-3 py-1'>Website startup teknologi yang ingin tampil lebih kredibel</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='flex space-x-8 lg:ps-6'>
                            <div className='hidden lg:block text-9xl font-bold pe-3'>
                                <span>3</span>
                            </div>
                            <div className='w-full'>
                                <h3 className='mb-4 pb-4 text-3xl border-b border-border font-semibold leading-snug tracking-tight text-pretty text-white sm:text-4xl'>Website Katalog Produk (E-Commerce Sederhana)</h3>
                                <div className='grid grid-cols-1 lg:grid-cols-12 gap-4 border-b border-border lg:divide-x lg:divide-border pb-4 mb-8'>
                                    <div className='lg:col-span-4'>
                                        {/* <p className="mb-6 text-lg/8">Fokus pada satu tujuan utama.</p> */}
                                        <p className="text-neutral-300">Ini bukan marketplace besar.</p>
                                        <p className="text-neutral-300">Tidak ada sistem checkout kompleks.</p>
                                        <p className="mb-6 text-neutral-300">Tidak ada payment gateway otomatis.</p>
                                        <p className="mb-6 text-neutral-300">Website ini berfungsi sebagai etalase digital.</p>
                                    </div>
                                    <div className='lg:col-span-4'>
                                        <h6 className='mb-2 text-md font-medium leading-snug tracking-tight text-pretty text-white'>Pengunjung bisa:</h6>
                                        <ul className="mb-6 ps-8 list-disc text-neutral-300">
                                            <li>Melihat daftar produk</li>
                                            <li>Melihat detail produk</li>
                                            <li>Melihat foto dan deskripsi</li>
                                            <li>Lalu klik tombol untuk menghubungi via WhatsApp</li>
                                        </ul>
                                        <p className="text-neutral-300 italic">Transaksi dilakukan langsung melalui chat.</p>
                                    </div>
                                    <div className='lg:col-span-4'>
                                        <h6 className='mb-2 text-md font-medium leading-snug tracking-tight text-pretty text-white'>Cocok untuk:</h6>
                                        <ul className="mb-6 ps-8 list-disc text-neutral-300">
                                            <li>UMKM</li>
                                            <li>Toko lokal</li>
                                            <li>Bisnis rumahan</li>
                                            <li>Brand yang ingin terlihat lebih rapi dibanding jualan di Instagram saja</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className=''>
                                    <h6 className='mb-4 text-md font-medium leading-snug tracking-tight text-pretty text-white'>Contoh Implementasi Nyata:</h6>
                                    <ul className='flex flex-wrap items-center gap-2'>
                                        <li className='w-full lg:w-auto border border-border text-neutral-300 rounded px-3 py-1'>Toko pakaian dengan katalog dan tombol “Pesan via WhatsApp”</li>
                                        <li className='w-full lg:w-auto border border-border text-neutral-300 rounded px-3 py-1'>Toko skincare dengan daftar produk dan harga</li>
                                        <li className='w-full lg:w-auto border border-border text-neutral-300 rounded px-3 py-1'>Penjual furniture custom dengan galeri produk</li>
                                        <li className='w-full lg:w-auto border border-border text-neutral-300 rounded px-3 py-1'>Toko oleh-oleh khas daerah</li>
                                        <li className='w-full lg:w-auto border border-border text-neutral-300 rounded px-3 py-1'>Supplier bahan bangunan</li>
                                        <li className='w-full lg:w-auto border border-border text-neutral-300 rounded px-3 py-1'>Toko sembako lokal</li>
                                        <li className='w-full lg:w-auto border border-border text-neutral-300 rounded px-3 py-1'>Penjual helm dan aksesoris motor</li>
                                        <li className='w-full lg:w-auto border border-border text-neutral-300 rounded px-3 py-1'>Toko bunga dengan katalog rangkaian</li>
                                        <li className='w-full lg:w-auto border border-border text-neutral-300 rounded px-3 py-1'>Jasa percetakan dengan daftar paket cetak</li>
                                        <li className='w-full lg:w-auto border border-border text-neutral-300 rounded px-3 py-1'>Penjual hampers lebaran atau natal</li>
                                        <li className='w-full lg:w-auto border border-border text-neutral-300 rounded px-3 py-1'>Brand sepatu lokal</li>
                                        <li className='w-full lg:w-auto border border-border text-neutral-300 rounded px-3 py-1'>Jasa sablon kaos</li>
                                        <li className='w-full lg:w-auto border border-border text-neutral-300 rounded px-3 py-1'>Penjual tanaman hias</li>
                                        <li className='w-full lg:w-auto border border-border text-neutral-300 rounded px-3 py-1'>Toko alat pancing</li>
                                        <li className='w-full lg:w-auto border border-border text-neutral-300 rounded px-3 py-1'>Penjual frozen food rumahan</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="mx-auto mt-16 sm:mt-20 lg:mt-24 max-w-7xl px-6 xl:px-0">
                    <dl className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {services.map((feature) => (
                            <div key={feature.name} className="relative pl-20 bg-sky-800/20 p-6 rounded-2xl">
                                <dt className="text-base/7 font-semibold text-white">
                                    <div className="absolute top-6 left-6 flex size-10 items-center justify-center rounded-lg bg-sky-800 shadow-xl shadow-neutral-900">
                                        <feature.icon aria-hidden="true" className="size-6 text-white" />
                                    </div>
                                    {feature.name}
                                </dt>
                                <dd className="mt-2 text-base/7 text-neutral-400">{feature.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div> */}
                <div
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-40"
                >
                    <div
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                        className="relative left-[calc(50%+0rem)] aspect-1155/678 w-144.5 -translate-x-1/2 -rotate-180 bg-linear-to-tr from-sky-400 to-sky-900 opacity-30 sm:left-[calc(50%+50rem)] sm:w-288.75"
                    />
                </div>
            </div>






            <div className="relative isolate pb-20 pt-40">
                <div className='absolute -z-10 inset-0 bg-linear-to-tl from-transparent blur-3xl to-sky-800/20 from-70% to-70%' />
                <div className='absolute -z-10 inset-0 bg-linear-to-br from-transparent blur-3xl to-sky-800/20 from-70% to-70%' />

                <div className='relative mx-auto max-w-7xl px-6 xl:px-0'>

                    {/* <div className='absolute -left-8 top-20 w-0.5 h-64 bg-white rounded-full' />
                    <div className='absolute left-0 top-[calc(40%-5.5rem)] w-0.5 h-24 -rotate-45 bg-white rounded-full' />
                    <div className='absolute left-8.25 top-[calc(45%-3.7rem)] w-0.5 h-[calc(60%-5rem)] bg-white rounded-full' /> */}

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
                        <div className='col-span-6'>
                            <p className="text-4xl font-semibold leading-snug tracking-tight text-pretty text-white sm:text-5xl xl:text-6xl">
                                Mengapa Memilih Layanan Ini?
                            </p>
                            <p className="mt-6 text-lg text-neutral-300 max-w-xl">
                                Setiap bisnis memiliki kebutuhan yang berbeda.
                                Karena itu, pendekatan yang digunakan juga harus menyesuaikan tujuan dan arah perkembangan usaha Anda.
                            </p>
                        </div>
                        <div className='col-span-6 relative'>
                            {/* <div className='bg-neutral-800'>
                            <div className='px-2 py-0.5 text-xs'>Welcome</div>
                            <div className='h-96 overflow-y-auto'>
                                <SyntaxHighlighter language="typescript" style={atomOneDark}>
                                    {code}
                                </SyntaxHighlighter>
                            </div>
                        </div> */}
                            {/* <div className='absolute inset-0 rounded-3xl bg-radial from-transparent to-black/25 to-70%'/> */}
                            <Image className='w-full' width={900} height={600} quality={75} alt='illustration image 1' src={'/images/illustration-image-v3.webp'} loading='eager' />
                        </div>
                    </div>
                    <div className="ps-20 mt-20 max-w-5xl">
                        <dl className="grid grid-cols-1 gap-4 space-y-6">
                            {superiorities.map((item) => (
                                <div key={item.name} className="relative pl-14">
                                    <dt className="font-semibold text-white">
                                        <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-sky-800 shadow-xl shadow-neutral-900">
                                            <item.icon aria-hidden="true" className="size-6 text-white" />
                                        </div>
                                        {item.name}
                                    </dt>
                                    <dd className="mt-2 text-neutral-400">{item.description}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                    <div
                        aria-hidden="true"
                        className="absolute inset-x-0 top-0 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-40"
                    >
                        <div
                            style={{
                                clipPath:
                                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                            }}
                            className="relative left-[calc(50%+0rem)] aspect-1155/678 w-144.5 -translate-x-1/2 -rotate-180 bg-linear-to-tr from-sky-400 to-sky-900 opacity-30 sm:left-[calc(50%+50rem)] sm:w-288.75"
                        />
                    </div>
                </div>

                <div className='bg-sky-800/20 p-12 mt-20'>
                    <div className='mx-auto max-w-7xl'>
                        <p className='text-5xl text-pretty leading-snug tracking-tight'>
                            Website yang dibangun dengan pendekatan yang tepat akan menjadi aset jangka panjang,
                            bukan sekadar proyek sekali jadi.
                        </p>
                    </div>
                </div>
            </div>






            <div className='mx-auto max-w-7xl text-center p-8 border border-border rounded-3xl mt-20'>Portfolio / Case Study</div>
            <div className='mx-auto max-w-7xl text-center p-8 border border-border rounded-3xl mt-20'>Social Proof</div>
            <div className='mx-auto max-w-7xl text-center p-8 border border-border rounded-3xl mt-20'>Blog Preview (3 Artikel Terbaru)</div>
            <div className='mx-auto max-w-7xl text-center p-8 border border-border rounded-3xl mt-20'>Final CTA</div>






            

        </div>
    )
}

export default Page