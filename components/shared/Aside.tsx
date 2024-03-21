import React from 'react'
import AsideItems from './AsideItems'
import Image from 'next/image'
import Link from 'next/link'

function Aside() {
    return (
        <nav className='fixed w-14 h-screen py-4 left-4'>
            <div className='h-full flex flex-col items-center justify-between py-3 border-2 rounded-xl'>
                <Link href="/" className="flex items-center gap-5">
                    <Image
                        src="/assets/icons/logo.png"
                        alt="Had Wedding Logo"
                        width={30}
                        height={30}
                    />
                </Link>
                <AsideItems/>
                <Link href="/" className="flex items-center gap-5">
                    <Image
                        src="/assets/icons/ic_signout.png"
                        alt="Had Wedding Logo"
                        width={20}
                        height={20}
                    />
                </Link>
            </div>
        </nav>
    )
}

export default Aside
