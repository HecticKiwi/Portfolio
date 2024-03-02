"use client";

import emailjs from "@emailjs/browser";
import { Send } from "lucide-react";
import { FormEvent, useRef, useState } from "react";
import { toast } from "react-toastify";

const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null!);
  const [submitted, setSubmitted] = useState(false);

  const sendEmail = async (e: FormEvent) => {
    e.preventDefault();

    try {
      setSubmitted(true);

      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID!,
        process.env.NEXT_PUBLIC_TEMPLATE_ID!,
        form.current,
        {
          publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY!,
        },
      );

      // Just leave submitted as true so the user can't resend the message
      toast.success("Message sent!");
    } catch (error: any) {
      setSubmitted(false);
      toast.error("Message failed to send. Please try again later.");
    }
  };

  return (
    <>
      <form className="space-y-5 text-base" ref={form} onSubmit={sendEmail}>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="name"
            className="text-sm font-semibold text-neutral-400"
          >
            Name
          </label>
          <input
            id="name"
            required
            type="text"
            name="name"
            disabled={submitted}
            className="rounded-md border border-neutral-500 bg-transparent p-2 disabled:cursor-not-allowed disabled:opacity-50"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="name"
            className="text-sm font-semibold text-neutral-400"
          >
            Email
          </label>
          <input
            id="email"
            required
            type="email"
            name="email"
            disabled={submitted}
            className="rounded-md border border-neutral-500 bg-transparent p-2 disabled:cursor-not-allowed disabled:opacity-50"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="message"
            className="text-sm font-semibold text-neutral-400"
          >
            Message
          </label>
          <textarea
            id="message"
            required
            name="message"
            disabled={submitted}
            className="rounded-md border border-neutral-500 bg-transparent p-2 disabled:cursor-not-allowed disabled:opacity-50"
          />
        </div>
        <button
          type="submit"
          disabled={submitted}
          className="bg flex items-center gap-2 rounded-md border border-neutral-600 px-3 py-2 text-lg transition hover:bg-neutral-600 disabled:pointer-events-none disabled:opacity-50"
        >
          <Send />
          Send
        </button>
      </form>
    </>
  );
};

export default ContactForm;
