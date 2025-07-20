"use client";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function Contact() {
  

  const access_key_value = process.env.NEXT_PUBLIC_FORM_ACCESS_KEY ?? "";
  const form_url=process.env.NEXT_PUBLIC_FORM_URL ?? ''

  return (
    <>
      <div
        id="contact"
        className="scroll-mt-20 flex flex-col items-center mb-20"
      >
        <p>Connect With Me</p>
        <h1 className="text-4xl mb-4">Get In Touch</h1>
        <p className="max-md:px-10 max-sm:font-xs text-center">
          Would really love to connect with those who have reached upto here !!
        </p>
        <p className="max-md:px-10 max-sm:font-xs text-center">
          If you have any queries, any feedback or other questions, please fill
          the form below
        </p>

        <Formik
          initialValues={{ name: "", email: "", message: "" }}
          validationSchema={Yup.object({
            name: Yup.string().required("Required"),
            email: Yup.string().email("Invalid email").required("Required"),
            message: Yup.string().required("Required"),
          })}
          onSubmit={async (values, { setSubmitting, resetForm }) => {
            const response = await fetch(form_url, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                access_key: access_key_value,
                name: values.name,
                email: values.email,
                message: values.message,
              }),
            });

            const result = await response.json();

            if (result.success) {
              alert("Message sent successfully!");
              resetForm();
            } else {
              alert("Something went wrong.");
            }

            setSubmitting(false);
          }}
        >
          {({ isSubmitting }) => (
            <Form className="mt-15 max-w-2xl flex flex-col items-center mx-8 max-sm:mx-2">
              <div className="flex max-sm:flex-col gap-6 max-sm:gap-4">
                <div>
                  <Field
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    className="border border-black dark:border-white dark:bg-darkHover outline-none py-2 px-4 max-sm:px-2 rounded-md  max-sm:text-xs text-sm"
                  />
                  <ErrorMessage name="name" component="div" className="text-xs ml-2 mt-2 text-red-500" />
                </div>

                <div>
                  <Field
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    className="border border-black dark:border-white dark:bg-darkHover outline-none py-2 px-4 max-sm:px-2 rounded-md max-sm:text-xs text-sm"
                  />
                  <ErrorMessage name="email" component="div" className="text-xs ml-2 mt-2 text-red-500"/>
                </div>
              </div>

              <div className="mt-10 w-full">
                <div>
                <Field
                  name="message"
                  as="textarea"
                  rows="4"
                  placeholder="Write here"
                  className="border border-black dark:border-white dark:bg-darkHover outline-none py-2 px-4 max-sm:px-2 max-sm:text-sx text-sm rounded-md w-full"
                />
                <ErrorMessage name="message" component="div" className="text-xs ml-2 mt-2 text-red-500" />
              </div>
              </div>

              <button type="submit" disabled={isSubmitting} className="text-white bg-black  hover:text-black hover:bg-white dark:bg-darkTheme dark:hover:text-white mt-4  dark:hover:bg-darkHover border border-black dark:border-white rounded-4xl px-4 py-2 cursor-pointer flex items-center justify-between gap-2 text-sm">
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
}
