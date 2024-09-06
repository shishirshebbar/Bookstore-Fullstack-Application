import React from 'react'
import { useAuth } from '../Context/AuthorizationProvider';
import toast from 'react-hot-toast';
function Logout() {
    const[authUser,setauthUser] = useAuth();
    const handlelogout =()=>{
        try{
            setauthUser({
                ...authUser,
                user:null
            })
            localStorage.removeItem("Users");
            toast.success("Logout successfull");
            document.getElementById("my_modal_3").close();
            setTimeout(()=>{
               
                window.location.reload();
             
            },3000)
       
        }
        catch(error){
            toast.error("Error:"+error);
            setTimeout(()=>{},2000);
        }
    }
  return (
    <div>
        <button className='px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer'
            onClick={handlelogout}>
            Logout
        </button>
    </div>
  )
}

export default Logout