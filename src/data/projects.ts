export interface Project {
  id: string
  title: string
  description: string
  content: string
  tags: string[]
  color: string
  link: string
  desktopImages: string[]
  mobileImages: string[]
}

export const projects: Project[] = [
  {
    id: "menupedia",
    title: "Menupedia",
    description: "Full lifecycle management for a custom restaurant application.",
    content: "We built Menupedia to solve the slow update cycles of traditional restaurant menus. The application features a real-time dashboard for managers to update pricing and availability. The frontend delivers lightning-fast load times for customers scanning QR codes at the table.",
    tags: ["Next.js", "Tailwind CSS"],
    color: "bg-blue-600",
    link: "https://menupedia.example.com",
    desktopImages: ["/placeholder-desktop-1.jpg", "/placeholder-desktop-2.jpg", "/placeholder-desktop-3.jpg"],
    mobileImages: ["/placeholder-mobile-1.jpg", "/placeholder-mobile-2.jpg", "/placeholder-mobile-3.jpg"]
  },
  {
    id: "hastory",
    title: "Hastory",
    description: "Freelance web application delivering accessible user experiences.",
    content: "Hastory required a strictly accessible interface supporting right-to-left languages. We engineered a custom layout engine that flips the UI based on user preference. The result is a highly inclusive platform that serves a diverse international audience.",
    tags: ["Next.js", "TypeScript"],
    color: "bg-emerald-600",
    link: "https://hastory.example.com",
    desktopImages: ["/placeholder-desktop-1.jpg", "/placeholder-desktop-2.jpg", "/placeholder-desktop-3.jpg"],
    mobileImages: ["/placeholder-mobile-1.jpg", "/placeholder-mobile-2.jpg", "/placeholder-mobile-3.jpg"]
  }
]