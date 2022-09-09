import React from 'react'
import '../../index.css'
import '../../App.css'
import { FaPlaneDeparture, FaWhatsapp } from 'react-icons/fa'

const Parceria = () => {
  return (
    <div className='container-relocation'>
      <div>
      <h2 className='sm:text-4xl md:text-5xl text-violet-800 font-bold mt-6' style={{fontFamily:'Poppins'}}>Parcerias</h2>
      </div>
      <div>
      <p className='sm:block md:hidden mt-6 font-medium text-normal text-gray-600'>Você tem interesse em fazer parceria? toque no botão abaixo</p>
        <p className='sm:hidden md:block mt-6 font-medium text-normal text-gray-600'>Você tem interesse em fazer parceria? clique no botão abaixo</p>
      </div>
      <div style={{textAlign:'-webkit-center'}} className='mt-24'>
        <FaPlaneDeparture color='purple' size={70} />
      </div>
      <div className='mt-6' style={{textAlign:'-webkit-center'}}>
        <CustomLink href="https://api.whatsapp.com/send?phone=351913257021&text=Ol%C3%A1,%20estou%20vindo%20atrav%C3%A9s%20do%20site%20da%20Facility%204u,%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es!">
                  <button className='bg-violet-700 rounded-xl text-white flex items-center p-4 gap-x-2 font-medium'>
            <FaWhatsapp /> <p>Quero embarcar nessa</p>
        </button>
        </CustomLink>

      </div>
    </div>
  )
}

export default Parceria;


function CustomLink({ href, children, ...props }) {
  const path = window.location.pathname
  return (
      <li className={path === href ? 'active' : ''}>
          <a href={href} {...props}>
              {children}
          </a>
      </li>
  )
}