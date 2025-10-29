import React, { useState } from 'react'
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    // 
    //
    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = (value) => {
        if (categories.includes(value)) return;
        setCategories([
            value,
            ...categories,
        ]);
        //Forma 2: Con esta forma dentro del setState tenemos el valor de estado
        // setCategories(cat => [
        //     ...cat,
        //     value
        // ]);
    }

    return (
        <>
            <h3>GifExpertApp - César Morales</h3>
            <AddCategory
                // setCategories={setCategories}
                onNewCategory={value => onAddCategory(value)}
            />

            {categories.map(category => {
                return (<GifGrid category={category} key={category} />)
            })}

        </>
    )
}
