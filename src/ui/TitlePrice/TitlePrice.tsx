import './TitlePrice.css';

type props = {
  subtitle: string
}

export const TitlePrice = ( {subtitle}: props ) => {
  return (
    <>
        <h1 className='title-price'>Парикмахерские услуги</h1>
        <h2 className='subtitle-price'>{subtitle}</h2>
    </>
  )
}
