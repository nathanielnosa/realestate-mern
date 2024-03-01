import SwitcherBtn from "../../utility/SwitcherBtn"
import { FaSearch } from "react-icons/fa";
import { HEADER_LINKS } from "./headerLink";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux'
const Header = () => {
    const { currentUser } = useSelector((state) => state.user)

    return (
        <header id="header" className="fixed top-0 left-0 right-0 z-[100]">
            <div className="bg-[#f2f2f3] dark:bg-[#000] h-[10vh] border border-b-[#000]/[0.11] shadow-md">
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
                        <ul className="flex gap-4 items-center">

                            {
                                HEADER_LINKS.map(({ key, label, path, extra, extraS, extraSP }) => (
                                    <li key={key} className={extra + " hover:font-extrabold md:inline transition-all ease-in-out duration-200 text-[#000037] dark:text-[#fff] font-medium"}>
                                        <Link to={path}>
                                            {
                                                currentUser ? (
                                                    key === 3 ? (
                                                        <div className={extraS}>
                                                            {label}
                                                        </div>
                                                    ) : key === 4 ? (
                                                        <img className="w-9 h-9 object-cover rounded-full border border-[#000037]" src={currentUser.avatar} alt="profile" />
                                                    ) : (
                                                        label
                                                    )
                                                ) :
                                                    key === 1 | 2 | 3 ? (<div className={extraSP}>
                                                        {label}
                                                    </div>

                                                    ) : null
                                            }


                                        </Link>
                                    </li>
                                ))
                            }
                            {/* <Link to={'/profile'}>
                                {
                                    currentUser
                                        ?
                                        (
                                            <img className="w-9 h-9 object-cover rounded-full border border-[#000037]" src={currentUser.avatar} alt="profile" />

                                        )
                                        : " "
                                }

                            </Link> */}
                        </ul>
                    </div>

                    {/* dark mode switch */}
                    <SwitcherBtn />
                </div>
            </div>
        </header >
    )
}

export default Header