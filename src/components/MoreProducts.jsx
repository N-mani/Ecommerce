import { useEffect, useState } from 'react'
import data from '../Pages/data.json'
import { Link } from 'react-router-dom'
import { FaArrowRightLong } from 'react-icons/fa6'

const MoreProducts = () => {
  const [slideIndex, setSlideIndex] = useState(0)
  useEffect(() => {
    setTimeout(() => {
      setSlideIndex(Math.floor(Math.random() * 30))
    }, 5000)
  }, [])

  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]
  const date = new Date()

  return (
    <div className="mt-[80px] p-5  h-screen md:h-[700px]">
      <h1 className="capitalize text-center text-[32px] font-medium">
        Exclusive Offers on products
      </h1>
      <h1 className="capitalize text-center text-[28px] font-bold">
        {months[date.getMonth() - 1]} 1st-{months[date.getMonth()]}1st
      </h1>
      <div className="text-start text-[18px] bg-#fff my-auto flex flex-col md:flex-row justify-evenly items-center h-screen  md:h-[700px] ">
        <div className="flex flex-col justify-around  h-1/2 items-start px-[8px] w-[400px]">
          <h1 className="text-[22px] font-semibold text-gray-500">
            {data[slideIndex].title}
          </h1>
          <p className="text-[24px] font-medium leading-[48px] tracking-wide">
            {data[slideIndex].description}
          </p>
          <h1 className=" text-5xl font-medium capitalize my-[28px]">
            {data[slideIndex].discountPercentage.toFixed(0)}% off
          </h1>
          <Link
            to={`/home/categories/products/${data[slideIndex].id - 1}`}
            className="border-2 rounded-lg w-2/3  p-2 bg-blue-200 text-center flex items-center justify-evenly font-medium text-[22px]"
          >
            Buy Now <FaArrowRightLong size={30} />
          </Link>
        </div>
        <img
          src={data[slideIndex].images[0]}
          className="w-[300px] bg-red-300 md:w-[500px] "
        />
      </div>
    </div>
  )
}

export default MoreProducts
