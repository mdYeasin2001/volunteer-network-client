import React, { useEffect, useState } from 'react';
import Event from '../Event/Event';

const Home = () => {
    const [events, setEvents] = useState([]);
    console.log(events);
    useEffect(() => {
        fetch('https://obscure-refuge-80954.herokuapp.com/events')
            .then(res => res.json())
            .then(data => setEvents(data))
    }, [])
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-10 offset-md-1 py-5">
                    <h1 className="text-center display-4">I GROW BY HELPING PEOPLE IN NEED.</h1>
                    <div className="row">
                        <div className="col-md-8 offset-md-2">
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="Search..." aria-label="Recipient's username" aria-describedby="button-addon2" />
                                <button className="btn btn-primary" type="button" id="button-addon2">Search</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row row-cols-1 row-cols-md-3 g-4">
                {events.map((event, i) => <Event event={event} key={i} />)}
            </div>
        </div>
    );
};

export default Home;