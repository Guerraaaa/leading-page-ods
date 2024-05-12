import VideoLinhaVerde from '../sub-componentes/imagens-slide/video-linha-verde.mp4'

function SectionInovacao(){
    return(
        <div className='flex p-10 flex-col w-full justify-center items-center mb-5'>
            <h2 className=' text-2xl text-orange-600 text-justify'>
                A linha verde em 
                <strong> São José dos Campos </strong>
            </h2>
            <div className='w-full flex justify-center items-center gap-2'>
                <video autoPlay muted loop className='border border-gray-200 rounded-sm' alt="onibus-linha-verde">
                    <source src={VideoLinhaVerde} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    )
}

export default SectionInovacao