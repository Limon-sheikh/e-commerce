import { MdLocalPhone } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

const TopHeader = () => {
  return (
    <div className="bg-[#f8f8f8] py-2">
        <div className="container mx-auto flex justify-between items-center ts px-24">
            <div className="flex items-center gap-6">
                <div className="flex items-center gap-1">
                    <MdLocalPhone />
                    <span>+8801711111111</span>
                </div>
                <div className="flex items-center gap-1">
                    <FaWhatsapp />
                    <span>+8801711111111</span>
                </div>
            </div>
            <div className="">
                <p>World`s Fastest Online Shopping Destination</p>
            </div>
            <div>
                <ul className="flex items-center capitalize gap-5">
                    <li>helps ?</li>
                    <li>Trac Order?</li>
                    <li>English</li>
                    <li>Contact us</li>
                </ul>
            </div>
        </div>
    </div>
  );
};

export default TopHeader;
