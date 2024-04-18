import signUp from "../assets/signup.svg";
import logo2 from "../assets/logo2.svg";
import sms from "../assets/sms.svg"
import google from "../assets/google.png"
import unlock from "../assets/unlock.svg"
import { Link } from 'react-router-dom';

const Signin = () => {
  return (
    <div className='h-screen  grid grid-cols-2'>
      <div className='border-2 relative'>
        <img src={signUp} alt="" className='w-full h-screen' />
        <div className="absolute top-0 left-0 w-full h-full bg-blue-500 opacity-50"></div>
      </div>
      <div className='grid' style={{ gridTemplateRows: '150px 1fr 100px' }}>
        <div className='flex justify-center items-center flex-col gap-3'>
          <img src={logo2} alt="" />
          <h2 className='font-bold text-3xl'>Welcome Back</h2>
        </div>
        <div className='flex mt-20 px-40'>
          <form className="w-full max-w-sm">
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
              <div className="flex items-center border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline gap-3">
               <img src={sms} alt=""/>
                <input type="email" id="email" name="email" className="w-full appearance-none focus:outline-none" placeholder='Enter your email' required />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password:</label>
              <div className="flex items-center border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline gap-3">
              <img src={unlock} />
                <input type="password" id="password" name="password" className="w-full appearance-none focus:outline-none" placeholder='Enter your password' required />
              </div>
            </div>
            <div className='w-full'>
                <p className='text-[#C3DDFD] text-right'>Forgotten Password?</p>
            </div>

            <div className="flex items-center justify-between mt-8 ">
              <button type="submit" className="shadow appearance-none border rounded-lg w-full py-4 bg-[#1A56DB] text-white px-3 font-extrabold leading-tight focus:outline-none focus:shadow-outline" >Log In</button>
            </div>
            <Link className="border-2 mt-5 border-[#F9FAFB] justify-center py-3 flex items-center">
                <img src={google} />
                <p className="text-2xl gap-2">Sign in with Google</p>
            </Link>
            <div className=' mt-5 text-center font-bold '>
                <p>Don’t have an account? <Link className='text-[#76A9FA] cursor-pointer' to="./../signup"> Sign up</Link></p>
            </div>
          </form>
       
        </div>
    
      </div>
    </div>
  );
};

export default Signin;
