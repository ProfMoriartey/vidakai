"use client"

import { createContext, useState, useContext } from "react"

type CursorContextType = {
  cursorType: "default" | "pointer" | "project"
  cursorText: string
  setCursorType: (type: "default" | "pointer" | "project") => void
  setCursorText: (text: string) => void
}

const CursorContext = createContext<CursorContextType | undefined>(undefined)

export function CursorProvider({ children }: { children: React.ReactNode }) {
  const [cursorType, setCursorType] = useState<"default" | "pointer" | "project">("default")
  const [cursorText, setCursorText] = useState("")

  return (
    <CursorContext.Provider value={{ cursorType, setCursorText, setCursorType, cursorText }}>
      {children}
    </CursorContext.Provider>
  )
}

export const useCursor = () => {
  const context = useContext(CursorContext)
  if (!context) throw new Error("useCursor must be used within CursorProvider")
  return context
}