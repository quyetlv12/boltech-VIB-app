import React, { useState } from "react";
import Calendar from "react-calendar";
import styled from "styled-components";
const CalendarStyled= styled.div`
.react-calendar{
    width : 100% !important;
}
`
const DatePicker = () => {
  const [value, onChange] = useState(new Date());

  return (
    <CalendarStyled className="mt-4">
      <Calendar onChange={onChange} value={value} />
    </CalendarStyled>
  );
};

export default DatePicker;
