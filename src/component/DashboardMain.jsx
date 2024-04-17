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
      text: "Weight"
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
    <div className="w-full  flex flex-row ">
        <div className="w-[80%] bg-[#EBF5FF] rounded-l-[30px] p-10">
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
          <div className="bg-white mt-10 leading-8 p-6 rounded-2xl shadow-md h-[15%]">
            <h2 className="font-bold text-[#233876] text-2xl">Hello, Jacob Jones</h2>
            <p>Welcome to Mindfull, your one-stop to sobriety</p>
            <h2 className="text-[#233876] font-semibold">Track your mood and daily activities</h2>
          </div>
          <div className="flex flex-wrap items-center mt-2 h-[35%]">
            {card.map((item, index) => (
              <div key={index} className="w-[300px] h-full bg-white m-4 p-4 rounded-lg shadow-md">
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
        <div className="w-[20%] h-full bg-[#233876] rounded-l-[30px] p-10 font-semibold">
          <div className="flex flex-col gap-12 text-white">
            <div className="border-8 rounded-lg p-3">
              <div className="flex flex-col items-center py-5">
                <img src={avartar} alt="Avatar" />
                <p>Jacob Jones</p>
                <p>25 years</p>
                <div>
                  {card2.map((item, index) => (
                    <div key={index}>
                      <div>
                         {item.icon}  
                         {item.text}
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </div>
            <div className="border-8 rounded-lg">wedwdwdejbjbdd</div>
            <div className="border-8 rounded-lg">rfgrgyr</div>
          </div>
        </div>
      </div>
  )
}

export default DashboardMain