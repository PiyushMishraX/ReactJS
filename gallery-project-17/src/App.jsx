import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './compoents/Card'

const App = () => {
  const [userData, setUserData] = useState([])
  const [index, setIndex] = useState(1)

  const getData = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=30`)
    setUserData(response.data)
  }

  useEffect(function () {
    getData()
  }, [index])

  let printUserData = (
    <h3 className='text-gray-300 text-xs absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold '>
      Loading....
    </h3>
  )

  if (userData.length > 0) {
    printUserData = userData.map(function (elem, idx) {
      return (
        <div key={idx}>
          <Card elem={elem}/>
        </div>
      )
    })
  }

  return (
    <div className='bg-black h-screen p-4 overflow-auto text-white'>
      {/* <div className='flex h-[94%] flex-wrap gap-4 p-2'> */}
      <div className='flex flex-wrap gap-4 p-2'>
        {printUserData}
      </div>

      {/* <div className='flex gap-6 justify-center items-center'> */}
      {/* <div className=' fixed bottom-0 w-100%  flex gap-6 justify-center items-center'> */}
      {/* <div className=' fixed bottom-0 w-full z-10 flex gap-6 justify-center items-center p-2 bg-black/75'> */}
      <div className=' fixed bottom-0 w-full z-10 flex gap-6 justify-center items-center p-2 bg-black/85'>

        <button
        // opacity of button changes when it is needed i.e. index>1
          style={{opacity:index ==1?0.5 : 1}}
          // disabled= 'true'
          className='bg-amber-400 text-black rounded px-4 py-2 font-semibold text-sm cursor-pointer active:scale-95'
          onClick={() => {
            if (index > 1) {
              setIndex(index - 1)
              setUserData([])
            }
          }}
        >
          Prev
        </button>

        <h4>Page {index}</h4>

        <button
          className='bg-amber-400 text-black rounded px-4 py-2 font-semibold text-sm cursor-pointer active:scale-95'
          onClick={() => {
            setIndex(index + 1)
            setUserData([])
          }}
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default App