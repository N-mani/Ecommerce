const ContactUs = () => {
  return (
    <section className="bg-[#191717] max-w-screen-4xl h-[50vh] text-gray-300  w-full">
      <div className="h-[30vh] flex flex-col justify-around items-center  ">
        <h1 className="text-[30px] font-serif font-semibold text-gray-200">
          News Letter
        </h1>
        <div className="flex justify-around w-full md:w-1/3">
          <input
            type="email"
            placeholder="youemail@gmail.com"
            className=" text-black text-[19px] font-semibold p-2"
          />
          <input
            type="text"
            placeholder="subscribe"
            className="capitalize text-black text-[19px] p-2 font-semibold w-1/3"
          />
        </div>
      </div>
      <div className="bg-black h-[20vh] flex  flex-col justify-evenly text-[18px] font-semibold capitalize items-center">
        <ul className="flex justify-around p-2  capitalize md:w-1/3 items-center">
          <li>About</li>
          <li>Store locator</li>
          <li>FAQs</li>
          <li>News</li>
          <li>careers</li>
        </ul>
        <h1 className="capitalize mx-auto  ">contact us</h1>
        <h1 className="capitalize mx-auto   ">
          design & developed by manikanta
        </h1>
      </div>
    </section>
  )
}

export default ContactUs
