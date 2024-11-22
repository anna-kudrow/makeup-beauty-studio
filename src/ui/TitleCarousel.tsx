
type TitleCarouselProp = {
    text: string | undefined;
}

export const TitleCarousel = ({text}: TitleCarouselProp) => {
  return (
    <h2 className='lg:text-xl'>{text}</h2>
  )
}
