

import React from 'react'
import heroImg from "../../assets/images/photo.png";
import CountUp from 'react-countup';


const Hero = () => {

  return (
    <section className='pt-0' id='about'>
      <div className='container pt-14'>
         <div className='md:flex items-center justify-between sm:flex-col md:flex-row'>
            {/*=========== hero left ============*/}
            <div className='w-full md:basis-1/2'>
                <h5 
                  data-aos="fade-right"
                  data-aos-duration="1500"
                  className='text-headingColor font-[600] text-[16px]'>
                  Hello Welcome
                  </h5>
                <h1 data-aos="fade-up"
                    data-aos-duration="1500"
                    className='text-headingColor font-[800] text-[1.8rem] sm:text-[40px]
                    leading-[35px] sm:leading-[46px] mt-5'>I'm Ansh Srivastava <br/>Full-Stack Developer
                </h1>

                <div data-aos="fade-up"
                     data-aos-duration="1800"
                     data-aos-delay="200"
                     className='flex items-center gap-6 mt-7'>
                     <a href="#contact">
                        <button className='bg-primaryColor text-white font-[500] flex items-center gap-2
                        hover:bg-smalltextColor ease-in duration-300 py-2 px-4 rounded-[10px]'><i class="ri-mail-line"></i>Hire me</button>
                     </a>
                     <a href="https://drive.google.com/file/d/1I2TbHCRY_cDprsWyV9kMcjQ_6AVabv-p/view?usp=sharing" className='text-smalltextColor font-[600] border-b border-solid
                     border-smalltextColor'>See Resume</a>
                </div>
                <p data-aos="fade-left"
                    data-aos-duration="1500" 
                    className='flex gap-2 text-headingColor mt-4 font-[500] text-[15px] leading-7 sm:pl-14 sm:pr-10'>
                    <span>
                    <i class='ri-apps-2-line'></i>
                    </span>
                    A Software Engineer focused on building the frontend and complex backend systems of web apps that leads to the success of the overall product
                </p>
                <div className='flex items-center gap-9 mt-14'>
                  <span className='text-smalltextColor text-[15px] font-[600]'>Follow me</span>
                  <button onClick={() => window.open("https://www.linkedin.com/in/ansh-srivastava-25b2751a6/")} className='text-smalltextColor text-[18px] font-[600]'>
                    <i class="ri-linkedin-fill"></i>
                  </button>
                  <button onClick={() => window.open("https://github.com/ansh-srivastava")} className='text-smalltextColor text-[18px] font-[600]'>
                    <i class="ri-github-fill"></i>
                  </button>
                  <button onClick={() => window.open("https://www.instagram.com/ansh.srivastava__/")} className='text-smalltextColor text-[18px] font-[600]'>
                    <i class="ri-instagram-fill"></i>
                  </button>
                </div>

                {/* <div className='flex items-center gap-9 mt-14'>
                    <span className='text-smalltextColor text-[15px] font-[600]'>Follow me</span>
                    <span><a href="https://www.linkedin.com/in/ansh-srivastava-25b2751a6/" className='text-smalltextColor text-[18px] font-[600]'></a>
                      <i class="ri-linkedin-fill"></i>
                    </span>
                    <span><a href="https://github.com/ansh-srivastava" className='text-smalltextColor text-[18px] font-[600]'></a>
                      <i class="ri-github-fill"></i>
                    </span>
                    <span><a href="https://www.instagram.com/ansh.srivastava__/" className='text-smalltextColor text-[18px] font-[600]'></a>
                      <i class="ri-instagram-fill"></i>
                    </span>
                </div>     */}
            </div>
            {/*=========== hero left ends =============*/}
            {/*=========== hero img ===========*/}
            <div className='basis=1/3 mt-10 sm:mt-0'>
                <figure className='flex items-center justify-center'>
                    <img src={heroImg} alt="AnshSrivastava" />
                </figure>
            </div>
            {/*=========== hero img ends =============*/}
            {/*=========== hero right =============*/}
            <div className='md:basis-1/5 flex justify-between text-center mt-10 flex-wrap gap-3 md:mt-0
                md:flex-col md:justify-end md:text-end'>
                <div className='mb-10'>
                    <h2 className='text-headingColor font-[700] text-[32px]'>
                        <CountUp start={0} end={6} duration={2} suffix='+'/>
                    </h2>
                    <h4 className='text-headingColor font-[600] text-[18px]'>Months of experience</h4>
                </div>  
                <div className='mb-10'>
                    <h2 className='text-headingColor font-[700] text-[32px]'>
                        <CountUp start={0} end={100} duration={2} suffix='%'/>
                    </h2>
                    <h4 className='text-headingColor font-[600] text-[18px]'>Success Rate</h4>
                </div>  
                <div className='mb-10'>
                    <h2 className='text-headingColor font-[700] text-[32px]'>
                        <CountUp start={0} end={171} duration={2} suffix='+'/>
                    </h2>
                    <h4 className='text-headingColor font-[600] text-[18px]'>Github contributions</h4>
                </div>  
                <div className='mb-10'>
                    <h2 className='text-headingColor font-[700] text-[32px]'>
                        <CountUp start={0} end={20} duration={2} suffix='+'/>
                    </h2>
                    <h4 className='text-headingColor font-[600] text-[18px]'>Projects completed</h4>
                </div>    
            </div>
            {/*=========== hero right ends =============*/}
         </div>
      </div>
    </section>
  );
};

export default Hero
