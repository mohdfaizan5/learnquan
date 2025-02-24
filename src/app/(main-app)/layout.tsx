import Navbar from "@/components/Navbar";
import { Metadata } from "next";
import "@/styles/typography.css"

export const metadata: Metadata = {
  title: "Courses",
  description: "Generated by create next app",
};

export default  function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <div>

      <Navbar />
      {children}
    </div>
  );
}
