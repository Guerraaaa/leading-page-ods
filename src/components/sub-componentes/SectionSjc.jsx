import CountUp from "react-countup"

function SectionSjc() {
    return(
        <div id="sectionSjc" className="mt-4 gap-7 flex flex-col justify-center items-center">
            <h1 className="text-xl self-center text-slate-600">A cidade de: <strong>São José dos Campos - São Paulo</strong></h1>
             <div className='flex'>
                  <CountUp
                  end={1}
                  start={100}
                  duration={5}
                  enableScrollSpy={true}
                  suffix='º lugar'
                  className='text-5xl text-justify m-0 p-0 text-yellow-400 z-10 relative'
                  />
              </div>
              <div className='mb-5'>
                  <p className='text-xl text-slate-500'>em desempenho nas ODS para cidades acima de 500 mil habitantes</p>
              </div>
        </div>
    )
}

export default SectionSjc