import { useSelector } from 'react-redux'

import { Outlet, Navigate } from 'react-router-dom'
import SidePanel from '../sidebar/SidePanel'


const PrivatePage = () => {

  const { currentUser } = useSelector((state) => state.user)

  // return currentUser ?  : 
  return (
    currentUser ?
      <section id="profile">
        <div className="flex h-screen w-screen overflow-hidden">
          <div className="basis-[15%] border">
            <SidePanel />
            <Outlet />
          </div>
          <div className="basis-[85%] border py-[4rem]">
            <Outlet />
          </div>
        </div>
      </section>
      :
      <Navigate to="/sign-in" />
  )
}

export default PrivatePage