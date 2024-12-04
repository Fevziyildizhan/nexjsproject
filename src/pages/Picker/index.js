import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Picker() {
  const [startDate, setStartDate] = useState(null); 
  const [endDate, setEndDate] = useState(null); 
  const [isStartSelected, setIsStartSelected] = useState(false); 

  const handleDateChange = (date) => {
    if (!isStartSelected) {
     
      setStartDate(date);
      setIsStartSelected(true);
    } else {
     
      setEndDate(date);
      setIsStartSelected(false); 
    }
  };

  return (
    <div className="w-full max-w-lg mx-auto my-8 p-6 border rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Tarih Seçin</h2>

      <div className="mb-4">
        <label htmlFor="datepicker" className="block text-sm font-medium mb-2">
          {isStartSelected ? "Check-out Tarihini Seçin" : "Check-in Tarihini Seçin"}
        </label>
        <DatePicker
          selected={isStartSelected ? endDate : startDate}
          onChange={handleDateChange}
          dateFormat="dd/MM/yyyy"
          className="w-full p-2 border rounded-md text-gray-900"
          placeholderText={isStartSelected ? "Check-out Tarihini Seçin" : "Check-in Tarihini Seçin"}
          minDate={isStartSelected ? startDate : new Date()} 
        />
      </div>

      <div className="mt-6">
        <p>
          {startDate && endDate
            ? `Check-in: ${startDate.toLocaleDateString()} - Check-out: ${endDate.toLocaleDateString()}`
            : "Tarihleri seçin."}
        </p>
      </div>
    </div>
  );
}
