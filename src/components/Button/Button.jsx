import style from './Button.module.scss';
import { useAuthContext } from '../hooks/useAuthContext';

const Button = ({ children, type }) => {
  const { isLoading } = useAuthContext();

  return (
    <button disabled={isLoading} type={type} className={style.button}>
      {children}
    </button>
  );
};

export default Button;
