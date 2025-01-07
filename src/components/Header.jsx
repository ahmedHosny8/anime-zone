import { Link } from 'react-router-dom';
import { UserRound } from 'lucide-react';
import Button from './Button';
import onePieceLogo from '../assets/one-piece.svg';

function Header() {
  return (
    <header className="bg-white px-4 py-2 shadow-xl shadow-gray-200/20">
      <div className="max-w-screen-lg mx-auto">
        <div className="grid grid-cols-3 justify-items-center items-center">
          <Link to="/" className="col-start-2">
            <img src={onePieceLogo} alt="Pizza Logo" className="h-20" />
          </Link>

          <nav className="col-start-3 justify-self-end">
            <ul>
              <li>
                <Button type="secondary" to="/login">
                  <UserRound size={16} className="mr-1 mb-0.5" /> Login
                </Button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
