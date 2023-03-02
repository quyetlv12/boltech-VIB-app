import { useAppSelector } from '@constants';
import React, { FC } from 'react'
import { getInputStatus } from 'store/buyInsurance';

interface Props {
    title : string,
    subTitle : string ,
     className? : string
}
const Title:FC<Props> = ({title, 
    subTitle , className}) => {
        const inputStatus = useAppSelector(getInputStatus);

  return (
    <div className={`px-3 ${className} ${!inputStatus ? "" : "hidden"  }`}>
        <h2 className="font-bold text-[22px]">{title}</h2>
        <p className='text-[#6C727F] text-[17px] font-normal'>{subTitle}</p>
    </div>
  )
}

export default Title