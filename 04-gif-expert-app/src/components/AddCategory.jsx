import { useState } from "react";
import { z } from 'zod';
export const AddCategory = (props) => {

    const [inputValue, setInputValue] = useState('');

    const schema = z.object({
        onNewCategory: z.function(),
    });
    const validatedProps = schema.parse(props);
    const { onNewCategory } = validatedProps;

    const onInputChange = ({ target }) => {
        setInputValue(target.value);
    }

    const onSubmit = (event) => {
        console.log("Hola mundo desde submit");
        
        event.preventDefault();
        if (inputValue.trim().length < 1) return;
        // setCategories( categories => [ ...categories, inputValue ]);
        setInputValue("");
        onNewCategory(inputValue.trim());
    }

    return (
        <form onSubmit={onSubmit} aria-label="form">
            <input
                type='text'
                placeholder='Buscar gifs'
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}
