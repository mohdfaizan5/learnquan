import CourseNavbar from "@/components/CourseNavbar";
import { getUser } from "@/lib/lucia";
import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Courses",
  description: "A collection of all the courses",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await getUser();
  if (!user) redirect("/login");

  return (
    <div>
      <CourseNavbar />
      {children}
      
    </div>
  );
}
