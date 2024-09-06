import React, { useEffect, useState } from 'react'
import Cards from './Cards'
import list from "../../public/list.json"

import {Link} from "react-router-dom";
import axios from "axios";
function Course() {
    const[book,setbook]=useState([]);
    useEffect(()=>{
        const getBook = async()=>
        {
            try{
                const result = await axios.get("http://localhost:4001/book");
                console.log(result.data);
                setbook(result.data);
            }
            catch(error){
                console.log(error)
            }
        };
        getBook();
    },[])
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
    <div className='mt-28 items-center justify-center text-center'>
        <h1 className='text-2xl font-semibold md:text-4xl'>
            We are happy to have you <span className='text-pink-500'>here!!!!</span> 
        </h1>
        <p className='mt-12'>
         
        Discover our curated selection of courses designed to elevate your skills and knowledge. From coding and data science to creative writing and personal development, find the perfect course to advance your career and passions.</p>
    <Link to="/">
    <button className='mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300'>Back</button>
    </Link>
    </div>
    <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
        {
            book.map((item)=>(
                <Cards key={item.id} item= {item}/>
            ))
        }
    </div>

    </div>
    
    
    </>
  )
}

export default Course