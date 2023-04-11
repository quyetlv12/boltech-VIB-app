import moment from "moment";
import { FC, useEffect, useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import styled from "styled-components";
const CalendarStyled = styled.div`
.react-calendar__tile--active{
  background: #106d5a !important;
  border-radius: 50%;
  width: 50px;
  height: 50px;
}
.react-calendar__tile--now {
    background: #ffff76;
    border-radius: 50%;
}
button{
  width: 50px;
  height: 50px;
}
.react-calendar{
    width : 100% !important;
    border: 1px solid #106d5a;
    border-radius: 20px;
    padding : 5px;
}

`
interface Props {
  setValue?: any,
  setInputValue?: any,
  inputValue?: any,
  getValues?: any,
  key_form?: string
}
const DatePicker: FC<Props> = ({ setInputValue, inputValue, getValues, key_form }) => {
  const [value, onChange] = useState(new Date());
  const handleChangeDate = (date: any) => {
    setInputValue(moment(date).format("YYYY-MM-DD"))
    onChange(date)
  }
  useEffect(() => {
    if (getValues(key_form) !== '' && getValues(key_form) !== undefined) {
      onChange(new Date(getValues(key_form)))
    }
  }, [])

  return (
    <CalendarStyled className="mt-4">
      <Calendar onChange={(date: any) => handleChangeDate(date)} value={value} />
    </CalendarStyled>
  );
};

export default DatePicker;
