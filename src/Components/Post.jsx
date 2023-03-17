import { doc, updateDoc } from 'firebase/firestore';
import React from 'react'
import { db } from '../config/firebase';

function Post({title, subtitle,username,user, updatepost,data}) {

  async function postComment(event){
  event.preventDefault();
  const comments =  {
    comment:event.target[0].value, 
     id: data.id,
     user:user.displayName + ": "
   }
   const docRef = doc(db, "posts", comments.id)
  const newPost = await {
    comments: [
      ...data.comments,
      comments.user  + 
       comments.comment 
    ]
  }
  await updateDoc(docRef, newPost)
  window.location.href=window.location.origin
    console.log(comments)

  }



  return (
    <div className=' h-[50%] w-[50%]  bg-[white] mt-[20px] mb-[20px]'>
        <div className='flex flex-col items-start'>
          <div className='mr-10 ml-10 text-xl mt-10 text-[black] italic font-semibold  h-[30px]'>
          {username}

          </div>
            <h1 className='m-10 text-black font-bold text-2xl'>
                {title}
            </h1>
            <p className='m-10 text-black text-xl' >{subtitle}</p>
            <form onSubmit={(event)=>postComment(event)}>
            <textarea placeholder='Comment' name="comment" className='border border-[#14141] mr-10 ml-10 mt-5' id="" cols="80" rows="8" ></textarea>
            <button type='submit' className='text-[#141414] ml-10 mb-5 mt-5 p-2 border rounded'>Comment </button>
            </form>
            <h2 className='ml-10 text-[black]'>Comments</h2>
            {data.comments?.map((comment)=>{
              return(
                <div className='comment border '>
                {comment}
              </div>
                )
            })}
        </div>

    </div>
  )
}

export default Post


