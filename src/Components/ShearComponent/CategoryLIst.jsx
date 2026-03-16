import React from 'react';
import category from '../../../public/category.json'

const CategoryLIst = () => {
    return (
        <div className='flex items-center gap-5 capitalize cursor-pointer'>
            {category.map((item)=>(
                <div>
                    <p>{item.name}</p>
                </div>
            ))}
        </div>
    );
};

export default CategoryLIst;