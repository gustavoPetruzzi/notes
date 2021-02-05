import { memo } from 'react';
import './Card.scss';

function CardComponent(props: any) {
  return (
    <div className="card">
      {props.children}
    </div>
  )
}

export const Card = memo(CardComponent);