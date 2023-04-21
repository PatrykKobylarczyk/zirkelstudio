import React from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

//COMPONENTS
import PageTransitioning from "@/components/PageTransitioning";

const Contact = () => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (event: React.FormEvent) => {
    const isValid = await trigger();
    if (!isValid) {
      event.preventDefault();
    }
  };

  return (
    <>
      <PageTransitioning />
      <main className="w-full md:h-screen flex flex-col justify-center items-center gap-3 md:gap-12 px-5 py-24">
        <div className="text-sm md:text-lg font-bold text-center">
          <div className="overflow-hidden">
            <motion.p
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.75, delay: 0.2, ease:[0.14, 0.99, 0.43, 1.01] }}
            >
              Have a question? Just want to say hi?
            </motion.p>
          </div>
          <div className="overflow-hidden">
            <motion.p
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.75, delay: 0.5, ease:[0.14, 0.99, 0.43, 1.01] }}
            >
              Please use the box below
              <span className="font-bold text-[#DA0F40]">.</span>
            </motion.p>
          </div>
        </div>
        <motion.div
          className="basis-1/2 mt-10 md:mt-0"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2, duration: 0.5, ease:[0.14, 0.99, 0.43, 1.01] }}
        >
          <form
            target="_blank"
            onSubmit={onSubmit}
            action="https://formsubmit.co/patrykkobylarczyk@gmail.com"
            method="POST"
            className="flex flex-col justify-end"
          >
            <input
              className="w-full text-xs placeholder-gray-500 p-4 border-[1px] border-b-0 border-gray-500 focus:border-none rounded-none"
              type="text"
              placeholder="Name"
              {...register("name", {
                maxLength: 100,
              })}
            />

            <input
              className={`w-full text-xs placeholder-gray-500 p-4 border-[1px] ${
                errors.email ? "" : "border-b-0"
              } border-gray-500 rounded-none`}
              type="text"
              placeholder="Email"
              {...register("email", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
            />
            {errors.email && (
              <p className="text-xs text-red-700 my-1">
                {errors.email.type === "required" && "This field is required."}
                {errors.email.type === "pattern" && "Invalid email address."}
              </p>
            )}

            <textarea
              className="w-full text-xs placeholder-gray-500 p-4 border-[1px] border-gray-500 rounded-none"
              placeholder="Message"
              rows={5}
              cols={50}
              {...register("message", {
                required: true,
                maxLength: 2000,
              })}
              name="message"
            />
            {errors.message && (
              <p className="text-xs text-red-700">
                {errors.message.type === "required" &&
                  "This field is required."}
                {errors.message.type === "maxLength" &&
                  "Max length is 2000 char."}
              </p>
            )}

            <motion.button
              className="self-end py-4 px-8 mt-3 md:mt-6 text-xs placeholder-gray-500 hover:bg-gray-100 transition duration-300 border-[1px]  border-gray-500 rounded-none"
              type="submit"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.8, duration: 0.5, ease:[0.14, 0.99, 0.43, 1.01] }}
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </main>
    </>
  );
};

export default Contact;
