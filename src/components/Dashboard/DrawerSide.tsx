import Link from 'next/link';
import { DRAWER_ID, MenuItem } from './constants';

interface Props {
  menu: MenuItem[];
}

function DrawerSide({ menu }: Props) {
  return (
    <div className="drawer-side">
      <label htmlFor={DRAWER_ID} className="drawer-overlay" />
      <ul className="menu p-4 w-80 bg-base-100 lg:bg-transparent text-base-content gap-4">
        <li className="font-bold text-center">
          <Link href="/dashboard">
            Powdding<sup>beta</sup>
          </Link>
        </li>
        {menu.map(({ href, label }) => (
          <li key={href}>
            <Link href={href}>{label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DrawerSide;
