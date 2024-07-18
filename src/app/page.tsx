import { getUser } from "@/lib/lucia";
import { redirect } from "next/navigation";

const page = async() => {
  const user = await getUser();
  if (user) redirect("/home");

  return <div>landing page</div>;
};

export default page;
