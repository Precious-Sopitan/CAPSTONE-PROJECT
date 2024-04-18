import React from 'react';
import signUp from "../assets/signup.svg";
import logo2 from "../assets/logo2.svg";
import user from "../assets/user.svg"
import sms from "../assets/sms.svg"
import location from "../assets/location.svg"
import unlock from "../assets/unlock.svg"
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <div className='h-screen  grid grid-cols-2 relative'>
      <div className='border-2 relative'>
        <img src={signUp} alt="" className='w-full h-screen' />
        <div className="absolute top-0 left-0 w-full h-full bg-blue-500 opacity-50"></div>
      </div>
      <div className='grid' style={{ gridTemplateRows: '150px 1fr 100px' }}>
        <div className='flex justify-center items-center flex-col gap-3'>
          <img src={logo2} alt="" />
          <h2 className='font-bold text-3xl'>Create an account</h2>
        </div>
        <div className='flex mt-20 px-40'>
          <form className="w-full max-w-sm">
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name:</label>
              <div className="flex items-center border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline gap-3">
                 <img src={user} />
                <input type="text" id="name" name="name" className="w-full appearance-none focus:outline-none" placeholder='Enter your name' required />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="surname" className="block text-gray-700 text-sm font-bold mb-2">Surname:</label>
              <div className="flex items-center border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline gap-3">
               <img src={user} />
                <input type="text" id="surname" name="surname" className="w-full appearance-none focus:outline-none" placeholder='Enter your surname' required />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
              <div className="flex items-center border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline gap-3">
               <img src={sms} alt="" srcset="" />
                <input type="email" id="email" name="email" className="w-full appearance-none focus:outline-none" placeholder='Enter your email' required />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="location" className="block text-gray-700 text-sm font-bold mb-2">Location:</label>
              <div className="flex items-center border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline gap-3">
            <img src={location} />
                <input type="text" id="location" name="location" className="w-full appearance-none focus:outline-none" placeholder='***********' />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password:</label>
              <div className="flex items-center border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline gap-3">
              <img src={unlock} />
                <input type="password" id="password" name="password" className="w-full appearance-none focus:outline-none" placeholder='Enter your password' required />
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor="confirm_password" className="block text-gray-700 text-sm font-bold mb-2">Confirm Password:</label>
              <div className="flex items-center border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline gap-3">
               <img src={unlock} />
                <input type="password" id="confirm_password" name="confirm_password" className="w-full appearance-none focus:outline-none" placeholder='Confirm your password' required />
              </div>
            </div>
            <div>
                <p className=' font-semibold'>We’ll never share your details. See our Privacy Policy.</p>
            </div>
            <div className="flex items-center justify-between mt-8 ">
              <button type="submit" className="shadow appearance-none border rounded-lg w-full py-4 bg-[#1A56DB] text-white px-3 font-extrabold leading-tight focus:outline-none focus:shadow-outline" >Create account</button>
            </div>
            <div className=' mt-5 text-center font-bold '>
                <p>Already have an account? <Link className='text-[#76A9FA] cursor-pointer' to="./../signin"> log in</Link></p>
            </div>
          </form>
       
        </div>
    
      </div>
    </div>
  );
};

export default SignUp;
