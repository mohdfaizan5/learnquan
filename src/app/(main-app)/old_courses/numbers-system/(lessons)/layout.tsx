import CourseNavbar from "@/components/CourseNavbar";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>
    <CourseNavbar/>
    {children}</div>;
}
