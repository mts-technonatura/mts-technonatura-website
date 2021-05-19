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

export interface routeI {
  path: string;
  onPage?: string | Array<string>;
  Icon: typeof Icons.HomeIcon | IconType;
  name: string;
  permission?: string | Array<string>;
}
export interface routesI extends routeI {
  routes?: routeI[];
}

const routes: routesI[] = [
  {
    path: '/app', // the url
    Icon: Icons.HomeIcon, // the component being exported from icons/index.js
    name: 'Home', // name that appear in Sidebar
  },
  {
    path: '/app/admin',
    Icon: Icons.FormsIcon,
    name: 'Admin Dashboard',
    permission: ['Developer', 'Owner'],
  },
  {
    path: '/app/arduinoapps',
    onPage: ['/app/arduinoapps', '/app/arduinoapps/[appID]'],
    Icon: SiArduino,
    name: 'Arduino Apps',
  },
  {
    path: '/app/settings',
    onPage: ['/app/settings'],
    Icon: FiSettings,
    name: 'Settings',
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
