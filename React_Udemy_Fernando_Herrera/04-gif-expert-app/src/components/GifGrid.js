import React, {useState, useEffect} from 'react';
import getGifs from '../helpers/getGifs';
import GifGridItem from './GifGridItem';

export const GifGrid = ({category}) => {
    const [images, setImages] = useState([]);

    //Se ejecuta cuando el componente es renderizado por primera vez
    useEffect(/* async  */() => {
        //const gifs = await getGifs(category);
        //setImages(gifs);
        getGifs(category)
            .then(setImages);
    }, [category]);//Si categoria cambia vuelve a ejecutar el efecto

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
