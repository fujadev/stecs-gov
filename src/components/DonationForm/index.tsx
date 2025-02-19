"use client";

import { Formik } from "formik";
import * as Yup from "yup";
import AppButton from "../Common/AppButton";
import CustomSelect from "../CustomSelect";
import CardIcon from "@/assets/icons/CardIcon";
import TransferIcon from "@/assets/icons/TransferIcon";
import { PaystackButton } from "react-paystack";
import { FaChevronDown } from "react-icons/fa";
import { useState } from "react";
import CustomDatePicker from "../CustomDatePicker";
import { AnimatePresence, motion } from "framer-motion";

const paymentOptions = [
  { label: "Pay with Card", icon: <CardIcon /> },
  { label: "Pay with Bank transfer", icon: <TransferIcon /> },
];

const validationSchema = Yup.object().shape({
  amount: Yup.number()
    .typeError("Amount must be a number")
    .min(1, "Amount must be at least 1")
    .required("Amount is required"),
  frequency: Yup.string().required("Frequency is required"),
  paymentMethod: Yup.string().required("Please select a payment method"),
});

interface DonationFormProps {
  setIsTransactionDetailsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsSuccessOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsDonationFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onAmountChange: (amount: number) => void;
}

const DonationForm: React.FC<DonationFormProps> = ({
  setIsTransactionDetailsOpen,
  setIsSuccessOpen,
  setIsDonationFormOpen,
  onAmountChange,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [date, setDate] = useState<Date | null>(null);
  const publicKey = process.env.NEXT_PUBLIC_PAYMENT_PUBLIC_KEY ?? "";

  const initialValues = {
    amount: "",
    email: "",
    frequency: "One Time",
    weekly: "Monday",
    paymentMethod: "Pay with Bank transfer",
  };

  const handleSubmit = (values: typeof initialValues) => {
    if (
      values.paymentMethod === "Pay with Bank transfer" &&
      values.frequency == "One Time"
    ) {
      setIsTransactionDetailsOpen(true);
    } else {
      setIsTransactionDetailsOpen(false);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({
        values,
        handleChange,
        setFieldValue,
        handleSubmit,
        errors,
        touched,
      }) => {
        const selectedPayment = paymentOptions.find(
          (option) => option.label === values.paymentMethod
        );

        const paystackConfig = {
          email: values.email,
          amount: Number(values.amount) * 100,
          currency: "NGN",
          publicKey: publicKey ?? "",
          metadata: {
            transfer_type: "donation",
            email: values.email,
            id: 1,
            end_date: date,
            autosave_frequency: values.frequency,
            custom_fields: [
              {
                display_name: "Email",
                variable_name: "email",
                value: values.email,
              },
              {
                display_name: "User ID",
                variable_name: "id",
                value: 1,
              },
              {
                display_name: "End Date",
                variable_name: "end_date",
                value: date,
              },
              {
                display_name: "Autosave Frequency",
                variable_name: "autosave_frequency",
                value: values.frequency,
              },
            ],
          },
          onSuccess: (reference: any) => {
            setIsSuccessOpen(true);
            setIsTransactionDetailsOpen(false);
            setIsDonationFormOpen(false);
          },
        };
        

        return (
          <form
            onSubmit={handleSubmit}
            className="p-[24px] rounded-[12px] w-full  bg-white shadow-two"
          >
            {/* Email Input */}
            <div className="mb-[16px]">
              <label className="block text-base font-medium ">Email</label>
              <input
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                className="w-full mt-[4px] px-[14px] py-[10px] border rounded-sm border-[#EAECF0]"
                placeholder="Enter email"
              />
              {touched.email && errors.email && (
                <small className="text-red-500">{errors.email}</small>
              )}
            </div>

            {/* Amount Input */}
            <div className="mb-[16px]">
              <label className="block text-base font-medium ">Amount</label>
              <input
                type="amount"
                name="amount"
                value={values.amount}
                onChange={(e) => {
                  handleChange(e);
                  onAmountChange(Number(e.target.value));
                }}
                className="w-full mt-[4px] px-[14px] py-[10px] border rounded-sm border-[#EAECF0]"
                placeholder="Enter amount"
              />
              {touched.amount && errors.amount && (
                <small className="text-red-500">{errors.amount}</small>
              )}
            </div>

            {/* Donation Frequency */}
            <div className="mb-[16px]">
              <label className="block mt-[16px] text-base font-medium ">
                How often do you want to donate?
              </label>
              <div className="mt-[4px]">
                <CustomSelect
                  name="frequency"
                  options={["One Time", "Weekly", "Monthly"]}
                  value={values.frequency}
                  onChange={(name, value) => setFieldValue(name, value)}
                  error={errors.frequency}
                  touched={touched.frequency}
                />
              </div>
            </div>

            {/* Weekly Donation */}
            {(values.frequency === "Weekly" ||
              values.frequency === "Monthly") && (
              <div>
                <div className="mb-[16px]">
                  <label className="block mt-[16px] text-base font-medium ">
                    Select a day during the week
                  </label>
                  <div className="mt-[4px]">
                    <CustomSelect
                      name="weekly"
                      options={[
                        "Monday",
                        "Tuesday",
                        "Wednesday",
                        "Thursday",
                        "Friday",
                        "Saturday",
                        "Sunday",
                      ]}
                      value={values.weekly}
                      onChange={(name, value) => setFieldValue(name, value)}
                      error={errors.weekly}
                      touched={touched.weekly}
                    />
                  </div>
                </div>
                <div className="flex items-center gap-x-sm shadow-one border border-[#EAECF0] rounded-sm py-[10px] px-[8px]">
                  <CardIcon />
                  <p>Pay with Card</p>
                </div>
                <div className="w-full">
                  <CustomDatePicker onDateChange={setDate} />
                </div>
              </div>
            )}

            {/* Payment Options */}
            {values.frequency === "One Time" && (
              <div>
                <label
                  className="text-base font-medium text-[#07222C] "
                  htmlFor=""
                >
                  Payment Choice
                </label>
                {/* Selected Payment Method */}
                <div
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center justify-between shadow-one border border-[#EAECF0] rounded-sm py-[10px] px-[8px] mt-[8px] "
                >
                  <div className="flex  gap-x-sm ">
                    {selectedPayment?.icon}
                    <p>{values.paymentMethod}</p>
                  </div>
                  <FaChevronDown />
                </div>

                {/* Payment Selection */}
                <AnimatePresence>
                  {isDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 10 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.6 }}
                      className="shadow-one rounded-[10px]"
                    >
                      {paymentOptions.map((option) => (
                        <label
                          key={option.label}
                          className="flex items-center justify-between px-[8px] py-[12px] cursor-pointer"
                        >
                          <span className="flex items-center gap-x-[8px]">
                            <span className="mr-2 text-lg">{option.icon}</span>
                            {option.label}
                          </span>
                          <input
                            type="radio"
                            name="paymentMethod"
                            checked={values.paymentMethod === option.label}
                            onChange={() => {
                              setFieldValue("paymentMethod", option.label);
                              setIsDropdownOpen(false);
                            }}
                            className="w-[16px] h-[16px]"
                          />
                        </label>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>

                {touched.paymentMethod && errors.paymentMethod && (
                  <small className="text-red-500">{errors.paymentMethod}</small>
                )}
              </div>
            )}

            {/* Submit Button */}
            {values.paymentMethod == "Pay with Bank transfer" &&
            values.frequency == "One Time" ? (
              <div className="mt-[28px]">
                <AppButton
                  type="submit"
                  fullWidth={true}
                  mih={52}
                  classNames={{
                    root: "py-[14px] px-[16px] rounded-[10px]",
                  }}
                >
                  <span className="text-[#fff] text-[14px] font-medium flex items-center gap-x-2 ">
                    Make Payment
                  </span>
                </AppButton>
              </div>
            ) : (
              <div className="mt-[28px]">
                <PaystackButton
                  {...paystackConfig}
                  className="w-full bg-[#233C8B] text-white py-[14px] px-[16px] rounded-[10px] text-[14px] font-medium"
                >
                  Make Payment
                </PaystackButton>
              </div>
            )}
          </form>
        );
      }}
    </Formik>
  );
};

export default DonationForm;
