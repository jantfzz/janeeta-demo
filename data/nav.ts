import type { IconName } from "@/components/Icons";

// Navbar items, in order. Numbers (01, 02…) are added automatically.
export const navItems: { href: string; label: string; icon: IconName }[] = [
  { href: "/work", label: "Work", icon: "work" },
  { href: "/research", label: "Research", icon: "research" },
  { href: "/experience", label: "Experience", icon: "experience" },
  { href: "/about", label: "About", icon: "about" },
  { href: "/resume", label: "Resume", icon: "resume" },
  { href: "/skills", label: "Skills", icon: "skills" },
  { href: "/hobbies", label: "Hobbies & Activities", icon: "hobbies" },
  { href: "/contact", label: "Contact", icon: "contact" },
];
