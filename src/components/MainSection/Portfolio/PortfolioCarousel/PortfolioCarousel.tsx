import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

import { type CarouselApi } from "@/components/ui/carousel"
import { useEffect, useState } from 'react';


const backstagePhotoData = [
  {
    src: '/images/portfolio/backstage/agutin.jpg',
    alt: 'фото с Агутиным'
  },
  {
    src: '/images/portfolio/backstage/army.jpg',
    alt: 'фото с концерта Российской армии'
  },
  {
    src: '/images/portfolio/backstage/boyarskii.jpg',
    alt: 'фото с Боярским'
  },
  {
    src: '/images/portfolio/backstage/domisolka.jpg',
    alt: 'фото с концерта Домисолька'
  },
];

export const PortfolioCarousel = () => {

  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  useEffect(() => {
    if (!api) {
      return
    }
    setCurrent(api.selectedScrollSnap())
 
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  return (
        <Carousel className='p-2' setApi={setApi} opts={{loop: true}}>
          <div className='flex justify-between'>
            <h2>Backstage</h2>
            <div className='flex gap-3'>
              <button onClick={()=> api?.scrollTo(current - 1)}><img src="/images/portfolio/gallery-left.svg" alt="перелистнуть влево" /></button>
              <button onClick={()=> api?.scrollTo(current + 1)}><img src="/images/portfolio/gallery-right.svg" alt="перелистнуть вправо" /></button>
            </div>
          </div>
          <CarouselContent>
            {backstagePhotoData.map(photo => (<CarouselItem className='carousel-item' key={photo.alt}><img src={photo.src} alt={photo.alt} /></CarouselItem>))}
          </CarouselContent>
        </Carousel>
  )
}
