import productData from './data.json'
import { useParams } from 'react-router-dom'
import { ProductContext } from '../Context/ShopContext'
import { useContext, useEffect, useState } from 'react'
import Rating from '../components/Rating'

const Products = () => {
  const [click, setClick] = useState(false)
  const [index, setIndex] = useState(0)
  const params = useParams()
  const productId = params.productId

  const handleCart = (productId) => {
    alert(`${productData[productId].title} is added to cart`)
  }

  const { addToCart } = useContext(ProductContext)
  useEffect(() => {
    setIndex(0)
  }, [productId])

  const discount =
    productData[productId].price *
    (productData[productId].discountPercentage / 100)
  const discountedPrice =
    productData[productId].price -
    productData[productId].price *
      (productData[productId].discountPercentage / 100)
  discountedPrice.toFixed(2)

  return (
    <>
      <section className="flex  flex-col max-w-md  gap-20 m-[30px] mt-[100px] md:max-w-3xl  mx-auto md:flex-row   md:h-[700px] p-8 pb-8   lg:max-w-6xl xl:max-w-7xl justify-between">
        <div className="  mx-auto   max-w-full flex flex-col  items-center gap-5 m-5  justify-evenly">
          {' '}
          <div className=" w-[300px]">
            <h1 className="text-[22px] font-bold ">
              {productData[productId].title}
            </h1>
            <img
              src={productData[productId].images[index]}
              alt=""
              className="mx-auto "
            />
          </div>
          <div className="flex gap-3 flex-col md:flex-row shrink ">
            {productData[productId].images[1] ? (
              <img
                src={productData[productId].images[1]}
                className="w-[130px] h-[100px] cursor-pointer"
                onClick={() => setIndex(1)}
              />
            ) : (
              ''
            )}
            {productData[productId].images[2] ? (
              <img
                src={productData[productId].images[2]}
                className="w-[130px] h-[100px] cursor-pointer"
                onClick={() => setIndex(2)}
              />
            ) : (
              ''
            )}
            {productData[productId].images[3] ? (
              <img
                src={productData[productId].images[3]}
                className="w-[130px] h-[100px] cursor-pointer"
                onClick={() => setIndex(3)}
              />
            ) : (
              ''
            )}
          </div>
        </div>
        <div className="flex flex-col w-2xl justify-around  bg-gray-300  lg:text-[20px]">
          <p className="p-3 text-[22px] font-semibold max-w-xl">
            {productData[productId].description}
          </p>
          <div className="flex flex-col justify-center  items-start text-[17px] gap-2 font-bold   mx-auto">
            <h1 className="  flex justify-start items-start">
              {productData[productId].title} was Price:
              <h1 className="line-through px-2">
                ${productData[productId].price}
              </h1>
            </h1>
            <h1>
              {productData[productId].title} Price :
              <span className="px-2">${discountedPrice.toFixed(2)}</span>
            </h1>
            <h1 className="text-start">
              You save- <span className="px-2 ">${discount}</span>
            </h1>
          </div>

          <span className="items-center   lg:text-[18px] text-center flex mx-auto   text-[22px] font-bold">
            <label htmlFor="rating" style={{ paddingRight: 10 }}>
              {' '}
              Rating:
            </label>
            <h1 className="pr-2">{productData[productId].rating}</h1>
            <Rating rating={productData[productId].rating} />
          </span>
          <div className="lg:text-[18px] text-center flex mx-auto   text-[22px] font-bold">
            Stocks left :
            <h1
              className={`${
                productData[productId].stock < 50
                  ? 'text-red-500'
                  : 'text-green-500'
              }`}
            >
              {productData[productId].stock < 50 ? (
                <h1>{productData[productId].stock} Hurry Up!</h1>
              ) : (
                <h1>{productData[productId].stock} </h1>
              )}
            </h1>
          </div>
          <div className="flex justify-around p-5 gap-4">
            <button
              className=" bg-white px-3 border-2 border-black hover:bg-black hover:text-white text-[18px] font-semibold duration-200 uppercase"
              onClick={() => {
                setClick(!click), addToCart(productId), handleCart(productId)
              }}
            >
              Add to cart
            </button>
            <button className="bg-red-900 border-2 border-red-900 text-white px-3 py-1 hover:bg-white hover:text-red-900 text-[18px] font-semibold duration-200 uppercase ">
              Buy Now
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Products
