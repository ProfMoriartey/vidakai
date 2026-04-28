export interface NavItem {
    label: string
    href: string
  }
  
  export const navLinks: NavItem[] = [
    { label: "Services", href: "/services" },
    { label: "Work", href: "/work" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" }
  ]