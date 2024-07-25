import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contactss = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_xtnuyje", "template_1i4023f", form.current, {
        publicKey: "Ymy3TIK4Q12f8c5_g",
      })
      .then(
        () => {
          // console.log('SUCCESS!');
          toast.success("Sent Successfully!");
        },
        (error) => {
          // console.log('FAILED...', error.text);
          toast.error("FAILED...", error.text);
        }
      );
  };

  return (
    <>
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <form ref={form} onSubmit={sendEmail}>
              <div className="flex flex-wrap -m-2">
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      htmlFor="name"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Name
                    </label>

                    <input
                      type="text"
                      name="name"
                      className="w-full rounded-md border-2 py-1 px-3"
                      required
                    />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      htmlFor="email"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Email
                    </label>

                    <input
                      type="email"
                      name="email"
                      className="w-full rounded-md border-2 py-1 px-3"
                      required
                    />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="relative">
                    <label
                      htmlFor="message"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Message
                    </label>

                    <textarea
                      name="message"
                      id="message"
                      className="w-full border-2 rounded-md h-32 text-base py-1 px-3 resize-none leading-6"
                      required
                    ></textarea>
                  </div>
                </div>
                <div className="p-2 w-full">
                  <button
                    type="submit"
                    className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                  >
                    Submit
                  </button>
                  {/* <ToastContainer /> */}
                  <ToastContainer
                    position="top-right"
                    autoClose={4000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="colored"
                    transition:Bounce
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contactss;
