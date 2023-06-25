import Breadcrumb from '../components/Breadcrumb';
import { Globe } from '../components/Globe';
import {useState} from "react"
const Map = () => {
  const [country, setCountry] = useState("")
  const count = (data: string) => {
    setCountry(data)
  }
  return (
    <>
      <Breadcrumb pageName="Mapa" />


      <div className="flex flex-col items-center justify-center overflow-hidden col-span-12 rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
        <h3 className='mb-4'>Pais Seleccionado: {country}</h3>
        <Globe count={count}/>
      </div>
    </>
  );
};

export default Map;
