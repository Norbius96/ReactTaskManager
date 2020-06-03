import React, { useEffect, useState } from 'react';

import '../styles/photo.css';

function Photo() {

    const [image, setImage] = useState([]);

    useEffect(() => {
        fetchPhoto();
    }, [])

    const fetchPhoto = async () => {
        const randId = Math.floor(Math.random() * (14 - 1 + 1)) + 1;
        const key = '';
        const photoURL = `https://pixabay.com/api/?key=${key}&category=nature&image_type=photo`;

        const photoFetch = await fetch(photoURL);
        const data = await photoFetch.json();
        setImage(data.hits[randId]);

    }


    return (
        <div id="photo" style={{ backgroundImage: `url(${image.largeImageURL})` }} >
            <div className="about">
                <p>Author: {image.user}</p>
                <p> <a href={image.largeImageURL} target="blank">pixabay.com</a></p>
            </div>
        </div>

    );
}

export default Photo;
