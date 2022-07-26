import React from "react"

const Catg = () => {

  const [show, setShow] = React.useState(false);

  const data = [
    {
      cateImg: "./images/category/cat-1.png",
      cateName: "Apple",
    },
    {
      cateImg: "./images/category/cat-2.png",
      cateName: "Samsung",
    },
    {
      cateImg: "./images/category/cat-1.png",
      cateName: "Oppo",
    },
    {
      cateImg: "./images/category/cat-2.png",
      cateName: "Vivo",
    },
    {
      cateImg: "./images/category/cat-1.png",
      cateName: "Redmi",
    },
    {
      cateImg: "./images/category/cat-2.png",
      cateName: "Sony",
    },
  ]

  const shops = [
    {
      cateImg: "./images/category/cat-1.png",
      cateName: "Apple Store",
    },
    {
      cateImg: "./images/category/cat-2.png",
      cateName: "Samsung Store",
    },
    {
      cateImg: "./images/category/cat-1.png",
      cateName: "Oppo Store",
    },
    {
      cateImg: "./images/category/cat-2.png",
      cateName: "Vivo Store",
    },
    {
      cateImg: "./images/category/cat-1.png",
      cateName: "Redmi Store",
    },
    {
      cateImg: "./images/category/cat-2.png",
      cateName: "Sony Store",
    },
  ]
  return (
    <>
      <div className='category'>
        <div className='chead d_flex'>
          <h1 style={{cursor : "pointer"}} onClick={() => setShow(false)}>Brands </h1>
          <h1 style={{cursor : "pointer"}} onClick={() => setShow(true)}>Shops </h1>
        </div>
        {!show && data.map((value, index) => {
          return (
            <div className='box f_flex' key={index}>
              <img src={value.cateImg} alt='' />
              <span>{value.cateName}</span>
            </div>
          )
        })}
        {show && shops.map((value, index) => {
          return (
            <div className='box f_flex' key={index}>
              {/* <img src={value.cateImg} alt='' /> */}
              <span>{value.cateName}</span>
            </div>
          )
        })}
        <div className='box box2'>
          <button>View All Brands</button>
        </div>
      </div>
    </>
  )
}

export default Catg