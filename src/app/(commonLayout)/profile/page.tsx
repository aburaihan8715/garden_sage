import SideBar from '@/components/modules/home/SideBar';
import TopBar from '@/components/modules/home/TopBar';
import Image from 'next/image';

import RightBar from '@/components/modules/home/RightBar';
import Feed from '@/components/modules/home/Feed';

export default function Profile() {
  return (
    <>
      <TopBar />
      <div className="flex">
        <SideBar />
        <div className="flex-[9]">
          <div>
            <div className="relative h-80">
              <Image
                className="h-64 w-full object-cover"
                src="/assets/post/3.jpeg"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                alt="Profile Cover"
                width={1000}
                height={320}
              />
              <Image
                className="absolute left-0 right-0 top-36 mx-auto h-36 w-36 rounded-full border-4 border-white object-cover"
                src="/assets/person/7.jpeg"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                alt="Profile User"
                width={150}
                height={150}
              />
            </div>
            <div className="mt-4 flex flex-col items-center justify-center">
              <h4 className="text-2xl">Safak Kocaoglu</h4>
              <span className="font-light">Hello my friends!</span>
            </div>
          </div>
          <div className="mt-4 flex">
            <Feed />
            <RightBar profile />
          </div>
        </div>
      </div>
    </>
  );
}
