import React from 'react'

const Card = (props) => {

    // console.log(props); 
    // console.log(props.elem); 
    // data is indside props.elem because props is object with each passed value as a property such as elem and elem has the data

  return (
    <div>
        <a href={props.elem.url} target='_blank' rel="noreferrer">
            <div className='h-50 w-55 overflow-hidden rounded-xl'>
              <img className='h-full w-full object-cover' src={props.elem.download_url} alt={props.elem.author} />
            </div>
            <h2 className='font-bold text-lg'>{props.elem.author}</h2>
          </a>
    </div>
  )
}

export default Card