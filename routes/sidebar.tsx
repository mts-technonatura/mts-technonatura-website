/**
 * ⚠ These are used just to render the Sidebar!
 * You can include any link here, local or external.
 *
 * If you're looking to actual Router routes, go to
 * `routes/index.js`
 */

import * as Icons from 'icons';
import { SiArduino } from 'react-icons/si';
import { IconType } from 'react-icons';
import { FiSettings } from 'react-icons/fi';
import { FaBlog } from 'react-icons/fa';
import { AiOutlineCloudServer } from 'react-icons/ai';

export interface routeI {
  path: string;
  onPage?: string | Array<string>;
  Icon: typeof Icons.HomeIcon | IconType;
  name: string;
  permission?: string | Array<string>;
  type: 'up' | 'down';
}
export interface routesI extends routeI {
  routes?: routeI[];
}

const routes: routesI[] = [
  {
    path: '/dashboard', // the url
    Icon: Icons.HomeIcon, // the component being exported from icons/index.js
    name: 'Home', // name that appear in Sidebar
    type: 'up',
  },
  {
    path: '/dashboard/admin',
    Icon: Icons.FormsIcon,
    name: 'Admin Dashboard',
    permission: ['Developer', 'Owner'],
    type: 'up',
  },
  {
    path: '/dashboard/blog',
    onPage: ['/dashboard/blog', '/dashboard/blog/[blogID]'],
    Icon: FaBlog,
    name: 'Manage Blog',
    type: 'up',
  },
  {
    path: '/dashboard/api',
    onPage: ['/dashboard/api', '/dashboard/api/[apiappID]'],
    Icon: AiOutlineCloudServer,
    name: 'Manage API Apps',
    type: 'up',
  },
  {
    path: '/dashboard/arduinoapps',
    onPage: ['/dashboard/arduinoapps', '/dashboard/arduinoapps/[appID]'],
    Icon: SiArduino,
    name: 'Arduino Apps',
    type: 'up',
  },
  {
    path: '/dashboard/settings',
    onPage: ['/dashboard/settings'],
    Icon: FiSettings,
    name: 'Settings',
    type: 'down',
  },
];

type checkOnPageT = (route: string, onPage: string | Array<string>) => boolean;

export const checkOnPage: checkOnPageT = (route, onPage) => {
  if (Array.isArray(onPage)) {
    for (let i: number = 0; i < onPage.length; i++) {
      if (onPage[i] == route) {
        return true;
      }
    }
  } else {
    if (route == onPage) return true;
  }

  return false;
};

export default routes;
