import { useEffect, useState } from 'react'
import axios from 'axios'

import { Link, useNavigate, useParams } from 'react-router-dom'
import * as icon from 'react-icons/fa'
import Rating from '../components/Rating'

const Categories = () => {
  const [data, setData] = useState([])
  const [items, setItems] = useState([])
  const [searchItem, setSearchItem] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [priceRanges, setPriceRanges] = useState()

  const params = useParams()
  const categoryName = params.categoryName
  console.log(categoryName)
  console.log('data rating', data[0])

  useEffect(() => {
    axios.get('https://dummyjson.com/products').then((res) => {
      console.log(res.data.products)
      setData(res.data.products)
      setItems(res.data.products)
    })
    if (categoryName) {
      const newItems = items.filter((item) => item.category === categoryName)
      console.log('new items from useEffect', newItems)
      setData(newItems)
    }
  }, [])

  const filterItems = (category) => {
    setSelectedCategory(category)
    if (category === 'all') {
      setData(items)
      return
    }

    const newItems = items.filter((item) => item.category === category)
    setData(newItems)
  }

  const navigate = useNavigate()

  const categories = ['all', ...new Set(items.map((item) => item.category))]

  const priceRange = [
    {
      min: 0,
      max: 100,
    },
    {
      min: 100,
      max: 500,
    },
    {
      min: 500,
      max: 1000,
    },
    {
      min: 1000,
      max: 1500,
    },
    {
      min: 1500,
      max: 2000,
    },
  ]

  const filterPrice = (price) => {
    setPriceRanges(price)
    const newItems = items.filter(
      (item) => item.price < price.max && item.price > price.min
    )
    console.log(price.min, price.max, newItems)

    setData(newItems)
  }

  return (
    <>
      <main className=" w-full  mt-[100px] flex flex-col shrink lg:flex-row px-[8px] py-[18px] gap-3">
        <div className=" mx-auto mb-5  flex flex-col gap-8 items-center  ">
          <div className="flex  justify-start items-center border-2 w-[250px] rounded-lg shadow-lg   ">
            <button
              className="flex gap-2 items-center"
              onClick={() => {
                navigate('/home')
              }}
            >
              <icon.FaArrowLeft className="md:w-[30px] md:h-[30px] w-[25px] h-[25px]" />
            </button>

            <input
              type="text"
              value={searchItem}
              placeholder="Search...."
              onChange={(e) => setSearchItem(e.target.value)}
              className="w-full p-3 "
            />
            {<icon.FaSearch className=" mr-2 w-10" />}
          </div>
          <h1 className="text-2xl font-semibold text-start w-2/3 px-3">
            Category
          </h1>

          <ul className="flex flex-wrap px-3 justify-start   w-2/3 mx-auto lg:flex-col">
            {categories.map((item, index) => {
              return (
                <Link
                  to={`/home/categories/${item}`}
                  key={index}
                  className=" mt-2 mb-2   duration-300 py-1 font-bold  hover:text-slate-500 capitalize text-[15px] md:text-[18px] w-[200px]  "
                  onClick={() => filterItems(item)}
                >
                  <label htmlFor={item}>
                    <input
                      type="radio"
                      name={item}
                      checked={item === selectedCategory}
                      onClick={() => filterItems(item)}
                    />
                  </label>
                  <span className="mx-1 ">{item}</span>
                </Link>
              )
            })}
          </ul>

          <h1 className="text-2xl font-semibold text-start w-2/3 px-3">
            Price
          </h1>
          <ul className="flex flex-wrap px-3 justify-start   w-2/3 mx-auto lg:flex-col">
            {priceRange.map((item, index) => {
              return (
                <Link
                  to={`/home/categories/${categoryName}/${item.min}`}
                  key={index.min}
                  className=" mt-2 mb-2   duration-300 py-1 font-bold  hover:text-slate-500 capitalize text-[15px] md:text-[18px] w-[200px]  "
                  onClick={() => filterPrice(item)}
                >
                  <label htmlFor={item.min}>
                    <input
                      type="radio"
                      name={item.min}
                      checked={item === priceRanges}
                      onClick={() => filterPrice(item)}
                    />
                  </label>
                  <span className="mx-1 ">
                    ${item.min}-${item.max}
                  </span>
                </Link>
              )
            })}
          </ul>
        </div>

        <ul className="grid grid-cols-1 gap-16 w-2xl mx-auto md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4  p-5  ">
          {data
            .filter((val) => {
              return searchItem === ''
                ? val
                : val.title.toLowerCase().includes(searchItem.toLowerCase())
            })
            .map((item) => (
              <div
                key={item.id}
                className="w-[250px] h-[300px] border-2 border-gray-300 hover:border-gray-500  duration-200  p-5 flex flex-col justify-around items-center mx-auto lg:w-[290px] lg:h-[350px]"
              >
                <Link
                  to={`/home/categories/products/${item.id - 1}`}
                  className="w-2/3  flex justify-center flex-grow-1  object-fit "
                >
                  <img
                    src={item.images[0]}
                    alt=""
                    className="m-1 p-1   hover:scale-110 duration-500 object-fit  "
                  />
                </Link>
                <h1 className="text-[15px] font-bold m-1 p-1 flex-grow-1 lg:text-[18px] text-center">
                  {item.title}
                </h1>
                <span className="flex items-center text-[15px] font-bold m-1 p-1 flex-grow-1 lg:text-[18px] text-center">
                  <label htmlFor="rating" style={{ paddingRight: 10 }}>
                    {' '}
                    Rating:
                  </label>
                  <h1>{item.rating.toFixed(1)}</h1>
                  <Rating rating={item.rating} style={{ cursor: 'pointer' }} />
                </span>
                <h3 className="m-1 p-1 text-[15px] font-semibold flex-grow-1 lg:text-[17px] text-blue-600">
                  ${item.price}
                </h3>
              </div>
            ))}
        </ul>
      </main>
    </>
  )
}

export default Categories
