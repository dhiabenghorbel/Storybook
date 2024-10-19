import React, { useState } from 'react'
import { enGB } from 'date-fns/locale'
import { DateRangePicker , START_DATE } from 'react-nice-dates'
import 'react-nice-dates/build/style.css'
import "./DatePicker.scss"


export default function DateRangePickerCalendarExample() {
  const [startDate, setStartDate] = useState()
  const [endDate, setEndDate] = useState()
  const [focus, setFocus] = useState(START_DATE)
  const handleFocusChange = newFocus => {
    setFocus(newFocus || START_DATE)
  }
  return (
  
      <DateRangePicker
        startDate={startDate}
        endDate={endDate}
        focus={focus}
        onStartDateChange={setStartDate}
        onEndDateChange={setEndDate}
        onFocusChange={handleFocusChange}
        format='dd MMM yyyy'
        locale={enGB}
      >
        {({ startDateInputProps, endDateInputProps, focus }) => (
        <div className='date-range'>
          <input
            className={'date-picker-input'}
            {...startDateInputProps}
            placeholder='Start date'
          />
          <span className='date-range_arrow' />
          {"To"}
          <span className='date-range_arrow' />
          <input
            className={'date-picker-input'}
            {...endDateInputProps}
            placeholder='End date'
          />
        </div>
      )}
</DateRangePicker>
    
  )
}