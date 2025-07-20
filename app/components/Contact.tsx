"use client";
import { assets } from "@/assests/assets";
import Image from "next/image";
import { useState } from "react";
export default function Contact() {
  const [result, setResult] = useState<string>("");

  const access_key_value=process.env.NEXT_PUBLIC_FORM_ACCESS_KEY ?? ''

  const handleSubmit = async (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");
    const form=event.currentTarget
    const formData = new FormData(form);
   
    formData.append("access_key", access_key_value);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.currentTarget?.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }

    
  };



  return (
    <>
      <div id="contact" className="scroll-mt-20 flex flex-col items-center mb-20">
        <p>Connect With Me</p>
        <h1 className="text-4xl mb-4">Get In Touch</h1>
        <p className="max-md:px-10 max-sm:font-xs text-center">
          Would really love to connect with those who have reached upto here !!
        </p>
        <p className="max-md:px-10 max-sm:font-xs text-center">
          If you have any queries, any feedback or other questions, please fill
          the form below
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-15 max-w-2xl flex flex-col items-center mx-8"
        >
          <div className="flex gap-6 ">
            <input
              type="text"
              placeholder="Enter your name"
              name="name"
              className="border border-black dark:border-white dark:bg-darkHover outline-none py-2 px-4 max-sm:px-2 rounded-md w-1/2 max-sm:text-xs text-sm"
            />
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              className="border border-black dark:border-white dark:bg-darkHover outline-none py-2 px-4 max-sm:px-2 rounded-md w-1/2 max-sm:text-xs text-sm"
            />
          </div>
          <div className="mt-10 w-full">
            <textarea
              rows={6}
              placeholder="Enter your message"
              name="message"
              className="border border-black dark:border-white dark:bg-darkHover outline-none py-2 px-4 max-sm:px-2 max-sm:text-sx text-sm rounded-md w-full"
            />
          </div>
          <button className="text-white bg-black  hover:text-black hover:bg-white dark:bg-darkTheme dark:hover:text-white mt-4  dark:hover:bg-darkHover border border-black dark:border-white rounded-4xl px-4 py-2 cursor-pointer flex items-center justify-between gap-2 text-sm">
            Submit now{" "}
            <Image src={assets.right_arrow} className="w-4" alt="right_arrow" />{" "}
          </button>
          <p className="mt-4">{result}</p>
        </form>
      </div>
    </>
  );
}
