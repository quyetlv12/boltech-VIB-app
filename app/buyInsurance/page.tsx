'use client'

import BannerStep0 from '@components/BannerStep0'
import { CAR } from '@constants'
import {Inter} from '@next/font/google'

const inter = Inter({subsets: ['latin']})

export default function BuyInsurance() {
    return (
        <main className='flex flex-col bg-light-gray w-full min-h-screen mx-auto'>
           <BannerStep0 type={CAR} />
        </main>
    )
}
