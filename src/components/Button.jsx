import React from 'react'

const Button = ({title, id, rightIcon, leftIcon, containerClass}) => {
  return (
    // <div>{title}</div>
    <button id={id} className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full px-7 py-3 text-black ${containerClass}`}>
        {leftIcon}
        <span className='relative inline-flex overflow-hidden font-general text-sm uppercase'>
            {title}
        </span>
        {rightIcon}
    </button>
  )
}

export default Button