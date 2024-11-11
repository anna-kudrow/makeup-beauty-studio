import { TitlePrice } from '@/ui/TitlePrice/TitlePrice';
import './HairServicePrice.css';

export const HairServicePrice = () => {
  return (
    <div className='price-box'> 
      <TitlePrice subtitle='Мастер Светлана'/>   
      <div className='price-table'>
        <span className='price-table__length length1'>длина 1 </span>
        <span className='price-table__length'>длина 2 </span>
        <span className='price-table__length'>длина 3 </span>
        <span className='price-table__length'>длина 4 </span>
        <p className='price-table__service'>Мытье, стрижка, укладка</p>
        <span className='price-table__amount'>2500</span>
        <span className='price-table__amount'>3000</span>
        <span className='price-table__amount'>3500</span>
        <span className='price-table__amount'>4500</span>
         <p className='price-table__service'>Мытье, стрижка , сушка</p>
        <span className='price-table__amount'>2000</span>
        <span className='price-table__amount'>2500</span>
        <span className='price-table__amount'>2800</span>
        <span className='price-table__amount'>4000</span>
         <p className='price-table__service'>Мытье, укладка</p>
        <span className='price-table__amount'>1500</span>
        <span className='price-table__amount'>1500</span>
        <span className='price-table__amount'>1800</span>
        <span className='price-table__amount'>2500</span>
         <p className='price-table__service'>Мытье, сушка</p>
        <span className='price-table__amount'>800</span>
        <span className='price-table__amount'>800</span>
        <span className='price-table__amount'>800</span>
        <span className='price-table__amount'>1000</span>
         <p className='price-table__service'>Укладка на бигуди,<br /> расческу-бигуди</p>
        <span className='price-table__amount'>2500</span>
        <span className='price-table__amount'>2500</span>
        <span className='price-table__amount'>2500</span>
        <span className='price-table__amount'>2500</span>
      </div>
    </div>
  )
}
