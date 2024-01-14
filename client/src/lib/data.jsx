import { BsChatSquareTextFill } from "react-icons/bs";
import { FaCogs, FaHouseDamage, FaHouseUser, FaQuestionCircle, FaSignOutAlt, FaUser, FaUserCircle } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";

export const DASHBOARD_LINKS = [
  {
    key: 'dashboard',
    label: 'Dashboard',
    path: '/profile',
    icon: <MdDashboard />
  },
]

export const DASHBOARD_TOP_LINKS = [

  {
    key: 'update',
    label: 'Update Profile',
    path: '/update-profile',
    icon: <FaUser />
  },
  {
    key: 'create',
    label: 'Create Listing',
    path: '/products',
    icon: <FaHouseUser />
  },
  {
    key: 'show',
    label: 'Show Listing',
    path: '/orders',
    icon: <FaHouseDamage />
  },
  {
    key: 'messages',
    label: 'Messages',
    path: '/messages',
    icon: <BsChatSquareTextFill />
  },
]
export const DASHBOARD_BOTTOM_LINKS = [
  {
    key: 'settings',
    label: 'Settings',
    path: '/settings',
    icon: <FaCogs />
  },
  {
    key: 'products',
    label: 'Help & Support',
    path: '/products',
    icon: <FaQuestionCircle />
  },
  {
    key: 'logout',
    label: 'Logout',
    path: '/products',
    icon: <FaSignOutAlt />
  },

]

export const USER_LINKS = [
  {
    key: 'profile',
    label: 'Profile',
    path: '/products',
    icon: <FaUserCircle />
  },
  {
    key: 'settings',
    label: 'Settings',
    path: '/products',
    icon: <FaCogs />
  },
  {
    key: 'signout',
    label: 'Sign Out',
    path: '/products',
    icon: <FaSignOutAlt />
  },
]