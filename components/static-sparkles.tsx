import React, { useEffect, useRef } from 'react'

function StaticSparkles({ className }: { className?: string }) {

    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Pengaturan kepadatan partikel (semakin besar angka, semakin padat)
        const PARTICLE_DENSITY = 4000;

        const drawStaticSparkles = () => {
            // Sesuaikan ukuran canvas dengan window
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            // Bersihkan canvas sebelum menggambar ulang
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Hitung jumlah partikel yang ideal berdasarkan luas layar
            const area = canvas.width * canvas.height;
            const particleCount = Math.floor(area / PARTICLE_DENSITY);

            // Mulai menggambar partikel statis
            for (let i = 0; i < particleCount; i++) {
                const x = Math.random() * canvas.width;
                const y = Math.random() * canvas.height;

                // Ukuran partikel acak (0.1px - 1.6px)
                const size = Math.random() * 1.5 + 0.1;
                // Transparansi acak (0.1 - 0.9)
                const opacity = Math.random() * 0.8 + 0.1;

                ctx.beginPath();
                ctx.arc(x, y, size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
                ctx.fill();
            }
        };

        // Gambar untuk pertama kali saat komponen di-mount
        drawStaticSparkles();

        // Event listener untuk resize layar (dibungkus debounce agar ringan)
        let resizeTimeout: number;
        const handleResize = () => {
            window.clearTimeout(resizeTimeout);
            resizeTimeout = window.setTimeout(drawStaticSparkles, 200);
        };

        window.addEventListener('resize', handleResize);

        // Cleanup function: hapus event listener saat komponen di-unmount
        return () => {
            window.removeEventListener('resize', handleResize);
            window.clearTimeout(resizeTimeout);
        };
    }, []);

    return (
        <div className={className}>
            <canvas
                ref={canvasRef}
                className="pointer-events-none h-full w-full"
            />
        </div>
    )
}

export default StaticSparkles