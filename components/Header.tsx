import Image from "next/image";
import React from "react";
import logo from "@/assets/logo-icon.png";
import { Input } from "./ui/input";
import AvatarLogo from "./AvatarLogo";
import NavigationMenus from "./Menu";
import { SideMenu } from "./SideMenu";
import ProfileMenu  from "./DropDownProfile";

type Props = {};

function Header({}: Props) {
  return (
    <div className="flex flex-row py-2 px-2 items-center justify-between md:py-0 space-x-6 w-full">
      <div className="flex flex-row items-center">
        <div className="md:hidden">
          <SideMenu />
        </div>
        <Image
          src={logo}
          alt="logo"
          width={70}
          height={70}
          className="hidden md:block ms-4"
        />
        <Input placeholder="Search" className="hidden md:block w-96 ms-2" />
      </div>
      <div className="hidden md:block">
        <NavigationMenus />
      </div>
      <div className="flex flex-row  items-center me-10 md:space-x-3 pe-3">
        <p className="hidden md:block font-bold text-base">Phonix Baker</p>
        <ProfileMenu />
      </div>
    </div>
  );
}

export default Header;
