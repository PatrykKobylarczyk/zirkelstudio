import React from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

const Contact = () => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (event: any) => {
    const isValid = await trigger();
    if (!isValid) {
      event.preventDefault();
    }
  };

  return (
    <main className="w-full h-screen flex flex-col justify-center items-center gap-3 md:gap-12 p-5">
      <div className="text-sm md:text-lg font-bold text-center">
        <p>Have a question? Just want to say hi?</p>
        <p>Please use the box below.</p>
      </div>
      <motion.div
        className="basis-1/2 mt-10 md:mt-0"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <form
          target="_blank"
          onSubmit={onSubmit}
          action="https://formsubmit.co/patrykkobylarczyk@gmail.com"
          method="POST"
        >
          <input
            className="w-full text-xs placeholder-gray-500 p-4 border-[1px] border-b-0 border-gray-500 focus:border-none"
            type="text"
            placeholder="Name"
            {...register("name", {
              maxLength: 100,
            })}
          />

          <input
            className={`w-full text-xs placeholder-gray-500 p-4 border-[1px] ${
              errors.email ? "" : "border-b-0"
            } border-gray-500`}
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
            className="w-full text-xs placeholder-gray-500 p-4 border-[1px] border-gray-500"
            placeholder="Message"
            rows={10}
            cols={50}
            {...register("message", {
              required: true,
              maxLength: 2000,
            })}
            name="message"
          />
          {errors.message && (
            <p className="text-xs text-red-700">
              {errors.message.type === "required" && "This field is required."}
              {errors.message.type === "maxLength" &&
                "Max length is 2000 char."}
            </p>
          )}

          <button
            className="py-4 px-8 mt-2 text-xs placeholder-gray-500 hover:bg-gray-100 transition duration-300 border-[1px]  border-gray-500"
            type="submit"
          >
            Send Message
          </button>
        </form>
      </motion.div>
    </main>
  );
};

export default Contact;
