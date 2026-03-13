import React, { useEffect, useState } from 'react';

const Category = () => {
    const [category, setCategori] = useState([]);
    useEffect (()=>{
        fetch ("category.json")
        .then(res=>res.json())
        .then(data=>setCategori(data))
    },[])
    return (
        <div className='py-14'>
            <div className='container mx-auto px-24 flex justify-between'>
                {category.map(cat=>(
                    <div key={cat.id} className='bg-gray-100 flex flex-col gap-2 items-center wrap-break-word w-38 p-2'>
                        <img src={cat.image} alt="Category image" className='w-16 h-16'/>
                        <p className=''>{cat.name}</p>
                        <p className=''>{cat.productCount}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Category; 