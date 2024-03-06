
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.3126738139367!2d77.4226673757566!3d28.620389575671442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cee355be0859b%3A0x2438610900dfa576!2sGalaxy%20North%20Ave%202%2C%20Gaur%20City%202%2C%20Ghaziabad%2C%20Chipyana%20Khurd%20Urf%20Tigri%2C%20Uttar%20Pradesh%20201009!5e0!3m2!1sen!2sin!4v1709746764111!5m2!1sen!2sin" 
                className="border-0 w-full h-full"
                allowFullScreen="" 
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade">
            </iframe>
            </div>
          <div className='w-full mt-8 md:mt-0 md:w-1/2 sm:h-[450px] lg:flex items-center bg-indigo-100'></div>
        </div>
      </div>
  </section>
}

export default Contact
