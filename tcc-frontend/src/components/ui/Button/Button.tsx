import { ReactNode } from 'react';

interface ButtonProps {
  className?: string,
  size?: 'lg' | 'sm',
  type?: 'button' | 'submit',
  variants?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'link',
  children: ReactNode,
  onClick?: () => void,
}
const Button = ({
  className = '',
  size,
  type = 'button',
  variants = 'primary',
  children,
  onClick = () => { }
}: ButtonProps) => {

  const btnSize = size ? `btn-${size}` : '';
  const classStyles = `btn btn-${variants} ${btnSize} ${className}`

  return (
    <button
      type={type}
      className={classStyles}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;