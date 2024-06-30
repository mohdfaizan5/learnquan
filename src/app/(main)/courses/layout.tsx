import CourseNavbar from "@/components/CourseNavbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Courses",
  description: "A collection of all the courses",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <CourseNavbar />
      {children}
    </div>
  );
}
