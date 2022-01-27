import React/* , {useState, useEffect} */ from 'react';
import useFetchGifs from '../hooks/useFetchGifs';
//import getGifs from '../helpers/getGifs';
import GifGridItem from './GifGridItem';
import PropTypes from 'prop-types';

const GifGrid = ({category}) => {
    /* const [images, setImages] = useState([]);

    useEffect(() => {
        getGifs(category)
            .then(setImages);
    }, [category]); */

    const {data: images, loading} = useFetchGifs(category);

    return(
        <>
            <h3 className='animate_animated animate_fadeIn'>{category}</h3>
            {loading && <p className='animate_animated animate_flash'>Loading...</p>}
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
GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}

export default GifGrid;