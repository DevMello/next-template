import { title } from "process"

export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Covalent Project",
  description:
    "An easy and simple way to fund your research projects.",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Blog",
      href: "/blog",
    },
    {
      title: "Community",
      href: "/community",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ],
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/devmello/covalent"
  },
}
