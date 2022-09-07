import React from 'react'
import './duvidas.css'
import '../../index.css'
import '../../App.css'
import Testimunials from '../../components/Testimunials/Testimunials'

const Duvidas = () => {

  return (
    <div className="duvidas-page">
        <div className="container-relocation">
            <div className="title-duvidas">
                <h1 className='sm:text-4xl md:text-5xl sm:font-bold sm:text-violet-900 sm:mt-12'>
                  Principais dúvidas</h1>
            </div>
            <div className="duvidas-asks sm:mt-12 sm:font-semibold sm:text-2xl sm:text-violet-800 md:text-3xl sm:mb-4">
              <h2>
              Lore ipsum Lore Ipsum
              </h2>
            </div>
            <div className="duvidas-answer  sm:text-justify sm:font-medium sm:text-gray-600">
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
               Urna, tortor tempus. Lorem ipsum dolor sit amet, 
               consectetur adipiscing elit. Urna, tortor tempus. 
               Lorem ipsum dolor sit amet, consectetur  adipiscing 
               elit. Urna, tortor tempus. Lorem ipsum dolor sit amet, 
               consectetur 
              adipiscing elit. Urna, tortor tempus. 
              </p>
            </div>
            <div className="duvidas-asks sm:mt-12 sm:font-semibold sm:text-2xl sm:text-violet-800 md:text-3xl sm:mb-4">
              <h2>
              Lore ipsum Lore Ipsum
              </h2>
            </div>
            <div className="duvidas-answer  sm:text-justify sm:font-medium sm:text-gray-600">
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
               Urna, tortor tempus. Lorem ipsum dolor sit amet, 
               consectetur adipiscing elit. Urna, tortor tempus. 
               Lorem ipsum dolor sit amet, consectetur  adipiscing 
               elit. Urna, tortor tempus. Lorem ipsum dolor sit amet, 
               consectetur 
              adipiscing elit. Urna, tortor tempus. 
              </p>
            </div>
            <div className="duvidas-asks sm:mt-12 sm:font-semibold sm:text-2xl sm:text-violet-800 md:text-3xl sm:mb-4">
              <h2>
              Lore ipsum Lore Ipsum
              </h2>
            </div>
            <div className="duvidas-answer  sm:text-justify sm:font-medium sm:text-gray-600">
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
               Urna, tortor tempus. Lorem ipsum dolor sit amet, 
               consectetur adipiscing elit. Urna, tortor tempus. 
               Lorem ipsum dolor sit amet, consectetur  adipiscing 
               elit. Urna, tortor tempus. Lorem ipsum dolor sit amet, 
               consectetur 
              adipiscing elit. Urna, tortor tempus. 
              </p>
            </div>
            <div className="duvidas-asks sm:mt-12 sm:font-semibold sm:text-2xl sm:text-violet-800 md:text-3xl sm:mb-4">
              <h2>
              Lore ipsum Lore Ipsum
              </h2>
            </div>
            <div className=" sm:text-justify sm:font-medium sm:text-gray-600">
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
               Urna, tortor tempus. Lorem ipsum dolor sit amet, 
               consectetur adipiscing elit. Urna, tortor tempus. 
               Lorem ipsum dolor sit amet, consectetur  adipiscing 
               elit. Urna, tortor tempus. Lorem ipsum dolor sit amet, 
               consectetur 
              adipiscing elit. Urna, tortor tempus. 
              </p>
            </div>
            <div className="duvidas-asks sm:mt-12 sm:font-semibold sm:text-2xl sm:text-violet-800 md:text-3xl sm:mb-4">
              <h2>
              Lore ipsum Lore Ipsum
              </h2>
            </div>
            <div className="duvidas-answer  sm:text-justify sm:font-medium sm:text-gray-600">
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
               Urna, tortor tempus. Lorem ipsum dolor sit amet, 
               consectetur adipiscing elit. Urna, tortor tempus. 
               Lorem ipsum dolor sit amet, consectetur  adipiscing 
               elit. Urna, tortor tempus. Lorem ipsum dolor sit amet, 
               consectetur 
              adipiscing elit. Urna, tortor tempus. 
              </p>
            </div>
            <div className="duvidas-asks sm:mt-12 sm:font-semibold sm:text-2xl sm:text-violet-800 md:text-3xl sm:mb-4">
              <h2>
              Lore ipsum Lore Ipsum
              </h2>
            </div>
            <div className="duvidas-answer  sm:text-justify sm:font-medium sm:text-gray-600">
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
               Urna, tortor tempus. Lorem ipsum dolor sit amet, 
               consectetur adipiscing elit. Urna, tortor tempus. 
               Lorem ipsum dolor sit amet, consectetur  adipiscing 
               elit. Urna, tortor tempus. Lorem ipsum dolor sit amet, 
               consectetur 
              adipiscing elit. Urna, tortor tempus. 
              </p>
            </div>
            <div className='sm:mt-24 sm:text-gray-500 sm:text-center'>
              <small>
                <b>TESTEMUNHOS</b>
              </small>
            </div>
            <div style={{fontFamily:'Volkhov'}} className="relato-font   sm:capitalize sm:text-center sm:font-bold sm:text-3xl sm:mt-4 md:text-5xl sm:text-violet-800">
              <h1>
                Relatos de quem ajudamos
              </h1>
            </div>
            <div>
              <Testimunials />
            </div>
        </div>
    </div>
  )
}

export default Duvidas