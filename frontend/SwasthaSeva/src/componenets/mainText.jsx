import React from 'react'

export default function MainText(props) {
  return (
    <div className='text-black w-[600px] text-[20px]  font-serif font-medium'>
        {props.children}
    </div>
  )
}
