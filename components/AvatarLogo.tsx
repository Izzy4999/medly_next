import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type Props = {
  avatar: string;
  fallBack: string;
};

function AvatarLogo({ avatar, fallBack }: Props) {
  return (
    <Avatar>
      <AvatarImage src={avatar} />
      <AvatarFallback>{fallBack}</AvatarFallback>
    </Avatar>
  );
}

export default AvatarLogo;
