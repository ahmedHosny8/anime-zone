import { useContext } from 'react';
import { DarkModeContext } from '../context/dark-mode-context';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Button({ children, variation, type, to, onClick, disabled }) {
  const { isDarkMode } = useContext(DarkModeContext);
  // console.log(isDarkMode);

  const base =
    'flex items-center justify-center py-2 px-4 rounded-full font-semibold text-sm transition-all duration-300';

  const iconBase =
    'h-11 w-11 flex items-center justify-center rounded-lg transition-all duration-300';

  const styles = {
    primary:
      base +
      ' text-white bg-[var(--color-brand-600)]  hover:bg-[var(--color-brand-700)]',
    secondary:
      base +
      `${
        isDarkMode
          ? ' bg-[var(--color-gray-100)]  hover:bg-[var(--color-gray-50)]'
          : ' bg-[var(--color-gray-200)] hover:bg-[var(--color-gray-300)]'
      } `,
    disabled: base + ' text-gray-700 bg-gray-200',
    // accent: base + ' text-white bg-gray-600 hover:bg-gray-800',
    // warning: base + ' bg-red-500 text-white hover:bg-red-700',
    link: 'text-blue-500 font-semibold transition-all duration-300 hover:underline',
    iconWarning:
      iconBase + ' bg-[var(--color-red-700)] hover:bg-[var(--color-red-800)]',
    iconAction:
      iconBase +
      `${
        isDarkMode
          ? ' bg-[var(--color-gray-100)]  hover:bg-[var(--color-gray-50)]'
          : ' bg-[var(--color-gray-200)] hover:bg-[var(--color-gray-300)]'
      } `,
  };

  if (to)
    return (
      <Link to={to} className={styles[variation]}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button onClick={onClick} className={styles[variation]}>
        {children}
      </button>
    );

  if (type) {
    return (
      <button type={type} disabled={disabled} className={styles[variation]}>
        {children}
      </button>
    );
  }

  return (
    <button disabled={disabled} className={styles[variation]}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  variation: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  to: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
