import * as fa from 'react-icons/fa'
import { Link } from 'react-router-dom'

const TrendingNow = ({ trending }) => {
  return (
    <section className="p-5  min-w-xl ">
      <div className="flex justify-around items-center ">
        <h1 className="text-[22px] font-semibold font-serif">Trending Now</h1>
        <div className="flex justify-between w-[45px]">
          <button>
            <fa.FaArrowAltCircleLeft />
          </button>
          <button>
            <fa.FaArrowAltCircleRight />
          </button>
        </div>
      </div>
      <ul className="flex overflow-clip no-scrollbar w-4/5 mx-auto xl:w-3/5 ">
        {trending.map((trendingItem) => (
          <Link
            to={`/home/categories/products/${trendingItem.id - 1}`}
            key={trendingItem.id}
            className="flex flex-col justify-evenly border-2 border-slate-200 p-[45px] m-2  w-[450px] h-[250px] bg-white hover:scale-95 cursor-pointer duration-500"
          >
            <div className="w-[120px] h-[300px] items-center justify-center">
              <img
                src={trendingItem.images[0]}
                alt=""
                className="w-[100px] hover:scale-110 duration-500"
              />
            </div>
            <h2 className="text-2xl font-bold  mx-auto">
              {' '}
              ${trendingItem.price}
            </h2>
            <div className="w-full mx-auto text-[18px] font-semibold text-red-500">
              {trendingItem.discountPercentage.toFixed(0)}% off{' '}
            </div>
          </Link>
        ))}
      </ul>
    </section>
  )
}

export default TrendingNow
