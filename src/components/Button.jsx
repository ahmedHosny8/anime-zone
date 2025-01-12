import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Button({ children, type, to, onClick, disabled }) {
  const base =
    'flex items-center justify-center py-2 px-4 rounded-full font-semibold text-sm transition-all duration-300';

  const styles = {
    primary: base + ' bg-brand text-white hover:bg-brand-dark',
    secondary: base + ' bg-gray-100 hover:bg-gray-300',
    warning: base + ' bg-red-500 text-white hover:bg-red-700',
    link: 'text-blue-500 font-semibold transition-all duration-300 hover:underline',
    disabled: base + ' bg-gray-200',
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button onClick={onClick} className={styles[type]}>
        {children}
      </button>
    );

  return (
    <button className={styles[type]} disabled={disabled}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  to: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
  disabled: PropTypes.bool,
};

export default Button;
