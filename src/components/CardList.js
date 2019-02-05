import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {

  // To check error handling with ErrorBoundary component 
  // if(true) {
  //   throw new Error('Error checking to see if ErrorBoundary works lol!');
  // }

  const cardsArray = robots.map((user, i) => {
    return (
      <Card 
        id={robots[i].id} 
        key={robots[i].id} 
        name={robots[i].name} 
        email={robots[i].email} 
      />
    );
  });

  return (
    <div>
      { cardsArray }
    </div>
  );
  
}

export default CardList;
