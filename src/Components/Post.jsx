import React from 'react'

function Post({title, subtitle}) {
  return (
    <div className=' h-[50%] w-[50%]  bg-[white] mt-[20px] mb-[20px]'>
        <div className='mt-20'>
            <h1 className='m-10 text-black font-bold text-2xl'>
                {title}
            </h1>
            <p className='m-10 text-black text-xl' >{subtitle}</p>
        </div>

    </div>
  )
}

export default Post