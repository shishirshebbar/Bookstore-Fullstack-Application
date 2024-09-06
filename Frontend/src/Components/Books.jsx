import React from 'react'
import list from "../../public/list.json"

export default function Books() {
  const filterData = list.filter((data)=>data.category==="Free") //equal value and type
  console.log(filterData);
  return (

    <div></div>
  )
}
