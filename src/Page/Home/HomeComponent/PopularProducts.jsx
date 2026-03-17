
import SectionHeding from '../../../Components/ShearComponent/SectionHeding';
import CategoryLIst from '../../../Components/ShearComponent/CategoryLIst';
import ProductsCard from '../../../Components/ShearComponent/ProductsCard';

const PopularProducts = () => {

    return (
        <div>
            <div className='container mx-auto px-24'>
                <div className='flex items-center justify-between'>
                    <SectionHeding title={"Popular"} subtitle={"Products"} description={"Shop online for new arrivals and shipping!"}/>
                    <CategoryLIst />
                </div>
                <div className='border'>
                    <ProductsCard/>
                </div>
            </div>
        </div>
    );
};

export default PopularProducts;