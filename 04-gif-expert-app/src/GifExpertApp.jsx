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
    }

    return (
        <>
            {/* titulo */}
            <h3>GifExpertApp</h3>

            {/* input */}
            <AddCategory setCategories={setCategories} />

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
