
import Button from '../ShearComponent/Button';
import { BiCategoryAlt } from "react-icons/bi";
import { CiShoppingCart } from "react-icons/ci";
import { NavLink } from 'react-router';

const Navber = () => {
    return (
        <div className='border-y border-gray-200 py-2'>
           <div className='container mx-auto px-24 '>
                <div className='flex justify-between items-center'>
                    <div><Button icon={BiCategoryAlt} title='all category'/></div>
                    <nav>
                        <ul className='capitalize flex gap-10'>
                            <NavLink to='/' className={({isActive})=> isActive? "prcolor" : ""}>home</NavLink>
                            <NavLink to='/shop' className={({isActive})=> isActive? "prcolor" : ""}>shop now</NavLink>
                            <NavLink to='/about' className={({isActive})=> isActive? "prcolor" : ""}>about</NavLink>
                            <NavLink to='/blog' className={({isActive})=> isActive? "prcolor" : ""}>blog</NavLink>
                            <NavLink to='/contact' className={({isActive})=> isActive? "prcolor" : ""}>contact</NavLink>
                        </ul>
                    </nav>
                    <div><Button icon={CiShoppingCart} className="text-2xl" title='shop now'/></div>
                </div>
           </div>
        </div>
    );
};

export default Navber;