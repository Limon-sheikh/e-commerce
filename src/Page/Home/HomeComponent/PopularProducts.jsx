
import { useEffect, useState } from 'react';
import SectionHeding from '../../../Components/ShearComponent/SectionHeding';
import CategoryLIst from '../../../Components/ShearComponent/CategoryLIst';
import ProductsCard from '../../../Components/ShearComponent/ProductsCard';

const PopularProducts = () => {

    const [products, setProducts] = useState([]);

    useEffect(()=>{
        fetch('/products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[]);


    return (
        <div>
            <div className='container mx-auto px-24'>
                <div className='flex items-center justify-between'>
                    <SectionHeding title={"Popular"} subtitle={"Products"} description={"Shop online for new arrivals and shipping!"}/>
                    <CategoryLIst />
                </div>
                <div className='border'>
                    {products.map((product)=> <ProductsCard product={product}/>)}
                </div>
            </div>
        </div>
    );
};

export default PopularProducts;