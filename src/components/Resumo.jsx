import { ReactTyped } from "react-typed"
import ImagemFooter from '../components/sub-componentes/imagens-slide/imagem-footer.jpeg'
function Resumo(){
    return(
        <div className='w-full p-10 flex '>
                <div className='w-full flex rounded-lg bg-green-100 overflow-hidden'>
                <div className='w-2/4 h-full flex justify-center items-center '>
                <div className="w-full h-full p-1">
                    <img className='w-full h-full rounded-md object-cover bg-origin-border bg-clip-border' src={ImagemFooter} alt="imagem-ods-saude" />  
                </div>                       
                </div>
                <div className='w-2/4 flex flex-col justify-center items-center gap-2 mt-2'>
                <div className=''>
                    <h1 className="text-6xl self-start text-green-500">Resumo</h1>                       
                </div>
                <div className='p-2 text-green-600'>
                    <ReactTyped 
                    className=" text-sm text-justify z-10 p-15 relative 
                    " 
                    strings={[      
                        "São José dos Campos demonstra um compromisso contínuo com os Objetivos de Desenvolvimento Sustentável, não apenas através de iniciativas como a Linha Verde e a ponte estaiada, mas também através de esforços coordenados em várias áreas, como educação, saúde e igualdade de gênero. Ao integrar princípios de sustentabilidade em seu desenvolvimento urbano e econômico, a cidade está construindo um futuro mais resiliente e equitativo para seus cidadãos, contribuindo assim para o avanço global dos ODS."
        
                    ]} 
                    />
                </div>
                </div>
                </div>
            </div>
    )
}
export default Resumo