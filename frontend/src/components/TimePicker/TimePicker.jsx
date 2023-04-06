import { useState } from 'react';
import { setHours, setMinutes, getDay } from 'date-fns';
import DatePicker from 'react-datepicker';
import fr from 'date-fns/locale/fr';
import 'react-datepicker/dist/react-datepicker.css';

const TimePicker = ({ onTimeChange }) => {
  const [startDate, setStartDate] = useState(null);

  // Check if the given date is valid (opening hours : Tuesday to Saturday)
  const isWeekday = (date) => {
    const day = getDay(date);
    return day >= 2 && day <= 6;
  };

  const handleTimeChange = (date) => {
    onTimeChange(date);
    setStartDate(date);
  };

  // Render the DatePicker component with the configured props
  return (
    <DatePicker
      selected={startDate}
      showTimeSelect
      timeFormat="HH:mm"
      timeIntervals={30}
      timeCaption="Heure"
      minTime={setHours(setMinutes(new Date(), 0), 12)}
      maxTime={setHours(setMinutes(new Date(), 0), 23, 30)}
      filterDate={isWeekday}
      dateFormat="d MMMM yyyy, HH:mm"
      placeholderText="Date et heure"
      locale={fr}
      onChange={handleTimeChange}
      required
    />
  );
};

export default TimePicker;
