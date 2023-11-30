import { Link } from "react-router-dom"
import { FaCartShopping, FaMagnifyingGlass, FaChevronDown } from 'react-icons/fa6'

const Navbar = () => {
  return (
    <nav className="flex justify-between px-10 py-5">
        <div className="">
            <Link to='/'></Link>
            <ul className="flex">
                <li className=""><Link to='/'>Home</Link></li>
                <li>Menu</li>
                <li className="flex">
                    Categories
                    <FaChevronDown/>
                    <div>
                        <ul>
                            <li>Breakfast</li>
                            <li>Main Dish</li>
                            <li>Dessert</li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
        <div className="flex">
            <button><FaMagnifyingGlass/></button>
            <button><FaCartShopping/></button>
            <button>Login</button>
        </div>
    </nav>
  )
}

export default Navbar