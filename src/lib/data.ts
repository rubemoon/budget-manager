import { FaHome, FaSignOutAlt } from 'react-icons/fa';
import React from 'react';

export const navigations = [
  {
    name: 'Home',
    hash: '/',
  },
  {
    name: 'About',
    hash: '/about',
  },

];

export const navigationsDashboard = [
  {
    name: 'Home',
    icon: React.createElement(FaHome),
    path: '/dashboard',
  },
  {
    name: 'Logout',
    icon: React.createElement(FaSignOutAlt),
    action: 'logout',
  },
];

export const links = [
  {
    name: 'Home',
    hash: '/',
  },
  {
    name: 'About',
    hash: '/about',
  },
  {
    name: 'Login',
    hash: '/login',
  },
  {
    name: 'Dashboard',
    hash: '/dashboard',
  },
];