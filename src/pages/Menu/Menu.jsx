
import React,{useEffect, useState} from 'react'
import './Menu.css'
import Cards from '../../components/Cards';
import Button from '../../components/Button';
const Menu = () => {
  const [menu, setMenu] = useState([]);
  const [category, setCategory] = useState("pizza");

    // useEffect(()=>{
    //     axios.get('').then((response)=>setMenu(response.data))
    //     .catch((error)=>{console.log(error)})
    // },[category])
  return (
    <div className='bg-gray-100'>
      <div className='mx-auto w-8/12 h-20 flex justify-between items-center pl-3 pr-5 mb-5'>
        <h1 className='text-3xl font-bold text-green-500 '>PIZZAS</h1>
        <div className='w-28 h-10 '>
          <Button/>
        </div>
          </div>
        <div className='max-w-screen-2xl container  xl:px-24 px-4 bg-gray-100 '>
        
            <div className='w-5/6 mx-auto px-10 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5  '>
              
              <div className='h-72'>
                <Cards/>
              </div>
              <div className='h-72'>
                <Cards/>
              </div>
              <div className='h-72'>
                <Cards/>
              </div>

              <div className='h-72'>
                <Cards/>
              </div>
              <div className='h-72'>
              <Cards/>
            </div><div className='h-72'>
                <Cards/>
              </div><div className='h-72'>
                <Cards/>
              </div>
              
            </div>
        </div>
    </div>
  );
};

export default Menu;
