import { Outlet } from 'react-router-dom'

import NavBar from '../Pages/NavBar'
import TrendingNow from '../Pages/TrendingNow'
import data from '../Pages/data.json'
import ContactUs from '../Pages/ContactUs'

const RootLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <TrendingNow trending={data} />
      <ContactUs />
    </>
  )
}

export default RootLayout
