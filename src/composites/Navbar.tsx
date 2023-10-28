import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex flex-wrap justify-between bg-primary h-1/2 text-center p-2">
      <Link href="/">
        <Image src="/y18.svg" alt="y18 logo" width="25" height="25" />
      </Link>
    </nav>
  );
}
