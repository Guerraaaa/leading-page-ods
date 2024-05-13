import { ReactTyped } from "react-typed"
// import ImageEducacao from '../components/sub-componentes/imagens-slide/educacao-ods.jpeg'
function Hero(){
    return(
    <div className="w-full h-3/4 top-0">
      <div id="hero-section" className="w-full h-full p-14 overflow-hidden bg-gradient-radial-green-blue
          bg-center
          bg-[url('./components/sub-componentes/imagens-slide/ods-hero-section.png')] bg-no-repeat
          bg-cover bg-origin-border bg-clip-border
          ">
          <div className="flex justify-center items-center">
            <div className="w-full overflow-hidden h-1/2 flex justify-center items-start">
                <div className="flex flex-col w-1/2 justify-center items-center backdrop-blur-sm">
                  <div className="flex h-1/2 backdrop-blur-sm">
                    <ReactTyped 
                    className="text-justify z-10 p-12 relative sm:text-xl 
                    md:text-2xl lg:text-4xl xl:text-6xl 2xl:text-8xl underline decoration-green-500
                    " 
                    showCursor={false}
                    startWhenVisible  
                    strings={[      
                      "Objetivos de Desenvolvimento Sustentável.",
                    ]} 
                    typeSpeed={20} 
                    />
                  </div>
                  <div className="flex h-full p-9 w-full backdrop-blur-sm">
                    <ReactTyped 
                    className="text-md text-justify z-10 p-2
                    " 
                    strings={[      
                      "Os ODS representam um plano de ação global para eliminar a pobreza extrema e a fome, oferecer educação de qualidade ao longo da vida para todos, proteger o planeta e promover sociedades pacíficas e inclusivas até 2030."
                    ]} 
                    startDelay={20}
                    typeSpeed={10} 
                    />

                  </div>
                </div>
                <div className="
                h-screen w-full relative
                flex justify-center ">
                    
                </div>
            </div>
          </div>
        </div>
      </div>
    )
}
export default Hero