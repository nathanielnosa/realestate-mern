import { FaUser } from 'react-icons/fa';
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
const Profile = () => {
    const { currentUser } = useSelector((state) => state.user)
    console.log(currentUser);
    return (
        <section id="profile" className="py-8 bg-[#fcfcfd] dark:bg-[#000] h-screen">
            <div className="text-center">
                <h3 className='text-[1.5rem] flex items-center justify-center gap-x-2 text-[#000037] dark:text-[#fff]'><FaUser /> Welcome <span className="font-bold "> {currentUser.username}</span></h3>

                <div className="text-center flex md-flex-row py-3 w-[50%] mx-auto  items-center gap-4  justify-center border rounded-md my-[3rem]">
                    <div className="">
                        <img src={currentUser.avatar} alt="profile" className='self-center rounded-full h-24 w-24 object-cover cursor-pointer dark:border-[#fff] border-[3px]' />
                    </div>
                    <div className="">
                        <ul className='dark:text-[#fff]'>
                            <li className='border my-2 px-[3rem] py-[.52rem] rounded-md text-[1.2rem] text-start font-semibold'>{currentUser.username}</li>
                            <li className='border my-2 px-[3rem] py-[.52rem] rounded-md text-[1.2rem] text-start font-semibold'>{currentUser.email}</li>
                            <li className='border my-2 px-[3rem] py-[.52rem] rounded-md text-[1.2rem] text-start font-semibold'>{currentUser.password}</li>
                            <li className='border my-2 px-[3rem] py-[.52rem] rounded-md text-[1.2rem] font-semibold cursor-pointer bg-[#000037] text-[#fff] text-center hover:opacity-[.6]'>
                                <Link to={'/update-profile'}>Update Profile</Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Profile