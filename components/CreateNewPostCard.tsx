import { BellRing, VideoIcon, ImageIcon as Img, Video } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Input } from "./ui/input";
import AvatarLogo from "./AvatarLogo";

type CardProps = React.ComponentProps<typeof Card>;

export function CreateNewPostCard({ className, ...props }: CardProps) {
  return (
    <Card className={cn("w-full", className)} {...props}>
      <CardContent className="py-2">
        <div className="flex flex-row">
          <div className="mr-2">
            <AvatarLogo
              fallBack="CN"
              avatar="https://source.unsplash.com/random/200x200?sig=1"
            />
          </div>
          <Input name="post" placeholder="what do you feel like saying?" className="focus:outline-none"/>
        </div>
      </CardContent>
      <div className="pb-2 w-full grid grid-cols-3">
        <Button className="w-full" variant={"ghost"}>
          <Img className="mr-2 h-4 w-4" /> Image
        </Button>
        <Button className="w-full" variant={"ghost"}>
          <VideoIcon className="mr-2 h-4 w-4" /> Video
        </Button>
        <Button className="w-full" variant={"ghost"}>
          Post
        </Button>
      </div>
    </Card>
  );
}
