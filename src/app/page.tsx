import PageClient from "./page-client";

export const metadata = {
  title: "Imaginary.dev Blogging Demo",
  description: "Generated from imaginary.dev's next.js template",
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function Home() {
  return <PageClient />;
}
