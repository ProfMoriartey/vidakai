"use client"

import { createContext, useState, useContext } from "react"

type CursorContextType = {
  cursorType: "default" | "inverse" | "pointer" | "project"
  cursorText: string
  cursorColor: "dark" | "light"
  setCursorType: (type: "default"  | "inverse" | "pointer" | "project") => void
  setCursorText: (text: string) => void
  setCursorColor: (color: "dark" | "light") => void
}

const CursorContext = createContext<CursorContextType | undefined>(undefined)

export function CursorProvider({ children }: { children: React.ReactNode }) {
  const [cursorType, setCursorType] = useState<"default" | "inverse" | "pointer" | "project">("default")
  const [cursorText, setCursorText] = useState("")
  const [cursorColor, setCursorColor] = useState<"dark" | "light">("dark")

  return (
    <CursorContext.Provider value={{ 
      cursorType, setCursorType, 
      cursorText, setCursorText, 
      cursorColor, setCursorColor 
    }}>
      {children}
    </CursorContext.Provider>
  )
}

export const useCursor = () => {
  const context = useContext(CursorContext)
  if (!context) throw new Error("useCursor must be used within CursorProvider")
  return context
}