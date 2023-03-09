export const DRAWER_ID = 'dashboard-drawer';

export interface MenuItem {
  label: string;
  href: string;
}

export interface OptionItem {
  label: string;
  value: string;
}

export const MENU: MenuItem[] = [
  {
    label: 'Informasi Cover',
    href: '/dashboard/cover',
  },
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

export const EVENT_OPTION_DEFAULT: OptionItem[] = [
  {
    label: 'Akad Nikah',
    value: 'akad_nikah',
  },
  {
    label: 'Resepsi',
    value: 'resepsi',
  },
];

export const ZONE_TIME: OptionItem[] = [
  {
    label: 'WIB',
    value: 'wib',
  },
  {
    label: 'WITA',
    value: 'wita',
  },
  {
    label: 'WIT',
    value: 'wit',
  },
];

