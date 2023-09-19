import React, { ReactElement } from "react";
import type { NextPageWithLayout } from "@/pages/_app";
import Layout from "../../components/layout";
import { ScrollArea } from "@/components/ui/scroll-area";
import { CreateNewPostCard } from "@/components/CreateNewPostCard";
import { Post } from "@/components/Posts";
import img from "@/assets/img2.jpg";
import Image from "next/image";
import { IoIosMore } from "react-icons/io";

const Feed: NextPageWithLayout = () => {
  return (
    <div className="md:grid grid-cols-4 gap-4 mx-2">
      <div className="hidden md:block">
        <ScrollArea className="h-full">
          <div className="md:block m-4 bg-white rounded-lg  shadow-2xl h-80 w-64">
            <div className="relative">
              <div
                className="rounded-lg h-16 overflow-hidden bg-cover bg-no-repeat"
                style={{
                  background: `url(https://source.unsplash.com/random/400x300?sig=5)`,
                }}
              ></div>
              <div className="absolute h-14 w-14 rounded-full top-8 left-24 right-24 bg-blue-600 overflow-hidden">
                <Image alt="profile pic" src={img} width={100} height={100} />
              </div>
              <div className="mt-8 mx-3">
                <p className="text-center font-bold">Phonix Baker</p>
                <p className="text-xs text-center">
                  Student | Healthcare Enthusiast| Doctor in a bit | Doctor |
                  Gynecologist | Health Adviser | Open
                </p>
              </div>
              <hr className="my-3" />
              <div className="mx-5 my-1 md:text-sm">
                <div className="flex flex-row justify-between mb-1">
                  <p>Followers</p>
                  <p>12.1k</p>
                </div>
                <div className="flex flex-row justify-between mb-1">
                  <p>Following</p>
                  <p>12.1k</p>
                </div>
                <div className="flex flex-row justify-between mb-1">
                  <p>Groups</p>
                  <p>12.1k</p>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden p-2 md:block m-4 rounded-lg shadow-2xl border  h-80 w-64">
            <p className="text-lg mb-2">Groups to join</p>
            <div className="flex flex-row">
              <Image
                src={
                  "https://images.unsplash.com/photo-1693748961027-756b95c4f396?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1306&q=80"
                }
                alt="group logo"
                width={100}
                height={100}
                className="h-16 w-16 overflow-hidden rounded-lg"
              />
            </div>
          </div>
        </ScrollArea>
      </div>
      <div className="md:col-span-2 py-1 mt-4">
        <div className="mb-10">
          <CreateNewPostCard />
        </div>
        <ScrollArea className="md:m-0">
          <Post />
        </ScrollArea>
      </div>
      <div className="hidden  md:block mt-4 px-2 py-1">
        <div className="bg-white shadow-2xl border h-72  rounded-lg mx-3 my-1 py-2 px-2">
          <h1 className="text-lg mb-5">Trending & News</h1>
          <div className="text-xs">
            <div className="flex flex-row items-center justify-between">
              <div>
                <p>Health.Trending</p>
                <p className="text-base font-bold">Aproko Doctor</p>
                <p>2,522 Engagements</p>
              </div>
              <div className="mr-3">
                <IoIosMore size={20} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Feed;
Feed.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
