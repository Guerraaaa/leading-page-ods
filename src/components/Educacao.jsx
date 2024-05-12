import ImageEducacao from '../components/sub-componentes/imagens-slide/educacao-ods.jpeg'
import { ReactTyped } from 'react-typed'
function Educacao(){
    return(
        <div id="educaco" className='w-full h-full'> 
        <tr className='w-full border-solid border border-red-400 rotate-90'/>
        <div className='w-full h-full p-20 flex -mb-20'>
         <div className='w-full flex rounded-lg bg-red-100 overflow-hidden'>
         <div className='w-2/4 flex flex-col justify-center items-center gap-2 mt-2'>
            <div className=''>
                <h1 className="text-6xl self-start text-red-500">Educação</h1>                       
            </div>
            <div className='p-2 text-red-600'>
                <ReactTyped 
                startWhenVisible
                className=" text-lg text-justify z-10 p-15 relative 
                " 
                strings={[      
                    "4º ODS referente a Educação de Qualidade, a prefeitura da cidade vem se destacando por seu compromisso em oferecer educação de qualidade para todos. Desde o primário até o EJA (Educação de Jovens e Adultos). A cidade também conta com uma vasta opções de Ensino Superior. Está a disposição de seus residentes diversas bibliotecas públicas, como por exemplo a Biblioteca Pública Municipal Cassiano Ricardo."
                ]} 
              />
            </div>
          </div>
          <div className='w-2/4 h-full flex justify-center items-center '>
            <div className="w-full h-full p-1">
              <img className='w-full h-full rounded-md object-cover bg-origin-border bg-clip-border' src={ImageEducacao} alt="imagem-ods-saude" />  
            </div>                       
          </div>
         </div>
      </div>
      </div>
    )
}
export default Educacao