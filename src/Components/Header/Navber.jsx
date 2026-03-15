
import Button from '../ShearComponent/Button';
import { BiCategoryAlt } from "react-icons/bi";
import { CiShoppingCart } from "react-icons/ci";
import ListLinks from '../ShearComponent/ListLinks';

const Navber = () => {
    return (
        <div className='border-y border-gray-200 py-2'>
           <div className='container mx-auto px-24 '>
                <div className='flex justify-between items-center'>
                    <div><Button icon={BiCategoryAlt} title='all category'/></div>
                    <div>
                        <ListLinks/>
                    </div>
                    <div><Button icon={CiShoppingCart} className="text-2xl" title='shop now'/></div>
                </div>
           </div>
        </div>
    );
};

export default Navber;