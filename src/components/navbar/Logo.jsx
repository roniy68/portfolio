'use client'

import { drsight } from "@/assets"
import Image from "next/image"
import Link from "next/link"

const Logo = () => {
    return (
        <Link href="/" className='flex items-center gap-2'>
            <Image
                src={drsight}
                alt="logo"
                className="bg-primary border-2 border-red-500 rounded-full w-9 h-9 object-contain"
            />
            <p className='text-white text-[18px] font-bold cursor-pointer flex '>
                AH Roniy &nbsp;
                <span className='sm:block hidden'></span>
            </p>
        </Link>
    )
}

export default Logo
