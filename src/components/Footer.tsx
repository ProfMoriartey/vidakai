"use client";

import { useState, useActionState } from "react";
import { motion } from "framer-motion";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { sendContactEmail } from "../actions/contact";
import { useCursor } from "../context/CursorContext";
import MagneticElement from "./MagneticElement";

const initialState = {
  error: "",
  success: false,
  message: "",
};

export default function Footer() {
  const { setCursorType, setCursorText, setCursorColor } = useCursor();
  const [activeLang, setActiveLang] = useState("EN");

  // Connect the server action to the UI state
  const [state, formAction, isPending] = useActionState(
    sendContactEmail,
    initialState,
  );

  const languages = [
    { code: "EN", label: "English", dir: "ltr" },
    { code: "AR", label: "العربية", dir: "rtl" },
    { code: "RU", label: "Русский", dir: "ltr" },
  ];

  return (
    <footer
      className="bg-black px-4 py-24 text-white sm:px-6 lg:px-8"
      id="contact"
      onMouseEnter={() => setCursorColor("light")}
      onMouseLeave={() => setCursorColor("dark")}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 lg:grid-cols-2">
        <div>
          <h2 className="mb-6 text-4xl font-bold tracking-tighter md:text-6xl">
            Let&apos;s build something exceptional.
          </h2>
          <p className="mb-12 max-w-md text-lg text-gray-400">
            Reach out to discuss your next web application or international
            digital campaign.
          </p>

          <div className="mb-12 flex gap-4">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setActiveLang(lang.code);
                  document.documentElement.dir = lang.dir;
                }}
                className={`text-sm font-medium transition-colors ${
                  activeLang === lang.code
                    ? "text-white"
                    : "text-gray-600 hover:text-gray-300"
                }`}
                onMouseEnter={() => {
                  setCursorType("pointer");
                  setCursorText(lang.code);
                }}
                onMouseLeave={() => {
                  setCursorType("default");
                  setCursorText("");
                }}
              >
                {lang.label}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-black">
          <form action={formAction} className="space-y-6">
            <div>
              <Input
                name="name"
                placeholder="Name"
                className="h-14 border-white/20 bg-white/10 text-white placeholder:text-gray-400"
                required
              />
            </div>
            <div>
              <Input
                name="email"
                type="email"
                placeholder="Email Address"
                className="h-14 border-white/20 bg-white/10 text-white placeholder:text-gray-400"
                required
              />
            </div>
            <div>
              <Textarea
                name="message"
                placeholder="Tell us about your project"
                className="min-h-[150px] resize-none border-white/20 bg-white/10 text-white placeholder:text-gray-400"
                required
              />
            </div>

            <MagneticElement cursorText="Send" className="w-full">
              <Button
                type="submit"
                disabled={isPending}
                className="h-14 w-full rounded-full bg-white text-base font-bold tracking-tight text-black transition-colors hover:bg-gray-200 disabled:opacity-50"
              >
                {isPending ? "Sending..." : "Submit Request"}
              </Button>
            </MagneticElement>

            {/* Status Messages */}
            {state?.error && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 text-center text-sm text-red-400"
              >
                {state.error}
              </motion.p>
            )}
            {state?.success && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 text-center text-sm text-green-400"
              >
                {state.message}
              </motion.p>
            )}
          </form>
        </div>
      </div>

      <div className="mx-auto mt-24 flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-gray-500 md:flex-row">
        <p>© {new Date().getFullYear()} Studio. All rights reserved.</p>
        <div className="flex gap-8">
          <a href="#" className="transition-colors hover:text-white">
            LinkedIn
          </a>
          <a href="#" className="transition-colors hover:text-white">
            Twitter
          </a>
          <a href="#" className="transition-colors hover:text-white">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
