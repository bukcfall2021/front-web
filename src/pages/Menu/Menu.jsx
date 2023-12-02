import React,{useEffect, useState} from 'react'
import './Menu.css'
const Menu = () => {
    const [menu,setMenu]=useState([]);
    const [category,setCategory]=useState('pizza')

    useEffect(()=>{
        axios.get('').then((response)=>setMenu(response.data))
        .catch((error)=>{console.log(error)})
    },[category])
  return (
    <div>
        <div className='section-container'>
            <div className='grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4'>

            </div>
        </div>
    </div>
  )
}

export default Menu