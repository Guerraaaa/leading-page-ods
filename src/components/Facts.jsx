import AtrasoBrasil from "./sub-componentes/AtrasoBrasil"
import SectionSjc from "./sub-componentes/SectionSjc"

function Facts(){
    return(
        <div className='w-full h-full'> 
        <div className='p-20 flex'>
         <div className='w-full flex rounded-lg bg-slate-100 overflow-hidden'>
         <div className='w-full flex flex-col justify-center items-center gap-6 mt-2'>
            <div className=''>
                <h1 className="text-6xl self-start text-slate-500">Você Sabia?</h1>                       
            </div>
            <AtrasoBrasil />
            <tr className='w-full border border-solid text-xl'/>
            
            <SectionSjc />

          </div>
         </div>
      </div>
        </div>
    )
}
export default Facts