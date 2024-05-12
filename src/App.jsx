import Resumo from './components/Resumo';
import Educacao from './components/Educacao';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Saude from './components/Saude';
import Inovacao from './components/Inovacao';
import Facts from './components/Facts'
import CarroselEscolas from './components/CarroselEscolas'
import SectionInovacao from './components/sub-componentes/SectionInovacao'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='w-full h-full'>
      <Hero />
      <tr className=' mt-5 border border-solid'/>
      <Facts />
      <Navbar />
      <div className="flex flex-col overflow-hidden">
        <tr className='border border-solid'/>
        <Saude />
        <tr className='border border-solid'/>
          <Educacao/>
          <tr className='border mt-4 border-solid'/>
          <CarroselEscolas />
        <tr className='border border-solid'/> 
        <Inovacao />
        <tr className='border border-solid'/> 
        <SectionInovacao/>
        <tr className='border border-solid'/>
        <Resumo/>
        <tr className='border border-solid'/>
        <Footer/>
      </div>
    </div>
  );
};

export default App;
