import { DASHBOARD_TOP_LINKS, DASHBOARD_BOTTOM_LINKS, DASHBOARD_LINKS } from "../../lib/data";
import { Link, useLocation } from "react-router-dom";

const SidePanel = () => {

  const LogoutClass1 = "flex px-[5px] transition-all ease-in-out duration-300 hover:px-3 items-center text-[red]  justify-between cursor-pointer py-[6px]"
  const LogoutClass2 = "flex px-[5px] transition-all ease-in-out duration-300 hover:px-3 items-center text-[#000037] dark:text-[#fff] justify-between cursor-pointer py-[6px]"
  const { pathname } = useLocation()


  return (
    <section id="side_panel" className="w-full dark:bg-[#000] flex flex-col h-screen pt-[4rem]">

      <div className="flex-1">
        {
          DASHBOARD_LINKS.map(({ key, label, path, icon }) => (

            <Link to={path} key={key}>
              <div className="text-[#000037] dark:text-[#fff] transition-all ease-in-out duration-300 hover:bg-[#000033]/[0.2] flex items-center justify-center gap-[.5rem] py-[1rem] border-b-[1px] border-[#000]/[0.3] dark:border-[#000037]/[0.3]">
                {icon}
                <p className="leading-[12px] text-[14px] font-bold">{label}</p>
              </div>
            </Link>
          ))
        }

        <div className="px-[10px] pt-[15px] border-b-[1px] border-[#000]/[0.3] dark:border-[#000037]/[0.3] ">
          <p className="font-extrabold text-[10px] leading-[16px] text-[#000037]/[0.6] dark:text-[#fff]/[0.5]">INTERFACE</p>
          {
            DASHBOARD_TOP_LINKS.map(({ key, label, path, icon }) => (
              <div key={key} className="flex px-[5px] transition-all ease-in-out duration-300 hover:px-3 items-center text-[#000037] dark:text-[#fff] justify-between cursor-pointer py-[15px]">
                <Link to={path} >
                  <div className="flex items-center gap-[10px]">
                    {icon}
                    <p className={pathname === path ? 'font-bold' : 'font-normal text-[#000037]/[0.8] dark:text-[#fff]/[0.8] '}>{label}</p>
                  </div>
                </Link>
              </div>

            ))
          }

        </div>
      </div>
      <div className="px-[10px] pt-[15px] border-b-[1px] border-[#000]/[0.3] dark:border-[#f5f5f5]/[0.3] ">
        <p className="font-extrabold text-[10px] leading-[16px] text-[#000037]/[0.6] dark:text-[#fff]/[0.5]">COMPONENTS</p>
        {
          DASHBOARD_BOTTOM_LINKS.map(({ key, label, path, icon }) => (
            <div key={key} className={key === 'logout' ? LogoutClass1 : LogoutClass2}>
              <Link to={path}>
                <div className="flex items-center gap-[10px]">
                  {icon}
                  <p className="font-normal">{label}</p>
                </div>
              </Link>
            </div>

          ))
        }
      </div>
    </section>
  )
}

export default SidePanel