import style from './Button.module.scss';

const Button = ({ children, type, isLoading }) => {
  return (
    <button disabled={isLoading} type={type} className={style.button}>
      {children}
    </button>
  );
};

export default Button;
