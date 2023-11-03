import { categories } from "@/utils/constants";
import { redirect } from "next/navigation";

export default async function Home() {
  const defaultPageView = "paginated";
  redirect(`/${categories[0]}?pageView=${defaultPageView}&p=0`);
}
