import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


const backstagePhotoData = [
  {
    src: '/images/backstage/agutin.jpg',
    alt: 'фото с Агутиным'
  },
  {
    src: '/images/backstage/army.jpg',
    alt: 'фото с концерта Российской армии'
  },
  {
    src: '/images/backstage/boyarskii.jpg',
    alt: 'фото с Боярским'
  },
  {
    src: '/images/backstage/domisolka.jpg',
    alt: 'фото с концерта Домисолька'
  },
];

export const PortfolioCarousel = () => {
  return (
        <Carousel>
          <CarouselContent>
            {backstagePhotoData.map(photo => (<CarouselItem><img src={photo.src} alt={photo.alt} /></CarouselItem>))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
  )
}
