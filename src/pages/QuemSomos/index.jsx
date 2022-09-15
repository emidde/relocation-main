import React from 'react'
import './quemsomos.css'
import '../../index.css'
import '../../App.css'
import mariza from '../../img/mariza-estima.png'
import sara from '../../img/sara.jpeg'
import carol from '../../img/carol-souza'
import ana from '../../img/ana-cerezza'
import gethiane from '../../img/gehtiane.jpg'
import juvilaca from '../../img/ju-vilaça.jpeg'
import { Avatar } from '@mui/material'
import rafael from '../../img/rafael.jpeg'
import marizaestima from '../../img/mariza.jpeg'
import renata from '../../img/renata.jpg'
import jean from '../../img/jean.jpg'


const QuemSomos = () => {
  return (
    <div className="quem-somos">
      <div className="container-relocation">
      <div className="title-quem-somos">
                <h1 className='sm:text-4xl md:text-5xl sm:font-bold sm:text-violet-900 sm:mt-12'>
                  Quem somos</h1>
            </div>
            <div className="sm:mt-14 md:flex sm:block">
              <div className="imagem-mariza md:w-1/2">
                  <img src={mariza} alt="" />
              </div>
              <div className="textos-quem-somos md:w-1/2 pt-12">
                <div className="font-semibold text-normal text-gray-500 text-justify">
                <p>A Facility 4u foi criada por <b>MARIZA ESTIMA</b> com o 
                  objetivo de facilitar a sua chegada a Portugal, com a
                   Facility 4u você encontrará vários serviços disponíveis que 
                   irão lhe atender de forma a minimizar o seu trabalho e seu tempo,
                    e sendo os seus olhos aqui do outro lado, e assim ajudando você a 
                    concretizar esse sonho de uma forma simples e segura.</p>
                </div>
                <div style={{fontFamily:'Volkhov'}} className="my-8 sm:text-4xl sm:font-bold text-violet-800">
                  <h2>Nossa Missão</h2>
                </div>
                <div className="font-semibold text-normal text-gray-500 text-justify">
                  <p>
                  A Facility4u ajuda pessoas que estão de mudança 
                  para Portugal, auxiliando na busca do imóvel de acordo
                   com suas necessidades. Além disso, resolvemos partes 
                   documentais, todas as ligações feitas de água, luz,
                    gás,  internet, chips de telefones locais, espera de
                     encomendas, compras iniciais, limpeza, recebimento 
                     de mudança, e acompanhamento do contrato entregue 
                     com NIF (Número de Identificação Fiscal de Portugal).
                  </p>
                </div>
              </div>
            </div>
            <div className="nossos-time text-left mt-24">
                <div className="">
                  <h1 className='text-purple-600 text-3xl font-bold mt-12'>Equipe Lisboa</h1>
                </div>
                <div className="mt-8 img-team md:flex sm:block items-center gap-x-7">
                  <Card img={carol} />
                    <div className="md:text-left sm:text-center sm:mt-6 md:mt-0">
                      <b className='text-purple-700'>Carol Souza</b>
                    </div>
                </div> 

                <div className="mt-8 img-team md:flex sm:block items-center gap-x-7">
                  <Card img={ana} />
                    <div className="md:text-left sm:text-center sm:mt-6 md:mt-0">
                      <b className='text-purple-700'>Anna Cerezza</b>
                    </div>
                </div> 
                <div className="mt-8 img-team md:flex sm:block items-center gap-x-7">
                  <Card img={sara} />
                    <div className="md:text-left sm:text-center sm:mt-6 md:mt-0">
                      <b className='text-purple-700'>Sara Neves</b>
                    </div>
                </div> 
                <div className="">
                  <h1 className='text-purple-600 text-3xl font-bold mt-12'>Equipe Porto</h1>
                </div>
                <div className="mt-8 img-team md:flex sm:block items-center gap-x-7">
                  <Card img={gethiane} />
                    <div className="md:text-left sm:text-center sm:mt-6 md:mt-0">
                      <b className='text-purple-700'>Gethiane</b>
                    </div>
                </div> 

                <div className="mt-8 img-team md:flex sm:block items-center gap-x-7">
                  <Card img={renata} />
                    <div className="md:text-left sm:text-center sm:mt-6 md:mt-0">
                      <b className='text-purple-700'>Renata</b>
                    </div>
                </div> 

                <div className="">
                  <h1 className='text-purple-600 text-3xl font-bold mt-12'>Equipe de Maketing</h1>
                </div>
                <div className="mt-8 img-team md:flex sm:block items-center gap-x-7">
                  <Card img={juvilaca} />
                    <div className="md:text-left sm:text-center sm:mt-6 md:mt-0">
                      <b className='text-purple-700'>Ju Vilaça</b>
                    </div>
                </div> 

                <div className="mt-8 img-team md:flex sm:block items-center gap-x-7">
                  <Card img={jean} />
                    <div className="md:text-left sm:text-center sm:mt-6 md:mt-0">
                      <b className='text-purple-700'>Jean</b>
                    </div>
                </div> 

            </div>
      </div>
    </div>
  )
}

export default QuemSomos;

//função Card é responsavel para redimensionar a imagem dentro do icon "Avatar"

const Card = ({ img }) => {
  return (
      <div className="cards" style={{
      display: "flex", 
      alignItems: "center", 
      flexDirection: 'column'}}>
          <Avatar
          imgProps={{style:{borderRadius: "50%" }}}
          src={img} style={{ 
              width: 150, 
              height: 150, 
              border: '1px solid lightgray', 
              padding: 7
              }}/>
      
      </div>
  )
}