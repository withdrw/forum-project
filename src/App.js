import {  Route, Routes, BrowserRouter } from "react-router-dom";
import Login from "./Pages/Login"
import { useState, useEffect } from "react";
import { auth, db  } from "./config/firebase";
import { createUserWithEmailAndPassword,onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import Forum from "./Components/Forum";
import Home from './Pages/Home'
import { addDoc, collection, getDoc, getDocs } from "firebase/firestore";




function App() {
  const [user, setUser] = useState(null)
  const [email, setemail]= useState('')
  const [pass, setpass]= useState('')
  const [title, setTitle]= useState('')
  const [subtitle, setSubtitle]= useState('')
  const ref = collection(db, "posts");
  const [data, setdata] = useState([])
 async function printDoc(){

  const docref= await addDoc(ref, {
    title:title,
    subtitle:subtitle
  }).then(()=>{
    window.location.href= `${window.location.origin}`
  })
  }

  async function Doc(){
     const data = await getDocs(collection(db, "posts"));
     const posts = data.docs.map((doc)=>({...doc.data(), id: doc.id}))
     setdata(posts)
  }
useEffect(()=>{
Doc()
},[])
  

function signin(){
  signInWithEmailAndPassword(auth, email, pass)
  .then((user)=>{
    if(user){
      window.location.href= `${window.location.origin}`
    }
  }).catch((error)=>{
    alert(error.message)
  })
}
useEffect(()=>{
  onAuthStateChanged(auth, (user)=>{
    setUser(user)
  })
})


  function signUp() {
      createUserWithEmailAndPassword(auth, email, pass)
      .then(()=> {
        
      })
      .catch((error)=>{
        alert(error.message)
      } )

  }

 function signout(){
     signOut(auth)
     setUser(null)
  }





  return (
    <div>
<BrowserRouter>
      <Routes>
        <Route path="/" element={<Home user={user} data={data} setSubtitle={setSubtitle} setTitle={setTitle} printDoc={printDoc} />}></Route>
        <Route path="/forum" element={<Forum/>}></Route>
        <Route path="/login" element={ <Login user={user} signout={signout}  signin={signin} setpass={setpass} setemail={setemail} signUp={signUp}  />}></Route>
      </Routes>
</BrowserRouter>
    </div>
  );
}

export default App;
