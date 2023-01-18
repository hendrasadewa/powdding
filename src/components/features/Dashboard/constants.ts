export const DRAWER_ID = 'dashboard-drawer';

export interface MenuItem {
  label: string;
  href: string;
}

export const MENU: MenuItem[] = [
  {
    label: 'Informasi Mempelai',
    href: '/dashboard/bride',
  },
  {
    label: 'Informasi Acara',
    href: '/dashboard/event',
  },
  {
    label: 'Kelola Buku tamu',
    href: '/dashboard/guestbook',
  },
  {
    label: 'Reservasi',
    href: '/dashboard/rsvp',
  },
  {
    label: 'Ucapan Pernikahan',
    href: '/dashboard/wishes',
  },
];

export const USER_MENU: MenuItem[] = [
  {
    label: 'Profile',
    href: '/dashboard/profile',
  },
  {
    label: 'Keluar',
    href: '/auth/sign-out',
  },
];
