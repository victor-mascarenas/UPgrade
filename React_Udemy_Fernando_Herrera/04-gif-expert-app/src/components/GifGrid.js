import React from 'react';

export const GifGrid = ({category}) => {
    const getGifs = async () => {
        const url = 'https://api.giphy.com/v1/gifs/search?q=naruto&limit=10&api_key=RHHTxfPP13Hp2qPjeceyWuqAzfCetKkv';
        const res = await fetch(url);
        const {data} = await res.json();
        const gifs = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            };
        });
        console.log(gifs);
    };

    getGifs();

    return(
        <>
            <h3>{category}</h3>
        </>
    );
};
