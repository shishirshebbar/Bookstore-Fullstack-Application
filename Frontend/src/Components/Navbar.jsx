import React, { useEffect, useState } from 'react';
import Login from './Login';
import { useAuth } from '../Context/AuthorizationProvider';
import Logout from './Logout';
export default function Navbar() {
    const[authUser,setauthUser] = useAuth();
    
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
    const element = document.documentElement;

    useEffect(() => {
        if (theme === "dark") {
            element.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            element.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [theme]);

    const [sticky, setSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setSticky(window.scrollY > 0);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navItems = (
        <>
            <li><a href="/">Home</a></li>
            <li><a href='/course'>Courses</a></li>
            <li><a>Contact Us</a></li>
            <li><a>About</a></li>
        </>
    );

    return (
        <div className={`max-w-screen-2xl container mx-auto md:px-20 px-4 fixed top-0 left-0 right-0 z-50 ${
            sticky ? "sticky-navbar shadow-md bg-base-200 dark:bg-slate-500 duration-300 transition-all ease-in-out" : ""
        }`}>
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost lg:hidden"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                {/* Add SVG paths or content here */}
                            </svg>
                        </div>
                        <ul 
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navItems}
                        </ul>
                    </div>
                    <a className="text-2xl font-bold cursor-pointer">BookHeaven</a>
                </div> 
                <div className='navbar-end space-x-3'>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {navItems}
                        </ul>
                    </div>
                    <div className='hidden md:block'>
                        <label className="px-3 py-2 border rounded-md flex items-center gap-2">
                            <input 
                                type="text" 
                                className="grow outline-none bg-transparent dark:bg-transparent dark:text-white" 
                                placeholder="Search" 
                            />
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70">
                                <path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" />
                            </svg>
                        </label>
                    </div>
                    <label className="flex cursor-pointer gap-2 items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <circle cx="12" cy="12" r="5" />
                            <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                        </svg>
                        <input
                            type="checkbox"
                            className="toggle theme-controller"
                            checked={theme === "dark"}
                            onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
                        />
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                        </svg>
                    </label>

                    {
                    authUser?<Logout/>: <div>
                        <a 
                            className="bg-black text-white px-3 py-2 rounded-md hover:bg-slate-800 duration-300 cursor-pointer" 
                            onClick={() => document.getElementById("my_modal_3").showModal()}
                        >
                            Login
                        </a>
                        <Login />
                    </div> }
                </div>
            </div>
        </div>
    );
}


// import React, { useEffect, useState } from 'react';

// export default function Navbar() {
//     const[theme,settheme]= useState(localStorage.getItem("theme")?localStorage.getItem("theme"):"light")
//     const element =document.documentElement;
//     useEffect(()=>{
//       if(theme==="dark"){
//         element.classList.add("dark");
//         localStorage.setItem("theme","dark")
//         document.body.classList.add("dark");
//       }
//       else{
//         element.classList.remove("dark");
//         localStorage.setItem("theme","light")
//         document.body.classList.remove("dark");
//       }
//     },[theme])
//     const [sticky,setSticky] = useState(false)
//     useEffect(()=>{
//         const handleScroll=()=>{
//             if(window.scrollY>0){
//                 setSticky(true)
//             }
//             else{
//                 setSticky(false)
//             }
//             }
//             window.addEventListener('scroll',handleScroll)
//             return()=>{
//                 window.removeEventListener('scroll',handleScroll)            }

//     },[])
//     const navItems = (<>
//     <li><a href="/">Home</a></li>
//     <li><a href='/course'>Courses</a></li>
//     <li><a>Contact Us</a></li>
//     <li><a>About</a></li>
//     </>);
//   return (

//     <div className = {`max-w-screen-2xl container mx-auto md:px-20 px-4 dark:bg-slate-900 dark:text-white fixed top-0 left-0 right-0 z-50 ${
//           sticky ? "sticky-navbar shadow-md bg-base-200 dark:bg-grey-600 dark:text-white duration-300 transition-all ease-in-out"
//             : ""
//         }`}>
//     <div className="navbar ">
//           <div className="navbar-start">
//             <div className="dropdown">
//               <div
//                 tabIndex={0}
//                 role="button"
//                 className="btn btn-ghost lg:hidden"
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-5 w-5"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 ></svg>
//         </div>
//         <ul 
//                 tabIndex={0}
//                 className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
//         {navItems}
//         </ul>
//       </div>
//       <a className="text-2xl font-bold cursor-pointer ">Book Store</a>
//     </div> 
//     <div className='navbar-end space-x-3'>
//     <div className="navbar-center hidden lg:flex">
//       <ul className="menu menu-horizontal px-1">
//     {navItems}</ul>
//     </div>
//     <div className='hidden md:block'>
//     <label className="px-3 py-2 border rounded-md flex items-center gap-2">
//   <input type="text" className="grow" placeholder="Search" />
//   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
// </label>
// </div>
//   <label className="flex cursor-pointer gap-2">
//     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" 
//     onClick={()=>settheme(theme==="light"?"dark":"light")}
//     ><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
//     <input type="checkbox" value="synthwave" className="toggle theme-controller"/>
//     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
//     onClick={()=>settheme(theme==="dark"?"light":"dark")}
//     ><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
//   </label>
//     <div className="">
//       <a className="bg-black text-white px-3 py-2 rounded-md hover:bg-slate-800 duration-300 cursor-pointer">Login</a>
//       </div>
//     </div>
//   </div></div>
//   )
// }
