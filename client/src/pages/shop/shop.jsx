import React, {useState} from 'react';
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./shop.css";
import partsImage from "./image1.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';
// this is bringing all the data files in right now. access different types by saying partsData.typeOfProductYouWant 
// this needs to be coming from the database eventually which means fixing the server structure
import partsData, { gpu, cpu, motherboard, cases, coolers, ram, psu, storage } from '../../data/parts'

export const Shop = () => {
  const [view, setView] = useState("PARTS")

  const handleClick = (event) => {
    setView(event.target.textContent)
  }
  const renderItemsByTag = () => {
    //given the state 'view' we render a specific item type selected in the if statement below

    if(view === "GPU") {
      return (
        <>
          {partsData.gpu.map(gpu => (
            <Product data={gpu}>

            </Product>
          ))}
        </>
      )
    } else if (view === "CPU") {
      return (
        <>
          {partsData.cpu.map(cpu => (
            <Product data={cpu}>

            </Product>
          ))}
        </>
      )
    } else if (view === "MOTHERBOARD") {
      return (
        <>
          {partsData.motherboard.map(motherboard => (
            <Product data={motherboard}>

            </Product>
          ))}
        </>
      )
    } else if (view === "CASES") {
      return (
        <>
          {partsData.cases.map(cases => (
            <Product data={cases}>

            </Product>
          ))}
        </>
      )
    } else if (view === "COOLERS") {
      return (
        <>
          {partsData.coolers.map(coolers => (
            <Product data={coolers}>

            </Product>
          ))}
        </>
      )
    } else if (view === "RAM") {
      return (
        <>
          {partsData.ram.map(ram => (
            <Product data={ram}>

            </Product>
          ))}
        </>
      )
    } else if (view === "PSU") {
      return (
        <>
          {partsData.psu.map(psu => (
            <Product data={psu}>

            </Product>
          ))}
        </>
      )
    } else if (view === "STORAGE") {
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
    <div main>
    <div className='shop'>
      {/* every Button here changes the state to the specific type of product, or all products */}
      
         
     <figure className="image-buttons">
     <button className="pbuttons" onClick={handleClick}>PARTS
     <img className="is-rounded"  src={partsImage} style={{ width: "128px", height: "128px", borderRadius: "50%" }} />
     </button>
     </figure>
     <figure className="image-buttons">
      <button className="pbuttons" onClick={handleClick}>CPU
      <img className="is-rounded"  src={partsImage} style={{ width: "128px", height: "128px", borderRadius: "50%" }} />
      </button>
      </figure>
      <figure className="image-buttons">
      <button className="pbuttons" onClick={handleClick}>GPU
      <img className="is-rounded"  src={partsImage} style={{ width: "128px", height: "128px", borderRadius: "50%" }} />
      </button>
      </figure>
      <figure className="image-buttons">
      <button className="pbuttons" onClick={handleClick}>MOTHERBOARD
      <img className="is-rounded"  src={partsImage} style={{ width: "128px", height: "128px", borderRadius: "50%" }} />
     </button> 
     </figure>
      <figure className="image-buttons">
      <button className="pbuttons" onClick={handleClick}>CASES
      <img className="is-rounded"  src={partsImage} style={{ width: "128px", height: "128px", borderRadius: "50%" }} />
      </button>
      </figure>

      <figure className="image-buttons">
      <button className="pbuttons" onClick={handleClick}>COOLERS
      <img className="is-rounded"  src={partsImage} style={{ width: "128px", height: "128px", borderRadius: "50%" }} />
      </button>
      </figure>


      <figure className="image-buttons">
      <button className="pbuttons" onClick={handleClick}>RAM
      <img className="is-rounded"  src={partsImage} style={{ width: "128px", height: "128px", borderRadius: "50%" }} />
      </button>
      </figure>

      <figure className="image-buttons">
      <button className="pbuttons" onClick={handleClick}>PSU
      <img className="is-rounded"  src={partsImage} style={{ width: "128px", height: "128px", borderRadius: "50%" }} />
      </button>
      </figure>

      <figure className="image-buttons">
      <button className="pbuttons" onClick={handleClick}>STORAGE
      <img className="is-rounded"  src={partsImage} style={{ width: "128px", height: "128px", borderRadius: "50%" }} />
      </button>
      </figure>
      </div>


      <div className='shopTitle'>
        <h1>Old Egg</h1>
     
      <div className="products">
        {/* Ternary operator for checking if we are viewing ALL products or a single product
        if we are seeing All then the map from line 56 to 66 shows. Add more maps to add more products*/}
        {
          view === "PARTS" ?
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
    </div>
  );
};

