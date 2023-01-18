import { useRouter } from 'next/navigation';
import UserMenu from './UserMenu';

function RightSide() {
  const router = useRouter();

  const handleLogoutClick = () => {
    router.replace('/auth/sign-out');
  };

  const handleAvatarClick = () => {
    router.push('/dashboard/profile');
  };

  return (
    <div className="hidden lg:flex w-20 py-4 h-screen flex-col items-center bg-base-100 lg:bg-transparent border-l justify-between">
      <button className="btn btn-ghost btn-circle" onClick={handleAvatarClick}>
        <div className="avatar online">
          <div className="w-8 rounded-full">
            <img src="https://placeimg.com/192/192/people" />
          </div>
        </div>
      </button>
      <button className="btn btn-ghost btn-circle" onClick={handleLogoutClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5.636 5.636a9 9 0 1012.728 0M12 3v9"
          />
        </svg>
      </button>
    </div>
  );
}

export default RightSide;
