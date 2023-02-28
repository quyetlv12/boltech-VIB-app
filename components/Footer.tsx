import { FC } from 'react';
import React from 'react'
import Logo from '../assests/logo.png'
import Image from 'next/image';
import { TEXT_FOOTER_COLOR } from '@constants';
interface Props {

}
const Footer:FC<Props> = () => {
  return (
    <div className='mt-5 absolute bottom-[2%] w-full'>
      <div className='flex justify-center mb-2'>
        <Image src={Logo} alt='logo' className='w-[70px]' />
      </div>
      <p className={`text-[${TEXT_FOOTER_COLOR}] text-[12px] text-center `}>
        Hotline: +84 244 4582 274
        </p>
    </div>
  )
}

export default Footer