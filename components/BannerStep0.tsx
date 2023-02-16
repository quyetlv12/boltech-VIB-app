import { CAR, PRODUCTS } from '@constants'
import { PRODUCT } from 'app/interfaces/insurances'
import React, { FC } from 'react'
import Button from './Button'
interface Props {
    type : string
}
const BannerStep0:FC<Props> = ({type}) => {
    const step0Data:any = PRODUCTS.find(_elt => _elt.type === CAR) || {}
    console.log(step0Data.type);
  return (
    <div>
        <div className='font-medium text-[22px] px-[5%]'>Quyền lợi bảo hiểm</div>
        <div className='px-[5%]'>
        <Button name={'Mua trực tuyến'} className="w-full mt-3" />
        </div>
    </div>
  )
}

export default BannerStep0