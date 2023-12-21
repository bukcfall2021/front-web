import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/ProductCard";
import Button from "../../components/ToggleButton";
import ProductModal from "../../components/modals/ProductModal";
import axios from 'axios'
const MenuPage = () => {
  const { id } = useParams();
  const [load, setLoad] = useState(false);
  const [Items,setItems]= useState([]);
  const [numbers, setNumbers] = useState(0);
  const [productModelOpen, setProductModalOpen] = useState(false);
  const [category, setCategory] = useState(["Pizzas", "Sandwich", "Burger", "Desserts", "Salads"]);
  useEffect(() => {
    setLoad(true);
   
  });
  // const getData =()=>{
  //   axios.get(``).then((res)=>{setItems(res.data)}).catch(error=>console.log(error))

  //   }
  // }
  useEffect(()=>{
    console.log("Number = ",numbers)
    console.log("Category = ",category[numbers])
    // getData();
  },[numbers])

  return load ? (
    <div className="w-full">
      <div className="py-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-primary">{category[numbers]}</h1>
        <div className="w-28 h-10">
          <Button  setNumbers={setNumbers} numbers={numbers}/>
        </div>
      </div>
      <div className="w-full grid md:grid-cols-3 grid-cols-2 gap-3 md:gap-5">
        {Array(10)
          .fill(null)
          .map((item, index) => (
            <ProductCard key={index} onClick={() => setProductModalOpen(true)} />
          ))}
      </div>

      <ProductModal open={productModelOpen} setOpen={setProductModalOpen} />
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default MenuPage;
