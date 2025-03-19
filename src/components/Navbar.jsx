import React, { useEffect, useRef, useState } from 'react'
import { TiLocationArrow } from 'react-icons/ti';
import Button from "./Button";
import { useWindowScroll } from 'react-use';
import gsap from 'gsap';

const navItems = ['Home', 'About Me', 'Services', 'Blog', 'Contact'];

const Navbar = () => {

    const [lastScrollY, setLastScrollY] = useState(0);
    const [isNavVisible, setIsNavVisible] = useState(true);

    const navContainerRef = useRef(null);
    // const audioElementRef = useRef(null);
    const { y: currentScrollY } = useWindowScroll();

    useEffect(() => {
        if (currentScrollY === 0) {
            setIsNavVisible(true);
            navContainerRef.current.classList.remove('floating-nav');
        } else if (currentScrollY > lastScrollY) {
            setIsNavVisible(false);
            navContainerRef.current.classList.add('floating-nav');
        } else if (currentScrollY < lastScrollY) {
            setIsNavVisible(true);
            navContainerRef.current.classList.add('floating-nav');
        }

        setLastScrollY(currentScrollY);
    }, [currentScrollY, lastScrollY])

    useEffect(() => {
        gsap.to(navContainerRef.current, {
            y: isNavVisible ? 0 : -100,
            opacity: isNavVisible ? 1 : 0,
            duration: 0.2,
        })
    }, [isNavVisible])

    return (
        <div ref={navContainerRef} className='fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6'>
            <header className='absolute top-1/2 w-full -translate-y-1/2'>
                <nav className='flex size-full items-center justify-between p-4'>
                    {/* --------------------------------------------------------- */}
                    <div className='flex items-center gap-7'>
                        <img src='/public/title-image.svg' alt='logo' className='w-16' />
                    </div>
                    {/* ------------------------------------------------------------------- */}
                    <div className="flex h-full items-center gap-20">

                        {/* // navbar component to be used. */}
                        <div className="hidden md:block">
                            {navItems.map((item) => (
                                <a key={item} href={`#${item.toLowerCase()}`} className="relative ms-10 font-general text-xs uppercase text-black cursor-pointer 
                                after:absolute after:bottom-[-0.125rem] after:left-0 after:h-[2px] after:w-full 
                                after:origin-right after:scale-x-0 after:bg-neutral-800 
                                after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65,0.05,0.36,1)] 
                                hover:after:origin-left hover:after:scale-x-100 dark:after:bg-black">
                                    {item}
                                </a>
                            ))}
                        </div>
                            {/* --------------------------------------------------------- */}
                        <div className=''>
                            <Button
                                    id='product-button'
                                    title="Let's Chat"
                                    rightIcon={<TiLocationArrow />}
                                    containerClass="bg-blue-500 md:flex hidden items-center justify-center gap-1 text-white hover:bg-blue-400" />
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Navbar