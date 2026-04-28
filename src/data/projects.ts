export interface Project {
    id: string
    title: string
    description: string
    tags: string[]
    color: string
  }
  
  export const projects: Project[] = [
    {
      id: "menupedia",
      title: "Menupedia",
      description: "Full lifecycle management and development for a custom restaurant application.",
      tags: ["Next.js", "Tailwind CSS"],
      color: "bg-blue-600"
    },
    {
      id: "hastory",
      title: "Hastory",
      description: "Freelance web application delivering fast and accessible user experiences.",
      tags: ["Next.js", "TypeScript"],
      color: "bg-emerald-600"
    }
  ]