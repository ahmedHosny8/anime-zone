import { useContext } from 'react';
import { AuthContext } from '../context/auth-context';
import { Link } from 'react-router-dom';
import { UserRound } from 'lucide-react';
import Button from './Button';
import DarkModeToggle from './DarkModeToggle';
import akatsukiLogo from '../assets/akatsuki-logo.png';

function Header() {
  const { isLoggedIn, handleLogout } = useContext(AuthContext);

  return (
    <header className="bg-[var(--color-gray-0)] px-4 py-2 shadow-sm shadow-[var(--color-shadow-sm)]">
      <div className="max-w-screen-lg mx-auto">
        <div className="grid grid-cols-3 justify-items-center items-center">
          {/* {userInfo && <p className="font-bold text-sm">{userInfo?.name}</p>} */}
          <DarkModeToggle />

          <Link to="/" className="col-start-2">
            <img src={akatsukiLogo} alt="Pizza Logo" className="h-16" />
          </Link>

          <nav className="col-start-3 justify-self-end">
            <ul>
              <li>
                {isLoggedIn ? (
                  <Button onClick={handleLogout} variation="secondary">
                    Logout
                  </Button>
                ) : (
                  <Button variation="secondary" to="/login">
                    <UserRound size={16} className="mr-1 mb-0.5" /> Login
                  </Button>
                )}
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
