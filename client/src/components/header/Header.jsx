import SwitcherBtn from "../../utility/SwitcherBtn"
import { FaSearch } from "react-icons/fa";
import { HEADER_LINKS } from "./headerLink";
import { Link } from "react-router-dom";
const Header = () => {
    return (
        <header id="header" className="fixed top-0 left-0 right-0 z-[100]">
            <div className="bg-[#f2f2f3] dark:bg-[#000] h-[10vh]">
                <div className="container mx-auto h-full flex flex-row items-center justify-between gap-4">
                    {/* logo */}
                    <div className="logo">
                        <h1 className="font-extrabold text-base md:text-3xl">
                            <span className="text-[#383850] dark:text-[#c2c3c5]">Ncode</span>
                            <span className="text-[#000037] dark:text-[#fff]">Realtor</span>
                        </h1>
                    </div>
                    {/* search */}
                    <form action="">
                        <div className="relative">
                            <input type="text" className="relative h-[5.5vh] w-[35vw] md:w-[25vw] focus:outline-none active:outline-none
                        placeholder:text-[#000037]
                        px-9
                        rounded-md
                        border
                        border-[#000037]
                        "
                                placeholder="search here"
                            />
                            <div className="absolute top-3 px-2">
                                <FaSearch size={16} />
                            </div>
                        </div>
                    </form>

                    {/* links */}
                    <div className="">
                        <ul className="flex gap-4 ">
                            {
                                HEADER_LINKS.map(({ key, label, path, extra }) => (
                                    <li key={key} className={extra + " hover:font-extrabold md:inline transition-all ease-in-out duration-200 text-[#000037] dark:text-[#fff] font-medium"}>
                                        <Link to={path}>
                                            {label}
                                        </Link>
                                    </li>
                                ))
                            }

                        </ul>
                    </div>

                    {/* dark mode switch */}
                    <SwitcherBtn />
                </div>
            </div>
        </header>
    )
}

export default Header