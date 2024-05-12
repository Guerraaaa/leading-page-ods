import CountUp from "react-countup"
function AtrasoBrasil(){
    return(
        <div className='flex flex-col gap-6'>
        <h2 className='text-3xl text-slate-600'>Brasil está atrasado em mais de:</h2>
        <div className=' w-full h-full rounded-md'>
          <div className='flex flex-col items-center gap-6'>
              <div className='flex'>
                  <CountUp
                  end={80}
                  start={0}
                  enableScrollSpy={true}
                  duration={5}
                  suffix='%'
                  className='text-6xl text-justify m-0 p-0 text-yellow-400 z-10 relative'
                  />
              </div>
                  <p className='text-xl text-slate-500'>das metas ODS estabelecidas pela ONU</p>
              </div>
          </div>
      </div>
    )
}
export default AtrasoBrasil