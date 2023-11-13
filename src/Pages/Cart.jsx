import { MdDelete } from 'react-icons/md'
import { ProductContext } from '../Context/ShopContext'
import { useContext } from 'react'
import Counter from './Counter'
import image from '../Pages/images/Empty_Cart1.png'

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(ProductContext)

  const amounts = cartItems.map((item) => item.price)
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2)

  return (
    <>
      {cartItems.length < 1 ? (
        <div className="mt-[100px] mx-auto flex flex-col">
          <h1 className="mx-auto text-3xl font-medium font-poppins">
            Your cart is empty : {' ( '}
          </h1>
          <img src={image} alt="" className="mx-auto" />
        </div>
      ) : (
        <main className="w-full mx-auto flex flex-col mt-[150px] mb-[50px] shrink   ">
          <ul className="flex flex-col gap-5 w-full mx-auto items-center   p-5 ">
            <ul className="flex justify-around w-full items-center">
              <div className="border-b-2 flex justify-around w-full py-[10px] border-gray-400">
                <li className="text-lg font-semibold  ">Products</li>
                <li className="text-lg font-semibold  px-2">Title</li>
                <li className="text-lg font-semibold  px-2">Price</li>
                <li className="text-lg font-semibold  px-2">Quantity</li>
                <li className="text-lg font-semibold  px-2">Remove</li>
              </div>
            </ul>
            {cartItems.map((item) => (
              <article
                key={item.id}
                className="   border-b-2 border-gray-400 flex justify-around items-center w-full  hover:border-gray-900 duration-300  mx-auto"
              >
                <li>
                  <img src={item.images[0]} className="w-[100px] py-[8px]" />
                </li>
                <li className=" text-lg font-semibold w-[100px]">
                  {item.title}
                </li>
                <li className="text-lg font-semibold w-[100px]">
                  ${item.price}
                </li>
                <li className="w-[100px]">
                  <Counter />
                </li>
                <li
                  className="cursor-pointer"
                  onClick={() => {
                    removeFromCart(item.id)
                  }}
                >
                  <MdDelete className="w-[30px]  h-[30px]" />
                </li>
                {/* <div className=" w-full static text-center flex items-center justify-evenly   ">
                  <img src={item.images[0]} alt="" className=" w-[150px] " />
                  Quantity-
                  <Counter />
                </div>
                <h1 className="text-lg font-mono">{item.title}</h1>${item.price}
                <h1
                  className="cursor-pointer"
                  onClick={() => {
                    removeFromCart(item.id)
                    console.log(item.cart)
                  }}
                >
                  <MdDelete className="w-[30px]  h-[30px]" />
                </h1> */}
              </article>
            ))}
          </ul>
          <div className="  hover:border-gray-900 duration-300 flex flex-col justify-evenly  w-full  mx-auto md:mt-[23px] md:flex-row">
            {/* <h1 className="text-2xl font-poppins font-medium ">Cart Totals:</h1>
            <div className="">
              <h3 className="text-lg font-mono font-thin text-gray-500 capitalize">
                No of products : {cartItems.length}
                <h3 className="text-lg font-mono font-thin text-gray-500 capitalize">
                  Sub Total
                </h3>
                <h3 className="text-lg font-mono font-thin text-gray-500 capitalize">
                  Shipping Fee
                </h3>
              </h3>
              <h3 className="text-lg font-mono font-medium">Total : {total}</h3>
            </div> */}
            <div className="md:w-1/2 px-[10px] py-[20px]  lg:mx-[100px]">
              <h1 className="px-[10px] text-[28px] capitalize font-mono">
                cart total
              </h1>
              <h5 className="px-[10px] text-[20px] capitalize text-gray-500 flex justify-between  mt-[25px]">
                subtotal <span>{total}</span>
              </h5>
              <h5 className="px-[10px] text-[20px] capitalize text-gray-500 flex justify-between my-[5px]">
                shipping fee <span>Free</span>
              </h5>
              <h5 className="px-[10px] text-[20px] capitalize text-gray-800 flex justify-between my-[5px]">
                total <span>${total}</span>
              </h5>
              <button className="w-1/2 bg-red-400 hover:bg-red-300 capitalize p-[10px] rounded-lg text-[22px] my-[20px] mx-[10px]">
                proceed to checkout
              </button>
            </div>
            <div className="md:w-1/2 px-[10px] py-[20px]  lg:mx-[100px]">
              <h1 className="px-[10px] text-[18px] ">
                if you have a promo code, enter here
              </h1>
              <span className="px-[10px] flex my-[10px] w-2/3 capitalize ">
                <input
                  type="text"
                  name="promo"
                  id="promo"
                  placeholder="enter promo code "
                  className="py-3 w-2/3 border-2 border-gray-800 px-[8px]"
                />
                <button
                  className="px-[10px] border-2 capitalize w-1/3 border-gray-900 bg-black text-white"
                  type="submit"
                >
                  Submit
                </button>
              </span>
            </div>
          </div>
        </main>
      )}
    </>
  )
}

export default Cart
