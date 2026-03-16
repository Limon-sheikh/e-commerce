
import logo from "../../assets/Image/logo.png"
import { CiUser } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import ListLinks from "../ShearComponent/ListLinks";

const MidHeader = () => {
    return (
      <div className="py-2">
        <div className="container mx-auto flex items-center justify-between px-24">
          <div className="lg:min-w-[200px]">
            <img src={logo} alt="This is logo" className="w-16 md:w-22" />
          </div>

          <div>
            <ListLinks/>
          </div>

          <div className="capitalize flex items-center gap-5 lg:min-w-[197px]">
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