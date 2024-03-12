
import React from 'react'

const Contact = () => {
  return <section id="contact" className='pb-16'>
      <div className='container'>
       <h2 className='text-headingColor font-[700] text-[2.5rem] mb-8'>
           Get in touch
        </h2>
        <div className='md:flex justify-between items-center'>
            <div className='w-full md:w-1/2 h-[300px] sm:h-[450px]'>
            <iframe 
                title="google-maps" 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7004.704716301613!2d77.42013014307572!3d28.619199820730113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cee4abb9de49b%3A0x287a032bd7ff51f1!2sGaur%20City%202%2C%20Ghaziabad%2C%20Uttar%20Pradesh%20201009!5e0!3m2!1sen!2sin!4v1710259202713!5m2!1sen!2sin"
                //src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.3126738139367!2d77.4226673757566!3d28.620389575671442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cee355be0859b%3A0x2438610900dfa576!2sGalaxy%20North%20Ave%202%2C%20Gaur%20City%202%2C%20Ghaziabad%2C%20Chipyana%20Khurd%20Urf%20Tigri%2C%20Uttar%20Pradesh%20201009!5e0!3m2!1sen!2sin!4v1709746764111!5m2!1sen!2sin" 
                className="border-0 w-full h-full"
                allowFullScreen="" 
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade">
            </iframe>
            </div>
          <div className='w-full mt-8 md:mt-0 md:w-1/2 sm:h-[450px] lg:flex items-center bg-indigo-100 px-4 lg:px-8 py-8'>
            <form className='w-full'>
                <div className='mb-5'>
                    <input 
                        type="text"
                        placeholder='Enter your name'
                        className='w-full p-3 focus:outline-none rounded-[5px]'></input>
                </div>
                <div className='mb-5'>
                    <input 
                        type="email"
                        placeholder='Enter your email'
                        className='w-full p-3 focus:outline-none rounded-[5px]'></input>
                </div>
                <div className='mb-5'>
                    <input 
                        type="text"
                        placeholder='Subject'
                        className='w-full p-3 focus:outline-none rounded-[5px]'></input>
                </div>
                <div className='mb-5'>
                    <textarea 
                        type="text"
                        rows={3}
                        placeholder='Write your message'
                        className='w-full p-3 focus:outline-none rounded-[5px]'/>
                </div>
                <button className='w-full p-3 focus:outline-none rounded-[5px] bg-smalltextColor text-white
                        hover:bg-headingColor text-center ease-liner duration-150'>
                    Send Message
                </button>
            </form>
          </div>
        </div>
      </div>
  </section>
}

export default Contact
