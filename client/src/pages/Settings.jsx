import { FaPen, FaSignOutAlt, FaTrash, FaUserCircle } from 'react-icons/fa';
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
const Settings = () => {
  const { currentUser } = useSelector((state) => state.user)
  console.log(currentUser);
  return (
    <section id="profile" className="py-8 bg-[#fcfcfd] dark:bg-[#000] h-screen">
      <div className="text-center">
        <h3 className='text-[1.5rem] text-[#000037] dark:text-[#fff]'>Settings</h3>

        <div className="text-center flex md-flex-row py-3 w-[50%] mx-auto  items-center justify-center border rounded-md my-[3rem] gap-[1.8rem]">
          <div className="">
            <img src={currentUser.avatar} alt="profile" className='self-center rounded-full h-24 w-24 object-cover cursor-pointer dark:border-[#fff] border-[3px]' />
          </div>
          <div className="dark:text-[#fff]">
            <div className="my-4 py-2">
              <Link to={'/profile'} className='flex items-center gap-2 '>
                <FaUserCircle /> View Profile
              </Link>
            </div>
            <div className="my-4 py-2">
              <Link to={'/update-profile'} className='flex items-center gap-2 '>
                <FaPen /> Update Profile
              </Link>
            </div>
            <div className="my-4 py-2 text-[orange]">
              <Link to={'/profile'} className='flex items-center gap-2 '>
                <FaSignOutAlt /> Sign Out
              </Link>
            </div>
            <div className="my-4 py-2 text-[red]">
              <Link to={'/profile'} className='flex items-center gap-2 '>
                <FaTrash /> Delete Listing
              </Link>
            </div>
            <div className="my-4 py-2 text-[orange]">
              <Link to={'/profile'} className='flex items-center gap-2 '>
                <FaTrash /> Clear Inbox
              </Link>
            </div>
            <div className="my-4 py-2 text-[red]">
              <Link to={'/profile'} className='flex items-center gap-2 '>
                <FaTrash /> Delete Profile
              </Link>
            </div>

          </div>


        </div>
      </div>
    </section>
  )
}

export default Settings