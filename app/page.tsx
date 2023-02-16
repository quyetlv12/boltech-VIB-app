'use client'

import {Inter} from '@next/font/google'
import styles from './page.module.css'
import Button from "@components/Button";
import {useState} from "react";
import Input from "@components/Input";

const inter = Inter({subsets: ['latin']})

export default function Home() {

    const [currency, setCurrency] = useState('');

    const handleCurrencyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCurrency(event.target.value);
    };

    return (
        <main className='flex flex-col bg-light-gray w-full min-h-screen'>
            <h1>Bảo hiểm</h1>
            <p className='text-md text-gray'>Mua gói bảo hiểm trực tuyến</p>
            <Button color='primary' name='Mua ngay'/>
            <Input
                type="currency"
                value={currency}
                onChange={handleCurrencyChange}
                label="Currency input"
                className="mb-4"
                name="text-input"
            />
        </main>
    )
}
