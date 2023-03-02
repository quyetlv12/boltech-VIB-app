'use client'

import BannerStep0 from '@components/BannerStep0'
import { CAR, useAppSelector } from '@constants'
import { Inter } from '@next/font/google'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { getStep, getTypeInsurance } from 'store/buyInsurance'
const inter = Inter({subsets: ['latin']})


export default function BuyInsurance() {
    return (
        <div className='bg-light-gray w-full min-h-screen mx-auto'>
        </div>
    )
}
