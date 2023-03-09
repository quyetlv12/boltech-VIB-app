'use client'
import Products from '@components/Products';
import { PRODUCTS } from '@constants';
import { Inter } from '@next/font/google';

const inter = Inter({subsets: ['latin']})

export default function Home() {
    return (
        <main className='flex flex-col bg-light-gray w-full min-h-screen mx-auto px-[5%]'>
            <h1 className='font-bold text-[45px]'>Bảo hiểm</h1>
            <p className='text-md text-gray text-[#6C727F] font-bold-[400]'>Mua gói bảo hiểm trực tuyến</p>
            {/* ========== PRODUCTS ============= */}
            <Products products={PRODUCTS} clasName='mt-4' />
        </main>
    )
}
