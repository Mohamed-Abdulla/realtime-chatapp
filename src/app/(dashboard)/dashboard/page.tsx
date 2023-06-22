import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { FC } from "react";

interface pageProps {}

const page = async ({}) => {
  const session = await getServerSession(authOptions);
  return <p className="w-1/2"> Dashboard</p>;
};

export default page;
