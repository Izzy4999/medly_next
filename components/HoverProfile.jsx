import { CalendarDays } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import AvatarLogo from "./AvatarLogo";

export default function HoverProfileLogo() {
  return (
    <HoverCard>
      <HoverCardTrigger>
        <AvatarLogo
          fallBack="CN"
          avatar="https://source.unsplash.com/random/200x200?sig=1"
        />
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
        <AvatarLogo
              fallBack="CN"
              avatar="https://source.unsplash.com/random/200x200?sig=1"
            />
          <div className="space-y-1" style={{width:"200px"}}>
            <h4 className="text-sm font-semibold">Phoniex Baker</h4>
            <p className="text-sm line-clamp-2">
            Student | Healthcare Enthusiast| Doctor in a bit | Doctor | Gynecologist | Health Adviser | Open  
            </p>
            <div className="flex items-center pt-2">
              <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
              <span className="text-xs text-muted-foreground">
                Joined December 2021
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
