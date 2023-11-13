import { Swiper, SwiperSlide } from 'swiper/react'
import { Parallax, Pagination, Navigation } from 'swiper/modules'

import data from './data.json'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/bundle'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { Link } from 'react-router-dom'

const TestPage = () => {
  return (
    <Swiper
      style={{
        '--swiper-navigation-color': '#fff',
        '--swiper-pagination-color': '#fff',
      }}
      speed={600}
      parallax={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Parallax, Pagination, Navigation]}
      className="mySwiper"
    >
      <section className="p-5  min-w-xl ">
        <div className="flex justify-around items-center ">
          <h1 className="text-[22px] font-semibold font-serif">Trending Now</h1>
        </div>
        <ul className="flex overflow-clip no-scrollbar w-4/5 mx-auto xl:w-3/5 ">
          {data.map((trendingItem, index) => (
            <SwiperSlide key={index}>
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
            </SwiperSlide>
          ))}
        </ul>
      </section>
      <ul className="flex overflow-clip no-scrollbar w-4/5 mx-auto xl:w-3/5 ">
        {data.map((trendingItem, index) => (
          <SwiperSlide key={index}>
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
          </SwiperSlide>
        ))}
      </ul>
    </Swiper>
  )
}

export default TestPage
