import React, { useState, forwardRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CalenderIcon from "@/assets/icons/CalenderIcon";

const CustomInput = forwardRef(({ value, onClick }: any, ref) => (
  <div
    className="flex items-center justify-between border border-[#EAECF0] rounded-md py-[10px] px-[14px] mt-[16px] cursor-pointer"
    onClick={onClick}
    ref={ref}
  >
    <p className="text-[#667085]">{value || "Select a date"}</p>
    <CalenderIcon />
  </div>
));

interface CustomDatePickerProps {
  onDateChange: (date: Date | null) => void;  // Callback to parent
}

const CustomDatePicker: React.FC<CustomDatePickerProps> = ({ onDateChange }) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
    onDateChange(date); // Send date to parent
  };

  return (
    <div className="w-full">
    <DatePicker
      selected={selectedDate}
      onChange={handleDateChange}
      dateFormat="yyyy-MM-d"
      popperPlacement="bottom-end"
      popperProps={{ strategy: "absolute" }}
      customInput={<CustomInput />}
    />
    </div>

  );
};

export default CustomDatePicker;
