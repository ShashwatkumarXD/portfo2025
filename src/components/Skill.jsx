import React from 'react'
import mongo from '/public/mongo.svg'

function Skill() {
    return (
        <div className='h-40 bg-gray-200 flex justify-center items-center'>
            {/* <p>JavaScript , HTML</p> */}
            <ul className='flex flex-row justify-center items-center gap-44'>
                <li>
                    <a>
                        <img src={mongo} className='w-44 h-44 filter grayscale-[90%] opacity-60' />
                    </a>
                </li>
                <li>
                    <a>
                        <img src='/react.svg' className='w-16 h-16 filter grayscale-[90%] opacity-90'  />
                    </a>
                </li>
                <li>
                    <a>
                        <img src='/wordpress.svg' className='w-44 h-44 filter grayscale-[90%] opacity-60'/>
                    </a>
                </li>
                <li>
                    <a>
                        <img src='/node.svg' className='w-44 h-44 filter grayscale-[90%] opacity-60' />
                    </a>
                </li>
            </ul>

        </div>
    )
}

export default Skill