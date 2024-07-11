import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { UserCircle2 } from "lucide-react";

export const Header = () => {
  return (
    <header className="flex w-full items-center justify-between lg:h-24 h-16 border-b-2 lg:p-8 p-4 border-slate-100">
      <div className="relative aspect-[254/45] lg:min-w-48 min-w-28">
        <Image src="/logo.png" alt="logo" fill className="absolute" />
      </div>
      <div className="flex lg:min-w-40 min-w-20 items-center justify-between gap-2 ring-2 ring-slate-200 rounded-md px-2 py-1">
        <Avatar className="h-full lg:block hidden aspect-square m-0 p-0">
          <AvatarImage src={""} alt="profile-picture" />
          <AvatarFallback>
            <UserCircle2 />
          </AvatarFallback>
        </Avatar>
        <h1 className="text-black lg:text-lg lg:m-0 m-2 text-xs lg:font-bold font-medium">
          Anon User
        </h1>
      </div>
    </header>
  );
};
