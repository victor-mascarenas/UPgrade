import React, {useState, useEffect} from 'react';
import GifGridItem from './GifGridItem';

export const GifGrid = ({category}) => {
    const [images, setImages] = useState([]);

    //Se ejecuta cuando el componente es renderizado por primera vez
    useEffect(() => {
        getGifs();
    }, []);

    const getGifs = async () => {
        const url = `https://api.giphy.com/v1/gifs/search?q=${category}&limit=10&api_key=RHHTxfPP13Hp2qPjeceyWuqAzfCetKkv`;
        const res = await fetch(url);
        const {data} = await res.json();
        const gifs = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            };
        });
        setImages(gifs);
    };

    return(
        <>
            <h3>{category}</h3>
            <div className="card-grid">
                {
                    images.map(img => {
                        return <GifGridItem key={img.id} {...img}/>;
                    })
                }
            </div>
        </>
    );
};
