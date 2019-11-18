import React from 'react';
import './card-list.style.css';
import { UniqCard } from '../uniqe-card/unique-card.component';

export const CardList = props => {
  return (
    <div className="card-list">
      {props.monsters.map(monster => (
        <UniqCard key={monster.id} monster={monster} />
      ))}
    </div>
  );
};
