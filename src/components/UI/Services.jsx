import React from 'react'
import frontendImg from '../../assets/images/front-end.png'
import uiImg from '../../assets/images/design.png'
import backendImg from '../../assets/images/backend.png'
import appsImg from '../../assets/images/apps.png'

const Services = () => {
  return (
    <section id="services">
        <div className='container lg:pt-5'>
            <div className='text-center'>
                <h2 className='text-headingColor font-[800] text-[2.4rem] mb-5'>What describe me the Best</h2>
                <p className='lg:max-w-[600px] lg:mx-auto text-headingColor font-[500] text-[16px] leading-7'>
                As a versatile developer, I excel in crafting captivating user interfaces as a front-end developer, 
                architecting robust systems as a backend developer, and seamlessly integrating both worlds as a full-stack developer. 
                Leveraging my expertise in AI/ML algorithms, I also pioneer intelligent solutions that drive transformative outcomes across 
                diverse industries.
                </p>
            </div>
            <div className='flex flex-col justify-center sm:py-12'>
                <div className='w-full py-3 px-2 sm:max-w-xl sm:mx-auto sm:px-0'>
                    <div className='relative text-grey-700 antialised text-sm font-semibold'>
                    {/*============= Vertical line running through the middle =============== */}
                    <div className='hidden absolute w-1 sm:block bg-indigo-300 h-full left-1/2 transform-translate-x-1/2'></div>
                    {/*============= left card =============== */}
                    <div className='mt-6 sm:mt-0 sm:mb-12'>
                        <div className='flex items-center flex-col sm:flex-row'>

                        <div className='flex justify-start w-full mx-auto items-center'>
                            <div className='w-full sm:w-1/2 sm:pr-8'>
                                <div data-aos="fade-right" data-aos-duration='1200' className='bg-white p-4 rounded shadow group
                                 hover:bg-primaryColor cursor-pointer ease-in duration-150'>
                                    <h3 className='text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] 
                                    text-xl'>Frontend Developer</h3>
                                    <p className='text-[15px] text-smalltextColor group-hover:text-white 
                                    group-hover:font-[500] leading-7'>As I am a front-end developer, I blend creativity and functionality to craft immersive user experiences, 
                                    focusing on responsive design.</p>
                                 </div>
                            </div>
                        </div>

                        <div className='rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 
                            transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center'>
                            <figure>
                                <img src={frontendImg} alt=""/>
                            </figure>
                        </div>

                        </div>
                    </div>
                    {/*============= right card ============== */}
                    <div className='mt-6 sm:mt-0 sm:mb-12'>
                      <div className='flex items-center flex-col sm:flex-row'>
                        <div className='flex justify-end w-full mx-auto items-center'>
                            <div className='w-full sm:w-1/2 sm:pl-8'>
                                <div data-aos="fade-left" data-aos-delay='50' data-aos-duration='1300' className='bg-white p-4 rounded shadow group
                                 hover:bg-primaryColor cursor-pointer ease-in duration-150'>
                                    <h3 className='text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] 
                                    text-xl'>Backend Developer</h3>
                                    <p className='text-[15px] text-smalltextColor group-hover:text-white 
                                    group-hover:font-[500] leading-7'>As I am a backend developer, I architect robust systems for efficient web applications, ensuring data integrity and scalability</p>
                                 </div>
                            </div>
                        </div>

                        <div className='rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 
                            transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center'>
                            <figure>
                                <img src={backendImg} alt=""/>
                            </figure>
                        </div>

                        </div>
                    </div>

                    {/*=============== left card =================*/}
                    <div className='mt-6 sm:mt-0 sm:mb-12'>
                        <div className='flex items-center flex-col sm:flex-row'>

                        <div className='flex justify-start w-full mx-auto items-center'>
                            <div className='w-full sm:w-1/2 sm:pr-8'>
                                <div data-aos="fade-right" data-aos-delay='100' data-aos-duration='1400' className='bg-white p-4 rounded shadow group
                                 hover:bg-primaryColor cursor-pointer ease-in duration-150'>
                                    <h3 className='text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] 
                                    text-xl'>Artificial Intelligence Developer</h3>
                                    <p className='text-[15px] text-smalltextColor group-hover:text-white 
                                    group-hover:font-[500] leading-7'>As I am a backend developer, I architect robust systems for efficient web applications, 
                                    ensuring data integrity and scalability.</p>
                                 </div>
                            </div>
                        </div>

                        <div className='rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 
                            transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center'>
                            <figure>
                                <img src={uiImg} alt=""/>
                            </figure>
                        </div>

                        </div>
                    </div>
                    {/*============== right card =================*/}
                    <div className='mt-6 sm:mt-0 sm:mb-12'>
                        <div className='flex items-center flex-col sm:flex-row'>

                        <div className='flex justify-end w-full mx-auto items-center'>
                            <div className='w-full sm:w-1/2 sm:pl-8'>
                                <div data-aos="fade-left" data-aos-delay='150' data-aos-duration='1500' className='bg-white p-4 rounded shadow group
                                 hover:bg-primaryColor cursor-pointer ease-in duration-150'>
                                    <h3 className='text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] 
                                    text-xl'>Full Stack Developer</h3>
                                    <p className='text-[15px] text-smalltextColor group-hover:text-white 
                                    group-hover:font-[500] leading-7'>As I am a full-stack developer, I integrate front-end creativity with back-end functionality, 
                                    delivering holistic digital solutions for diverse needs.</p>
                                 </div>
                            </div>
                        </div>

                        <div className='rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 
                            transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center'>
                            <figure>
                                <img src={appsImg} alt=""/>
                            </figure>
                        </div>

                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services
