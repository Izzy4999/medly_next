"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Newspaper, MessagesSquare, Bell, User2 } from "lucide-react";

export default function NavigationMenus() {
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
  console.log(pathname);
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {menus.map((menu, index) => (
          <NavigationMenuItem key={index}>
            <Link href={menu.href} legacyBehavior passHref>
              <NavigationMenuLink
                className={pathname === menu.href ? `text-white bg-blue-500 ${navigationMenuTriggerStyle()}` : navigationMenuTriggerStyle()}
              >
                {menu.icon}
                {menu.label}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
