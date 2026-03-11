
import logo from "../../assets/Image/logo.png"
import { CiUser } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";

const MidHeader = () => {
    return (
      <div className="py-2 border-b border-gray-200">
        <div className="container mx-auto flex items-center justify-between px-24">
          <div>
            <img src={logo} alt="This is logo" className="w-16 md:w-22" />
          </div>

          <div>
            <label className="input w-96">
              <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
              <input type="search" className="w-" required placeholder="Search . . ."/>
            </label>
          </div>

          <div className="capitalize flex items-center gap-5">
            <div className="flex items-center gap-2 cursor-pointer">
              <CiUser className="text-3xl"/>
              <div>
                <p className="ts">account</p>
                <p className="uppercase text-sm">login</p>
              </div>
            </div>
            <div className="flex items-center gap-2 cursor-pointer">
              <CiShoppingCart className="text-3xl"/>
              <div>
                <p className="ts">account</p>
                <p className="uppercase text-sm">login</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default MidHeader;