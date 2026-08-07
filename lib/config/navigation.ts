export interface NavigationItem {
  label: string;
  href: string;
  showInNavbar?: boolean;
}

export const navigation: NavigationItem[] = [
  {
    label: "Home",
    href: "/",
    showInNavbar: true,
  },
  {
    label: "Services",
    href: "/services",
    showInNavbar: true,
  },
  {
    label: "About",
    href: "/about",
    showInNavbar: true,
  },
  {
    label: "Book",
    href: "/book",
    showInNavbar: true,
  },
];