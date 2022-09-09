import React from 'react'
import './quemsomos.css'
import '../../index.css'
import '../../App.css'
import mariza from '../../img/mariza-estima.png'
import sara from '../../img/sara.jpeg'
import carol from '../../img/carol-souza'
import ana from '../../img/ana-cerezza'
import gethiane from '../../img/gethiane.jpeg'
import juvilaca from '../../img/ju-vilaça.jpeg'
import { Avatar } from '@mui/material'
import rafael from '../../img/rafael.jpeg'
import marizaestima from '../../img/mariza.jpeg'


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
            <div className="img-team md:flex sm:block items-center gap-x-7">
                  <Card img={marizaestima} />
                    <div className="">
                      <b className='text-purple-700'>Mariza Estima</b>
                    <p className='font-normal text-gray-500'> 
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis, ex at fringilla auctor, 
                        mi enim mollis turpis, eget imperdiet velit elit vel metus. Praesent id urna eget metus suscipit pharetra.
                        Aenean a imperdiet tortor. Quisque purus ante, consequat quis odio a, semper hendrerit ipsum. Nulla et orci a sem. 
                      </p>
                    </div>
                </div>
                <div className="img-team md:flex sm:block mt-12 items-center gap-x-7">
                  <Card img={rafael} />
                    <div className="">
                      <b className='text-purple-700'>Rafael</b>
                    <p className='font-normal text-gray-500'> 
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis, ex at fringilla auctor, 
                        mi enim mollis turpis, eget imperdiet velit elit vel metus. Praesent id urna eget metus suscipit pharetra.
                        Aenean a imperdiet tortor. Quisque purus ante, consequat quis odio a, semper hendrerit ipsum. Nulla et orci a sem. 
                      </p>
                    </div>
                </div>
                <div className="img-team md:flex sm:block mt-12 items-center gap-x-7">
                  <Card img={sara} />
                    <div className="">
                      <b className='text-purple-700'>Sara</b>
                    <p className='font-normal text-gray-500'> 
                      Sara Neves é estudante de Mestrado em Comunicação em Lisboa e estrategista de Marca.
                      Vive em Portugal desde 2021 e integra o time da Facility para apoiar a vinda de estrangeiros que 
                      busquem se estabelecer em Portugal.
                      </p>
                    </div>
                </div>
                <div className="img-team md:flex sm:block items-center mt-12 gap-x-7">
                  <Card img={ana} />
                  <div className="">
                      <b className='text-purple-700'>Ana Cerezza</b>
                    <p className='font-normal text-gray-500'> 
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis, ex at fringilla auctor, 
                        mi enim mollis turpis, eget imperdiet velit elit vel metus. Praesent id urna eget metus suscipit pharetra.
                        Aenean a imperdiet tortor. Quisque purus ante, consequat quis odio a, semper hendrerit ipsum. Nulla et orci a sem. 
                      </p>
                    </div>
                </div>
                <div className="img-team md:flex sm:block items-center mt-12 gap-x-7">
                  <Card img={juvilaca} />
                  <div className="">
                      <b className='text-purple-700'>Ju Vilaça</b>
                    <p className='font-normal text-gray-500'> 
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis, ex at fringilla auctor, 
                        mi enim mollis turpis, eget imperdiet velit elit vel metus. Praesent id urna eget metus suscipit pharetra.
                        Aenean a imperdiet tortor. Quisque purus ante, consequat quis odio a, semper hendrerit ipsum. Nulla et orci a sem. 
                      </p>
                    </div>
                </div>
                <div className="img-team md:flex sm:block mt-12 items-center gap-x-7">
                  <Card img={carol} />
                  <div className="">
                      <b className='text-purple-700'>Carol</b>
                    <p className='font-normal text-gray-500'> 
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis, ex at fringilla auctor, 
                        mi enim mollis turpis, eget imperdiet velit elit vel metus. Praesent id urna eget metus suscipit pharetra.
                        Aenean a imperdiet tortor. Quisque purus ante, consequat quis odio a, semper hendrerit ipsum. Nulla et orci a sem. 
                      </p>
                    </div>
                </div>
                <div className="img-team md:flex sm:block mt-12 items-center gap-x-7">
                  <Card img={gethiane} />
                  <div className="">
                      <b className='text-purple-700'>Gethiane</b>
                    <p className='font-normal text-gray-500'> 
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis, ex at fringilla auctor, 
                        mi enim mollis turpis, eget imperdiet velit elit vel metus. Praesent id urna eget metus suscipit pharetra.
                        Aenean a imperdiet tortor. Quisque purus ante, consequat quis odio a, semper hendrerit ipsum. Nulla et orci a sem. 
                      </p>
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
