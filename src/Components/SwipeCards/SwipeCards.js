import React from 'react';
import TinderCard from 'react-tinder-card'

import './SwipeCards.css';


const people = [
    {
        name: "Sweet as sugar. Cold as ice. Hurt me once, I’ll break you twice.",
        url: 'https://i.pinimg.com/564x/5b/24/0b/5b240b20b2f969cddef7e8a7c4d5a797.jpg'
    },
    {
        name: "When you clicked this link, you probably didn't expect to find the awesomest virtual assistant possible. Well, guess what, The Anjali is exactly what the world wanted",
        url: 'https://i.pinimg.com/736x/b1/6c/63/b16c6347d08b8e23e0ba7a5c65afc8bd.jpg'
    },


]

const SwipeCards = () => {
    return (
        <div className="tindercard">
            <div className="cardContainer">
                {people.map(person => (
                    <TinderCard 
                        className="swipe"
                        key={person.name}    
                        preventSwipe={['up', 'down']}
                    >
                        <div 
                            style={{ backgroundImage: `url(${person.url})`}}
                            className="card">
                            <h3>{person.name}</h3>
                        </div>    
                    </TinderCard>
                    
                ))}
            </div>
        </div>
    )
}

export default SwipeCards
