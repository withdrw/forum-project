import {  Route, Routes, BrowserRouter } from "react-router-dom";
import Login from "./Pages/Login"
import { useState, useEffect } from "react";
import { auth, db  } from "./config/firebase";
import { createUserWithEmailAndPassword,onAuthStateChanged, signInWithEmailAndPassword, signOut, updateCurrentUser, updateProfile } from "firebase/auth";
import Forum from "./Components/Forum";
import Home from './Pages/Home'
import { addDoc, collection, doc, getDoc, getDocs } from "firebase/firestore";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import Signup from "./Pages/Signup";




function App() {
  const [ username, setUsername ] = useState(null);
  const [users, setUser] = useState(null)
  const [email, setemail]= useState('')
  const [pass, setpass]= useState('')
  const [title, setTitle]= useState('')
  const [subtitle, setSubtitle]= useState('')
  const ref = collection(db, "posts");
  const [data, setdata] = useState([])
  const [post, Updatepost]=useState([])
  async function printDoc(){
    const docref= await addDoc(ref, {
      title:title,
      subtitle:subtitle,
      username: users?.displayName,
      comments:[]
      
    }).then(()=>{
    window.location.href= `${window.location.origin}`
  })
}

async function Doc(){
  const data = await getDocs(collection(db, "posts"));
  const posts = data.docs.map((doc)=>({...doc.data(), id: doc.id}))
  setTimeout(() => {
    setdata(posts)
  }, 500);
}
useEffect(()=>{
  Doc()
  
},[])
console.log(data)




function signin(){
  signInWithEmailAndPassword(auth, email, pass)
  .then((user)=>{
    localStorage.setItem("username", username)
    window.location.href=`${window.location.origin}`
    console.log(user?.displayName)
    
  })
  .catch((error)=>{
    alert(error.message)
  })
}
useEffect(()=>{
  onAuthStateChanged(auth, (user)=>{
    if(user?.displayName===null){

      updateProfile(user,{
        displayName:localStorage.getItem("username")
      })
    }
    setUser(user)
  })
})
console.log(users)

function signUp() {
  createUserWithEmailAndPassword(auth, email, pass)
  .then(()=> {
    updateProfile(auth.currentUser,{
      displayName:localStorage.getItem("username")
    })
    localStorage.setItem("username", username)
  })
      .catch((error)=>{
        alert(error.message)
      } )
  }

 function signout(){
     signOut(auth)
     setUser(null)
     localStorage.clear()
  }
 window.onunload=()=>{
  signOut(auth)
  setUser(null)
 }

return (
  <div>

      {/* <FontAwesomeIcon icon="fa-spinner-third" /> */}
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home updatepost={Updatepost}  signout={signout} user={users} data={data} setSubtitle={setSubtitle} setTitle={setTitle} printDoc={printDoc} />}></Route>
        <Route path="/forum" element={<Forum/>}></Route>
        <Route path="/login" element={ <Login  setUsername={setUsername} user={users} signout={signout}  signin={signin} setpass={setpass} setemail={setemail}  />}></Route>
        <Route path="/signup" element={ <Signup  setUsername={setUsername} user={users} signout={signout}  signin={signin} setpass={setpass} setemail={setemail} signUp={signUp}  />}></Route>
      </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
