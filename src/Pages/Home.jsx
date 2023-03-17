import React, { useState } from 'react'
import {render, Link } from 'react-router-dom'
import Header from '../Components/Header'
import Modal from "../Components/Modal"
import Post from '../Components/Post'


function Home({signout, printDoc, setSubtitle, setTitle, data,user, updatepost}) {
  const [modal, setmodal]= useState(false)

  const dataRef = data.map((data)=>{
    return(
      <Post
      user={user}
      data={data}
      updatepost={updatepost}
      key={data.key}
      title={data.title}
      subtitle={data.subtitle}
      username ={data.username}
      />
    )
  })


console.log(modal)
  return (<> 
<div className='h-screen'>
<Header signout={signout} user={user}/>


 <Modal data={data} setTitle={setTitle} printDoc={printDoc} setSubtitle={setSubtitle} setShow={setmodal}  modal={modal}/>
<div className='flex justify-end items-start color text-[orange] '>
  <div className=' w-[100%] overflow-hidden flex flex-col items-center justify-center'>
    {dataRef}
  </div>
  {user?
    <button onClick={()=>setmodal(true)} className='forum__btn'>Post Forum</button>
    :

    <Link to='/login'>
    <button onClick={()=>setmodal(true)} className=' right-1 forum__btn'>Post Forum</button>
    </Link>
  }
</div>
</div>
  </>
  )
}

export default Home