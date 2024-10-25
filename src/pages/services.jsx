
import { Services } from '../assets/data/services';
import ServiceCard from '../components/services/serviceCard';

const services = () => {
  return (
    <section>
      <div className='container'>
      <div className='grid grid-cols-1 md:grid-cols2 lg:grid-cols-3 gap-5 lg:gap-[30px]'>
      {Services.map((item, index)=>
        <ServiceCard item={item} index={index} key={index} />
    )}
    </div>
      </div>
    </section>
  )
}

export default services
