import type { Metadata } from "next";
import "@/styles/courseContent.css";

export const metadata: Metadata = {
  title: "Courses",
  description: "A collection of all the courses",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      {children}
    </div>
  );
}
