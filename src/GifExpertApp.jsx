import React, { useState } from "react";
import { AppCategory } from "./components/AppCategory";
import { GifGrid } from "./components/GifGrid";


export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState([ 'Paisajes' ]);
    
    const onAddCategory = (newCategory) => {

        if (categories.includes(newCategory)) return;

        setCategories([newCategory, ...categories]);
    }

    return (
        <>
            <h1>GifExpertApp </h1>

            <AppCategory 
                onNewCategory = {
                    (value) => onAddCategory(value)
                }
            />

            {categories.map((category) => 
                    (
                        <GifGrid 
                            key={category} 
                            category={category}
                        />
                    ))
                }
        </>
    )
}