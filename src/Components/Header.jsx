import React from 'react'
import {Link} from 'react-router-dom'
function Header({signout, user}) {
  return (
    <div>
        <nav className='flex bg-[#141414] text-[white] h-20 justify-between'>
            <div className=' flex w-[20%] items-center' >
                <h1 className='text-lg pl-5'>
                    <Link to="/">
            Forums
                    </Link>
                </h1>
            </div>
            <div className='flex items-center justify-center'>
            <Link to="/login">
                <button className='mx-5 h-10 px-5 cursor-pointer bg-[white]/5 rounded  '>Sign in</button>
            </Link>
                 {!user ? null :<button onClick={signout} className='mx-5 h-10 px-5 cursor-pointer bg-[gray]  rounded-lg '>Sign out</button>}
            </div>
        </nav>
    </div>
  )
}

export default Header