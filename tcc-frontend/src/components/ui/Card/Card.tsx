import { ReactNode } from 'react';
// Styles
import './Card.styles.scss';


interface CardProps {
  className?: string,
  children: ReactNode,
}

// Main Function
const Card = ({ className = '', children }: CardProps) => {
  const classStyles = `card-custom ${className}`

  return (
    <div className={classStyles}>{children}</div>
  );
}

export default Card