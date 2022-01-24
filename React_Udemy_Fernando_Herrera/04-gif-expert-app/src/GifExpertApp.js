import React, {useState} from "react";

const GifExpertApp = () => {
    //const categories = ['One Punch', 'Samurai X', 'Dragon Ball', 'Naruto']
    const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball', 'Naruto']);
    
    const addButtonOnClick = () => {
        const newItem = 'Family Guy';
        setCategories([...categories, newItem]);
    };

    return(
        <>
            <h2>GifExpertApp</h2>
            <hr/>
            <button onClick={addButtonOnClick}>Agregar</button>
            <ul>
                {
                    categories.map((category, key) => {
                        return <li key={`${category}_${key}`}>{category}</li>;
                    })
                }
            </ul>
        </>
    );
}

export default GifExpertApp;