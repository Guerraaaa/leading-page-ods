import ImageInovacao from '../components/sub-componentes/imagens-slide/inovacao-ods.jpg'
import { ReactTyped } from 'react-typed'
function Inovacao(){
    return(
      <div id='inovacao' className='w-full p-20 flex '>
          <div className='w-full flex rounded-lg bg-orange-100 overflow-hidden'>
          <div className='w-2/4 h-full flex justify-center items-center '>
            <div className="w-full h-full p-1">
              <img className='w-full h-full rounded-md object-cover bg-origin-border bg-clip-border' src={ImageInovacao} alt="imagem-ods-saude" />  
            </div>                       
          </div>
          <div className='w-2/4 flex flex-col justify-center items-center gap-2 mt-2'>
            <div className=''>
                <h1 className="text-6xl self-start text-orange-500">Inovação</h1>                       
            </div>
            <div className='p-2 text-orange-600'>
                <ReactTyped 
                startWhenVisible
                className=" text-lg text-justify z-10 p-15 relative 
                " 
                strings={[      
                    "9º ODS que refere-se a Indústria, inovação e infraestrutura, São José dos Campos inseriu seu projeto mais almejado chamado “Linha Verde”. A Linha Verde é uma via expressa que percorre grande parte da cidade, além de ter a energia totalmente renovável, é o meio de transporte mais rápido que circula pelo município. É um meio de transporte de fácil acesso, porém, há algumas contradições, pois a via não abrange toda a cidade, tem sua partida no bairro Campo dos Alemães e vai até a região central de São José dos Campos."
                ]} 
              />
            </div>
          </div>
          </div>
      </div>
    )
}
export default Inovacao