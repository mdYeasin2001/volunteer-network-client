import React from 'react';

const Event = ({event}) => {
    const {eventName, image} = event;
    return (
        <div className="col">
            <div className="card border-0 h-100">
                <img src={image} className="card-img-top" alt="event-banner" />
                <div className="card-body">
                    <h3 className="card-title">{eventName}</h3>
                </div>
            </div>
        </div>
    );
};

export default Event;