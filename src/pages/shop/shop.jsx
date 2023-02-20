import React, {useState} from 'react';
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./shop.css";

// this is bringing all the data files in right now. access different types by saying partsData.typeOfProductYouWant 
// this needs to be coming from the database eventually which means fixing the server structure
import partsData from '../../data/seeds'

export const Shop = () => {
  const [view, setView] = useState("All")

  const handleClick = (event) => {
    setView(event.target.textContent)
  }
  const renderItemsByTag = () => {
    //given the state 'view' we render a specific item type selected in the if statement below

    if(view == "GPU") {
      return (
        <>
          {partsData.gpu.map(gpu => (
            <Product data={gpu}>

            </Product>
          ))}
        </>
      )
    } else if (view == "CPU") {
      return (
        <>
          {PRODUCTS.map(cpu => (
            <Product data={cpu}>

            </Product>
          ))}
        </>
      )

    }
  }

  return (
    <div className='shop'>
      {/* every Button here changes the state to the specific type of product, or all products */}
      <button onClick={handleClick}>PARTS</button>
      <button onClick={handleClick}>CPU</button>
      <button onClick={handleClick}>GPU</button>
      <div className='shopTitle'>
        <h1>Old Egg</h1>
      </div>
      <div className="products">
        {/* Ternary operator for checking if we are viewing ALL products or a single product
        if we are seeing All then the map from line 56 to 66 shows. Add more maps to add more products*/}
        {
          view === "All" ?
          (
            <>
            {PRODUCTS.map((product) => (
              
              <Product data={product} />
              ))}
              {
                partsData.gpu.map((product) => (
                  <Product data={product} />
                  ))
                }
                </>
                ) : (
                  renderItemsByTag()
                )
              }
              </div>
    </div>
  );
};

