import React from 'react'
import Image from 'next/image'
export default function Header() {
    return (
        <header className='flex-Row-between padding-x h-16'>
            <div className="flex-Row-center gap-1">
                <Image src="/assets/logo-1.webp" width={50} height={100} alt="Logo" />
                <span className="text-xl font-semibold">Describe Art</span>
            </div>
        </header>
    )
}
