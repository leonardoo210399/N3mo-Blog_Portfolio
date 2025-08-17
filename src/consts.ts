import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "N3mo LC",
  DESCRIPTION: "Welcome to N3mo LC, it's my portfolio and blog for developers.",
  AUTHOR: "Aditya Fulzele",
}

// Work Page
export const WORK: Page = {
  TITLE: "Work",
  DESCRIPTION: "Places I have worked.",
}

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Writing on topics I am passionate about.",
}

// Blind 75 Page
export const BLIND75: Page = {
  TITLE: "Blind 75",
  DESCRIPTION: "Blind 75 LeetCode problem set.",
}

// Projects Page 
export const PROJECTS: Page = {
  TITLE: "Projects",
  DESCRIPTION: "Recent projects I have worked on.",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search all posts and projects by keyword.",
}

// Links
export const LINKS: Links = [
  { 
    TEXT: "Home", 
    HREF: "/", 
  },
  { 
    TEXT: "Work", 
    HREF: "/work", 
  },
  { 
    TEXT: "Blog", 
    HREF: "/blog", 
  },
  {
    TEXT: "Projects",
    HREF: "/projects",
  },
  {
    TEXT: "Blind 75",
    HREF: "/blind75",
  },
]

// Socials
export const SOCIALS: Socials = [
  { 
    NAME: "Email",
    ICON: "email", 
    TEXT: "adityafulzele1122@gmail.com",
    HREF: "mailto:adityafulzele1122@gmail.com",
  },
  { 
    NAME: "Github",
    ICON: "github",
    TEXT: "leonardoo210399",
    HREF: "https://github.com/leonardoo210399"
  },
  { 
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "Aditya Fulzele",
    HREF: "https://www.linkedin.com/in/aditya-fulzele",
  },
  { 
    NAME: "Instagram",
    ICON: "instagram",
    TEXT: "aditya.2129",
    HREF: "https://google.com",
  },
]

