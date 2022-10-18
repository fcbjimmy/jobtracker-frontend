import style from './Button.module.scss';
import { useAuthContext } from '../../hooks/useAuthContext';

const Button = ({ children }) => {
  const { isLoading } = useAuthContext();

  return (
    <button disabled={isLoading} className={style.button}>
      {children}
    </button>
  );
};

export default Button;
