import React, { useState, useRef, useEffect } from "react";
import { useDispatchCart, useCart } from "./ContentReducer";

export default function Card(props) {
  let dispatch = useDispatchCart();
  let data = useCart();
  let options = props.options;
  const priceRef = useRef();
  let priceOptions = Object.keys(options);
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState("");
  const handleAddToCart = async () => {
    let food = []
    for(const item of data){
      if(item.id === props.foodItem._id){
        food = item;
        break;
      }
    }
  if (Object.keys(food).length !== 0){
    if(food.size === size){
      console.log("Inside update")
      await dispatch({type:'UPDATE',id:props.foodItem._id,price:finalPrice,qty:qty})
      return
    }
    else if(food.size !== size){
      console.log("Inside add")
      await dispatch({
      type: "ADD",
      id: props.foodItem._id,
      name: props.foodItem.name,
      price: finalPrice,
      qty: qty,
      size: size
    });
    return
    }
    return
  }
  console.log("Inside add true")
  await dispatch({
      
      type: "ADD",
      id: props.foodItem._id,
      name: props.foodItem.name,
      price: finalPrice,
      qty: qty,
      size: size
    });
  
    
    // console.log(data);
    
  };

  let finalPrice = 0;
  if (size && options[size]) {
    finalPrice = qty * parseInt(options[size]);
  }
  useEffect(() => {
    setSize(priceRef.current.value);
  }, []);
  return (
    <div>
      <div>
        <div
          className="card mt-3"
          style={{ width: "18rem", maxHeight: "360px" }}
        >
          {/* weccreate an object and send it key value pair,{outer } signifies its js */}
          <img
            src={props.foodItem.img}
            className="card-img-top img-fluid"
            style={{ objectFit: "fill", height: "150px" }}
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{props.foodItem.name}</h5>
            <div className="container w-100">
              <select
                className="m-2 h-300  bg-success rounded"
                ref={priceRef}
                onChange={(e) => setSize(e.target.value)}
              >
                
                {priceOptions.map((data) => {
                  return (
                    <option key={data} value={data}>
                      {data}
                    </option>
                  );
                })}
                
              </select>

              <select
                className="m-2 h-100  bg-success rounded"
                onChange={(e) => setQty(e.target.value)}
              >
                {Array.from(Array(6),(e,i)=>{
                  return (
                    <option key={i+1} value={i+1}> {i+1}</option>
                  )
                })}
              </select>

              <div className="d-inline h-100 fs-5">Rs {finalPrice}</div>
            </div>
            <hr></hr>
            <button
              className={"btn btn-success justify-center ms-2"}
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
