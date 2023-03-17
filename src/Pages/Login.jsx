import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../Components/Header'

function Login({ setpass, setemail, signin, user, signout}) {

  return (
    <div className='h-screen overflow-y-hidden'>
      <Header signout={signout} user={user} />
    {user===null? <div className='bg-[gray]/70  flex h-[calc(100%-20px)] items-center '>
        <div className='flex mx-auto h-3/6  '>
            <div className='rounded flex mx-auto border px-10 items-center'>
            <div className=' flex flex-col justify-center' >
             <label className=''>Email:</label><input onChange={(e)=>setemail(e.target.value)} className='mb-5 mt-2 p-2 focus:outline-none border' type="email" placeholder='e-mail' />
               <label >Password:</label><input onChange={(e)=>setpass(e.target.value)} className='mb-8 mt-2 p-2 focus:outline-none' type="password" placeholder='password' />
               <div className='w-[100%] flex flex-col items-center'>
               <button onClick={signin} className='cursor-pointer bg-[#070301] text-white w-[100px]' >
                Login
              </button>
              <Link to='/signup'>
            <button >New user? Sign up Now</button>
              </Link>
               </div>
            </div>
            </div>
        </div>
    </div>:
    <div className='flex border-t  flex-col justify-center items-center h-[calc(100%-20px)] color'>
      <div>
        <h2 className='text-[gray]'>Email: {user.email}</h2>
      <h2 className='py-10 text-[gray] px-5 ' >You've already signed In</h2>
    <button className='cursor-pointer bg-[red] text-white w-[100px]'  onClick={signout}>Signout</button>
      </div>
    </div>
    }
    </div>
  )

}

export default Login