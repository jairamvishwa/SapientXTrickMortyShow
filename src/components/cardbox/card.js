import React from 'react';

const Card = ({ item }) => {
    return (
        <>
            <div className="col-items">
                <div className="card">
                    <div className="card-img-info">
                        <img src={item.image} alt={item.name} />
                        <div className="character-info">
                            <h3>{item.name}</h3>
                            <p>Id: {item.id} - {item.created}</p>
                        </div>
                    </div>
                    <ul className="other-info">
                        <li>
                            <span className="title-info">Status</span> 
                            <span className="detail-info">{item.status}</span> 
                        </li>
                        <li>
                            <span className="title-info">Species</span> 
                            <span className="detail-info">{item.species}</span> 
                        </li>
                        <li>
                            <span className="title-info">Gender</span> 
                            <span className="detail-info">{item.gender}</span> 
                        </li>
                        <li>
                            <span className="title-info">Origin</span> 
                            <span className="detail-info">{item.origin.name}</span> 
                        </li>
                        <li>
                            <span className="title-info">Last Location</span> 
                            <span className="detail-info">{item.location.name}</span> 
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Card;