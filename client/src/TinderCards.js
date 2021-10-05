import React, { useEffect, useState } from 'react'
import TinderCard from 'react-tinder-card';
import './TinderCards.css';

function TinderCards() {

    const [person, setPerson] = useState([]);

    const pageLoaded = async () => {
        try {
            const res = await fetch('/cards', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                credentials: 'include'
            });

            const data = await res.json();
            setPerson(data);

        } catch (e) {
            console.log(console.error);
        }
    }
    useEffect(() => {
        pageLoaded();
    }, [])

    return (
        <div className="card-div">
        {   
            person.map((person) => {
                return (<TinderCard key={person.name} preventSwipe={['up', 'down']} className="swipe">
                <div
                    style={{ backgroundImage: `url(${person.url})` }}
                    className="card"
                >
                    <h1>{person.name}</h1>
                </div>
            </TinderCard>)
                
            })
        }
    </div>)
}

export default TinderCards;
