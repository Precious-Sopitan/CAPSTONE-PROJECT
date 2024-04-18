import dashboardIcon from "../assets/dashboard.svg";
import SheduleIcon from "../assets/schedule.svg";
import CommunityIcon from "../assets/community.svg";
import ContactIcon from "../assets/contact.svg";
import ResourcesIcon from "../assets/resources.svg";
import BlogIcon from "../assets/blog.svg";
import SettingsIcon from "../assets/setting.svg";
import MenuIcon from "../assets/menu.svg";
import { NavLink } from "react-router-dom";

const DashboardSideBar = () => {
const menuItem= [
    {
        text:"Dashboard",
        icon:dashboardIcon,
        link:"./../dashboard"
    },
        {
        text:"Shedule",
        icon:SheduleIcon,
        link:"./../schedule"
    },
        {
        text:"Community",
        icon:CommunityIcon,
        link:"./../community"
    },
        {
        text:"Contact",
        icon:ContactIcon,
        link:"./../contact"
            },
        {
        text:"Resources",
        icon:ResourcesIcon,
        link:"./../resources"
            },
        {
        text:"Blog",
        icon:BlogIcon,
        link:"./../blog"
            },
        {
        text:"Settings",
        icon:SettingsIcon,
        link:"./../settings"
            },
]
  return (
        <div className=" bg-white w-[100px] h-[100svh] flex flex-col justify-start items-center gap-10 pt-16">
            <img src={MenuIcon} className="w-[30px] h-[30px]"/>
       
            {
                menuItem.map((item,index)=>(
                    <NavLink to={item.link} key={index} className="flex justify-center flex-col items-center w-full">
                        <img src={item.icon} className="w-[30px] h-[30px]"/>
                        <h1>{item.text}</h1>
                    </NavLink>
                ))
            }
        </div>
  )
}

export default DashboardSideBar