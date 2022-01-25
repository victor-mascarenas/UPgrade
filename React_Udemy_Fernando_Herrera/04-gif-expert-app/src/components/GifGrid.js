import React/* , {useState, useEffect} */ from 'react';
import useFetchGifs from '../hooks/useFetchGifs';
//import getGifs from '../helpers/getGifs';
//import GifGridItem from './GifGridItem';

export const GifGrid = ({category}) => {
    /* const [images, setImages] = useState([]);

    useEffect(() => {
        getGifs(category)
            .then(setImages);
    }, [category]); */

    const {loading} = useFetchGifs();

    return(
        <>
            <h3>{category}</h3>
            {loading ? 'Cargando...': 'Data cargada'}
            {/* <div className="card-grid">
                {
                    images.map(img => {
                        return <GifGridItem key={img.id} {...img}/>;
                    })
                }
            </div> */}
        </>
    );
};
