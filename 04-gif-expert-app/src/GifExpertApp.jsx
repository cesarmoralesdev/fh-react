import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {

    // 
    //
    const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);

    const onAddCategory = () => {
        setCategories([
            ...categories,
            "Naruto"
        ]);
    }

    return (
        <>
            {/* titulo */}
            <h3>GifExpertApp</h3>

            {/* input */}
            <AddCategory />

            {/* listado de Gif */}
            <button onClick={onAddCategory}>Agregar categoria</button>
            <ol>
                {categories.map(category => {
                    return <li key={category}>{category}</li>
                })}
            </ol>
            {/* Gif Item */}


        </>
    )
}
