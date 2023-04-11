import moment from "moment";
import React, { FC, useState } from "react";
import Calendar from "react-calendar";
import styled from "styled-components";
const CalendarStyled= styled.div`
.react-calendar{
    width : 100% !important;
}

`
interface Props {
  key? : string,
  setValue? : any,
  setInputValue? : any ,
  inputValue?: string
}
const DatePicker:FC<Props> = ({setInputValue , inputValue}) => {
  const [value, onChange] = useState(new Date());
  const handleChangeDate = (date:any) => {
    setInputValue(moment(date).format("DD-MM-YYYY"))
  }

  return (
    <CalendarStyled className="mt-4">
      <Calendar onChange={(date:any) => handleChangeDate(date)} value={value} />
    </CalendarStyled>
  );
};

export default DatePicker;
