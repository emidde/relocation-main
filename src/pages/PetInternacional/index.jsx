import React from 'react'
import { FaCircle, FaPaw } from 'react-icons/fa'
import casinha from '../../img/casinha.webp'

const PetInternacioanal = () => {

    const planejamento = [
        {
            passo: 'Quatro ou cinco meses antes da viagem, começar a verificar preparar a documentação necessária para a partida. De acordo com cada região ver com que antecedência a Vigiagro local está agendando para a retirada do CZI.'
        },
        {
            passo: 'Quanto antes possível da viagem, colocar o seu amigo dentro da caixa de transporte para que possa ir acostumando.'
        },
        {
            passo: 'Uma semana antes da viagem, ir diminuindo a quantidade de alimentos e verificar com o seu veterinário que o animal está em condições de saúde para viajar e ficar atentos com o peso do animal juntamente com a caixa.'
        },
        {
            passo: 'Verificar antes com a companhia aérea se podemos deixar uma peça de roupa velha, de preferência com odor do dono, ou um cobertor ao qual esteja acostumado, para que se sinta mais confortável'
        },
        {
            passo: 'Horas antes da viagem, dar-lhe uma comida ligeira e administrar água. Retirar qualquer tipo de coleira, correias ou roupa para evitar incidentes. Levá-lo a caminhar antes de ir para o aeroporto e antes de fazer o check-in.'
        },
    ]

    const docs = [
        {
            passo:'seu animal precisa ter um microchip – padrão ISO 11784 e ISO 11785'
        },
        {
            passo:'Aplicar a vacina contra a raiva. Mas atenção: a vacina deve ser aplicada após a implantação do chip mesmo que neste último ano ele já tenha tomado a vacina! vacina depois do chip! '
        },
        {
            passo:'Fazer a Sorologia Antirrábica. O sangue só deve ser colhido 30 dias após aplicação da vacina antirrábica; O exame deve ser feito e enviado a um laboratório credenciado para realização desse exame pela União Europeia (consulte o site do Ministério da Agricultura para saber hoje quais são!). Começa então a quarentena de 90 dias! o tempo mínimo para trazer um pet do brasil para Portugal são 4 meses (um mês do intervalo da vacina até a sorologia e os três meses de quarentena.) não adianta querer viajar em 15 dias que o seu pet não vai!'
        },
        {
            passo:'ter a passagem comprada! Quando comprar a sua passagem você deve comprar a do pet e associar à sua! essa etapa é essencial para a próxima'
        },
        {
            passo:'Com o exame de sorologia e a passagem em mãos, é necessário agendar a Vigiagro para que seja emitido o CZI (Certificado Zoos sanitário Internacional). atenção: Algumas unidades da Vigiagro têm pedido para entrar em contato com 60 dias antes da viagem. Planeje! Se informe! esse documento é essencial para o trânsito do animal entre países! sem ele, não embarca.'
        },
        {
            passo:'Obtenha um Certificado de saúde com o veterinário responsável pelo seu pet. Esse certificado precisa ser o modelo exigido pelo Vigilância e precisa ser emitido perto da viagem'
        },
        {
            passo:'Envio de documentos e a Retirada do CZI e comunicação via e-mail para o aeroporto de Lisboa ou Porto avisando a chegada do seu animalzinho, número do voo juntamente com os documentos necessários dele; Separe pelo menos € 50,00 (cinquenta euros) para a taxa de entrada do animal no país; uma dica da Mariza é a caixa de transporte!  As companhias aéreas pedem para que sigam o padrão IATA . então antes de gastar dinheiro, se tiver alguma dúvida, ligue para a companhia e se informe! Para mais informação referente a documentação necessária, recomendamos contactar o seu coordenador na Global Pets ou a Direção Geral Veterinária (DGAV).'
        },
    ]

    const medidas = [
        {
            nome:'comprimento',
            desc:'Desde a ponta do nariz, até à ponta da cauda.'
        },

        {
            nome:'Altura',
            desc:'Desde o chão até à parte mais alta da cabeça, no caso de o animal ter as orelhas em pé, considere a ponta das orelhas.'
        },
        {
            nome:'Largura',
            desc:'Medir a parte mais larga do animal.'
        },
    ]

    const animais = [
        {
            animal:'Buldogue Americano'
        
        },
        {
            
        animal:'Buldogue Americano'
        
        },
        
        {
            animal:'Pitbull Terrier Americano (Pitbull, Pitbull Terrier)'
        
        },
        
        {
        animal:'Staffordshire Terrier Americano'
    },    
            
    {
        animal:'Bull Terrier'
    },    
            {
                
                animal:'Caucasian Owtscharka (Cão Pastor Caucasiano)'
            },
            
            
            {
                animal:'Dogo Argentino'
            },

            {
            
                animal:'Dogue de Bordeaux (Mastim Bordeaux, Mastim Francês)'
            },
            
            
            {
                animal:'Fila Brasileiro'
            },
            
            {
            animal:'Karabash (Coban Köpegi, Cão Pastor da Anatólia)'
        },
            
        
        {
            animal:'Mastim Napolitano'
        },    
            
        
        {
            animal:'Cão de Presa Mallorquin (Ca de Bou)'
        },
            
        {
            
            animal:'Cão de Presa Canario'
        },   
            
        {
            animal:'Rottweiller'
        },    
            
        {
            animal:'Staffordshire Bull Terrier'
        },
        
        {
            animal:'Tosa Inu (Japanese Tosa)'
        },
    ]

  return (
    <div className="container-relocation">
        <div className="text-4xl text-violet-900 pt-8 font-bold">
            <h1>Pet Internacional</h1>
        </div>
        <div className="sm:text-xl md:text-5xl text-violet-900 pt-3">
            <h2><b>Informações importantes</b></h2>
        </div>
        <div>
            <h3 className='flex gap-x-4'>
                <span className='flex gap-x-4 items-center sm:text-2xl md:text-4xl pt-8'><FaPaw color='#6F2185' /><b className='text-violet-800'>Planejar</b></span>
            </h3>
            <p className='font-normal pt-4 text-justify text-base pb-4 text-gray-900'>
            Idealmente o seu animal de estimação deve ser transportado no mesmo avião em que viaja. Se nos consultar com antecedência é possível tirar as suas dúvidas quanto as documentações e processos. Como cada companhia de aviação tem regras próprias, deve iniciar o processo idealmente 4 a 5 meses antes.
            </p>
            <div>
                <ol type='I'>
                    {planejamento.map((item) => (
                        <li className='flex gap-x-2 text-justify md:px-12 py-2 text-normal font-normal text-gray-700'>
                            <p><FaCircle className='sm:pt-2 sm:text-gl md:text-xl'/></p>
                            <p>{item.passo}</p></li>
                    ))}
                </ol>
                <p className='font-normal pt-4 text-justify text-base pb-4 text-gray-900'>
                É importante ter em consideração a idade do animal assim como que alguns dos exames poderão demorar até 3 meses. Adicionalmente, tome em consideração a época do ano em que viaja, (as estações mais quentes não são recomendáveis).
                </p>
            </div>
        </div>
        <div>
            <h3 className='flex gap-x-4'>
                <span className='flex gap-x-4 items-center sm:text-2xl md:text-4xl pt-8'><FaPaw color='#6F2185' /><b className='text-violet-800'>Documentação necessária</b></span>
            </h3>
            <p className='font-normal pt-4 text-justify text-base pb-4 text-gray-900'>
            Cada país tem regras próprias, mas falando de Portugal a documentação base necessária é a seguinte
            </p>
            <div>
                <ol type='I'>
                    {docs.map((item) => (
                        <li className='flex gap-x-2 text-justify md:px-12 py-2 text-normal font-normal text-gray-700'>
                            <p><FaCircle className='sm:pt-2 sm:text-gl md:text-xl'/></p>
                            <p>{item.passo}</p></li>
                    ))}
                </ol>
                <p className='font-normal pt-4 text-justify text-base pb-4 text-gray-900'>
                Para mais informação referente a documentação necessária, recomendamos contactar o seu coordenador na Global Pets ou a Direção Geral Veterinaria (DGAV).                </p>
            </div>
        </div>
        <div>
            <h3 className='flex gap-x-4'>
                <span className='flex gap-x-4 items-center sm:text-2xl md:text-4xl pt-8'><FaPaw color='#6F2185' /><b className='text-violet-800'>Documentação necessária</b></span>
            </h3>
            <p className='font-normal pt-4 text-justify text-base pb-4 text-gray-900'>
            A caixa de transporte do seu animal de estimação tem que cumprir normas específicas, de acordo com a legislação imposta pela IATA (Associação Internacional de Transporte Aéreo), pelo que não a deve adquirir sem nos consultar primeiro.
<br></br><br></br>
​

É fundamental indicar-nos as medidas do seu animal (cão, gato ou outro), para que a tipologia da gaiola escolhida lhe garanta comodidade, segurança, ventilação adequada, espaço para se mover, esticar e dar a volta durante o transporte.
<br></br><br></br>
​

Exemplo de caixa de transporte:      <br></br><br></br>       </p>
            <div style={{textAlign:'-webkit-center'}}>
                <img src={casinha} alt="" />
            </div>
        </div>
        <div>
            <h3 className='flex gap-x-4'>
                <span className='flex gap-x-4 items-center sm:text-2xl md:text-4xl pt-8'><FaPaw color='#6F2185' /><b className='text-violet-800'>Como medir o animal de estimação?</b></span>
            </h3>
            <div className='pt-4'>
                <ol type='I'>
                    {medidas.map((item) => (
                        <li className='flex gap-x-2 text-justify md:px-12 py-2 text-normal font-normal text-gray-700'>
                            <p><FaCircle className='sm:pt-2 sm:text-gl md:text-xl'/></p>
                            <p ><b className='pr-2'>{item.nome}</b>{item.desc}</p>
                            </li>
                    ))}
                </ol>
            </div>

        </div>
        <div>
            <h3 className='flex gap-x-4'>
                <span className='flex gap-x-4 items-center sm:text-2xl md:text-4xl pt-8'><FaPaw color='#6F2185' /><b className='text-violet-800'>Condições de transporte para animais perigosos</b></span>
            </h3>
            <p className='font-normal pt-4 text-justify text-base pb-4 text-gray-900'>
            São várias as raças de cães que podem ser particularmente perigosas, dada a sua agressividade e probabilidade de ataque. Muitas delas foram banidas de vários países ou sujeitas a regulações específicas.

 
<br></br><br></br>
Para garantir a seguranças dos cães e do Staff envolvido no seu manuseamento, os cães na lista abaixo, só podem ser aceites para transporte, como bagagem ou carga, em caixas apropriadas, que preencham os requisitos da Regulação para Animais Vivos da IATA (requerimento 82 - CR82)            </p>
            <div>
                <ol type='I'>
                    {animais.map((item) => (
                        <li className='flex gap-x-2 text-justify md:px-12 py-2 text-normal font-normal text-gray-700'>
                            <p className='sm:pt-2 sm:text-gl md:text-xl'><FaCircle size="10px"/></p>
                            <p>{item.animal}</p></li>
                    ))}
                </ol>
                <p className='font-normal pt-4 text-justify text-base pb-4 text-gray-900'>
                Estes requisitos são alargados a outras raças ou raças cruzadas com caraterísticas físicas semelhantes (cabeça grande, pescoço curto, forte musculatura, maxilares largos, e boca grande), que demonstram um comportamento agressivo ou perigoso.</p>
                <p className="pt-4">
                    <b className=''>Tranquilização</b> / Sedação
                <p className="text-justify font-normal pt-4 text-justify text-base pb-4 text-gray-900">Não é recomendável, uma vez que representa um risco considerável, porque reduz a capacidade de resposta dos animais ao stress durante o transporte. Muitas vezes o uso de tranquilizantes provoca uma baixa da tensão arterial, que pode ser fatal com a pressurização da altitude de voo.<br></br>

A combinação da altitude com os tranquilizantes é potencialmente fatal em animais idosos, com doenças crónicas ou stressados. Se forem usados sedativos, o nome do medicamento, a hora e forma de administração devem ser claramente assinalados na caixa e uma cópia do registo deve ser anexada aos documentos do embarque. Uma prática recomendada para acalmar os animais é escurecer a caixa e colocá-la num local fresco e sossegado, quando o animal estiver fora do avião.</p>
                    </p>

                <p className="pt-4">
                    <b className=''>Retenção</b>
                <p className="text-justify font-normal pt-4 text-justify text-base pb-4 text-gray-900">De forma a evitar qualquer tipo de ferimentos no animal durante o voo, certifique-se que o animal não está a usar açaime, trela ou arnês.</p>
                    </p>           
            </div>
        </div>
        
    </div>
  )
}

export default PetInternacioanal