import * as React from "react";

import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";
import HoverProfileLogo from "./HoverProfile";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { MdOutlineInsertComment } from "react-icons/md";
import { FiShare } from "react-icons/fi";
import { PiGifDuotone } from "react-icons/pi";
import { SmileIcon } from "lucide-react";
import { ImageIcon, LoopIcon } from "@radix-ui/react-icons";
import AvatarLogo from "./AvatarLogo";
import { cn } from "@/lib/utils";

type CardProps = React.ComponentProps<typeof Card>;
export function Post({ className, ...props }: CardProps) {
  const [newComment,SetNewComment] = React.useState<string>("")
  const post = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
    deleniti dignissimos pariatur autem magnam nemo quo aut tempore id
    architecto labore saepe ea a eveniet corporis esse molestiae,
    explicabo laboriosam!`;
  return (
    <Card className={cn("w-full text-sm md:w-full my-2 md:text-base", className)} {...props}>
      <CardHeader>
        <div className="flex flex-row items-start">
          <div className="mr-3 md:mr-5">
            <HoverProfileLogo />
          </div>
          <div className="">
            <p className="text-base">Ameni Blenge</p>
            <p className="text-sm font-light line-clamp-1">
              Student | Healthcare Enthusiast | Doctor in a bit | Doctor |
              Gynecologist | Health Adviser | Open
            </p>
            <p className="font-light">2hr.Ghana</p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="">
          <p className="text-sm  text-justify line-clamp-3">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum
            quibusdam voluptates molestias, eaque eius libero. Quas, quis?
            Explicabo provident, repudiandae recusandae dolor facere rerum,
            delectus fuga at omnis alias sequi. Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Molestias doloribus, harum veritatis
            corrupti architecto mollitia dolor cumque. Et iusto alias id,
            debitis vitae iste in distinctio exercitationem totam similique
            enim.!
          </p>
          <p className="text-blue-700 text-right">...see more</p>
          <div className="h-64 md:h-72 rounded-md overflow-hidden border-slate-500 w-full bg-green-400 "></div>
          <div className="flex flex-row justify-between item-center">
            <p className="flex flex-row items-center">
              <AiFillHeart color={"red"} /> 188
            </p>
            <div className="flex flex-row space-x-2">
              <p>9 Comments</p>
              <p>5 Reposts</p>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="flex flex-row items-center justify-between w-full border-t-2 border-b-2 py-1">
            <div className="flex flex-row justify-center items-center space-x-1">
              <AiOutlineHeart />
              <p>Like</p>
            </div>
            <div className="flex flex-row justify-center items-center space-x-1">
              <MdOutlineInsertComment />
              <p>Comment</p>
            </div>
            <div className="flex flex-row justify-center items-center space-x-1">
              <LoopIcon />
              <p>Repost</p>
            </div>
            <div className="flex flex-row justify-center items-center space-x-1">
              <FiShare />
              <p>Like</p>
            </div>
          </div>
          <div className="w-full">
            <div className="border-2 mt-2 md:mt-1 rounded-full flex flex-row justify-between md:justify-normal items-center px-2 py-1">
            <HoverProfileLogo />
              <input placeholder="Add comment" className="flex-grow mx-2 md:mx-3 focus:outline-none" onChange={(e)=>{SetNewComment(e.currentTarget.value)}}/>
              <div className=" hidden md:flex flex-row items-center space-x-0.5 md:space-x-4 md:mr-4 ">
                <PiGifDuotone size={20} />
                <SmileIcon size={20} />
                <ImageIcon  />
              </div>
            </div>
            {newComment.length >4 && <button className="rounded-full bg-sky-700 px-2 text-white mt-2 ml-4">Post</button>}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
