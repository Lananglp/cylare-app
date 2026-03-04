"use client"
import { useState } from 'react'
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '../ui/dialog';
import { Button } from '../ui/button';

function DemoWebView({ className }: { className?: string }) {

    const [demoOpen, setDemoOpen] = useState(true);

    return (
        <Dialog open={demoOpen} onOpenChange={setDemoOpen}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className='mb-3 md:text-xl'>Contoh Studi Kasus Website</DialogTitle>
                    <DialogDescription className='text-muted-foreground'>
                        Website yang sedang Anda lihat merupakan contoh studi kasus yang dibuat untuk memberikan gambaran konsep dan fitur.
                    </DialogDescription>
                </DialogHeader>

                <div className="-mx-4 no-scrollbar max-h-[50vh] overflow-y-auto px-4 space-y-4 text-sm leading-relaxed text-muted-foreground">
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
    )
}

export default DemoWebView