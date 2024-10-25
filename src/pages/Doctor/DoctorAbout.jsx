
import { formateDate } from '../../utils/formateDate'

const DoctorAbout = () => {
  return (
    <div>
      <div>
        <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2'>About of <span className='text-irisBlueColor font-bold text-[24px] leading-9'>Elvin Joy</span></h3>
        <p className="text_para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi vel magnam quibusdam accusamus, aut at atque aliquam adipisci minima blanditiis totam. Explicabo iusto corporis, quibusdam voluptatibus saepe laboriosam voluptates, placeat quod expedita culpa vero in rerum ex necessitatibus velit accusantium. Debitis reprehenderit laborum dolores totam distinctio, aut quae optio explicabo.</p>
      </div>

      <div className='mt-12'>
        <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold'>Education</h3>

        <ul className='pt-4 md:p-5'>
            <li className='flex flex-col sm:flex-row sm:justify-between sm:item-end md:gap-5 mb-[30px]'>
                <div>
                    <span className='text-irisBlueColor text-[15px] leading-6 font-semibold '>{formateDate("9-013-2015")} - {formateDate("12-04-2020")}</span>
                    <p className='text-[15px] leading-6 font-medium text-textColor'>PHD in Surgeon</p>
                </div>
                <p className='text-[14px] leading-5 font-medium text-textColor'>New Appollo Hospital, New York.</p>
            </li>
            <li className='flex flex-col sm:flex-row sm:justify-between sm:item-end md:gap-5 mb-[30px]'>
                <div>
                    <span className='text-irisBlueColor text-[15px] leading-6 font-semibold '>{formateDate("12-04-2010")} - {formateDate("12-04-2015")}</span>
                    <p className='text-[16px] leading-6 font-medium text-textColor'>PHD in Surgeon</p>
                </div>
                <p className='text-[14px] leading-5 font-medium text-textColor'>New Appollo Hospital, New York.</p>
            </li>
        </ul>
      </div>

      <div className='mt-12'>
      <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold'>Experience</h3>

      <ul className='grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5'>
        <li className='p-4 rounded bg-[#fff9ea]'>
            <span className='text-yellowColor text-[15px] leading-6 font-semibold'>{formateDate("9-013-2015")} - {formateDate("12-04-2020")}</span>
            <p className='text-[16px] leading-6 font-medium text-textColor'>Sr. Surgeon</p>
            <p className='text-[14px] leading-5 font-medium text-textColor'>New Appollo Hospital, New York.</p>
        </li>
        <li className='p-4 rounded bg-[#fff9ea]'>
            <span className='text-yellowColor text-[15px] leading-6 font-semibold'>{formateDate("9-013-2015")} - {formateDate("12-04-2020")}</span>
            <p className='text-[16px] leading-6 font-medium text-textColor'>Sr. Surgeon</p>
            <p className='text-[14px] leading-5 font-medium text-textColor'>New Appollo Hospital, New York.</p>
        </li>
      </ul>
      </div>
    </div>
  )
}

export default DoctorAbout
