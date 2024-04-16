import React from "react";
import logo from "../assets/logo.svg";
import bell from "../assets/bell.svg";
import todayBtn from "../assets/Todaybtn.svg";
import angry from "../assets/angry.svg";
import chart from "../assets/chart.svg"
import datepicker from "../assets/datepicker.svg"
import bigchart from "../assets/bigchart.svg"

const Dashboard = () => {
  const card = [
    {
      emoji: <img src={angry} alt="" srcSet="" className="
       bg-[#F8DEBD] p-1 rounded-md" />,
      text: "Angry",
      category: "normal",
      map: <img src={chart} alt="" srcSet="" width={350}/>
    },
    {
      emoji: <img src={angry} alt="" srcSet="" className=" bg-[#FBF0F3] p-1 rounded-md" />,
      text: "Angry",
      category: "normal",
      map:  <img src={chart} alt="" srcSet=""width={350} />
    },
    {
      emoji: <img src={angry} alt="" srcSet="" className=" bg-[#D0FBFF] p-1 rounded-md" />,
      text: "Angry",
      category: "normal",
      map:  <img src={chart} alt="" srcSet=""  />
    }
  ];

  return (
    <div className="flex flex-row">
      <div className=" bg-white w-[100px] h-[100svh]">qedf</div>
      <div className="w-full  flex flex-row ">
        <div className="w-[80%] bg-[#EBF5FF] rounded-l-[30px] p-10">
          <div className=" flex justify-between">
            <div>
              {" "}
              <img src={logo} alt="" srcSet="" />{" "}
            </div>
            <div className=" flex gap-7 justify-center items-center">
              <div>
                <img src={bell} width={45} alt="" />
              </div>
              <div>
                <img src={todayBtn} width={100} alt="" />
              </div>
            </div>
          </div>
          <div className="  bg-white mt-10 leading-10 p-6 rounded-2xl">
            <h2 className="font-bold text-[#233876] text-2xl">Hello, jacob jones</h2>
            <p>Welcome to Mindfull, your one stop to sobriety</p>
            <h2 className=" text-[#233876] font-semibold"> Track your mood and daily activities</h2>
          </div>
          <div className="flex flex-wrap  items-center mt-2">
            {card.map((item, index) => (
              <div key={index} className="w-[350px] h-[300px]  bg-white m-4 p-4 rounded-lg">
              <div className=" flex justify-between items-center text-lg font-bold">
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
          <div className=" bg-white">
<div className=" flex justify-between items-center" >
        <div className=" font-bold"><h1>Activity Growth</h1></div>
        <div><img src={datepicker} alt="" srcset="" /></div>
</div>
<img src={bigchart} alt="" srcset="" className=""/>
</div>
        </div>
        <div className="w-[20%] bg-[#233876] rounded-l-[30px] p-10">

          <div className="flex flex-col gap-12">
<div className=" border-8 rounded-lg">wedwdwdedd</div>
<div className=" border-8 rounded-lg">rfgrgyr</div>
         </div>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;
