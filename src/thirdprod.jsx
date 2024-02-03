import { useReducer, useState } from "react";

export function ThirdProd(){
// product details
    const thirdProd=[
        {
            id: "1",
            title: "Samsung Universe 9",
            description: "Samsung's new variant which goes beyond Galaxy to the Universe",
            price: "1249",
            discountPercentage: "15.46",
            rating: "4.09",
            stock: "36",
            brand: "Samsung",
            category: "smartphones",
            thumbnail: "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
            images: [
                "https://i.dummyjson.com/data/products/3/1.jpg"
            ]
        }
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
    
      const [cardData,setcardData] = useState(thirdProd)
       //usereducer
      const [state,dispatch] = useReducer(reducer,store)
    return(
        <div>
              {/* //card details */}
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