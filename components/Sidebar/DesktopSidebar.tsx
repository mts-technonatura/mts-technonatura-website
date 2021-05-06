import React from 'react';

import SidebarContent from './SidebarContent';

function DesktopSidebar() {
  return (
    <aside className='z-30 flex-shrink-0 hidden w-auto overflow-y-auto bg-white dark:bg-gray-800 lg:block'>
      <SidebarContent />
    </aside>
  );
}

export default DesktopSidebar;
