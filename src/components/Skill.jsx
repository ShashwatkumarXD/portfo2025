import React from 'react'

function Skill() {
    return (
        <div className='h-40 bg-gray-200 flex justify-center items-center'>
            {/* <p>JavaScript , HTML</p> */}
            <ul className='flex flex-row justify-center items-center gap-52'>
                <li>
                    <a>
                        <img src='/public/mongo.svg' className='w-56 h-56 filter grayscale-[90%] opacity-60' />
                    </a>
                </li>
                <li>
                    <a>
                        <img src='/public/react.svg' className='w-20 h-20 filter grayscale-[90%] opacity-90'  />
                    </a>
                </li>
                <li>
                    <a>
                        <img src='/public/wordpress.svg' className='w-56 h-56 filter grayscale-[90%] opacity-60'/>
                    </a>
                </li>
                <li>
                    <a>
                        <img src='/public/node.svg' className='w-56 h-56 filter grayscale-[90%] opacity-60' />
                    </a>
                </li>
            </ul>

        </div>
    )
}

export default Skill