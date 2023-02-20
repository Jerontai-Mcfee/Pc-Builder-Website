import React, {useState} from 'react';
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./shop.css";

// this is bringing all the data files in right now. access different types by saying partsData.typeOfProductYouWant 
// this needs to be coming from the database eventually which means fixing the server structure
import partsData, { gpu, cpu, motherboard, cases, coolers, ram, psu, storage } from '../../data/seeds'

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
          {partsData.cpu.map(cpu => (
            <Product data={cpu}>

            </Product>
          ))}
        </>
      )
    } else if (view == "MOTHERBOARD") {
      return (
        <>
          {partsData.motherboard.map(motherboard => (
            <Product data={motherboard}>

            </Product>
          ))}
        </>
      )
    } else if (view == "CASES") {
      return (
        <>
          {partsData.cases.map(cases => (
            <Product data={cases}>

            </Product>
          ))}
        </>
      )
    } else if (view == "COOLERS") {
      return (
        <>
          {partsData.coolers.map(coolers => (
            <Product data={coolers}>

            </Product>
          ))}
        </>
      )
    } else if (view == "RAM") {
      return (
        <>
          {partsData.ram.map(ram => (
            <Product data={ram}>

            </Product>
          ))}
        </>
      )
    } else if (view == "PSU") {
      return (
        <>
          {partsData.psu.map(psu => (
            <Product data={psu}>

            </Product>
          ))}
        </>
      )
    } else if (view == "STORAGE") {
      return (
        <>
          {partsData.storage.map(storage => (
            <Product data={storage}>

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
      <button onClick={handleClick}>MOTHERBOARD</button>
      <button onClick={handleClick}>CASES</button>
      <button onClick={handleClick}>COOLERS</button>
      <button onClick={handleClick}>RAM</button>
      <button onClick={handleClick}>PSU</button>
      <button onClick={handleClick}>STORAGE</button>

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

