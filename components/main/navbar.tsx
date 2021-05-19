import React, { FC, useEffect, useState, Fragment } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import LoginIcon from '@material-ui/icons/ExitToApp';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

interface NavbarProps {
  page: string;
}

type pagesType = Array<{ name: string; link: string }>;

const pages: pagesType = [
  {
    name: 'Home',
    link: '/',
  },
  {
    name: 'Projects',
    link: '/projects',
  },
  {
    name: 'About',
    link: '/about',
  },
  {
    name: 'Shop',
    link: '/shop',
  },
  {
    name: 'Contact',
    link: '/contact',
  },
];

const Navbar = (props: NavbarProps) => {
  // console.log("page", page);

  // console.log(props.page);
  const [drawer, setDrawer] = useState<boolean>(false);
  const classes = useStyles();

  const Router = useRouter();
  useEffect(() => {
    console.log(Router);
  }, []);

  function toggleDrawer() {
    setDrawer(!drawer);
  }

  const DrawerList = () => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: false,
      })}
      role='presentation'
    >
      <List>
        {[{ text: 'Home', Icon: <HomeIcon />, link: '/' }].map(
          (text, index) => (
            <Link key={index} href={text.link}>
              <ListItem button key={text.text}>
                <ListItemIcon>{text.Icon}</ListItemIcon>
                <ListItemText primary={text.text} />
              </ListItem>
            </Link>
          ),
        )}
      </List>
      <Divider />
      <List>
        {[{ text: 'Login', Icon: <LoginIcon />, link: '/login' }].map(
          (menu, index) => (
            <Link href={menu.link}>
              <ListItem button key={menu.text}>
                <ListItemIcon>{menu.Icon}</ListItemIcon>
                <ListItemText primary={menu.text} />
              </ListItem>
            </Link>
          ),
        )}
      </List>
    </div>
  );
  return (
    <>
      <section>
        <nav className='relative py-6 bg-white'>
          <div className='container mx-auto px-4 flex justify-between items-center'>
            <Link href='/'>
              <a className='text-3xl font-bold leading-none'>
                <img
                  className='h-12'
                  src='/favicon.ico'
                  alt='MTs TechnoNatura Logo'
                  width='auto'
                />
              </a>
            </Link>
            <div className='lg:hidden'>
              <button
                onClick={toggleDrawer}
                className='navbar-burger flex items-center text-green-600 p-3'
              >
                <MenuIcon />

                <title>MTs TechnoNatura menu</title>
              </button>
            </div>

            <ul className='hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6'>
              {pages.map((page, idx) => (
                <Fragment>
                  <li>
                    <Link href={page.link}>
                      <a
                        className={`text-sm  font-bold hover:text-gray-500 ${
                          page.link == props.page
                            ? 'text-green-400'
                            : 'text-gray-300'
                        }`}
                      >
                        {page.name}
                      </a>
                    </Link>
                  </li>
                  {idx != pages.length - 1 && (
                    <li className='text-gray-300'>
                      <svg
                        className='w-4 h-4 current-fill'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='2'
                          d='M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z'
                        ></path>
                      </svg>
                    </li>
                  )}
                </Fragment>
              ))}
            </ul>
            <Link href='/contact'>
              <a className='hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-bold rounded-l-xl rounded-t-xl transition duration-200'>
                Contact Us
              </a>
            </Link>
          </div>
        </nav>
      </section>
      <Drawer anchor='left' open={drawer} onClose={toggleDrawer}>
        <DrawerList />
      </Drawer>
    </>
  );
};

export default Navbar;
