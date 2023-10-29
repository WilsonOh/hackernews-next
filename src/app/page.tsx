import { categories } from "@/utils/constants";
import { redirect } from "next/navigation";

export default async function Home() {
  redirect(`/${categories[0]}`);
}
