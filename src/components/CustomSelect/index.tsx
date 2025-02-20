import type { FC } from 'react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

interface CustomSelectProps {
  name: string;
  options: string[];
  value: string;
  onChange: (name: string, value: string) => void;
  error?: string;
  touched?: boolean;
}

const CustomSelect: FC<CustomSelectProps> = ({
  error,
  name,
  onChange,
  options,
  touched,
  value,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <div
        className={`w-full py-[10px] px-[14px] border rounded-sm border-[#EAECF0] cursor-pointer flex justify-between items-center ${error && touched ? 'border-red-500' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {value || 'Select an option'}
        <FaChevronDown />
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 10 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.6 }}
            className="absolute left-0 right-0 bg-white p-[8px]  mt-[4px] rounded-[10px] shadow-two z-10 w-full "
          >
            {options.map((option) => (
              <div
                key={option}
                className="px-[8px] py-[8px] hover:bg-neutral-100 cursor-pointer"
                onClick={() => {
                  onChange(name, option);
                  setIsOpen(false);
                }}
              >
                {option}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      {touched && error && <small className="text-red-500">{error}</small>}
    </div>
  );
};

export default CustomSelect;
