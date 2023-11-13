import { useContext, useEffect, useState } from 'react'
import { FaBars, FaShoppingCart, FaWindowClose } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import { ProductContext } from '../Context/ShopContext'
import logo from '../Pages/images/logo1-removebg-preview.png'

import { AnimatePresence, motion } from 'framer-motion'

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { cartItems } = useContext(ProductContext)
  const [randomNum, setRandomNum] = useState(2)
  useEffect(() => {
    setRandomNum(Math.floor(Math.random() * 10))
  }, [randomNum])

  const NavLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? 'bold' : 'normal',
      textDecoration: isActive ? 'none' : 'underline',
      fontSize: isActive ? '20px' : '',
    }
  }

  const menuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        duration: 0.75,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  const mobileNavLinkVars = {
    initial: {
      y: '130vh',
      transition: {
        duration: 0.5,
      },
    },

    open: {
      y: 0,
      transition: {
        duration: 0.75,
      },
    },
  }

  const ulVars = {
    initial: {
      transition: {
        staggerChildren: 0.09,
      },
    },
    open: {
      transition: {
        staggerChildren: 0.09,
      },
    },
  }
  return (
    <>
      <section
        className={`w-full bg-[#131921] flex justify-between p-3 shadow-lg  top-0 fixed md:justify-between md:px-[58px] text-white`}
      >
        <NavLink
          style={NavLinkStyles}
          to="/home"
          className="  font-serif p-2 cursor-pointer w-[70px] h-full"
        >
          <img src={logo} alt="" />
        </NavLink>
        <div className="hidden justify-around  text-[18px] items-center font-semibold font-serif p-2 md:flex ">
          <ul className="flex justify-between ">
            <NavLink
              style={NavLinkStyles}
              to="categories/all"
              className="cursor-pointer px-3"
            >
              Categories
            </NavLink>
            <NavLink
              style={NavLinkStyles}
              to={`categories/products/${randomNum}`}
              className="cursor-pointer px-3"
            >
              Products
            </NavLink>

            <NavLink
              style={NavLinkStyles}
              to="/sign-up"
              className="cursor-pointer  px-3"
            >
              SignUp
            </NavLink>
            <NavLink
              style={NavLinkStyles}
              className="cursor-pointer px-3 "
              to="/"
            >
              Login
            </NavLink>
          </ul>
          <div className=" relative cursor-pointer  mr-5">
            <button>
              <NavLink to="cart">
                <FaShoppingCart />
              </NavLink>
              <div className="absolute top-[-16px] right-[-20px] rounded-[50%] text-[1rem] text-md  bg-red-500 w-[25px]">
                {cartItems.length}
              </div>
            </button>
          </div>
        </div>
        <button
          className="md:hidden  "
          onClick={() => {
            setIsOpen(!isOpen)
          }}
        >
          {isOpen ? <FaWindowClose /> : <FaBars />}
        </button>
        {/* <!------------Mobile Menu-----------> */}
      </section>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate={'animate'}
            exit={'exit'}
            className={`flex w-full h-screen  origin-top fixed top-[85px] left-0 md:hidden bg-gray-200 overflow-hidden`}
          >
            <motion.ul
              variants={ulVars}
              initial={'initial'}
              animate={'animate'}
              className="flex flex-col  h-screen justify-evenly absolute w-full text-2xl py-[50px] pb-[150px] "
            >
              <NavLink
                variants={mobileNavLinkVars}
                initial={'initial'}
                animate={'animate'}
                to="/home/categories/all"
                className="cursor-pointer px-3 hover:scale-125  w-full mt-3 duration-300 text-center font-medium py-2 "
                onClick={() => {
                  setIsOpen(!isOpen)
                }}
              >
                Categories
              </NavLink>
              <NavLink
                variants={mobileNavLinkVars}
                to={`/home/categories/products/${randomNum}`}
                className="cursor-pointer px-3 hover:scale-125  w-full mt-3 duration-300 text-center font-medium py-2"
                onClick={() => {
                  setIsOpen(!isOpen)
                }}
              >
                Products
              </NavLink>
              <NavLink
                variants={mobileNavLinkVars}
                to={`/home/categories/products/${randomNum}`}
                className="cursor-pointer px-3 hover:scale-125  w-full mt-3 duration-300 text-center font-medium py-2"
                onClick={() => {
                  setIsOpen(!isOpen)
                }}
              >
                Skills
              </NavLink>
              <NavLink
                variants={mobileNavLinkVars}
                to={`/home/categories/products/${randomNum}`}
                className="cursor-pointer px-3 hover:scale-125  w-full mt-3 duration-300 text-center font-medium py-2"
                onClick={() => {
                  setIsOpen(!isOpen)
                }}
              >
                Experience
              </NavLink>
              <NavLink
                variants={mobileNavLinkVars}
                to="cart"
                className=" w-full mt-3  hover:scale-125 duration-300 text-center font-medium py-2 "
                onClick={() => {
                  setIsOpen(!isOpen)
                }}
              >
                Cart
              </NavLink>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default NavBar
