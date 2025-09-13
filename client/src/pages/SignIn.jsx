import React from 'react'
import { FcGoogle } from "react-icons/fc";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  
  signOut,
} from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../redux/productSlice';
import { useNavigate } from 'react-router-dom';

export default function SignIn() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const auth = getAuth();
   const provider = new GoogleAuthProvider();
   

  const handleGoogle =(e)=>{
    e.preventDefault()
     signInWithPopup(auth, provider).then((result)=>{
        const user = result.user;
          dispatch(addUser({
            id: user.uid,
             name: user.displayName,
              email: user.email,
              image: user.photoURL
          }))
          setTimeout(()=>{
           navigate("/")
          }, 1500)
          
     }).catch((error)=>{
       console.log(error)
     });

    //  console.log(auth);
     
  }

   const handleSignOut=()=>{
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        dispatch(removeUser())
        
      })
      .catch((error) => {
        // An error happened.

      });

   }
   return (
     <div className="w-full flex justify-center my-10">
       <div className="w-[300px] flex flex-col gap-4 justify-center">
         <div className="w-full flex justify-center">
           <button
             onClick={handleGoogle}
             className=" hover:opacity-90 duration-300 border shadow-sm tracking-wide font-semibold px-5 py-1 w-fit rounded-md flex justify-center items-center gap-2"
           >
             <span className="capitalize"> Sign In With Google</span>
             <FcGoogle className="w-10 h-10 rounded-full" />
           </button>
         </div>
         <div className="w-full flex justify-center">
           <button
             onClick={handleSignOut}
             className="bg-green-950 hover:opacity-90 duration-300 text-white px-5 py-1 w-fit rounded-md"
           >
             Sign Out
           </button>
         </div>
       </div>
     </div>
   );
  
  }
    


