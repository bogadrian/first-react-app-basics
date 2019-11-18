import React from 'react';

import './unique-card.style.css';

export const UniqCard = props => (
  <div className="card-container">
    <img
      alt={props.monster.name}
      src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}
    />
    <h2>{props.monster.name}</h2>
    <p>{props.monster.email}</p>
  </div>
);
