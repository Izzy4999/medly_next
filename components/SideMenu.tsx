import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";

import logo from "@/assets/logo-icon.png";
import Link from "next/link";
import { Newspaper, MessagesSquare, Bell, User2 } from "lucide-react";
import { navigationMenuTriggerStyle } from "./ui/navigation-menu";
import {CgMenuGridR} from "react-icons/cg"
import { usePathname } from "next/navigation";

export function SideMenu() {
  const pathname = usePathname();
  const menus = [
    {
      id: 1,
      label: "Feed",
      href: "/feed",
      icon: <Newspaper className="me-1" />,
    },
    {
      id: 1,
      label: "Chat",
      href: "/chat",
      icon: <MessagesSquare className="me-1" />,
    },
    {
      id: 1,
      label: "Groups",
      href: "/groups",
      icon: <User2 className="me-1" />,
    },
    {
      id: 1,
      label: "Notification",
      href: "/notification",
      icon: <Bell className="me-1" />,
    },
  ];
  return (
    <Sheet>
      <SheetTrigger asChild>
          <CgMenuGridR size={30} className="ml-1"/>
      </SheetTrigger>
      <SheetContent side={"left"}>
        <SheetHeader>
          <SheetTitle>
            {" "}
            <Image
              src={logo}
              alt="logo"
              width={80}
              height={80}
              className="md:ms-4"
            />
          </SheetTitle>
        </SheetHeader>
        <div className="">
          {menus.map((menu, index) => (
            <div className={"px-1 py-2"} key={index}>
              <Link
                href={menu.href}
                className={
                  pathname === menu.href
                    ? `bg-slate-300 ${navigationMenuTriggerStyle()}`
                    : navigationMenuTriggerStyle()
                }
              >
                {menu.icon}
                {menu.label}
              </Link>
            </div>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}
