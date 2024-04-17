import dashboardIcon from "../assets/dashboard.svg";
import SheduleIcon from "../assets/schedule.svg";
import CommunityIcon from "../assets/community.svg";
import ContactIcon from "../assets/contact.svg";
import ResourcesIcon from "../assets/resources.svg";
import BlogIcon from "../assets/blog.svg";
import SettingsIcon from "../assets/setting.svg";
import MenuIcon from "../assets/menu.svg";

const DashboardSideBar = () => {
const menuItem= [
    {
        text:"Dashboard",
        icon:dashboardIcon,
    },
        {
        text:"Shedule",
        icon:SheduleIcon,
    },
        {
        text:"Community",
        icon:CommunityIcon,
    },
        {
        text:"Contact",
        icon:ContactIcon,
    },
        {
        text:"Resources",
        icon:ResourcesIcon,
    },
        {
        text:"Blog",
        icon:BlogIcon,
    },
        {
        text:"Settings",
        icon:SettingsIcon,
    },
]
  return (
        <div className=" bg-white w-[100px] h-[100svh] flex flex-col justify-start items-center gap-10 pt-16">
            <img src={MenuIcon} className="w-[30px] h-[30px]"/>
       
            {
                menuItem.map((item,index)=>(
                    <div key={index} className="flex justify-center flex-col items-center w-full">
                        <img src={item.icon} className="w-[30px] h-[30px]"/>
                        <h1>{item.text}</h1>
                    </div>
                ))
            }
        </div>
  )
}

export default DashboardSideBar