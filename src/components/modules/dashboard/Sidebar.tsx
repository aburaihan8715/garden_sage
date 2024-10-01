import ActiveLink from '@/components/ui/ActiveLink';
import { FaHome, FaPlusSquare } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <nav>
      {/* ADMIN ROUTES */}

      <ul className="flex flex-col gap-4">
        <li className="flex">
          <ActiveLink className="flex items-center gap-2" href="/">
            <FaHome className="text-2xl md:text-base" />
            <span className="hidden md:block">Home</span>
          </ActiveLink>
        </li>
        <li className="flex">
          <ActiveLink
            className="flex items-center gap-2"
            href="/dashboard/admin"
          >
            <FaHome className="text-2xl md:text-base" />
            <span className="hidden md:block">Admin Home</span>
          </ActiveLink>
        </li>
        <li className="flex">
          <ActiveLink
            className="flex items-center gap-2"
            href="/dashboard/create-room"
          >
            <FaPlusSquare className="text-2xl md:text-base" />
            <span className="hidden md:block">Create Room</span>
          </ActiveLink>
        </li>
        <li className="flex">
          <ActiveLink
            className="flex items-center gap-2"
            href="/dashboard/create-slot"
          >
            <FaPlusSquare className="text-2xl md:text-base" />
            <span className="hidden md:block">Create Slot</span>
          </ActiveLink>
        </li>
        <li className="flex">
          <ActiveLink
            className="flex items-center gap-2"
            href="/dashboard/make-admin"
          >
            <FaPlusSquare className="text-2xl md:text-base" />
            <span className="hidden md:block">Make Admin</span>
          </ActiveLink>
        </li>
      </ul>

      {/* USER ROUTES */}

      <ul className="flex flex-col gap-4">
        <li className="flex">
          <ActiveLink className="flex items-center gap-2" href="/">
            <FaHome className="text-2xl md:text-base" />
            <span className="hidden md:block">Home</span>
          </ActiveLink>
        </li>
        <li className="flex">
          <ActiveLink
            className="flex items-center gap-2"
            href="/dashboard/user"
          >
            <FaHome className="text-2xl md:text-base" />
            <span className="hidden md:block">User Home</span>
          </ActiveLink>
        </li>
        <li className="flex">
          <ActiveLink
            className="flex items-center gap-2"
            href="/dashboard/my-bookings"
          >
            <FaPlusSquare className="text-2xl md:text-base" />
            <span className="hidden md:block">My Bookings</span>
          </ActiveLink>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
