import { useAppDispatch } from '@constants';
import { KEY_BRAND, KEY_CAR_TYPE } from 'app/buyInsurance/car/step/utility';
import { ARR_LIST_SELECT_PROPS, BRANS_PROPS, CAR_TYPE_PROPS } from 'interfaces/insurances';
import { FC, useEffect, useState } from 'react';
import { setBrands } from 'store/buyInsurance';
interface Props {
    arrList: ARR_LIST_SELECT_PROPS[],
    getValues: any,
    key_form: string,
    setValue: any,
    setInputValue: any
}
const Select: FC<Props> = ({ arrList, getValues, key_form, setValue, setInputValue }) => {
    const [selected, setSelected] = useState('')
    const dispatch = useAppDispatch()
    const onSelect = (value:string | undefined, brands: any = []) => {
        setSelected(value || '')
        setInputValue(value)
        if (key_form === KEY_CAR_TYPE) {
            if (value !== getValues(key_form)) {
                setValue(KEY_BRAND, '')
            }
            const _newBrands = brands.map((_elt: BRANS_PROPS) => {
                return { ..._elt, name: _elt.brand }
            })
            dispatch(setBrands(_newBrands))
        }
    }
    useEffect(() => {
        if (getValues(key_form) !== '' && getValues(key_form) !== undefined) {
            setSelected(getValues(key_form))
        }
    }, [])

    return (
        <div className='pb-[50px]'>
            {
                arrList.map(({ name, brands }: CAR_TYPE_PROPS, index) => {
                    return (
                        <div className='flex justify-between items-center h-[50px] ' onClick={() => onSelect(name, brands)} key={index}>
                            <span>{name}</span>
                            <span className={`w-[20px] h-[20px]  border-4 border-[#E5E7EB] ${selected === name ? 'bg-[#000]' : 'bg-[#fff]'}`}></span>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Select