import { IoLayers } from "react-icons/io5";
import { LuLayoutDashboard } from "react-icons/lu";
import { MdOutlineShoppingCart } from "react-icons/md";
import { TbLogout } from "react-icons/tb";
import { Link } from "react-router-dom";
/**
 * 
 * @returns side bar component
 */
function SideBar() {

    return (<div className="w-28 min-h-screen  ml-8 mr-8 mt-8 text-sidebar-grey ">
        <p className="text-lg text-sidebar-title">ShopElegance</p>
        <Link to='/' className="flex items-center mt-4 hover:text-hover-yellow">
            <IoLayers />
            <p className="ml-4">Dashboard</p>
        </Link>
        <Link to='/products' className="flex items-center mt-4  hover:text-hover-yellow">
            <LuLayoutDashboard />
            <p className="ml-4">Products</p>
        </Link>
        <Link to='/orders' className="flex  items-center mt-4 hover:text-hover-yellow">
            <MdOutlineShoppingCart />
            <p className="ml-4">Orders</p>
        </Link>
        <Link to='/login' className="flex items-center mt-4 hover:text-hover-yellow">
            <TbLogout />
            <p className="ml-4">Logout</p>
        </Link>

    </div>);
}

export default SideBar;