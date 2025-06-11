import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {

    // 
    //
    const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);

    const onAddCategory = (value) => {
        setCategories([
            ...categories,
            value
        ]);
        //Forma 2: Con esta forma dentro del setState tenemos el valor de estado
        // setCategories(cat => [
        //     ...cat,
        //     value
        // ]);
    }

    return (
        <>
            {/* titulo */}
            <h3>GifExpertApp</h3>

            {/* input */}
            <AddCategory 
                // setCategories={setCategories}
                onNewCategory = { value => onAddCategory(value)}
            />

            {/* listado de Gif */}
            <ol>
                {categories.map(category => {
                    return <li key={category}>{category}</li>
                })}
            </ol>
            {/* Gif Item */}


        </>
    )
}
