import { Link } from 'react-router-dom'

import productsData from './data.json'
import Rating from '../components/Rating'

const ProudProducts = () => {
  return (
    <>
      <main className="w-full flex flex-col shrink mt-[100px] ">
        <h1 className="text-[22px] mt-[20px] mx-auto mb-[12px] font-semibold max-w-lg">
          <span className="text-[24px] font-bold bg-gradient-to-r from-green-600 to-black text-transparent bg-clip-text">
            The latest.
          </span>
          Take a look at what’s new, right now.
        </h1>
        <ul className=" grid grid-cols-1 gap-5 w-2xl mx-auto md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4  p-5  ">
          {productsData.slice(8, 16).map((item) => (
            <Link
              to={`/home/categories/products/${item.id - 1}`}
              key={item.id}
              className="w-[250px] h-[300px] border-2 border-gray-300 hover:border-gray-500 cursor-pointer duration-200  p-5 flex flex-col justify-around items-center mx-auto lg:w-[290px] lg:h-[350px]"
            >
              <div className="w-1/2 h-1/2 flex justify-center items-center flex-grow-1  object-fit ">
                <img
                  src={item.images[0]}
                  alt=""
                  className="m-1 p-1   hover:scale-110 duration-500 object-fit  "
                />
              </div>
              <h1 className="font-semibold text-[16px] md:text-[18px]">
                {item.title}
              </h1>
              <span className="flex">
                <Rating rating={item.rating} />
              </span>
              <h4 className="font-bold md:text-[18px]">${item.price}</h4>
            </Link>
          ))}
        </ul>
      </main>
    </>
  )
}

export default ProudProducts
