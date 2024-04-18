import logo from "../assets/logo.svg";
import bell from "../assets/bell.svg";
import todayBtn from "../assets/Todaybtn.svg";
import angry from "../assets/angry.svg";
import chart from "../assets/chart.svg";
import datepicker from "../assets/datepicker.svg";
import bigchart from "../assets/bigchart.svg";
import avartar from "../assets/avartar.svg";
import weight from "../assets/weight.svg";
import lang from "../assets/language.svg";
import signout from "../assets/signout.svg";

const DashboardMain = () => {
  const card = [
    {
      emoji: <img src={angry} alt="" srcSet="" className="bg-[#F8DEBD] p-1 rounded-md" />,
      text: "Angry",
      category: "normal",
      map: <img src={chart} alt="" srcSet="" width={350} />
    },
    {
      emoji: <img src={angry} alt="" srcSet="" className="bg-[#D0FBFF] p-1 rounded-md" />,
      text: "Anxious",
      category: "normal",
      map: <img src={chart} alt="" srcSet="" width={350} />
    },
    {
      emoji: <img src={angry} alt="" srcSet="" className="bg-[#FBF0F3] p-1 rounded-md" />,
      text: "Calm",
      category: "normal",
      map: <img src={chart} alt="" srcSet="" />
    }
  ];

  const card2 = [
    {
      icon: <img src={weight} />,
      text: "Weight 58kg"
    },
    {
      icon: <img src={lang} />,
      text: "Language"
    },
    {
      icon: <img src={signout} />,
      text: "Sign Out"
    }
  ];
  return (
    <div className="w-full h-full min-h-screen flex flex-row ">
        <div className="h-full min-w-[65%] bg-[#EBF5FF] rounded-l-[30px] p-5">
          <div className=" flex justify-between">
            <div>
              <img src={logo} alt="Logo" />
            </div>
            <div className="flex gap-7 justify-center items-center">
              <div>
                <img src={bell} width={45} alt="Bell" />
              </div>
              <div>
                <img src={todayBtn} width={100} alt="Today Button" />
              </div>
            </div>
          </div>
          <div className="bg-white mt-10 leading-8 p-6 rounded-2xl shadow-md h-[auto] min-h-[15%]">
            <h2 className="font-bold text-[#233876] text-2xl">Hello, Jacob Jones</h2>
            <p>Welcome to Mindfull, your one-stop to sobriety</p>
            <h2 className="text-[#233876] font-semibold">Track your mood and daily activities</h2>
          </div>
          <div className="grid grid-cols-3 justify-between gap-5 items-center mt-2 h-auto min-h-[35%]">
            {card.map((item, index) => (
              <div key={index} className=" h-auto bg-white m-4 p-4 rounded-lg shadow-md">
                <div className="flex justify-between items-center text-lg font-bold">
                  {item.emoji}
                  <p>{item.text}</p>
                </div>
                <div>
                  <p>{item.category}</p>
                </div>
                <div className="mt-20">
                  <p>{item.map}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-white rounded-xl shadow-md mt-10 h-[35%]">
            <div className="flex justify-between items-center px-5 py-2">
              <div className="font-bold"><h1>Activity Growth</h1></div>
              <div><img src={datepicker} alt="Date Picker" /></div>
            </div>
            <div className="flex justify-center items-center">
              <img src={bigchart} alt="Big Chart" className="block mx-auto" />
            </div>
            <ul className="flex gap-3 pl-10 text-[#233876]">
              <li>Reading</li>
              <li>Therapy</li>
              <li>Meditation</li>
            </ul>
          </div>
        </div>
        <div className="w-[35%] h-auto bg-[#233876] rounded-l-[30px] p-10 font-semibold">
          <div className="flex flex-col gap-12 text-white">
            <div className="border-8 rounded-lg p-3">
              <div className="flex flex-col items-center py-5">
                <img src={avartar} alt="Avatar" />
                <p>Jacob Jones</p>
                <p>25 years</p>
                <div className="grid grid-cols-3 justify-between gap-1 mt-10">
                  {card2.map((item, index) => (
                    <div key={index} className="flex flex-col items-center text-center bg-[#D9D9D9] p-3 rounded-lg text-black gap-1">
                       {item.icon}  
                       {item.text}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="border-8 rounded-lg flex flex-col p-5 gap-5 h-auto min-h-[30vh] items-center justify-center">
              <div className="p-3 bg-[#D9D9D9] rounded-lg text-black">Upcoming Appointment</div>
              <div className=" bg-white text-black p-5 rounded-lg">
                <p>Session with Dr Lu</p>
                <hr />
                <p>Community Support</p>
                <p>Support</p>
                <p>Meetings</p>
                <hr />
                <p>Yoga</p>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default DashboardMain;
