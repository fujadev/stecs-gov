"use client";

import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
import Upload from "@/assets/icons/Upload";

const validationSchema = Yup.object().shape({
  groupName: Yup.string().required("Group name is required"),
  file: Yup.mixed()
    .required("CSV file is required")
    .test("fileFormat", "Only PDF files are allowed", (value: File) =>
      value ? value.type === "application/pdf" || value.name.endsWith(".pdf") : false
    )
    .test("fileSize", "File too large (max 2MB)", (value: File) =>
      value ? value.size <= 2 * 1024 * 1024 : false
    ),
});

const  UploadCSV =() => {
  const router = useRouter();

  const handleSubmit = async (values: any) => {
    const formData = new FormData();
    formData.append("groupName", values.groupName);
    formData.append("file", values.file);

    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    if (res.ok) {
      router.push("/congratulations");
    } else {
      alert("Upload failed. Please try again.");
    }
  };

  return (
    <main className="bg-[#F5F6FA] min-h-screen flex justify-center items-center">
      <Formik
        initialValues={{ groupName: "", file: null }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ handleChange, setFieldValue, errors, touched, values, isSubmitting }) => (
          <Form>
            <h1 className="text-[24px] font-medium mb-[32px] text-center text-[#003049]">
              Upload CSV for Payment
            </h1>

            <div className="bg-white w-[719px] p-[40px] rounded-[12px] shadow-md mb-[40px]">
              {/* Group Name */}
              <div className="mb-[20px]">
                <label htmlFor="groupName" className="block text-[#003049] text-[16px] font-medium mb-[16px]">
                  Enter Group Name
                </label>
                <input
                  className="border border-[#3C3B3B] px-[16px] py-[12px] rounded-[4px] w-full"
                  id="groupName"
                  type="text"
                  name="groupName"
                  placeholder="e.g. Staff Salaries - August"
                  value={values.groupName}
                  onChange={handleChange}
                />
                {touched.groupName && errors.groupName && (
                  <small className="text-[#E63946]">{errors.groupName}</small>
                )}
              </div>

              {/* Custom File Upload */}
              <div className="mb-[20px]">
                <label className="block text-[#003049] text-[16px] font-medium mb-[16px]">
                  Upload CV (PDF)
                </label>

                {/* Hidden input */}
                <input
                  id="file"
                  name="file"
                  type="file"
                  accept=".pdf"
                  className="hidden"
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    setFieldValue("file", event.currentTarget.files?.[0] || null)
                  }
                />
                <label
                  htmlFor="file"
                  className="flex flex-col items-center justify-center border border-dashed border-[#3C3B3B] rounded-[8px] h-[141px] cursor-pointer hover:bg-gray-50"
                >
                  <Upload/>
                  <span className="block mt-[10px] text-[#888585] text-[14px] font-normal">
                    {values.file ? values.file.name : "Click to browse file or drag and drop here"}
                  </span>
                </label>

                {touched.file && errors.file && (
                  <small className="text-[#E63946]">{errors.file as string}</small>
                )}
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-[10px] justify-end">
              <button
                type="button"
                onClick={() => router.back()}
                className="rounded-[12px] bg-[#F5F6FA] text-[#3A86FF] py-[15px] px-[61px] text-[16px] font-semibold border border-[#3A86FF]"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="rounded-[12px] bg-[#3A86FF] text-white py-[15px] px-[61px] text-[16px] font-semibold"
              >
                {isSubmitting ? "Uploading..." : "Upload CSV"}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </main>
  );
}

export default UploadCSV;