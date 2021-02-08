import { memo } from 'react';
import './Card.scss';

interface cardProps {
  width?: number;
  height?: number;
  children: any;
}
function CardComponent(props: cardProps) {
  const { width, height } = props;
  return (
    <div className="card" style={{width, height}}>
      {props.children}
    </div>
  )
}

export const Card = memo(CardComponent);