import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const AddEvents = () => {
    const [imageURL, setImageURL] = useState(null);
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
        const eventData = {eventName: data.name, image: imageURL}
        console.log(eventData);
        fetch('http://localhost:5000/addEvent', {
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(eventData)
        })
        .then(res => res.json())
        .then(data => console.log(data))
    };

    // console.log(watch("example"));

    const handleImageUpload = (e) => {
        // console.log(e.target.files[0]);a
        const imageData = new FormData();
        imageData.set('key', 'c2772d06761e65ea8652500494ef14a7')
        imageData.append('image', e.target.files[0])
        axios.post('https://api.imgbb.com/1/upload', imageData)
          .then((response) => {
            setImageURL(response.data.data.display_url);
          })
          .catch((error) => {
            console.log(error);
          });
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <form className="pt-5" onSubmit={handleSubmit(onSubmit)}>

                        <div className="mb-3">
                            <input name="name" className="form-control" placeholder="Event Name" ref={register({ required: true })} />
                            {errors.name && <span className="text-danger">Event name is required</span>}
                        </div>

                        <div className="input-group mb-3">
                            <input onChange={handleImageUpload} name="image" type="file" className="form-control" ref={register({ required: true })} />
                            {errors.image && <span className="text-danger">File is required</span>}
                        </div>

                        <input className="btn btn-success d-block w-100" type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddEvents;