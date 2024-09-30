import Image from "next/image";
import Link from "next/link";
import { MdChat, MdNotifications, MdPerson, MdSearch } from "react-icons/md";

export default function TopBar() {
  return (
    <div className="h-12 w-full bg-blue-600 flex items-center sticky top-0 z-50">
      <div className="flex-[3]">
        <span className="text-white text-xl font-bold ml-5 cursor-pointer">Lamasocial</span>
      </div>
      <div className="flex-[5]">
        <div className="bg-white h-8 rounded-full flex items-center">
          <MdSearch className="text-gray-500 ml-3" />
          <input placeholder="Search for friend, post or video" className="bg-transparent border-none focus:outline-none pl-3 w-4/5" />
        </div>
      </div>
      <div className="flex-[4] flex items-center justify-around text-white">
        <div className="space-x-4">
          <Link href={`/`} className="cursor-pointer">
            Homepage
          </Link>
          <Link href={`/`} className="cursor-pointer">
            Timeline
          </Link>
          <Link href={`/profile`} className="cursor-pointer">
            Profile
          </Link>
        </div>
        <div className="flex space-x-6">
          <div className="relative cursor-pointer">
            <MdPerson className="text-2xl" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full text-xs w-4 h-4 flex items-center justify-center">1</span>
          </div>
          <div className="relative cursor-pointer">
            <MdChat className="text-2xl" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full text-xs w-4 h-4 flex items-center justify-center">2</span>
          </div>
          <div className="relative cursor-pointer">
            <MdNotifications className="text-2xl" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full text-xs w-4 h-4 flex items-center justify-center">1</span>
          </div>
        </div>
        <div className="relative w-8 h-8 cursor-pointer">
          <Image
            src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            alt="Profile Picture"
            layout="fill"
            objectFit="cover"
            className="rounded-full"
          />
        </div>
      </div>
    </div>
  );
}
