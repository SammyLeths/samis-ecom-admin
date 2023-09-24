import { Menu } from "lucide-react";
import {
  Sheet,
  SheetHeader,
  SheetTitle,
  SheetContent,
  SheetTrigger,
} from "./ui/sheet";
import MainNav from "./main-nav";
import { cn } from "@/lib/utils";

const MobileNav = ({ className }: React.HTMLAttributes<HTMLElement>) => {
  return (
    <Sheet>
      <SheetTrigger className={cn("lg:hidden", className)}>
        <Menu />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className={cn("text-center font-bold text-lg pb-5")}>
            Menu
          </SheetTitle>
        </SheetHeader>
        <MainNav
          className={cn("flex flex-col items-center space-y-4 space-x-0")}
        />
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
