import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    // 
    //
    const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);

    const onAddCategory = (value) => {
        if (categories.includes(value)) return;
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
            <h3>GifExpertApp</h3>
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
