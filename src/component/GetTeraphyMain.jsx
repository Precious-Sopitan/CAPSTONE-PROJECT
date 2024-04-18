import logo from "../assets/logo.svg";
import bell from "../assets/bell.svg";
import todayBtn from "../assets/Todaybtn.svg";
import quest from "../assets/quest.png";
import avartar from "../assets/avartar.svg";
import weight from "../assets/weight.svg";
import lang from "../assets/language.svg";
import signout from "../assets/signout.svg";

const GetTeraphyMain = () => {

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
            <p className="text-sm">Welcome to Mindful virtual therapy schedular</p>
            <h2 className="text-[#233876] text-xl">Personalize match for your mental wellness journey</h2>
          </div>

          <div className="bg-white mt-10 leading-8 p-6 rounded-2xl shadow-md h-[auto] min-h-[15%]">
            
            <h2 className="text-[#233876] text-xl">Help us match you to the right therapist by answering 
these questions.</h2>
          </div>


          <div className="bg-white mt-10 grid grid-cols-2 leading-8 p-6 rounded-2xl shadow-md h-[auto] min-h-[15%]">
            <h2 className="text-[#233876] text-xl">Prefered gender of therapist </h2>
            <div className="flex justify-between">
              <button className="text-[#233876] font-semibold py-3 bg-[#C3DDFD] px-5 rounded-md">Male</button>
              <button className="text-[#233876] font-semibold py-3 bg-[#C3DDFD] px-5 rounded-md">Female</button>
              <button className="text-[#233876] font-semibold py-3 bg-[#C3DDFD] px-5 rounded-md">N/A</button>
            </div>
            
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
            
            <p className="text-white text-center">Your Therapist?</p>
            <img src={quest}/>
          </div>
        </div>
      </div>
  )
}

export default GetTeraphyMain;
