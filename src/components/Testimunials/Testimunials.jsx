import React from 'react';
import '../../App.css'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Avatar } from '@mui/material';
import './Testimunials.css'
import '../../index.css'
import { FaStar } from 'react-icons/fa';
import rafajeni from '../../img/rafa-jeni.jpg'
import '../../index.css'
import vinicius from '../../img/vinicius.jpg'
import lais from '../../img/lais.jpg'
import adriano from '../../img/adriano.jpg'
import maru from '../../img/maru.jpg'
import renatarafa from '../../img/renata-rafa.jpg' 
import luan from '../../img/luan.jpg'

const Testimunials = () => {

  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    dots:true,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="content-testimunials"  style={{ display: "flex", justifyContent: "center", marginTop: 50 }}
    >
            <div className='testimunials' style={{width: "50%"}}>
        <Slider {...settings}>
            <div className="textos-testimunials">
            <Card img={rafajeni} />
            <div className='sm:flex sm:justify-center sm:mt-6 sm:text-yellow-500 sm:gap-x-2'>
              <FaStar/>
              <FaStar/>
              <FaStar/>
              <FaStar/>
              <FaStar/>
            </div>
            <p className='text-justify'>
            Há momentos na vida que são oportunidades únicas e sabemos muito bem que devemos aproveitar ao máximo. Uma mudança para outro país é uma delas e algumas vezes precisamos de uma ajuda amiga para conseguir alcançar nossos objetivos. A Facility4U foi essa grande amiga, nos ajudando, orientando e acompanhando nossa jornada até chegarmos aqui. Para nós, seus serviços foram de grande importância e sabemos que sem sua maravilhosa equipe, não teríamos conseguido tudo isso com tanta facilidade e conforto. Só temos agradecimentos, elogios e recomendações a oferecer            </p>
            <p className='name-testimunials  only-name'>
            Rafael e Jeni
            </p>
            <span className='city-testimunials'> </span>
            <div className='font-semibold text-lg sm:mt-4 text-center text-gray-500'>
              <small>
                Arraste para o lado ⇾
              </small>
            </div>
            </div>
            <div className="textos-testimunials">
            <Card img={renatarafa} />
            <div className='sm:flex sm:justify-center sm:mt-6 sm:text-yellow-500 sm:gap-x-2'>
              <FaStar/>
              <FaStar/>
              <FaStar/>
              <FaStar/>
              <FaStar/>
            </div>
            <p className='text-justify'>
            O serviço da Facility foi essencial para chegarmos em Portugal e irmos direto para nossa nova casinha com tudo já funcionando e instalado. Recomendamos e achamos indispensável para quem está planejando a mudança para Portugal.            </p>
            <p className='name-testimunials  only-name'>
            Renata e Rafael
            </p>
            <span className='city-testimunials'> </span>
            <div className='font-semibold text-lg sm:mt-4 text-center text-gray-500'>
              <small>
                Arraste para o lado ⇾
              </small>
            </div>
            </div>
            <div className="textos-testimunials">
            <Card img={maru} />
            <div className='sm:flex sm:justify-center sm:mt-6 sm:text-yellow-500 sm:gap-x-2'>
              <FaStar/>
              <FaStar/>
              <FaStar/>
              <FaStar/>
              <FaStar/>
            </div>
            <p className='text-justify'>
            Queremos agradecer grandemente ao time da Facility4U por todo auxílio no nosso processo de mudança para Portugal. Sem dúvidas foi a melhor decisão contratarmos os serviços dessa excelente empresa, pois desde os mínimos detalhes até achar a nossa casa dos sonhos eles cuidaram para nós. Com certeza recomendamos e achamos indispensável para quem quer se mudar para Portugal.            </p>
            <p className='name-testimunials  only-name'>
              Marua
            </p>
            <span className='city-testimunials'> </span>
            <div className='font-semibold text-lg sm:mt-4 text-center text-gray-500'>
              <small>
                Arraste para o lado ⇾
              </small>
            </div>
            </div>
            <div className="textos-testimunials">
            <Card img={luan} />
            <div className='sm:flex sm:justify-center sm:mt-6 sm:text-yellow-500 sm:gap-x-2'>
              <FaStar/>
              <FaStar/>
              <FaStar/>
              <FaStar/>
              <FaStar/>
            </div>
            <p className='text-justify'>
            Queremos agradecer grandemente ao time da Facility4U por todo auxílio no nosso processo de mudança para Portugal. Sem dúvidas foi a melhor decisão contratarmos os serviços dessa excelente empresa, pois desde os mínimos detalhes até achar a nossa casa dos sonhos eles cuidaram para nós. Com certeza recomendamos e achamos indispensável para quem quer se mudar para Portugal.            </p>
            <p className='name-testimunials  only-name'>
              Rafael e Jeni
            </p>
            <span className='city-testimunials'> </span>
            <div className='font-semibold text-lg sm:mt-4 text-center text-gray-500'>
              <small>
                Arraste para o lado ⇾
              </small>
            </div>
            </div>
            <div className="textos-testimunials">
            <Card img={lais} />
            <div className='sm:flex sm:justify-center sm:mt-6 sm:text-yellow-500 sm:gap-x-2'>
              <FaStar/>
              <FaStar/>
              <FaStar/>
              <FaStar/>
              <FaStar/>
            </div>
            <p className='text-justify'>
Contar com os serviços da Facility 4u foi nossa melhor decisão nesse processo de mudança para Portugal. Não tem o que pague chegar aqui e ir direto pra nossa casa prontinha para morar. A Mariza e toda sua equipe são super atenciosos, na primeira semana já encontraram o nosso apartamento, negociaram e fecharam nosso contrato. Só tenho que agradecer imensamente por todo suporte que nos prestaram. Indico a todos que vêm pra Portugal, contratarem o serviço de relocation com a @facility_4u. 🥰  </p>          <p className='name-testimunials  only-name'>
              Laís
            </p>
            <span className='city-testimunials'> </span>
            <div className='font-semibold text-lg sm:mt-4 text-center text-gray-500'>
              <small>
                Arraste para o lado ⇾
              </small>
            </div>
            </div>
            <div className="textos-testimunials">
            <Card img={adriano} />
            <div className='sm:flex sm:justify-center sm:mt-6 sm:text-yellow-500 sm:gap-x-2'>
              <FaStar/>
              <FaStar/>
              <FaStar/>
              <FaStar/>
              <FaStar/>
            </div>
            <p className='text-justify'>
            Chegar em um país onde você não conhece e se adaptar não é algo simples. Então a importância de se preparar o máximo possível para esse momento. O serviço da Facility4U foi essencial para uma transição mais tranquila. Chegamos em Portugal com nossa casa preparada. Toda parte burocrática resolvida. E principalmente com o conforto garantido. Isso me ajudou muito a focar em resolver outros problemas em relação a imigração.
Recomendo muito o serviço da Facility4U.
Honestidade e transparência.   </p>         <p className='name-testimunials  only-name'>
              Adriano
            </p>
            <span className='city-testimunials'> </span>
            <div className='font-semibold text-lg sm:mt-4 text-center text-gray-500'>
              <small>
                Arraste para o lado ⇾
              </small>
            </div>
            </div>
            <div className="textos-testimunials">
            <Card img={vinicius} />
            <div className='sm:flex sm:justify-center sm:mt-6 sm:text-yellow-500 sm:gap-x-2'>
              <FaStar/>
              <FaStar/>
              <FaStar/>
              <FaStar/>
              <FaStar/>
            </div>
            <p className='text-justify'>
            Agradeço muito a todo time da Facility4U envolvido em meu processo de deslocamento para Portugal.
Sem dúvida alguma recomendo muito este tipo de apoio por pessoas com um grande conhecimento já na região como esta equipe têm.
O processo foi muito bem detalhado, fotos, videos, visitas, explicações sobre a questão demográfica e detalhes minuciosos que muitas vezes quem vêm de fora não sabe.
Com o apoio deles consegui um excelente apartamento em Amora com uma vista espetacular neste verão!
Muito obrigado Mariza e parceiros da Facility4U!!!</p>
            <p className='name-testimunials  only-name'>
              Vinícius
            </p>
            <span className='city-testimunials'> </span>
            <div className='font-semibold text-lg sm:mt-4 text-center text-gray-500'>
              <small>
                Arraste para o lado ⇾
              </small>
            </div>
            </div>
            
        </Slider>
    </div>
    </div>
  );
};

const Card = ({ img }) => {
    return (
        <div className="cards" style={{
        display: "flex", 
        alignItems: "center", 
        flexDirection: 'column'}}>
            <Avatar
            imgProps={{style:{borderRadius: "50%" }}}
            src={img} style={{ 
                width: 200, 
                height: 200, 
                border: '1px solid lightgray', 
                padding: 7
                }}/>
        
        </div>
    )
}

export default Testimunials