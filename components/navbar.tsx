import { UserButton, auth } from "@clerk/nextjs";
import MainNav from "@/components/main-nav";
import StoreSwitcher from "./store-switcher";
import { redirect } from "next/navigation";
import prismadb from "@/lib/prismadb";
import { ThemeToggle } from "@/components/theme-toggle";
import MobileNav from "./mobile-nav";
import Link from "next/link";
import Image from "next/image";

const Navbar = async () => {
  const { userId } = auth();

  if (!userId) {
    redirect("/sign-in");
  }

  const stores = await prismadb.store.findMany({
    where: {
      userId,
    },
  });

  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
        <Link href="/" className="hidden md:flex mr-2 md:mr-6">
          <p className="font-bold text-xl">
            <Image
              src="/samis-ecom-admin.png"
              alt="logo"
              width={100}
              height={31}
            />
          </p>
        </Link>
        <StoreSwitcher items={stores} />
        <MainNav className="mx-6 hidden lg:flex" />
        <div className="ml-auto flex items-center space-x-4">
          <MobileNav className="" />
          <ThemeToggle />
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
