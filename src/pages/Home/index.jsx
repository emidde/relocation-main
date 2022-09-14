import React from 'react'
import ReactPlayer from 'react-player'
import './home.css'
import '../../App.css'
import girltravel from '../../img/girl-travel.png'
import dogs from '../../img/dogs-pet.png'
import bed from '../../img/pet-cama.png'
import kit from '../../img/kit-pet.png'
import house from '../../img/house-pet.png'
import logotipo from '../../img/logotipo.png'
import {FaBuilding, FaDog, FaHouseUser, FaLocationArrow, FaTools} from 'react-icons/fa'
import porto from '../../img/porto.jpg'
import videoplay from '../../img/video-facility.mp4'
import Testimunials from '../../components/Testimunials/Testimunials'
import lisboa from '../../img/lisboa.jpg'
import braga from '../../img/braga.jpg'
import '../../index.css'
import SlideDogs from '../../components/Slides/SlidesDogs'
import imagemfamilia from '../../img/image-family.png'
import {HiIdentification} from 'react-icons/hi'


const Home = () => {
  
  return (
    <div className="home dark:bg-white">
      <div className="container-relocation">
      <div className="container-relocation">
        <main>
        <div className="md:flex sm:block ">
        <div className="md:w-8/12 sl:w-full ">
            <div className="text-small">
                <b>
                    relocation é com a facility 4u
                </b>
            </div>
            <div className="title-big">
                <h1 className='sm:text-7xl'>Sua nova vida em <span className='portugal'>Portugal </span>
                 começa aqui</h1>
            </div>
            <div className="desc-header">
        <p>A A Facility4u ajuda pessoas que estão de mudança para 
          Portugal de maneira legal, auxiliando na busca do imóvel de
           acordo com suas necessidades. Além disso, resolvemos todas as
            ligações feitas de água, luz, gás, internet e chips de telefones
             locais, fazemos também pet transport, espera de encomendas, compras
              iniciais, 
          limpeza, acompanhamento em todos os processos e auxílio em 
          documentos locais.</p> 
        </div>
        <div className="buttons-header md:flex sm:flex sm:justify-start">
            <div className="button-saiba-mais">
                <button>Saiba mais</button>
            </div>
            <div className="button-fale-conosco">
                <button>Fale conosco</button>
            </div>
        </div>
        </div>
        <div className="">
            <div className="imagem-familia  md:w-7/12 md:h-fit md:block  sm:hidden">
                <img src={imagemfamilia} alt="" />
            </div>
        </div>
        </div>
    </main>
        </div>
          <div className="w-full md:flex md:items-center sm:mt-20">
            <div className="md:w-1/2 sm:w-9/12">
              <div className="girl-travel">
                <img src={girltravel} alt="" />
              </div>
            </div>
            <div className="md:w-1/2 sm:w-full">
              <div className="trabalha-ti sm:text-2xl sm:mt-8 md:mt-0 sm:font-bold sm:leading-normal">
                  <h1 className=''>Trabalha com T.I e quer imigrar para Portugal?</h1>
              </div>
              <div className="button-saiba-mais">
                <button>Saiba mais</button>
              </div>
            </div>
          </div>
          <div className="dogs text-center" style={{textAlign:'-moz-center'}} id='pets-link'>
            <img  src={dogs} alt="" />
          </div>
        <div className="dogs-wrap md:px-10 sm:px-9 sm:m-2">
        <div className="text-pet">
            <div className="title-pet font-semibold sm:pt-10 sm:font-semibold sm:text-base sm:leading-normal">
            <p>Preocupado em trazer seu pet?</p>
              </div>            
              <div className="text-pet font-regular text-stone-500 sm:text-xsm sm:pt-2">
                <p>
                Facility 4u cuida do transporte dos seus animais de estimação, do aeroporto de chegada até sua nova morada em total segurança em Portugal. 
<br></br><br></br>
Transportar animais de estimação pode ser um processo complexo devido às exigências das companhias aéreas, a questões burocráticas e à diversidade de legislação aplicável em cada país.
<br></br><br></br>
A experiência da nossa equipa e minha permitirá agilizar o processo, porque temos animais e trouxemos os nossos, lhes disponibilizamos um processo onde podem tirar as suas dúvidas e fazer um check list do que já foi feito e do que falta ainda com as datas na ordem, processo personalizado, com poupança de custos para os nossos clientes, porque sabendo o passo a passo lhe trará mais conforto. Com isso tem a garantia que estes membros tão especiais da família se reúnem rapidamente consigo no destino, com todo o conforto e segurança.
<br></br><br></br>
Já deixamos pronto o kit pet com ração de sua preferência, comedouro, caminha, coleira, caixinha de areia e outros utensílios que precisar
                </p>
              </div>
              <div className="button-saiba-mais   dogsButton sm:pb-10" style={{textAlign:'-moz-center'}}>
                <CustomLink href="/transporte-pet-internacional">
                <button className='text-sm flex gap-x-2' ><FaDog className='sm:hidden md:block' size="20px"/> Transporte Pet Internacional</button>
                </CustomLink>
              </div>
          </div>
        </div>
        <div className="slideDogs md:hidden">
          <SlideDogs />
        </div>
        <div className="kit-pet md:flex sm:hidden">
          <div className="pet" >
            <img src={bed} alt=""  />
          </div>
          <div className="pet md:mt-12 pet-casinha" style={{textAlign: '-web-center'}}>
            <img src={kit} alt=""/>
          </div>
          <div className="pet" style={{float: 'right'}}>
            <img src={house} alt="" style={{float: 'right'}} />
          </div>
        </div>
        <div className="beneficios mt-24" id='beneficios-house'>
          <div className="title-benefiicios">
            <h1>Benefícios em ter a <img className='my-1.5' src={logotipo} alt="" /></h1>
            </div>
            <div className="cards-beneficios  md:flex md:w-full sm:block ">
                <div className="md:w-3/12 sm:w-ful">
                <div className="card-beneficios md:p-8 sm:px-16 ">
                  <div className="cardIcon" style={{textAlign:'-moz-center'}}>
                  <FaBuilding color='#6F2185' size='65px' />
                  </div>
                <div className="title-card">
                <b>Relocation</b>
                </div>
              <div className="text-card">
              <p>
              Seleciono, visito, registro, preparo relatórios, cuido do contrato e da ligação de serviço de seu novo lar em Portugal.

              </p>
              </div>
              </div>
              <div className='sm:mt-8 md:mt-14'>
                <h1 className='font-semibold text-7xl text-gray-400'>61</h1>
                <h2 className='font-semibold text-xl text-gray-400'>Famílias Realocadas</h2>
              </div>
                </div>
                  <div className="md:w-3/12 sm:w-ful">
                <div className="card-beneficios  card-active   sm:mx-8  md:mx-2 md:p-8 sm:p-8 sm:shadow-lg" >
                  <div className="cardIcon" style={{textAlign:'-moz-center'}}>
                  < HiIdentification color='#6F2185' size='65px' />
                  </div>
                <div className="title-card">
                <b>Legalização</b>
                </div>
              <div className="text-card">
              <p>
              Retirada de NIF(CPF português), abertura de conta em banco, abertura de empresa e procuração de contratos
              </p>
              </div>
              </div>
              <div className='sm:mt-12 md:mt-8'>
                <h1 className='font-semibold text-7xl text-gray-400'>109+</h1>
                <h2 className='font-semibold text-xl text-gray-400'>Documentos solicitados</h2>
              </div>
                </div>
                <div className="md:w-3/12 sm:w-ful">
                <div className="card-beneficios   md:p-8 sm:p-8" >
                  <div className="cardIcon" style={{textAlign:'-moz-center'}}>
                  <FaTools color='#6F2185' size='65px' />
                  </div>
                <div className="title-card">
                <b>Serviços</b>
                </div>
              <p>
              Pirmeiras compras, primeira faxina, recebimento de compras, contratação de serviços para residência.
              </p>
              </div>
              <div className='sm:mt-2 md:mt-14'>
                <h1 className='font-semibold text-7xl text-gray-400'>248+</h1>
                <h2 className='font-semibold text-xl text-gray-400'>Visitas realizadas</h2>
              </div>
                </div>
                <div className="md:w-3/12 sm:w-ful">
                <div className="card-beneficios   md:p-8 sm:p-8">
                  <div className="cardIcon" style={{textAlign:'-moz-center'}}>
                  <FaHouseUser color='#6F2185' size='65px' />
                  </div>
                <div className="title-card">
                <b>Compra de imóveis</b>
                </div>
              <div className="text-card">
              <p>
              Seleciono, visito, registro, preparo relatórios, negocio e acompanho vistoria de compra de imóveis em Portugal.
              </p>
              </div>
              </div>
              <div className='sm:mt-2 md:mt-14'>
                <h1 className='font-semibold text-7xl text-gray-400'>16</h1>
                <h2 className='font-semibold text-xl text-gray-400'>Cidades Atendidas</h2>
              </div>
                </div>
            </div>
        </div>
        <div className="best-places">
          <div className="text-places">
          <div className="logotipo-place">
          <small>
            Facility4u
          </small>
          </div>
          <h2 className="title-best-place md:text-4xl sm:text-3xl sm:leading-normal ">
            Melhores lugares de Portugal
          </h2>
          </div>
          <div style={{textAlign:'-moz-center'}} className="places-area md:flex md:items-center md:justify-around sm:block sm:text-center ">
            <div className="place">
              <div className="img-place">
                <img src={porto} alt="" />
              </div>
              <div className="informations-place">
                <div className="name-link">
                  <div className="name-place md:text-base sm:text-sm">
                    <p>Porto</p>
                  </div>
                <div className="link-place sm:text-sm">
                  <CustomLink>Saiba mais</CustomLink>
                </div>
                </div>
                <div className="location sm:pb-5">
                  <FaLocationArrow />
                  <p className='sm:text-xs'>Portugal</p>
                </div>
              </div>
            </div>
            

            <div className="place">
              <div className="img-place">
                <img src={braga} alt="" />
              </div>
              <div className="informations-place">
                <div className="name-link">
                  <div className="name-place md:text-base sm:text-sm">
                    <p>Braga</p>
                  </div>
                <div className="link-place sm:text-sm">
                  <CustomLink>Saiba mais</CustomLink>
                </div>
                </div>
                <div className="location sm:pb-5">
                  <FaLocationArrow />
                  <p className='sm:text-xs'>Portugal</p>
                </div>
              </div>
            </div>

              <div className="place">
              <div className="img-place">
                <img src={lisboa} alt="" />
              </div>
              <div className="informations-place">
                <div className="name-link">
                  <div className="name-place md:text-base sm:text-sm">
                    <p>Lisboa</p>
                  </div>
                <div className="link-place sm:text-sm">
                  <CustomLink>Saiba mais</CustomLink>
                </div>
                </div>
                <div className="location sm:pb-5">
                  <FaLocationArrow />
                  <p className='sm:text-xs'>Portugal</p>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div className="video-facility">
          <div className="logotipo-place">
            <small>Fácil e Rápido</small>
          </div>
          <div className="video-text sm:text-3xl sm:font-bold md:text-4xl">
            <h2>Veja como é o processo</h2>
          </div>
          <div className="video-player sm:mt-12">
            <ReactPlayer
            muted={true}
            controls={true}
            playing={true}
            loop={true}
            pip={false}
            stopOnUnmount={false}
            width='100%'
            url={videoplay} />
          </div>
        </div>
        <div className="testemunhos-area md:mt-24">
          <div className="w-full md:flex sm:block md:items-center">
            <div className="md:w-1/2 sm:w-full">
              <div className="small-testemunhos">
                <small>Testemunhos</small>
              </div>
              <div className="title-testemunhos">
                <h3>
                  O que os nossos clientes dizem?
                </h3>
              </div>
              <div className="testemunhos-wrap">
                <Testimunials />
              </div>
            </div>
            <div className="md:w-1/2 md:ml-12 sm:w-full">
            <div className="text-testemunhos-two sm:pt-20">
              <p>Na Facility 4u você encontrará vários serviços disponíveis que irão lhe atender de forma a minimizar o
             seu trabalho e seu tempo, e sendo os seus olhos aqui 
            do outro lado, e assim ajudando você a concretizar esse sonho de uma forma simples e segura.</p>
            </div>
            </div>
          </div>
        </div>
      </div> 

    </div>
  )
}

export default Home;

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

var docWidth = document.documentElement.offsetWidth;

[].forEach.call(
  document.querySelectorAll('*'),
  function(el) {
    if (el.offsetWidth > docWidth) {
      console.log(el);
    }
  }
);