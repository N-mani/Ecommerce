import { useState } from 'react'

const Counter = () => {
  const [value, setValue] = useState(1)
  const decrement = () => {
    value < 2 ? setValue(1) : setValue(value - 1)
    return value
  }

  const increment = () => {
    setValue(value + 1)
  }
  return (
    <div className="flex justify-around  border-2 border-gray-800">
      <div className="p-3 cursor-pointer " onClick={() => decrement()}>
        -
      </div>
      <div className="p-3 border-l-2 border-gray-800 ">{value}</div>
      <div
        className="p-3  border-l-2 cursor-pointer border-gray-800"
        onClick={() => increment()}
      >
        +
      </div>
    </div>
  )
}

export default Counter
