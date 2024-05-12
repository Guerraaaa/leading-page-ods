import ImageSaude from '../components/sub-componentes/imagens-slide/saude-ods.jpg'
import { ReactTyped } from 'react-typed'
function Saude(){
    return(
      <div id='saude' className='w-full h-full'> 
        <tr className='w-full border-solid border border-green-400 rotate-90'/>
        <div className='w-full h-full p-20 flex '>
          <div className='w-full flex rounded-lg bg-green-100 overflow-hidden'>
            <div className='w-2/4 h-full flex mr-5 ml-5 justify-center items-center '>
              <div className="w-full h-full p-1">
                <img className='w-full h-full rounded-md object-cover bg-origin-border bg-clip-border' src={ImageSaude} alt="imagem-ods-saude" />  
              </div>                       
            </div>
          <div className='w-2/4 flex flex-col justify-center items-center gap-2 mt-2'>
            <div className=''>
                <h1 className="text-6xl self-start text-green-500">Saúde</h1>                       
            </div>
            <div className='p-2 text-green-600'>
                <ReactTyped 
                startWhenVisible
                className=" text-md text-justify z-10 p-12 relative
                " 
                strings={[      
                    "3º ODS na qual refere-se à Saúde e bem-estar de seus residentes, está em grande crescente no município. Como dito antes, a cidade vem se preocupando nesta área em questão, realizando diversos programas gratuitos para a prevenção de doenças, incluindo o CEREST, entre outros."
                ]} 
              />
            </div>
          </div>
        </div>
      </div>
      </div>
    )
}
export default Saude