import React from 'react';
import SectionHeding from '../../../Components/ShearComponent/SectionHeding';
import CategoryLIst from '../../../Components/ShearComponent/CategoryLIst';

const PopularProducts = () => {
    return (
        <div>
            <div className='container mx-auto px-24'>
                <div className='flex items-center justify-between'>
                    <SectionHeding title={"Popular"} subtitle={"Products"} description={"Shop online for new arrivals and shipping!"}/>
                    <CategoryLIst />
                </div>
            </div>
        </div>
    );
};

export default PopularProducts;