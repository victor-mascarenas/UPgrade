import React, {useState} from "react";
import AddCategory from "./components/AddCategory";

const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball', 'Naruto']);
    
    /* const addButtonOnClick = () => {
        const newItem = 'Family Guy';
        setCategories([...categories, newItem]);
    }; */

    return(
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr/>
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