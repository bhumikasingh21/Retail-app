import React from "react"
import FlashCard from "./FlashCard"
import Data from "../Data"
import "./style.css"

const FlashDeals = ({ productItems, addToCart }) => {
  return (
    <>
      <section className='flash'>
        <div className='container'>
          <div className='heading f_flex'>
            
            <h1>Flash Deals</h1>
          </div>
          <FlashCard Data={Data} />
        </div>
      </section>
    </>
  )
}

export default FlashDeals
