import React from 'react';
import "./Cards.scss"
import Card2 from '../components/Card/Card';
const Card = () => {
    let cardId= [1,2,3,4,5,6,7,8]
    return (
        <>
            <section className='cards'>
                <div className="container">
                    <div className="row">
                        {
                            cardId.map(item => {
                                return <Card2 id={item} key={item} />
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    );
};

export default Card;