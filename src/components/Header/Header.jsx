
import React,{useRef,useEffect} from 'react';

const Header = () => {

  const headerRef = useRef(null);
  const menuRef = useRef(null)

  const stickeyHeaderFunc = () => {
    window.addEventListener("scroll" , () => {
      if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
        headerRef.current.classList.add("stickey__header");
      }else{
        headerRef.current.classList.remove("stickey__header");
      }
    });
  };

  useEffect(()=>{
    stickeyHeaderFunc();

    return window.removeEventListener("scroll", stickeyHeaderFunc);
  },[]);

  const handleClick = e => {
    e.preventDefault();

    const targetAttr = e.target.getAttribute("href");
    const targetElement = document.querySelector(targetAttr);{/* on time 1:44:00 */}

    if (targetElement) {
      const location = targetElement.offsetTop;

    window.scrollTo({
      top:location - 80,
      left:0,
    });
   }
  };

  const toggleMenu = ()=> menuRef.current.classList.toggle("show__menu");

  return (<header ref={headerRef} className='w-full h-[80px] leading-[80px] flex items-center '>
    <div className='container'>
      <div className='flex items-center justify-between '>
      {/*========= logo starts ===========*/}
        <div className='flex items-center gap-[10px]'>
          <span className='w-[35px] h-[35px] bg-primaryColor text-white text-[18px] font-[500] rounded-full flex items-center justify-center'>
          As
          </span>
          <div className='leading-[20px]'>
            <h2 className='text-xl text-smalltextColor font-[700]'>Ansh</h2>
              <p className='text-smalltextColor text-[14px] font-[500]'>Srivastava</p>
         </div>
       </div>
       {/*=========== logo ends ==========*/}
       {/*=========== menu starts ==========*/}
       <div className='menu' ref={menuRef} onClick={toggleMenu}>
        <ul className='flex items-center gap-10'>
         <li>
            <a onClick={handleClick} className='text-smalltextColor font-[600]' href="#about">About</a>
         </li>
         <li>
            <a onClick={handleClick} className='text-smalltextColor font-[600]' href="#services">Core-Competance</a>
         </li>
         <li>
            <a onClick={handleClick} className='text-smalltextColor font-[600]' href="#portfolio">Projects</a>
         </li>
         <li>
            <a onClick={handleClick} className='text-smalltextColor font-[600]' href="#contact">Contact</a>
         </li>
        </ul>
       </div>
       {/*=========== menu ends ===========*/}
       {/*=========== menu right ===========*/}
       <div className='flex items-center gap-[4px]'>
         <button onClick={handleClick} href="#contact" className='flex items-center gap-2 text-smalltextColor font-[600] border border-solid
         border-smalltextColor py-2 px-4 rounded-[8px] max-h-[40px] hover:bg-smalltextColor hover:text-white hover:font-[500]
         ease-in duration-300'>
            <i class="ri-send-plane-line"></i>Let's Talk
         </button>
         <span onClick={toggleMenu} className='text-2xl text-smalltextColor md:hidden cursor-pointer'>
            <i class="ri-menu-line"></i>
         </span>
       </div>
       {/*=========== menu ends ===========*/}
     </div>
    </div>
  </header>
  );
};

export default Header;
