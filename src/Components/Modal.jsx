import {  faHourglassEnd} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'


function Modal({modal,setShow,printDoc, setTitle, setSubtitle, data}) {
  return (<div className={` overflow-hidden flex items-center justify-center h-[calc(100%-80px)] bg-[#141414]/50 absolute w-[100%]  ${modal? 'z-10':'-z-10'}`}>
    {modal && data.length > 0  ? 
      <div className='forum'> 
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu0KquDHvsHnUMcZEYWpGEJJP9-xIIiPLSbXd1xFnEJ6EA70Sq2pSZsaiXcDf1CrF7jLY&usqp=CAU"  onClick= { () => setShow(false)}  className='img__close' alt="" />
      <div className='flex pl-8 flex-col h-[100%]' >
        <h2 className='pt-4 text-2xl'>
      Add Forum
        </h2>
        <div className='mt-10 flex items-start justify-center '>
          <div className='flex-col flex w-[50%]'>
          {/* <form onSubmit ={printDoc} className='flex flex-col items-center'> */}
            <div className='w-[100%] pb-2'>

        <label className='pb-2 ' >Title:</label></div> <input required onChange={(e)=> setTitle(e.target.value)} className=' font-semibold fontStyle-italic w-[100%] rounded border border-[#141414] focus:outline-none ' type="text" />
            <div className='w-[100%] mt-8 pb-2'>
        <label className='mt-8 pb-2'>SubTitle:</label> </div> <textarea required className='w-[100%] h-[200px] rounded border border-[#141414] focus:outline-none' onChange={(e) => setSubtitle(e.target.value)} type="text-area" />
        <button className='submit__btn' onClick={printDoc}>Submit</button>
          {/* </form> */}
          </div>
          <img className='w-[45%] ml-[20px] mt-[60px] ' src="https://www.supersoluce.com/sites/default/files/node/2794307/soluce-mortal-kombat-11-toutes-les-fatalites-all-fatality-mk11-001_0.jpg" alt="" />
        </div>
      </div>
      </div>:
      <div className='color w-[100%] h-[100%] flex items-center'>
         <FontAwesomeIcon className='spinner'  icon = {faHourglassEnd}/>
         </div>
    }
    </div>
  )
}

export default Modal




