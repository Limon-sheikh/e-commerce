import Shopbtn from "../../../Components/ShearComponent/Button";

const Hero = () => {
    return (
        <div className="my-10 bg">
            <div className='container mx-auto px-24 h-full'>
                <div className='h-full flex flex-col justify-center gap-3'>
                    <h3 className='prcolor text-2xl font-semibold'>70% Off For This Winter</h3>
                    <h1 className="text-5xl font-semibold text-gray-600">Bigest Sale For Winter <br/> Man & Woman</h1>
                    <Shopbtn title="shop now"/>
                </div>
            </div>
        </div>
    );
};

export default Hero;