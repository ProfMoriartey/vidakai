"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Button } from "./ui/button"
import { submitContact } from "../actions/contact"
import { useCursor } from "../context/CursorContext"
import MagneticElement from "./MagneticElement"

export default function Footer() {
  const { setCursorType, setCursorText, setCursorColor } = useCursor()
  const [status, setStatus] = useState<string | null>(null)
  const [activeLang, setActiveLang] = useState("EN")

  const languages = [
    { code: "EN", label: "English", dir: "ltr" },
    { code: "AR", label: "العربية", dir: "rtl" },
    { code: "RU", label: "Русский", dir: "ltr" }
  ]

  async function handleAction(formData: FormData) {
    setStatus("Sending...")
    const result = await submitContact(formData)
    if (result.error) setStatus(result.error)
    if (result.success) setStatus(result.success)
  }

  return (
    <footer 
      className="bg-black text-white py-24 px-4 sm:px-6 lg:px-8" 
      id="contact"
      onMouseEnter={() => setCursorColor("light")}
      onMouseLeave={() => setCursorColor("dark")}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        <div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
            Let&apos;s build something exceptional.
          </h2>
          <p className="text-gray-400 text-lg mb-12 max-w-md">
            Reach out to discuss your next web application or international digital campaign.
          </p>

          <div className="flex gap-4 mb-12">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setActiveLang(lang.code)
                  document.documentElement.dir = lang.dir
                }}
                className={`text-sm font-medium transition-colors ${
                  activeLang === lang.code ? "text-white" : "text-gray-600 hover:text-gray-300"
                }`}
                onMouseEnter={() => {
                  setCursorType("pointer")
                  setCursorText(lang.code)
                }}
                onMouseLeave={() => {
                  setCursorType("default")
                  setCursorText("")
                }}
              >
                {lang.label}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white/5 p-8 rounded-2xl border border-white/10 text-black">
          <form action={handleAction} className="space-y-6">
            <div>
              <Input 
                name="name" 
                placeholder="Name" 
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 h-14"
                required 
              />
            </div>
            <div>
              <Input 
                name="email" 
                type="email" 
                placeholder="Email Address" 
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 h-14"
                required 
              />
            </div>
            <div>
              <Textarea 
                name="message" 
                placeholder="Tell us about your project" 
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 min-h-[150px] resize-none"
                required 
              />
            </div>
            
            <MagneticElement cursorText="Send" className="w-full">
              <Button 
                type="submit" 
                className="w-full h-14 bg-white text-black hover:bg-gray-200 text-base font-bold tracking-tight rounded-full"
              >
                Submit Request
              </Button>
            </MagneticElement>

            {status && (
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-sm text-center text-gray-300 mt-4"
              >
                {status}
              </motion.p>
            )}
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
        <p>© {new Date().getFullYear()} Studio. All rights reserved.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-white transition-colors">Twitter</a>
          <a href="#" className="hover:text-white transition-colors">GitHub</a>
        </div>
      </div>
    </footer>
  )
}