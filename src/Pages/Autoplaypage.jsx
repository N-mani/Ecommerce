// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import data from './data.json'

// import required modules
import { Autoplay } from 'swiper/modules'

export default function Autoplaypage() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay]}
        className="mySwiper w-[100%] h-screen "
      >
        {data.map((product) => (
          <div key={product.id}>
            <SwiperSlide className="text-center text-[18px] bg-#fff my-auto flex flex-col lg:flex-row justify-around items-center ">
              <div className="flex flex-col justify-around bg-red-600 h-1/2 items-start px-[8px]">
                <h1 className="text-[22px] font-semibold">{product.title}</h1>
                <p className="text-[20px] font-medium">{product.description}</p>
                <button className="border-2 rounded-lg w-2/3 mx-auto p-2 bg-blue-200">
                  Buy Now
                </button>
              </div>
              <img
                src={product.images[0]}
                className="w-[300px] bg-red-300 md:w-[500px]"
              />
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </>
  )
}
