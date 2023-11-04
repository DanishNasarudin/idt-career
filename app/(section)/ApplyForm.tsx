"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { RiArrowDropDownFill, RiArrowDropLeftFill } from "react-icons/ri";
import fetchCareer from "../(serverActions)/FetchCareer";

type Career = {
  title: string;
  location: string;
  shortDescription: string;
  content: string;
};

type Props = {};

const ApplyForm = ({}: Props) => {
  const [currentValue, setCurrentValue] = useState("notSelected");

  const [careers, setCareers] = useState<Career[]>([]);

  useEffect(() => {
    fetchCareer().then((careers) => {
      setCareers(careers);
    });
  }, []);

  const [toggle, setToggle] = useState(false);

  const [invalidFormat, setInvalidFormat] = useState({
    email: true,
  });

  const [invalidRequired, setInvalidRequired] = useState({
    name: false,
    email: false,
    position: false,
    attach: false,
  });

  const formChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));
  };

  const formSelectChange = ({
    target,
  }: React.ChangeEvent<HTMLSelectElement>) => {
    setFormValues((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));
    setCurrentValue(target.value);
  };

  type FormValues = {
    name: string;
    email: string;
    position: string;
    attach: File | undefined | string;
  };

  type FormState = {
    isLoading: boolean;
    values: FormValues;
    isSent: boolean;
  };

  const initialFormState: FormState = {
    isLoading: false,
    isSent: false,
    values: {
      name: "",
      email: "",
      position: "",
      attach: undefined,
    },
  };

  const [formValues, setFormValues] = useState<FormState>(initialFormState);

  const { values } = formValues;
  // console.log(values);

  const [file, setFile] = useState<File>();
  // console.log(file);

  const [submitReady, setSubmitReady] = useState(false);

  const handleFileObject = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!file) return;
    // let uploadedFilePath: string | undefined;
    try {
      const fileData = new FormData();
      fileData.set("file", file);

      const res = await fetch("api/upload", {
        method: "POST",
        body: fileData,
      });

      if (!res.ok) throw new Error(await res.text());

      const responseData = await res.json();
      const uploadedFilePath = responseData.path;
      // console.log("File uploaded to:", uploadedFilePath);

      setFormValues((prev) => ({
        ...prev,
        isLoading: true,
        values: {
          ...prev.values,
          attach: uploadedFilePath,
        },
      }));

      setSubmitReady(true);
    } catch (e: any) {
      console.error(e);
    }
  };

  useEffect(() => {
    const onSubmit = async () => {
      if (!submitReady) return;

      // console.log(formValues.values, "check form");

      await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(formValues.values),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }).then(() => {
        setTimeout(() => {
          setFormValues((prev) => ({
            ...prev,
            isLoading: false,
            values: {
              ...prev.values,
              name: "",
              email: "",
              position: "",
              attach: undefined,
            },
          }));
          setCurrentValue("notSelected");
          setFile(undefined);
        }, 2000);

        setFormValues((prev) => ({
          ...prev,
          isSent: true,
        }));
        setTimeout(() => {
          setFormValues((prev) => ({
            ...prev,
            isSent: false,
          }));
        }, 1000);
      });
      setSubmitReady(false);
    };

    onSubmit();
  }, [formValues, submitReady]);

  const hiddenUpload = useRef<HTMLInputElement>(null);

  const handleHiddenUpload = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (hiddenUpload.current) {
      hiddenUpload.current.click();
    }
  };

  return (
    <div className="max-w-none sm:max-w-[1060px] mx-auto w-full py-16">
      <div className="w-full sm:w-4/5 mx-auto flex gap-10 px-4 sm:px-0 flex-col sm:flex-row">
        <div className="w-full flex flex-col gap-4 text-center sm:text-left">
          <h2>
            Apply for a <br /> Position.
          </h2>
          <p className="max-w-[300px] w-full mx-auto sm:mx-0">
            Ready to take the first step? Submit your information, we will
            contact you if you pass our first screening.
          </p>
          <Link href={"#FAQs"} className="text-accent underline">
            <p>Looking to ask questions?</p>
          </Link>
        </div>
        <div className="w-full">
          <form className="mx-auto w-full max-w-[500px]">
            <label htmlFor="name__label">
              <p>
                Your Name <b style={{ color: "red" }}>*</b>
              </p>
            </label>
            <p>
              <input
                type="text"
                className={`text-black bg-secondary py-2 px-4 w-full max-w-[500px] rounded-lg mt-2 mb-2 border-[3px]
            ${invalidRequired.name ? "border-red-500" : "border-transparent"}`}
                required
                name="name"
                value={values.name}
                onChange={formChange}
                onInput={(e) => {
                  const input = e.currentTarget as HTMLInputElement;
                  setInvalidRequired({
                    ...invalidRequired,
                    name: input.validity.valueMissing,
                  });
                }}
              />
              <span
                className={`${invalidRequired.name ? "block" : "hidden"} mb-2`}
                style={{ fontSize: 12, color: "red" }}
              >
                Required
              </span>
            </p>
            <div className="w-full">
              <label htmlFor="email__label">
                <p>
                  Your Email <b style={{ color: "red" }}>*</b>
                </p>
              </label>
              <p>
                <input
                  type="email"
                  className={`text-black bg-secondary py-2 px-4 w-full max-w-[500px] rounded-lg mt-2 mb-2 border-[3px]
                ${
                  invalidFormat.email ? "border-transparent" : "border-red-500"
                }`}
                  required
                  name="email"
                  value={values.email}
                  onChange={formChange}
                  onInput={(e) => {
                    const input = e.currentTarget as HTMLInputElement;
                    setInvalidFormat({
                      ...invalidFormat,
                      email: input.validity.valid,
                    });
                    setInvalidRequired({
                      ...invalidRequired,
                      email: input.validity.valueMissing,
                    });
                  }}
                />
                <span
                  className={`${
                    invalidRequired.email
                      ? "hidden"
                      : invalidFormat.email
                      ? "hidden"
                      : "block"
                  } mb-2`}
                  style={{ fontSize: 12, color: "red" }}
                >
                  Invalid Email
                </span>
                <span
                  className={`${
                    invalidRequired.email ? "block" : "hidden"
                  } mb-2`}
                  style={{ fontSize: 12, color: "red" }}
                >
                  Required
                </span>
              </p>
            </div>
            <label htmlFor="position__label">
              <p>
                Which position? <b style={{ color: "red" }}>*</b>
              </p>
            </label>
            <div className="relative">
              <p>
                <select
                  id="position__id"
                  className="text-black bg-secondary py-2 px-4 w-full max-w-[500px] rounded-lg mt-2 mb-2 appearance-none cursor-pointer"
                  onClick={() => {
                    setToggle(!toggle);
                  }}
                  required
                  name="position"
                  onChange={formSelectChange}
                  value={currentValue}
                >
                  <option
                    value="notSelected"
                    className="font-bold text-black"
                  >{`Choose position`}</option>
                  {careers.map((career, carKey) => {
                    return (
                      <option key={carKey} value={career.title}>
                        {career.title} | {career.location}
                      </option>
                    );
                  })}
                </select>
              </p>
              <RiArrowDropLeftFill
                size={40}
                className={`absolute top-[0%] sm:right-[0] right-2 sm:translate-y-[-0%] translate-y-[-0%] mt-2 pointer-events-none
                ${toggle ? "hidden" : ""}`}
                color={"black"}
              />
              <RiArrowDropDownFill
                size={40}
                className={`absolute top-[0%] sm:right-[0] right-2 sm:translate-y-[-0%] translate-y-[-0%] mt-2 pointer-events-none
                ${toggle ? "" : "hidden"}`}
                color={"black"}
              />
            </div>
            <label htmlFor="attach__label">
              <p>
                Upload your CV & Portfolio (.pdf)
                <b style={{ color: "red" }}>*</b>
              </p>
            </label>
            <p>
              <button
                className={`text-black bg-secondary py-2 px-4 w-full max-w-[500px] rounded-lg mt-2 mb-2 appearance-none cursor-pointer text-left
                ${
                  invalidRequired.attach
                    ? "border-red-500"
                    : "border-transparent"
                }`}
                onClick={(e) => handleHiddenUpload(e)}
              >
                {file ? file.name : "Upload File"}
              </button>
              <input
                id="file_input"
                type="file"
                name="attach"
                className={`hidden`}
                required
                // value={values.attach}
                accept="application/pdf"
                onChange={(e) => {
                  setFile(e.target.files?.[0]);
                  if (e.target.files?.[0] === undefined) {
                    setInvalidRequired({ ...invalidRequired, attach: true });
                  } else {
                    setInvalidRequired({ ...invalidRequired, attach: false });
                    setFormValues((prev) => ({
                      ...prev,
                      values: {
                        ...prev.values,
                        [e.target.name]: e.target.files?.[0].name,
                      },
                    }));
                  }
                }}
                ref={hiddenUpload}
              />
              <span
                className={`${
                  invalidRequired.attach ? "block" : "hidden"
                } mb-2`}
                style={{ fontSize: 12, color: "red" }}
              >
                Required
              </span>
            </p>
            <div className="w-full flex justify-center py-4">
              <button
                className={`
              py-2 px-4 bg-accent text-secondary font-bold rounded-xl border-transparent
                         transition-all
                        ${formValues.isLoading ? "bg-green-600" : ""}
                        ${
                          !values.name ||
                          !values.email ||
                          !values.position ||
                          !values.attach
                            ? "mobilehover:hover:bg-zinc-500/50"
                            : "mobilehover:hover:bg-accent/50"
                        }`}
                disabled={
                  !values.name ||
                  !values.email ||
                  !values.position ||
                  !values.attach
                }
                onClick={handleFileObject}
              >
                <p>
                  {formValues.isLoading
                    ? "Submitting.."
                    : formValues.isSent
                    ? "Submitted!"
                    : "Submit"}
                </p>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ApplyForm;
