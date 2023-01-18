import Link from 'next/link';
import { USER_MENU } from './constants';

function UserMenu() {
  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <button className="btn btn-ghost btn-circle">
          <div className="avatar online">
            <div className="w-8 rounded-full">
              <img src="https://placeimg.com/192/192/people" />
            </div>
          </div>
        </button>
      </label>
      <ul
        tabIndex={0}
        className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
      >
        {USER_MENU.map(({ href, label }) => (
          <li key={href}>
            <Link href={href}>{label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserMenu;
