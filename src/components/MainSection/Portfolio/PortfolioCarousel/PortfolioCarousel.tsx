import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

import { type CarouselApi } from "@/components/ui/carousel"
import { backstagePhotoData, weddingsPhotoData } from '@/lib/photoData';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './PortfolioCarousel.css'
import { CATEGORY } from '@/lib/const';

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
  const params = useParams();
 let currentData;
 let currentTitle;
    if (params.category === 'backstage') { 
      currentData = backstagePhotoData;
      currentTitle = CATEGORY.backstage
    }else if(params.category === 'weddings') { 
      currentData = weddingsPhotoData;
      currentTitle = CATEGORY.weddings;
    }

  return (
        <Carousel className='p-2 pt-6 lg:p-5' setApi={setApi} opts={{loop: true}}>
          <div className='flex justify-between w-full mb-5'>
            <h2 className='lg:text-xl'>{currentTitle}</h2>
            <div className='flex gap-3'>
              <button onClick={()=> api?.scrollTo(current - 1)}><img src="/images/portfolio/gallery-left.svg" alt="перелистнуть влево" /></button>
              <button onClick={()=> api?.scrollTo(current + 1)}><img src="/images/portfolio/gallery-right.svg" alt="перелистнуть вправо" /></button>
            </div>
          </div>
          <CarouselContent>
            {currentData?.map(photo => (<CarouselItem className='md:basis-1/2 lg:basis-1/3 flex justify-center' key={photo.alt}><img className='photo-img' src={photo.src} alt={photo.alt} /></CarouselItem>))}
          </CarouselContent>
        </Carousel>
  )
}
