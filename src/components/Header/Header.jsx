
import React from 'react'

const Header = () => {
  return <header className='w-full h-[80px] leading-[80px] flex items-center'>
    <div className='container'>
      <div className='flex items-center justify-between '>
      {/*========= logo starts ===========*/}
        <div className='flex items-center gap-[10px]'>
          <span className='w-[35px] h-[35px] bg-primaryColor text-white text-[18px] font-[500] rounded-full flex items-center justify-center'>
          A
          </span>
          <div className='leading-[20px]'>
            <h2 className='text-xl text-smalltextColor font-[700]'>Ansh</h2>
              <p className='text-smalltextColor text-[14px] font-[500]'>Personal</p>
         </div>
       </div>
       {/*=========== logo ends ==========*/}
       {/*=========== menu starts ==========*/}
       <div className='menu'>
        <ul className='flex items-center gap-10'>
         <li>
            <a className='text-smalltextColor font-[600]' href="#about">About</a>
         </li>
         <li>
            <a className='text-smalltextColor font-[600]' href="#service">Service</a>
         </li>
         <li>
            <a className='text-smalltextColor font-[600]' href="#portfolio">Portfolio</a>
         </li>
         <li>
            <a className='text-smalltextColor font-[600]' href="#contact">Contact</a>
         </li>
        </ul>
       </div>
       {/*=========== menu ends ===========*/}
       {/*=========== menu right ===========*/}
       <div className='flex items-center gap-[4px]'>
         <button className='flex items-center gap-2 text-smalltextColor font-[600] border border-solid
         border-smalltextColor py-2 px-4 rounded-[8px] max-h-[40px] hover:bg-smalltextColor hover:text-white hover:font-[500]
         ease-in duration-300'>
            <i class="ri-send-plane-line"></i>Let's Talk
         </button>
         <span className='text-2xl text-smalltextColor md:hidden cursor-pointer'>
            <i class="ri-menu-line"></i>
         </span>
       </div>
       {/*=========== menu ends ===========*/}
     </div>
    </div>
  </header>
};

export default Header;