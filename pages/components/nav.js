import { AiFillInstagram, AiOutlineBars, AiOutlineClose } from 'react-icons/ai'
import Image from 'next/image'
import { useState } from 'react'
import useMediaQuery from '../hooks/useMediaQuery'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Link = ({ page, selectedPage, setSelectedPage }) => {
    const lowerCasePage = page.toLowerCase();
    return (
      <AnchorLink
        className={`${
          selectedPage === lowerCasePage ? "text-red text-xl font-inter font-bold" : "text-xl font-inter text-deepsea"
        } hover:text-red transition duration-500`}
        href={`#${lowerCasePage}`}
        onClick={() => setSelectedPage(lowerCasePage)}
      >
        {page}
      </AnchorLink>
    );
  };

const HomeNavigation = ({ isTopOfPage:bool, selectedPage, setSelectedPage}) => {
    const [isMenuToggled, setIsMenuToggled] = useState(false);
    const isAboveSmallScreens = useMediaQuery("(min-width: 700px)")

    return (
        <nav className='z-40 w-full py-5 mb-5 px-10 md:px-20 lg:px-40'>
            <div className='flex items-center justify-between mx-auto'>
                <ul className='flex items-center gap-5'>
                    <a href="https://www.instagram.com/andrew_kalinenko/" target="_blank" rel="noreferrer">
                        <AiFillInstagram className='text-3xl text-deepsea' href='#'></AiFillInstagram>
                    </a>
                    <h3 className='text-3xl text-deepsea font-inter'>Elkopasto</h3>
                </ul>

            {/* DESKTOP NAV*/}
            {isAboveSmallScreens ? (
            <ul className='flex items-center gap-10'>
                <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                <Link page="Skills" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                <Link page="Portfolio" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                <Link page="About" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
            </ul>
            ) : (
                <button 
                    className='rounded-full bg-red shadow-lg bg-transparent p-2'
                    onClick={() => setIsMenuToggled(!isMenuToggled)}
                >
                    <AiOutlineBars className='text-xl'/>
                </button>
            )}

            {/* MOBILE MENU POPUP*/}
            {!isAboveSmallScreens && isMenuToggled && (
                <div className='fixed right-0 bottom-0 h-full bg-neutral-200 w-[300px] z-40 shadow-2xl'>
                    {/* CLOSE ICON */}
                    <div className='flex justify-end p-12'>
                        <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                             <AiOutlineClose />
                        </button>
                    </div>

                    {/* MENU ITEMS */}
                    <div className='flex flex-col gap-10 ml-[33%] text-2xl'>
                        <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                        <Link page="Skills" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                        <Link page="Portfolio" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                        <Link page="About" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                    </div>
                </div>
            )}
            </div>
        </nav>
    )
}

export default HomeNavigation;