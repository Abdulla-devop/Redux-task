import { useReducer, useState } from "react"
export function ProductCard(){
// product details
  const  Products = [
    {
        id: "1",
        title: "iPhone 9",
        description: "An apple mobile which is nothing like apple",
        price: "549",
        discountPercentage: "12.96",
        rating: "4.69",
        stock: "94",
        brand: "Apple",
        category: "smartphones",
        thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
        images: [
            "https://i.dummyjson.com/data/products/1/1.jpg",
            "https://i.dummyjson.com/data/products/1/2.jpg",
            "https://i.dummyjson.com/data/products/1/3.jpg",
            "https://i.dummyjson.com/data/products/1/4.jpg",
            "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
        ]

    },
  ]
  const store = {
    cartCount:0,
    totalCost:0,
  }

  const reducer =(state,action) =>{
    switch(action.type){
     case "inc_cart":
        return {...state,cartCount:state.cartCount + 1};
        case "dec_cart":
         return {...state,cartCount:state.cartCount-1};
         case "product_cost":
          return {... state,totalCost : (state.prodPrice * state.cartCount)}
    }
 }

  const [cardData,setcardData] = useState(Products)
  //usereducer
  const [state,dispatch] = useReducer(reducer,store)
  
    return(
      //card details
      <div className="">
          {cardData && (
      <>
      {cardData?.map((prodInfo,idx) => (
            <div 
            key={idx}
             className="card w-100 bg-base-100 shadow-xl m-4">
            <div className="card-body">
              <div className="cardinfo">
              <div className="h-42 w-60 carousel carousel-vertical rounded-box">
  <div className="carousel-item h-full">
    <img src={prodInfo.images[0]}/>
  </div> 
  <div className="carousel-item h-full">
    <img src={prodInfo.images[1]} />
  </div> 
  <div className="carousel-item h-full">
    <img src={prodInfo.images[2]} />
  </div> 
  <div className="carousel-item h-full">
    <img src={prodInfo.images[3]} />
  </div> 
  <div className="carousel-item h-full">
    <img src={prodInfo.images[4]} />
  </div>
  <p>Press arrow key to change image</p> 
</div>
<div className="m-2">
<h2 className="card-title">{prodInfo.title}</h2>
              <p>{prodInfo.description}</p>
              <p>Discount: {prodInfo.discountPercentage}%</p>
              <p>Ratings: {prodInfo.rating}</p>
              <p>Stock: {prodInfo.stock - state.cartCount}</p>
  <p>{prodInfo.brand}</p>
  <p>{prodInfo.category}</p>
  </div>
  {/* use of dispatch to increase */}
  <div className="pricebox">
   <button className="btn btn-primary"onClick={()=>dispatch({ type:"inc_cart"})}>Add</button><span>{state.cartCount}</span>
  </div>
  <div className="pricebox">
    <p className="dark">Price: {prodInfo.price}</p>
    {/* use of dispatch to decrease */}
    <button className="mb-8 dec"onClick={()=>dispatch({ type:"dec_cart" })}>Remove</button>

  </div>
  </div>
  <hr></hr>
  {/* //total price */}
  <div className="totalbox">
    <h3 className="m-2 flex justify-between hide">Sub Total :<span className="dark">{state.cartCount * prodInfo.price}</span></h3>
    <h3 className="m-2 flex justify-between hide">Shipping :<span className="dark">Free</span></h3>
    <hr></hr>
    <h3 className="m-2 flex justify-between dark">Total :<span>{state.cartCount * prodInfo.price}</span></h3>
    <h3 className="m-2 flex justify-between">offer<span className="dec">Get Daily cash with Nespola card</span></h3>
  </div>
            </div>
          </div>
      ))}
      </>
    )}
  </div>
    )
}